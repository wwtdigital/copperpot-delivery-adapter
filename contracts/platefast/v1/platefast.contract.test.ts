import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { PlatefastEnvelope } from '../../../src/contracts/platefast';
import { normalisePlatefast } from '../../../src/orders/order-ingestion';
import { PartnerError } from '../../../src/partners/errors';
import { parseCatalogUpsert } from '../../../src/partners/platefast-client';

const fixture = (rel: string) => JSON.parse(readFileSync(path.join(__dirname, rel), 'utf8'));

/**
 * Contract tests for Platefast partner API v1: the recorded sandbox
 * traffic under this folder must still parse with our schemas and map the
 * way the ingestion relies on.
 */
describe('Platefast v1 webhooks (recorded)', () => {
  it('ORDER_PLACED parses and normalises with amounts in cents', () => {
    const { body } = fixture('webhooks/order-placed.json');
    const order = normalisePlatefast(PlatefastEnvelope.parse(body));
    expect(order.externalRef).toBe('platefast:PF-55120');
    expect(order.channel).toBe('delivery');
    expect(order.customerFirstName).toBe('Riley');
    expect(order.lines[0]).toMatchObject({ sku: 'BUR-STK-01', unitPriceCents: 1395, note: 'Leave at the front desk' });
    expect(order.lines[0].modifiers[0]).toEqual({ sku: 'MOD-XCHZ', name: 'Extra cheese', priceCents: 100 });
    expect(order.lines[1]).toMatchObject({ sku: 'SID-CHIPS', quantity: 2, unitPriceCents: 350 });
    expect(order.subtotalCents).toBe(2195);
    expect(order.subtotalCents + order.taxCents).toBe(order.totalCents);
  });

  it('ORDER_CANCELLED carries the partner reason', () => {
    const { body } = fixture('webhooks/order-cancelled.json');
    const envelope = PlatefastEnvelope.parse(body);
    expect(envelope.event).toBe('ORDER_CANCELLED');
    expect(envelope.data.cancel_reason).toBe('Courier unavailable');
  });

  it('the delivery id in the header is the delivery id in the envelope', () => {
    for (const name of ['webhooks/order-placed.json', 'webhooks/order-cancelled.json']) {
      const f = fixture(name);
      expect(f.body.delivery_id).toBe(f.headers['x-platefast-delivery']);
    }
  });
});

describe('Platefast v1 catalog responses (recorded)', () => {
  it('200 parses with per-item rejections', () => {
    const f = fixture('responses/catalog-upsert.200.json');
    const accepted = parseCatalogUpsert(f.status, f.body);
    expect(accepted).toMatchObject({ location_id: 'loc_204', items_accepted: 13, items_rejected: 1 });
    expect(accepted.rejections[0].sku).toBe('SID-WATER');
  });

  it('400 is a partner error the outbox must not retry, with the problem detail in the message', () => {
    const f = fixture('responses/catalog-upsert.400.json');
    let caught: unknown;
    try {
      parseCatalogUpsert(f.status, f.body);
    } catch (err) {
      caught = err;
    }
    expect(caught).toBeInstanceOf(PartnerError);
    const e = caught as PartnerError;
    expect(e.retryable).toBe(false);
    expect(e.message).toContain('expected string');
  });
});
