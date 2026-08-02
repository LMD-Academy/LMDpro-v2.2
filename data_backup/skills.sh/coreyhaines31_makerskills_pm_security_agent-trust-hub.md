--- source: https://skills.sh/coreyhaines31/makerskills/pm/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[pm](/coreyhaines31/makerskills/pm)/Gen Agent Trust Hub

# pm

Pass

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: SAFECOMMAND\_EXECUTIONCREDENTIALS\_UNSAFEEXTERNAL\_DOWNLOADSDATA\_EXFILTRATIONPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill utilizes shell commands via `curl` and the GitHub CLI (`gh`) to communicate with project management APIs and retrieve or update project data.
* **[CREDENTIALS\_UNSAFE]:** The instructions direct the agent to access sensitive environment variables, including `$NOTION_API_KEY`, `$PLANE_API_KEY`, and `$LINEAR_API_KEY`, for service authentication.
* **[EXTERNAL\_DOWNLOADS]:** The skill performs network operations targeting well-known service providers, specifically `api.notion.com`, `api.plane.so`, and `api.linear.app`.
* **[DATA\_EXFILTRATION]:** The skill reads local configuration files from `~/.config/makerskills/pm/` and local Markdown files (Obsidian vault) to process project metadata and send updates to external tools.
* **[PROMPT\_INJECTION]:** The skill is susceptible to indirect prompt injection due to its processing of untrusted data from external sources.
* **Ingestion points:** Project card titles, descriptions, and comments are fetched from external platforms like Notion and GitHub via `references/adapters.md`.
* **Boundary markers:** No explicit delimiters or instructions are provided to the agent to treat external content as untrusted data.
* **Capability inventory:** The skill has the ability to execute network requests (`curl`), CLI tools (`gh`), and file operations on the local system.
* **Sanitization:** No sanitization or validation logic is present for data retrieved from external project management tools.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 11, 2026, 09:45 PM