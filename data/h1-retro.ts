import {
  dashboardLinks,
  sourcePaths,
  type H1NarrativeItem,
  type H1PipelineCoverage,
  type H1PipelineSegment,
  type H1SnapshotMetric,
  type H1TargetRow,
  type MetricRecord,
} from "./source-map";

const hubspotBaseline = {
  source: "HubSpot CRM API, deals object, bookings pipeline summary",
  source_path_or_url: sourcePaths.hubspotSummary,
  pulled_at: "2026-07-01T14:03:48.123554+00:00",
  owner: "RevOps / Jessica",
  freshness: "fresh",
  confidence: "high",
} satisfies Pick<
  MetricRecord,
  "source" | "source_path_or_url" | "pulled_at" | "owner" | "freshness" | "confidence"
>;

const q2KickoffSource = {
  source: "Q2 sales kickoff deck extraction",
  source_path_or_url: sourcePaths.q2SalesKickoff,
  pulled_at: "2026-04-06",
  owner: "Sales leadership / RevOps",
  freshness: "needs_refresh",
  confidence: "medium",
} satisfies Pick<
  MetricRecord,
  "source" | "source_path_or_url" | "pulled_at" | "owner" | "freshness" | "confidence"
>;

const planningSource = {
  source: "H1 retro and H2 planning notes",
  source_path_or_url: sourcePaths.h1RetroWorkingNotes,
  pulled_at: "2026-06-29",
  owner: "Jessica",
  freshness: "needs_refresh",
  confidence: "medium",
} satisfies Pick<
  MetricRecord,
  "source" | "source_path_or_url" | "pulled_at" | "owner" | "freshness" | "confidence"
>;

export const h1SnapshotMetrics: H1SnapshotMetric[] = [
  {
    ...hubspotBaseline,
    id: "h1-snapshot-bookings",
    label: "H1 bookings",
    value: "$3.52M",
    target: "$4.94M",
    period: "H1 2026",
    note: "$4.94M target",
    accent: "teal",
    href: dashboardLinks.bookingsDashboard,
    notes: "Closed-won bookings only. HubSpot summary reports ytd_closed_won bookings of $3.52M.",
  },
  {
    ...hubspotBaseline,
    id: "h1-snapshot-gap",
    label: "H1 gap",
    value: "$1.42M",
    target: "$0 gap",
    period: "H1 2026",
    note: "Shortfall vs. plan",
    accent: "terracotta",
    href: dashboardLinks.bookingsDashboard,
    notes: "Calculated from H1 target of $4.94M less H1 closed-won bookings of $3.52M.",
  },
  {
    ...hubspotBaseline,
    id: "h1-snapshot-q2-bookings",
    label: "Q2 bookings",
    value: "$1.87M",
    target: "$2.83M",
    period: "Q2 2026",
    note: "$2.83M target",
    accent: "blue",
    href: dashboardLinks.bookingsDashboard,
    notes: "HubSpot summary reports q2_closed_won bookings of $1.87M.",
  },
  {
    ...hubspotBaseline,
    id: "h1-snapshot-h2-needed",
    label: "H2 needed",
    value: "$7.90M",
    target: "$11.42M FY plan",
    period: "H2 2026",
    note: "To hit 2026 plan",
    accent: "pink",
    href: dashboardLinks.bookingsDashboard,
    notes: "Calculated from 2026 bookings target of $11.42M less YTD closed-won bookings.",
  },
];

export const h1BookingsRows: H1TargetRow[] = [
  {
    ...hubspotBaseline,
    id: "h1-bookings-q1",
    label: "Q1 closed won",
    value: "$1.65M",
    actual: "$1.65M",
    target: "$2.11M",
    gap: "$458K gap",
    period: "Q1 2026",
    percent: 78,
    accent: "blue",
    href: dashboardLinks.bookingsDashboard,
    notes: "HubSpot summary reports q1_closed_won bookings of $1.65M.",
  },
  {
    ...hubspotBaseline,
    id: "h1-bookings-q2",
    label: "Q2 closed won",
    value: "$1.87M",
    actual: "$1.87M",
    target: "$2.83M",
    gap: "$961K gap",
    period: "Q2 2026",
    percent: 66,
    accent: "terracotta",
    href: dashboardLinks.bookingsDashboard,
    notes: "HubSpot summary reports q2_closed_won bookings of $1.87M.",
  },
  {
    ...hubspotBaseline,
    id: "h1-bookings-h1",
    label: "H1 closed won",
    value: "$3.52M",
    actual: "$3.52M",
    target: "$4.94M",
    gap: "$1.42M gap",
    period: "H1 2026",
    percent: 71,
    accent: "teal",
    href: dashboardLinks.bookingsDashboard,
    notes: "HubSpot summary reports ytd_closed_won bookings of $3.52M.",
  },
  {
    ...hubspotBaseline,
    id: "h1-bookings-2026",
    label: "2026 closed won",
    value: "$3.52M",
    actual: "$3.52M",
    target: "$11.42M",
    gap: "$7.90M remaining",
    period: "FY 2026",
    percent: 31,
    accent: "pink",
    href: dashboardLinks.bookingsDashboard,
    notes: "YTD closed-won bookings against 2026 bookings target from Q2 kickoff.",
  },
];

export const h1SegmentRows: H1TargetRow[] = [
  {
    ...q2KickoffSource,
    id: "h1-segment-q1-enterprise",
    label: "Q1 Enterprise",
    value: "$1.10M",
    actual: "$1.10M",
    target: "$1.51M",
    gap: "$407K gap",
    period: "Q1 2026",
    percent: 73,
    accent: "blue",
    href: dashboardLinks.bookingsDashboard,
    notes: "Segment target from Q2 kickoff; actual recovered from dashboard and needs segment export refresh.",
  },
  {
    ...q2KickoffSource,
    id: "h1-segment-q1-programmatic",
    label: "Q1 Programmatic",
    value: "$549K",
    actual: "$549K",
    target: "$602K",
    gap: "$53K gap",
    period: "Q1 2026",
    percent: 91,
    accent: "teal",
    href: dashboardLinks.bookingsDashboard,
    notes: "Segment target from Q2 kickoff; actual recovered from dashboard and needs segment export refresh.",
  },
  {
    ...q2KickoffSource,
    id: "h1-segment-q2-enterprise",
    label: "Q2 Enterprise",
    value: "$1.07M",
    actual: "$1.07M",
    target: "$1.99M",
    gap: "$920K gap",
    period: "Q2 2026",
    percent: 54,
    accent: "terracotta",
    href: dashboardLinks.bookingsDashboard,
    notes: "Q2 enterprise target from Q2 kickoff; actual recovered from dashboard and needs segment export refresh.",
  },
  {
    ...q2KickoffSource,
    id: "h1-segment-q2-programmatic",
    label: "Q2 Programmatic",
    value: "$801K",
    actual: "$801K",
    target: "$841K",
    gap: "$40K gap",
    period: "Q2 2026",
    percent: 95,
    accent: "teal",
    href: dashboardLinks.bookingsDashboard,
    notes: "Q2 programmatic target from Q2 kickoff; actual recovered from dashboard and needs segment export refresh.",
  },
  {
    ...q2KickoffSource,
    id: "h1-segment-h1-enterprise",
    label: "H1 Enterprise",
    value: "$2.17M",
    actual: "$2.17M",
    target: "$3.50M",
    gap: "$1.33M gap",
    period: "H1 2026",
    percent: 62,
    accent: "terracotta",
    href: dashboardLinks.bookingsDashboard,
    notes: "Derived from Q1 and Q2 segment reads; needs segment export refresh.",
  },
  {
    ...q2KickoffSource,
    id: "h1-segment-h1-programmatic",
    label: "H1 Programmatic",
    value: "$1.35M",
    actual: "$1.35M",
    target: "$1.44M",
    gap: "$93K gap",
    period: "H1 2026",
    percent: 94,
    accent: "teal",
    href: dashboardLinks.bookingsDashboard,
    notes: "Derived from Q1 and Q2 segment reads; needs segment export refresh.",
  },
];

const h1PipelineSegments: H1PipelineSegment[] = [
  {
    ...hubspotBaseline,
    id: "h1-pipeline-demo-differentiation",
    label: "Demo and differentiation",
    value: "$5.71M",
    target: "$12.39M active pipeline",
    period: "Active pipeline snapshot",
    percent: 46,
    accent: "blue",
    notes: "HubSpot summary active_by_stage reports $5.71M in Demo and Differentiation.",
  },
  {
    ...hubspotBaseline,
    id: "h1-pipeline-prospect-qualify",
    label: "Prospect and qualify",
    value: "$2.09M",
    target: "$12.39M active pipeline",
    period: "Active pipeline snapshot",
    percent: 17,
    accent: "gold",
    notes: "HubSpot summary active_by_stage reports $2.09M in Prospect and Qualify.",
  },
  {
    ...hubspotBaseline,
    id: "h1-pipeline-proposal-negotiation",
    label: "Proposal and negotiation",
    value: "$1.59M",
    target: "$12.39M active pipeline",
    period: "Active pipeline snapshot",
    percent: 13,
    accent: "teal",
    notes: "HubSpot summary active_by_stage reports $1.59M in Proposal and Negotiation.",
  },
  {
    ...hubspotBaseline,
    id: "h1-pipeline-proof-validation",
    label: "Proof and validation",
    value: "$1.27M",
    target: "$12.39M active pipeline",
    period: "Active pipeline snapshot",
    percent: 10,
    accent: "pink",
    notes: "HubSpot summary active_by_stage reports $1.27M in Proof and Validation.",
  },
  {
    ...hubspotBaseline,
    id: "h1-pipeline-other-stages",
    label: "Other / omitted stages",
    value: "$1.73M",
    target: "$12.39M active pipeline",
    period: "Active pipeline snapshot",
    percent: 14,
    accent: "neutral",
    notes: "Derived from remaining active_by_stage amounts in HubSpot summary.",
  },
];

export const h1PipelineCoverage: H1PipelineCoverage = {
  ...hubspotBaseline,
  id: "h1-pipeline-coverage",
  label: "Pipeline stage coverage",
  value: "$12.39M",
  target: "$40.0M FY coverage target",
  period: "Active pipeline snapshot",
  href: dashboardLinks.pipelineDashboard,
  totalLabel: "active bookings pipeline",
  segments: h1PipelineSegments,
  notes: "HubSpot summary reports active_pipeline bookings of $12.39M by stage.",
};

export const h1Retrospective: H1NarrativeItem[] = [
  {
    lead: "The miss is concentrated in Enterprise.",
    text: "Programmatic Clinical Management landed much closer to H1 plan, while Enterprise carried the larger bookings gap.",
  },
  {
    lead: "A lot of H1 effort went to OBBBA, but we lagged on FA deals.",
    text:
      "The qualitative read is that schools are listening and engaging, but many are still in prep and panic mode rather than buying mode. That work should create stronger H2 FA conversations as the market moves from deadline response to process change.",
  },
  {
    lead: "Core demand channels, paid media and cold outbound email, were down.",
    text:
      "The team audited and paused paid campaigns in February. Target-account LinkedIn ads and ColdIQ outbound relaunch July 7 with tighter alignment to product focus and target accounts.",
  },
  {
    lead: "Portico needs a strategic narrative that positions us for growth.",
    text:
      "Portico is now known enough to shift the message from legacy-product consolidation to the problems FA, Attendance, and Clinical Management solve today.",
  },
  {
    lead: "Major account support needs a shared operating rhythm.",
    text:
      "Marketing can create assets and de-risk the buying process, but whale-account visibility has to be clearer across sales, marketing, and leadership.",
  },
];

export const h1RetrospectiveSummary =
  "H1 improved the marketing engine, but the bookings gap shows where H2 needs more focus: clearer product-market narrative, tighter whale-account support, and more reliable demand channels.";

export const h1Trends = [
  "H1 bookings are at $3.52M against a $4.94M target. The gap is concentrated in Enterprise: H1 Enterprise is at 62% of target while Programmatic is at 94%.",
  "Q2 shows the same pattern. Enterprise closed won is at 54% of target, while Programmatic is at 95%.",
  "Active bookings pipeline is $12.39M, with $7.82M slated for Q3 and $4.14M slated for Q4.",
  "The widest active pipeline stage is Demo and Differentiation at $5.71M, followed by Prospect and Qualify at $2.09M.",
  "Late-stage coverage needs attention. Proposal and Negotiation is $1.59M and Proof and Validation is $1.27M.",
  "Valid enterprise inbound is trending down from March to June: 14 in March, 11 in April, 6 in May, and 4 in June.",
  "Valid programmatic inbound is steadier but below late-H1 target: 16 in May and 16 in June against targets of 23 and 26.",
  "Q2 closed-lost data shows $3.11M tied to competitor loss reasons, but the export does not yet return a usable structured competitor value.",
];

export const h1DataNotes = [
  "Bookings attainment is strict closed won only. Signed deals are excluded until they move to closed won in HubSpot.",
  "For this view, Programmatic means deals that are only Clinical Management. Everything else, including bundles that include Clinical Management, rolls up to Enterprise.",
  "Product-group reporting should normalize legacy labels into SIS, CRM, Clinical Management, Financial Aid Software, Financial Aid Services, Attendance, Payments, and related bundles.",
  "Current open pipeline is a snapshot from HubSpot. SKO pipeline targets are pipeline coverage/generation targets, so those should not be treated as the same metric without a note.",
  "Valid inbound uses sales-passed enterprise demo requests plus programmatic Clinical Management info requests. It excludes bots, students, no-email records, vendors, spam, and other non-buyer noise.",
  "Closed-lost competitor detail is useful only when sales captures it consistently somewhere structured. The current API export does not return a usable competitor value for Q2.",
];

export const h1NarrativeSource = {
  ...planningSource,
  id: "h1-narrative-source",
  label: "H1 retrospective narrative",
  value: "Narrative source",
  target: "Refresh with leadership-reviewed H1 readout",
  period: "H1 2026",
  notes:
    "Narrative comes from the H1 retro/H2 planning notes and should be treated as a working read until leadership review.",
};
