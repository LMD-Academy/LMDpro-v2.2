--- source: https://skills.sh/coreyhaines31/makerskills/social-fetch/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[social-fetch](/coreyhaines31/makerskills/social-fetch)/Snyk

# social-fetch

Warn

Audited by Snyk on Jul 6, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.85). Yes—this skill fetches outsider-authored social post text from runtime network sources (e.g., public APIs/HTML via `agent-browser` or scraped responses) and then parses/extracts it into the LLM-visible normalized fields like `text`/`thread`/`replies`.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 6, 2026, 05:19 PM

Issues
:   1