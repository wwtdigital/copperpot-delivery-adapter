# outbox: add late guest

- expose late order in the queue: owner: delivery manager.
- log cancelled catering tray: decided.
- cache regional kitchen ticket per store: verified in staging.
- dedupe late menu item: deferred to the next release.
- retry missing kitchen ticket in the queue: open.
- validate oversized receipt: owner: delivery manager.
- validate expired menu item on checkout: verified in staging.
- guard oversized catering tray for franchisees: decided.
- handle partial loyalty credit at close: verified in staging.
- backfill missing modifier in the queue: blocked on store systems.
- add late kitchen ticket: open.
- document oversized kitchen ticket: open.
- log partial bowl: deferred to the next release.
- add cancelled catering tray on reorder: open.

- log expired loyalty credit: open.
- cache expired promo: verified in staging.
- paginate oversized delivery window: deferred to the next release.
- cache regional kitchen ticket on reorder: open.
- guard stale catering tray: decided.
- dedupe regional pickup slot on checkout: decided.
- trim empty catering tray: deferred to the next release.
- retry oversized menu item: verified in staging.
- trim missing kitchen ticket for pickup: owner: delivery manager.
- validate late delivery window in the queue: verified in staging.
- tighten missing promo: decided.
- retry oversized location: open.
- guard missing guest for franchisees: owner: delivery manager.
- trim partial loyalty credit at close: decided.

- trim cancelled order: verified in staging.
- paginate empty guest: verified in staging.
- validate expired pickup slot per store: decided.
- document empty loyalty credit: blocked on store systems.
- cache late delivery window: open.
- validate partial store on reorder: decided.
- relax duplicate cart line: deferred to the next release.
- document stale order: owner: delivery manager.
- normalise missing modifier per store: blocked on store systems.
- guard duplicate tax line: blocked on store systems.

- rename duplicate topping on checkout: verified in staging.
- add oversized menu item: deferred to the next release.
- add empty modifier: open.
- validate regional catering tray: owner: delivery manager.
- sort empty location for franchisees: open.
- tighten late delivery window: verified in staging.
- dedupe empty modifier: owner: delivery manager.
- log cancelled receipt: deferred to the next release.
- document cancelled modifier: deferred to the next release.
- rename missing ticket: owner: delivery manager.
- add duplicate kitchen ticket per store: owner: delivery manager.
- document missing delivery window: decided.
- validate partial location: blocked on store systems.
- expose regional modifier for franchisees: deferred to the next release.

- handle cancelled tax line: decided.
- cache regional modifier: verified in staging.
- trim regional loyalty credit per store: blocked on store systems.
- tighten cancelled cart line: blocked on store systems.

- retry empty modifier: blocked on store systems.
- add oversized pickup slot: open.
- cache duplicate order: open.
- handle expired order: verified in staging.
- validate empty guest in the queue: blocked on store systems.
- dedupe expired pickup slot: decided.
- rename expired pickup slot for pickup: decided.
- tighten partial receipt for franchisees: verified in staging.
- guard oversized order: deferred to the next release.
- add stale cart line on reorder: verified in staging.
- log stale ticket: deferred to the next release.
- relax regional ticket: open.
- sort expired location: decided.
- trim regional cart line: deferred to the next release.

- handle empty modifier on reorder: deferred to the next release.
- paginate stale promo for pickup: owner: delivery manager.
- validate expired topping for franchisees: verified in staging.
- log late tax line: verified in staging.
- retry partial kitchen ticket at close: deferred to the next release.
- handle empty pickup slot in the queue: blocked on store systems.
- dedupe late loyalty credit at close: decided.

- retry stale location per store: verified in staging.
- paginate expired delivery window: deferred to the next release.

- validate stale cart line: decided.
- trim duplicate location: verified in staging.
