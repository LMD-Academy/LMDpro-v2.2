--- source: https://skills.sh/coreyhaines31/marketingskills/paid-ads/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[paid-ads](/coreyhaines31/marketingskills/paid-ads)/Gen Agent Trust Hub

# paid-ads

Pass

Audited by Gen Agent Trust Hub on Apr 22, 2026

Risk Level: SAFENO\_CODE

Full Analysis

* **[SAFE]:** The skill consists entirely of Markdown documentation and reference templates for marketing workflows. No scripts, binaries, or executable commands are present.
* **[NO\_CODE]:** There are no code files or automation scripts associated with this skill; it functions as a set of structured instructions and references for an AI agent.
* **[DATA\_EXPOSURE]:** The skill instructs the agent to read context from `.agents/product-marketing-context.md` if available. This is a standard pattern for context sharing in this environment and does not involve unauthorized data access.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill has an attack surface for indirect prompt injection via the `.agents/product-marketing-context.md` file ingestion point.
* **Ingestion points**: `.agents/product-marketing-context.md` (read in SKILL.md).
* **Boundary markers**: Absent; the agent is simply told to read and use the context.
* **Capability inventory**: No local scripts or tools are defined within the skill itself.
* **Sanitization**: Absent.
* Since the skill lacks autonomous write/network capabilities of its own, the risk remains low.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Apr 22, 2026, 11:53 AM