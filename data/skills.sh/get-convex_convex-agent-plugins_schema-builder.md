# schema-builder

[//]: # (source: [skills.sh](https://skills.sh/get-convex/convex-agent-plugins/schema-builder))

[skills](/)/[get-convex](/get-convex)/[convex-agent-plugins](/get-convex/convex-agent-plugins)/schema-builder

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/convex-agent-plugins --skill schema-builder`

SKILL.md

# Convex Schema Builder

Build well-structured Convex schemas following best practices for relationships, indexes, and validators.

## When to Use

* Creating a new `convex/schema.ts` file
* Adding tables to existing schema
* Designing data model relationships
* Adding or optimizing indexes
* Converting nested data to relational structure

## Schema Design Principles

1. **Document-Relational**: Use flat documents with ID references, not deep nesting
2. **Index Foreign Keys**: Always index fields used in lookups (userId, teamId, etc.)
3. **Limit Arrays**: Only use arrays for small, bounded collections (<8192 items)
4. **Type Safety**: Use strict validators with `v.*` types

Show more

Installs

216

Repository

[get-convex/conv…-plugins](https://github.com/get-convex/convex-agent-plugins "get-convex/convex-agent-plugins")

GitHub Stars

102

First Seen

Feb 6, 2026

Security Audits

[Gen Agent Trust HubPass](/get-convex/convex-agent-plugins/schema-builder/security/agent-trust-hub)[SocketPass](/get-convex/convex-agent-plugins/schema-builder/security/socket)[SnykPass](/get-convex/convex-agent-plugins/schema-builder/security/snyk)
