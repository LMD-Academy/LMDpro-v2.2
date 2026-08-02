--- source: https://skills.sh/coreyhaines31/makerskills/update-skill/security/snyk ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[update-skill](/coreyhaines31/makerskills/update-skill)/Snyk

# update-skill

Warn

Audited by Snyk on Jun 30, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.75). In `from-chat` / `from-dump` / `usage` modes, the skill scans and extracts “learnings” from recent conversation or pasted content, which can include outsider-authored free text (e.g., other participants’ chat messages or pasted transcripts) and then feeds those extracted learnings into the agent’s LLM context for proposing edits.

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