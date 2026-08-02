# referral-program

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/referral-program/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[referral-program](/coreyhaines31/marketingskills/referral-program)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Mar 28, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** A comprehensive review of the skill's markdown files and evaluation logic reveals no evidence of prompt injection, obfuscation, or malicious command execution. The content is strictly informational and advisory.
* **[DATA\_EXPOSURE]:** The skill instructions include reading from local context files such as `.agents/product-marketing-context.md`. These are project-specific configuration files used to maintain state and do not represent exposure of sensitive system credentials or private user data.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill exhibits an attack surface for indirect prompt injection as it processes data from external context files and user input. However, because the skill does not utilize high-risk tools (e.g., shell access, file writing, or network requests), the risk associated with this ingestion point is negligible.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Mar 28, 2026, 10:51 AM
