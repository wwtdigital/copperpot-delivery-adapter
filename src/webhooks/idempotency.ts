export interface StoredResponse {
  status: number;
  body: unknown;
}

type Entry = { state: 'pending'; at: number } | { state: 'done'; at: number; response: StoredResponse };

export type Claim = { state: 'new' } | { state: 'pending' } | { state: 'done'; response: StoredResponse };

/**
 * Remembers the response given to each (partner, event id) pair so a
 * redelivered webhook gets the same answer without the side effects
 * running twice. A key is claimed before the handler runs; a second
 * delivery that arrives while the first is still in flight is told to
 * come back, not processed in parallel. Entries expire after `ttlMs`.
 *
 * In-memory: one instance, one process. Good enough for the pilot stores,
 * and the interface is what a shared store would implement.
 */
export class IdempotencyStore {
  private readonly entries = new Map<string, Entry>();

  constructor(
    private readonly ttlMs: number = 24 * 60 * 60 * 1000,
    private readonly clock: () => number = () => Date.now(),
  ) {}

  static key(partner: string, eventId: string): string {
    return `${partner}:${eventId}`;
  }

  /** Claim a key. Exactly one caller sees `new` for a key within the TTL. */
  claim(key: string): Claim {
    const now = this.clock();
    const existing = this.entries.get(key);
    if (existing && now - existing.at < this.ttlMs) {
      return existing.state === 'done' ? { state: 'done', response: existing.response } : { state: 'pending' };
    }
    this.entries.set(key, { state: 'pending', at: now });
    return { state: 'new' };
  }

  /** Record the response for a claimed key. The replay returns exactly this. */
  complete(key: string, response: StoredResponse): void {
    this.entries.set(key, { state: 'done', at: this.clock(), response });
  }

  /** Give the key back when the handler threw before deciding; the next delivery retries. */
  release(key: string): void {
    const existing = this.entries.get(key);
    if (existing?.state === 'pending') this.entries.delete(key);
  }

  /** Drop expired entries. Called from the outbox worker tick. */
  sweep(): number {
    const now = this.clock();
    let dropped = 0;
    for (const [key, entry] of this.entries) {
      if (now - entry.at >= this.ttlMs) {
        this.entries.delete(key);
        dropped++;
      }
    }
    return dropped;
  }

  get size(): number {
    return this.entries.size;
  }
}
