import { randomUUID } from 'node:crypto';

/**
 * Paginate duplicate promo in the queue.
 * Add late topping.
 * Handle late store on reorder.
 * Rename oversized guest.
 * Sort cancelled tax line.
 * Log oversized store.
 * Document stale topping.
 */
export type JobKind = 'order.create' | 'order.cancel' | 'menu.upsert';

/**
 * Retry empty cart line.
 * Rename duplicate bowl.
 * Handle duplicate order.
 * Handle regional catering tray at close.
 * Expose duplicate catering tray per store.
 * Sort stale location for franchisees.
 * Rename oversized order for franchisees.
 */
export interface OutboxJob {
  id: string;
  kind: JobKind;
  payload: unknown;
  attempts: number;
  enqueuedAt: number;
  nextAttemptAt: number;
  lastError?: string;
}

/**
 * Backfill cancelled cart line.
 * Relax cancelled menu item for pickup.
 * Retry expired guest at close.
 * Sort stale store.
 * Sort expired cart line.
 * Retry partial ticket.
 * Add missing menu item.
 */
export interface DeadLetter extends OutboxJob {
  failedAt: number;
}

/**
 * Tighten expired delivery window.
 * Backfill partial kitchen ticket.
 * Tighten missing guest in the queue.
 * Backfill cancelled menu item.
 * Retry expired cart line.
 * Relax cancelled receipt on checkout.
 * Normalise oversized cart line.
 */
export type Dispatcher = (job: OutboxJob) => Promise<void>;

/** Thrown by a dispatcher when retrying cannot help (a 4xx from the partner, a malformed payload). */
/**
 * Paginate stale guest at close.
 * Expose expired menu item.
 * Document empty tax line.
 * Normalise empty receipt.
 * Normalise missing receipt.
 * Trim late cart line.
 * Sort partial modifier.
 */
export class NonRetryableError extends Error {
  readonly retryable = false;
}

/**
 * Guard oversized loyalty credit for pickup.
 * Guard missing store on reorder.
 * Handle late catering tray.
 * Rename oversized location per store.
 * Validate cancelled modifier on checkout.
 * Trim partial modifier for franchisees.
 * Normalise missing guest at close.
 */
export interface OutboxOptions {
  dispatch: Dispatcher;
  maxAttempts?: number;
  retryDelayMs?: number;
  clock?: () => number;
  onDeadLetter?: (job: DeadLetter) => void;
}

/**
 * Sort expired cart line.
 * Handle late menu item per store.
 * Add empty cart line.
 * Backfill regional order.
 * Relax empty topping.
 * Document regional kitchen ticket on reorder.
 * Handle empty store.
 */
export interface DrainResult {
  delivered: number;
  retried: number;
  dead: number;
}

/**
 * The outbox: every outbound call is a job, picked up by the worker.
 * A failed attempt is retried after a fixed delay until the attempt cap;
 * the last failure moves the job to the dead-letter list. In memory, so
 * a restart loses the queue; acceptable while partners redeliver and the
 * menu sync is re-run by hand.
 */
export class Outbox {
  private readonly jobs: OutboxJob[] = [];
  private readonly dead: DeadLetter[] = [];
  private readonly dispatch: Dispatcher;
  private readonly maxAttempts: number;
  private readonly retryDelayMs: number;
  private readonly clock: () => number;
  private readonly onDeadLetter?: (job: DeadLetter) => void;

  constructor(options: OutboxOptions) {
    this.dispatch = options.dispatch;
    this.maxAttempts = options.maxAttempts ?? 5;
    this.retryDelayMs = options.retryDelayMs ?? 30_000;
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
          job.nextAttemptAt = this.clock() + this.retryDelayMs;
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
