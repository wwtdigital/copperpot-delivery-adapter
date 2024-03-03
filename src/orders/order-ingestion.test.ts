import { describe, expect, it } from 'vitest';
import type { HopbasketOrderEvent } from '../contracts/hopbasket';
import { Outbox } from '../outbox/outbox';
import { StubCommerceClient, type CommerceOrder } from './commerce-client';
import { OrderIngestion, normaliseHopbasket } from './order-ingestion';

const event: HopbasketOrderEvent = {
  event_id: 'evt_1',
  type: 'order.created',
  occurred_at: '2024-02-27T17:04:12Z',
  order: {
    id: 'do_1',
    store_id: 'st_204',
    display_id: 'A17',
    fulfillment: 'pickup',
    placed_at: '2024-02-27T17:04:05Z',
    promised_at: null,
    customer: { first_name: 'Sam' },
    lines: [
      {
        external_id: 'BWL-VEG-02',
        name: 'Veggie Bowl',
        quantity: 2,
        unit_price: { amount: 1095, currency: 'USD' },
        modifiers: [],
        note: 'no onions',
      },
    ],
    subtotal: { amount: 2190, currency: 'USD' },
    tax: { amount: 175, currency: 'USD' },
    total: { amount: 2365, currency: 'USD' },
  },
};

describe('normaliseHopbasket', () => {
  it('builds the commerce order with a partner-prefixed reference', () => {
    const order = normaliseHopbasket(event);
    expect(order).toMatchObject({
      externalRef: 'hopbasket:do_1',
      partner: 'hopbasket',
      storeId: 'st_204',
      channel: 'pickup',
      promisedAt: null,
      customerFirstName: 'Sam',
      subtotalCents: 2190,
      taxCents: 175,
      totalCents: 2365,
    });
    expect(order.lines[0]).toEqual({
      sku: 'BWL-VEG-02',
      name: 'Veggie Bowl',
      quantity: 2,
      unitPriceCents: 1095,
      modifiers: [],
      note: 'no onions',
    });
  });
});

describe('OrderIngestion through the outbox', () => {
  it('creates the order on drain and the stub returns one id per reference', async () => {
    const commerce = new StubCommerceClient();
    const outbox = new Outbox({
      dispatch: async (job) => void (await commerce.createOrder(job.payload as CommerceOrder)),
    });
    const ingestion = new OrderIngestion(outbox);
    expect(ingestion.ingestHopbasket(event)).toBe('hopbasket:do_1');
    expect(await outbox.drain()).toEqual({ delivered: 1, retried: 0, dead: 0 });
    const first = await commerce.createOrder(normaliseHopbasket(event));
    const second = await commerce.createOrder(normaliseHopbasket(event));
    expect(first.orderId).toBe(second.orderId);
    expect(commerce.snapshot()).toHaveLength(1);
  });
});
