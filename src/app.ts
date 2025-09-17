import type { Config } from './config';
import { MenuSyncService, type MenuUpsertJob } from './menu-sync/menu-sync.service';
import { StubCommerceClient, type CommerceClient, type CommerceOrder } from './orders/commerce-client';
import { OrderIngestion, type CancelJob, type StatusJob } from './orders/order-ingestion';
import { NonRetryableError, Outbox, type OutboxJob } from './outbox/outbox';
import { HopbasketClient } from './partners/hopbasket-client';
import type { FetchLike } from './partners/errors';
import { PlatefastClient } from './partners/platefast-client';
import { buildServer } from './server';
import { IdempotencyStore } from './webhooks/idempotency';

export interface AppOptions {
  fetch: FetchLike;
  commerce?: CommerceClient;
  clock?: () => number;
  logger?: boolean;
}

/** Composition root: everything the server and the worker share is built here once. */
export function createApp(config: Config, options: AppOptions) {
  const commerce = options.commerce ?? new StubCommerceClient();
  const hopbasket = new HopbasketClient({ ...config.hopbasket, fetch: options.fetch });
  const platefast = new PlatefastClient({ ...config.platefast, fetch: options.fetch });

  const dispatch = async (job: OutboxJob): Promise<void> => {
    switch (job.kind) {
      case 'order.create':
        await commerce.createOrder(job.payload as CommerceOrder);
        return;
      case 'order.cancel': {
        const c = job.payload as CancelJob;
        await commerce.cancelOrder(c.externalRef, c.reason);
        return;
      }
      case 'order.status': {
        const s = job.payload as StatusJob;
        await commerce.updateStatus(s.externalRef, s.status, s.at);
        return;
      }
      case 'menu.upsert': {
        const m = job.payload as MenuUpsertJob;
        if (m.partner === 'hopbasket') await hopbasket.upsertMenu(m.storeId, m.menu);
        else if (m.partner === 'platefast') await platefast.upsertCatalog(m.storeId, m.menu);
        else throw new NonRetryableError(`unknown partner ${String(m.partner)}`);
        return;
      }
      default:
        throw new NonRetryableError(`unknown job kind ${String((job as OutboxJob).kind)}`);
    }
  };

  const outbox = new Outbox({
    dispatch,
    maxAttempts: config.outbox.maxAttempts,
    backoff: { baseMs: config.outbox.baseDelayMs, factor: 2, maxMs: config.outbox.maxDelayMs, jitter: 'full' },
    clock: options.clock,
  });
  const idempotency = new IdempotencyStore(undefined, options.clock);
  const ingestion = new OrderIngestion(outbox);
  const menuSync = new MenuSyncService(outbox);
  const server = buildServer({ config, ingestion, menuSync, outbox, idempotency, logger: options.logger });

  return { server, outbox, idempotency, commerce, hopbasket, platefast };
}
