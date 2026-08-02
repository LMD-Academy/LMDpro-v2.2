# company-cfo

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/company-cfo))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/company-cfo

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill company-cfo`

SKILL.md

# /company-cfo — Monthly company CFO workflow

The standing analysis leadership uses to make distribution / cuts / hiring / runway decisions. Primary cadence is **monthly** (run on the 1st for the closed prior month). Weekly and scenario modes cover the in-between.

Anonymized team-scope sibling to `personal-cfo` (households). Same discipline (transaction-sum EOM, categorization traps, scenario modeling) applied to company books.

## Step 0 — Load company config + prior run

Before starting work, read these in order:

1. **`${COMPANY_CFO_ROOT:-$HOME/code/company-cfo}/CLAUDE.md`** — your company's specific methodology, data source map, categorization rules, distribution mechanics. **This is the source of truth for HOW your company computes things.** Don't invent your own methodology.
2. **The most recent report** in `${COMPANY_CFO_ROOT}/reports/monthly/` — last month's snapshot. Tells you what leadership decided + what was open.
3. **The most recent `*-followup.md`** in that folder (if one exists) — supplementary decisions, scenario analysis.
4. **Any relevant memory notes** in `~/.claude/memory/` — running context: known anomalies, leadership constraints, current churn state.
5. **`git log --oneline -10`** in `${COMPANY_CFO_ROOT}` — what's shipped since the last run.

If the `COMPANY_CFO_ROOT` dir doesn't exist yet: first-run walkthrough asks the user to `mkdir` it, seed a `CLAUDE.md` from `references/company-config-template.md`, and set the env var.

## Step 1 — Parse mode

Show more

Installs

104

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jul 2, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/company-cfo/security/agent-trust-hub)[SocketWarn](/coreyhaines31/makerskills/company-cfo/security/socket)[SnykWarn](/coreyhaines31/makerskills/company-cfo/security/snyk)
