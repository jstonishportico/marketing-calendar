# Growth OS Input Map

Created: July 1, 2026

## Core Finding

The dashboard is only one output. The real Growth OS was built from:

- a pinned Codex operating thread
- a morning sweep workflow
- recovered local source files
- app connectors
- local API tokens for systems without native connectors
- source-specific working outputs like HubSpot exports, content calendar files, campaign docs, and H1/H2 planning notes

## Recovered Operating Threads

### Pinned Growth OS Thread

- Old thread ID: `019e3c57-b74b-7e23-b231-242ee9a18986`
- Old title in session index: `Growth OS`
- Original path:
  `/Users/padmin/.codex/sessions/2026/05/18/rollout-2026-05-18T14-27-22-019e3c57-b74b-7e23-b231-242ee9a18986.jsonl`
- Purpose:
  - Portico GTM brain
  - Head-of-growth operating plan
  - Strategic context layer
  - Source extraction
  - Dashboard design
  - Campaign strategy
  - H1/H2 planning

### Morning Sweep / OOO Thread

- Old thread ID: `019ecb9c-4a95-76d2-944f-66d1121f7324`
- Original path:
  `/Users/padmin/.codex/sessions/2026/06/15/rollout-2026-06-15T10-07-58-019ecb9c-4a95-76d2-944f-66d1121f7324.jsonl`
- Purpose:
  - Morning sweep
  - Calendar and inbox triage
  - Teams/Slack best-effort triage
  - Pre-OOO task state
  - Content calendar and handoff work
  - ColdIQ and post-event priorities

### Gong Setup Thread

- Old thread ID: `019f14b3-a409-77a3-9e51-2e6cdcd9ff04`
- Original path:
  `/Users/padmin/.codex/sessions/2026/06/29/rollout-2026-06-29T14-45-45-019f14b3-a409-77a3-9e51-2e6cdcd9ff04.jsonl`
- Purpose:
  - Gong API setup request
  - Teams-message copy for Gong technical admin
  - Read-only Gong call/transcript access plan

## Recovered Source Files

### Portico GTM Brain

- `New project/research/portico_context/portico_context_brief.md`
- `New project/research/portico_context/by_product_marketing_strategy_v0.md`
- `New project/research/portico_context/source_extracts.md`
- `New project/research/portico_context/source_extracts.json`
- `New project/natalie-codex-coach-package/source-context/portico-gtm-starter-brain.md`

### Extracted Source Material

- public Portico site crawl under `New project/research/portico_context/raw_site`
- all-hands decks extracted to text
- Q2 sales kickoff extracted to text
- Portico brand guide extracted to text
- Portico presentation template extracted to text
- Trajecsys SPE Tracker extracted to text
- ColdIQ PMM notes extracted to text

### Dashboard And H1/H2 Planning

- `New project/portico-growth-os`
- `New project/next-gen-jess-career-coach/Plans/2026-06-29-h1-retro-h2-plan-working-notes.md`
- `New project/next-gen-jess-career-coach/Plans/2026-06-29-portico-okr-health-dashboard.md`
- `New project/next-gen-jess-career-coach/References/2026-h1-okrs.md`
- `New project/next-gen-jess-career-coach/Systems/portico-okr-health-dashboard.html`

### HubSpot / GTM Data

- `New project/outputs/hubspot_gtm_targets_2026_06_30/summary.json`
- `New project/outputs/hubspot_gtm_targets_2026_06_30/*.csv`
- `New project/scripts/hubspot_gtm_targets_pull.py`
- `New project/scripts/hubspot_inbound_probe.py`
- `New project/outputs/portico_gtm_memo/inbound_analysis_may_june_update.md`
- `New project/outputs/inbound_benchmarks_update_2026_06_30`

### Content Calendar

- `New project/Portico Content Calendar.xlsx`
- `New project/Portico Content Calendar.backup.xlsx`
- `New project/Portico Content Calendar.backup-before-cecu-post-event-2026-06-29.xlsx`
- `New project/portico-marketing-calendar`
- `New project/outputs/portico_content_calendar`
- `New project/outputs/sharepoint_workbooks`

### ColdIQ / Campaigns

- `New project/research/portico_context/coldiq_abm_trial_brief_2026-05-26.md`
- `New project/research/portico_context/coldiq_onboarding_inputs_v0.md`
- `New project/research/portico_context/coldiq_domain_shortlist_2026-05-26.md`
- `New project/outputs/coldiq_campaigns_portico_drafts.md`
- `New project/outputs/coldiq_campaigns_portico_drafts_v2.md`
- `New project/outputs/coldiq_hubspot_mapping`
- `New project/outputs/hubspot_coldiq_mapping`

### Daily Work / Handoff State

- `New project/portico-ooo-handoff-june-2026.md`
- `New project/natalie-ooo-handover-june-2026.md`
- `New project/todos`
- `New project/outputs/post_event_hubspot_sequence_portico_suite.md`
- `New project/outputs/post_event_hubspot_sequence_template.md`

## App And API Inputs

### Connected Through Codex Apps In The Old Setup

The old transcripts show use of:

- Outlook Calendar
- Outlook Email
- Microsoft Teams
- Slack
- SharePoint
- GitHub
- Browser
- Sites
- Automations
- Thread management tools

The morning sweep specifically used Outlook Calendar and Outlook Email, then attempted Teams/Slack-style recent activity checks as available.

### Connected Locally Through `gtm_brain_access`

Recovered folder:

`New project/gtm_brain_access`

Recovered setup status from its README:

- SharePoint: connected
- GitHub: connected
- Outlook Email: connected
- Teams: connected
- Outlook Calendar: read connected, write blocked
- HubSpot: connected locally through `.env.local`
- Granola: connected locally through `.env.local`
- Trello: API setup needed
- Gong: API setup needed

Important: `.env.local` may contain credentials. Do not paste those into chat or shared docs.

## What Needs Reconnecting In This New Profile

### Must Reconnect Or Verify

- HubSpot private app token
- Granola API token
- Gong API access key/secret
- Outlook Calendar write permissions, if you want Codex to create holds/reminders
- Trello API key/token, if weekly priorities should sync to Trello

### Likely Already Available But Needs Testing

- Outlook Email
- Outlook Calendar read
- Teams
- Slack
- SharePoint
- GitHub

## Morning Sweep Inputs

A full Growth OS morning sweep should pull:

- today's calendar
- unread/recent email that changes the day
- recent Teams/Slack threads or mentions
- active handoff/todo files
- Portico content calendar
- HubSpot campaign, pipeline, inbound, and account signals
- Granola notes from recent meetings
- Gong calls/transcripts once access exists
- current dashboard source map
- unresolved launch blockers

## Dashboard Inputs

The dashboard should be fed by:

- HubSpot bookings / pipeline / closed won / closed lost exports
- valid inbound source
- content calendar
- campaign lane status
- ColdIQ launch status
- account watch list
- H1 OKRs and H2 plan
- GTM brain positioning files
- current source freshness metadata

## Recommended Rebuild Order

1. Restore the Growth OS home base from files.
   - Create an active source registry and daily sweep protocol.
   - Keep the recovered old transcripts as archives, not the live operating surface.

2. Verify app connections.
   - Test Outlook, Teams, Slack, SharePoint, and GitHub from this new profile.
   - Keep read-only checks first.

3. Verify local API access.
   - Run the recovered `gtm_brain_access/check_access.py` only when you are ready to test local tokens.
   - Do not expose tokens in chat.

4. Rebuild the dashboard data layer.
   - Move hard-coded dashboard data into structured source files.
   - Add pulled-at dates, source links, owner, and freshness status.

5. Restore the morning sweep.
   - Use the old morning sweep pattern as the template.
   - Make it produce a daily operating brief and update dashboard source files where appropriate.

6. Add Gong when credentials exist.
   - Start with call metadata.
   - Add transcripts once read access is confirmed.
   - Feed themes into account intelligence, objections, positioning, and campaign themes.

## Immediate Next Step

Build a new active Growth OS control file with:

- source registry
- connector status
- daily sweep checklist
- dashboard data contract
- input refresh cadence
- active workstreams
- known stale sources

