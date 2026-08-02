--- source: https://skills.sh/coreyhaines31/marketingskills/cold-email/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[cold-email](/coreyhaines31/marketingskills/cold-email)/Gen Agent Trust Hub

# cold-email

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFENO\_CODEPROMPT\_INJECTION

Full Analysis

* **[SAFE]:** The skill consists exclusively of informational markdown files, benchmarks, and templates. No scripts, binaries, or automated tool configurations are present in the skill bundle.
* **[PROMPT\_INJECTION]:** The skill uses an indirect prompt injection surface by instructing the agent to read context from external files like `.agents/product-marketing-context.md` or `.claude/product-marketing-context.md`. The risk is mitigated as the skill defines no executable capabilities.
* **Ingestion points:** `SKILL.md` instructions to read from `.agents/product-marketing-context.md` and incorporate user-provided prospecting data.
* **Boundary markers:** Absent; the skill does not provide specific delimiters for the external context.
* **Capability inventory:** None; the skill only generates email text and does not use any tools for file system modification, network communication, or shell access.
* **Sanitization:** Absent; the skill relies on the core model's safety filters for text generation.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 10:02 AM