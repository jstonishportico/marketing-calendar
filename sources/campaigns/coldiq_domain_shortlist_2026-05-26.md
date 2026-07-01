# ColdIQ Domain Shortlist

Date: 2026-05-26  
Purpose: short, low-noise, software-appropriate domains for ColdIQ to buy, authenticate, and begin warming for Portico outbound.

## Recommendation

Buy and warm **15 domains** today.

This gives ColdIQ enough infrastructure to start warming safely without forcing all 20 package domains into awkward names. If they later need the full 20-domain / 40-inbox footprint, add from the backup list after the first 15 are secured.

Use these as secondary outbound domains only. Do not send cold outbound from `porticoedu.com`.

## Naming Direction

Shorter is better. Non-`.com` is fine.

Preferred feel:

- Software/platform provider, not school/institution.
- Close to Portico or PorticoEdu.
- Broad enough for Financial Aid, Attendance, Trajecsys, and platform-level campaigns.
- Not CTA-heavy or obviously generated for outbound.

Avoid:

- Product-specific names like `porticoattendance.com` or `porticoclinicaledu.com`.
- Institution-coded domains/TLDs like `.school`, `.schools`, `.academy`, `.institute`, or `.education`.
- CTA-heavy names like `see...`, `visit...`, `start...`, `use...`, `with...`, `explore...`, `discover...`.
- Made-up outbound-looking names like `porticoedusuite.com`, `porticoedusolutions.com`, `porticoeduservices.com`, `porticoeducommunity.com`, etc.

## Primary 15 Domains

Verified via RDAP as available on 2026-05-26. ColdIQ/registrar should re-check in cart before purchase.

Ordered by preference:

1. `portico.co`
2. `portico.io`
3. `portico.so`
4. `portico.us`
5. `portico.inc`
6. `portico.work`
7. `porticoedu.co`
8. `porticoedu.io`
9. `porticoedu.app`
10. `porticoedu.dev`
11. `porticoedu.so`
12. `porticoedu.software`
13. `porticoedu.tools`
14. `porticoedu.team`
15. `porticoedu.ops`

## Best Backups

Also verified as available on 2026-05-26.

- `porticoedu.work`
- `porticoedu.works`
- `porticoedu.cloud`
- `porticoedu.studio`
- `porticoedu.one`
- `porticoedu.page`
- `porticoedu.link`
- `porticoed.co`
- `porticoed.io`
- `porticoed.software`
- `tryportico.co`
- `getportico.co`
- `tryportico.io`
- `getportico.io`

## Ideal Names Checked But Registered

These were registered in RDAP on 2026-05-26:

- `myportico.com`
- `tryportico.com`
- `getportico.com`
- `goportico.com`
- `useportico.com`
- `withportico.com`
- `myporticoedu.com`
- `getporticoedu.com`
- `goporticoedu.com`
- `porticoeducation.com`
- `porticoed.com`
- `portico-edu.com`
- `portico.app`
- `portico.dev`
- `portico.net`
- `portico.software`
- `portico.tools`
- `portico.cloud`
- `portico.services`
- `portico.team`
- `portico.solutions`
- `portico.works`
- `porticoedu.technology`
- `porticoedu.services`
- `porticoedu.solutions`
- `porticoedu.pro`
- `porticoedu.online`

## Setup Requirements To Ask ColdIQ To Confirm

For every domain:

- SPF configured for the sending platform.
- DKIM enabled with 2048-bit keys where supported.
- DMARC published at minimum `p=none` during warmup, with reporting turned on.
- TLS enabled.
- Valid forward and reverse DNS / PTR alignment for the sending infrastructure.
- Google Postmaster Tools added where possible.
- Yahoo Sender Hub / complaint feedback loop handled where possible.
- Domain has a real web destination: redirect to `https://porticoedu.com/` or to the relevant Portico landing page.
- Two inboxes per domain maximum to start.
- No generic `sales@`, `info@`, `marketing@`, or `hello@` senders. Use real-person sender patterns.

## Suggested ColdIQ Slack Message

Here are the 15 domains we'd like you to start with for Portico. We're prioritizing short, credible domains that feel like a software/platform company, not an institution, and not a made-up outbound property:

`portico.co`
`portico.io`
`portico.so`
`portico.us`
`portico.inc`
`portico.work`
`porticoedu.co`
`porticoedu.io`
`porticoedu.app`
`porticoedu.dev`
`porticoedu.so`
`porticoedu.software`
`porticoedu.tools`
`porticoedu.team`
`porticoedu.ops`

Please re-check availability in your registrar before purchase, then confirm the domain/inbox plan, SPF/DKIM/DMARC setup, warmup timeline, redirects, and whether the $1,000 setup fee covers the domain/mailbox costs or if we should expect separate reimbursement.
