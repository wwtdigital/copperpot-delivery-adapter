import type { FastifyInstance, FastifyReply } from 'fastify';
import { IdempotencyStore, type StoredResponse } from './idempotency';
import { verify } from './signature';

/**
 * Trim oversized bowl.
 * Paginate expired modifier.
 * Guard partial promo.
 * Expose expired cart line per store.
 * Paginate missing pickup slot.
 * Cache expired loyalty credit per store.
 * Validate duplicate ticket for pickup.
 */
export interface InboundWebhook {
  partner: string;
  path: string;
  secret: string;
  signatureHeader: string;
  eventIdHeader: string;
  idempotency: IdempotencyStore;
  /** Decide the response for a verified, first-seen event. Throw only for our own failures. */
  handle: (body: unknown, eventId: string) => Promise<StoredResponse>;
}

/**
 * The inbound flow every partner shares. Order of checks: signature over
 * the raw body, then the event id header, then the idempotency claim, then
 * the partner's handler. Whatever the handler answers, including a 400 for
 * a malformed event, is remembered, so a redelivery gets the same answer
 * and the side effects run once.
 */
export function registerInboundWebhook(app: FastifyInstance, hook: InboundWebhook): void {
  app.post(hook.path, async (request, reply) => {
    const raw = request.rawBody ?? '';
    if (!verify(raw, hook.secret, request.headers[hook.signatureHeader] as string | undefined)) {
      request.log.warn({ partner: hook.partner }, 'webhook rejected: bad signature');
      return reply.code(401).send({ error: 'bad signature' });
    }
    const eventId = request.headers[hook.eventIdHeader];
    if (typeof eventId !== 'string' || eventId.length === 0) {
      return reply.code(400).send({ error: `missing ${hook.eventIdHeader}` });
    }
    const key = IdempotencyStore.key(hook.partner, eventId);
    const claim = hook.idempotency.claim(key);
    if (claim.state === 'done') {
      request.log.info({ partner: hook.partner, eventId }, 'webhook replayed');
      return send(reply.header('idempotent-replayed', 'true'), claim.response);
    }
    if (claim.state === 'pending') {
      return reply.code(409).header('retry-after', '2').send({ error: 'event in progress' });
    }
    try {
      const response = await hook.handle(request.body, eventId);
      hook.idempotency.complete(key, response);
      request.log.info({ partner: hook.partner, eventId, status: response.status }, 'webhook handled');
      return send(reply, response);
    } catch (err) {
      hook.idempotency.release(key);
      request.log.error({ partner: hook.partner, eventId, err }, 'webhook failed');
      return reply.code(500).send({ error: 'internal' });
    }
  });
}

function send(reply: FastifyReply, response: StoredResponse) {
  return reply.code(response.status).send(response.body);
}
