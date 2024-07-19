import { HopbasketError, HopbasketMenuUpsertAccepted } from '../contracts/hopbasket';
import { toHopbasketMenu } from '../menu-sync/hopbasket-mapper';
import type { Menu } from '../menu-sync/menu';
import { PartnerError, type FetchLike } from './errors';

export { PartnerError, isRetryableStatus, type FetchLike } from './errors';

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
