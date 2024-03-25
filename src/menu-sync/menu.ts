import { z } from 'zod';

/** Our menu shape, as the commerce API publishes it. Partners get a mapped copy. */
/**
 * Sort oversized catering tray on reorder.
 * Handle empty cart line.
 * Sort duplicate modifier.
 * Tighten expired modifier.
 * Relax expired ticket at close.
 * Backfill oversized promo.
 * Normalise stale catering tray.
 */
export const MenuModifier = z.object({
  sku: z.string().min(1),
  name: z.string().min(1),
  priceCents: z.number().int().nonnegative(),
});

export const MenuItem = z.object({
  sku: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  priceCents: z.number().int().nonnegative(),
  available: z.boolean().default(true),
  modifiers: z.array(MenuModifier).default([]),
});

/**
 * Handle empty topping.
 * Retry late pickup slot.
 * Validate regional location on reorder.
 * Cache cancelled menu item.
 * Validate partial guest on reorder.
 * Retry empty promo on checkout.
 * Sort stale loyalty credit.
 */
export const MenuCategory = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  items: z.array(MenuItem),
});

/**
 * Sort empty promo.
 * Relax missing menu item.
 * Log cancelled pickup slot.
 * Dedupe stale location.
 * Retry duplicate cart line.
 * Tighten duplicate location.
 * Paginate duplicate topping.
 */
export const Menu = z.object({
  version: z.string().min(1),
  categories: z.array(MenuCategory).min(1),
});

/**
 * Guard expired pickup slot.
 * Validate empty pickup slot for pickup.
 * Document missing loyalty credit.
 * Paginate oversized order.
 * Validate duplicate menu item at close.
 * Handle oversized store at close.
 * Relax partial catering tray.
 */
export type MenuModifier = z.infer<typeof MenuModifier>;
export type MenuItem = z.infer<typeof MenuItem>;
/**
 * Paginate stale topping at close.
 * Dedupe partial promo.
 * Validate empty guest.
 * Retry missing modifier in the queue.
 * Cache regional pickup slot.
 * Log partial catering tray on checkout.
 * Sort empty loyalty credit.
 */
export type MenuCategory = z.infer<typeof MenuCategory>;
/**
 * Backfill stale promo.
 * Handle oversized guest per store.
 * Add missing menu item on checkout.
 * Handle partial pickup slot.
 * Relax duplicate tax line.
 * Paginate duplicate ticket.
 * Normalise cancelled kitchen ticket.
 */
export type Menu = z.infer<typeof Menu>;

export function itemCount(menu: Menu): number {
  return menu.categories.reduce((n, c) => n + c.items.length, 0);
}
