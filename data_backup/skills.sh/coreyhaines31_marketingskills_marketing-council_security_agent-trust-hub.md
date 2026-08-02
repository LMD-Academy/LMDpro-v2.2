--- source: https://skills.sh/coreyhaines31/marketingskills/marketing-council/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[marketing-council](/coreyhaines31/marketingskills/marketing-council)/Gen Agent Trust Hub

# marketing-council

Pass

Audited by Gen Agent Trust Hub on Jul 6, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill primarily operates by simulating the personas of well-known marketers using static reference documents provided within the skill's `references/advisors/` directory. No malicious instructions or injection patterns were detected.
* **[SAFE]:** Data ingestion is limited to local project files (e.g., `.agents/product-marketing.md`) and user-provided queries. These are used solely to contextualize the simulated advice and do not involve sensitive system paths or credential harvesting.
* **[SAFE]:** The skill allows for extending its functionality by creating custom advisor profiles. These profiles are stored in a specific project-local directory (`.agents/advisors/`). While this involves file writing, the scope is restricted to non-executable markdown files used for text simulation, posing no risk of privilege escalation or persistence.
* **[EXTERNAL\_DOWNLOADS]:** The skill can perform web searches or utilize research tools to verify the published positions of marketers. These operations target primary sources like official books, blogs, and interviews, which is standard and safe behavior for a research-oriented skill.
* **[PROMPT\_INJECTION]:** The skill includes explicit 'Grounding Rules' that instruct the agent to avoid fabricating quotes and to label outputs as simulations. These constraints effectively mitigate risks associated with persona simulation and role-play manipulation.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 6, 2026, 10:52 PM