import { HopbasketError, HopbasketMenuUpsertAccepted } from '../contracts/hopbasket';
import { toHopbasketMenu } from '../menu-sync/hopbasket-mapper';
import type { Menu } from '../menu-sync/menu';

export interface FetchLike {
  (
    url: string,
    init: { method: string; headers: Record<string, string>; body?: string },
  ): Promise<{
    status: number;
    json(): Promise<unknown>;
  }>;
}

export class PartnerError extends Error {
  constructor(
    readonly partner: string,
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(`${partner} ${status} ${code}: ${message}`);
  }

  /** The outbox reads this: a 4xx other than 408, 425 and 429 will not get better on retry. */
  get retryable(): boolean {
    return isRetryableStatus(this.status);
  }
}

export function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 425 || status === 429 || status >= 500;
}

export interface HopbasketClientOptions {
  baseUrl: string;
  apiKey: string;
  fetch: FetchLike;
}

/** Outbound calls to Hopbasket, API version 1. */
export class HopbasketClient {
  constructor(private readonly options: HopbasketClientOptions) {}

  async upsertMenu(storeId: string, menu: Menu): Promise<HopbasketMenuUpsertAccepted> {
    const res = await this.options.fetch(`${this.options.baseUrl}/stores/${encodeURIComponent(storeId)}/menu`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${this.options.apiKey}` },
      body: JSON.stringify(toHopbasketMenu(storeId, menu)),
    });
    return parseMenuUpsert(res.status, await res.json());
  }
}

/** Exported so the contract tests can feed it a recorded response. */
export function parseMenuUpsert(status: number, body: unknown): HopbasketMenuUpsertAccepted {
  if (status === 200 || status === 202) return HopbasketMenuUpsertAccepted.parse(body);
  const parsed = HopbasketError.safeParse(body);
  const code = parsed.success ? parsed.data.error.code : 'unknown';
  const message = parsed.success ? parsed.data.error.message : `unparseable error body for status ${status}`;
  throw new PartnerError('hopbasket', status, code, message);
}
