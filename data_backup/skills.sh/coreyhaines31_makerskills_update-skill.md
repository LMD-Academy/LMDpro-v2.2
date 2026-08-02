--- source: https://skills.sh/coreyhaines31/makerskills/update-skill ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/update-skill

# update-skill

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill update-skill`

SKILL.md

# /update-skill — Improve existing skills from learnings

Third in the meta-skill trio with `create-skill` (new skills) and `adapt-skill` (external → yours).

Decision tree:

* **Net-new skill** → `create-skill`
* **External skill to port** → `adapt-skill`
* **Existing skill needs an improvement** → `update-skill` (this one)

## Step 1 — Pick input mode

| Invocation | Mode | What it means |
| --- | --- | --- |
| `/update-skill` (mid-conversation) | **from-chat** (default) | Scan recent conversation for learnings, identify affected skill(s) |
| `/update-skill from-dump` + pasted content | **from-dump** | Corey provides a brief, feedback, transcript, postmortem |
| `/update-skill <skill> <change>` | **targeted** | Corey names the skill + the change directly. Skip discovery. |
| `/update-skill usage <skill>` | **usage** | Review recent runs of the named skill, identify gaps / improvements |

Default when invoked mid-conversation with substantive recent activity: **from-chat**.

Show more

Installs

1

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jun 30, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/update-skill/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/update-skill/security/socket)[SnykWarn](/coreyhaines31/makerskills/update-skill/security/snyk)