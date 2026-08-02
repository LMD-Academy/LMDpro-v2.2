# loopify

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/loopify))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/loopify

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/makerskills --skill loopify`

SKILL.md

# /loopify — Set up an agent loop

Wizard for going from *"this task should run periodically"* to a working loop with the right pacing, idempotency, and bail-out. Reference: `ScheduleWakeup` (dynamic pacing), `CronCreate` (fixed schedule), and the built-in `/loop` (dynamic self-paced re-entry).

## Step 0 — Confirm what you're looping

Ask if not obvious from context: *"What task should this loop do each iteration?"*

Then get the essentials:

| Question | Why it matters |
| --- | --- |
| **How often?** | Determines cron vs dynamic vs one-shot |
| **When to stop?** | Bail-out condition — loops must have one |
| **What's the loop body doing?** | Determines idempotency requirements |
| **Where does output go?** | File / notification / commit / nothing |
| **What's the failure mode if it runs twice?** | Idempotency validation |

## Step 1 — Pick the pattern

Show more

Installs

108

Repository

[coreyhaines31/m…erskills](https://github.com/coreyhaines31/makerskills "coreyhaines31/makerskills")

GitHub Stars

226

First Seen

Jul 2, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/makerskills/loopify/security/agent-trust-hub)[SocketPass](/coreyhaines31/makerskills/loopify/security/socket)[SnykPass](/coreyhaines31/makerskills/loopify/security/snyk)
