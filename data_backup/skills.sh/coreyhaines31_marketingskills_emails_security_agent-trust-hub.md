--- source: https://skills.sh/coreyhaines31/marketingskills/emails/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[emails](/coreyhaines31/marketingskills/emails)/Gen Agent Trust Hub

# emails

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill is susceptible to indirect prompt injection through its ingestion of external context files.
* **Ingestion points:** The skill instructs the agent to read context from files like `.agents/product-marketing.md`, `.claude/product-marketing.md`, or `product-marketing-context.md` as specified in `SKILL.md`.
* **Boundary markers:** No explicit delimiters or instructions to ignore embedded commands within the ingested context are present.
* **Capability inventory:** The skill is designed to interface with external email tools (e.g., Mailchimp, Nitrosend, Resend) as listed in the Tool Integrations section of `SKILL.md`.
* **Sanitization:** The instructions do not include steps to sanitize or validate the content of the ingested marketing context files before they are used to generate email sequences.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 05:12 AM