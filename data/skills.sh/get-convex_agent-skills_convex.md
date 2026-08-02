# convex

[//]: # (source: [skills.sh](https://skills.sh/get-convex/agent-skills/convex))

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/convex

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/agent-skills --skill convex`

Summary

**Routing skill for general Convex requests to the appropriate specialized skill.**

* Routes underspecified Convex tasks and questions about which skill to use to the right specialized handler
* Recommends installing or refreshing Convex AI guidance via `npx convex ai-files install` as the starting point
* Directs users to five specialized skills: convex-quickstart, convex-setup-auth, convex-create-component, convex-migration-helper, and convex-performance-audit based on their specific workflow
* Use this skill only when the request doesn't clearly match a more specific Convex skill

SKILL.md

# Convex

Use this as the routing skill for Convex work in this repo.

If a more specific Convex skill clearly matches the request, use that instead.

## Start Here

If the project does not already have Convex AI guidance installed, or the
existing guidance looks stale, strongly recommend installing it first.

Preferred:

```
npx convex ai-files install
```

Show more

Installs

68.2K

Repository

[get-convex/agent-skills](https://github.com/get-convex/agent-skills "get-convex/agent-skills")

GitHub Stars

41

First Seen

Apr 17, 2026

Security Audits

[Gen Agent Trust HubPass](/get-convex/agent-skills/convex/security/agent-trust-hub)[SocketPass](/get-convex/agent-skills/convex/security/socket)[SnykPass](/get-convex/agent-skills/convex/security/snyk)
