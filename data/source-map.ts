export type Accent = "terracotta" | "teal" | "blue" | "pink" | "gold" | "neutral";

export type Freshness = "live" | "fresh" | "needs_refresh" | "manual" | "unverified" | "blocked";

export type Confidence = "high" | "medium" | "low";

export type MetricRecord = {
  id: string;
  label: string;
  value: string;
  target: string;
  period: string;
  source: string;
  source_path_or_url: string;
  pulled_at: string;
  owner: string;
  freshness: Freshness;
  confidence: Confidence;
  notes: string;
};

export type TargetProgress = MetricRecord & {
  actual: string;
  percent: number;
  accent: Accent;
  href: string;
  progressNote?: string;
};

export type KpiMetric = MetricRecord & {
  detail: string;
  href: string;
  accent: Accent;
  targets: TargetProgress[];
};

export type WatchMetric = MetricRecord & {
  href: string;
  accent: Accent;
  delta?: string;
};

export type WorkItem = {
  id: string;
  title: string;
  detail?: string;
  lines?: string[];
  source: string;
  source_path_or_url: string;
  pulled_at: string;
  owner: string;
  freshness: Freshness;
  confidence: Confidence;
  notes: string;
};

export type ContentItem = {
  id: string;
  date: string;
  type: string;
  title: string;
  source: string;
  source_path_or_url: string;
  pulled_at: string;
  owner: string;
  freshness: Freshness;
  confidence: Confidence;
  notes: string;
};

export type ActivityGroup = {
  id: string;
  title: string;
  summary: string;
  next?: string;
  source: string;
  source_path_or_url: string;
  pulled_at: string;
  owner: string;
  freshness: Freshness;
  confidence: Confidence;
  notes: string;
};

export type AccountUpdate = MetricRecord & {
  account: string;
  signal: string;
  summary: string;
  nextStep: string;
  likelihood: {
    label: string;
    percent: number;
    note: string;
  };
  accent: Accent;
};

export type QuickLink = {
  label: string;
  href: string;
};

export type QuickLinkGroup = {
  label: string;
  links: QuickLink[];
};

export type MonthlyMetric = MetricRecord & {
  href: string;
  accent: Accent;
  yAxisLabel: string;
  yMax: number;
  yTicks: string[];
  rows: {
    month: string;
    actual: number;
    target: number | null;
    actualLabel: string;
    targetLabel: string;
  }[];
};

export type WatchTrend = MetricRecord & {
  href: string;
  accent: Accent;
  yAxisLabel: string;
  yMax: number;
  yTicks: string[];
  xLabels: string[];
  values: number[];
  valueLabels: string[];
};

export type H1SnapshotMetric = MetricRecord & {
  note: string;
  accent: Accent;
  href?: string;
};

export type H1TargetRow = MetricRecord & {
  actual: string;
  gap: string;
  percent: number;
  accent: Accent;
  href: string;
};

export type H1PipelineSegment = MetricRecord & {
  percent: number;
  accent: Accent;
};

export type H1PipelineCoverage = MetricRecord & {
  href: string;
  totalLabel: string;
  segments: H1PipelineSegment[];
};

export type H1NarrativeItem = {
  lead: string;
  text: string;
};

export type H1PlanItem = {
  text: string;
  why: string;
};

export type H1PlanColumn = {
  title: string;
  items: H1PlanItem[];
};

export type SourceMapEntry = {
  id: string;
  label: string;
  source: string;
  source_path_or_url: string;
  pulled_at: string;
  owner: string;
  freshness: Freshness;
  confidence: Confidence;
  notes: string;
};

export const logoUrl =
  "https://7762472.fs1.hubspotusercontent-na1.net/hubfs/7762472/portico-logo.png";

export const dashboardLinks = {
  pipelineView:
    "https://app.hubspot.com/contacts/7762472/objects/0-3/views/64362064/list",
  bookingsDashboard: "https://app.hubspot.com/reports-dashboard/7762472/view/20672926",
  pipelineDashboard: "https://app.hubspot.com/reports-dashboard/7762472/view/20650504",
  contentCalendar: "file:///Users/padmin/Documents/New%20project/portico-marketing-calendar/index.html",
};

export const sourcePaths = {
  hubspotSummary: "sources/hubspot/2026-06-30/summary.json",
  hubspotActivePipeline: "sources/hubspot/2026-06-30/active_pipeline.csv",
  hubspotQ2ClosedLost: "sources/hubspot/2026-06-30/q2_closed_lost.csv",
  hubspotYtdClosedWon: "sources/hubspot/2026-06-30/ytd_closed_won.csv",
  q2SalesKickoff: "sources/extracted/q2-sales-kickoff-meeting-april-6.txt",
  h1Okrs: "sources/planning/2026-h1-okrs.md",
  h1RetroWorkingNotes: "sources/planning/2026-06-29-h1-retro-h2-plan-working-notes.md",
  h1OkrHealth: "sources/planning/2026-06-29-portico-okr-health-dashboard.md",
  porticoHandoff: "sources/handoff/portico-ooo-handoff-june-2026.md",
  campaignDrafts: "sources/campaigns/coldiq_campaigns_portico_drafts_v2.md",
  coldIqInputs: "sources/campaigns/coldiq_onboarding_inputs_v0.md",
  contentCalendarFolder: "sources/content-calendar/",
  recoveredDashboard: "dashboard/app/page.tsx",
};

export const freshnessLabels: Record<Freshness, string> = {
  live: "Live",
  fresh: "Fresh",
  needs_refresh: "Needs refresh",
  manual: "Manual",
  unverified: "Unverified",
  blocked: "Blocked",
};

export const confidenceLabels: Record<Confidence, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

export const sourceMap: SourceMapEntry[] = [
  {
    id: "hubspot-baseline",
    label: "HubSpot baseline",
    source: "HubSpot CRM API export, deals object, bookings pipeline",
    source_path_or_url: "sources/hubspot/2026-06-30/",
    pulled_at: "2026-07-01T14:03:48.123554+00:00",
    owner: "RevOps / Jessica",
    freshness: "fresh",
    confidence: "high",
    notes:
      "Authoritative baseline for closed-won bookings, active pipeline, stages, owners, and deal links. Refresh before leadership use.",
  },
  {
    id: "planning-retro",
    label: "H1/H2 planning notes",
    source: "Recovered H1 retro, OKR, and H2 planning artifacts",
    source_path_or_url: "sources/planning/",
    pulled_at: "2026-06-29",
    owner: "Jessica",
    freshness: "needs_refresh",
    confidence: "medium",
    notes:
      "Good operating narrative source, but several definitions still need leadership or RevOps confirmation.",
  },
  {
    id: "q2-kickoff",
    label: "Q2 sales kickoff",
    source: "Extracted Q2 sales kickoff deck text",
    source_path_or_url: sourcePaths.q2SalesKickoff,
    pulled_at: "2026-04-06",
    owner: "Sales leadership / RevOps",
    freshness: "needs_refresh",
    confidence: "medium",
    notes:
      "Useful target and strategy source for Q2 targets, coverage assumptions, and pipeline-generation pacing.",
  },
  {
    id: "campaigns",
    label: "Campaign workspace",
    source: "ColdIQ, post-event, outbound, and product-lane campaign drafts",
    source_path_or_url: "sources/campaigns/",
    pulled_at: "2026-06-29",
    owner: "Jessica / Marketing",
    freshness: "needs_refresh",
    confidence: "medium",
    notes:
      "Recovered campaign inputs are useful but launch states and owners should be reconfirmed.",
  },
  {
    id: "content-calendar",
    label: "Content calendar",
    source: "Recovered SharePoint and local content-calendar workbooks",
    source_path_or_url: sourcePaths.contentCalendarFolder,
    pulled_at: "2026-06-29",
    owner: "Marketing",
    freshness: "needs_refresh",
    confidence: "medium",
    notes:
      "Dashboard uses recovered near-term items. Workbook owner and current SharePoint truth still need confirmation.",
  },
  {
    id: "recovered-dashboard",
    label: "Recovered dashboard snapshot",
    source: "Recovered Growth OS dashboard values",
    source_path_or_url: sourcePaths.recoveredDashboard,
    pulled_at: "2026-07-01",
    owner: "Jessica / Codex recovery",
    freshness: "unverified",
    confidence: "low",
    notes:
      "Used only where no cleaner structured source exists yet. These metrics are marked for refresh in the UI.",
  },
];
