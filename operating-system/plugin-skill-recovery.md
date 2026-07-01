# Plugin And Skill Recovery

Last updated: 2026-07-01 14:00 EDT

## Current Status

Custom skills from the old `padmin` Codex profile have been copied into the current `jessicastonish` Codex profile.

Current custom/system skill count in this profile: 58.

Verified current custom skill count: 58.

Growth/GTM-relevant restored skills include:

- `portico-voice`
- `revops`
- `sales-enablement`
- `content-strategy`
- `customer-research`
- `cold-email`
- `analytics`
- `social`
- `email`
- `design`
- `emails`
- `ab-testing`

## External Skill Sources

- Compound Engineering: https://github.com/EveryInc/compound-engineering-plugin
- Compound Knowledge Work: https://github.com/EveryInc/compound-knowledge-plugin
- Marketing skills benchmark/gap-fill source: https://github.com/coreyhaines31/marketingskills

## Skill Precedence

Jessica's custom skills always override the Corey Haines marketing skills.

Use the Corey Haines marketing skills as:

- gap fillers when there is no Portico/custom skill for the job
- benchmarks/checklists for marketing best practices
- secondary references, not the primary voice or operating rule

For Portico work, prefer these custom skills first when applicable:

- `portico-voice`
- `design`
- `email`
- `revops`
- `sales-enablement`
- `content-strategy`
- `customer-research`

Compound Engineering / knowledge-work external skills are present:

- Compound Engineering skills: 38 `ce-*` skills found, including `ce-work`, `ce-code-review`, `ce-commit`, `ce-commit-push-pr`, `ce-debug`, `ce-frontend-design`, `ce-plan`, `ce-polish`, `ce-simplify-code`, `ce-test-browser`, and `ce-worktree`.
- Compound Knowledge Work skills: 6 `kw-*` skills found, including `kw-brainstorm`, `kw-plan`, `kw-work`, `kw-review`, `kw-confidence`, and `kw-compound`.
- Empty marker directories named `compound-engineering` and `compound-knowledge` exist, but the usable commands are the `ce-*` and `kw-*` skills above.

Compound Engineering health check:

- Runtime tools present: `jq`.
- Runtime tools missing: `agent-browser`, `gh`, `vhs`, `silicon`, `ffmpeg`, `ast-grep`.
- Agent skill missing: `ast-grep`.
- Impact: CE workflows and KW skills are available in Codex, but some advanced demo/review/browser/GitHub-CLI workflows may degrade until optional tooling is installed.

The current profile also has the standard app/plugin skills visible in Codex, including:

- Browser
- Sites
- GitHub
- Outlook Calendar
- Outlook Email
- SharePoint
- Slack
- Teams
- Documents
- Spreadsheets
- Presentations
- PDF
- Template creator

Live app connector smoke tests completed on 2026-07-01:

- Outlook Email: read works.
- Outlook Calendar: read works.
- Teams: read works.
- Slack: read works with limited visible channels.
- SharePoint: read/search/fetch works.
- GitHub: auth works, but no installed accounts/repositories are visible to the GitHub app yet.

## Remaining Checks

- Old profile had Growth OS automations: `portico-morning-sweep` and `h1-retrospective-interview`.
- These were found in the old profile but have not been re-enabled here yet.
- Old profile had many custom agent definitions under `agents/compound-engineering` and `agents/compound-knowledge`; the skill families are available, but the old custom agent definitions are still not required for the first Growth OS rebuild.
- Old profile had Chrome/computer-use plugin cache folders that are not currently active in the same way here. This is lower priority unless browser control outside the in-app browser becomes necessary.
