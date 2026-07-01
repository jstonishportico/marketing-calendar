# Dashboard Data Contract

Every dashboard metric should carry its source with it.

## Current Data Layer Status

As of July 1, 2026, `data/` exists but has no dashboard-ready data files. The recovered dashboard still keeps most operating metrics, narrative notes, links, account updates, campaign updates, and chart values hard-coded in `dashboard/app/page.tsx`.

## Target Source Rule

For SKO-derived targets and actuals, use the written SKO document / agenda numbers summarized in `sources/planning/2026-sko-targets-and-q1-actuals.md`. Do not treat generated SKO slide tables as authoritative unless finance or revops confirms them.

## Required Fields

- `id`
- `label`
- `value`
- `target`
- `period`
- `source`
- `source_path_or_url`
- `pulled_at`
- `owner`
- `freshness`
- `confidence`
- `notes`

## Freshness Values

- `live`
- `fresh`
- `needs_refresh`
- `manual`
- `unverified`
- `blocked`

## First Data Files To Create

- `data/metrics.ts`
- `data/h1-retro.ts`
- `data/h2-plan.ts`
- `data/campaigns.ts`
- `data/accounts.ts`
- `data/content-calendar.ts`
- `data/source-map.ts`
