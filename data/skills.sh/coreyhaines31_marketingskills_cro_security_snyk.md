# cro

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/cro/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[cro](/coreyhaines31/marketingskills/cro)/Snyk

Warn

Audited by Snyk on May 14, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.90). The SKILL.md explicitly says "Use this even if the user just shares a URL and asks for feedback" and the included eval prompts contain external URLs (e.g., <https://example.com/product>), indicating the agent is expected to fetch and interpret arbitrary public web pages—which are untrusted third-party content that could influence its actions.

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
