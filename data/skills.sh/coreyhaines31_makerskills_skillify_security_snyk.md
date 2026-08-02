# skillify

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/skillify/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[skillify](/coreyhaines31/makerskills/skillify)/Snyk

Warn

Audited by Snyk on Jul 3, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.95). In **ADAPT** mode, the runtime fetches outsider-authored **public GitHub/agentskills/skills.sh SKILL.md content** (e.g., via `git clone` or `gh api ... contents/SKILL.md`) and then reads it to rewrite/classify, so that free text is ingested into the agent’s LLM context.

---

MEDIUM W012: Unverifiable external dependency detected (runtime URL that controls agent).

* Potentially malicious external URL detected (high risk: 0.90). The ADAPT mode explicitly fetches external skill sources at runtime (e.g., via git clone or the GitHub raw API such as <https://github.com/>/ and agentskills.io links like <https://agentskills.io>) and then ingests that fetched SKILL.md content to drive the agent's analysis and rewrite, which is a runtime external dependency that directly controls prompts/instructions.

## Issues (2)

W011

MEDIUM

Third-party content exposure detected (indirect prompt injection risk).

W012

MEDIUM

Unverifiable external dependency detected (runtime URL that controls agent).

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 3, 2026, 07:56 PM

Issues
:   2
