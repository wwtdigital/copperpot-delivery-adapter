import { createApp } from './app';
import { loadConfig } from './config';
import { startOutboxWorker } from './outbox/worker';

async function main() {
  const config = loadConfig();
  const { server, outbox, idempotency } = createApp(config, { fetch: (url, init) => fetch(url, init) });
  const stopWorker = startOutboxWorker(outbox, idempotency, server.log);

  const shutdown = async (signal: string) => {
    server.log.info({ signal }, 'shutting down');
    stopWorker();
    await server.close();
    process.exit(0);
  };
  process.on('SIGINT', () => void shutdown('SIGINT'));
  process.on('SIGTERM', () => void shutdown('SIGTERM'));

  await server.listen({ port: config.port, host: '0.0.0.0' });
}

main().catch((err) => {
  process.stderr.write(`delivery-adapter failed to start: ${err instanceof Error ? err.stack : String(err)}\n`);
  process.exit(1);
});
