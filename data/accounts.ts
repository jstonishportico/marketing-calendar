import { sourcePaths, type AccountUpdate } from "./source-map";

const activePipelineSource = {
  source: "HubSpot active pipeline export",
  source_path_or_url: sourcePaths.hubspotActivePipeline,
  pulled_at: "2026-07-01T14:03:48.123554+00:00",
  owner: "Sales / RevOps",
  freshness: "fresh",
  confidence: "high",
} as const;

const closedLostSource = {
  source: "HubSpot Q2 closed-lost export",
  source_path_or_url: sourcePaths.hubspotQ2ClosedLost,
  pulled_at: "2026-07-01T14:03:48.123554+00:00",
  owner: "Sales / RevOps",
  freshness: "fresh",
  confidence: "high",
} as const;

export const keyAccountUpdates: AccountUpdate[] = [
  {
    ...activePipelineSource,
    id: "account-uti-concorde",
    label: "UTI / Concorde",
    value: "$1.46M",
    target: "Confirm buying path after CRM presentation",
    period: "Active Q3 2026 pipeline snapshot",
    account: "UTI / Concorde",
    signal: "Meeting booked",
    summary:
      "$1.46M Enterprise CRM opportunity in stage 4 Demo and Differentiation. The deal is active but still early and dependent on stakeholder alignment.",
    nextStep:
      "Capture meeting notes, confirm the buying path, and update next step/stage movement after the presentation.",
    likelihood: {
      label: "Medium-low",
      percent: 35,
      note: "Early-stage, high-value deal",
    },
    accent: "blue",
    confidence: "medium",
    notes:
      "Amount and stage tie to Universal Technical Institute active-pipeline row; meeting date/owner are recovered dashboard notes.",
  },
  {
    ...activePipelineSource,
    id: "account-american-national-university",
    label: "American National University",
    value: "$13K",
    target: "Clarify close path after July 2 demo",
    period: "Active Q3 2026 pipeline snapshot",
    account: "American National University",
    signal: "Demo booked",
    summary:
      "$13K Enterprise clinical management deal in Proof and Validation. The July 2 demo should clarify fit, urgency, and whether the team can move toward proposal.",
    nextStep: "Confirm decision process, timeline, and close path after the demo.",
    likelihood: {
      label: "Medium",
      percent: 55,
      note: "Later stage with demo scheduled",
    },
    accent: "teal",
    notes:
      "Active pipeline row shows American National University - Trajecsys at $13.2K bookings in Proof and Validation.",
  },
  {
    ...activePipelineSource,
    id: "account-washtenaw-community-college",
    label: "Washtenaw Community College",
    value: "$18K",
    target: "Confirm budget, timeline, and proposal path",
    period: "Active Q4 2026 pipeline snapshot",
    account: "Washtenaw Community College",
    signal: "Demo booked",
    summary:
      "$18K Programmatic clinical management deal in Demo and Differentiation. July 6 demo should show whether this is a standard Trajecsys path or needs heavier stakeholder work.",
    nextStep: "Watch for budget clarity, timeline, and whether a proposal is the right next move.",
    likelihood: {
      label: "Medium",
      percent: 50,
      note: "Demo booked, close path pending",
    },
    accent: "pink",
    notes:
      "Active pipeline row shows Washtenaw Community College - CM - ADN at $18K bookings in Demo and Differentiation.",
  },
  {
    ...closedLostSource,
    id: "account-ember-education",
    label: "Ember Education",
    value: "$1.99M closed lost",
    target: "Capture win/loss learning",
    period: "Q2 2026 closed-lost export",
    account: "Ember Education",
    signal: "Closed lost",
    summary:
      "Large strategic loss that needs clean win/loss reporting. HubSpot has SIS, FA Full Service, and Payments losses in Q2 with competitor/internal-build reasons.",
    nextStep:
      "Validate the competitor field and loss reasons, then capture the learning for the H1 readout.",
    likelihood: {
      label: "Closed lost",
      percent: 0,
      note: "Use for loss-pattern learning",
    },
    accent: "terracotta",
    notes:
      "Q2 closed-lost rows include Ember SIS, FA Full Service, and Payments; competitor detail is present but not consistently structured.",
  },
  {
    ...activePipelineSource,
    id: "account-ucla",
    label: "UCLA",
    value: "$1.70M",
    target: "Confirm product dependency and close path",
    period: "Active Q3 2026 pipeline snapshot",
    account: "UCLA",
    signal: "Close risk",
    summary:
      "High-value SIS opportunity with roadmap dependency around self-registration. Close likelihood depends on whether product timing still matches UCLA's decision path.",
    nextStep: "Confirm current stage, owner, next meeting, and roadmap decision status in HubSpot.",
    likelihood: {
      label: "At risk",
      percent: 25,
      note: "Product dependency needs clarity",
    },
    accent: "gold",
    confidence: "medium",
    notes:
      "Active pipeline row shows UCLA Paramedic Education Program at $1.70M bookings in Demo and Differentiation; roadmap dependency is recovered dashboard context.",
  },
];
