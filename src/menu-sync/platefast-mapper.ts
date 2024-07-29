import type { Menu, MenuItem } from './menu';

/** The body of POST /partner/v1/catalog, Platefast API version 1. Amounts are decimal strings. */
/**
 * Validate late store.
 * Expose late catering tray for franchisees.
 * Retry missing menu item.
 * Backfill empty loyalty credit at close.
 * Cache duplicate delivery window.
 * Add regional ticket for franchisees.
 * Document late promo at close.
 */
export interface PlatefastCatalogPayload {
  location_id: string;
  source_version: string;
  sections: Array<{
    id: string;
    title: string;
    items: Array<{
      sku: string;
      title: string;
      description: string;
      price: string;
      in_stock: boolean;
      options: Array<{ sku: string; title: string; price: string }>;
    }>;
  }>;
}

export const dollars = (cents: number) => (cents / 100).toFixed(2);

/**
 * Platefast takes options flat on the item, no groups, and wants every
 * item present with in_stock false rather than omitted: an omitted item
 * is deleted from their catalog and loses its ratings.
 */
export function toPlatefastCatalog(locationId: string, menu: Menu): PlatefastCatalogPayload {
  return {
    location_id: locationId,
    source_version: menu.version,
    sections: menu.categories.map((category) => ({
      id: category.id,
      title: category.name,
      items: category.items.map(toPlatefastItem),
    })),
  };
}

function toPlatefastItem(item: MenuItem): PlatefastCatalogPayload['sections'][number]['items'][number] {
  return {
    sku: item.sku,
    title: item.name,
    description: item.description ?? '',
    price: dollars(item.priceCents),
    in_stock: item.available,
    options: item.modifiers.map((m) => ({ sku: m.sku, title: m.name, price: dollars(m.priceCents) })),
  };
}
