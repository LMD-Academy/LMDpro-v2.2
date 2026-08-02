# jab-hook

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/jab-hook/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[jab-hook](/coreyhaines31/makerskills/jab-hook)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: SAFEPROMPT\_INJECTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill implements a feature that processes content from external social media accounts and existing social media drafts, which creates a potential surface for indirect prompt injection.
* **Ingestion points:** The skill ingests untrusted data from external social media profiles via scraping (using tools like agent-browser or social-fetch) and from existing Typefully drafts as described in the SKILL.md and references/inspiration.md files.
* **Boundary markers:** The instructions do not provide explicit delimiters or "ignore-previous-instructions" style safety markers for the agent to use when evaluating the content of scraped posts.
* **Capability inventory:** The agent possesses the capability to create and modify social media drafts in the user's Typefully workspace using the mcp\_\_typefully\_\_typefully\_create\_draft tool.
* **Sanitization:** The skill does not describe any specific sanitization or filtering logic applied to the external content before it is used to extract structural patterns for new post generation.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 11, 2026, 06:18 AM
