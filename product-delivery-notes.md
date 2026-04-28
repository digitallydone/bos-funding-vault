# Product Delivery Notes

## Purpose

Use this document to make the `Funding Intelligence Vault` dataset feel like a
finished customer deliverable instead of a raw spreadsheet.

## What the starter dataset includes

The current CSV contains:
- 75 curated rows
- federal departments, federal programs, and regional development agencies
- every Canadian province and most territories represented
- provincial arts councils plus major community foundations
- Indigenous-led and Indigenous-serving funders (ISC, CIRNAC, NACCA, NRT, The Circle)
- sector cuts: arts and culture, climate and environment, health and mental health, youth employment, social innovation, capacity-building
- corporate community investment (RBC, TD, Bell)
- sector hub references (Imagine Canada) for ongoing discovery
- notes on who each source fits best

File:
[funding-intelligence-vault-template.csv](/Users/Rich/Documents/Codex/2026-04-24/i-want-to-make-this-happen/funding-intelligence-vault-template.csv:1)

## Recommended customer-facing field descriptions

### `opportunity_name`
The public source, funder, or recurring funding entry point being tracked.

### `funder_name`
The organization responsible for the funding source or program.

### `program_name`
The specific program or program family customers should monitor.

### `source_type`
The category of source:
- federal department
- federal program
- provincial government
- community foundation
- regional development agency
- research council

### `sector`
The thematic area most relevant to the source.

### `beneficiary_group`
The people, communities, or issue areas most likely to fit.

### `organization_type`
The type of organization most likely to be eligible.

### `status`
The current known status:
- open
- rolling
- varies

### `short_summary`
A quick explanation of why the source matters.

### `best_fit_orgs`
The organizations most likely to benefit from tracking the source.

### `notes`
Practical guidance on how to use or interpret the source.

## Recommended first product promise

Use this simple promise:

Funding Intelligence Vault gives your organization a curated starting system for
monitoring Canadian funding sources, tracking what matters, and reducing wasted
research time.

## Suggested next expansion

The 75-row milestone is met. To make the dataset stronger from here:
- enrich each row with a real recent deadline by working through the URLs
- add a `tags` column (e.g., "rural", "youth", "Indigenous-led", "research") so filters surface fits faster
- add 25 sector-deep rows for a "Funding Intelligence Vault — Health Edition" niche package
- add 25 region-deep rows for a "Funding Intelligence Vault — Atlantic Edition" niche package
- separate the discovery portals (canada.ca, Imagine Canada, sector hubs) from active program entries by using `source_type`

## Delivery guidance

If you deliver this in Airtable or Google Sheets:
- freeze the header row
- enable filtering
- color-code status
- create views for:
  - national sources
  - Ontario
  - arts and culture
  - health and wellbeing
  - community development

## Premium perception tip

Do not send customers just the CSV with no context.

Send:
1. a short welcome email
2. the dataset link
3. the import guide link (`vault-import-guide.md`)
4. a one-paragraph explanation of how to use it
5. the full guide link (`guide-full.html`)

That makes the product feel intentional and professional. The import guide is the bridge between "here's a CSV" and "here's a working tracker inside your tools" — without it, conversion to active use drops off fast.
