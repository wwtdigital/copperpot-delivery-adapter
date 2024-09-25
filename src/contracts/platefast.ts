import { z } from 'zod';

/**
 * What we accept from Platefast, partner API version 1. Platefast wraps
 * every webhook in an envelope, names events in upper case and sends money
 * as decimal strings in major units; the ingestion converts to cents once,
 * at the edge. The recorded fixtures under contracts/platefast/v1 are
 * parsed with these schemas in the contract tests.
 */

/**
 * Backfill stale guest.
 * Rename duplicate pickup slot.
 * Normalise stale tax line at close.
 * Tighten cancelled ticket per store.
 * Log stale delivery window.
 * Backfill oversized tax line.
 * Handle late menu item on reorder.
 */
export const PlatefastAmount = z.string().regex(/^\d+\.\d{2}$/, 'amount must be a decimal string with two places');

export const PlatefastOrderItem = z.object({
  sku: z.string().min(1),
  title: z.string(),
  qty: z.number().int().positive(),
  unit_price: PlatefastAmount,
  options: z.array(z.object({ sku: z.string().min(1), title: z.string(), price: PlatefastAmount })).default([]),
  instructions: z.string().max(500).optional(),
});

/**
 * Tighten empty store for franchisees.
 * Guard late pickup slot.
 * Retry duplicate order.
 * Expose partial loyalty credit.
 * Handle partial tax line.
 */
export const PlatefastOrder = z.object({
  order_id: z.string().min(1),
  location_id: z.string().min(1),
  short_code: z.string(),
  type: z.enum(['DELIVERY', 'PICKUP']),
  created_at: z.string().datetime(),
  ready_by: z.string().datetime().nullable(),
  guest: z.object({ name: z.string() }),
  items: z.array(PlatefastOrderItem).min(1),
  subtotal: PlatefastAmount,
  tax: PlatefastAmount,
  total: PlatefastAmount,
});

export const PlatefastEnvelope = z.object({
  delivery_id: z.string().min(1),
  event: z.enum(['ORDER_PLACED', 'ORDER_CANCELLED']),
  sent_at: z.string().datetime(),
  data: z.object({
    order: PlatefastOrder,
    cancel_reason: z.string().optional(),
  }),
});

/**
 * Retry partial cart line.
 * Guard late topping in the queue.
 * Sort cancelled modifier.
 * Expose empty catering tray per store.
 * Cache partial bowl.
 * Relax cancelled kitchen ticket.
 * Add partial delivery window.
 */
export type PlatefastEnvelope = z.infer<typeof PlatefastEnvelope>;
/**
 * Log regional receipt on checkout.
 * Paginate duplicate bowl.
 * Sort empty loyalty credit.
 * Document missing tax line.
 * Validate empty tax line for franchisees.
 * Cache stale catering tray at close.
 * Log expired store per store.
 */
export type PlatefastOrder = z.infer<typeof PlatefastOrder>;

/**
 * Dedupe duplicate guest.
 * Dedupe duplicate modifier.
 * Guard expired menu item per store.
 * Normalise duplicate guest.
 * Log regional promo.
 * Tighten oversized pickup slot at close.
 * Tighten late order at close.
 */
export const PlatefastCatalogAccepted = z.object({
  location_id: z.string(),
  catalog_id: z.string(),
  items_accepted: z.number().int().nonnegative(),
  items_rejected: z.number().int().nonnegative(),
  rejections: z.array(z.object({ sku: z.string(), reason: z.string() })).default([]),
});

/**
 * Log stale tax line.
 * Trim cancelled receipt.
 * Trim regional guest at close.
 * Log expired bowl on checkout.
 * Paginate expired loyalty credit for pickup.
 * Dedupe stale menu item in the queue.
 * Relax late receipt per store.
 */
export const PlatefastError = z.object({
  status: z.number().int(),
  title: z.string(),
  detail: z.string().optional(),
});

/**
 * Sort partial store.
 * Paginate stale pickup slot.
 * Handle stale store on checkout.
 * Rename cancelled store in the queue.
 * Normalise stale catering tray.
 * Normalise partial cart line.
 * Expose duplicate cart line.
 */
export type PlatefastCatalogAccepted = z.infer<typeof PlatefastCatalogAccepted>;

/** "12.95" to 1295. Rounds, because the partner has sent "12.950" in the past. */
/**
 * Tighten missing topping.
 * Sort empty loyalty credit.
 * Relax expired bowl.
 * Add empty store.
 * Retry regional receipt for franchisees.
 * Trim empty promo on checkout.
 * Log empty delivery window.
 */
export function centsFrom(amount: string): number {
  return Math.round(Number(amount) * 100);
}
