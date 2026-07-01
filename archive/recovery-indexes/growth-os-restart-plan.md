# Portico Growth OS Restart Plan

Created: July 1, 2026

## Current State

The recovered Growth OS app is present and builds successfully.

Recovered app path:

`/Users/jessicastonish/Documents/Codex/recovered-from-padmin/padmin-Documents/New project/portico-growth-os`

Local review URL while the Codex server is running:

`http://127.0.0.1:3000`

Build status:

- `vinext build` passed.
- Local server returned `200 OK`.
- The app is currently a vinext/Next dashboard with hard-coded GTM data in `app/page.tsx`.
- `.openai/hosting.json` exists, but D1/R2 are not enabled yet.
- The project itself is not currently its own Git repository.

Important recovery note:

Some generated cache paths still reference the old profile path under `/Users/padmin`. Before publishing or making this the long-term home base, create a clean active copy without copied build/cache folders such as `.vinext`, `dist`, `.wrangler`, and `node_modules`.

## What Already Exists

The recovered app already includes:

- Weekly GTM dashboard shell
- Week-ahead operating view
- Dashboard view with bookings, pipeline, valid inbound, win rate, and average deal size
- H1 review view
- H2 start/stop/scale plan
- Key account watch list
- HubSpot links
- Marketing quick links
- Portico branding and styling

The app already contains H1 metrics such as:

- H1 bookings: `$3.52M`
- H1 bookings target: `$4.94M`
- Q2 bookings: `$1.87M`
- H2 needed: `$7.90M`
- Active pipeline: `$12.39M`
- H1 valid inbound: `147`
- H1 valid inbound target: `166`

## Most Important Recovered Inputs

Use these as the first source set:

- `New project/portico-growth-os/app/page.tsx`
- `New project/natalie-codex-coach-package/source-context/portico-gtm-starter-brain.md`
- `New project/next-gen-jess-career-coach/Plans/2026-06-29-h1-retro-h2-plan-working-notes.md`
- `New project/next-gen-jess-career-coach/Plans/2026-06-29-portico-okr-health-dashboard.md`
- `New project/next-gen-jess-career-coach/References/2026-h1-okrs.md`
- `New project/outputs/hubspot_gtm_targets_2026_06_30/summary.json`
- `New project/outputs/hubspot_gtm_targets_2026_06_30/*.csv`
- `New project/outputs/portico_gtm_memo/inbound_analysis_may_june_update.md`
- `New project/outputs/inbound_benchmarks_update_2026_06_30`
- `New project/Portico Content Calendar.xlsx`
- `New project/portico-marketing-calendar`
- `New project/research/portico_context`
- `New project/outputs/coldiq_campaigns_portico_drafts_v2.md`
- `New project/outputs/post_event_hubspot_sequence_portico_suite.md`

## Missing Or Needs Refresh

The Growth OS should not be treated as fully current until these are refreshed:

- Latest HubSpot bookings, active pipeline, closed won, closed lost, and valid inbound after July 1, 2026
- Current 2026 company/marketing goals and definitions
- Valid lead definition accepted by leadership
- H2 target-account list
- Current ColdIQ / Clay campaign status
- Current product positioning by lane: Financial Aid, Clinical Management, Attendance, SIS/CRM, Payments
- Latest content calendar and event calendar
- Paid/LinkedIn campaign status
- Sales/RevOps definitions for sourced, influenced, accepted, and closed-won impact
- Recent meeting context from Outlook/Teams/Slack/Granola if available

## Recommended Next Steps

1. Create a clean active project folder.
   - Copy the Growth OS source into a new stable folder.
   - Exclude copied cache/build/dependency folders.
   - Initialize Git so changes are safely versioned.

2. Make a GTM brain source map.
   - Create one index of every source feeding the dashboard.
   - Mark each source as live, stale, needs refresh, or needs owner confirmation.

3. Move hard-coded dashboard data into structured files.
   - Start with local JSON or TypeScript data files.
   - Later move durable data into D1 if the dashboard needs hosted editing or refresh history.

4. Build the core Growth OS sections.
   - Executive snapshot
   - H1 retro
   - H2 plan
   - Pipeline and bookings
   - Valid inbound
   - Campaign lanes
   - Account watch
   - Content and event operating rhythm
   - Source map / data freshness

5. Refresh the numbers.
   - Use the July 1 HubSpot export as the current baseline.
   - Pull or import the next HubSpot snapshot before sharing with leadership.
   - Keep every metric tied to a source and pulled-at date.

6. Turn the GTM brain into reusable context.
   - One master Portico positioning file
   - One goals/OKR file
   - One product-lane file
   - One campaigns file
   - One account/market intelligence file
   - One source-of-truth map

7. Publish only after the source map is clean.
   - Use Sites because `.openai/hosting.json` exists.
   - Enable D1 only if the dashboard needs persistent hosted data.
   - Keep private/internal access unless explicitly approved.

## Best First Working Version

The first useful version should answer:

- Where do we stand against 2026 goals?
- What actually happened in H1?
- What is the H2 plan?
- What campaigns are active or blocked?
- What accounts need attention?
- Which numbers are fresh, stale, or still manual?
- What should Jessica do this week?

## Suggested Data Model

Start simple:

- `data/gtm-brain.ts`
- `data/metrics.ts`
- `data/accounts.ts`
- `data/campaigns.ts`
- `data/content-calendar.ts`
- `data/source-map.ts`
- `data/h1-retro.ts`
- `data/h2-plan.ts`

Each metric should include:

- label
- value
- target
- period
- source
- pulled_at
- freshness
- notes

## Immediate Decision

Decide whether the first milestone is:

1. **Review-only dashboard:** clean and stabilize the recovered app, keep data manual.
2. **Operating dashboard:** add structured local data files and a repeatable refresh process.
3. **Hosted Growth OS:** publish internally with Sites and add D1 if ongoing source refresh/history matters.

Recommended choice: **Operating dashboard** first, then hosted Growth OS after the source map is trustworthy.

