# Source Registry

Last updated: 2026-07-01

## Source Status Labels

- `live` - connected source can be queried now
- `source of truth` - authoritative source for a defined metric, target, status, or operating rule
- `fresh` - recently exported or manually verified
- `needs refresh` - useful but stale
- `manual` - maintained by hand
- `blocked` - known access or permission issue
- `archive` - retained for recovery/history, not active truth

## Active Source Families

| Source Family | Folder | Status | Notes |
| --- | --- | --- | --- |
| Portico GTM Brain | `sources/portico-brain/` | needs refresh | Core positioning and product-lane context recovered |
| H1/H2 Planning | `sources/planning/` | needs refresh | Recovered H1 retro, H2 plan, and 2026 OKRs |
| Q2 SKO Targets | `sources/extracted/q2-sales-kickoff-meeting-april-6.txt` | source of truth | Written SKO document / agenda numbers are authoritative for Q1 actuals, Q2 targets, Q2 pipeline generation targets, and the documented 2026 pipeline goal. Generated slide tables are reference-only until finance or revops confirms them. Extracted summary lives in `sources/planning/2026-sko-targets-and-q1-actuals.md` |
| HubSpot Baseline | `sources/hubspot/2026-06-30/` | fresh baseline | Useful July 1 recovery baseline; should be refreshed before leadership use |
| Content Calendar | `sources/content-calendar/` | needs owner confirmation | Day-to-day comms calendar; event-driven entries should be reconciled against the master event spreadsheet |
| Master Event Spreadsheet | `sources/content-calendar/Conferences Spreadsheet_2026 Planning - updated Jun 2 2026.xlsx` | needs owner confirmation | Upstream event source for event dates, locations, audience, attendee lists, team reps, budget/context, and follow-up planning |
| Campaigns | `sources/campaigns/` | needs refresh | ColdIQ, post-event, outbound, and campaign-state inputs recovered |
| Extracted Source Material | `sources/extracted/` | archive/needs refresh | Deck and source text recovered from prior extraction work |
| Handoff State | `sources/handoff/` | archive | Useful for continuity, not current operating truth |
| Recovery Indexes | `archive/recovery-indexes/` | archive | Migration and thread recovery maps |
| Dashboard | `dashboard/` | active app, needs data layer | Runs locally; data is still mostly hard-coded |

## Next Source Work

1. Mark each recovered source as active, stale, archive, or blocked.
2. Identify owner/source-of-truth for each metric.
3. Reconcile content-calendar event entries against the master event spreadsheet before event comms changes.
4. Use the Q2 SKO written document / agenda numbers as the initial target baseline when creating dashboard-ready structured data in `data/`; keep generated slide tables reference-only.
