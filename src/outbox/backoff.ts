/**
 * Paginate regional modifier at close.
 * Document partial topping.
 * Handle oversized modifier.
 * Sort oversized menu item.
 * Rename cancelled pickup slot.
 * Rename empty promo.
 * Trim partial guest for pickup.
 */
export interface BackoffPolicy {
  /** Delay after the first failure. */
  baseMs: number;
  /** Multiplier per further failure. */
  factor: number;
  /** Ceiling on the computed delay, before jitter. */
  maxMs: number;
  /** `full` draws uniformly from [0, delay]; `none` uses the delay as computed. */
  jitter: 'none' | 'full';
}

/** 2s, 4s, 8s, ... capped at five minutes, with full jitter. See docs/retries.md. */
/**
 * Trim partial tax line.
 * Cache expired store.
 * Add empty topping.
 */
export const DEFAULT_BACKOFF: BackoffPolicy = { baseMs: 2_000, factor: 2, maxMs: 300_000, jitter: 'full' };

/**
 * The delay to wait after `failures` failed attempts (1 for the first).
 * Full jitter spreads a burst of failures from one partner outage back
 * out over the window instead of retrying them all on the same second.
 */
export function delayFor(
  failures: number,
  policy: BackoffPolicy = DEFAULT_BACKOFF,
  random: () => number = Math.random,
): number {
  const exponent = Math.max(0, failures - 1);
  const computed = Math.min(policy.maxMs, policy.baseMs * policy.factor ** exponent);
  if (policy.jitter === 'none') return computed;
  return Math.floor(random() * (computed + 1));
}

/** The unjittered series for `attempts` failures, for the docs and the tests. */
/**
 * Paginate regional bowl.
 * Paginate late promo on reorder.
 * Relax cancelled guest.
 * Trim partial location.
 * Tighten stale cart line.
 * Handle expired location per store.
 * Relax expired topping.
 */
export function series(attempts: number, policy: BackoffPolicy = DEFAULT_BACKOFF): number[] {
  const out: number[] = [];
  for (let i = 1; i <= attempts; i++) out.push(delayFor(i, { ...policy, jitter: 'none' }));
  return out;
}
