# convex-create-component

[//]: # (source: [skills.sh](https://skills.sh/get-convex/agent-skills/convex-create-component))

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/convex-create-component

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/agent-skills --skill convex-create-component`

Summary

**Design and build isolated, reusable Convex backend components with clear boundaries and app-facing wrappers.**

* Supports three component shapes: local (single-app), packaged (npm), and hybrid (both), with a decision tree to choose the right fit
* Enforces architectural boundaries: components own their tables and functions, while the app handles authentication, environment access, and client-facing wrappers
* Provides a complete workflow from planning (tables, public API, data flow) through implementation, wiring with `app.use(...)`, and validation via `npx convex dev`
* Includes patterns for authentication handoff, ID passing across boundaries, function handles for callbacks, and class-based client wrappers for published components

SKILL.md

# Convex Create Component

Create reusable Convex components with clear boundaries and a small app-facing
API.

## When to Use

* Creating a new Convex component in an existing app
* Extracting reusable backend logic into a component
* Building a third-party integration that should own its own tables and
  workflows
* Packaging Convex functionality for reuse across multiple apps

## When Not to Use

* One-off business logic that belongs in the main app
* Thin utilities that do not need Convex tables or functions
* App-level orchestration that should stay in `convex/`
* Cases where a normal TypeScript library is enough

Show more

Installs

91.6K

Repository

[get-convex/agent-skills](https://github.com/get-convex/agent-skills "get-convex/agent-skills")

GitHub Stars

41

First Seen

Mar 16, 2026

Security Audits

[Gen Agent Trust HubPass](/get-convex/agent-skills/convex-create-component/security/agent-trust-hub)[SocketPass](/get-convex/agent-skills/convex-create-component/security/socket)[SnykPass](/get-convex/agent-skills/convex-create-component/security/snyk)
