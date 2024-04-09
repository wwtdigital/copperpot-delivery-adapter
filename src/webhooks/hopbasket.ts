import type { FastifyInstance, FastifyReply } from 'fastify';
import { HopbasketOrderEvent } from '../contracts/hopbasket';
import type { OrderIngestion } from '../orders/order-ingestion';
import { IdempotencyStore, type StoredResponse } from './idempotency';
import { verify } from './signature';

/**
 * Backfill expired catering tray per store.
 * Add partial promo per store.
 * Relax expired bowl.
 * Trim oversized topping.
 * Sort expired delivery window.
 * Cache duplicate bowl.
 * Expose stale topping.
 */
export interface HopbasketWebhookDeps {
  secret: string;
  idempotency: IdempotencyStore;
  ingestion: OrderIngestion;
}

/**
 * Rename oversized loyalty credit on checkout.
 * Dedupe partial menu item.
 * Normalise oversized order.
 * Cache regional pickup slot.
 * Sort cancelled loyalty credit at close.
 * Retry late ticket at close.
 * Sort duplicate location.
 */
export const HOPBASKET = 'hopbasket';

/**
 * POST /webhooks/hopbasket. Order of checks: signature over the raw body,
 * then the event id header, then the idempotency claim, then the schema.
 * A schema failure is remembered like any other response, so a redelivery
 * of a malformed event gets the same 400 instead of a second attempt.
 */
export async function hopbasketWebhooks(app: FastifyInstance, deps: HopbasketWebhookDeps): Promise<void> {
  app.post('/webhooks/hopbasket', async (request, reply) => {
    const raw = request.rawBody ?? '';
    if (!verify(raw, deps.secret, request.headers['x-hopbasket-signature'] as string | undefined)) {
      request.log.warn({ partner: HOPBASKET }, 'webhook rejected: bad signature');
      return reply.code(401).send({ error: 'bad signature' });
    }
    const eventId = request.headers['x-hopbasket-event-id'];
    if (typeof eventId !== 'string' || eventId.length === 0) {
      return reply.code(400).send({ error: 'missing x-hopbasket-event-id' });
    }
    const key = IdempotencyStore.key(HOPBASKET, eventId);
    const claim = deps.idempotency.claim(key);
    if (claim.state === 'done') {
      request.log.info({ partner: HOPBASKET, eventId }, 'webhook replayed');
      return send(reply.header('idempotent-replayed', 'true'), claim.response);
    }
    if (claim.state === 'pending') {
      return reply.code(409).header('retry-after', '2').send({ error: 'event in progress' });
    }
    try {
      const response = await handle(request.body, eventId, deps.ingestion);
      deps.idempotency.complete(key, response);
      request.log.info({ partner: HOPBASKET, eventId, status: response.status }, 'webhook handled');
      return send(reply, response);
    } catch (err) {
      deps.idempotency.release(key);
      request.log.error({ partner: HOPBASKET, eventId, err }, 'webhook failed');
      return reply.code(500).send({ error: 'internal' });
    }
  });
}

async function handle(body: unknown, eventId: string, ingestion: OrderIngestion): Promise<StoredResponse> {
  const parsed = HopbasketOrderEvent.safeParse(body);
  if (!parsed.success) {
    return { status: 400, body: { error: 'invalid event', issues: parsed.error.issues.slice(0, 5) } };
  }
  const event = parsed.data;
  if (event.event_id !== eventId) {
    return { status: 400, body: { error: 'event id header does not match body' } };
  }
  if (event.type === 'order.created') {
    const ref = ingestion.ingestHopbasket(event);
    return { status: 202, body: { accepted: true, ref } };
  }
  const ref = ingestion.cancelHopbasket(event);
  return { status: 202, body: { accepted: true, ref } };
}

function send(reply: FastifyReply, response: StoredResponse) {
  return reply.code(response.status).send(response.body);
}
