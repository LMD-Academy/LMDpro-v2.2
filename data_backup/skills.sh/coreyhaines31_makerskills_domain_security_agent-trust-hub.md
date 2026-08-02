--- source: https://skills.sh/coreyhaines31/makerskills/domain/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[domain](/coreyhaines31/makerskills/domain)/Gen Agent Trust Hub

# domain

Pass

Audited by Gen Agent Trust Hub on Jul 6, 2026

Risk Level: SAFECOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADSPROMPT\_INJECTION

Full Analysis

* **[EXTERNAL\_DOWNLOADS]:** The skill recommends installing the Vercel CLI from the NPM registry and the whois utility from the Homebrew package manager.
* **[COMMAND\_EXECUTION]:** The skill executes shell commands using vercel, whois, and curl for domain research, status querying, and registration. It also utilizes agent-browser for automating interactions with the USPTO website.
* **[PROMPT\_INJECTION]:** The skill ingests data from several external untrusted sources, creating an indirect prompt injection attack surface. \* Ingestion points: External data is retrieved from WHOIS records, RDAP endpoints, third-party registrar APIs (Namecheap and Domainr), and USPTO website content. \* Boundary markers: No delimiters or protective instructions are implemented to isolate external content from the agent's core instructions. \* Capability inventory: The agent has the ability to perform network requests and execute financial transactions via registrar CLI tools. \* Sanitization: The skill does not perform explicit sanitization or validation of the data retrieved from external sources before it is processed.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 6, 2026, 05:19 PM