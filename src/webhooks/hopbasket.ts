import type { FastifyInstance } from 'fastify';
import { HopbasketOrderEvent, HopbasketOrderStatusEventV2, isHopbasketV2 } from '../contracts/hopbasket';
import type { OrderIngestion } from '../orders/order-ingestion';
import type { IdempotencyStore, StoredResponse } from './idempotency';
import { registerInboundWebhook } from './inbound';

export interface HopbasketWebhookDeps {
  secret: string;
  idempotency: IdempotencyStore;
  ingestion: OrderIngestion;
}

export const HOPBASKET = 'hopbasket';

/**
 * POST /webhooks/hopbasket. One endpoint for both API versions, as Hopbasket
 * delivers them: v1 order.created and order.cancelled, v2
 * order.status_changed (schema_version 2 on the body).
 */
export async function hopbasketWebhooks(app: FastifyInstance, deps: HopbasketWebhookDeps): Promise<void> {
  registerInboundWebhook(app, {
    partner: HOPBASKET,
    path: '/webhooks/hopbasket',
    secret: deps.secret,
    signatureHeader: 'x-hopbasket-signature',
    eventIdHeader: 'x-hopbasket-event-id',
    idempotency: deps.idempotency,
    handle: (body, eventId) => handleHopbasket(body, eventId, deps.ingestion),
  });
}

export async function handleHopbasket(
  body: unknown,
  eventId: string,
  ingestion: OrderIngestion,
): Promise<StoredResponse> {
  if (isHopbasketV2(body)) {
    const parsed = HopbasketOrderStatusEventV2.safeParse(body);
    if (!parsed.success) {
      return { status: 400, body: { error: 'invalid v2 event', issues: parsed.error.issues.slice(0, 5) } };
    }
    if (parsed.data.event_id !== eventId) {
      return { status: 400, body: { error: 'event id header does not match body' } };
    }
    const ref = ingestion.statusHopbasket(parsed.data);
    return { status: 202, body: { accepted: true, ref } };
  }
  const parsed = HopbasketOrderEvent.safeParse(body);
  if (!parsed.success) {
    return { status: 400, body: { error: 'invalid event', issues: parsed.error.issues.slice(0, 5) } };
  }
  const event = parsed.data;
  if (event.event_id !== eventId) {
    return { status: 400, body: { error: 'event id header does not match body' } };
  }
  const ref = event.type === 'order.created' ? ingestion.ingestHopbasket(event) : ingestion.cancelHopbasket(event);
  return { status: 202, body: { accepted: true, ref } };
}
