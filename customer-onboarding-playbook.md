# Customer Onboarding Playbook

Internal playbook for delivering Funding Intelligence Vault as a guided service, not a file dump. Use the language and cadence below verbatim — the consistency is what makes the product feel premium.

## Mental model to communicate

In every touchpoint, frame the product the same way:

> Funding Intelligence Vault is your team's funding map. Not a list, not a search tool — a curated, maintained map of where Canadian funding lives, with notes on which territory is worth your time.

That single sentence is the elevator pitch. It shows up in the welcome email, on `customer-start.html`, in the subject line of nurture emails, and in support replies. Repeat it.

## Core onboarding assets

| Asset | File | Purpose |
|-------|------|---------|
| Public guide | `guide-full.html` | Explains the funding landscape — reduces "where do I even start" overwhelm |
| Request page | `request-access.html` | The form a visitor fills out to enter the funnel |
| Thank-you page | `thank-you.html` | Holds the visitor while you reply manually |
| Customer start page | `customer-start.html` | The first page a paying customer lands on |
| Dataset | `funding-intelligence-vault-template.csv` | 75 curated Canadian funding sources |
| Import guide | `vault-import-guide.md` | The Sheets/Airtable setup walkthrough — the bridge between CSV and working tracker |

## Recommended customer journey

1. Visitor reads the public guide.
2. Visitor requests early access through the form.
3. Form submission lands in Formspree → email to you.
4. You manually reply within 24 hours with the **Day 0 welcome email** below (paste, personalize the bracketed fields, send).
5. Customer follows the import guide and gets a tracker live in their own tool.
6. You check in at Day 3 and Day 7 with the templates below.
7. At Day 14, customer either renews engagement (case study, testimonial, referral) or quietly disengages — both are signal you'll act on.

## Day 0 — Welcome email

Send within 24 hours of receiving the early-access request.

**Subject:**
Welcome to Funding Intelligence Vault — start here

**Body:**

Hi [First Name],

Welcome — you're in.

Funding Intelligence Vault is built to be your team's funding map: one place to see which Canadian sources are worth monitoring, which fit your mission, and which don't deserve any more of your attention.

**Your first 15 minutes:**

1. Open the import guide. Pick Sheets or Airtable, follow the 5–8 minute setup. You'll have a working tracker, not just a CSV.
2. Pick 3 rows that look right for [Organization]. Open their URLs and write one sentence each in the `notes` column about how they fit your work. That single pass is what turns this from "another spreadsheet" into a real funding map.
3. Decide who on your team owns the weekly review.

**Your access:**

- Dataset (75 curated sources): [insert link]
- Import guide (Sheets + Airtable): [insert link to `vault-import-guide.md`]
- Free public guide: [insert link to `guide-full.html`]
- Customer start page: [insert link to `customer-start.html`]

I'll check in at the end of the week. If you want help narrowing best-fit sources before then, reply with your **organization type**, **province**, and **funding focus** — happy to point you straight at the strongest matches.

Best,
[Your Name]
BOSs | Business Opportunity Systems

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
