# marketing-loops

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/marketing-loops/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[marketing-loops](/coreyhaines31/marketingskills/marketing-loops)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill is designed to ingest and process untrusted data from external sources like social media mentions, news stories, and community forum threads, creating a surface for indirect prompt injection.
* Ingestion points: Data enters the agent's context through specific loops such as 'social-listening', 'newsjacking', and 'brand-mention' described in references/loop-catalog.md.
* Boundary markers: The skill lacks explicit prompt delimiters for external content but enforces a Tier-2 action model in references/loop-guardrails.md, requiring human approval for spending, sending, or publishing.
* Capability inventory: The skill orchestrates external-facing tools like 'emails', 'social', and 'public-relations' for outbound communication.
* Sanitization: The skill relies on verification steps ('Self-check') and mandatory human oversight to sanitize and approve content derived from external data.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 11, 2026, 05:53 AM
