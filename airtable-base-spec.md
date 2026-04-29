# Airtable Base Spec — Funding Intelligence Vault

This is the build-once spec for the Airtable base you publish as a template. Customers will get a fully configured copy with views, colours, and pipeline kanban already set up — no schema work for them.

You build this base once. After that, every customer click on the template share link creates an independent copy with the data and configuration intact.

---

## 1. Create the base

1. Go to https://airtable.com → **Add a base** → **Start from scratch**
2. Name it **Funding Intelligence Vault — Customer Template**
3. Pick any colour and icon — these carry through to customer copies

## 2. Rename and configure the default table

1. Rename the default table from "Table 1" to **Sources**
2. You'll create the fields below in order. The CSV column names match exactly so import is one-shot.

## 3. Field schema

Add fields in this order. After you create them, you'll import the CSV and Airtable will route columns to existing fields by name.

| # | Field name | Type | Options |
|---|------------|------|---------|
| 1 | `opportunity_name` | Single line text | (Primary field — keep first) |
| 2 | `funder_name` | Single line text | |
| 3 | `program_name` | Single line text | |
| 4 | `source_type` | Single select | Options below |
| 5 | `country` | Single select | Canada |
| 6 | `province_or_territory` | Single select | National, Ontario, Quebec, British Columbia, Alberta, Manitoba, Saskatchewan, Nova Scotia, New Brunswick, Newfoundland and Labrador, Prince Edward Island, Yukon, Northwest Territories, Nunavut, Atlantic Canada, Northern Canada, Regional, Alberta Saskatchewan Manitoba |
| 7 | `sector` | Multiple select | Options below |
| 8 | `beneficiary_group` | Single line text | |
| 9 | `organization_type` | Single select | Nonprofit or charity, Indigenous nonprofit, Arts nonprofit |
| 10 | `maximum_amount` | Currency | Symbol: $, Precision: 0 |
| 11 | `deadline` | Single line text | (Free text — values are mixed: "Rolling", "Annual", "Varies", or dates) |
| 12 | `status` | Single select | Open (grey), Drafting (yellow), Submitted (blue), Won (green), Declined (red) — assign colours when creating options |
| 13 | `source_url` | URL | |
| 14 | `short_summary` | Long text | |
| 15 | `best_fit_orgs` | Long text | |
| 16 | `notes` | Long text | |
| 17 | `last_verified_on` | Date | ISO format (YYYY-MM-DD), Include time: off |
| 18 | `priority` | Single select | High (red), Medium (yellow), Low (grey) |
| 19 | `target_amount` | Currency | Symbol: $, Precision: 0 |
| 20 | `next_action` | Long text | |
| 21 | `next_action_date` | Date | |
| 22 | `owner` | Collaborator | (Customers add their team members) |
| 23 | `application_link` | URL | |
| 24 | `submitted_on` | Date | |
| 25 | `decision_on` | Date | |
| 26 | `award_amount` | Currency | Symbol: $, Precision: 0 |
| 27 | `attachments` | Attachment | |

### `source_type` options (single select)

Federal department, Federal program, Provincial government, Provincial arts council, Provincial cultural agency, Territorial government, Regional development agency, Research council, Foundation, Private foundation, Community foundation, Corporate foundation, Corporate program, Indigenous foundation, Indigenous network, Federal-affiliated agency, Public foundation, Capacity-building program, Sector resource hub, Local arts council, Research nonprofit

### `sector` options (multiple select)

Multi-sector, Social development, Arts and culture, Arts culture heritage, Arts culture heritage official languages, Gender equality, Seniors and community inclusion, Accessibility, Inclusion and anti-racism, Inclusion and pluralism, Economic development, Community development, Climate and environment, Health and wellbeing, Mental health, Heart and stroke research, Cancer research, Health research, Community safety, Research and knowledge mobilization, Community resilience, Wildlife conservation, Recreation and connectivity, Indigenous services, Indigenous relations, Indigenous capacity building, Indigenous economic development, Indigenous philanthropy, Children youth and families, Poverty and human rights, Social and ecological justice, Youth futures and mental wellbeing, Financial security and wellbeing, Youth employment, Leadership and reconciliation, Research partnerships, Social innovation, Social innovation capacity, Environment and Indigenous wellbeing

## 4. Import the CSV

1. From the Sources table, click **Add or import** → **CSV file**
2. Upload `funding-intelligence-vault-template.csv`
3. **First row contains field names:** ✓
4. Map each CSV column to the existing field of the same name
5. Click **Import** — you should land with 75 rows

After import, manually backfill `priority` for the 12–15 rows you'd start a customer with as **High**, leave the rest blank. This gives the customer a strong "start here" signal on day one.

## 5. Views

Click the **+ Create...** button under Views to add each. Set the listed filters/sort/group, then save.

### View 1 — All sources (Grid view)
- No filter
- Sort: `priority` ascending (so High → Medium → Low → blank), then `province_or_territory` ascending
- This is the default landing view

### View 2 — National (Grid view)
- Filter: `province_or_territory` is "National"
- Sort: `priority` ascending

### View 3 — By province (Grid view)
- No filter
- **Group by**: `province_or_territory`
- Sort within group: `opportunity_name` ascending

### View 4 — By sector (Grid view)
- No filter
- Group by: `sector`
- Sort within group: `priority` ascending

### View 5 — Pipeline (Kanban view)
- **Stack by**: `status`
- Card preview: `opportunity_name`, `funder_name`, `next_action_date`, `owner`
- This is the customer's working view once they start applying

### View 6 — This month (Calendar view)
- Date field: `next_action_date`
- Filter: `next_action_date` is within "next 30 days"

### View 7 — High priority (Grid view)
- Filter: `priority` = "High"
- Sort: `next_action_date` ascending

### View 8 — Indigenous-led / serving (Grid view)
- Filter: `organization_type` = "Indigenous nonprofit"
- Sort: `province_or_territory` ascending

## 6. Colour and conditional formatting

In each Grid view, **Customize → Color → Add condition**. Match the `status` colours:
- Open → grey
- Drafting → yellow
- Submitted → blue
- Won → green
- Declined → red

Apply to: All sources view, National view, By province view, High priority view.

## 7. Automations (optional but worth it for premium feel)

In the **Automations** tab → **+ Create automation**. Free Airtable plans support 100 runs/month, plenty for a small pipeline.

### Automation 1 — Reminder before next action

- Trigger: **At a scheduled time** — every weekday at 9:00 AM
- Step 1: **Find records** — `next_action_date` is "tomorrow"
- Step 2: **Send email** — to the `owner` of each found record (or to a fixed inbox at first), subject "Funding action tomorrow", body lists `opportunity_name`, `funder_name`, `next_action`

### Automation 2 — Stamp the date when status moves to Submitted

- Trigger: **When a record matches conditions** — `status` = "Submitted" AND `submitted_on` is empty
- Step 1: **Update record** — set `submitted_on` to TODAY()

### Automation 3 — Stamp the date when status moves to Won

- Trigger: **When a record matches conditions** — `status` = "Won" AND `decision_on` is empty
- Step 1: **Update record** — set `decision_on` to TODAY()

## 8. Add a starter dashboard (optional)

- Click **Apps** → **Add an app** → **Dashboard**
- Add three number cards: count of `status` = "Open", count of "Drafting", count of "Submitted"
- Add one chart: bar chart of records grouped by `province_or_territory`

Customers see this on first open and immediately understand the shape of their pipeline.

## 9. Publish as a template

1. Click **Share** (top right) → **Share as template**
2. Toggle **Anyone with the link can use this template** ON
3. Set the template name: **Funding Intelligence Vault — BOSs**
4. Description: *Curated funding intelligence for Canadian nonprofits, with pre-built views, pipeline kanban, and automations. Use this template to start with a working tracker.*
5. Cover image: drop in a branded BOSs image at 1200×630
6. Click **Get share link**
7. Copy the URL — it looks like `https://airtable.com/app.../shr.../tbl...?templateId=...`

## 10. Wire it into the site

1. Open `config.js`
2. Paste the share URL into `airtableTemplateUrl`
3. Commit and push — Vercel auto-redeploys
4. Test the link from a browser where you're not signed into the source base, to confirm it spawns a real copy for a fresh user

## 11. Maintenance pattern

When you add new rows or polish field options:

- Edit your **template base** (not a customer's copy)
- Republish the template (Share → Share as template → Republish)
- Customers who clicked before keep their existing copy unchanged
- Customers who click after get the updated version

For pushing updates to *existing* customers, you'll need a different pattern — most teams email a "what's new" digest with the 5 new sources to add manually, or maintain a separate **public read-only base** they can sync into theirs. We'll wire that pattern when you have your first 10 customers.

---

That's the full spec. Build time: 60–90 minutes the first time. Every customer afterwards is a single click into a working tracker.
