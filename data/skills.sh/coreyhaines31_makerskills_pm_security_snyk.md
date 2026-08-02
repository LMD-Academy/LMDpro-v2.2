# pm

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/pm/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[pm](/coreyhaines31/makerskills/pm)/Snyk

Warn

Audited by Snyk on Jul 11, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). Outsider-authored free text can enter the LLM context via runtime reads of external work items (e.g., GitHub issues/projects, Notion pages, Plane/Linear issues, or Obsidian markdown) whose titles/bodies/comments are then used to generate `/pm status`/`/pm unblock` outputs.

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
