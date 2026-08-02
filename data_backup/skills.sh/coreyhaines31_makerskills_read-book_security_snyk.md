--- source: https://skills.sh/coreyhaines31/makerskills/read-book/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[read-book](/coreyhaines31/makerskills/read-book)/Snyk

# read-book

Warn

Audited by Snyk on Jul 11, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.85). Yes—Step 1/2 allow a runtime `URL` input via `WebFetch` (public web content), and Step 3/4 then read and chunk the fetched text into the LLM context for extraction.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 11, 2026, 09:45 PM

Issues
:   1