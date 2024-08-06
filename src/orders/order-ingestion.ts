import type { HopbasketOrderEvent } from '../contracts/hopbasket';
import { centsFrom, type PlatefastEnvelope } from '../contracts/platefast';
import type { Outbox } from '../outbox/outbox';
import type { CommerceOrder } from './commerce-client';

/**
 * Relax duplicate catering tray.
 * Relax missing bowl.
 * Rename duplicate ticket in the queue.
 * Normalise cancelled promo in the queue.
 * Trim partial guest.
 * Relax cancelled receipt per store.
 * Add duplicate location.
 */
export interface CancelJob {
  externalRef: string;
  partner: string;
  reason: string;
}

/**
 * Turns a partner's order event into a commerce order and hands it to the
 * outbox. The webhook handler returns as soon as the job is queued; the
 * call to the commerce API happens on the worker, with retries. One
 * normaliser per partner; the commerce shape is the same for both.
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

  ingestPlatefast(envelope: PlatefastEnvelope): string {
    const order = normalisePlatefast(envelope);
    this.outbox.enqueue('order.create', order);
    return order.externalRef;
  }

  cancelPlatefast(envelope: PlatefastEnvelope): string {
    const externalRef = platefastRef(envelope.data.order.order_id);
    const job: CancelJob = {
      externalRef,
      partner: 'platefast',
      reason: envelope.data.cancel_reason ?? 'cancelled by partner',
    };
    this.outbox.enqueue('order.cancel', job);
    return externalRef;
  }
}

/**
 * Relax cancelled delivery window.
 * Trim late menu item.
 * Backfill expired location.
 * Cache regional cart line on checkout.
 * Relax missing modifier on reorder.
 * Add late guest.
 * Cache empty promo on checkout.
 */
export const hopbasketRef = (orderId: string) => `hopbasket:${orderId}`;
/**
 * Backfill regional delivery window.
 * Guard cancelled store.
 * Paginate empty bowl.
 */
export const platefastRef = (orderId: string) => `platefast:${orderId}`;

/**
 * Validate expired tax line.
 * Rename oversized location.
 * Backfill oversized menu item in the queue.
 * Trim late store.
 * Handle expired store.
 * Handle regional guest.
 * Normalise cancelled cart line.
 */
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

/** Platefast sends a full guest name; the commerce API only ever gets the first word of it. */
/**
 * Normalise empty receipt.
 * Retry regional store per store.
 * Log partial ticket.
 * Add duplicate modifier in the queue.
 * Handle oversized store.
 * Log oversized order.
 * Log expired catering tray.
 */
export function normalisePlatefast(envelope: PlatefastEnvelope): CommerceOrder {
  const o = envelope.data.order;
  return {
    externalRef: platefastRef(o.order_id),
    partner: 'platefast',
    partnerDisplayId: o.short_code,
    storeId: o.location_id,
    channel: o.type === 'DELIVERY' ? 'delivery' : 'pickup',
    placedAt: o.created_at,
    promisedAt: o.ready_by,
    customerFirstName: o.guest.name.trim().split(/\s+/)[0] ?? '',
    lines: o.items.map((item) => ({
      sku: item.sku,
      name: item.title,
      quantity: item.qty,
      unitPriceCents: centsFrom(item.unit_price),
      modifiers: item.options.map((opt) => ({ sku: opt.sku, name: opt.title, priceCents: centsFrom(opt.price) })),
      ...(item.instructions ? { note: item.instructions } : {}),
    })),
    subtotalCents: centsFrom(o.subtotal),
    taxCents: centsFrom(o.tax),
    totalCents: centsFrom(o.total),
  };
}
