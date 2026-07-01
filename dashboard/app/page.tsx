"use client";

import { type CSSProperties, useEffect, useState } from "react";
import { keyAccountUpdates } from "../../data/accounts";
import { campaignUpdates, lastWeekHappened, weekAtGlance } from "../../data/campaigns";
import { comingUp, contentCalendarUrl, lastWeekEmail, lastWeekSocial } from "../../data/content-calendar";
import {
  h1BookingsRows,
  h1DataNotes,
  h1NarrativeSource,
  h1PipelineCoverage,
  h1Retrospective,
  h1RetrospectiveSummary,
  h1SegmentRows,
  h1SnapshotMetrics,
  h1Trends,
} from "../../data/h1-retro";
import { h2PlanColumns, h2PlanSource, h2PlanSummary } from "../../data/h2-plan";
import {
  dashboardMeta,
  dashboardTrends,
  lastWeekNumbersToWatch,
  marketingLinks,
  monthlyMetrics,
  numbersToWatch,
  primaryMetrics,
  quickLinks,
  watchTrends,
} from "../../data/metrics";
import {
  confidenceLabels,
  freshnessLabels,
  logoUrl,
  sourceMap,
  type AccountUpdate,
  type ActivityGroup,
  type ContentItem,
  type H1NarrativeItem,
  type H1PlanColumn,
  type H1TargetRow,
  type KpiMetric,
  type MetricRecord,
  type MonthlyMetric,
  type QuickLinkGroup,
  type WatchMetric,
  type WatchTrend,
  type WorkItem,
} from "../../data/source-map";

type ViewMode = "ahead" | "last" | "dashboard" | "h1";

function getDefaultMode(): ViewMode {
  const day = new Date().getDay();
  return day >= 4 || day === 0 ? "last" : "ahead";
}

function formatPulledAt(value: string) {
  const datePart = value.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  if (!datePart) return value;

  const [year, month, day] = datePart.split("-").map(Number);
  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
    month - 1
  ];

  if (!monthName || !day || !year) return value;

  return `${monthName} ${day}, ${year}`;
}

function MetricMeta({ metric, compact = false }: { metric: MetricRecord; compact?: boolean }) {
  return (
    <div className={`metric-meta ${compact ? "compact" : ""}`} title={`${metric.source}: ${metric.notes}`}>
      <span className={`freshness-pill ${metric.freshness}`}>{freshnessLabels[metric.freshness]}</span>
      <span>{confidenceLabels[metric.confidence]} confidence</span>
      <span>Updated {formatPulledAt(metric.pulled_at)}</span>
    </div>
  );
}

function KpiCards({ metrics }: { metrics: KpiMetric[] }) {
  return (
    <div className="kpi-grid">
      {metrics.map((metric) => (
        <article className="kpi-card" key={metric.id}>
          <div className="kpi-card-heading">
            <p>{metric.label}</p>
            <a className={`kpi-value ${metric.accent}`} href={metric.href} target="_blank" rel="noreferrer">
              {metric.value}
            </a>
          </div>
          <p className="kpi-detail">{metric.detail}</p>
          <MetricMeta metric={metric} />
          <div className="target-stack">
            {metric.targets.map((target) => (
              <a className="target-row" href={target.href} target="_blank" rel="noreferrer" key={target.id}>
                <div className="target-copy">
                  <span>{target.label}</span>
                  <strong>
                    {target.actual} / {target.target}
                  </strong>
                </div>
                <div className="target-track" aria-label={`${target.label}: ${target.percent}%`}>
                  <span className={`target-fill ${target.accent}`} style={{ width: `${target.percent}%` }} />
                </div>
                {target.progressNote ? <p>{target.progressNote}</p> : null}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function SectionTitle({ title, note }: { title: string; note?: string }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {note ? <p>{note}</p> : null}
    </div>
  );
}

function NumbersToWatch({ metrics }: { metrics: WatchMetric[] }) {
  return (
    <div className="watch-grid">
      {metrics.map((metric) => (
        <a className="watch-item" href={metric.href} target="_blank" rel="noreferrer" key={metric.id}>
          <span className={`watch-value ${metric.accent}`}>{metric.value}</span>
          <h3>{metric.label}</h3>
          {metric.delta ? <p>{metric.delta}</p> : null}
          <MetricMeta metric={metric} compact />
        </a>
      ))}
    </div>
  );
}

function WorkList({ items }: { items: WorkItem[] }) {
  return (
    <div className="work-list">
      {items.map((item) => (
        <article className="work-item" key={item.id}>
          <h3>{item.title}</h3>
          {item.detail ? <p>{item.detail}</p> : null}
          {item.lines ? (
            <ul className="meeting-list">
              {item.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function getTypeClass(type: string) {
  return type.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function ContentList({ items }: { items: ContentItem[] }) {
  return (
    <div className="content-list">
      {items.map((item) => (
        <article className="content-item" key={item.id}>
          <span className="content-date">{item.date}</span>
          <div>
            <h3>
              {item.title} <span className={`type-label ${getTypeClass(item.type)}`}>{item.type}</span>
            </h3>
          </div>
        </article>
      ))}
    </div>
  );
}

function ComingUpList({ items }: { items: ContentItem[] }) {
  return (
    <div className="coming-up-block">
      <ul className="coming-up-list">
        {items.map((item) => (
          <li className="coming-up-item" key={item.id}>
            <span className="content-date">{item.date}</span>
            <span className="coming-up-copy">
              <span className="coming-up-title">{item.title}</span>
              <span className={`type-label ${getTypeClass(item.type)}`}>{item.type}</span>
            </span>
          </li>
        ))}
      </ul>
      <a className="content-calendar-link" href={contentCalendarUrl} target="_blank" rel="noreferrer">
        View in content calendar
      </a>
    </div>
  );
}

function CampaignUpdates() {
  return (
    <ul className="campaign-update-list">
      {campaignUpdates.map((update) => (
        <li key={update}>{update}</li>
      ))}
    </ul>
  );
}

function ActivityList({ items }: { items: ActivityGroup[] }) {
  return (
    <div className="activity-list">
      {items.map((item) => (
        <article className="activity-item" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          {item.next ? <p className="next-line">Next: {item.next}</p> : null}
        </article>
      ))}
    </div>
  );
}

function MarketingQuickLinks({ groups }: { groups: QuickLinkGroup[] }) {
  return (
    <>
      {groups.map((group) => (
        <details className="quick-link-group" key={group.label}>
          <summary>{group.label}</summary>
          <div className="group-links">
            {group.links.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </details>
      ))}
    </>
  );
}

function LikelihoodGauge({ likelihood, accent }: Pick<AccountUpdate, "likelihood" | "accent">) {
  return (
    <div className={`likelihood-readout ${accent}`}>
      <div>
        <span>Deal Likelihood</span>
        <strong>{likelihood.label}</strong>
      </div>
    </div>
  );
}

function KeyAccountUpdates() {
  return (
    <div className="account-table">
      <div className="account-header">
        <span>Account</span>
        <span>Summary</span>
        <span>Next step</span>
      </div>
      {keyAccountUpdates.map((item) => (
        <article className="account-row" key={item.id}>
          <div>
            <h3>{item.account}</h3>
            <p className={`account-signal ${item.accent}`}>{item.signal}</p>
            <LikelihoodGauge likelihood={item.likelihood} accent={item.accent} />
            <MetricMeta metric={item} compact />
          </div>
          <p>{item.summary}</p>
          <p>{item.nextStep}</p>
        </article>
      ))}
    </div>
  );
}

function scaleValue(value: number | null, max: number) {
  if (value === null || max <= 0) return 0;
  return Math.max(0, Math.min(100, (value / max) * 100));
}

function MonthlyMetricChart({ metric }: { metric: MonthlyMetric }) {
  return (
    <article className="monthly-metric">
      <div className="chart-card-header">
        <a className="monthly-title" href={metric.href} target="_blank" rel="noreferrer">
          {metric.label}
        </a>
        <span>{metric.yAxisLabel}</span>
      </div>
      <MetricMeta metric={metric} compact />
      <div className="vertical-chart">
        <div className="y-axis" aria-hidden="true">
          {metric.yTicks.map((tick) => (
            <span key={`${metric.id}-${tick}`}>{tick}</span>
          ))}
        </div>
        <div className="bar-plot">
          <div className="plot-grid" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div
            className="bar-groups"
            style={{ gridTemplateColumns: `repeat(${metric.rows.length}, minmax(0, 1fr))` } as CSSProperties}
          >
            {metric.rows.map((row) => (
              <div className="bar-group" key={`${metric.id}-${row.month}`}>
                <div className="bar-pair">
                  <span
                    className={`vertical-bar actual ${metric.accent}`}
                    style={{ height: `${scaleValue(row.actual, metric.yMax)}%` }}
                    title={`${row.month} actual: ${row.actualLabel}`}
                  />
                  {row.target === null ? (
                    <span className="vertical-bar target empty" title={`${row.month} target: ${row.targetLabel}`} />
                  ) : (
                    <span
                      className="vertical-bar target"
                      style={{ height: `${scaleValue(row.target, metric.yMax)}%` }}
                      title={`${row.month} target: ${row.targetLabel}`}
                    />
                  )}
                </div>
                <span className="x-label">{row.month}</span>
                <span className="bar-caption">{row.actualLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="chart-legend" aria-hidden="true">
        <span>
          <i className={`legend-dot ${metric.accent}`} />
          Actual
        </span>
        <span>
          <i className="legend-dot target" />
          Target
        </span>
      </div>
    </article>
  );
}

function WatchTrendCard({ trend }: { trend: WatchTrend }) {
  const max = trend.yMax || 1;
  const xStep = 296 / Math.max(trend.values.length - 1, 1);
  const points = trend.values
    .map((value, index) => {
      const x = 12 + index * xStep;
      const y = 138 - (Math.max(0, Math.min(value, max)) / max) * 112;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <article className="watch-trend-card">
      <div className="chart-card-header">
        <a className="monthly-title" href={trend.href} target="_blank" rel="noreferrer">
          {trend.label}
        </a>
        <span>{trend.valueLabels.at(-1)}</span>
      </div>
      <MetricMeta metric={trend} compact />
      <div className="watch-trend-chart">
        <div className="y-axis compact" aria-hidden="true">
          {trend.yTicks.map((tick) => (
            <span key={`${trend.id}-${tick}`}>{tick}</span>
          ))}
        </div>
        <div className="watch-plot">
          <svg className="watch-trend-svg" viewBox="0 0 320 160" role="img" aria-label={`${trend.label} over time`}>
            {[26, 82, 138].map((y) => (
              <line className="chart-grid-line" x1="12" x2="308" y1={y} y2={y} key={`${trend.id}-${y}`} />
            ))}
            <polyline className={`trend-line ${trend.accent}`} points={points} />
            {trend.values.map((value, index) => {
              const x = 12 + index * xStep;
              const y = 138 - (Math.max(0, Math.min(value, max)) / max) * 112;
              const labelY = y < 20 ? y + 18 : y - 10;
              return (
                <g key={`${trend.id}-${index}`}>
                  <circle className={`trend-point ${trend.accent}`} cx={x} cy={y} r="4" />
                  <text className="trend-label" x={x} y={labelY}>
                    {trend.valueLabels[index]}
                  </text>
                </g>
              );
            })}
          </svg>
          <div className="x-axis-labels" aria-hidden="true">
            {trend.xLabels.map((label) => (
              <span key={`${trend.id}-${label}`}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function SourceRegister() {
  return (
    <section className="body-section">
      <SectionTitle title="Data layer status" note="Source map and freshness" />
      <div className="source-grid">
        {sourceMap.map((entry) => (
          <article className="source-item" key={entry.id}>
            <div>
              <h3>{entry.label}</h3>
              <p>{entry.source}</p>
            </div>
            <div className="source-meta-row">
              <span className={`freshness-pill ${entry.freshness}`}>{freshnessLabels[entry.freshness]}</span>
              <span>{confidenceLabels[entry.confidence]} confidence</span>
              <span>Updated {formatPulledAt(entry.pulled_at)}</span>
            </div>
            <p className="source-notes">{entry.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DashboardView() {
  return (
    <>
      <section className="body-section">
        <SectionTitle title="Main numbers over time" note="MoM actual vs. target" />
        <div className="monthly-grid">
          {monthlyMetrics.map((metric) => (
            <MonthlyMetricChart metric={metric} key={metric.id} />
          ))}
        </div>
      </section>

      <section className="body-section">
        <SectionTitle title="Numbers to watch over time" note="Monthly snapshots" />
        <div className="watch-trend-grid">
          {watchTrends.map((trend) => (
            <WatchTrendCard trend={trend} key={trend.id} />
          ))}
        </div>
      </section>

      <section className="body-section">
        <h2>Trends</h2>
        <ul className="trend-list">
          {dashboardTrends.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <SourceRegister />
    </>
  );
}

function H1MetricCards() {
  return (
    <div className="h1-metric-grid">
      {h1SnapshotMetrics.map((metric) => {
        const content = (
          <>
            <span className={`h1-metric-value ${metric.accent}`}>{metric.value}</span>
            <span className="h1-metric-label">{metric.label}</span>
            <span className="h1-metric-note">{metric.note}</span>
            <MetricMeta metric={metric} compact />
          </>
        );

        return metric.href ? (
          <a className="h1-metric-card" href={metric.href} target="_blank" rel="noreferrer" key={metric.id}>
            {content}
          </a>
        ) : (
          <article className="h1-metric-card" key={metric.id}>
            {content}
          </article>
        );
      })}
    </div>
  );
}

function TargetBarList({ rows }: { rows: H1TargetRow[] }) {
  return (
    <div className="h1-target-list">
      {rows.map((row) => (
        <a className="h1-target-row" href={row.href} target="_blank" rel="noreferrer" key={row.id}>
          <div className="h1-target-copy">
            <span>{row.label}</span>
            <span>
              {row.actual} / {row.target}
            </span>
            <span>{row.gap}</span>
          </div>
          <div className="h1-target-track" aria-label={`${row.label}: ${row.percent}%`}>
            <span className={`h1-target-fill ${row.accent}`} style={{ width: `${Math.min(row.percent, 100)}%` }} />
          </div>
          <MetricMeta metric={row} compact />
        </a>
      ))}
    </div>
  );
}

function PipelineCoverage() {
  return (
    <a className="h1-pipeline-coverage" href={h1PipelineCoverage.href} target="_blank" rel="noreferrer">
      <div className="h1-pipeline-total">
        <span>{h1PipelineCoverage.value}</span>
        <span>{h1PipelineCoverage.totalLabel}</span>
      </div>
      <MetricMeta metric={h1PipelineCoverage} compact />
      <div className="h1-pipeline-stack" aria-label="Active pipeline by stage">
        {h1PipelineCoverage.segments.map((segment) => (
          <span
            className={`h1-pipeline-segment ${segment.accent}`}
            key={segment.id}
            style={{ width: `${segment.percent}%` }}
            title={`${segment.label}: ${segment.value}`}
          />
        ))}
      </div>
      <ul className="h1-pipeline-legend">
        {h1PipelineCoverage.segments.map((segment) => (
          <li key={segment.id}>
            <i className={`h1-pipeline-dot ${segment.accent}`} />
            <span>{segment.label}</span>
            <strong>{segment.value}</strong>
          </li>
        ))}
      </ul>
    </a>
  );
}

function H1BulletList({ items }: { items: string[] }) {
  return (
    <ul className="h1-bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function H1NarrativeList({ items }: { items: H1NarrativeItem[] }) {
  return (
    <ul className="h1-bullet-list h1-narrative-list">
      {items.map((item) => (
        <li key={item.lead}>
          <strong>{item.lead}</strong> {item.text}
        </li>
      ))}
    </ul>
  );
}

function H2Plan({ columns }: { columns: H1PlanColumn[] }) {
  return (
    <>
      <SummaryBlock text={h2PlanSummary} />
      <MetricMeta metric={h2PlanSource} compact />
      <div className="h2-plan-grid">
        {columns.map((column) => (
          <article className="h2-plan-column" key={column.title}>
            <h3>{column.title}</h3>
            <ul className="h1-bullet-list h2-action-list">
              {column.items.map((item) => (
                <li key={item.text}>
                  <span>{item.text}</span>
                  <span className="h2-plan-why">Why: {item.why}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}

function SummaryBlock({ text }: { text: string }) {
  return (
    <div className="h1-summary-block">
      <h3>Summary</h3>
      <p>{text}</p>
    </div>
  );
}

function H1ReviewView() {
  return (
    <>
      <section className="body-section">
        <SectionTitle title="H1 numbers at a glance" note="Closed won bookings from HubSpot" />
        <H1MetricCards />
      </section>

      <section className="body-section">
        <SectionTitle title="Bookings vs. target" />
        <TargetBarList rows={h1BookingsRows} />
      </section>

      <section className="body-section">
        <SectionTitle title="Enterprise vs. Programmatic" />
        <TargetBarList rows={h1SegmentRows} />
      </section>

      <section className="body-section">
        <SectionTitle
          title="Pipeline stage coverage"
          note={`${h1PipelineCoverage.value} ${h1PipelineCoverage.totalLabel}`}
        />
        <PipelineCoverage />
      </section>

      <section className="body-section">
        <SectionTitle title="H1 retrospective" />
        <SummaryBlock text={h1RetrospectiveSummary} />
        <MetricMeta metric={h1NarrativeSource} compact />
        <H1NarrativeList items={h1Retrospective} />
      </section>

      <section className="body-section">
        <SectionTitle title="H2 plan" />
        <H2Plan columns={h2PlanColumns} />
      </section>

      <section className="body-section">
        <SectionTitle title="Trends H1 2026" />
        <H1BulletList items={h1Trends} />
      </section>

      <section className="body-section">
        <SectionTitle title="Data notes" />
        <H1BulletList items={h1DataNotes} />
      </section>
    </>
  );
}

export default function Home() {
  const [mode, setMode] = useState<ViewMode>(getDefaultMode);
  const [navOpen, setNavOpen] = useState(false);
  const isAhead = mode === "ahead";
  const isDashboard = mode === "dashboard";
  const isH1 = mode === "h1";

  useEffect(() => {
    const view = new URLSearchParams(window.location.search).get("view");
    if (view !== "last" && view !== "ahead" && view !== "dashboard" && view !== "h1") return;

    window.requestAnimationFrame(() => setMode(view));
  }, []);

  function setReportMode(nextMode: ViewMode) {
    setMode(nextMode);
    const params = new URLSearchParams(window.location.search);
    params.set("view", nextMode);
    window.history.replaceState(null, "", `?${params.toString()}`);
  }

  return (
    <main className={`app-shell ${navOpen ? "nav-open" : "nav-closed"}`}>
      <aside className={`sidebar ${navOpen ? "open" : "closed"}`}>
        <button
          aria-label={navOpen ? "Close quick links" : "Open quick links"}
          aria-controls="sidebar-links"
          aria-expanded={navOpen}
          className="nav-toggle"
          onClick={() => setNavOpen((open) => !open)}
          type="button"
        >
          {navOpen ? (
            <img alt="" aria-hidden="true" className="nav-close-icon" src="/portico-nav-x.png" />
          ) : (
            <img alt="" aria-hidden="true" className="nav-arrow-icon" src="/portico-nav-arrow.png" />
          )}
        </button>

        <div className="sidebar-content" hidden={!navOpen} id="sidebar-links">
          <button className="brand-link" onClick={() => setReportMode("ahead")} type="button" aria-label="Main view">
            <img src={logoUrl} alt="Portico" />
          </button>

          <div className="quick-links">
            <h2>Quick links</h2>
            <nav aria-label="Quick links">
              {quickLinks.map((link) => (
                <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                  {link.label}
                </a>
              ))}
              <MarketingQuickLinks groups={marketingLinks} />
            </nav>
          </div>

          <div className="sidebar-report-links">
            <button
              className={`dashboard-nav-button ${!isDashboard && !isH1 ? "active" : ""}`}
              onClick={() => setReportMode("ahead")}
              type="button"
            >
              Main view
            </button>
            <button
              className={`dashboard-nav-button ${isDashboard ? "active" : ""}`}
              onClick={() => setReportMode("dashboard")}
              type="button"
            >
              Dashboard view
            </button>
            <button
              className={`dashboard-nav-button ${isH1 ? "active" : ""}`}
              onClick={() => setReportMode("h1")}
              type="button"
            >
              H1 retrospective
            </button>
          </div>
        </div>
      </aside>

      <section className="main-shell">
        <header className="report-header">
          <div>
            <h1>{dashboardMeta.title}</h1>
            <p>
              {isDashboard
                ? dashboardMeta.dashboardSubtitle
                : isH1
                  ? dashboardMeta.h1Subtitle
                  : dashboardMeta.currentWeekLabel}
            </p>
          </div>
          {!isDashboard && !isH1 ? (
            <div className="view-switch" aria-label="Report views">
              <button className={mode === "ahead" ? "active" : ""} onClick={() => setReportMode("ahead")}>
                Week ahead
              </button>
              <button className={mode === "last" ? "active" : ""} onClick={() => setReportMode("last")}>
                Last week
              </button>
            </div>
          ) : null}
        </header>

        {isDashboard ? (
          <DashboardView />
        ) : isH1 ? (
          <H1ReviewView />
        ) : isAhead ? (
          <>
            <section className="snapshot-panel" aria-label="Current revenue snapshot">
              <KpiCards metrics={primaryMetrics} />
            </section>

            <section className="body-section compact-section">
              <SectionTitle title="Numbers to watch" note={dashboardMeta.currentNumbersPulledLabel} />
              <NumbersToWatch metrics={numbersToWatch} />
            </section>

            <section className="body-section">
              <h2>Week at a glance</h2>
              <WorkList items={weekAtGlance} />
            </section>

            <section className="body-section">
              <h2>Key account updates</h2>
              <KeyAccountUpdates />
            </section>

            <div className="bottom-section-grid">
              <section className="body-section">
                <SectionTitle title="This week on the marketing calendar" />
                <ComingUpList items={comingUp} />
              </section>

              <section className="body-section">
                <h2>Campaign updates</h2>
                <CampaignUpdates />
              </section>
            </div>
          </>
        ) : (
          <>
            <section className="snapshot-panel" aria-label="Last week revenue snapshot">
              <KpiCards metrics={primaryMetrics} />
            </section>

            <section className="body-section compact-section">
              <SectionTitle title="Numbers to watch" note={dashboardMeta.lastWeekNumbersPulledLabel} />
              <NumbersToWatch metrics={lastWeekNumbersToWatch} />
            </section>

            <section className="body-section">
              <h2>What happened</h2>
              <ActivityList items={lastWeekHappened} />
            </section>

            <section className="body-section">
              <SectionTitle title="Comms at a glance" />
              <div className="comms-group">
                <div>
                  <h3>Email</h3>
                  <ContentList items={lastWeekEmail} />
                </div>
                <div>
                  <h3>Social</h3>
                  <ContentList items={lastWeekSocial} />
                </div>
              </div>
            </section>
          </>
        )}
      </section>
    </main>
  );
}
