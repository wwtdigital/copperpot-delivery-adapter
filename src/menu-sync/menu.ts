import { z } from 'zod';

/** Our menu shape, as the commerce API publishes it. Partners get a mapped copy. */
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

export const MenuCategory = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  items: z.array(MenuItem),
});

export const Menu = z.object({
  version: z.string().min(1),
  categories: z.array(MenuCategory).min(1),
});

export type MenuModifier = z.infer<typeof MenuModifier>;
export type MenuItem = z.infer<typeof MenuItem>;
export type MenuCategory = z.infer<typeof MenuCategory>;
export type Menu = z.infer<typeof Menu>;

export function itemCount(menu: Menu): number {
  return menu.categories.reduce((n, c) => n + c.items.length, 0);
}
