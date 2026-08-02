--- source: https://skills.sh/get-convex/agent-skills/convex-performance-audit ---

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/convex-performance-audit

# convex-performance-audit

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/agent-skills --skill convex-performance-audit`

Summary

**Diagnose and resolve Convex performance issues across reads, writes, subscriptions, and function limits.**

* Covers four problem classes: hot-path reads and data amplification, OCC write conflicts and contention, subscription cost and reactivity overhead, and function execution or transaction size limits
* Starts with signal gathering from deployment health insights or CLI tools, then routes to the relevant reference guide based on the problem type
* Emphasizes tracing full read and write sets, identifying sibling functions on the same tables, and fixing patterns consistently across related code paths
* Includes guardrails against over-engineering small-scale or low-traffic applications, and escalation guidance for invasive fixes requiring migration-safe rollouts

SKILL.md

# Convex Performance Audit

Diagnose and fix performance problems in Convex applications, one problem class
at a time.

## When to Use

* A Convex page or feature feels slow or expensive
* `npx convex insights --details` reports high bytes read, documents read, or
  OCC conflicts
* Low-freshness read paths are using reactivity where point-in-time reads would
  do
* OCC conflict errors or excessive mutation retries
* High subscription count or slow UI updates
* Functions approaching execution or transaction limits
* The same performance pattern needs fixing across sibling functions

## When Not to Use

Show more

Installs

92.0K

Repository

[get-convex/agent-skills](https://github.com/get-convex/agent-skills "get-convex/agent-skills")

GitHub Stars

41

First Seen

Mar 16, 2026

Security Audits

[Gen Agent Trust HubPass](/get-convex/agent-skills/convex-performance-audit/security/agent-trust-hub)[SocketPass](/get-convex/agent-skills/convex-performance-audit/security/socket)[SnykPass](/get-convex/agent-skills/convex-performance-audit/security/snyk)