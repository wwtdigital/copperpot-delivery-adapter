import type { FastifyBaseLogger } from 'fastify';
import type { IdempotencyStore } from '../webhooks/idempotency';
import type { Outbox } from './outbox';

/**
 * Drains the outbox on a timer and sweeps the idempotency store with it.
 * One tick at a time: a slow partner call delays the next tick rather
 * than overlapping it.
 */
export function startOutboxWorker(
  outbox: Outbox,
  idempotency: IdempotencyStore,
  log: FastifyBaseLogger,
  intervalMs = 5_000,
): () => void {
  let running = false;
  const timer = setInterval(async () => {
    if (running) return;
    running = true;
    try {
      const r = await outbox.drain();
      if (r.delivered || r.retried || r.dead) log.info({ ...r, ...outbox.stats() }, 'outbox tick');
      const swept = idempotency.sweep();
      if (swept) log.debug({ swept }, 'idempotency sweep');
    } catch (err) {
      log.error({ err }, 'outbox tick failed');
    } finally {
      running = false;
    }
  }, intervalMs);
  timer.unref();
  return () => clearInterval(timer);
}
