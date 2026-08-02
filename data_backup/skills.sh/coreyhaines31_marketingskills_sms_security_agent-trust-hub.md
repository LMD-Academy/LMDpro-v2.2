--- source: https://skills.sh/coreyhaines31/marketingskills/sms/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[sms](/coreyhaines31/marketingskills/sms)/Gen Agent Trust Hub

# sms

Pass

Audited by Gen Agent Trust Hub on Jun 12, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** No security threats detected. The skill primarily consists of instructional content and reference templates for marketing workflows.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill includes a design pattern to ingest data from local context files (e.g., `.agents/product-marketing.md`). This is a common architectural pattern for providing context to the agent and does not present a risk here as the skill lacks executable capabilities or sensitive tool access.
* **Ingestion points:** SKILL.md (reads local product marketing context files).
* **Boundary markers:** Not explicitly defined in instructions.
* **Capability inventory:** None. The skill does not use shell commands, network write tools, or file system modifications.
* **Sanitization:** Not applicable for this informational skill.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jun 12, 2026, 07:37 PM