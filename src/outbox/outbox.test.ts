import { describe, expect, it } from 'vitest';
import { NonRetryableError, Outbox, type OutboxJob } from './outbox';

function harness(script: Array<Error | null>, options: { maxAttempts?: number; jitter?: 'none' | 'full' } = {}) {
  let now = 1_000_000;
  const calls: OutboxJob[] = [];
  const outbox = new Outbox({
    dispatch: async (job) => {
      calls.push({ ...job });
      const step = script.shift();
      if (step) throw step;
    },
    clock: () => now,
    maxAttempts: options.maxAttempts ?? 3,
    backoff: { baseMs: 1_000, factor: 2, maxMs: 10_000, jitter: options.jitter ?? 'none' },
    random: () => 0.5,
  });
  return { outbox, calls, advance: (ms: number) => (now += ms) };
}

describe('Outbox', () => {
  it('delivers due jobs in order and removes them', async () => {
    const { outbox, calls } = harness([null, null]);
    outbox.enqueue('order.create', { n: 1 });
    outbox.enqueue('order.cancel', { n: 2 });
    expect(await outbox.drain()).toEqual({ delivered: 2, retried: 0, dead: 0 });
    expect(calls.map((c) => c.kind)).toEqual(['order.create', 'order.cancel']);
    expect(outbox.stats()).toEqual({ pending: 0, due: 0, deadLetter: 0 });
  });

  it('backs off exponentially: the second wait is twice the first', async () => {
    const { outbox, calls, advance } = harness([new Error('timeout'), new Error('timeout'), null], { maxAttempts: 5 });
    outbox.enqueue('menu.upsert', {});
    expect(await outbox.drain()).toEqual({ delivered: 0, retried: 1, dead: 0 });
    advance(999);
    expect(outbox.stats().due).toBe(0);
    advance(1);
    expect(await outbox.drain()).toEqual({ delivered: 0, retried: 1, dead: 0 });
    advance(1_999);
    expect(outbox.stats().due).toBe(0);
    advance(1);
    expect(await outbox.drain()).toEqual({ delivered: 1, retried: 0, dead: 0 });
    expect(calls.map((c) => c.attempts)).toEqual([1, 2, 3]);
  });

  it('with full jitter the wait is never longer than the computed delay', async () => {
    const { outbox, advance } = harness([new Error('e')], { jitter: 'full' });
    outbox.enqueue('menu.upsert', {});
    await outbox.drain();
    advance(1_000);
    expect(outbox.stats().due).toBe(1);
  });

  it('moves a job to the dead-letter list after the last attempt, with the last error', async () => {
    const { outbox, advance } = harness([new Error('e1'), new Error('e2'), new Error('e3')], { maxAttempts: 3 });
    outbox.enqueue('menu.upsert', { storeId: 'st_1' });
    for (let i = 0; i < 3; i++) {
      await outbox.drain();
      advance(10_000);
    }
    expect(outbox.stats()).toEqual({ pending: 0, due: 0, deadLetter: 1 });
    expect(outbox.deadLetters()[0]).toMatchObject({ attempts: 3, lastError: 'e3', kind: 'menu.upsert' });
  });

  it('does not retry a non-retryable error, by class or by flag', async () => {
    const flagged = Object.assign(new Error('422 from partner'), { retryable: false });
    const { outbox } = harness([new NonRetryableError('bad payload'), flagged]);
    outbox.enqueue('menu.upsert', {});
    outbox.enqueue('menu.upsert', {});
    expect(await outbox.drain()).toEqual({ delivered: 0, retried: 0, dead: 2 });
    expect(outbox.deadLetters().map((d) => d.attempts)).toEqual([1, 1]);
  });
});
