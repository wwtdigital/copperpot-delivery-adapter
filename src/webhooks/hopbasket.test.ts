import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../app';
import { loadConfig } from '../config';
import { sign } from './signature';

const signingKey = 'unit-test-signing-key';

function event(overrides: Record<string, unknown> = {}) {
  return {
    event_id: 'evt_1001',
    type: 'order.created',
    occurred_at: '2024-02-27T17:04:12Z',
    order: {
      id: 'do_88213',
      store_id: 'st_204',
      display_id: 'A17',
      fulfillment: 'delivery',
      placed_at: '2024-02-27T17:04:05Z',
      promised_at: '2024-02-27T17:34:00Z',
      customer: { first_name: 'Jordan', last_initial: 'K' },
      lines: [
        {
          external_id: 'BWL-CHK-01',
          name: 'Chipotle Chicken Bowl',
          quantity: 1,
          unit_price: { amount: 1295, currency: 'USD' },
          modifiers: [{ external_id: 'MOD-GUAC', name: 'Guacamole', price: { amount: 225, currency: 'USD' } }],
        },
      ],
      subtotal: { amount: 1520, currency: 'USD' },
      tax: { amount: 122, currency: 'USD' },
      total: { amount: 1642, currency: 'USD' },
    },
    ...overrides,
  };
}

describe('POST /webhooks/hopbasket', () => {
  const app = createApp(loadConfig({ HOPBASKET_WEBHOOK_SECRET: signingKey }), {
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
      url: '/webhooks/hopbasket',
      headers: {
        'content-type': 'application/json',
        'x-hopbasket-signature': sign(raw, signingKey),
        'x-hopbasket-event-id': 'evt_1001',
        ...headers,
      },
      payload: raw,
    });
  };

  it('rejects a bad signature before anything else', async () => {
    const res = await post(event(), { 'x-hopbasket-signature': 'sha256=' + '0'.repeat(64) });
    expect(res.statusCode).toBe(401);
    expect(app.outbox.stats().pending).toBe(0);
  });

  it('requires the event id header', async () => {
    const res = await post(event(), { 'x-hopbasket-event-id': '' });
    expect(res.statusCode).toBe(400);
  });

  it('queues an order once and replays the same response on redelivery', async () => {
    const first = await post(event());
    expect(first.statusCode).toBe(202);
    expect(first.json()).toEqual({ accepted: true, ref: 'hopbasket:do_88213' });
    expect(app.outbox.stats().pending).toBe(1);

    const again = await post(event());
    expect(again.statusCode).toBe(202);
    expect(again.headers['idempotent-replayed']).toBe('true');
    expect(again.json()).toEqual(first.json());
    expect(app.outbox.stats().pending).toBe(1);
  });

  it('remembers a 400 for a malformed event so the redelivery is not reprocessed', async () => {
    const bad = event({ event_id: 'evt_2002', order: { id: 'x' } });
    const headers = { 'x-hopbasket-event-id': 'evt_2002' };
    const first = await post(bad, headers);
    expect(first.statusCode).toBe(400);
    const again = await post(bad, headers);
    expect(again.statusCode).toBe(400);
    expect(again.headers['idempotent-replayed']).toBe('true');
  });

  it('refuses a body whose event id differs from the header', async () => {
    const res = await post(event({ event_id: 'evt_other' }), { 'x-hopbasket-event-id': 'evt_4004' });
    expect(res.statusCode).toBe(400);
    expect(res.json().error).toMatch(/does not match/);
  });

  it('queues a cancellation for order.cancelled', async () => {
    const res = await post(
      event({
        event_id: 'evt_3003',
        type: 'order.cancelled',
        cancellation: { reason: 'customer request', by: 'customer' },
      }),
      {
        'x-hopbasket-event-id': 'evt_3003',
      },
    );
    expect(res.statusCode).toBe(202);
    expect(app.outbox.pending().some((j) => j.kind === 'order.cancel')).toBe(true);
  });

  it('accepts a v2 status callback on the same endpoint and queues a status job', async () => {
    const v2 = {
      schema_version: 2,
      event_id: 'evt_v2_01',
      type: 'order.status_changed',
      occurred_at: '2025-09-10T19:02:00Z',
      order_id: 'do_88213',
      store_id: 'st_204',
      status: 'picked_up',
      courier: { eta: '2025-09-10T19:20:00Z' },
    };
    const res = await post(v2, { 'x-hopbasket-event-id': 'evt_v2_01' });
    expect(res.statusCode).toBe(202);
    const job = app.outbox.pending().find((j) => j.kind === 'order.status');
    expect(job?.payload).toEqual({
      externalRef: 'hopbasket:do_88213',
      partner: 'hopbasket',
      status: 'handed_off',
      at: '2025-09-10T19:02:00Z',
    });
  });

  it('rejects a v2 body with an unknown status', async () => {
    const v2 = {
      schema_version: 2,
      event_id: 'evt_v2_02',
      type: 'order.status_changed',
      occurred_at: '2025-09-10T19:02:00Z',
      order_id: 'do_1',
      store_id: 'st_204',
      status: 'teleported',
    };
    const res = await post(v2, { 'x-hopbasket-event-id': 'evt_v2_02' });
    expect(res.statusCode).toBe(400);
    expect(res.json().error).toBe('invalid v2 event');
  });
});
