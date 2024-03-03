import { describe, expect, it } from 'vitest';
import { toHopbasketMenu } from './hopbasket-mapper';
import type { Menu } from './menu';

const menu: Menu = {
  version: '2024-02-26.1',
  categories: [
    {
      id: 'bowls',
      name: 'Bowls',
      items: [
        {
          sku: 'BWL-CHK-01',
          name: 'Chipotle Chicken Bowl',
          description: 'Rice, black beans, chicken, salsa verde.',
          priceCents: 1295,
          available: true,
          modifiers: [{ sku: 'MOD-GUAC', name: 'Guacamole', priceCents: 225 }],
        },
        { sku: 'SID-CHIPS', name: 'Chips', priceCents: 350, available: false, modifiers: [] },
      ],
    },
  ],
};

describe('toHopbasketMenu', () => {
  it('maps categories, items and prices in minor units', () => {
    const out = toHopbasketMenu('st_204', menu);
    expect(out.store_id).toBe('st_204');
    expect(out.version).toBe('2024-02-26.1');
    expect(out.categories[0].items[0]).toMatchObject({
      external_id: 'BWL-CHK-01',
      price: { amount: 1295, currency: 'USD' },
      available: true,
    });
  });

  it('puts modifiers in one group per item and omits the group when there are none', () => {
    const [withMods, without] = toHopbasketMenu('st_204', menu).categories[0].items;
    expect(withMods.modifier_groups).toHaveLength(1);
    expect(withMods.modifier_groups[0]).toMatchObject({ external_id: 'BWL-CHK-01-options', min: 0, max: 1 });
    expect(withMods.modifier_groups[0].modifiers[0]).toEqual({
      external_id: 'MOD-GUAC',
      name: 'Guacamole',
      price: { amount: 225, currency: 'USD' },
    });
    expect(without.modifier_groups).toEqual([]);
    expect(without.description).toBe('');
  });
});
