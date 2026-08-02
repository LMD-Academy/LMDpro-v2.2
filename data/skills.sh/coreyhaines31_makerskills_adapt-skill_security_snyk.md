# adapt-skill

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/adapt-skill/security/snyk))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[adapt-skill](/coreyhaines31/makerskills/adapt-skill)/Snyk

Warn

Audited by Snyk on Jun 30, 2026

Risk Level: MEDIUM

Full Analysis

MEDIUM W011: Third-party content exposure detected (indirect prompt injection risk).

* Third-party content exposure detected (high risk: 0.95). The required workflow fetches and reads outsider-authored free text at runtime—e.g., cloning/fetching a GitHub/agentskills/skills.sh repo’s `SKILL.md` and `references/` (public web content) and then ingesting that prose into the agent for “Analyze + classify” and rewriting.

---

MEDIUM W012: Unverifiable external dependency detected (runtime URL that controls agent).

* Potentially malicious external URL detected (high risk: 1.00). The skill explicitly runs runtime fetches like "git clone --depth 1 /tmp/..." and "gh api ... repos///contents/SKILL.md" (e.g., <https://github.com/>/ and raw SKILL.md content), plus accepting agentskills.io and skills.sh URLs, which are used at runtime to load external SKILL.md content that is injected into the agent's processing and directly controls the prompts/instructions for the adaptation—so these external URLs are runtime dependencies that control agent behavior.

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
:   Jun 30, 2026, 07:57 PM

Issues
:   2
