# Funding Intelligence Vault — Import & Setup Guide

Welcome. This guide turns the CSV you just received (`funding-intelligence-vault-template.csv`, 75 curated Canadian funding sources) into a working tracker inside your own Google Sheets or Airtable workspace. Pick whichever tool you already use — both paths take under 10 minutes.

---

## Before you start

Save the CSV somewhere you can find it (Desktop or Downloads is fine). Don't open and re-save it from Excel before importing — Excel sometimes mangles UTF-8 characters and date columns. If you must open it, use Numbers, VS Code, or Google Sheets directly.

The 17 columns you'll see:

| # | Column | What it holds |
|---|--------|---------------|
| 1 | `opportunity_name` | The public source, funder, or recurring entry point |
| 2 | `funder_name` | The organization providing the funding |
| 3 | `program_name` | The specific program or program family |
| 4 | `source_type` | Federal department, federal program, provincial government, foundation, etc. |
| 5 | `country` | Canada (room to expand later) |
| 6 | `province_or_territory` | National, Ontario, BC, etc. |
| 7 | `sector` | Thematic area (Arts and culture, Health, Climate, etc.) |
| 8 | `beneficiary_group` | Communities most likely to fit |
| 9 | `organization_type` | Eligible org type (Nonprofit, Indigenous nonprofit, Arts nonprofit, etc.) |
| 10 | `maximum_amount` | If known; left blank when it varies by stream |
| 11 | `deadline` | "Rolling", "Annual", "Varies", or a date |
| 12 | `status` | Open by default; flip to "Submitted", "Won", "Declined" as you work |
| 13 | `source_url` | The official page to verify current calls |
| 14 | `short_summary` | One-line description of why the source matters |
| 15 | `best_fit_orgs` | Who tends to win from this source |
| 16 | `notes` | Practical guidance and gotchas |
| 17 | `last_verified_on` | When the entry was last checked |

---

## Path A — Google Sheets (5 minutes)

### 1. Create the sheet

1. Go to [sheets.new](https://sheets.new) in your browser.
2. Rename the file at the top to **Funding Intelligence Vault — [Your Org Name]**.

### 2. Import the CSV

1. **File → Import → Upload**.
2. Drag the CSV in.
3. **Import location:** *Replace current sheet*.
4. **Separator type:** *Comma* (or *Detect automatically*).
5. **Convert text to numbers, dates, and formulas:** *No* — leave as-is so URLs and dates don't get mangled.
6. Click **Import data**.

### 3. Make it usable

1. Click the row 1 number to select the header row → **View → Freeze → 1 row**.
2. Select the whole table (Ctrl/Cmd+A) → **Data → Create a filter**.
3. Resize columns: select all → right-click any column letter → *Resize columns* → *Fit to data*.

### 4. Recommended views (saved filter views)

In Google Sheets, **Data → Filter views → Create new filter view** for each of these. Name them clearly so you can switch between them.

| View name | How to filter |
|-----------|---------------|
| National sources | `province_or_territory` = National |
| Ontario | `province_or_territory` contains "Ontario" |
| Quebec | `province_or_territory` contains "Quebec" |
| BC | `province_or_territory` contains "British Columbia" |
| Alberta | `province_or_territory` contains "Alberta" |
| Arts & culture | `sector` contains "Arts" |
| Health & wellbeing | `sector` contains "Health" or "Mental health" |
| Community development | `sector` contains "Community development" |
| Climate & environment | `sector` contains "Climate" or "Environment" or "Wildlife" |
| Indigenous-led / serving | `organization_type` = Indigenous nonprofit |
| Active in my pipeline | `status` is one of: Submitted, Drafting, Won |

### 5. Color-code the status

1. Select column L (`status`).
2. **Format → Conditional formatting**.
3. Add these rules:
   - Text is exactly **Open** → light grey
   - Text is exactly **Drafting** → yellow
   - Text is exactly **Submitted** → blue
   - Text is exactly **Won** → green
   - Text is exactly **Declined** → red

### 6. Add your own working columns

To the right of `last_verified_on`, add these as you start working the list:

- `priority` (High / Medium / Low)
- `target_amount` (what you'd ask for)
- `next_action` (e.g., "Read 2025 program guide")
- `next_action_date`
- `owner` (person on your team)
- `application_link` (when you start one)
- `submitted_on` / `decision_on` / `award_amount`

That keeps the vault as the source of truth *and* your live tracker.

---

## Path B — Airtable (8 minutes — recommended if your team is more than 1 person)

### 1. Create the base

1. Open [airtable.com](https://airtable.com) and click **Add a base → Start from scratch**.
2. Name it **Funding Intelligence Vault — [Your Org Name]**.

### 2. Import the CSV

1. Click the **+** next to the default table name (or delete the default table) → **Import data → CSV file**.
2. Upload `funding-intelligence-vault-template.csv`.
3. **First row contains field names:** ✓ checked.
4. Review Airtable's auto-detected field types — change these:
   - `source_url` → *URL*
   - `last_verified_on` → *Date* (ISO format, YYYY-MM-DD)
   - `maximum_amount` → *Number* (Currency CAD, decimal 0)
   - `status` → *Single select* with options: Open, Drafting, Submitted, Won, Declined
   - `source_type` → *Single select* (Airtable will offer to convert it; accept)
   - `province_or_territory` → *Single select*
   - `organization_type` → *Single select*
   - `sector` → *Multiple select* (some entries cover multiple sectors)
5. Click **Import**.

### 3. Recommended views

Airtable lets you save views per-person. Create these from the **Views** sidebar:

| View | Type | Filter / sort |
|------|------|---------------|
| **All sources** | Grid | None — your master list |
| **National** | Grid | `province_or_territory` = National |
| **By province** | Grid | Group by `province_or_territory` |
| **By sector** | Grid | Group by `sector` |
| **Pipeline** | Kanban | Stack by `status` |
| **This month** | Calendar | Date field: `next_action_date` (you'll add this) |
| **Indigenous-led** | Grid | `organization_type` = Indigenous nonprofit |
| **High-priority** | Grid | Filter `priority` = High, sort by `next_action_date` ascending |

### 4. Add working fields

Add these to the right of `last_verified_on`:

- `priority` — Single select (High / Medium / Low)
- `target_amount` — Currency (CAD)
- `next_action` — Long text
- `next_action_date` — Date
- `owner` — Collaborator field
- `application_link` — URL
- `submitted_on` — Date
- `decision_on` — Date
- `award_amount` — Currency (CAD)
- `attachments` — Attachment field (drop in PDFs, application drafts, award letters)

### 5. Automations worth turning on

Airtable's free **Automations** tab supports up to 100 runs/month — plenty for a small funding pipeline:

1. **Reminder 14 days before `next_action_date`** → email yourself.
2. **When `status` changes to "Submitted"** → set `submitted_on` to today + email your team.
3. **When `status` changes to "Won"** → email your team + post to Slack if you have it.

### 6. Sharing with your team

- **Editor access:** people who maintain the pipeline.
- **Commenter access:** finance, board members.
- **Read-only share link:** anyone who just needs visibility — do this from a specific view, not the whole base.

---

## How to keep the vault current

The dataset's strength is curation, not automation. Build a 30-minute monthly habit:

1. Open the vault and sort by `last_verified_on` (oldest first).
2. Pick the 10 oldest rows.
3. Open each `source_url` in a tab, scan for current calls, update `deadline` and `notes`.
4. Set `last_verified_on` to today.

Over a year that walks the entire vault three times, which is much more than most organizations sustain.

---

## What to do first

If you read nothing else: pick three rows that match your organization, open their URLs, and write one sentence in `notes` for each about how it lines up with what you're working on. That single 20-minute pass is what turns this from "another spreadsheet" into your own funding map.

Welcome to the Funding Intelligence Vault.
