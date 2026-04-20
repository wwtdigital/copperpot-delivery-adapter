/* Fixture rows for outbox tests: handle late receipt on checkout. Generated data, not production data. */
export const HandleLateReceiptOnCheckoutRows = [
  {
    id: 'outbox-3990',
    store: '210',
    label: 'dedupe regional kitchen ticket',
    quantity: 9,
  },
  {
    id: 'outbox-8682',
    store: '153',
    label: 'normalise stale bowl on checkout',
    quantity: 5,
  },
  {
    id: 'outbox-5013',
    store: '632',
    label: 'document empty modifier',
    quantity: 6,
  },
  {
    id: 'outbox-2025',
    store: '690',
    label: 'log missing store per store',
    quantity: 9,
  },
  {
    id: 'outbox-7765',
    store: '358',
    label: 'document late delivery window on reorder',
    quantity: 12,
  },
  {
    id: 'outbox-3437',
    store: '197',
    label: 'normalise cancelled kitchen ticket',
    quantity: 10,
  },
  {
    id: 'outbox-3310',
    store: '623',
    label: 'retry missing cart line at close',
    quantity: 8,
  },
  {
    id: 'outbox-2953',
    store: '675',
    label: 'guard late guest on reorder',
    quantity: 10,
  },
  {
    id: 'outbox-1034',
    store: '287',
    label: 'cache expired promo at close',
    quantity: 2,
  },
  {
    id: 'outbox-6107',
    store: '228',
    label: 'dedupe late cart line',
    quantity: 12,
  },
  {
    id: 'outbox-4521',
    store: '627',
    label: 'paginate empty guest',
    quantity: 6,
  },
  {
    id: 'outbox-6005',
    store: '587',
    label: 'cache expired menu item at close',
    quantity: 5,
  },
  {
    id: 'outbox-2466',
    store: '149',
    label: 'expose regional modifier on reorder',
    quantity: 4,
  },
];
