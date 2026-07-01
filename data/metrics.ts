import {
  dashboardLinks,
  sourcePaths,
  type KpiMetric,
  type MonthlyMetric,
  type MetricRecord,
  type QuickLink,
  type QuickLinkGroup,
  type TargetProgress,
  type WatchMetric,
  type WatchTrend,
} from "./source-map";

const hubspotBaseline = {
  source: "HubSpot CRM API, deals object, pipeline=Bookings (890800444), bookings property preferred over amount",
  source_path_or_url: sourcePaths.hubspotSummary,
  pulled_at: "2026-07-01T14:03:48.123554+00:00",
  owner: "RevOps / Jessica",
  freshness: "fresh",
  confidence: "high",
} satisfies Pick<
  MetricRecord,
  "source" | "source_path_or_url" | "pulled_at" | "owner" | "freshness" | "confidence"
>;

const recoveredSnapshot = {
  source: "Recovered Growth OS dashboard snapshot",
  source_path_or_url: sourcePaths.recoveredDashboard,
  pulled_at: "2026-07-01",
  owner: "Jessica / Codex recovery",
  freshness: "unverified",
  confidence: "low",
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

export const dashboardMeta = {
  title: "Portico GTM Dashboard",
  currentWeekLabel: "Week of June 29, 2026",
  dashboardSubtitle: "MoM and YoY performance view",
  h1Subtitle: "H1 retrospective and H2 plan",
  currentNumbersPulledLabel: "Pulled Jul 1, 2026",
  lastWeekNumbersPulledLabel: "Recovered Jun 22 snapshot",
};

export const quickLinks: QuickLink[] = [
  { label: "Content calendar", href: dashboardLinks.contentCalendar },
  { label: "Pipeline view", href: dashboardLinks.pipelineView },
  { label: "Bookings dashboard", href: dashboardLinks.bookingsDashboard },
  { label: "Pipeline dashboard", href: dashboardLinks.pipelineDashboard },
];

export const marketingLinks: QuickLinkGroup[] = [
  {
    label: "Marketing quick links",
    links: [
      {
        label: "Submit a request",
        href: "https://forms.office.com/Pages/ResponsePage.aspx?id=Qm0cajT_jkW3O3yxhktEDmSUS03WtSJItO0Qa1cTIstUNDlDVlNUREtEUlQxNU1NRjY1N1dTVk9GOC4u",
      },
      {
        label: "Share competitor intel",
        href: "https://simplifyedinc.sharepoint.com/:l:/s/PorticoMarketingPortal/JAAU_z43c7wOQoWot7TkDGcFAYKtoSU9XRdK7tl63wiyv2o?nav=YTU0NmVkNzQtMjg4OS00MmU3LWJjZmItYjMxYjA2NjY1MDk0",
      },
      {
        label: "Submit a case study",
        href: "https://simplifyedinc.sharepoint.com/:l:/s/PorticoMarketingPortal/JACTDD80wZEASYnY-JDq3zofAVXqkP5Pknq2rW6M-xYX6Vs?nav=ZWQ4ZTcxOTYtMDI0My00NWNjLWFjODctMTBkM2FkYTJiM2I4",
      },
      {
        label: "Brand toolkit",
        href: "https://simplifyedinc.sharepoint.com/sites/PorticoMarketingPortal/Brand%20Toolkit/Forms/AllItems.aspx",
      },
      {
        label: "Product toolkit",
        href: "https://simplifyedinc.sharepoint.com/sites/PorticoMarketingPortal/Product%20Marketing%20Toolkit/Forms/AllItems.aspx",
      },
    ],
  },
];

const mtdInboundTargets: TargetProgress[] = [
  {
    ...planningSource,
    id: "valid-inbound-month-progress",
    label: "Month",
    value: "20",
    actual: "20",
    target: "38",
    period: "June 2026",
    percent: 53,
    accent: "pink",
    href: dashboardLinks.pipelineView,
    progressNote: "Valid leads only",
    notes: "June valid inbound recovered from dashboard/planning snapshot; refresh against agreed valid-lead audit.",
  },
  {
    ...planningSource,
    id: "valid-inbound-h1-progress",
    label: "H1",
    value: "147",
    actual: "147",
    target: "166",
    period: "H1 2026",
    percent: 89,
    accent: "pink",
    href: dashboardLinks.pipelineView,
    progressNote: "Valid leads only",
    notes: "H1 valid inbound count needs final RevOps definition and source audit.",
  },
];

const bookingsTargets: TargetProgress[] = [
  {
    ...hubspotBaseline,
    id: "bookings-h1-progress",
    label: "H1",
    value: "$3.52M",
    actual: "$3.52M",
    target: "$4.94M",
    period: "H1 2026",
    percent: 71,
    accent: "teal",
    href: dashboardLinks.bookingsDashboard,
    notes: "Closed-won bookings only; signed deals are excluded until closed won.",
  },
  {
    ...hubspotBaseline,
    id: "bookings-year-progress",
    label: "Year",
    value: "$3.52M",
    actual: "$3.52M",
    target: "$11.42M",
    period: "FY 2026",
    percent: 31,
    accent: "blue",
    href: dashboardLinks.bookingsDashboard,
    notes: "YTD closed-won bookings against 2026 bookings plan.",
  },
];

const pipelineTargets: TargetProgress[] = [
  {
    ...hubspotBaseline,
    id: "pipeline-h1-progress",
    label: "H1",
    value: "$12.39M",
    actual: "$12.39M",
    target: "$17.31M",
    period: "Current snapshot vs H1 coverage target",
    percent: 72,
    accent: "blue",
    href: dashboardLinks.pipelineDashboard,
    progressNote: "SKO target",
    notes:
      "Active open bookings pipeline compared directionally with SKO pipeline coverage/generation target.",
  },
  {
    ...hubspotBaseline,
    id: "pipeline-year-progress",
    label: "Year",
    value: "$12.39M",
    actual: "$12.39M",
    target: "$40.0M",
    period: "Current snapshot vs FY 2026 coverage target",
    percent: 31,
    accent: "blue",
    href: dashboardLinks.pipelineDashboard,
    progressNote: "SKO target",
    notes:
      "Open pipeline is a point-in-time coverage read, not the same as pipeline generated toward target.",
  },
];

export const primaryMetrics: KpiMetric[] = [
  {
    ...planningSource,
    id: "mtd-valid-inbound",
    label: "MTD inbound",
    value: "20",
    target: "38",
    period: "June 2026",
    detail: "Valid June inbound: 4 enterprise + 16 programmatic. H1 valid inbound is 147 against a 166 target.",
    href: dashboardLinks.pipelineView,
    accent: "pink",
    targets: mtdInboundTargets,
    notes:
      "Valid inbound uses recovered dashboard/planning counts. Treat as needs-refresh until the valid-lead definition is approved.",
  },
  {
    ...hubspotBaseline,
    id: "h1-bookings",
    label: "Bookings",
    value: "$3.52M",
    target: "$4.94M H1 / $11.42M FY",
    period: "H1 2026",
    detail: "H1 closed-won bookings from HubSpot as of EOD 6/30. Signed deals are excluded.",
    href: dashboardLinks.bookingsDashboard,
    accent: "teal",
    targets: bookingsTargets,
    notes:
      "HubSpot summary reports ytd_closed_won bookings of 3522516.69 pulled from the Bookings pipeline.",
  },
  {
    ...hubspotBaseline,
    id: "active-pipeline",
    label: "Pipeline",
    value: "$12.39M",
    target: "$40.0M FY coverage target",
    period: "Current open pipeline as of 2026-06-30 export",
    detail:
      "Current open bookings pipeline from HubSpot. SKO pipeline targets are coverage/generation targets, so use this as directional coverage.",
    href: dashboardLinks.pipelineDashboard,
    accent: "blue",
    targets: pipelineTargets,
    notes:
      "HubSpot summary reports active_pipeline bookings of 12385042.04 across 309 open deals.",
  },
];

export const numbersToWatch: WatchMetric[] = [
  {
    ...recoveredSnapshot,
    id: "watch-win-rate-current",
    label: "Win rate",
    value: "20%",
    target: "30% operating assumption",
    period: "H1 2026",
    href: dashboardLinks.bookingsDashboard,
    accent: "terracotta",
    delta: "H1 closed-won rate",
    notes:
      "Recovered dashboard read. Q2 kickoff used 30% as an operating assumption; refresh against HubSpot won/lost calculation.",
  },
  {
    ...recoveredSnapshot,
    id: "watch-inbound-pipeline-current",
    label: "Inbound pipeline",
    value: "$581K",
    target: "Monitor growth-touch pipeline",
    period: "Current growth-touch read",
    href: dashboardLinks.pipelineDashboard,
    accent: "blue",
    delta: "Current growth-touch read",
    notes:
      "Recovered dashboard read. Needs a refreshed HubSpot source definition for growth-touch or inbound pipeline.",
  },
  {
    ...recoveredSnapshot,
    id: "watch-ent-avg-deal-size-current",
    label: "ENT avg deal size",
    value: "$56K",
    target: "Monitor trend",
    period: "Q2 2026 closed-won average",
    href: dashboardLinks.bookingsDashboard,
    accent: "teal",
    delta: "Q2 closed-won avg",
    notes:
      "Recovered dashboard read. Refresh from Q2 closed-won export and segment definition.",
  },
  {
    ...recoveredSnapshot,
    id: "watch-pro-avg-deal-size-current",
    label: "PRO avg deal size",
    value: "$6.2K",
    target: "Monitor trend",
    period: "Q2 2026 closed-won average",
    href: dashboardLinks.bookingsDashboard,
    accent: "pink",
    delta: "Q2 closed-won avg",
    notes:
      "Recovered dashboard read. Refresh from Q2 closed-won export and programmatic definition.",
  },
];

export const lastWeekNumbersToWatch: WatchMetric[] = [
  {
    ...recoveredSnapshot,
    id: "watch-win-rate-last-week",
    label: "Win rate",
    value: "19%",
    target: "30% operating assumption",
    period: "Recovered Jun 22, 2026 snapshot",
    href: dashboardLinks.bookingsDashboard,
    accent: "terracotta",
    notes: "Recovered prior weekly snapshot; no clean source export located yet.",
  },
  {
    ...recoveredSnapshot,
    id: "watch-inbound-pipeline-last-week",
    label: "Inbound pipeline",
    value: "$581K",
    target: "Monitor growth-touch pipeline",
    period: "Recovered Jun 22, 2026 snapshot",
    href: dashboardLinks.pipelineDashboard,
    accent: "blue",
    notes: "Recovered prior weekly snapshot; needs refreshed HubSpot growth-touch definition.",
  },
  {
    ...recoveredSnapshot,
    id: "watch-ent-avg-deal-size-last-week",
    label: "ENT avg deal size",
    value: "$59K",
    target: "Monitor trend",
    period: "Recovered Jun 22, 2026 snapshot",
    href: dashboardLinks.bookingsDashboard,
    accent: "teal",
    notes: "Recovered prior weekly snapshot; refresh from closed-won export.",
  },
  {
    ...recoveredSnapshot,
    id: "watch-pro-avg-deal-size-last-week",
    label: "PRO avg deal size",
    value: "$6.8K",
    target: "Monitor trend",
    period: "Recovered Jun 22, 2026 snapshot",
    href: dashboardLinks.bookingsDashboard,
    accent: "pink",
    notes: "Recovered prior weekly snapshot; refresh from closed-won export.",
  },
];

export const monthlyMetrics: MonthlyMetric[] = [
  {
    ...recoveredSnapshot,
    id: "monthly-bookings",
    label: "Bookings",
    value: "$3.52M H1",
    target: "$4.94M H1",
    period: "Jan-Jun 2026",
    href: dashboardLinks.bookingsDashboard,
    accent: "teal",
    yAxisLabel: "Closed-won bookings",
    yMax: 1000,
    yTicks: ["$1.0M", "$500K", "$0"],
    rows: [
      { month: "Jan", actual: 544, target: 703, actualLabel: "$544K", targetLabel: "$703K" },
      { month: "Feb", actual: 152, target: 703, actualLabel: "$152K", targetLabel: "$703K" },
      { month: "Mar", actual: 955, target: 703, actualLabel: "$955K", targetLabel: "$703K" },
      { month: "Apr", actual: 961, target: 944, actualLabel: "$961K", targetLabel: "$944K" },
      { month: "May", actual: 558, target: 944, actualLabel: "$558K", targetLabel: "$944K" },
      { month: "Jun", actual: 351, target: 944, actualLabel: "$351K", targetLabel: "$944K" },
    ],
    notes:
      "Monthly values recovered from dashboard; H1 aggregate ties directionally to HubSpot summary but month-level source export should be refreshed.",
  },
  {
    ...recoveredSnapshot,
    id: "monthly-pipeline-generated",
    label: "Pipeline generated",
    value: "$9.23M Q2 / $9.26M Q1",
    target: "$12.0M Q2 / SKO generation pace",
    period: "Jan-Jun 2026",
    href: dashboardLinks.pipelineDashboard,
    accent: "blue",
    yAxisLabel: "Deal-created pipeline",
    yMax: 5000,
    yTicks: ["$5M", "$2.5M", "$0"],
    rows: [
      { month: "Jan", actual: 3968, target: 2467, actualLabel: "$4.0M", targetLabel: "$2.47M" },
      { month: "Feb", actual: 526, target: 2467, actualLabel: "$526K", targetLabel: "$2.47M" },
      { month: "Mar", actual: 4770, target: 2467, actualLabel: "$4.8M", targetLabel: "$2.47M" },
      { month: "Apr", actual: 4735, target: 3303, actualLabel: "$4.7M", targetLabel: "$3.30M" },
      { month: "May", actual: 3062, target: 3303, actualLabel: "$3.1M", targetLabel: "$3.30M" },
      { month: "Jun", actual: 1436, target: 3303, actualLabel: "$1.4M", targetLabel: "$3.30M" },
    ],
    notes:
      "Quarter-level generated pipeline is present in HubSpot summary; monthly split is recovered and needs a month-level export.",
  },
  {
    ...planningSource,
    id: "monthly-valid-inbound",
    label: "Valid inbound",
    value: "147 H1 valid requests",
    target: "166 H1 valid-request target",
    period: "Jan-Jun 2026",
    href: dashboardLinks.pipelineView,
    accent: "pink",
    yAxisLabel: "Valid requests",
    yMax: 40,
    yTicks: ["40", "20", "0"],
    rows: [
      { month: "Jan", actual: 19, target: 19, actualLabel: "19", targetLabel: "19" },
      { month: "Feb", actual: 26, target: 22, actualLabel: "26", targetLabel: "22" },
      { month: "Mar", actual: 30, target: 25, actualLabel: "30", targetLabel: "25" },
      { month: "Apr", actual: 30, target: 29, actualLabel: "30", targetLabel: "29" },
      { month: "May", actual: 22, target: 33, actualLabel: "22", targetLabel: "33" },
      { month: "Jun", actual: 20, target: 38, actualLabel: "20", targetLabel: "38" },
    ],
    notes:
      "Valid inbound monthly counts need final valid-lead definition and source reconciliation.",
  },
];

export const watchTrends: WatchTrend[] = [
  {
    ...recoveredSnapshot,
    id: "trend-win-rate",
    label: "Win rate",
    value: "64%",
    target: "30% operating assumption",
    period: "Mar-Jun 2026 monthly snapshots",
    href: dashboardLinks.bookingsDashboard,
    accent: "terracotta",
    yAxisLabel: "Win rate",
    yMax: 70,
    yTicks: ["70%", "35%", "0%"],
    xLabels: ["Mar", "Apr", "May", "Jun"],
    values: [9, 12, 50, 64],
    valueLabels: ["9%", "12%", "50%", "64%"],
    notes: "Recovered monthly snapshot trend; refresh against HubSpot closed-won/closed-lost calculation.",
  },
  {
    ...recoveredSnapshot,
    id: "trend-inbound-pipeline",
    label: "Inbound pipeline",
    value: "$581K",
    target: "Monitor growth-touch pipeline",
    period: "Mar-Jun 2026 monthly snapshots",
    href: dashboardLinks.pipelineDashboard,
    accent: "blue",
    yAxisLabel: "Pipeline",
    yMax: 650,
    yTicks: ["$650K", "$325K", "$0"],
    xLabels: ["Mar", "Apr", "May", "Jun"],
    values: [0, 0, 580, 581],
    valueLabels: ["No snapshot", "No snapshot", "$580K", "$581K"],
    notes: "Recovered growth-touch trend; March and April did not have usable snapshots.",
  },
  {
    ...recoveredSnapshot,
    id: "trend-ent-avg-deal-size",
    label: "ENT avg deal size",
    value: "$41K",
    target: "Monitor trend",
    period: "Mar-Jun 2026 monthly snapshots",
    href: dashboardLinks.bookingsDashboard,
    accent: "teal",
    yAxisLabel: "Avg deal size",
    yMax: 85,
    yTicks: ["$85K", "$43K", "$0"],
    xLabels: ["Mar", "Apr", "May", "Jun"],
    values: [47, 79, 39, 41],
    valueLabels: ["$47K", "$79K", "$39K", "$41K"],
    notes: "Recovered average deal size trend; refresh with segment-normalized closed-won export.",
  },
  {
    ...recoveredSnapshot,
    id: "trend-pro-avg-deal-size",
    label: "PRO avg deal size",
    value: "$5.4K",
    target: "Monitor trend",
    period: "Mar-Jun 2026 monthly snapshots",
    href: dashboardLinks.bookingsDashboard,
    accent: "pink",
    yAxisLabel: "Avg deal size",
    yMax: 10,
    yTicks: ["$10K", "$5K", "$0"],
    xLabels: ["Mar", "Apr", "May", "Jun"],
    values: [4.9, 7.8, 5.4, 5.4],
    valueLabels: ["$4.9K", "$7.8K", "$5.4K", "$5.4K"],
    notes: "Recovered average deal size trend; refresh with programmatic closed-won export.",
  },
];

export const dashboardTrends = [
  "Valid inbound beat target from January through April, then fell below target in May and June.",
  "Enterprise valid inbound peaked in March, then declined each month through June.",
  "Programmatic valid inbound is steadier, but June is still below the 26-request monthly target.",
  "Pipeline generated cleared the monthly pace in January, March, and April, then fell below pace in May and June.",
  "Bookings were strongest in March and April, then slowed in May and June against the monthly pacing target.",
  "Open-pipeline trend still needs consistent month-end snapshots before we can read MoM movement cleanly.",
];
