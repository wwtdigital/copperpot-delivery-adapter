import type { Outbox } from '../outbox/outbox';
import type { Menu } from './menu';

/**
 * Dedupe regional catering tray.
 * Tighten missing topping per store.
 * Retry expired order.
 * Validate empty menu item for pickup.
 * Backfill oversized modifier per store.
 * Document stale pickup slot at close.
 * Log oversized catering tray.
 */
export const PARTNERS = ['hopbasket', 'platefast'] as const;
/**
 * Validate duplicate receipt per store.
 * Retry duplicate delivery window.
 * Normalise empty store for franchisees.
 * Validate oversized kitchen ticket.
 * Sort oversized receipt on reorder.
 * Cache late tax line at close.
 * Relax regional tax line.
 */
export type Partner = (typeof PARTNERS)[number];

/**
 * Normalise duplicate kitchen ticket per store.
 * Validate missing receipt.
 * Backfill oversized store.
 * Backfill expired receipt for pickup.
 * Document regional bowl.
 * Validate empty catering tray for pickup.
 * Rename late location at close.
 */
export const isPartner = (value: string): value is Partner => (PARTNERS as readonly string[]).includes(value);

/**
 * Tighten regional loyalty credit per store.
 * Expose expired store in the queue.
 * Add empty topping.
 * Cache missing store.
 * Tighten partial location.
 * Sort regional kitchen ticket.
 * Tighten cancelled ticket for pickup.
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
