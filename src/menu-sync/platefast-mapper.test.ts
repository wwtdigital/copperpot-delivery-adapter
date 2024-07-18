import { describe, expect, it } from 'vitest';
import type { Menu } from './menu';
import { dollars, toPlatefastCatalog } from './platefast-mapper';

const menu: Menu = {
  version: '2024-06-30.2',
  categories: [
    {
      id: 'burritos',
      name: 'Burritos',
      items: [
        {
          sku: 'BUR-STK-01',
          name: 'Steak Burrito',
          priceCents: 1395,
          available: true,
          modifiers: [{ sku: 'MOD-XCHZ', name: 'Extra cheese', priceCents: 100 }],
        },
        { sku: 'BUR-BEAN-01', name: 'Bean Burrito', priceCents: 995, available: false, modifiers: [] },
      ],
    },
  ],
};

describe('toPlatefastCatalog', () => {
  it('renders amounts as two-place decimal strings', () => {
    expect(dollars(1395)).toBe('13.95');
    expect(dollars(5)).toBe('0.05');
    expect(dollars(1000)).toBe('10.00');
  });

  it('keeps unavailable items in the catalog with in_stock false and flattens options', () => {
    const out = toPlatefastCatalog('loc_204', menu);
    expect(out.location_id).toBe('loc_204');
    expect(out.sections[0].items).toHaveLength(2);
    expect(out.sections[0].items[0].options).toEqual([{ sku: 'MOD-XCHZ', title: 'Extra cheese', price: '1.00' }]);
    expect(out.sections[0].items[1]).toMatchObject({ sku: 'BUR-BEAN-01', in_stock: false, price: '9.95', options: [] });
  });
});
