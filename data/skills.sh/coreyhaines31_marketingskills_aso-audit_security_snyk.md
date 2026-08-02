# aso-audit

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/aso-audit/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[aso-audit](/coreyhaines31/marketingskills/aso-audit)/Snyk

Warn

Audited by Snyk on Apr 13, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.80). The skill's Phase 1 workflow explicitly instructs the agent to use WebFetch to retrieve live App Store and Google Play listing pages (apps.apple.com and play.google.com), including visible reviews and descriptions, and to read/assess that content (e.g., "Fetch the listing", "Recent reviews (visible ones)"), so it ingests untrusted public, user-generated content that can influence scoring and recommendations.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Apr 13, 2026, 07:10 AM

Issues
:   1
