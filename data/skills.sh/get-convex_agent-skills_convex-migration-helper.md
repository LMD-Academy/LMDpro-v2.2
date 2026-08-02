# convex-migration-helper

[//]: # (source: [skills.sh](https://skills.sh/get-convex/agent-skills/convex-migration-helper))

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/convex-migration-helper

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/agent-skills --skill convex-migration-helper`

Summary

**Plan and execute Convex schema migrations safely with multi-deploy workflows and data transformation.**

* Follows a predictable three-step pattern: widen schema, migrate data, narrow schema; handles online migrations where the app continues serving requests during async data updates
* Provides the `@convex-dev/migrations` component for batched, cursor-based pagination with state tracking, dry-run testing, progress monitoring, and automatic resume from failure
* Covers common patterns including adding required fields, deleting fields, changing field types, splitting nested data, and cleaning up orphaned documents
* Supports dual-write and dual-read strategies for zero-downtime migrations; includes a small-table shortcut for direct in-mutation backfills on tables under a few thousand documents

SKILL.md

# Convex Migration Helper

Safely migrate Convex schemas and data when making breaking changes.

## When to Use

* Adding new required fields to existing tables
* Changing field types or structure
* Splitting or merging tables
* Renaming or deleting fields
* Migrating from nested to relational data

## When Not to Use

* Greenfield schema with no existing data in production or dev
* Adding optional fields that do not need backfilling
* Adding new tables with no existing data to migrate
* Adding or removing indexes with no correctness concern
* Questions about Convex schema design without a migration need

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

[Gen Agent Trust HubPass](/get-convex/agent-skills/convex-migration-helper/security/agent-trust-hub)[SocketPass](/get-convex/agent-skills/convex-migration-helper/security/socket)[SnykPass](/get-convex/agent-skills/convex-migration-helper/security/snyk)
