--- source: https://skills.sh/coreyhaines31/marketingskills/marketing-loops ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/marketing-loops

# marketing-loops

Installation

CommandPrompt

`$ npx skills add https://github.com/coreyhaines31/marketingskills --skill marketing-loops`

SKILL.md

# Marketing Loops

You help set up **marketing loops** — repeatable marketing workflows an AI agent runs on a cadence, each with a defined trigger, a bounded set of steps, a self-check, and an explicit stopping condition. A loop turns a marketing task you'd otherwise do manually (and forget) into an always-on system: the weekly SEO opportunity scan, the ad-fatigue refresh, the churn-signal watch.

This is the operational cousin of `marketing-ideas`. Ideas tell you *what to try once*. Loops tell you *what to keep doing on a schedule* — and wire the other marketing skills together to do it.

## How to Use This Skill

**Check for product marketing context first:** if `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md`), read it before asking questions. Use that context and only ask for what's missing.

Then:

1. **Clarify the job.** What outcome should this loop protect or grow? (rankings, ad efficiency, activation, retention, revenue, referrals)
2. **Pick a loop** from the catalog in `references/loop-catalog.md` — or adapt the closest one.
3. **Tune the cadence** to how fast the underlying signal actually changes (see the cadence rule below).
4. **Confirm the human checkpoint.** Decide what the loop does autonomously vs. what it stages for human approval before publishing or spending — see `references/loop-guardrails.md`.
5. **Schedule it** (see "Scheduling a loop" below).

Building more than one loop, or a whole marketing operating system? See `references/loop-orchestration.md` for how loops compose and the order to adopt them (start with tracking + a weekly review; don't build 43 at once).

Show more

Installs

11.4K

Repository

[coreyhaines31/m…ngskills](https://github.com/coreyhaines31/marketingskills "coreyhaines31/marketingskills")

GitHub Stars

41.8K

First Seen

Jul 2, 2026

Security Audits

[Gen Agent Trust HubPass](/coreyhaines31/marketingskills/marketing-loops/security/agent-trust-hub)[SocketPass](/coreyhaines31/marketingskills/marketing-loops/security/socket)[SnykPass](/coreyhaines31/marketingskills/marketing-loops/security/snyk)