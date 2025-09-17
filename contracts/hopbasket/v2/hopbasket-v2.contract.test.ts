import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { HopbasketOrderEvent, HopbasketOrderStatusEventV2, isHopbasketV2 } from '../../../src/contracts/hopbasket';
import { commerceStatusFromHopbasket } from '../../../src/orders/order-ingestion';

const fixture = (rel: string) => JSON.parse(readFileSync(path.join(__dirname, rel), 'utf8'));
const v1 = (rel: string) => JSON.parse(readFileSync(path.join(__dirname, '..', 'v1', rel), 'utf8'));

/**
 * Contract tests for Hopbasket API v2, the status callback. v1 fixtures stay
 * in their own folder and their own tests; this file also checks the two
 * versions are told apart the way the webhook route does it.
 */
describe('Hopbasket v2 status callbacks (recorded)', () => {
  it('picked_up parses with a courier eta and maps to handed_off', () => {
    const { body } = fixture('webhooks/order-status-changed.picked-up.json');
    const event = HopbasketOrderStatusEventV2.parse(body);
    expect(event.order_id).toBe('do_91877');
    expect(event.courier?.eta).toBe('2025-09-09T19:02:00Z');
    expect(commerceStatusFromHopbasket(event.status)).toBe('handed_off');
  });

  it('delivered parses with a null eta and maps to completed', () => {
    const { body } = fixture('webhooks/order-status-changed.delivered.json');
    const event = HopbasketOrderStatusEventV2.parse(body);
    expect(event.courier).toEqual({ eta: null });
    expect(commerceStatusFromHopbasket(event.status)).toBe('completed');
  });

  it('a v2 body is recognised as v2 and a v1 body is not', () => {
    expect(isHopbasketV2(fixture('webhooks/order-status-changed.picked-up.json').body)).toBe(true);
    expect(isHopbasketV2(v1('webhooks/order-created.json').body)).toBe(false);
  });

  it('a v2 body does not parse as a v1 order event, and a v1 body does not parse as v2', () => {
    expect(HopbasketOrderEvent.safeParse(fixture('webhooks/order-status-changed.delivered.json').body).success).toBe(
      false,
    );
    expect(HopbasketOrderStatusEventV2.safeParse(v1('webhooks/order-created.json').body).success).toBe(false);
  });

  it('the event id in the header is the event id in the body', () => {
    for (const name of [
      'webhooks/order-status-changed.picked-up.json',
      'webhooks/order-status-changed.delivered.json',
    ]) {
      const f = fixture(name);
      expect(f.body.event_id).toBe(f.headers['x-hopbasket-event-id']);
      expect(f.headers['x-hopbasket-schema-version']).toBe('2');
    }
  });
});
