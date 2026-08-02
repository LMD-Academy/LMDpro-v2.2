--- source: https://skills.sh/coreyhaines31/marketingskills/aso/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[aso](/coreyhaines31/marketingskills/aso)/Snyk

# aso

Warn

Audited by Snyk on May 14, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 1.00). The SKILL.md explicitly requires the agent to use WebFetch to retrieve and screenshot live App Store/Google Play listing pages in Phase 1 ("Fetch the listing" / "Use WebFetch") and to fetch competitor URLs in Phase 3, meaning it ingests arbitrary public third-party pages (apps.apple.com / play.google.com or searched web results) whose content the agent must read and which materially influence scoring and next actions.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   May 14, 2026, 05:12 AM

Issues
:   1