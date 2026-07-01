"use client";

import { useMemo, useState } from "react";

type ViewMode = "ahead" | "retro";

type Priority = {
  date: string;
  label: string;
  detail: string;
  status: "today" | "scheduled" | "watch" | "needs";
};

type Metric = {
  label: string;
  value: string;
  change: string;
  status: "live" | "pending" | "watch";
  sourceUrl?: string;
  sourceLabel?: string;
};

type Source = {
  name: string;
  role: string;
  status: "connected" | "needs-check" | "next";
};

type LossReason = {
  label: string;
  count: string;
  value: string;
  width: string;
  tone: "red" | "gold" | "purple" | "teal" | "gray" | "pink";
};

const metrics: Metric[] = [
  {
    label: "YTD deal intelligence",
    value: "Verify",
    change: "Pull from HubSpot, then cross-check against Natalie's artifact",
    status: "pending",
    sourceLabel: "HubSpot report needed",
  },
  {
    label: "Closed won",
    value: "HubSpot",
    change: "Won deals, products, competitors, and win reasons",
    status: "pending",
    sourceLabel: "Closed won view needed",
  },
  {
    label: "Closed lost",
    value: "HubSpot",
    change: "Lost deals, competitors, loss reasons, and follow-up notes",
    status: "watch",
    sourceLabel: "Closed lost view needed",
  },
  {
    label: "ColdIQ launch",
    value: "TBD",
    change: "Campaigns need copy, creative, sequences, and approval this week",
    status: "watch",
    sourceLabel: "Campaign source pending",
  },
  {
    label: "Weekly KPI pull",
    value: "Next",
    change: "HubSpot, email performance, inbound, and event influence",
    status: "pending",
    sourceLabel: "KPI source map needed",
  },
];

const lossReasons: LossReason[] = [
  { label: "Competitor", count: "HubSpot", value: "verify", width: "100%", tone: "red" },
  { label: "Bad timing", count: "HubSpot", value: "verify", width: "64%", tone: "gold" },
  { label: "No contact", count: "HubSpot", value: "verify", width: "48%", tone: "purple" },
  { label: "Budget", count: "HubSpot", value: "verify", width: "48%", tone: "gold" },
  { label: "Building internally", count: "HubSpot", value: "verify", width: "38%", tone: "purple" },
  { label: "Other", count: "HubSpot", value: "verify", width: "74%", tone: "gray" },
  { label: "Open to revisiting", count: "HubSpot", value: "verify", width: "12%", tone: "teal" },
];

const winSignals = [
  "Which segments are converting fastest by product group and institution type?",
  "Where do multi-product deals produce higher ACV or faster expansion?",
  "Which renewal patterns point to customer health and retention opportunities?",
  "Which buyer problems show up consistently in won-deal notes and sales calls?",
];

const lossSignals = [
  "Who are we losing to, and are named competitors missing from the draft artifact?",
  "Known correction to verify: Ember was lost to Student First and should appear in competitive-loss analysis.",
  "Which losses are true competitive losses versus timing, budget, no-contact, or build-internally decisions?",
  "What patterns should change H2 forecasting, outbound targeting, or sales follow-up?",
];

const namedCompetitors = [
  "Student First",
  "Typhon",
  "In Place",
  "TracPrac",
  "Platinum Planner",
  "FAME",
  "Canvas free tool",
  "Core-Elms",
  "ACEND",
];

const weekAhead: Priority[] = [
  {
    date: "Mon, Jun 29",
    label: "Doug GTM review and Growth OS draft",
    detail:
      "Use this dashboard to show the weekly KPI view, the H2 reset themes, and the work needed to turn meeting context into an operating plan.",
    status: "today",
  },
  {
    date: "This week",
    label: "H1 recap and H2 GTM plan",
    detail:
      "Draft the H2 narrative: what worked, what did not, key accounts, buying motion, partnerships, AI workflows, and campaign calendar.",
    status: "needs",
  },
  {
    date: "Today-Tue",
    label: "ColdIQ first campaigns live",
    detail:
      "Rework outbound copy, pull Amanda into LinkedIn creative, confirm Tuesday 11 AM meeting coverage, and get the first paid/outbound motion launched.",
    status: "needs",
  },
  {
    date: "Jun 29-Jul 1",
    label: "NASFAA 2026",
    detail:
      "Keep attendee/account lists attached to event and comms cards, then prep post-event follow-up once lists are available.",
    status: "watch",
  },
  {
    date: "Tue, Jun 30",
    label: "CECU follow-up motion",
    detail:
      "Ship recap email and sequence using the OBBBA and externship sessions, then confirm follow-up coverage for booth scans and warm conversations.",
    status: "scheduled",
  },
  {
    date: "This week",
    label: "The Commons amplification",
    detail:
      "Move from launch posting into contributor amplification: keep brand posts running now, then shift toward author-led posts for reach.",
    status: "needs",
  },
  {
    date: "This week",
    label: "Trajecsys webinar engine",
    detail:
      "Add Ron and Brian's webinar dates, build the repeatable promo/follow-up process, and use Vet Tech as proof that webinars are worth scaling.",
    status: "needs",
  },
];

const retrospective = [
  {
    label: "What shipped",
    items: [
      "The Commons launched with early traction: more than 1,000 site views, 30 newsletter signups, and one formal contributor form.",
      "CECU/CQ presence landed well enough that Portico needed to be in the room; booth, one-pager, email, and social all supported the onsite push.",
      "Vet Tech webinar ran with 16 attendees and one demo signal, reinforcing webinars as a repeatable low-cost demand motion.",
      "NASFAA pre-event email went out from Portico to the NASFAA registrant audience.",
      "July OBBBA Q&A promo, holiday comms, and OOO-week content were pre-scheduled cleanly enough that re-entry is manageable.",
    ],
  },
  {
    label: "What changed",
    items: [
      "GTM is entering a reset moment, which creates room to move from product-by-product campaigns into a cleaner growth motion.",
      "The operating language should shift away from inflated pipeline and toward revenue, retention, customer health, and account-level strategy.",
      "Student First made a visible splash at CQ, so competitive positioning and product proof need to be part of the H2 plan.",
      "ColdIQ is the main execution risk because campaign launch has lagged and ownership needs to be tightened this week.",
    ],
  },
  {
    label: "What to do more of",
    items: [
      "Build around buyer jobs and institutional outcomes, not internal product categories.",
      "Use webinars to create frequent topical visibility and meeting opportunities without ad spend.",
      "Turn partnerships into a channel instead of leaving referrals and conference relationships unmanaged.",
      "Use Growth OS as the start of the GTM brain: closed won/lost, RFPs, buyer research, NPS, testimonials, and competitive intel.",
    ],
  },
];

const sources: Source[] = [
  {
    name: "Content calendar and GitHub",
    role: "Week-ahead content, event cards, links, owners, and campaign timing",
    status: "connected",
  },
  {
    name: "Master events workbook",
    role: "Source of truth for event dates, attendees, owners, links, and event detail",
    status: "connected",
  },
  {
    name: "HubSpot",
    role: "Source of truth for closed won/lost, deal reasons, named competitors, email sends, recipient lists, demo requests, and campaign data",
    status: "next",
  },
  {
    name: "Granola",
    role: "GTM strategy transcript context from meetings and one-on-ones",
    status: "needs-check",
  },
  {
    name: "Outlook, Teams, and Slack",
    role: "Meeting context, internal asks, handoffs, risks, and follow-up commitments",
    status: "connected",
  },
  {
    name: "ColdIQ and Clay",
    role: "Outbound engagement, LinkedIn campaign signals, compliance triggers, leadership changes, and intent data",
    status: "next",
  },
  {
    name: "GTM insight inputs",
    role: "RFPs, Mallory's buyer research, NPS, testimonials, QBR notes, competitive intel, sales talk tracks, and Natalie's draft artifact as QA",
    status: "next",
  },
];

const decisions = [
  "Create a dedicated GitHub repo once the first draft is approved.",
  "Define the weekly KPI pull from HubSpot, Tim's inbound workbook, email performance, and event influence.",
  "Confirm whether Granola is exposed to Codex or needs a second connection step.",
  "Collect H2 plan inputs: closed won/lost, RFPs, buyer research, NPS, testimonials, QBR notes, competitive intel, and current talk tracks.",
  "Decide who gets access to the Sites dashboard after Doug sees the draft.",
];

function getDefaultMode(): ViewMode {
  const day = new Date().getDay();
  return day >= 1 && day <= 3 ? "ahead" : "retro";
}

function statusLabel(status: Metric["status"] | Source["status"]) {
  if (status === "live" || status === "connected") return "Connected";
  if (status === "watch") return "Watch";
  if (status === "needs-check") return "Check";
  return "Next";
}

function priorityClass(status: Priority["status"]) {
  return `priority ${status}`;
}

function SourceAction({
  sourceLabel = "View source in HubSpot",
  sourceUrl,
}: {
  sourceLabel?: string;
  sourceUrl?: string;
}) {
  if (sourceUrl) {
    return (
      <a className="source-action" href={sourceUrl} target="_blank" rel="noreferrer">
        {sourceLabel}
      </a>
    );
  }

  return <span className="source-action disabled">{sourceLabel}</span>;
}

export default function Home() {
  const [mode, setMode] = useState<ViewMode>(getDefaultMode);
  const generatedAt = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date());
  }, []);

  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Portico Growth OS</p>
          <h1>Weekly GTM KPI view</h1>
          <p className="hero-copy">
            A Monday-ready operating view for H2 planning: what happened last
            week, what needs to ship this week, where the KPI story stands, and
            what inputs we need to build the GTM brain.
          </p>
        </div>
        <div className="hero-panel" aria-label="Current report context">
          <span>{generatedAt}</span>
          <strong>{mode === "ahead" ? "Week ahead view" : "Weekly retrospective"}</strong>
          <p>
            Default view changes by day: early week plans forward, late week looks
            back and prepares the next report.
          </p>
        </div>
      </section>

      <section className="report-card">
        <div className="report-nav">
          <div>
            <p className="label">Draft for Doug</p>
            <h2>{mode === "ahead" ? "This week's operating plan" : "Last week's readout"}</h2>
          </div>
          <div className="toggle" aria-label="Report view toggle">
            <button
              className={mode === "ahead" ? "active" : ""}
              onClick={() => setMode("ahead")}
            >
              Week ahead
            </button>
            <button
              className={mode === "retro" ? "active" : ""}
              onClick={() => setMode("retro")}
            >
              Retrospective
            </button>
          </div>
        </div>

        <section className="metric-grid" aria-label="KPI status">
          {metrics.map((metric) => (
            <article className={`metric ${metric.status}`} key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <p>{metric.change}</p>
              <SourceAction sourceLabel={metric.sourceLabel} sourceUrl={metric.sourceUrl} />
            </article>
          ))}
        </section>

        <section className="deal-intel" aria-label="YTD deal intelligence">
          <div className="section-heading">
            <p className="label">YTD deal intelligence</p>
            <h3>Closed won and closed lost patterns, verified from HubSpot</h3>
            <p className="section-note">
              Natalie's artifact is a cross-check, not the source of truth. This
              module should pull directly from HubSpot, then flag differences like
              the Ember loss to Student First.
            </p>
            <div className="proof-rule">
              <strong>Proof rule:</strong> every KPI, win/loss trend, and deal
              claim needs a click-through to the HubSpot report, list, deal view,
              or filtered table used to generate it.
            </div>
          </div>
          <div className="deal-grid">
            <article className="deal-panel loss-panel">
              <h4>Why we lose</h4>
              <div className="reason-list">
                {lossReasons.map((reason) => (
                  <div className="reason-row" key={reason.label}>
                    <div className="reason-meta">
                      <span className={`reason-dot ${reason.tone}`} />
                      <strong>{reason.label}</strong>
                      <span>{reason.count}</span>
                      <span>{reason.value}</span>
                    </div>
                    <div className="reason-track">
                      <div className={`reason-fill ${reason.tone}`} style={{ width: reason.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <SourceAction sourceLabel="HubSpot loss-reason report needed" />
            </article>

            <article className="deal-panel">
              <h4>Key win signals</h4>
              <ul className="clean-list compact">
                {winSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
              <SourceAction sourceLabel="HubSpot closed-won proof needed" />
            </article>

            <article className="deal-panel">
              <h4>Risk signals</h4>
              <ul className="clean-list compact risk">
                {lossSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
              <div className="competitor-wrap" aria-label="Named competitors">
                {namedCompetitors.map((competitor) => (
                  <span key={competitor}>{competitor}</span>
                ))}
              </div>
              <SourceAction sourceLabel="HubSpot competitor proof needed" />
            </article>
          </div>
        </section>

        {mode === "ahead" ? (
          <section className="two-column">
            <div className="panel large">
              <div className="section-heading">
                <p className="label">Week ahead</p>
                <h3>What needs attention first</h3>
              </div>
              <div className="priority-list">
                {weekAhead.map((item) => (
                  <article className={priorityClass(item.status)} key={`${item.date}-${item.label}`}>
                    <div className="date-chip">{item.date}</div>
                    <div>
                      <h4>{item.label}</h4>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="panel">
              <div className="section-heading">
                <p className="label">Doug meeting</p>
                <h3>Show today</h3>
              </div>
              <ul className="clean-list">
                <li>Here is the Growth OS view we can build on top of Codex and Sites.</li>
                <li>Here is the H2 reset frame: revenue, retention, key accounts, and buyer jobs.</li>
                <li>Here are the gaps blocking cleaner execution: target account clarity, ColdIQ launch, and follow-up ownership.</li>
                <li>Here is the source map for a broader GTM brain that sales, marketing, CS, and product can use.</li>
              </ul>

              <div className="callout">
                <span>Decision</span>
                <p>
                  Repo is recommended after this draft, but the first milestone is
                  agreeing on the report structure and source map.
                </p>
              </div>
            </aside>
          </section>
        ) : (
          <section className="retro-grid">
            {retrospective.map((group) => (
              <article className="panel" key={group.label}>
                <div className="section-heading">
                  <p className="label">Retrospective</p>
                  <h3>{group.label}</h3>
                </div>
                <ul className="clean-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        <section className="bottom-grid">
          <article className="panel">
            <div className="section-heading">
              <p className="label">Source status</p>
              <h3>What feeds the report</h3>
            </div>
            <div className="source-list">
              {sources.map((source) => (
                <div className="source-row" key={source.name}>
                  <div>
                    <strong>{source.name}</strong>
                    <p>{source.role}</p>
                  </div>
                  <span className={`status ${source.status}`}>{statusLabel(source.status)}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="section-heading">
              <p className="label">Next setup decisions</p>
              <h3>Before this becomes weekly muscle</h3>
            </div>
            <ol className="number-list">
              {decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ol>
          </article>
        </section>
      </section>
    </main>
  );
}
