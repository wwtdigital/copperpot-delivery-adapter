import type { Outbox } from '../outbox/outbox';
import type { Menu } from './menu';

export const PARTNERS = ['hopbasket', 'platefast'] as const;
export type Partner = (typeof PARTNERS)[number];

export const isPartner = (value: string): value is Partner => (PARTNERS as readonly string[]).includes(value);

export interface MenuUpsertJob {
  partner: Partner;
  storeId: string;
  menu: Menu;
}

/**
 * Menu sync is a fan-out: one outbox job per store per partner, so a
 * store the partner rejects does not hold up the others, and a retry
 * re-sends one store's menu, not the whole fleet's.
 */
export class MenuSyncService {
  constructor(private readonly outbox: Outbox) {}

  requestSync(partner: Partner, storeIds: string[], menu: Menu): string[] {
    const unique = [...new Set(storeIds)];
    return unique.map((storeId) =>
      this.outbox.enqueue('menu.upsert', { partner, storeId, menu } satisfies MenuUpsertJob),
    );
  }
}
