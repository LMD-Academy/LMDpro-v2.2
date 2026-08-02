--- source: https://skills.sh/vercel-labs/agent-skills/web-design-guidelines ---

[skills](/)/[vercel-labs](/vercel-labs)/[agent-skills](/vercel-labs/agent-skills)/web-design-guidelines

# web-design-guidelines

[Design & UI](/topic/design)

Installation

CommandPrompt

`$ npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines`

Summary

**Audit UI code against Vercel's Web Interface Guidelines for design and accessibility compliance.**

* Fetches the latest guidelines from a remote source before each review, ensuring rules stay current
* Accepts file paths or patterns as arguments; prompts for files if none provided
* Outputs findings in a terse `file:line` format for quick scanning and remediation
* Covers design, accessibility, and UX best practices as defined in the guidelines repository

SKILL.md

# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

## How It Works

1. Fetch the latest guidelines from the source URL below
2. Read the specified files (or prompt user for files/pattern)
3. Check against all rules in the fetched guidelines
4. Output findings in the terse `file:line` format

## Guidelines Source

Fetch fresh guidelines before each review:

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Show more

Related skills

## More in [Design & UI](/topic/design)

* [### frontend-design

  Comprehensive frontend design patterns and visual polish guidance

  anthropics/skills](/anthropics/skills/frontend-design)
* [### vercel-composition-patterns

  React composition patterns for flexible, scalable UI component architecture

  vercel-labs/agent-skills](/vercel-labs/agent-skills/vercel-composition-patterns)
* [### ui-ux-pro-max

  Advanced UI/UX patterns for complex interfaces and interaction design

  nextlevelbuilder/ui-ux-pro-max-skill](/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max)
* [### sleek-design-mobile-apps

  Mobile-first design principles for iOS and Android app interfaces

  sleekdotdesign/agent-skills](/sleekdotdesign/agent-skills/sleek-design-mobile-apps)
* [### canvas-design

  Design generation and iteration in canvas-based environments

  anthropics/skills](/anthropics/skills/canvas-design)

Installs

493.8K

Repository

[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills "vercel-labs/agent-skills")

GitHub Stars

29.5K

First Seen

Jan 19, 2026

Security Audits

[Gen Agent Trust HubPass](/vercel-labs/agent-skills/web-design-guidelines/security/agent-trust-hub)[SocketPass](/vercel-labs/agent-skills/web-design-guidelines/security/socket)[SnykWarn](/vercel-labs/agent-skills/web-design-guidelines/security/snyk)