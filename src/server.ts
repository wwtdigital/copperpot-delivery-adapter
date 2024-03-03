import Fastify, { type FastifyInstance } from 'fastify';
import { z } from 'zod';
import type { Config } from './config';
import { loggerOptions } from './logging';
import { Menu } from './menu-sync/menu';
import type { MenuSyncService } from './menu-sync/menu-sync.service';
import type { OrderIngestion } from './orders/order-ingestion';
import type { Outbox } from './outbox/outbox';
import { hopbasketWebhooks } from './webhooks/hopbasket';
import type { IdempotencyStore } from './webhooks/idempotency';

declare module 'fastify' {
  interface FastifyRequest {
    rawBody?: string;
  }
}

export interface ServerDeps {
  config: Config;
  ingestion: OrderIngestion;
  menuSync: MenuSyncService;
  outbox: Outbox;
  idempotency: IdempotencyStore;
  logger?: boolean;
}

const MenuSyncRequest = z.object({
  storeIds: z.array(z.string().min(1)).min(1),
  menu: Menu,
});

export function buildServer(deps: ServerDeps): FastifyInstance {
  const app = Fastify({ logger: deps.logger === false ? false : loggerOptions(deps.config.logLevel) });

  /* Signatures are computed over the bytes the partner sent, so the JSON
     parser keeps the raw string on the request before parsing it. */
  app.addContentTypeParser('application/json', { parseAs: 'string' }, (request, body, done) => {
    request.rawBody = body as string;
    try {
      done(null, body === '' ? null : JSON.parse(body as string));
    } catch (err) {
      done(err as Error, undefined);
    }
  });

  app.get('/health', async () => ({
    status: 'ok',
    outbox: deps.outbox.stats(),
    idempotencyKeys: deps.idempotency.size,
  }));

  app.post('/menu-sync/hopbasket', async (request, reply) => {
    const parsed = MenuSyncRequest.safeParse(request.body);
    if (!parsed.success)
      return reply.code(400).send({ error: 'invalid menu sync request', issues: parsed.error.issues.slice(0, 5) });
    const jobs = deps.menuSync.requestSync('hopbasket', parsed.data.storeIds, parsed.data.menu);
    request.log.info({ partner: 'hopbasket', stores: jobs.length, version: parsed.data.menu.version }, 'menu sync queued');
    return reply.code(202).send({ queued: jobs.length, jobs });
  });

  app.register(hopbasketWebhooks, {
    secret: deps.config.hopbasket.webhookSecret,
    idempotency: deps.idempotency,
    ingestion: deps.ingestion,
  });

  return app;
}
