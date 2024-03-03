import { z } from 'zod';

/**
 * What we accept from Hopbasket, API version 1. The recorded fixtures under
 * contracts/hopbasket/v1 are parsed with these schemas in the contract tests,
 * so a change here that the partner does not actually make fails a test.
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
