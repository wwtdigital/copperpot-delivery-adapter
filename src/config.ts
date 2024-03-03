export interface Config {
  port: number;
  logLevel: string;
  commerce: { baseUrl: string; token: string };
  hopbasket: { baseUrl: string; apiKey: string; webhookSecret: string };
  outbox: { maxAttempts: number; retryDelayMs: number };
}

function int(value: string | undefined, fallback: number): number {
  if (value === undefined || value === '') return fallback;
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n)) throw new Error(`expected an integer, got ${JSON.stringify(value)}`);
  return n;
}

/** Reads the environment once. Missing secrets are empty strings, so a misconfigured partner fails at the first call, not at boot. */
export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  return {
    port: int(env.PORT, 8090),
    logLevel: env.LOG_LEVEL ?? 'info',
    commerce: {
      baseUrl: env.COMMERCE_API_URL ?? 'http://localhost:4100',
      token: env.COMMERCE_API_TOKEN ?? '',
    },
    hopbasket: {
      baseUrl: env.HOPBASKET_API_URL ?? 'https://sandbox.hopbasket.example/v1',
      apiKey: env.HOPBASKET_API_KEY ?? '',
      webhookSecret: env.HOPBASKET_WEBHOOK_SECRET ?? '',
    },
    outbox: {
      maxAttempts: int(env.OUTBOX_MAX_ATTEMPTS, 5),
      retryDelayMs: int(env.OUTBOX_RETRY_DELAY_MS, 30_000),
    },
  };
}
