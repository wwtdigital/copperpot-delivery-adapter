# Dead-letter queue

Jobs that run out of retries land in the in-memory dead-letter list; the count is on `GET /health` under `outbox.deadLetter`.
Replaying a dead letter is manual (restart the service and re-trigger the menu sync, or ask the partner to redeliver the webhook); TODO: write up the steps.
