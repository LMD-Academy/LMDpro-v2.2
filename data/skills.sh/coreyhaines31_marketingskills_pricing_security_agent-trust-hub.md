# pricing

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/pricing/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[pricing](/coreyhaines31/marketingskills/pricing)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill is composed of purely instructional Markdown files and a JSON evaluation file. There are no executable scripts (.sh, .py, .js), binaries, or automation commands present in the skill package.
* **[DATA\_EXPOSURE]:** The instructions direct the agent to check for project-specific context in files like .agents/product-marketing.md. This behavior is restricted to local documentation and does not involve access to sensitive system directories, credentials, or private keys.
* **[INDIRECT\_PROMPT\_INJECTION]:** 1. Ingestion points: .agents/product-marketing.md, .claude/product-marketing.md, and product-marketing-context.md. 2. Boundary markers: Absent. 3. Capability inventory: No command execution, file system modification, or network capabilities are present in the skill. 4. Sanitization: Absent. The skill is safe as it lacks any capabilities that could be exploited by malicious content within the ingested context files.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 05:12 AM
