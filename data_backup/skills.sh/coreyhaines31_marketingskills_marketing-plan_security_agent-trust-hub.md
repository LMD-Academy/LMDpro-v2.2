--- source: https://skills.sh/coreyhaines31/marketingskills/marketing-plan/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[marketing-plan](/coreyhaines31/marketingskills/marketing-plan)/Gen Agent Trust Hub

# marketing-plan

Pass

Audited by Gen Agent Trust Hub on Jun 12, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** Indirect Prompt Injection Surface. The skill is designed to ingest and process untrusted external data from a client's project directory, which is then used to inform the agent's strategic recommendations and its interaction with various Model Context Protocol (MCP) integrations.
* **Ingestion points:** The INIT phase (detailed in `references/methodology.md`) involves reading all client-provided files from the `materials/` folder, including decks, audit outputs, and kickoff transcripts.
* **Boundary markers:** Absent. The instructions lack explicit delimiting markers or "ignore embedded instructions" warnings for the agent when it processes these external materials.
* **Capability inventory:** The skill possesses significant capabilities, including writing multiple Markdown files to the local file system (`~/marketing-plans/{client-slug}/`) and executing various MCP integrations for Ahrefs, Stripe, GitHub, Customer.io, and GA4 (as documented in `references/ops-stack-mapping.md`).
* **Sanitization:** Absent. There are no instructions to validate, escape, or sanitize the external data before it is interpolated into the agent's context or used to drive tool execution.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jun 12, 2026, 07:38 PM