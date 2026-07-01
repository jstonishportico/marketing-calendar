# Connector Status

Last updated: 2026-07-01 14:52 EDT

## Summary

The recovered Growth OS has both file-based inputs and live inputs. The file-based inputs are mostly recovered. Read-only smoke tests are complete for the priority live inputs in this Codex profile.

## Live Inputs

| Source | Status | What We Need | Next Test |
| --- | --- | --- | --- |
| HubSpot | Live read works | Latest bookings, pipeline, closed won/lost, valid inbound, campaign/account signals | Refresh dashboard-ready HubSpot exports |
| Granola | Live read works | Recent meeting notes and follow-ups | Pull recent note metadata and summaries into meeting intelligence feed |
| Gong | Auth works, 0 visible calls | Sales/GTM team call lists, detailed call data, transcripts | Wait for admin to add team/workspace visibility plus read scopes |
| Outlook Email | Live read works | Email triage and source context | Build inbox/search sweep with redaction rules |
| Outlook Calendar | Live read works | Calendar readout and planning context | Keep write access unverified until calendar writes are needed |
| Teams | Live read works | Internal asks, launch blockers, team activity | Build scoped Teams sweep for GTM, marketing, and recent meeting chats |
| Slack | Live read works with limited visible channels | Internal asks, launch blockers, team activity, website/account alerts | Define scoped Slack source list and redaction rules |
| SharePoint | Live read works | Source docs, calendars, workbooks | Confirm canonical content-calendar workbook |
| GitHub | Remote connected locally; push must run from user terminal | Dashboard/source versioning | Fetch remote main, branch safely, commit Growth OS snapshot, then push from terminal |
| Trello | Optional / undecided | Weekly priorities if still useful | Decide whether it belongs in Growth OS |

## Verification Rule

Start with read-only checks. Record:

- source
- status
- what was tested
- pulled-at time
- blocker, if any
- whether the result can feed the dashboard

## Verification Log

### HubSpot

- Status: live read works.
- Pulled at: 2026-07-01 13:44 EDT.
- Tested: recovered local `gtm_brain_access/check_access.py` logic against contacts, companies, deals, and company properties endpoints.
- Visible data: contacts, companies, deals, and company property schema returned successfully. Property schema returned 486 visible company properties.
- Blocked: no read blocker found in smoke test. Dashboard data still needs a fresh export/query layer rather than relying on the June 30 baseline.
- Dashboard feed: bookings, open pipeline, closed won/lost, valid inbound, campaign/source attribution, target-account/account-signal views.

### Granola

- Status: live read works.
- Pulled at: 2026-07-01 13:44 EDT.
- Tested: recovered local `gtm_brain_access/check_access.py` logic against recent notes list endpoint.
- Visible data: five recent notes visible in the smoke test.
- Blocked: no auth blocker found in smoke test. Need a scoped pull that redacts sensitive note content before dashboard use.
- Dashboard feed: recent meeting follow-ups, GTM/customer action items, meeting intelligence freshness, stakeholder commitments.

### Gong

- Status: authentication works; call visibility blocked.
- Pulled at: 2026-07-01 13:44 EDT.
- Tested: recovered local `gtm_brain_access/check_access.py` logic against the calls-by-date endpoint for the last seven days.
- Visible data: API returned successfully, but zero calls were visible.
- Blocked: likely Gong workspace/team/API permission visibility. Admin needs to grant access to call metadata and transcript/call content for the needed GTM users or teams.
- Dashboard feed: blocked until visible calls are returned; intended feed is call themes, objections, competitive mentions, follow-up commitments, and transcript-derived GTM language.

### Outlook Email

- Status: live read works.
- Pulled at: 2026-07-01 13:45 EDT.
- Tested: read-only recent inbox listing with newest-first ordering.
- Visible data: five recent messages visible, including sender/recipient metadata, timestamps, read state, categories, attachment flags, body previews, and web links.
- Blocked: no read blocker found in smoke test. Full-body fetch should be reserved for scoped triage, task extraction, or specific thread review.
- Dashboard feed: unread/recent items needing response, HubSpot notification emails, campaign/customer signals, Slack/meeting notification spillover, and email-derived follow-up commitments.

### Outlook Calendar

- Status: live read works.
- Pulled at: 2026-07-01 13:46 EDT.
- Tested: authenticated Outlook profile lookup plus bounded calendar event read for 2026-07-01 through 2026-07-08.
- Visible data: calendar profile resolved correctly; ten upcoming event records visible with subject, start/end, response status, organizer, attendees, recurrence metadata, reminders, location, body preview, and meeting links where present.
- Blocked: no read blocker found in smoke test. Calendar write access was not tested and should remain unverified until work blocks or reminders are explicitly needed.
- Dashboard feed: daily agenda, focus windows, GTM/marketing meetings, attendee/owner context, meeting links, reminder posture, and calendar-driven prep/follow-up queues.

### Teams

- Status: live read works.
- Pulled at: 2026-07-01 13:46 EDT.
- Tested: authenticated Teams profile lookup, recent chat/channel thread listing, joined team listing, and channel listing for the Portico Marketing team.
- Visible data: profile resolved correctly; ten recent threads visible across chats and meeting chats; joined teams visible; Portico Marketing channels visible.
- Blocked: no read blocker found in smoke test. Dashboard use should stay scoped because broad recent-thread results can include personal/social or low-signal conversations.
- Dashboard feed: recent GTM and marketing chats, meeting-chat follow-ups, launch blockers, channel activity, campaign handoff asks, and team/thread links for drill-down.

### Slack

- Status: live read works with limited visible channels.
- Pulled at: 2026-07-01 13:47 EDT.
- Tested: workspace list, visible conversation list, channel search for `marketing` and `portico`, and read-only recent message sample from `#all-porticoedu`.
- Visible data: Portico workspace visible; two public channels visible from the user conversation list; `#all-porticoedu` can be searched and read. Recent messages include website visitor/account enrichment alerts.
- Blocked: no read blocker found for visible channels. No `marketing`-named Slack channel was found, and the visible channel set appears narrower than Teams; confirm whether Slack should be a primary Growth OS source or only a website/account alert source.
- Dashboard feed: website visitor/account intent alerts, company-wide announcements, and any explicitly selected Slack channels. Apply PII redaction before feeding shared dashboard views.

### SharePoint

- Status: live read works.
- Pulled at: 2026-07-01 13:47 EDT.
- Tested: delegated drive listing, keyword search for `content calendar`, and text extraction from a recovered Portico content-calendar workbook.
- Visible data: OneDrive surfaces visible; SharePoint search found multiple content-calendar candidates, including OneDrive workbooks and Marketing-site workbooks. The fetched Portico content calendar exposed 118 content/event rows plus communication-category rows.
- Blocked: no read blocker found in smoke test. The main blocker is source-of-truth ambiguity across similarly named workbooks; dashboard ingestion should pin the canonical calendar before using it.
- Dashboard feed: campaign/content calendar, event calendar, audience/product tags, channel/type, brand/sender, dates, HubSpot links/lists, attendee/owner context, and source document drill-down links.

### GitHub

- Status: repository is visible read-only through the GitHub connector; local remote is configured; push must run from the user terminal.
- Pulled at: 2026-07-01 14:52 EDT.
- Tested: local repo remote/status after user-added remote, attempted read-only `git ls-remote`, GitHub connector authenticated user lookup, connector repository listing, installed-account listing, installation listing, organization listing, organization-membership listing, installed-repository search for `portico`, direct repository lookup for `jstonishportico/marketing-calendar`, collaborator-permission lookup, public repository search, available GitHub actions, local GitHub CLI availability, and user-provided Codex Git settings screenshot.
- Visible data: local `origin` now points to `https://github.com/jstonishportico/marketing-calendar.git`. GitHub connector can resolve `jstonishportico/marketing-calendar` and reports repository metadata, default branch `main`, clone URL, public visibility, and connector permissions `pull: true`, `push: false`. Remote `main` exists and includes at least `README.md` and `index.html`. This local Growth OS repo has no commits yet.
- Blocked: the GitHub UI shows a fine-grained token for `jstonishportico/marketing-calendar` with code/workflow write access, but that token is not exposed to chat and should not be pasted. The Codex GitHub connector currently has read-only repository access. The Codex Git settings screen visible in the current desktop app only controls branch prefix, merge method, force-push behavior, draft PRs, worktree cleanup, and commit/PR instructions; it does not expose account or repository authorization. Local `git ls-remote` from this chat failed because the sandbox cannot resolve `github.com`. Dashboard/source versioning must be pushed from the user terminal, using a safe branch flow from remote `main`.
- Dashboard feed: pending Growth OS repo connection. Once connected, feed repo/branch status, PR links, source-change history, and dashboard deployment/version metadata.
