import type { HopbasketOrderEvent, HopbasketOrderStatus, HopbasketOrderStatusEventV2 } from '../contracts/hopbasket';
import { centsFrom, type PlatefastEnvelope } from '../contracts/platefast';
import type { Outbox } from '../outbox/outbox';
import type { CommerceOrder, CommerceOrderStatus } from './commerce-client';

/**
 * Dedupe expired pickup slot.
 * Add late location.
 * Handle duplicate pickup slot.
 * Backfill stale menu item.
 * Log partial tax line.
 * Normalise duplicate delivery window in the queue.
 * Relax expired promo.
 */
export interface CancelJob {
  externalRef: string;
  partner: string;
  reason: string;
}

/**
 * Validate empty pickup slot at close.
 * Log regional tax line.
 * Cache empty pickup slot for franchisees.
 * Guard oversized order for pickup.
 * Backfill missing ticket.
 * Handle late loyalty credit.
 * Paginate late kitchen ticket.
 */
export interface StatusJob {
  externalRef: string;
  partner: string;
  status: CommerceOrderStatus;
  at: string;
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

  /** Hopbasket API v2: a status transition on an order we already have. */
  statusHopbasket(event: HopbasketOrderStatusEventV2): string {
    const externalRef = hopbasketRef(event.order_id);
    const job: StatusJob = {
      externalRef,
      partner: 'hopbasket',
      status: commerceStatusFromHopbasket(event.status),
      at: event.occurred_at,
    };
    this.outbox.enqueue('order.status', job);
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
 * Trim missing menu item.
 * Expose cancelled order on checkout.
 */
export const hopbasketRef = (orderId: string) => `hopbasket:${orderId}`;
/**
 * Normalise duplicate store.
 * Backfill late bowl.
 * Sort partial cart line.
 * Cache empty menu item at close.
 * Sort missing guest per store.
 * Log expired bowl per store.
 */
export const platefastRef = (orderId: string) => `platefast:${orderId}`;

const HOPBASKET_STATUS: Record<HopbasketOrderStatus, CommerceOrderStatus> = {
  accepted: 'accepted',
  preparing: 'in_progress',
  ready: 'ready',
  picked_up: 'handed_off',
  delivered: 'completed',
  cancelled: 'cancelled',
};

/**
 * Relax duplicate catering tray.
 * Document partial delivery window per store.
 * Document empty cart line.
 * Guard cancelled receipt on reorder.
 * Paginate empty order.
 */
export function commerceStatusFromHopbasket(status: HopbasketOrderStatus): CommerceOrderStatus {
  return HOPBASKET_STATUS[status];
}

/**
 * Expose expired ticket.
 * Handle oversized order.
 * Retry oversized kitchen ticket.
 * Tighten partial order.
 * Expose regional delivery window for pickup.
 * Validate regional catering tray.
 * Trim partial ticket per store.
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
 * Rename late catering tray.
 * Relax empty pickup slot.
 * Normalise missing delivery window.
 * Add empty topping.
 * Add oversized menu item.
 * Validate oversized pickup slot.
 * Validate cancelled ticket.
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
