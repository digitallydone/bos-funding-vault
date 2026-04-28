# Funding Intelligence Vault

## Starter Database Schema

Use this as the first paid-product structure for the `Funding Intelligence Vault`.

This schema is designed to work in:
- Airtable
- Notion
- Google Sheets

## Core Table: Opportunities

### Identity Fields

- `opportunity_id`
- `opportunity_name`
- `funder_name`
- `program_name`
- `source_type`
- `source_url`

### Classification Fields

- `country`
- `province_or_territory`
- `region`
- `sector`
- `subsector`
- `beneficiary_group`
- `organization_type`

### Eligibility Fields

- `registered_charity_required`
- `nonprofit_eligible`
- `for_profit_eligible`
- `indigenous_org_priority`
- `women_led_priority`
- `youth_serving_priority`
- `official_language_minority_priority`
- `minimum_years_operating`

### Funding Details

- `funding_type`
- `minimum_amount`
- `maximum_amount`
- `typical_amount`
- `cost_share_required`
- `multi_year_possible`

### Timing Fields

- `status`
- `intake_type`
- `opens_on`
- `deadline`
- `expected_results_date`
- `project_start_window`
- `project_end_window`
- `recurrence_pattern`

### Fit and Notes

- `short_summary`
- `eligible_activities`
- `ineligible_activities`
- `best_fit_orgs`
- `notes`
- `application_complexity`
- `estimated_hours_to_apply`

### Internal Intelligence Fields

- `confidence_score`
- `strategic_priority_score`
- `ease_of_application_score`
- `mission_fit_score`
- `renewal_probability`
- `last_verified_on`
- `verified_by`

## Optional Table: Funders

- `funder_id`
- `funder_name`
- `funder_type`
- `geographic_scope`
- `website`
- `contact_page`
- `focus_areas`
- `average_grant_range`
- `notes`

Purpose:
This table helps when one funder runs multiple programs.

## Optional Table: Deadlines Calendar

- `deadline_id`
- `opportunity_id`
- `deadline_type`
- `date`
- `timezone`
- `submission_method`
- `status`

Purpose:
Use this if you want a clean calendar feed or reminder workflow.

## Recommended Dropdown Values

### `source_type`

- Federal department
- Federal program
- Provincial government
- Municipal government
- Foundation
- Community foundation
- Research council
- Regional development agency

### `funding_type`

- Grant
- Contribution
- Capital grant
- Operating grant
- Project grant
- Research grant
- Matching fund
- Prize

### `status`

- Open
- Upcoming
- Closed
- Rolling
- Archived

### `intake_type`

- One-time
- Annual
- Multi-round
- Rolling
- Unknown

### `application_complexity`

- Low
- Medium
- High

## Minimum Viable Version

If we want speed, start with these columns only:

- `opportunity_name`
- `funder_name`
- `province_or_territory`
- `sector`
- `organization_type`
- `maximum_amount`
- `deadline`
- `status`
- `source_url`
- `short_summary`
- `best_fit_orgs`
- `notes`
- `last_verified_on`

That is enough to launch a beta product.

## Scoring Model

Use a 1 to 5 score for:
- `mission_fit_score`
- `ease_of_application_score`
- `strategic_priority_score`

Then calculate:

`overall_priority = mission_fit_score + strategic_priority_score + ease_of_application_score`

Interpretation:
- `12 to 15`: high-priority pursuit
- `9 to 11`: worth monitoring
- `8 or below`: lower priority unless timing changes

## Recommended Tags for V1

- Nonprofit
- Charity
- Arts
- Youth
- Women
- Indigenous
- Climate
- Community safety
- Health
- Accessibility
- Research partnership
- Ontario
- National

## Beta Product Packaging

Version 1 can include:
- 50 to 100 curated opportunities
- Simple filters by region and sector
- A deadline tracker view
- One bonus application planning template

That is enough to sell an early paid version.

## Operating Workflow

1. Add new opportunities weekly
2. Verify active deadlines and links
3. Archive expired opportunities
4. Score opportunities for fit
5. Send members a weekly digest of new or urgent items

## What Makes This Valuable

The value is not just the data.

The value is:
- curation
- verification
- structure
- prioritization
- consistency

That is what turns a spreadsheet into a product.
