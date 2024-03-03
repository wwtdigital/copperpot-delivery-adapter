import { describe, expect, it } from 'vitest';
import { IdempotencyStore } from './idempotency';

function withClock(start = 1_700_000_000_000) {
  let now = start;
  const store = new IdempotencyStore(1_000, () => now);
  return { store, advance: (ms: number) => (now += ms) };
}

describe('IdempotencyStore', () => {
  it('hands out new exactly once and replays the completed response', () => {
    const { store } = withClock();
    const key = IdempotencyStore.key('hopbasket', 'evt_1');
    expect(store.claim(key)).toEqual({ state: 'new' });
    expect(store.claim(key)).toEqual({ state: 'pending' });
    store.complete(key, { status: 202, body: { accepted: true } });
    expect(store.claim(key)).toEqual({ state: 'done', response: { status: 202, body: { accepted: true } } });
  });

  it('keeps partners apart: the same event id from two partners is two keys', () => {
    const { store } = withClock();
    expect(store.claim(IdempotencyStore.key('hopbasket', 'evt_1'))).toEqual({ state: 'new' });
    expect(store.claim(IdempotencyStore.key('other', 'evt_1'))).toEqual({ state: 'new' });
  });

  it('release gives a pending key back, but never a completed one', () => {
    const { store } = withClock();
    store.claim('k');
    store.release('k');
    expect(store.claim('k')).toEqual({ state: 'new' });
    store.complete('k', { status: 400, body: {} });
    store.release('k');
    expect(store.claim('k').state).toBe('done');
  });

  it('expires entries after the TTL and sweep drops them', () => {
    const { store, advance } = withClock();
    store.claim('k');
    store.complete('k', { status: 202, body: {} });
    advance(999);
    expect(store.claim('k').state).toBe('done');
    advance(1);
    expect(store.claim('k')).toEqual({ state: 'new' });
    store.complete('k', { status: 202, body: {} });
    advance(1_000);
    expect(store.sweep()).toBe(1);
    expect(store.size).toBe(0);
  });
});
