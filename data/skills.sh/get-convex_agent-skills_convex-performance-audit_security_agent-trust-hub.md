# convex-performance-audit

[//]: # (source: [skills.sh](https://skills.sh/get-convex/agent-skills/convex-performance-audit/security/agent-trust-hub))

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/[convex-performance-audit](/get-convex/agent-skills/convex-performance-audit)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on May 1, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill focuses on performance optimization for Convex applications, providing patterns for indexing, denormalization, and subscription management that follow official best practices.
* **[EXTERNAL\_DOWNLOADS]:** The skill references official Convex resources, including the `convex` CLI (via npx) and the `@convex-dev/aggregate` package. These are legitimate dependencies for developers working with the Convex platform.
* **[COMMAND\_EXECUTION]:** The skill instructs the use of `npx convex insights`, which is a standard diagnostic command for the platform. This is a routine part of the performance auditing workflow.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 1, 2026, 12:17 AM
