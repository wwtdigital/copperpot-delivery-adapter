import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { HopbasketOrderEvent } from '../../../src/contracts/hopbasket';
import { normaliseHopbasket } from '../../../src/orders/order-ingestion';
import { PartnerError, parseMenuUpsert } from '../../../src/partners/hopbasket-client';

const fixture = (rel: string) => JSON.parse(readFileSync(path.join(__dirname, rel), 'utf8'));

/**
 * Contract tests for Hopbasket API v1: the recorded sandbox traffic under
 * this folder must still parse with our schemas and map the way the
 * ingestion relies on. A failure here means the partner changed shape, or
 * we did, and the fixture needs re-recording rather than editing.
 */
describe('Hopbasket v1 webhooks (recorded)', () => {
  it('order.created parses and normalises to a commerce order', () => {
    const { body } = fixture('webhooks/order-created.json');
    const event = HopbasketOrderEvent.parse(body);
    const order = normaliseHopbasket(event);
    expect(order.externalRef).toBe('hopbasket:do_88213');
    expect(order.storeId).toBe('st_204');
    expect(order.channel).toBe('delivery');
    expect(order.lines).toHaveLength(2);
    expect(order.lines[0].modifiers[0]).toEqual({ sku: 'MOD-GUAC', name: 'Guacamole', priceCents: 225 });
    expect(order.lines[1].note).toBeUndefined();
    expect(
      order.lines.reduce(
        (s, l) => s + l.unitPriceCents * l.quantity + l.modifiers.reduce((m, x) => m + x.priceCents, 0),
        0,
      ),
    ).toBe(order.subtotalCents);
    expect(order.subtotalCents + order.taxCents).toBe(order.totalCents);
  });

  it('order.cancelled parses with its cancellation block', () => {
    const { body } = fixture('webhooks/order-cancelled.json');
    const event = HopbasketOrderEvent.parse(body);
    expect(event.type).toBe('order.cancelled');
    expect(event.cancellation).toEqual({ reason: 'Customer cancelled before pickup', by: 'customer' });
  });

  it('the event id in the header is the event id in the body', () => {
    for (const name of ['webhooks/order-created.json', 'webhooks/order-cancelled.json']) {
      const f = fixture(name);
      expect(f.body.event_id).toBe(f.headers['x-hopbasket-event-id']);
    }
  });
});

describe('Hopbasket v1 menu upsert responses (recorded)', () => {
  it('200 parses into the accepted shape with warnings', () => {
    const f = fixture('responses/menu-upsert.200.json');
    const accepted = parseMenuUpsert(f.status, f.body);
    expect(accepted).toMatchObject({ store_id: 'st_204', menu_version: '2024-02-26.1', item_count: 14 });
    expect(accepted.warnings).toHaveLength(1);
  });

  it('422 is a partner error that the outbox must not retry', () => {
    const f = fixture('responses/menu-upsert.422.json');
    let caught: unknown;
    try {
      parseMenuUpsert(f.status, f.body);
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(PartnerError);
    const e = caught as PartnerError;
    expect(e.status).toBe(422);
    expect(e.code).toBe('validation_failed');
    expect(e.retryable).toBe(false);
  });

  it('503 is a partner error that the outbox retries', () => {
    const f = fixture('responses/menu-upsert.503.json');
    expect(() => parseMenuUpsert(f.status, f.body)).toThrow(PartnerError);
    try {
      parseMenuUpsert(f.status, f.body);
    } catch (err) {
      expect((err as PartnerError).retryable).toBe(true);
    }
  });
});
