# public-relations

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/public-relations/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[public-relations](/coreyhaines31/marketingskills/public-relations)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jun 12, 2026

Risk Level: SAFECOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADSPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** Executes shell commands to install system dependencies and fetch external data.
* In `references/newsjacking.md`, it runs `brew install jq` to ensure JSON processing capabilities are available.
* Uses `curl` to query APIs and RSS feeds from well-known services including Google, Algolia, and Reddit.
* **[EXTERNAL\_DOWNLOADS]:** Retrieves data from well-known external services to identify trending news.
* Downloads RSS feeds from `news.google.com`.
* Fetches JSON data from the Hacker News Algolia API and Reddit's JSON endpoints.
* **[PROMPT\_INJECTION]:** Potential for indirect prompt injection due to processing untrusted external data.
* **Ingestion points:** Fetches content from public news feeds and social media profiles via `curl` and `dev-browser` in `references/newsjacking.md` and `references/journalist-pitching.md`.
* **Boundary markers:** No delimiters or "ignore instructions" warnings are provided to the agent when processing this untrusted external data.
* **Capability inventory:** The agent can execute shell commands (`curl`, `jq`, `brew`), use a browser to read arbitrary URLs, and write to local files (`.agents/media-list.md`).
* **Sanitization:** The skill does not implement validation, filtering, or escaping of the content retrieved from external sources before it is interpreted by the agent.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jun 12, 2026, 07:38 PM
