import { createHmac, timingSafeEqual } from 'node:crypto';

/** Hex HMAC-SHA256 of the raw request body, the scheme both partners use. */
export function sign(rawBody: string, secret: string): string {
  return createHmac('sha256', secret).update(rawBody, 'utf8').digest('hex');
}

/**
 * Constant-time comparison against the header value. A header with a
 * scheme prefix ("sha256=...") is accepted; anything else is compared as
 * given. Length mismatch is a plain false, never an exception.
 */
export function verify(rawBody: string, secret: string, header: string | undefined): boolean {
  if (!header || !secret) return false;
  const given = header.startsWith('sha256=') ? header.slice('sha256='.length) : header;
  const expected = sign(rawBody, secret);
  if (given.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(given, 'utf8'), Buffer.from(expected, 'utf8'));
}
