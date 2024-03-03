import type { LoggerOptions } from 'pino';

/**
 * One line of JSON per event, with the fields the on-call reads first.
 * Customer fields and partner credentials are redacted at the logger, not
 * at each call site, so a new log line cannot leak them by accident.
 */
export function loggerOptions(level: string): LoggerOptions {
  return {
    level,
    base: { service: 'delivery-adapter' },
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
    redact: {
      paths: [
        'req.headers.authorization',
        'req.headers["x-hopbasket-signature"]',
        '*.customer',
        '*.apiKey',
        '*.webhookSecret',
      ],
      censor: '[redacted]',
    },
    serializers: {
      req(req: { method: string; url: string; id: string }) {
        return { method: req.method, url: req.url, id: req.id };
      },
    },
  };
}
