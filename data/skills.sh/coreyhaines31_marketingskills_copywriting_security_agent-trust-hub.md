# copywriting

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/copywriting/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[copywriting](/coreyhaines31/marketingskills/copywriting)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill provides instructional guidance for marketing copywriting. It contains no executable scripts, shell commands, or network operations.- **[DATA\_EXPOSURE]:** The skill requests access to project-specific context files (e.g., `.agents/product-marketing-context.md`). While these files contain user data, reading them is within the intended scope of providing context-aware copywriting assistance.- **[INDIRECT\_PROMPT\_INJECTION]:** The skill ingests untrusted data from user prompts and local context files. **Ingestion points**: User input and `.agents/product-marketing-context.md` (SKILL.md). **Boundary markers**: None present. **Capability inventory**: None; the skill lacks tools for command execution, file modification, or network requests. **Sanitization**: None. The lack of capabilities minimizes the risk of indirect injection attacks.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 10:02 AM
