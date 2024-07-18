import { PlatefastCatalogAccepted, PlatefastError } from '../contracts/platefast';
import type { Menu } from '../menu-sync/menu';
import { toPlatefastCatalog } from '../menu-sync/platefast-mapper';
import { PartnerError, type FetchLike } from './errors';

export interface PlatefastClientOptions {
  baseUrl: string;
  apiKey: string;
  fetch: FetchLike;
}

/** Outbound calls to Platefast, partner API version 1. One catalog per location, replaced whole on every sync. */
export class PlatefastClient {
  constructor(private readonly options: PlatefastClientOptions) {}

  async upsertCatalog(locationId: string, menu: Menu): Promise<PlatefastCatalogAccepted> {
    const res = await this.options.fetch(`${this.options.baseUrl}/catalog`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': this.options.apiKey },
      body: JSON.stringify(toPlatefastCatalog(locationId, menu)),
    });
    return parseCatalogUpsert(res.status, await res.json());
  }
}

/** Exported so the contract tests can feed it a recorded response. */
export function parseCatalogUpsert(status: number, body: unknown): PlatefastCatalogAccepted {
  if (status === 200 || status === 201) return PlatefastCatalogAccepted.parse(body);
  const parsed = PlatefastError.safeParse(body);
  const title = parsed.success ? parsed.data.title : `unparseable error body for status ${status}`;
  const detail = parsed.success && parsed.data.detail ? `: ${parsed.data.detail}` : '';
  throw new PartnerError('platefast', status, `http_${status}`, `${title}${detail}`);
}
