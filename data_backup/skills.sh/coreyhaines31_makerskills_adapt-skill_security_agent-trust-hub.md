--- source: https://skills.sh/coreyhaines31/makerskills/adapt-skill/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[adapt-skill](/coreyhaines31/makerskills/adapt-skill)/Gen Agent Trust Hub

# adapt-skill

Pass

Audited by Gen Agent Trust Hub on Jun 30, 2026

Risk Level: SAFECOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADS

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill uses shell commands to fetch external skill source code. Specifically, it employs `git clone --depth 1` for shallow repository cloning and the GitHub CLI (`gh api`) to retrieve specific file contents. These commands are localized to a temporary directory (`/tmp/adapt-skill-*`) or used for metadata extraction (commit SHAs) and are essential for the skill's primary function.
* **[EXTERNAL\_DOWNLOADS]:** The skill is designed to interact with external sources such as GitHub, agentskills.io, and skills.sh. It fetches SKILL.md files and associated reference documents. These operations are transparently disclosed and include verification steps such as capturing commit SHAs and license checks.
* **[SAFE]:** The skill demonstrates high security and legal hygiene by incorporating a mandatory license verification step (`references/license-check.md`). It explicitly instructs the agent to stop if it encounters restrictive licenses like GPL or proprietary code, and it enforces the creation of an attribution file (`references/attribution.md`) to maintain the chain of custody and respect original authorship.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jun 30, 2026, 07:57 PM