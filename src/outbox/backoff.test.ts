import { describe, expect, it } from 'vitest';
import { DEFAULT_BACKOFF, delayFor, series } from './backoff';

describe('backoff', () => {
  it('doubles from the base and caps at the maximum', () => {
    expect(series(9)).toEqual([2_000, 4_000, 8_000, 16_000, 32_000, 64_000, 128_000, 256_000, 300_000]);
  });

  it('treats zero or negative failures as the first', () => {
    const none = { ...DEFAULT_BACKOFF, jitter: 'none' as const };
    expect(delayFor(0, none)).toBe(2_000);
    expect(delayFor(-3, none)).toBe(2_000);
  });

  it('full jitter stays within [0, computed] and uses the supplied random source', () => {
    expect(delayFor(3, DEFAULT_BACKOFF, () => 0)).toBe(0);
    expect(delayFor(3, DEFAULT_BACKOFF, () => 0.5)).toBe(4_000);
    expect(delayFor(3, DEFAULT_BACKOFF, () => 0.999999)).toBeLessThanOrEqual(8_000);
    for (let i = 0; i < 200; i++) {
      const d = delayFor(20, DEFAULT_BACKOFF);
      expect(d).toBeGreaterThanOrEqual(0);
      expect(d).toBeLessThanOrEqual(300_000);
    }
  });

  it('honours a custom policy', () => {
    expect(series(4, { baseMs: 100, factor: 3, maxMs: 1_000, jitter: 'none' })).toEqual([100, 300, 900, 1_000]);
  });
});
