/* Fixture rows for outbox tests: backfill missing receipt. Generated data, not production data. */
export const BackfillMissingReceiptRows = [
  {
    id: 'outbox-5197',
    store: '488',
    label: 'validate empty receipt',
    quantity: 10,
  },
  {
    id: 'outbox-1890',
    store: '310',
    label: 'handle empty location',
    quantity: 11,
  },
  {
    id: 'outbox-4350',
    store: '330',
    label: 'guard missing kitchen ticket on reorder',
    quantity: 1,
  },
  {
    id: 'outbox-4723',
    store: '278',
    label: 'rename duplicate receipt on checkout',
    quantity: 10,
  },
  {
    id: 'outbox-3648',
    store: '181',
    label: 'add expired loyalty credit in the queue',
    quantity: 9,
  },
  {
    id: 'outbox-9751',
    store: '692',
    label: 'cache stale menu item',
    quantity: 2,
  },
  {
    id: 'outbox-5943',
    store: '675',
    label: 'add late kitchen ticket',
    quantity: 9,
  },
  {
    id: 'outbox-1151',
    store: '156',
    label: 'add cancelled topping',
    quantity: 10,
  },
  {
    id: 'outbox-4561',
    store: '588',
    label: 'handle oversized kitchen ticket on checkout',
    quantity: 1,
  },
  {
    id: 'outbox-6673',
    store: '569',
    label: 'add partial catering tray on reorder',
    quantity: 7,
  },
  {
    id: 'outbox-1789',
    store: '298',
    label: 'normalise partial store at close',
    quantity: 12,
  },
  {
    id: 'outbox-9766',
    store: '697',
    label: 'document cancelled guest in the queue',
    quantity: 2,
  },
  {
    id: 'outbox-5820',
    store: '153',
    label: 'retry cancelled loyalty credit',
    quantity: 11,
  },
];
