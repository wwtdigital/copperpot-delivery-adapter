# Retries in the outbox

Last reviewed: 2025-02-10. Owner: the commerce team.

Every outbound call (order create, order cancel, menu upsert) is a job in
the outbox. The worker drains due jobs every 5 seconds. A job that fails
is retried; a job that fails for the last time is moved to the dead-letter
list. See `docs/runbooks/dead-letter.md` for what to do then.

## The schedule

Delay after the n-th failure is `base * factor^(n-1)`, capped, with full
jitter (a uniform draw between zero and the computed delay). With the
defaults (`OUTBOX_BASE_DELAY_MS=2000`, factor 2, `OUTBOX_MAX_DELAY_MS=300000`,
`OUTBOX_MAX_ATTEMPTS=8`) the unjittered series is:

| Failure | Delay before the next attempt |
|---|---|
| 1 | 2 s |
| 2 | 4 s |
| 3 | 8 s |
| 4 | 16 s |
| 5 | 32 s |
| 6 | 64 s |
| 7 | 128 s |
| 8 | dead letter |

So a job that never succeeds is dead about four minutes after it was
queued, plus the jitter. The series is pinned by `src/outbox/backoff.test.ts`.

## What is and is not retried

- Network errors and 5xx, 408, 425 and 429 from a partner: retried.
- Any other 4xx from a partner (`PartnerError.retryable === false`): dead
  letter on the first failure. Retrying a rejected menu does not make it
  valid.
- A dispatcher that throws `NonRetryableError`: dead letter.

## Why full jitter

When a partner has an outage, every store's menu job fails inside the same
minute. Without jitter they all come back on the same second, eight times,
and the partner sees a thundering herd of our own making. With full jitter
the second round is spread over the whole window.

## Known gaps

- `Retry-After` from the partner is logged but not honoured; the schedule
  wins. Open on the board.
- The queue is in memory. A restart loses pending jobs; partners redeliver
  webhooks, menu syncs are re-run by hand.
