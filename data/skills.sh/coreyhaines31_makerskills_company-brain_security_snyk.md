# company-brain

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/company-brain/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[company-brain](/coreyhaines31/makerskills/company-brain)/Snyk

Warn

Audited by Snyk on Jul 7, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). High likelihood: the required runtime workflow for `query`/`compile` reads the team vault’s structured raw markdown (e.g., `meetings/`, `customer-language/`, `recurring-questions/`) that can be auto-synced from outsider-authored sources like Slack/email/support tickets via `toolify`/webhooks, and those markdown bodies become LLM-readable context during compilation/query.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 7, 2026, 12:56 PM

Issues
:   1
