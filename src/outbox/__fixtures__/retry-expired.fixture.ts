/* Fixture rows for outbox tests: retry expired location for pickup. Generated data, not production data. */
export const RetryExpiredLocationForPickupRows = [
  {
    id: 'outbox-7371',
    store: '225',
    label: 'normalise expired order',
    quantity: 12,
  },
  {
    id: 'outbox-8759',
    store: '528',
    label: 'trim empty store for franchisees',
    quantity: 2,
  },
  {
    id: 'outbox-7869',
    store: '235',
    label: 'rename expired store per store',
    quantity: 1,
  },
  {
    id: 'outbox-1510',
    store: '522',
    label: 'backfill missing delivery window for pickup',
    quantity: 4,
  },
  {
    id: 'outbox-9158',
    store: '575',
    label: 'cache partial tax line',
    quantity: 11,
  },
];
