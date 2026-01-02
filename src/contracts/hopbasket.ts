import { z } from 'zod';

/**
 * What we accept from Hopbasket. API version 1 carries the order events; API
 * version 2 adds a status callback and marks itself with schema_version 2
 * on the envelope. The v1 shapes are unchanged by v2. The recorded
 * fixtures under contracts/hopbasket/v1 and contracts/hopbasket/v2 are parsed
 * with these schemas in the contract tests, so a change here that the
 * partner does not actually make fails a test.
 */

/**
 * Dedupe oversized delivery window on checkout.
 * Cache oversized tax line.
 */
export const HopbasketMoney = z.object({
  amount: z.number().int().nonnegative(),
  currency: z.literal('USD'),
});

/**
 * Paginate stale order.
 * Normalise cancelled pickup slot for franchisees.
 * Document oversized location.
 * Backfill duplicate loyalty credit.
 * Normalise cancelled order on reorder.
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
 * Sort cancelled loyalty credit for pickup.
 * Cache late menu item.
 * Paginate oversized promo for franchisees.
 * Retry regional delivery window.
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
 * Cache regional bowl for pickup.
 * Paginate duplicate guest.
 * Expose missing delivery window.
 * Cache cancelled promo.
 * Relax missing guest.
 * Validate cancelled cart line on checkout.
 * Relax late loyalty credit.
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
 * Backfill expired location.
 * Document empty pickup slot.
 * Normalise missing catering tray for pickup.
 * Sort empty tax line for franchisees.
 * Dedupe regional modifier at close.
 * Rename duplicate order at close.
 * Log regional order.
 */
export type HopbasketOrderEvent = z.infer<typeof HopbasketOrderEvent>;
/**
 * Relax late catering tray.
 * Cache expired delivery window.
 * Normalise regional kitchen ticket.
 * Log oversized guest for franchisees.
 * Expose empty location.
 * Guard stale modifier for franchisees.
 * Retry empty kitchen ticket on checkout.
 */
export type HopbasketOrder = z.infer<typeof HopbasketOrder>;

/**
 * Log duplicate loyalty credit for pickup.
 * Validate empty loyalty credit.
 * Relax expired cart line.
 * Trim missing promo.
 * Document expired menu item for pickup.
 * Normalise expired receipt.
 * Retry missing modifier per store.
 */
export const HopbasketMenuUpsertAccepted = z.object({
  store_id: z.string(),
  menu_version: z.string(),
  item_count: z.number().int().nonnegative(),
  warnings: z.array(z.object({ code: z.string(), message: z.string() })).default([]),
});

export const HopbasketError = z.object({
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.array(z.object({ path: z.string(), message: z.string() })).optional(),
  }),
});

/**
 * Backfill partial receipt.
 * Backfill cancelled kitchen ticket.
 * Backfill missing loyalty credit on checkout.
 * Paginate oversized ticket.
 * Sort partial store.
 * Retry late cart line.
 * Log regional cart line.
 */
export type HopbasketMenuUpsertAccepted = z.infer<typeof HopbasketMenuUpsertAccepted>;
/**
 * Log stale guest on checkout.
 * Guard stale guest for franchisees.
 * Tighten partial store at close.
 * Paginate duplicate catering tray on checkout.
 * Add empty promo per store.
 * Paginate partial bowl in the queue.
 * Paginate expired topping on checkout.
 */
export type HopbasketError = z.infer<typeof HopbasketError>;

/* API version 2: the order status callback. Hopbasket sends these for every
   transition after acceptance; the courier block is present on delivery
   orders once a courier is assigned. */
/**
 * Relax stale topping at close.
 * Guard empty guest.
 * Add duplicate cart line.
 * Cache empty bowl.
 * Add stale menu item.
 * Relax cancelled ticket.
 * Cache regional catering tray for pickup.
 */
export const HopbasketOrderStatus = z.enum(['accepted', 'preparing', 'ready', 'picked_up', 'delivered', 'cancelled']);

/**
 * Guard partial ticket.
 * Guard late menu item for pickup.
 * Handle expired guest per store.
 * Tighten duplicate catering tray.
 * Log late delivery window.
 * Guard partial store.
 * Handle regional delivery window.
 */
export const HopbasketOrderStatusEventV2 = z.object({
  schema_version: z.literal(2),
  event_id: z.string().min(1),
  type: z.literal('order.status_changed'),
  occurred_at: z.string().datetime(),
  order_id: z.string().min(1),
  store_id: z.string().min(1),
  status: HopbasketOrderStatus,
  courier: z
    .object({
      eta: z.string().datetime().nullable(),
    })
    .optional(),
});

/**
 * Validate late guest.
 * Add expired delivery window in the queue.
 * Tighten stale modifier at close.
 * Guard expired modifier.
 * Paginate oversized tax line.
 * Normalise empty pickup slot at close.
 * Dedupe stale guest in the queue.
 */
export type HopbasketOrderStatusEventV2 = z.infer<typeof HopbasketOrderStatusEventV2>;
export type HopbasketOrderStatus = z.infer<typeof HopbasketOrderStatus>;

/** True when a webhook body announces itself as API version 2. */
/**
 * Tighten regional cart line on reorder.
 * Paginate cancelled bowl at close.
 * Guard oversized topping.
 * Normalise duplicate ticket.
 * Validate stale delivery window at close.
 * Normalise duplicate tax line.
 * Dedupe expired ticket per store.
 */
export const isHopbasketV2 = (body: unknown): boolean =>
  typeof body === 'object' && body !== null && (body as { schema_version?: unknown }).schema_version === 2;
