import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../app';
import { loadConfig } from '../config';
import { sign } from './signature';

const signingKey = 'unit-test-platefast-key';

function envelope(overrides: Record<string, unknown> = {}) {
  return {
    delivery_id: 'dl_9001',
    event: 'ORDER_PLACED',
    sent_at: '2024-07-01T18:20:00Z',
    data: {
      order: {
        order_id: 'PF-55120',
        location_id: 'loc_204',
        short_code: 'Q4',
        type: 'PICKUP',
        created_at: '2024-07-01T18:19:40Z',
        ready_by: '2024-07-01T18:40:00Z',
        guest: { name: 'Riley' },
        items: [{ sku: 'BWL-VEG-02', title: 'Veggie Bowl', qty: 1, unit_price: '10.95', options: [] }],
        subtotal: '10.95',
        tax: '0.88',
        total: '11.83',
      },
    },
    ...overrides,
  };
}

describe('POST /webhooks/platefast', () => {
  const app = createApp(loadConfig({ PLATEFAST_WEBHOOK_SECRET: signingKey }), {
    fetch: async () => ({ status: 200, json: async () => ({}) }),
    logger: false,
  });

  beforeAll(async () => {
    await app.server.ready();
  });
  afterAll(async () => {
    await app.server.close();
  });

  const post = (body: unknown, headers: Record<string, string> = {}) => {
    const raw = JSON.stringify(body);
    return app.server.inject({
      method: 'POST',
      url: '/webhooks/platefast',
      headers: {
        'content-type': 'application/json',
        'x-platefast-signature': sign(raw, signingKey),
        'x-platefast-delivery': 'dl_9001',
        ...headers,
      },
      payload: raw,
    });
  };

  it('rejects a bad signature', async () => {
    const res = await post(envelope(), { 'x-platefast-signature': '0'.repeat(64) });
    expect(res.statusCode).toBe(401);
  });

  it('queues the order once, converting amounts to cents, and replays on redelivery', async () => {
    const first = await post(envelope());
    expect(first.statusCode).toBe(202);
    expect(first.json()).toEqual({ accepted: true, ref: 'platefast:PF-55120' });
    const job = app.outbox.pending().find((j) => j.kind === 'order.create');
    expect(job?.payload).toMatchObject({
      partner: 'platefast',
      storeId: 'loc_204',
      channel: 'pickup',
      totalCents: 1183,
    });

    const again = await post(envelope());
    expect(again.headers['idempotent-replayed']).toBe('true');
    expect(app.outbox.stats().pending).toBe(1);
  });

  it('keeps Hopbasket and Platefast event ids apart', async () => {
    const res = await post(envelope({ delivery_id: 'evt_1001' }), { 'x-platefast-delivery': 'evt_1001' });
    expect(res.statusCode).toBe(202);
    expect(res.headers['idempotent-replayed']).toBeUndefined();
  });

  it('queues a cancellation for ORDER_CANCELLED with the partner reason', async () => {
    const body = envelope({ delivery_id: 'dl_9002', event: 'ORDER_CANCELLED' });
    (body.data as { cancel_reason?: string }).cancel_reason = 'Guest no-show';
    const res = await post(body, { 'x-platefast-delivery': 'dl_9002' });
    expect(res.statusCode).toBe(202);
    const job = app.outbox.pending().find((j) => j.kind === 'order.cancel');
    expect(job?.payload).toEqual({ externalRef: 'platefast:PF-55120', partner: 'platefast', reason: 'Guest no-show' });
  });
});
