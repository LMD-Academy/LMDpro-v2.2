# create-skill

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/create-skill/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[create-skill](/coreyhaines31/makerskills/create-skill)/Snyk

Warn

Audited by Snyk on Jun 30, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). In **from-video** mode, the workflow calls `watch-video <url> visual`, which fetches and converts **user-supplied external video content** into readable artifacts (`transcript.txt`, `moments.md`, `summary.md`) that are then synthesized into the agent’s LLM context—an outsider-authored free-text source.

## Issues (1)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jun 30, 2026, 07:57 PM

Issues
:   1
