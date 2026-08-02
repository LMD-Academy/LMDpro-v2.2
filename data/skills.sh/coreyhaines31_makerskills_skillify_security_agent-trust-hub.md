# skillify

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/skillify/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[skillify](/coreyhaines31/makerskills/skillify)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 3, 2026

Risk Level: SAFEPROMPT\_INJECTIONEXTERNAL\_DOWNLOADSCOMMAND\_EXECUTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill is highly susceptible to indirect prompt injection because the 'ADAPT' mode fetches content from external GitHub repositories, agentskills.io, or other URLs provided by the user. This content is analyzed and rewritten by the agent, creating an opportunity for an attacker to embed malicious instructions that hijack the agent's behavior during the porting process.
* **Ingestion points:** The skill ingests untrusted data from external sources via `git clone` and the GitHub API (`gh api`) as described in the `ADAPT` mode of `SKILL.md`.
* **Boundary markers:** Absent. There are no instructions to the agent to treat the external content as untrusted data or to ignore instructions embedded within the files being adapted.
* **Capability inventory:** The agent has the capability to write files (`Edit` tool), execute shell commands (`git`, `gh`, `grep`), and push code to repositories (`git push`).
* **Sanitization:** The skill relies on manual user approval of a 'classification table' before writing files, but lacks automated sanitization of the downloaded content.
* **[EXTERNAL\_DOWNLOADS]:** The skill uses shell commands to download files and clone repositories from arbitrary external URLs.
* **Evidence:** `SKILL.md` contains instructions to run `git clone --depth 1 <url> /tmp/skillify-adapt-<short-id>/` and `gh api -H "Accept: application/vnd.github.raw" repos/<owner>/<repo>/contents/SKILL.md > /tmp/adapt-source.md`.
* **[COMMAND\_EXECUTION]:** The skill executes several shell commands to manage local repositories and search through files.
* **Evidence:** The skill uses `git clone`, `gh api`, `grep -rln`, and `git commit/push` across multiple modes to manage skill files in local directories like `~/code/makerskills/` and `~/.claude/memory/`.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 3, 2026, 07:57 PM
