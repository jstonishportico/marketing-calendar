# Post-event HubSpot sequence: Portico suite follow-up

Source inputs:
- Live product pages:
  - https://porticoedu.com/financial-aid-software/
  - https://porticoedu.com/financial-aid-services/
  - https://porticoedu.com/attendance-skills/
  - https://porticoedu.com/clinical-management/
- Cold-calling source: `/Users/padmin/Downloads/Cold Calling Sucks 2.pdf`
- Style source: `/Users/padmin/Downloads/Portico_Commons_Style_Guide_2026 (1).docx`
- HubSpot references: sequence steps, task reminders, threading, reply/booked-meeting unenrollment

## Recommended HubSpot setup

Sequence name: Post-event follow-up | Portico suite | deck first

Audience: registrants and attendees from the virtual event.

Goal: share the session deck, identify the most relevant product area, and create a natural path to a product conversation without sounding like a generic sales sequence.

Recommended settings:
- Business days only.
- Use HubSpot's automated send window for follow-up emails.
- Thread emails 2 through 4 as replies to email 1 when the connected inbox supports threading.
- Unenroll contacts when they reply, book a meeting, unsubscribe, or ask not to receive follow-up.
- Add call tasks to a queue so reps complete them from the contact record.

Sequence structure:
- Day 0: Automated email with the session deck.
- Day 1: Call task for high-fit contacts and target accounts.
- Day 3: Automated threaded email with the product-suite map.
- Day 5: LinkedIn or call task for engaged contacts.
- Day 7: Automated threaded email asking which area matters.
- Day 11: Automated threaded close.

## Email 1

Step type: Automated email

Timing: Day 0, same day as the virtual event or next business morning

Subject: slides from the session

Body:

Hi {{ contact.firstname }},

Whether you joined live or missed part of the session, I'm sending the deck while the conversation is still fresh.

View the session deck: [SESSION_DECK_LINK]

The deck walks through three areas career schools are reviewing right now: financial aid processing, verified attendance records, and clinical documentation.

If one area is on your team's list, reply with the area and I'll send the most relevant follow-up.

Best,
{{ sender.firstname }}

Optional personalization line for attendees:

Thanks for joining the session.

Optional personalization line for no-shows:

Calendars fill up fast, so I'm sending the slides in case you missed them.

## Day 1 call task

Step type: Call task

Timing: One business day after email 1

Task title: Call after sending session deck

Task notes:

Use this call for high-fit contacts, target accounts, and contacts who clicked the deck. Keep the opener direct, ask for a small amount of time, and make the call about the area that matters to their team.

Call opener:

Hi {{ contact.firstname }}, this is {{ sender.firstname }} from Portico. I sent the session deck over. Can I take 30 seconds to ask which part matters, if any? I'm looking at financial aid processing, attendance records, or clinical documentation.

If they give you 30 seconds:

Thanks. Which area is closest to your current workload?

If they ask what Portico does:

Portico helps career schools manage student operations across financial aid, attendance, and clinical education. The right fit depends on where your team spends the most manual time.

Voicemail:

Hi {{ contact.firstname }}, this is {{ sender.firstname }} from Portico. I sent the session deck and called because the follow-up can go three directions: financial aid, attendance, or Trajecsys clinical management. If one is relevant, reply to my email with that area and I'll send the right resource.

## Email 2

Step type: Automated email, threaded reply to email 1

Timing: Day 3

Subject: re: slides from the session

Body:

Hi {{ contact.firstname }},

The session raised a practical question: where does manual work create the most risk for your team?

Portico's suite covers the student lifecycle, but three areas map most directly to the session:

- Financial Aid Software and Services for ISIR imports, document verification, award packaging, disbursement tracking, COD and NSLDS work, and expert capacity when staffing is tight.
- Attendance and Skills for secure check-in, real-time attendance and skills visibility, automatic nudges, and support for in-person, hybrid, and asynchronous learning.
- Trajecsys Clinical Management for clinical time, competencies, evaluations, site coordination, and SPE Tracker accreditation reporting.

Does one area deserve a closer look at {{ company.name }}?

Best,
{{ sender.firstname }}

## Day 5 manual task

Step type: LinkedIn task or call task

Timing: Day 5

Use for: contacts who opened email 1 or clicked the deck.

LinkedIn connection note:

Thanks for registering for Portico's session. I sent the deck by email and would be glad to point you to the most relevant follow-up for financial aid, attendance, or clinical documentation.

Alternate call opener:

Hi {{ contact.firstname }}, this is {{ sender.firstname }} from Portico. I sent the session deck and had one question: is financial aid, attendance, or clinical documentation the most relevant area for your team right now?

## Email 3

Step type: Automated email, threaded reply to email 1

Timing: Day 7

Subject: re: slides from the session

Body:

Hi {{ contact.firstname }},

A useful next step depends on the work your team is carrying.

Financial aid: student notifications, ISIRs, document review, COD updates, and disbursement tracking.

Attendance and Skills: secure check-in, skills progress, nudges, and records tied to each learning format.

Clinical Management: clinical time, competencies, evaluations, site records, and SPE Tracker reporting without spreadsheet scramble.

Which area is closest to your current workload?

Best,
{{ sender.firstname }}

## Email 4

Step type: Automated email, threaded reply to email 1

Timing: Day 11

Subject: re: slides from the session

Body:

Hi {{ contact.firstname }},

I haven't heard back, so I'm going to step back after this note.

If the session deck raised a question for your financial aid, attendance, or clinical team, reply with the area and I'll point you to the right resource.

No pressure from me. The deck will stay useful either way.

Best,
{{ sender.firstname }}

## Personalization options by product interest

Use one line in email 2 or email 3 when HubSpot segmentation shows product interest.

Financial Aid:

I saw your team was looking at the financial aid material, so the most relevant part may be ISIR imports, document verification, award packaging, disbursement tracking, or expert support during busy enrollment periods.

Attendance:

I saw your team was looking at the attendance material, so the most relevant part may be secure check-in, real-time attendance visibility, skills tracking, automatic nudges, or support for hybrid and asynchronous learning.

Clinical Management:

I saw your team was looking at the clinical management material, so the most relevant part may be clinical time, competencies, evaluations, site coordination, or SPE Tracker reporting in Trajecsys.

## Why this sequence works

- The first email leads with the deck, not a meeting ask.
- The first call uses a permission-based opener and a clear reason for the call.
- Each follow-up adds a new angle rather than repeating the same ask.
- The sequence stays short because event follow-up has warm context.
- The close respects silence and leaves the door open without using sales cliches.
