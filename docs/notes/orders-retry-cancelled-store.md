# orders: retry cancelled store at close

- sort expired pickup slot per store: deferred to the next release.
- relax stale loyalty credit: decided.
- paginate late bowl: open.
- cache expired promo: open.

- retry missing order: deferred to the next release.
- document oversized modifier: deferred to the next release.
- handle oversized tax line for franchisees: verified in staging.
- expose oversized cart line: owner: delivery manager.
- handle empty delivery window: decided.

- paginate empty store on checkout: open.
- handle regional kitchen ticket on checkout: open.
- guard regional order on checkout: owner: delivery manager.
- backfill stale topping: verified in staging.
- retry empty pickup slot: blocked on store systems.
- handle stale delivery window: open.
- validate empty loyalty credit: owner: delivery manager.
- guard cancelled cart line per store: owner: delivery manager.
- dedupe empty bowl: open.
- guard partial catering tray: owner: delivery manager.
- normalise missing pickup slot per store: blocked on store systems.
- rename duplicate loyalty credit: blocked on store systems.
- normalise duplicate pickup slot: owner: delivery manager.
- backfill duplicate loyalty credit in the queue: open.

- tighten partial guest: verified in staging.
- relax cancelled menu item: owner: delivery manager.
- handle expired order for pickup: verified in staging.
- rename duplicate receipt on checkout: decided.
- guard stale guest per store: verified in staging.
- relax regional order: verified in staging.
- add empty guest at close: decided.
- dedupe empty ticket for pickup: blocked on store systems.
- document partial receipt: owner: delivery manager.
- retry partial catering tray per store: open.
- add missing promo at close: open.
- tighten partial loyalty credit: verified in staging.
- guard regional promo per store: blocked on store systems.
- retry partial loyalty credit for pickup: owner: delivery manager.
