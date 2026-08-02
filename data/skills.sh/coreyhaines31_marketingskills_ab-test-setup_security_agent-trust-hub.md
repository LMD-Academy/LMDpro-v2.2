# ab-test-setup

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/ab-test-setup/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[ab-test-setup](/coreyhaines31/marketingskills/ab-test-setup)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Apr 7, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** No malicious patterns, obfuscation, or unauthorized operations were detected in the skill instructions or scripts.
* **[EXTERNAL\_DOWNLOADS]:** The skill provides links to reputable experimentation calculators and tools from well-known services including Optimizely, Evan Miller, VWO, and AB Test Guide. These references are for legitimate utility purposes and originate from trusted sources.
* **[PROMPT\_INJECTION]:** The skill identifies a surface for indirect prompt injection by instructing the agent to read project-specific context from `.agents/product-marketing-context.md`. This is a standard practice for contextual AI agents to inform their design recommendations, and the risk is negligible as the skill does not possess high-risk capabilities such as command execution or network exfiltration.
* Ingestion points: `.agents/product-marketing-context.md` (referenced in `SKILL.md`)
* Boundary markers: None present
* Capability inventory: No shell execution, subprocess calls, network exfiltration, or file-write operations identified across the skill
* Sanitization: No explicit sanitization or filtering of the context file content is performed

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Apr 7, 2026, 11:15 AM
