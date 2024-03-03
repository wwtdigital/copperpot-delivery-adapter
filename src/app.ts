import type { Config } from './config';
import { MenuSyncService, type MenuUpsertJob } from './menu-sync/menu-sync.service';
import { StubCommerceClient, type CommerceClient, type CommerceOrder } from './orders/commerce-client';
import { OrderIngestion, type CancelJob } from './orders/order-ingestion';
import { NonRetryableError, Outbox, type OutboxJob } from './outbox/outbox';
import { HopbasketClient, type FetchLike } from './partners/hopbasket-client';
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
  const hopbasket = new HopbasketClient({
    baseUrl: config.hopbasket.baseUrl,
    apiKey: config.hopbasket.apiKey,
    fetch: options.fetch,
  });

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
      case 'menu.upsert': {
        const m = job.payload as MenuUpsertJob;
        await hopbasket.upsertMenu(m.storeId, m.menu);
        return;
      }
      default:
        throw new NonRetryableError(`unknown job kind ${String((job as OutboxJob).kind)}`);
    }
  };

  const outbox = new Outbox({
    dispatch,
    maxAttempts: config.outbox.maxAttempts,
    retryDelayMs: config.outbox.retryDelayMs,
    clock: options.clock,
  });
  const idempotency = new IdempotencyStore(undefined, options.clock);
  const ingestion = new OrderIngestion(outbox);
  const menuSync = new MenuSyncService(outbox);
  const server = buildServer({ config, ingestion, menuSync, outbox, idempotency, logger: options.logger });

  return { server, outbox, idempotency, commerce, hopbasket };
}
