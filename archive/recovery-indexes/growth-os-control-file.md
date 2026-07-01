# Portico Growth OS Control File

Created: July 1, 2026

## Purpose

This is the new starting control file for rebuilding the Portico Growth OS in the new Codex profile.

The Growth OS is not only the dashboard. It is the operating layer that connects:

- Portico GTM brain
- daily morning sweep
- HubSpot signals
- Granola meeting notes
- Gong call intelligence
- content calendar
- campaign calendar
- H1/H2 planning
- positioning and product-lane strategy
- active priorities and handoffs

## Current Recovery Status

- Recovered old pinned thread: yes
- Recovered old morning sweep thread: yes
- Recovered Growth OS dashboard: yes
- Dashboard builds locally: yes
- Dashboard runs locally: yes
- Recovered Portico source files: yes
- Recovered HubSpot exports: yes
- Recovered content calendar files: yes
- Recovered local API setup folder: yes
- Verified live app connections in new profile: not yet
- Verified local API credentials in new profile: partially

## Active Dashboard

Recovered app:

`/Users/jessicastonish/Documents/Codex/recovered-from-padmin/padmin-Documents/New project/portico-growth-os`

Local URL when server is running:

`http://127.0.0.1:3000`

Current limitation:

Dashboard data is mostly hard-coded in `app/page.tsx`. It needs a structured data layer before it can become a reliable operating dashboard.

## Source Registry

| Source | Current status | Role | Next action |
| --- | --- | --- | --- |
| Growth OS old thread | Recovered | Operating memory and original strategy | Extract durable decisions into source files |
| Morning sweep old thread | Recovered | Daily operating pattern | Turn into reusable daily sweep checklist |
| Portico GTM starter brain | Recovered | Base company/product context | Refresh with latest positioning |
| Portico context brief | Recovered | Public site + internal source synthesis | Mark stale/fresh by section |
| H1/H2 notes | Recovered | Retro and planning narrative | Reconcile with latest numbers |
| 2026 H1 OKRs | Recovered | Goal frame | Confirm current 2026 goals |
| HubSpot exports | Recovered through July 1 | Bookings, pipeline, closed won/lost | Refresh through live HubSpot |
| Content calendar workbook | Recovered | Campaign/content operating calendar | Confirm SharePoint source-of-truth |
| Marketing calendar repo | Recovered | Public/local calendar app | Confirm whether still active |
| ColdIQ files | Recovered | Outbound/ABM launch state | Refresh campaign status |
| OOO/handoff files | Recovered | Task state and historical handoffs | Archive useful status into Growth OS |
| Granola | Local setup recovered | Meeting intelligence | Verify token/access |
| Gong | Credentials saved; API auth works; no calls visible yet | Call intelligence | Ask Gong admin to grant call/transcript visibility |
| Outlook Email | Old connector used | Inbox context | Verify connector in new profile |
| Outlook Calendar | Old connector used | Calendar and work blocks | Verify read/write permissions |
| Teams | Old connector used | Internal asks and recent threads | Verify connector in new profile |
| Slack | Old connector used | Internal/activity context | Verify connector in new profile |
| SharePoint | Old connector used | Docs, workbooks, calendars | Verify connector in new profile |
| GitHub | Old connector used | Repos and versioning | Verify connector in new profile |
| Trello | Setup needed | Weekly priorities | Decide whether still needed |

## Daily Morning Sweep Contract

Each morning sweep should produce:

- today's calendar readout
- conflicts and focus windows
- relevant unread/recent email
- Teams/Slack items needing response
- HubSpot pipeline/inbound/account changes
- campaign launch blockers
- content calendar due items
- Granola meeting follow-ups
- Gong call insights when available
- urgent decisions needed from Jessica
- recommended top 3 priorities for the day

## Dashboard Data Contract

Every dashboard metric should include:

- metric name
- current value
- target
- period
- source system
- source file or URL
- pulled-at date
- owner
- freshness status
- confidence level
- notes / caveats

Recommended freshness statuses:

- `live`
- `fresh`
- `needs refresh`
- `manual`
- `unverified`
- `blocked`

## First Rebuild Milestone

Create the active Growth OS source folder with structured files:

- `sources/source-registry.md`
- `sources/portico-gtm-brain.md`
- `sources/2026-goals.md`
- `sources/product-lanes.md`
- `sources/h1-retro-h2-plan.md`
- `sources/campaigns.md`
- `sources/account-watch.md`
- `sources/content-calendar.md`
- `sources/connector-status.md`
- `sources/daily-sweep.md`
- `data/dashboard-metrics.ts`

## Reconnection Checklist

1. Verify Outlook Email.
2. Verify Outlook Calendar read.
3. Verify Outlook Calendar write if work blocks/reminders matter.
4. Verify Teams search/read.
5. Verify Slack search/read.
6. Verify SharePoint file access.
7. Verify GitHub repo access.
8. Verify HubSpot token locally.
9. Verify Granola token locally.
10. Verify Gong call/transcript visibility with admin.
11. Decide whether Trello still belongs in the workflow.

## Safe Credential Rule

Never paste API tokens, access keys, or secrets into chat.

Use local `.env.local` files or connector auth flows only.

## Recommended Next Action

Start with file-based reconstruction before live connectors:

1. Create the active Growth OS source folder.
2. Copy/rewrite the recovered GTM brain into current source files.
3. Move dashboard metrics out of `app/page.tsx` into structured data.
4. Add source freshness states.
5. Then verify live connectors one by one.

## Gong Status

Gong credentials were saved locally on July 1, 2026 in:

`/Users/jessicastonish/Documents/Codex/recovered-from-padmin/padmin-Documents/New project/gtm_brain_access/.env.local`

The file permissions are owner-only (`600`).

Read-only API checks now authenticate successfully.

Current result:

- HubSpot API check: working
- Trello API check: working
- Granola API check: working
- Gong API authentication: working
- Gong visible calls: `0` for the last 30 days, 90 days, and H1 2026

Likely next Gong action:

Ask the Gong admin to confirm the API key has access to call metadata and transcript/call content for the teams/users Jessica needs. The credentials are valid, but the current key does not expose calls to the API query.
