--- source: https://skills.sh/coreyhaines31/marketingskills/ai-seo/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[ai-seo](/coreyhaines31/marketingskills/ai-seo)/Snyk

# ai-seo

Warn

Audited by Snyk on May 20, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.90). The SKILL.md explicitly instructs the agent to test queries and read AI search results and third‑party pages (e.g., "Test 10-20 of your most important queries across platforms" naming ChatGPT, Perplexity, Google AI Overviews, and later references to Wikipedia/Reddit and checking robots.txt), meaning the agent is expected to fetch and interpret untrusted public web content that can change its actions.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   May 20, 2026, 01:02 AM

Issues
:   1