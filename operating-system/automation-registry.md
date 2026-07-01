# Growth OS Automation Registry

Created: 2026-07-01

## Current Status

No Growth OS automations are enabled in this Codex profile.

Automation rebuild is gated until:

- `operating-system/source-registry.md` reflects the active source of truth for each workflow.
- `operating-system/connector-status.md` has read-only verification for each connector a workflow depends on.
- Each workflow has a durable write target for outputs and source freshness updates.
- Any credentialed source uses local `.env.local` files or connector auth flows only.

## Operating Rule

Recurring workflow output should not live only in chat. Each recurring workflow must define:

- what it does
- how often it runs
- which inputs it reads
- which durable files it updates
- what remains manual or blocked
- when a human should review before downstream use

## Workflow Inventory

| Workflow | Status | Cadence | Primary inputs | Durable updates | Gate before enabling |
| --- | --- | --- | --- | --- | --- |
| Morning sweep | Draft protocol created; not automated | Weekday mornings | Outlook Calendar, Outlook Email, Teams, Slack, HubSpot, Granola, Gong when visible, content calendar, campaigns, handoff files, dashboard source map | Daily brief file; connector/source freshness notes; follow-up/task source files where appropriate | Verify Outlook, Teams, Slack, SharePoint, GitHub; confirm HubSpot/Granola refresh path; Gong remains optional until visible |
| Weekly GTM review | Not drafted | Weekly | HubSpot metrics, campaigns, content calendar, account watch, H1/H2 plan, dashboard metrics | Weekly GTM review note; dashboard data freshness; campaign/account updates | Dashboard data layer stable and HubSpot refresh repeatable |
| Dashboard refresh reminders | Not drafted | Weekly or before leadership use | Dashboard data contract, source map, HubSpot export state, content calendar, campaign files | `data/` source freshness fields; refresh log | Structured `data/` files become source of truth |
| Connector health checks | Not drafted | Weekly during rebuild, then biweekly/monthly | Connector smoke tests and local API checks | `operating-system/connector-status.md` verification log | Read-only tests defined per connector |
| Campaign/status check-ins | Not drafted | Weekly, plus launch windows | Campaign docs, HubSpot campaign/account signals, content calendar, Teams/Slack launch blockers | Campaign source files; account watch; daily or weekly status note | Campaign source files marked active/stale/archive |
| H1/H2 planning prompts | Not drafted | Monthly and planning-cycle milestones | H1 retro, H2 plan, OKRs, dashboard metrics, leadership source docs | Planning source files and decision log | Current 2026 goals confirmed |
| Follow-up nudges and recurring operating loops | Not drafted | Daily or weekly depending on lane | Granola notes, Gong when visible, email, Teams/Slack, handoff files, campaign/account docs | Follow-up queue, daily brief, account/campaign source notes | Collaboration connectors verified and durable follow-up target chosen |

## Activation Checklist

Before creating or re-enabling any automation:

1. Confirm the workflow is listed above with a named durable update target.
2. Confirm every required connector has a current status in `operating-system/connector-status.md`.
3. Confirm source files are marked active, stale, archive, or blocked in `operating-system/source-registry.md`.
4. Run a manual version of the workflow once.
5. Review the manual output for sensitive content, missing sources, and stale data.
6. Only then create the automation with a documented cadence and rollback path.

