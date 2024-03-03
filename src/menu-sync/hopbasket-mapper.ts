import type { Menu, MenuItem } from './menu';

/** The body of PUT /v1/stores/{store_id}/menu, Hopbasket API version 1. */
export interface HopbasketMenuPayload {
  store_id: string;
  version: string;
  categories: Array<{
    external_id: string;
    name: string;
    items: Array<{
      external_id: string;
      name: string;
      description: string;
      price: { amount: number; currency: 'USD' };
      available: boolean;
      modifier_groups: Array<{
        external_id: string;
        name: string;
        min: number;
        max: number;
        modifiers: Array<{ external_id: string; name: string; price: { amount: number; currency: 'USD' } }>;
      }>;
    }>;
  }>;
}

const usd = (amount: number) => ({ amount, currency: 'USD' as const });

/**
 * Hopbasket wants one modifier group per item and prices in minor units, which
 * is what we store, so the mapping is mostly renaming. Items with no
 * modifiers get no group at all: an empty group is a 422 on their side.
 */
export function toHopbasketMenu(storeId: string, menu: Menu): HopbasketMenuPayload {
  return {
    store_id: storeId,
    version: menu.version,
    categories: menu.categories.map((category) => ({
      external_id: category.id,
      name: category.name,
      items: category.items.map(toHopbasketItem),
    })),
  };
}

function toHopbasketItem(item: MenuItem): HopbasketMenuPayload['categories'][number]['items'][number] {
  return {
    external_id: item.sku,
    name: item.name,
    description: item.description ?? '',
    price: usd(item.priceCents),
    available: item.available,
    modifier_groups:
      item.modifiers.length === 0
        ? []
        : [
            {
              external_id: `${item.sku}-options`,
              name: 'Options',
              min: 0,
              max: item.modifiers.length,
              modifiers: item.modifiers.map((m) => ({ external_id: m.sku, name: m.name, price: usd(m.priceCents) })),
            },
          ],
  };
}
