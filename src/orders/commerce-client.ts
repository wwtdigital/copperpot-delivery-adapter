export interface CommerceOrderLine {
  sku: string;
  name: string;
  quantity: number;
  unitPriceCents: number;
  modifiers: Array<{ sku: string; name: string; priceCents: number }>;
  note?: string;
}

/** The order the commerce API accepts from a partner channel. */
export interface CommerceOrder {
  externalRef: string;
  partner: string;
  partnerDisplayId: string;
  storeId: string;
  channel: 'delivery' | 'pickup';
  placedAt: string;
  promisedAt: string | null;
  customerFirstName: string;
  lines: CommerceOrderLine[];
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
}

export type CommerceOrderStatus =
  'placed' | 'accepted' | 'in_progress' | 'ready' | 'handed_off' | 'completed' | 'cancelled';

export interface CommerceClient {
  createOrder(order: CommerceOrder): Promise<{ orderId: string }>;
  cancelOrder(externalRef: string, reason: string): Promise<void>;
  updateStatus(externalRef: string, status: CommerceOrderStatus, at: string): Promise<void>;
}

/**
 * The stand-in for the commerce API's partner-orders endpoint, which is
 * still being built on their side. Behaves the way the real one is
 * specified to: creating the same external reference twice returns the
 * same order id, cancelling or updating an unknown reference is a no-op,
 * and status transitions are kept in order of arrival.
 */
export class StubCommerceClient implements CommerceClient {
  private readonly orders = new Map<
    string,
    {
      orderId: string;
      order: CommerceOrder;
      status: CommerceOrderStatus;
      history: Array<{ status: CommerceOrderStatus; at: string }>;
    }
  >();
  private seq = 0;

  async createOrder(order: CommerceOrder): Promise<{ orderId: string }> {
    const existing = this.orders.get(order.externalRef);
    if (existing) return { orderId: existing.orderId };
    const orderId = `ord_${String(++this.seq).padStart(6, '0')}`;
    this.orders.set(order.externalRef, {
      orderId,
      order,
      status: 'placed',
      history: [{ status: 'placed', at: order.placedAt }],
    });
    return { orderId };
  }

  async cancelOrder(externalRef: string): Promise<void> {
    const existing = this.orders.get(externalRef);
    if (existing) existing.status = 'cancelled';
  }

  async updateStatus(externalRef: string, status: CommerceOrderStatus, at: string): Promise<void> {
    const existing = this.orders.get(externalRef);
    if (!existing) return;
    existing.status = status;
    existing.history.push({ status, at });
  }

  /** For tests and the health page. */
  snapshot(): Array<{ externalRef: string; orderId: string; status: CommerceOrderStatus; transitions: number }> {
    return [...this.orders.entries()].map(([externalRef, v]) => ({
      externalRef,
      orderId: v.orderId,
      status: v.status,
      transitions: v.history.length,
    }));
  }
}
