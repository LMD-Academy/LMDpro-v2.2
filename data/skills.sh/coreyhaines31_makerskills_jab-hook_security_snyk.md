# jab-hook

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/jab-hook/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[jab-hook](/coreyhaines31/makerskills/jab-hook)/Snyk

Warn

Audited by Snyk on Jul 11, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). The required workflow includes an optional “inspiration scan” that pulls recent posts from outsider-authored inspiration accounts via `social-fetch`/`agent-browser` at runtime, ingesting their free-form post text into the agent’s LLM context for pattern extraction.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 11, 2026, 06:18 AM

Issues
:   1
