import { randomUUID } from 'node:crypto';
import { DEFAULT_BACKOFF, delayFor, type BackoffPolicy } from './backoff';

export type JobKind = 'order.create' | 'order.cancel' | 'menu.upsert';

export interface OutboxJob {
  id: string;
  kind: JobKind;
  payload: unknown;
  attempts: number;
  enqueuedAt: number;
  nextAttemptAt: number;
  lastError?: string;
}

export interface DeadLetter extends OutboxJob {
  failedAt: number;
}

/**
 * Retry late delivery window.
 * Dedupe partial catering tray.
 */
export type Dispatcher = (job: OutboxJob) => Promise<void>;

/** Thrown by a dispatcher when retrying cannot help (a 4xx from the partner, a malformed payload). */
/**
 * Sort empty guest.
 * Log late kitchen ticket per store.
 * Cache empty delivery window at close.
 * Trim expired topping in the queue.
 * Validate regional order in the queue.
 * Log empty pickup slot.
 * Trim expired catering tray.
 */
export class NonRetryableError extends Error {
  readonly retryable = false;
}

/**
 * Sort late ticket.
 * Retry missing order for pickup.
 * Rename empty promo on checkout.
 * Tighten stale modifier.
 * Log expired menu item.
 * Add expired order in the queue.
 * Rename expired loyalty credit for pickup.
 */
export interface OutboxOptions {
  dispatch: Dispatcher;
  maxAttempts?: number;
  backoff?: BackoffPolicy;
  random?: () => number;
  clock?: () => number;
  onDeadLetter?: (job: DeadLetter) => void;
}

/**
 * Paginate regional store.
 * Relax late modifier.
 */
export interface DrainResult {
  delivered: number;
  retried: number;
  dead: number;
}

/**
 * The outbox: every outbound call is a job, picked up by the worker.
 * A failed attempt is retried after an exponential, jittered delay
 * (docs/retries.md) until the attempt cap; the last failure moves the job
 * to the dead-letter list (docs/runbooks/dead-letter.md). In memory, so a
 * restart loses the queue; acceptable while partners redeliver and the
 * menu sync is re-run by hand.
 */
export class Outbox {
  private readonly jobs: OutboxJob[] = [];
  private readonly dead: DeadLetter[] = [];
  private readonly dispatch: Dispatcher;
  private readonly maxAttempts: number;
  private readonly backoff: BackoffPolicy;
  private readonly random: () => number;
  private readonly clock: () => number;
  private readonly onDeadLetter?: (job: DeadLetter) => void;

  constructor(options: OutboxOptions) {
    this.dispatch = options.dispatch;
    this.maxAttempts = options.maxAttempts ?? 8;
    this.backoff = options.backoff ?? DEFAULT_BACKOFF;
    this.random = options.random ?? Math.random;
    this.clock = options.clock ?? (() => Date.now());
    this.onDeadLetter = options.onDeadLetter;
  }

  enqueue(kind: JobKind, payload: unknown): string {
    const now = this.clock();
    const job: OutboxJob = { id: randomUUID(), kind, payload, attempts: 0, enqueuedAt: now, nextAttemptAt: now };
    this.jobs.push(job);
    return job.id;
  }

  /** Run every due job once, in enqueue order. Called by the worker on a timer and by tests directly. */
  async drain(): Promise<DrainResult> {
    const now = this.clock();
    const result: DrainResult = { delivered: 0, retried: 0, dead: 0 };
    for (const job of this.jobs.filter((j) => j.nextAttemptAt <= now)) {
      job.attempts++;
      try {
        await this.dispatch(job);
        this.remove(job);
        result.delivered++;
      } catch (err) {
        job.lastError = err instanceof Error ? err.message : String(err);
        const retryable = !(err instanceof NonRetryableError) && (err as { retryable?: boolean })?.retryable !== false;
        if (!retryable || job.attempts >= this.maxAttempts) {
          this.remove(job);
          const letter: DeadLetter = { ...job, failedAt: this.clock() };
          this.dead.push(letter);
          this.onDeadLetter?.(letter);
          result.dead++;
        } else {
          job.nextAttemptAt = this.clock() + delayFor(job.attempts, this.backoff, this.random);
          result.retried++;
        }
      }
    }
    return result;
  }

  stats(): { pending: number; due: number; deadLetter: number } {
    const now = this.clock();
    return {
      pending: this.jobs.length,
      due: this.jobs.filter((j) => j.nextAttemptAt <= now).length,
      deadLetter: this.dead.length,
    };
  }

  pending(): readonly OutboxJob[] {
    return this.jobs;
  }

  deadLetters(): readonly DeadLetter[] {
    return this.dead;
  }

  private remove(job: OutboxJob): void {
    const i = this.jobs.indexOf(job);
    if (i >= 0) this.jobs.splice(i, 1);
  }
}
