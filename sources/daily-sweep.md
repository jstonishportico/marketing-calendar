# Daily Morning Sweep Protocol

Created: 2026-07-01

## Current Status

Draft protocol only. The morning sweep is not automated or re-enabled in this Codex profile.

Per the Growth OS control file, the morning sweep stays lower priority until the home base, dashboard data layer, live inputs, and GTM source of truth are stable.

## Purpose

The morning sweep should turn overnight and near-term GTM signals into a practical daily operating brief for Jessica.

Each sweep should answer:

- What is on today's calendar?
- Where are there conflicts, prep needs, or focus windows?
- Which email, Teams, or Slack items need a response?
- What changed in HubSpot, campaigns, content, accounts, Granola notes, or Gong calls?
- What decisions or blockers need attention?
- What are the recommended top 3 priorities for the day?

## Required Inputs

| Input | Current status | Use in sweep | Notes |
| --- | --- | --- | --- |
| Outlook Calendar | Needs verification in this profile | Today's schedule, conflicts, prep windows, focus windows | Read-only first; write access only if calendar holds/reminders become part of the workflow |
| Outlook Email | Needs verification in this profile | Recent/unread messages that change the day | Read-only inbox/search check required |
| Teams | Needs verification in this profile | Internal asks, blockers, launch coordination | Read-only recent/search check required |
| Slack | Needs verification in this profile | Internal asks, blockers, launch coordination | Read-only recent/search check required |
| HubSpot | Live read works | Pipeline, inbound, campaign/account changes | Needs dashboard-ready refresh layer rather than relying only on June 30 baseline |
| Granola | Live read works | Meeting follow-ups and stakeholder commitments | Pull scoped metadata/summaries with sensitive content handling |
| Gong | Auth works; 0 visible calls | Call themes, objections, commitments, transcript-derived GTM language | Blocked until Gong admin grants call/transcript visibility |
| SharePoint/content calendar | Needs verification in this profile | Due content, events, campaign calendar | Confirm workbook/source of truth |
| Campaign and handoff files | Recovered; mixed freshness | Launch blockers, active priorities, continuity | Mark active/stale/archive before relying on them |
| Dashboard source map | Active but still maturing | Source freshness, metric caveats, dashboard-ready signals | Align with `data/source-map.ts` and dashboard data contract |

## Manual Run Checklist

1. Read today's calendar and identify conflicts, prep needs, and useful focus windows.
2. Review recent/unread email for items that change today's priorities.
3. Review Teams and Slack for mentions, asks, launch blockers, and decisions.
4. Check HubSpot for meaningful pipeline, inbound, campaign, or account movement.
5. Check content calendar and campaign files for due items or blockers.
6. Check recent Granola notes for follow-ups and commitments.
7. Check Gong only after call visibility is fixed.
8. Compare findings against dashboard source freshness and known stale sources.
9. Produce a daily operating brief.
10. Write durable updates where appropriate instead of leaving the output only in chat.

## Daily Brief Shape

Recommended durable output path once daily briefs are activated:

`operating-system/daily-sweeps/YYYY-MM-DD.md`

Each brief should include:

- date and pulled-at time
- source freshness summary
- calendar readout
- conflicts and focus windows
- messages needing response
- HubSpot/account/campaign changes
- content calendar due items
- meeting follow-ups
- blockers and decisions needed
- recommended top 3 priorities
- durable files updated
- sources skipped or blocked

## Durable Update Targets

Use these files when the sweep finds something that should persist:

| Finding type | Durable target |
| --- | --- |
| Connector status or smoke-test result | `operating-system/connector-status.md` |
| Source freshness or source-of-truth change | `operating-system/source-registry.md` and `data/source-map.ts` |
| Dashboard metric change | `data/metrics.ts` and related `data/` files |
| Campaign status or blocker | `sources/campaigns/` active campaign file |
| Account signal or watch item | future account-watch source file |
| Content calendar due item | content calendar source file or a dated daily brief |
| Planning implication | `sources/planning/` and `operating-system/decision-log.md` |
| Daily recommendations | dated daily brief file |

## Automation Readiness Gate

The morning sweep can be considered for automation only after:

- Outlook Calendar and Email are verified read-only in this profile.
- Teams and Slack are verified read-only in this profile.
- SharePoint source-of-truth for the content calendar is confirmed.
- HubSpot and Granola refresh paths are documented.
- Gong is either fixed or explicitly excluded from the first automated version.
- The manual sweep has run successfully at least once and written a durable daily brief.

