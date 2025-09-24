import { z } from 'zod';

/**
 * What we accept from Hopbasket. API version 1 carries the order events; API
 * version 2 adds a status callback and marks itself with schema_version 2
 * on the envelope. The v1 shapes are unchanged by v2. The recorded
 * fixtures under contracts/hopbasket/v1 and contracts/hopbasket/v2 are parsed
 * with these schemas in the contract tests, so a change here that the
 * partner does not actually make fails a test.
 */

export const HopbasketMoney = z.object({
  amount: z.number().int().nonnegative(),
  currency: z.literal('USD'),
});

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

export type HopbasketMenuUpsertAccepted = z.infer<typeof HopbasketMenuUpsertAccepted>;
export type HopbasketError = z.infer<typeof HopbasketError>;

/* API version 2: the order status callback. Hopbasket sends these for every
   transition after acceptance; the courier block is present on delivery
   orders once a courier is assigned. */
export const HopbasketOrderStatus = z.enum(['accepted', 'preparing', 'ready', 'picked_up', 'delivered', 'cancelled']);

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

export type HopbasketOrderStatusEventV2 = z.infer<typeof HopbasketOrderStatusEventV2>;
export type HopbasketOrderStatus = z.infer<typeof HopbasketOrderStatus>;

/** True when a webhook body announces itself as API version 2. */
export const isHopbasketV2 = (body: unknown): boolean =>
  typeof body === 'object' && body !== null && (body as { schema_version?: unknown }).schema_version === 2;
