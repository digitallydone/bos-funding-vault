# Funding Intelligence Vault Starter Kit

This workspace now contains a deployable static launch kit for the first version of the business.

## Files

- `index.html`
  Main landing page for the business.

- `guide.html`
  Free-guide lead capture page.

- `beta.html`
  Founding beta sales page.

- `request-access.html`
  Clean early-access request page for pre-launch use.

- `thank-you.html`
  Basic confirmation page after opt-in or purchase.

- `privacy.html`
  Placeholder privacy notice for launch.

- `config.js`
  One place to edit your contact links and CTA destinations.

- `assets/styles.css`
  Shared styles for the site.

- `assets/site.js`
  Small script that applies links from `config.js`.

- `funding-intelligence-vault-template.csv`
  Starter CSV template for the beta product.

- `business-blueprint.md`
  Business model and offer architecture.

- `30-day-execution-plan.md`
  Weekly launch plan.

- `landing-page-copy.md`
  Written copy source for the website.

- `lead-magnet-outline.md`
  Structure for the free guide.

- `lead-magnet-draft.md`
  First draft of the free guide content.

- `funding-database-schema.md`
  Full database structure for the paid product.

- `outreach-system.md`
  Outreach workflow and message templates.

- `customer-discovery-script.md`
  Interview script for prospect calls.

- `email-sequence.md`
  Nurture and beta sales email sequence.

- `beta-offer.md`
  Checkout and offer copy for the founding beta.

- `launch-assets.md`
  Launch checklist, stack, and deployment notes.

- `social-copy.md`
  Starter social posts for distribution.

- `vercel.json`
  Static hosting convenience for clean URLs on Vercel.

## First Edits to Make

1. Edit `config.js` and replace the placeholder email and links.
2. `guideLink` currently points to the full guide for immediate use.
3. `betaLink` currently points to the early-access request page.
4. Update `contactLink` with your real email, form, or application link.
5. Replace `formEndpoint` with your real Formspree endpoint if you want true in-page form submission.
6. The site is currently branded as `BOSs`. Change it only if you decide on a different final name.
7. Expand the CSV with more opportunities as you validate the niche.

## Best Immediate Uses

- Open `index.html` in a browser and review the whole site visually.
- Import `funding-intelligence-vault-template.csv` into Airtable, Notion, or Google Sheets.
- Use `outreach-system.md` plus `customer-discovery-script.md` to start conversations this week.
- Use `social-copy.md` and `email-sequence.md` to start distribution immediately.

## Recommended Next Build

If momentum is the priority, do these next:
- connect the CTA links in `config.js`
- host the site on Vercel or any static host
- connect a checkout flow for the beta offer
- connect the Formspree endpoint for the request form
- create a finished PDF version of the lead magnet
