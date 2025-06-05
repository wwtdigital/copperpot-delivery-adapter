/* Fixture rows for outbox tests: log oversized order in the queue. Generated data, not production data. */
export const LogOversizedOrderInTheQueueRows = [
  {
    id: 'outbox-7063',
    store: '371',
    label: 'dedupe partial bowl in the queue',
    quantity: 12,
  },
  {
    id: 'outbox-2387',
    store: '510',
    label: 'document partial cart line on checkout',
    quantity: 4,
  },
  {
    id: 'outbox-8732',
    store: '552',
    label: 'add partial modifier for franchisees',
    quantity: 2,
  },
  {
    id: 'outbox-8931',
    store: '502',
    label: 'backfill stale guest in the queue',
    quantity: 4,
  },
];
