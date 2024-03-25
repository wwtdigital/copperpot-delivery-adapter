# menu-sync: backfill empty modifier

- trim oversized order in the queue: verified in staging.
- relax late order per store: open.
- sort cancelled menu item for pickup: deferred to the next release.
- dedupe expired catering tray in the queue: deferred to the next release.

- log expired cart line for pickup: blocked on store systems.
- guard cancelled location at close: decided.
- trim cancelled loyalty credit per store: verified in staging.
- normalise regional modifier: owner: delivery manager.
- expose regional order in the queue: blocked on store systems.
- document stale menu item in the queue: blocked on store systems.
- normalise expired store: owner: delivery manager.
- log expired catering tray: verified in staging.
- log expired modifier: owner: delivery manager.
- handle empty catering tray: owner: delivery manager.
- retry stale delivery window: decided.
- cache duplicate location: verified in staging.
- paginate duplicate modifier in the queue: blocked on store systems.
- dedupe cancelled store: verified in staging.

- document stale delivery window on checkout: owner: delivery manager.
- validate oversized receipt: owner: delivery manager.
- relax stale loyalty credit at close: owner: delivery manager.
- normalise regional location in the queue: deferred to the next release.
- dedupe stale location: deferred to the next release.
- paginate regional receipt: blocked on store systems.
- add duplicate location for pickup: verified in staging.
- add stale order for franchisees: owner: delivery manager.
- tighten stale menu item: owner: delivery manager.
- add late cart line for franchisees: open.
- dedupe late guest: open.
- relax partial modifier on checkout: decided.
- tighten partial store: open.
- trim duplicate loyalty credit: owner: delivery manager.
