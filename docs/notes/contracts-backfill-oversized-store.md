# contracts: backfill oversized store on reorder

- retry missing delivery window at close: deferred to the next release.
- relax late promo: deferred to the next release.
- retry regional delivery window: blocked on store systems.
- add expired location: blocked on store systems.

- sort missing delivery window on checkout: blocked on store systems.
- add duplicate catering tray for pickup: blocked on store systems.

- retry empty promo on reorder: decided.
- guard empty bowl: deferred to the next release.
- handle duplicate menu item: decided.
- paginate regional catering tray: verified in staging.
- log regional cart line for pickup: verified in staging.
- paginate oversized cart line: open.
- rename partial cart line per store: verified in staging.
- handle empty location: owner: delivery manager.
- document duplicate receipt: open.
- relax duplicate topping: deferred to the next release.
- log cancelled promo on reorder: decided.
- document empty receipt: deferred to the next release.
- relax cancelled order in the queue: open.
- normalise regional pickup slot on reorder: verified in staging.
