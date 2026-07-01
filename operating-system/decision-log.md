# Decision Log

Durable decisions for the Portico Growth OS. Add entries here when a priority, source status, metric definition, blocker, or operating rule is confirmed.

## 2026-07-01 - Prioritize Growth OS Restoration Before Morning Sweep

Decision:

The top priority is restoring the Growth OS home base, dashboard data layer, live inputs, and GTM source of truth. Morning sweep is intentionally lower priority for now.

Implications:

- Keep `operating-system/` files coherent before expanding daily workflows.
- Move dashboard values out of hard-coded app files and into structured `data/` files.
- Refresh GTM source-of-truth files before treating recovered source material as current.
- Verify live inputs one at a time with read-only checks first.

Written back to:

- `README.md`
- `operating-system/growth-os-control-file.md`

## 2026-07-01 - Keep Recurring Workflows Gated Until Sources And Connectors Are Verified

Decision:

Recurring Growth OS workflows may be documented now, but no automation should be created or re-enabled until the active source registry and connector status are current.

Implications:

- The morning sweep can be rebuilt as a protocol before it is scheduled.
- Every recurring workflow needs a durable update target before activation.
- Automation output should write back to project files where appropriate, not only to chat.
- Read-only connector checks should happen before write-enabled reminders, holds, nudges, or status updates.

Written back to:

- `operating-system/automation-registry.md`
- `sources/daily-sweep.md`

## 2026-07-01 - Treat Q2 SKO Document Numbers As Source Of Truth Over Slides

Decision:

Use the written SKO document / agenda numbers in `sources/extracted/q2-sales-kickoff-meeting-april-6.txt` as the source of truth over generated slide tables. The slides appear AI-generated and should not be treated as cross-checked actuals or targets unless finance or revops confirms them.

Implications:

- Dashboard target values should be rebuilt from document-confirmed SKO numbers, not generated slide-only annual / quarterly tables.
- Q1 actuals should use the SKO Q1 performance review text: `$1,660,281` bookings actual, `$1,900,000` target, 87% attainment, `$5.2M` pipeline created, 32% pipeline conversion, and `$52K` average deal size.
- Q2 targets should use the written SKO values: `$2.83M` bookings target, `$1.99M` enterprise bookings target, `$841K` programmatic bookings target, `$12M` pipeline target, `$9M` enterprise pipeline target, and `$3M` programmatic pipeline target.
- The documented 2026 pipeline goal is `$28.45M`, with `$7.70M` current remaining / current pipeline and `$20.76M` gap as written in the agenda.
- Slide-only values such as `$11.4M` / `$11.42M` full-year bookings and `$40M` full-year pipeline are reference-only until confirmed by finance or revops.

Written back to:

- `operating-system/source-registry.md`
- `sources/planning/2026-sko-targets-and-q1-actuals.md`
