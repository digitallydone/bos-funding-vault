# Customer Onboarding Playbook

Internal playbook for delivering Funding Intelligence Vault as a guided service, not a file dump. Use the language and cadence below verbatim — the consistency is what makes the product feel premium.

## Mental model to communicate

In every touchpoint, frame the product the same way:

> You're not getting a spreadsheet. You're getting a working environment — a curated, maintained map of where Canadian funding lives, already configured in your team's tool of choice, with notes on which territory is worth your time.

That single line is the elevator pitch. It shows up in the welcome email, on `customer-start.html`, on `request-access.html`, in the welcome Loom, and in support replies. Repeat it.

## Core onboarding assets

| Asset | File | Purpose |
|-------|------|---------|
| Public guide | `guide-full.html` | Explains the funding landscape — reduces "where do I even start" overwhelm |
| Buy page | `request-access.html` | The page that takes payment via Paystack |
| Thank-you page | `thank-you.html` | Confirms payment, embeds welcome video, points to workspace |
| Customer start page | `customer-start.html` | Primary post-purchase landing — one click into the workspace |
| Airtable template (built once) | `airtable-base-spec.md` | Build-once spec for the customer-facing Airtable template |
| Sheets template (built once) | `sheets-template-setup.md` | Same idea for customers who prefer Sheets |
| Welcome video | `welcome-loom-script.md` | 90-second Loom you record once, shown on thank-you page |
| Dataset (secondary) | `funding-intelligence-vault-template.csv` | 75 curated rows — kept as fallback for teams that want raw data |
| Import guide (secondary) | `vault-import-guide.md` | Manual Sheets/Airtable setup for the rare CSV-only customer |

## Recommended customer journey

1. Visitor reads the public guide.
2. Visitor requests early access through the form.
3. Form submission lands in Formspree → email to you.
4. You manually reply within 24 hours with the **Day 0 welcome email** below (paste, personalize the bracketed fields, send).
5. Customer follows the import guide and gets a tracker live in their own tool.
6. You check in at Day 3 and Day 7 with the templates below.
7. At Day 14, customer either renews engagement (case study, testimonial, referral) or quietly disengages — both are signal you'll act on.

## Day 0 — Welcome email

Send within 24 hours of payment. The full template lives in `customer-delivery-pack.md` — keep this playbook synced with it.

**Subject:**
Your Funding Intelligence Vault workspace is ready

**Body opener (premium framing):**

> Welcome — your workspace is ready.
>
> You're not getting a spreadsheet. You're getting a working environment: 75 curated Canadian funding sources, a kanban pipeline, status colours, and your starting shortlist already pre-flagged. Click once, work the next morning.

The email then walks them through:

1. Watch the 90-second walkthrough video.
2. Open the Airtable workspace (or Sheets) with one click.
3. Switch to the **High priority** view, pick 3 rows that fit, write one sentence in `notes` for each.
4. Assign a weekly review owner.

End with the offer to send a personalized starting set if they reply with org type, province, and funding focus.

See the full template in `customer-delivery-pack.md`.

## Day 3 — Shortlist help

Send if you haven't heard back by end of day 3.

**Subject:**
Quick check on your Funding Intelligence Vault setup

**Body:**

Hi [First Name],

Quick one: are you up and running with the vault yet?

If the import felt slow or the dataset feels overwhelming, it's worth saying — most teams need a 10-minute push to go from "imported" to "actually using it." Common stuck points are:

- not sure which `province_or_territory` rows actually apply to a specific funder
- the vault feels like 75 things to track when really only 12–15 are relevant for any given org

If either is true for you, reply with:

- your **province**
- your **mission area**
- whether you want to prioritize **public grants**, **foundations**, or **both**

I'll send back the 10–15 rows I'd start with for [Organization].

Best,
[Your Name]

## Day 7 — Rhythm check

Send at end of week 1 regardless of activity.

**Subject:**
First-week wins from Funding Intelligence Vault

**Body:**

Hi [First Name],

End of your first week with the vault. Goal-setting check:

By now, the wins to aim for are not "I've reviewed everything." They are:

- [ ] Tracker is set up in your team's tool of choice
- [ ] You have a shortlist of 10–15 relevant sources, not 75
- [ ] One person on your team owns the weekly review
- [ ] You've identified 3–5 opportunities to monitor closely over the next 90 days

If any of those four are still open, reply and tell me which one — I'll send something back to unblock it.

If all four are done, you're ahead of where most early-access customers are at this point. Reply when your team submits its first application from the vault — I'd love to hear it.

Best,
[Your Name]

## Day 14 — Light-touch check-in

Send only if you got a reply at Day 3 or Day 7. Otherwise let it rest.

**Subject:**
Two-week check on your funding rhythm

**Body:**

Hi [First Name],

Two weeks in. The question I find most useful at this point isn't "have you done the work" — it's:

> Has the vault changed how funding research happens at [Organization]?

If yes, even a little — I'd love a sentence or two on what shifted. It helps me make the next version sharper for teams like yours, and if you're up for it I'd quote you (with permission) on the public site.

If not yet — reply and tell me what's getting in the way. The most likely answer is "we haven't had a clear hour to sit with it." That's fine, and easy to fix.

Best,
[Your Name]

## Packaging rules

To keep the product feeling premium, every delivery follows these:

- Never send only a CSV attachment. Always wrap with the import guide and a one-paragraph context.
- Always link to a hosted version of the start page; never paste raw markdown into an email.
- Always include the contact email so the customer feels supported, not abandoned.
- Frame the product as a *workflow*, not a *list*. The dataset is the artifact; the workflow is the value.
- Never send a delivery email longer than three short paragraphs and one numbered list. Premium feels brief.

## Customer success milestones

Stage 1 — **Set up** (target: end of Day 1):
- Tracker imported into Sheets or Airtable
- Header row frozen, filter on, status column color-coded

Stage 2 — **Shortlist** (target: end of Week 1):
- 10–15 sources marked as relevant
- Owner assigned for weekly review

Stage 3 — **Active pipeline** (target: end of Month 1):
- 3–5 sources moved to status "Drafting" or "Submitted"
- `next_action_date` populated for at least 5 rows

Stage 4 — **Sticky** (target: end of Month 3):
- Customer has applied to at least one opportunity from the vault
- Customer has updated `last_verified_on` on at least 5 rows themselves

Once a customer hits Stage 4, the product is sticky and the conversation shifts from onboarding to renewal/expansion.

## When to escalate

Default support is async email. Offer a 20-minute call only when:

- Customer has replied to Day 3 or Day 7 with a real blocker (not just "thanks!")
- Customer is paying tier 2 or above (when those exist)
- Customer is a strong potential case-study target (recognizable nonprofit, sector you want to grow into)

Default response time: same day for Day 0 → Day 14, next business day after that.

## Internal hygiene

After every send, log in your CRM (or even a simple sheet):

- date sent
- which template used
- reply received? Y/N + summary
- next send scheduled

Without this, second-touch quality decays fast and the product stops feeling guided.
