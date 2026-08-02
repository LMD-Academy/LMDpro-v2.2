--- source: https://skills.sh/coreyhaines31/makerskills/toolify/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[toolify](/coreyhaines31/makerskills/toolify)/Gen Agent Trust Hub

# toolify

Pass

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: SAFEEXTERNAL\_DOWNLOADSCOMMAND\_EXECUTIONDATA\_EXFILTRATION

Full Analysis

* **[EXTERNAL\_DOWNLOADS]:** The skill uses `WebFetch` and the `context7` tool to retrieve documentation and SDK information from external URLs provided by the user or identified via the tool name.
* **[COMMAND\_EXECUTION]:** The skill generates and executes shell commands for various purposes, including configuration of environment variables via the Vercel (`vercel env add`) and Heroku (`heroku config:set`) CLIs, as well as performing smoke tests using `curl` and `node -e` to verify the functionality of the integration.
* **[DATA\_EXFILTRATION]:** The skill handles sensitive credentials such as API keys and secrets; however, it includes strong security mitigations. It explicitly instructs the agent to use the `--sensitive` flag for secret variables in Vercel to prevent them from being readable in local environments and provides clear warnings against committing sensitive files to version control.
* **[PROMPT\_INJECTION]:** The skill has an indirect prompt injection surface as it processes external documentation. It mitigates this risk by including a mandatory human-in-the-loop summary step where the user must review the proposed changes and configuration before any files are scaffolded or commands are executed.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 11, 2026, 09:45 PM