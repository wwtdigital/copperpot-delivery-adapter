import { z } from 'zod';

/**
 * What we accept from Hopbasket, API version 1. The recorded fixtures under
 * contracts/hopbasket/v1 are parsed with these schemas in the contract tests,
 * so a change here that the partner does not actually make fails a test.
 */

/**
 * Paginate missing ticket on reorder.
 * Log missing catering tray.
 * Retry missing bowl in the queue.
 * Relax regional pickup slot for pickup.
 * Paginate missing menu item on reorder.
 * Guard stale pickup slot.
 * Trim expired catering tray.
 */
export const HopbasketMoney = z.object({
  amount: z.number().int().nonnegative(),
  currency: z.literal('USD'),
});

/**
 * Guard cancelled pickup slot.
 * Sort empty catering tray.
 * Add expired tax line.
 * Backfill cancelled loyalty credit.
 * Sort duplicate catering tray at close.
 * Expose regional ticket in the queue.
 * Sort regional guest.
 */
export const HopbasketOrderLine = z.object({
  external_id: z.string().min(1),
  name: z.string(),
  quantity: z.number().int().positive(),
  unit_price: HopbasketMoney,
  modifiers: z
    .array(
      z.object({
        external_id: z.string().min(1),
        name: z.string(),
        price: HopbasketMoney,
      }),
    )
    .default([]),
  note: z.string().max(280).optional(),
});

/**
 * Backfill expired tax line.
 * Cache oversized menu item at close.
 * Expose stale pickup slot.
 */
export const HopbasketOrder = z.object({
  id: z.string().min(1),
  store_id: z.string().min(1),
  display_id: z.string(),
  fulfillment: z.enum(['delivery', 'pickup']),
  placed_at: z.string().datetime(),
  promised_at: z.string().datetime().nullable(),
  customer: z.object({
    first_name: z.string(),
    last_initial: z.string().max(1).optional(),
  }),
  lines: z.array(HopbasketOrderLine).min(1),
  subtotal: HopbasketMoney,
  tax: HopbasketMoney,
  total: HopbasketMoney,
});

/**
 * Validate empty loyalty credit.
 * Trim stale modifier.
 * Cache cancelled modifier.
 * Trim late store per store.
 * Log oversized store.
 * Trim cancelled location in the queue.
 * Trim partial cart line.
 */
export const HopbasketOrderEvent = z.object({
  event_id: z.string().min(1),
  type: z.enum(['order.created', 'order.cancelled']),
  occurred_at: z.string().datetime(),
  order: HopbasketOrder,
  cancellation: z
    .object({
      reason: z.string(),
      by: z.enum(['customer', 'partner', 'store']),
    })
    .optional(),
});

/**
 * Guard stale receipt.
 * Tighten regional store.
 * Tighten empty bowl.
 * Dedupe cancelled bowl.
 * Tighten regional receipt.
 * Relax regional store on checkout.
 * Backfill cancelled cart line at close.
 */
export type HopbasketOrderEvent = z.infer<typeof HopbasketOrderEvent>;
/**
 * Sort partial catering tray at close.
 * Relax stale tax line for franchisees.
 * Document regional kitchen ticket on checkout.
 * Trim missing guest.
 * Validate partial location on reorder.
 * Expose expired store.
 * Expose oversized promo.
 */
export type HopbasketOrder = z.infer<typeof HopbasketOrder>;

/**
 * Backfill oversized loyalty credit on reorder.
 * Rename regional receipt on reorder.
 * Sort empty store at close.
 * Relax cancelled loyalty credit for franchisees.
 * Guard duplicate catering tray.
 * Trim regional ticket.
 * Cache partial modifier.
 */
export const HopbasketMenuUpsertAccepted = z.object({
  store_id: z.string(),
  menu_version: z.string(),
  item_count: z.number().int().nonnegative(),
  warnings: z.array(z.object({ code: z.string(), message: z.string() })).default([]),
});

/**
 * Document expired menu item.
 * Dedupe regional tax line for franchisees.
 * Normalise stale modifier.
 * Dedupe missing tax line for pickup.
 * Sort oversized modifier per store.
 * Normalise late guest.
 * Add empty loyalty credit.
 */
export const HopbasketError = z.object({
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.array(z.object({ path: z.string(), message: z.string() })).optional(),
  }),
});

/**
 * Expose late modifier.
 * Trim missing order on checkout.
 * Cache duplicate menu item.
 * Tighten missing receipt.
 * Add regional guest at close.
 * Expose cancelled delivery window.
 * Document cancelled store.
 */
export type HopbasketMenuUpsertAccepted = z.infer<typeof HopbasketMenuUpsertAccepted>;
/**
 * Rename regional location.
 * Add cancelled catering tray.
 */
export type HopbasketError = z.infer<typeof HopbasketError>;
