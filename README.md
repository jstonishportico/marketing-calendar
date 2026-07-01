# Portico Growth OS

Active home base for the Portico Growth OS and the Portico marketing calendar repository.

This folder is the durable system of record. Chats can help operate it, but the strategy, sources, dashboard data, connector status, and decisions should live here so the operating system is not trapped inside any one Codex thread.

The existing marketing calendar page remains at the repository root in `index.html`. The recovered Growth OS dashboard app lives in `dashboard/`.

## Folder Map

- `operating-system/` - control files, source registry, connector status, data contract, and decision log
- `sources/portico-brain/` - Portico positioning, product-lane strategy, GTM brain, and extracted source synthesis
- `sources/planning/` - H1 retro, H2 plan, 2026 OKRs, and planning artifacts
- `sources/campaigns/` - ColdIQ, outbound, post-event, and campaign workstream inputs
- `sources/hubspot/` - exported HubSpot snapshots and analysis baselines
- `sources/content-calendar/` - content, events, and marketing calendar source files
- `sources/extracted/` - text extracted from decks, brand docs, kickoff notes, and other source material
- `sources/handoff/` - OOO, handoff, and daily-work transition notes
- `data/` - future dashboard-ready structured data
- `dashboard/` - clean copy of the recovered Growth OS dashboard app, without old build caches
- `archive/recovery-indexes/` - recovery maps and old-thread indexes from the profile migration

## Current Priority

As of July 1, 2026, operate the Growth OS in this order:

1. Restore the Growth OS home base: keep `operating-system/` files, source status, and decisions coherent.
2. Build the dashboard data layer: move hard-coded dashboard numbers into structured `data/` files.
3. Rebuild the GTM source of truth: refresh Portico positioning, product lanes, goals, planning, campaigns, accounts, and content sources.
4. Verify live inputs one at a time, starting with read-only checks and recording status in `operating-system/connector-status.md`.
5. Rebuild the dashboard as an operating surface once source data and freshness states are clear.

Morning sweep is intentionally lower priority until the home base, dashboard data layer, live inputs, and GTM source of truth are restored. Dashboard polish, including Hepta Slab / Hepta Slab Bold, should follow the data-layer work unless it blocks usability.
