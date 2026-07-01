import { sourcePaths, type ActivityGroup, type WorkItem } from "./source-map";

const campaignSource = {
  source: "Recovered campaign workspace and H1/H2 planning notes",
  source_path_or_url: sourcePaths.h1RetroWorkingNotes,
  pulled_at: "2026-06-29",
  owner: "Jessica / Marketing",
  freshness: "needs_refresh",
  confidence: "medium",
  notes: "Operating items should be refreshed against live campaign owners before leadership review.",
} as const;

const handoffSource = {
  source: "Portico OOO handoff and recovered campaign calendar",
  source_path_or_url: sourcePaths.porticoHandoff,
  pulled_at: "2026-06-29",
  owner: "Marketing",
  freshness: "needs_refresh",
  confidence: "medium",
  notes: "Recovered handoff item; confirm final status in HubSpot/content calendar.",
} as const;

export const weekAtGlance: WorkItem[] = [
  {
    ...handoffSource,
    id: "week-nasfaa-2026",
    title: "NASFAA 2026",
    detail:
      "Runs June 29 to July 2. Keep registrant/account lists, onsite notes, and follow-up plan clean while the team is in National Harbor.",
  },
  {
    ...campaignSource,
    id: "week-target-in-pipeline-meetings",
    title: "Target in-pipeline meetings",
    lines: [
      "Tuesday UTI / Concorde ($1.46M) - Owner TBD",
      "Thursday American National University ($13K) - Owner TBD",
      "Monday Washtenaw Community College ($18K) - Owner TBD",
    ],
    source: "HubSpot active pipeline export plus recovered weekly dashboard notes",
    source_path_or_url: sourcePaths.hubspotActivePipeline,
    pulled_at: "2026-07-01T14:03:48.123554+00:00",
    owner: "Sales / Jessica",
    freshness: "fresh",
    confidence: "medium",
    notes:
      "Amounts tie to active pipeline rows for UTI, ANU, and Washtenaw; meeting timing and owner still need confirmation.",
  },
  {
    ...campaignSource,
    id: "week-coldiq-campaigns",
    title: "ColdIQ campaigns",
    detail:
      "Campaign onboarding is in progress. Sprint to hand over outbound email and LinkedIn campaign drafts by Thursday end of day.",
    source_path_or_url: sourcePaths.campaignDrafts,
  },
  {
    ...handoffSource,
    id: "week-cecu-follow-up",
    title: "CECU follow-up",
    detail:
      "Post-event email has gone to the attendee list. Sales sequence is next so warm leads have a clear follow-up path.",
  },
  {
    ...campaignSource,
    id: "week-obbba-promo",
    title: "OBBBA Q&A promo",
    detail: "July 15 Q&A promo keeps financial aid demand moving after the July 1 deadline.",
    source_path_or_url: sourcePaths.h1OkrHealth,
  },
  {
    ...campaignSource,
    id: "week-h2-gtm-planning",
    title: "H2 GTM planning",
    detail:
      "Build the H1 readout around closed won/lost, competitive signals, target accounts, events, webinars, and campaign priorities.",
  },
];

export const campaignUpdates = [
  "Finishing warm up of email domains",
  "Need to schedule sales training for Instantly and Lemlist",
  "Initial campaign drafts in progress and being sent to ColdIQ by July 3",
  "LinkedIn ad budget pending",
  "Onboarding almost complete",
];

export const lastWeekHappened: ActivityGroup[] = [
  {
    ...handoffSource,
    id: "last-week-commons-launched",
    title: "The Commons launched",
    summary:
      "The Commons microsite was finished and launched, and launch communications went out across email and LinkedIn. Early readout: 30 newsletter signups, 1 contributor form, and 1K+ website views.",
    next: "Keep contributor amplification moving and settle into a weekly publishing rhythm.",
    confidence: "low",
    notes:
      "Outcome metrics are recovered from the dashboard snapshot and need source confirmation before external reporting.",
  },
  {
    ...handoffSource,
    id: "last-week-cecu",
    title: "CECU",
    summary:
      "Portico promoted The Commons, OBBBA resources, and the Student Victory Tour onsite. Follow-up now depends on clean attendee/account lists and a sales-ready sequence.",
    next: "Send the recap/resource follow-up and hand sales a warm-lead sequence.",
  },
  {
    ...handoffSource,
    id: "last-week-vet-tech-session",
    title: "Vet Tech session",
    summary:
      "Trajecsys hosted the distance Vet Tech skills-verification session with 16 attendees and one demo request.",
    next: "Use the same motion for future Trajecsys demo days and make sure the sales handoff is visible.",
    source_path_or_url: sourcePaths.h1RetroWorkingNotes,
    confidence: "medium",
    notes:
      "Planning notes mention one demo request; attendance count is recovered from dashboard snapshot and needs webinar export confirmation.",
  },
  {
    ...handoffSource,
    id: "last-week-june-pov",
    title: "June POV newsletter",
    summary:
      "June POV went out after the in-product agent item was pulled back, keeping customer-facing roadmap language tied to confirmed timing.",
    next: "Keep launch claims connected to what product has approved.",
  },
];
