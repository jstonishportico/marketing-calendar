import { sourcePaths, type H1PlanColumn, type MetricRecord } from "./source-map";

export const h2PlanSource: MetricRecord = {
  id: "h2-plan-source",
  label: "H2 plan",
  value: "Start / Stop / Scale plan",
  target: "Leadership-ready H2 operating plan",
  period: "H2 2026",
  source: "H1 retro and H2 planning notes",
  source_path_or_url: sourcePaths.h1RetroWorkingNotes,
  pulled_at: "2026-06-29",
  owner: "Jessica",
  freshness: "needs_refresh",
  confidence: "medium",
  notes:
    "Working H2 plan synthesized from recovered planning notes; refresh after ColdIQ/core campaign status and metric ownership are confirmed.",
};

export const h2PlanSummary =
  "H2 shifts the work from brand introduction to sharper product marketing, focused target-account demand, and cleaner feedback loops. The goal is to create more sales-accepted opportunities and make growth impact easier to see.";

export const h2PlanColumns: H1PlanColumn[] = [
  {
    title: "Start",
    items: [
      {
        text: "Launch ColdIQ outbound and LinkedIn target-account campaigns on July 7.",
        why: "Focus paid and outbound spend on buyer roles at named target accounts instead of broad audiences that are less likely to become good-fit customers.",
      },
      {
        text: "Start monthly webinars and demo days.",
        why: "Webinar pauses correlate with inbound dips, while demo days create lower-funnel product education and higher-intent leads for sales.",
      },
      {
        text: "Start a weekly or bi-weekly whale-account operating rhythm.",
        why: "Give the largest active deals an intentional GTM strategy, transparent status, and support from the full team.",
      },
      {
        text: "Start tracking sales-accepted opportunities touched by marketing.",
        why: "The manual marketing-sourced field is unreliable; this gives a better read on which growth touches turn into legitimate pipeline.",
      },
      {
        text: "Define Portico's strategic narrative.",
        why: "Create a clear talk track that differentiates Portico and accurately reflects current product value.",
      },
    ],
  },
  {
    title: "Stop",
    items: [
      {
        text: "Stop ad hoc whale deal support.",
        why: "Replace one-off asks with a recurring GTM support rhythm for the largest active deals.",
      },
      {
        text: "Stop forecasting short buying cycles for FA deals related to OBBBA.",
        why: "The market appears to be in panic and prep mode, which may mean longer buying cycles or delayed entry into market.",
      },
      {
        text: "Stop relying on manual marketing source as the primary impact read.",
        why: "The field is manual and visibly inconsistent, so it should not be the core measure of growth impact.",
      },
    ],
  },
  {
    title: "Scale",
    items: [
      {
        text: "Scale The Commons as a credibility and de-risking engine.",
        why: "Build third-party proof, buyer education, and confidence for prospects already in pipeline.",
      },
      {
        text: "Scale FA, Attendance, and Clinical Management campaigns around pain points.",
        why: "These are ready-to-sell products with clearer buyer problems and stronger demand potential.",
      },
      {
        text: "Scale event and webinar follow-up into cleaner sales handoffs.",
        why: "Show what moved to sales-accepted opportunity, what needs next action, and what did not convert.",
      },
      {
        text: "Scale customer proof and Momentum content into buyer-facing proof.",
        why: "Reduce perceived risk by showing real customer experience, product confidence, and outcomes.",
      },
    ],
  },
];
