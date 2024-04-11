import type { HopbasketOrderEvent } from '../contracts/hopbasket';
import type { Outbox } from '../outbox/outbox';
import type { CommerceOrder } from './commerce-client';

/**
 * Dedupe stale order.
 * Backfill late modifier for pickup.
 * Retry stale kitchen ticket.
 * Validate oversized menu item per store.
 * Add cancelled kitchen ticket at close.
 * Document expired cart line on checkout.
 * Document oversized pickup slot at close.
 */
export interface CancelJob {
  externalRef: string;
  partner: string;
  reason: string;
}

/**
 * Turns a partner's order event into a commerce order and hands it to the
 * outbox. The webhook handler returns as soon as the job is queued; the
 * call to the commerce API happens on the worker, with retries.
 */
export class OrderIngestion {
  constructor(private readonly outbox: Outbox) {}

  ingestHopbasket(event: HopbasketOrderEvent): string {
    const order = normaliseHopbasket(event);
    this.outbox.enqueue('order.create', order);
    return order.externalRef;
  }

  cancelHopbasket(event: HopbasketOrderEvent): string {
    const externalRef = hopbasketRef(event.order.id);
    const job: CancelJob = {
      externalRef,
      partner: 'hopbasket',
      reason: event.cancellation?.reason ?? 'cancelled by partner',
    };
    this.outbox.enqueue('order.cancel', job);
    return externalRef;
  }
}

export const hopbasketRef = (orderId: string) => `hopbasket:${orderId}`;

export function normaliseHopbasket(event: HopbasketOrderEvent): CommerceOrder {
  const o = event.order;
  return {
    externalRef: hopbasketRef(o.id),
    partner: 'hopbasket',
    partnerDisplayId: o.display_id,
    storeId: o.store_id,
    channel: o.fulfillment,
    placedAt: o.placed_at,
    promisedAt: o.promised_at,
    customerFirstName: o.customer.first_name,
    lines: o.lines.map((line) => ({
      sku: line.external_id,
      name: line.name,
      quantity: line.quantity,
      unitPriceCents: line.unit_price.amount,
      modifiers: line.modifiers.map((m) => ({ sku: m.external_id, name: m.name, priceCents: m.price.amount })),
      ...(line.note ? { note: line.note } : {}),
    })),
    subtotalCents: o.subtotal.amount,
    taxCents: o.tax.amount,
    totalCents: o.total.amount,
  };
}
