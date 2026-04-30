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

## Premium perception — the workspace-first principle

Don't sell the customer a CSV. Sell them a working environment.

The premium feel at $49 comes from the customer never having to assemble anything. The vault arrives configured: views, kanban, colours, working columns, automations, a starting shortlist already pre-flagged. The customer clicks once and lands inside their own copy in their own Drive or Airtable.

The default delivery sequence (v1):

1. **Welcome email** — leads with "your workspace is ready", not "here's a spreadsheet"
2. **Sheets template link** — primary path; one click into a fully configured base in the customer's own Drive
3. **Airtable** — offered as a white-glove setup ("reply with your Airtable workspace name"), kept off the self-serve path
4. **Customer start page** — single web page that orients them to what's already built
5. **CSV download** — kept as a secondary link for the rare team that wants raw data

A 90-second welcome Loom is queued for v2 (script lives in `welcome-loom-script.md`) — the human voice multiplies premium feel but isn't load-bearing for a v1 launch.

The CSV is no longer the product. It's a fallback. The Airtable/Sheets template *is* the product — that's what justifies $49 and that's what creates stickiness.

Build-once specs live in `airtable-base-spec.md` and `sheets-template-setup.md`. Recording script lives in `welcome-loom-script.md`. Update those once and every customer click after gets the new version.
