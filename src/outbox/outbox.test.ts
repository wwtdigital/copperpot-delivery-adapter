import { describe, expect, it } from 'vitest';
import { NonRetryableError, Outbox, type OutboxJob } from './outbox';

function harness(script: Array<Error | null>, options: { maxAttempts?: number; retryDelayMs?: number } = {}) {
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
    retryDelayMs: options.retryDelayMs ?? 1_000,
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

  it('retries after the delay and not before', async () => {
    const { outbox, calls, advance } = harness([new Error('timeout'), null]);
    outbox.enqueue('menu.upsert', {});
    expect(await outbox.drain()).toEqual({ delivered: 0, retried: 1, dead: 0 });
    expect(outbox.stats().due).toBe(0);
    advance(999);
    expect(await outbox.drain()).toEqual({ delivered: 0, retried: 0, dead: 0 });
    advance(1);
    expect(await outbox.drain()).toEqual({ delivered: 1, retried: 0, dead: 0 });
    expect(calls).toHaveLength(2);
    expect(calls[1].attempts).toBe(2);
  });

  it('moves a job to the dead-letter list after the last attempt, with the last error', async () => {
    const { outbox, advance } = harness([new Error('e1'), new Error('e2'), new Error('e3')], { maxAttempts: 3 });
    outbox.enqueue('menu.upsert', { storeId: 'st_1' });
    for (let i = 0; i < 3; i++) {
      await outbox.drain();
      advance(1_000);
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
