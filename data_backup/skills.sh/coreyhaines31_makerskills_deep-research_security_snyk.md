--- source: https://skills.sh/coreyhaines31/makerskills/deep-research/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[deep-research](/coreyhaines31/makerskills/deep-research)/Snyk

# deep-research

Warn

Audited by Snyk on Jul 11, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.90). SKILL.md Step 2–3 requires running runtime web search / fetching (e.g., `WebSearch`, `WebFetch`, `agent-browser`, and `/last30days` which includes Reddit/X/YouTube/HN text), whose retrieved free-form page/message content is then summarized and used in Step 4 synthesis, meaning outsider-authored prose is ingested into the agent’s LLM context.

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