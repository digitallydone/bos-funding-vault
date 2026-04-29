# Google Sheets Template Setup — Funding Intelligence Vault

For customers who'd rather work in Sheets than Airtable. You build the template once and share it with a public "Make a copy" link; every click creates an independent copy in the customer's Drive.

Build time: 30–45 minutes the first time.

---

## 1. Create the sheet

1. Go to https://sheets.new
2. Rename the file: **Funding Intelligence Vault — BOSs Customer Template**

## 2. Import the CSV

1. **File → Import → Upload**
2. Drag in `funding-intelligence-vault-template.csv`
3. Import location: **Replace current sheet**
4. Separator: **Comma**
5. Convert text to numbers, dates, and formulas: **No**
6. **Import data**

## 3. Configure the table

1. Select row 1 → **View → Freeze → 1 row**
2. Select all data (Ctrl/Cmd + A) → **Data → Create a filter**
3. Auto-resize columns: select all → right-click any column letter → **Resize columns** → **Fit to data**

## 4. Add working columns

To the right of `last_verified_on`, add these new columns:

| Column | Header | Type / format |
|--------|--------|---------------|
| R | priority | Data validation: dropdown with High / Medium / Low |
| S | target_amount | Format: Number → Currency (CAD), 0 decimal places |
| T | next_action | Plain text |
| U | next_action_date | Format: Date (YYYY-MM-DD) |
| V | owner | Plain text |
| W | application_link | Plain text (URLs become clickable automatically) |
| X | submitted_on | Date |
| Y | decision_on | Date |
| Z | award_amount | Currency (CAD) |

For each dropdown column (priority, status), use **Data → Data validation → List of items** and enter the comma-separated values.

## 5. Conditional formatting

Select column L (`status`). **Format → Conditional formatting → Add another rule**:

| Condition | Format |
|-----------|--------|
| Text is exactly "Open" | Light grey background |
| Text is exactly "Drafting" | Yellow background |
| Text is exactly "Submitted" | Light blue background |
| Text is exactly "Won" | Light green background |
| Text is exactly "Declined" | Light red background |

Repeat for column R (`priority`):

| Condition | Format |
|-----------|--------|
| Text is exactly "High" | Light red background |
| Text is exactly "Medium" | Yellow background |
| Text is exactly "Low" | Light grey background |

## 6. Filter views (saved views)

**Data → Filter views → Create new filter view** for each of these. Name them clearly so customers can switch between them via the dropdown.

| View name | Filter |
|-----------|--------|
| All sources | None — base view |
| National | `province_or_territory` = National |
| Ontario | `province_or_territory` contains "Ontario" |
| Quebec | `province_or_territory` contains "Quebec" |
| BC | `province_or_territory` contains "British Columbia" |
| Alberta | `province_or_territory` contains "Alberta" |
| Arts & culture | `sector` contains "Arts" |
| Health & wellbeing | `sector` contains "Health" or "Mental health" |
| Climate & environment | `sector` contains "Climate" or "Environment" or "Wildlife" |
| Indigenous-led / serving | `organization_type` = Indigenous nonprofit |
| In pipeline | `status` is one of: Drafting, Submitted, Won |
| High priority | `priority` = High |

## 7. Add a Cover sheet

Add a new tab named **Start here** before the Sources tab. Drop in a quick orientation:

```
FUNDING INTELLIGENCE VAULT — START HERE

This workbook arrived already configured. Spend 15 minutes here:

1. Open the Sources tab.
2. Switch to the "All sources" filter view (top-right of toolbar, funnel icon).
3. Pick three rows that fit your organization.
4. Open the source_url for each. Write one sentence in `notes` about how it
   fits your work.
5. Set `priority` to High for those three rows.
6. Decide who owns the weekly review. Add their name in `owner`.

That's it for week one. Everything else is in the import guide.
```

Format the title as bold large text. Use light grey background for the cell.

## 8. Backfill `priority` on the strongest 12–15 rows

This is the highest-leverage thing you do. Pick 12–15 rows you'd genuinely recommend a new customer start with — e.g., Government of Canada Grants Portal, Ontario Trillium Foundation, the relevant regional development agency, the most active community foundation — and set their `priority` to **High** before publishing.

When the customer opens their copy, that filter on "High priority" returns a starting set instead of 75 rows of decision fatigue.

## 9. Make the sheet a public template

1. Click **Share** (top right)
2. **Restricted** → change to **Anyone with the link** → set role to **Viewer**
3. Click **Copy link** to grab the shareable URL — it looks like `https://docs.google.com/spreadsheets/d/<ID>/edit?usp=sharing`
4. Now make a "Make a copy" version. Take that URL and replace `/edit?usp=sharing` (or `/edit#gid=...`) with `/copy`.

   So `https://docs.google.com/spreadsheets/d/<ID>/edit?usp=sharing`
   becomes `https://docs.google.com/spreadsheets/d/<ID>/copy`

5. The `/copy` URL is the magic — when a customer clicks it, Google prompts them to "Make a copy" of the file into their own Drive. They get an editable, independent copy.

## 10. Wire the URL into the site

1. Open `config.js`
2. Paste the `/copy` URL into `sheetsTemplateUrl`
3. Commit and push

## 11. Test the customer experience

In a browser where you're signed in as someone OTHER than the template owner (an incognito window with a personal Google account works), click your `/copy` link. You should see Google's "Copy document" prompt. Confirm a fresh copy appears in your Drive. Open it — every filter view, conditional formatting rule, and the Start here tab should be intact.

If anything's missing, fix it on the source template, then re-test (the existing customer copies are already independent — they won't be affected).

## 12. Maintenance pattern

Same as the Airtable pattern: edit the source template when you add rows or refine fields. Existing customer copies stay as they were. New customers get the latest version on click.

To push updates to existing customers, the cleanest pattern is to email a "What's new in this month's update" note with the 3–5 new rows formatted to paste, plus any field tweaks they should consider. After 30–50 customers, this becomes a job for a Sheets API sync — until then, manual is fine.
