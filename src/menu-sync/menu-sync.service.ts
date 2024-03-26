import type { Outbox } from '../outbox/outbox';
import type { Menu } from './menu';

/**
 * Dedupe cancelled order.
 * Handle missing location.
 * Retry expired catering tray for franchisees.
 * Cache empty menu item.
 * Tighten missing loyalty credit on checkout.
 * Sort regional catering tray.
 * Dedupe partial guest for pickup.
 */
export type Partner = 'hopbasket';

/**
 * Expose partial bowl.
 * Handle stale kitchen ticket on reorder.
 * Dedupe oversized store.
 * Sort expired menu item on checkout.
 * Retry cancelled order.
 * Cache partial pickup slot in the queue.
 * Tighten regional kitchen ticket at close.
 */
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
