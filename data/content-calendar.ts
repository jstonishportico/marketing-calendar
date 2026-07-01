import { dashboardLinks, sourcePaths, type ContentItem } from "./source-map";

export const contentCalendarUrl = dashboardLinks.contentCalendar;

const calendarSource = {
  source: "Recovered content calendar and OOO handoff",
  source_path_or_url: sourcePaths.contentCalendarFolder,
  pulled_at: "2026-06-29",
  owner: "Marketing",
  freshness: "needs_refresh",
  confidence: "medium",
  notes: "Recovered schedule item. Confirm against current SharePoint calendar before using as final truth.",
} as const;

export const comingUp: ContentItem[] = [
  {
    ...calendarSource,
    id: "coming-up-nasfaa-2026",
    date: "Jun 29-Jul 2",
    type: "Event",
    title: "NASFAA 2026",
  },
  {
    ...calendarSource,
    id: "coming-up-cecu-post-event-email",
    date: "Jun 29",
    type: "Email",
    title: "CECU post-event email",
  },
  {
    ...calendarSource,
    id: "coming-up-cecu-sales-sequence",
    date: "Jun 30",
    type: "Sequence",
    title: "CECU sales sequence",
  },
  {
    ...calendarSource,
    id: "coming-up-obbba-qa-promo",
    date: "Jul 1",
    type: "Email",
    title: "OBBBA Q&A promo",
  },
  {
    ...calendarSource,
    id: "coming-up-july-3-closure-notice",
    date: "Jul 2",
    type: "Email",
    title: "July 3 closure notice",
  },
  {
    ...calendarSource,
    id: "coming-up-july-4-holiday-post",
    date: "Jul 4",
    type: "Social",
    title: "July 4 holiday post",
  },
];

export const lastWeekEmail: ContentItem[] = [
  {
    ...calendarSource,
    id: "last-week-email-commons",
    date: "Jun 22",
    type: "Email",
    title: "Introducing The Commons",
  },
  {
    ...calendarSource,
    id: "last-week-email-vet-tech-promo",
    date: "Jun 22",
    type: "Email",
    title: "Vet Tech promo",
  },
  {
    ...calendarSource,
    id: "last-week-email-vet-tech-reminder",
    date: "Jun 23",
    type: "Email",
    title: "Vet Tech morning reminder",
  },
  {
    ...calendarSource,
    id: "last-week-email-june-pov",
    date: "Jun 24",
    type: "Email",
    title: "June Portico POV newsletter",
  },
  {
    ...calendarSource,
    id: "last-week-email-obbba-qa",
    date: "Jun 25",
    type: "Email",
    title: "OBBBA Q&A promo",
  },
];

export const lastWeekSocial: ContentItem[] = [
  {
    ...calendarSource,
    id: "last-week-social-commons-launch",
    date: "Jun 22",
    type: "Social",
    title: "The Commons launch posts",
  },
  {
    ...calendarSource,
    id: "last-week-social-attendance-process",
    date: "Jun 23",
    type: "Social",
    title: "Your students are ahead of your attendance process",
  },
  {
    ...calendarSource,
    id: "last-week-social-cecu-onsite",
    date: "Jun 23",
    type: "Social",
    title: "CECU onsite post",
  },
  {
    ...calendarSource,
    id: "last-week-social-commons-supercut",
    date: "Jun 24",
    type: "Social",
    title: "The Commons supercut",
  },
  {
    ...calendarSource,
    id: "last-week-social-paper-processes",
    date: "Jun 25",
    type: "Social",
    title: "What paper processes are costing your students",
  },
  {
    ...calendarSource,
    id: "last-week-social-change-management",
    date: "Jun 26",
    type: "Social",
    title: "Change management article post",
  },
];
