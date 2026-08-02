# customer-research

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/customer-research/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[customer-research](/coreyhaines31/marketingskills/customer-research)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on May 15, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill is susceptible to indirect prompt injection because it is designed to ingest and process information from untrusted external sources. An attacker could place malicious instructions within a product review, forum post, or comment that the agent might follow if not properly isolated.
* **Ingestion points:** `SKILL.md` and `references/source-guides.md` instruct the agent to mine data from Reddit, G2, LinkedIn, YouTube, and various online communities.
* **Boundary markers:** The skill lacks explicit instructions or delimiters to help the agent distinguish between research data and executable commands found within the external content.
* **Capability inventory:** The skill is intended for agents with web browsing and file system access to collect and analyze research assets.
* **Sanitization:** There are no directives to sanitize or escape the content retrieved from external sources before it is processed by the agent.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 15, 2026, 08:27 AM
