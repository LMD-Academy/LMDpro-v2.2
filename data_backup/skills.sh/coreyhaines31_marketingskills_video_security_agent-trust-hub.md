--- source: https://skills.sh/coreyhaines31/marketingskills/video/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[video](/coreyhaines31/marketingskills/video)/Gen Agent Trust Hub

# video

Pass

Audited by Gen Agent Trust Hub on May 19, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill facilitates a surface for indirect prompt injection by instructing the agent to ingest content from local project files.
* **Ingestion points:** The skill reads marketing context from files such as `.agents/product-marketing.md`, `.claude/product-marketing.md`, and `product-marketing-context.md`.
* **Boundary markers:** The instructions do not include markers to delimit the external content or specific commands to ignore potential instructions embedded within those files.
* **Capability inventory:** The agent is tasked with generating scripts, producing HTML/CSS code for the Hyperframes framework, and interacting with the HeyGen MCP server.
* **Sanitization:** Content from context files is processed without explicit validation or sanitization steps.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 19, 2026, 07:36 PM