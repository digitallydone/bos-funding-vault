# Go-Live Checklist

## Goal

Take the current BOSs site and move it from local preview to a live, usable business presence.

## 1. Connect the contact and form settings

Edit [config.js](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/config.js:1)

Replace:
- `contactEmail`
- `contactLink`
- `formEndpoint`

Recommended values:
- `contactEmail`: your real business email
- `contactLink`: your real mailto link or application form link
- `formEndpoint`: your Formspree endpoint once created

## 2. Set up Formspree

Use Formspree for the early-access request form.

Steps:
1. Create a Formspree account
2. Create a new form
3. Copy the endpoint that looks like `https://formspree.io/f/{form_id}`
4. Paste it into `formEndpoint` in `config.js`
5. Test a live request submission

Official reference:
- [Formspree HTML forms](https://formspree.io/html/)

## 3. Decide your early-access fulfillment method

Choose how customers will receive the product after they request access or purchase.

Recommended lean option:
- Guide delivery: `guide-full.html`
- Product delivery: Airtable, Notion, or Google Sheets link
- Communication: email

## 4. Prepare the actual product workspace

Take [funding-intelligence-vault-template.csv](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/funding-intelligence-vault-template.csv:1) and import it into:
- Airtable
- Notion
- Google Sheets

Then:
- add more funding opportunities
- organize filters
- add your preferred fields
- make the shared version customer-ready

## 5. Final content review

Check these pages once more:
- [index.html](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/index.html:1)
- [guide.html](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/guide.html:1)
- [guide-full.html](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/guide-full.html:1)
- [beta.html](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/beta.html:1)
- [request-access.html](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/request-access.html:1)
- [privacy.html](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/privacy.html:1)

Look for:
- any placeholder email
- any wording you want to personalize
- any product promises you want to soften or strengthen

## 6. Publish the site

You can host this as a static site.

Recommended path:
- Vercel

Files already support static hosting:
- `index.html`
- `guide.html`
- `guide-full.html`
- `beta.html`
- `request-access.html`
- `thank-you.html`
- `privacy.html`
- `assets/*`
- `config.js`
- `vercel.json`

## 7. Test the live customer journey

Test this full flow:
1. Open homepage
2. Click `Get the Free Guide`
3. Read the guide
4. Click `Early Access`
5. Submit the request form
6. Confirm thank-you page loads
7. Confirm the request arrives in Formspree or email

## 8. Prepare your first response templates

Use [customer-delivery-pack.md](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/customer-delivery-pack.md:1)

Have ready:
- guide delivery email
- early-access welcome email
- support reply

## 9. Start outreach

Use:
- [outreach-system.md](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/outreach-system.md:1)
- [customer-discovery-script.md](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/customer-discovery-script.md:1)
- [email-sequence.md](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/email-sequence.md:1)
- [social-copy.md](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/social-copy.md:1)

Minimum launch target:
- 25 direct outreach messages
- 1 public post
- 5 real conversations

## 10. Track responses

Use:
- [prospect-tracker-template.csv](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/prospect-tracker-template.csv:1)

Track:
- replies
- calls
- guide requests
- early-access requests
- objections

## Recommended Order for You

Do these next in order:
1. create the Formspree form
2. update `config.js`
3. import the CSV into Airtable or Sheets
4. publish the site
5. test the full journey
6. begin outreach

## Done Means

You are live when:
- the site is public
- the form works
- guide access works
- early-access requests reach you
- you can deliver the product manually

At that point, BOSs is no longer an idea. It is operating.
