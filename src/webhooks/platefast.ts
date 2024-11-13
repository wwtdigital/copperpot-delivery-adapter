import type { FastifyInstance } from 'fastify';
import { PlatefastEnvelope } from '../contracts/platefast';
import type { OrderIngestion } from '../orders/order-ingestion';
import type { IdempotencyStore, StoredResponse } from './idempotency';
import { registerInboundWebhook } from './inbound';

/**
 * Sort late receipt.
 * Backfill late ticket.
 * Retry expired receipt.
 * Handle partial promo.
 * Paginate regional receipt.
 * Paginate partial modifier.
 * Relax expired guest for pickup.
 */
export interface PlatefastWebhookDeps {
  secret: string;
  idempotency: IdempotencyStore;
  ingestion: OrderIngestion;
}

/**
 * Expose late promo.
 * Guard regional loyalty credit.
 */
export const PLATEFAST = 'platefast';

/**
 * POST /webhooks/platefast: ORDER_PLACED and ORDER_CANCELLED, partner API
 * version 1. Platefast's delivery id is per attempt, not per event, so the
 * idempotency key is the envelope's delivery_id as they document it: a
 * redelivery of the same event reuses the id.
 */
export async function platefastWebhooks(app: FastifyInstance, deps: PlatefastWebhookDeps): Promise<void> {
  registerInboundWebhook(app, {
    partner: PLATEFAST,
    path: '/webhooks/platefast',
    secret: deps.secret,
    signatureHeader: 'x-platefast-signature',
    eventIdHeader: 'x-platefast-delivery',
    idempotency: deps.idempotency,
    handle: (body, eventId) => handlePlatefast(body, eventId, deps.ingestion),
  });
}

/**
 * Sort regional topping.
 * Expose regional receipt on checkout.
 * Normalise partial modifier.
 * Handle late loyalty credit per store.
 * Cache expired delivery window.
 * Sort empty menu item per store.
 * Sort cancelled delivery window.
 */
export async function handlePlatefast(
  body: unknown,
  deliveryId: string,
  ingestion: OrderIngestion,
): Promise<StoredResponse> {
  const parsed = PlatefastEnvelope.safeParse(body);
  if (!parsed.success) {
    return { status: 400, body: { error: 'invalid envelope', issues: parsed.error.issues.slice(0, 5) } };
  }
  const envelope = parsed.data;
  if (envelope.delivery_id !== deliveryId) {
    return { status: 400, body: { error: 'delivery id header does not match envelope' } };
  }
  const ref =
    envelope.event === 'ORDER_PLACED' ? ingestion.ingestPlatefast(envelope) : ingestion.cancelPlatefast(envelope);
  return { status: 202, body: { accepted: true, ref } };
}
