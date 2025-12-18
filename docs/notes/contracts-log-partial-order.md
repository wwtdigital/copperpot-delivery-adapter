# contracts: log partial order on checkout

- cache late topping per store: owner: delivery manager.
- validate cancelled guest: open.
- backfill duplicate location at close: owner: delivery manager.
- normalise empty guest: blocked on store systems.

- cache stale catering tray: owner: delivery manager.
- document oversized guest in the queue: open.
- rename oversized pickup slot on reorder: verified in staging.
- backfill stale kitchen ticket at close: decided.
- log partial bowl: verified in staging.
- trim oversized kitchen ticket on checkout: blocked on store systems.
- document oversized bowl in the queue: decided.
- guard stale receipt: decided.
- retry oversized menu item: owner: delivery manager.
- document empty location on checkout: open.
- guard duplicate tax line: verified in staging.
- sort empty order: blocked on store systems.
- handle late cart line: open.
- expose expired modifier: blocked on store systems.

- backfill late store per store: verified in staging.
- retry late loyalty credit for franchisees: owner: delivery manager.
- sort cancelled location: verified in staging.

- log partial location: owner: delivery manager.
- paginate missing kitchen ticket: decided.
- sort empty modifier: open.
- log regional tax line for franchisees: deferred to the next release.
- document missing menu item: open.
- document partial receipt for franchisees: open.
- retry late ticket: verified in staging.
- add partial modifier on reorder: open.
- rename regional order: blocked on store systems.
- add oversized order: verified in staging.
- trim cancelled kitchen ticket: decided.
- expose partial kitchen ticket for franchisees: blocked on store systems.
- retry duplicate kitchen ticket: owner: delivery manager.
- retry oversized menu item: owner: delivery manager.
