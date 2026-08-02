# toolify

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/toolify))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/toolify

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill toolify`

SKILL.md

# /toolify — Wire up an integration or MCP server

Interactive wizard for adding an external tool / API / MCP into a project. Ends with working code + env vars set + a verification path.

## Scope

* **Primary stacks**: Next.js (App Router + TypeScript) and Rails. Reason: those are the two stacks the user actually ships in; supporting every stack bloats the wizard.
* **What toolify handles**: auth pattern (API key, OAuth, JWT, session cookie), env var setup, official SDK vs raw fetch, client wrapper location, example usage, webhook handling (if applicable), MCP `.mcp.json` wiring (if MCP server).
* **What toolify does NOT handle**: writing business logic on top of the integration (that's for the human). It scaffolds the *plumbing*, not the *feature*.

## Step 0 — Get the tool name

Ask if not provided: *"Which tool are we integrating?"*

Detect category from name:

Show more

Installs

110

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jul 2, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/toolify/security/agent-trust-hub)[SocketWarn](/coreyhaines31/makerskills/toolify/security/socket)[SnykWarn](/coreyhaines31/makerskills/toolify/security/snyk)
