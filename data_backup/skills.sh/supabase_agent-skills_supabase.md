--- source: https://skills.sh/supabase/agent-skills/supabase ---

[skills](/)/[supabase](/supabase)/[agent-skills](/supabase/agent-skills)/supabase

# supabase

[Databases](/topic/databases)

Installation

CommandPrompt

`$ npx skills add https://github.com/supabase/agent-skills --skill supabase`

Summary

**Complete Supabase integration for database, auth, storage, and serverless functions within agent workflows.**

* Covers all Supabase products: Database (with RLS and migrations), Auth (sessions, JWT, cookies), Edge Functions, Realtime, Storage, Vectors, Cron, and Queues
* Supports client libraries (supabase-js, @supabase/ssr) and SSR frameworks (Next.js, React, SvelteKit, Astro, Remix)
* Includes CLI commands for schema management, migrations, and security audits; MCP server for direct database queries and advisor checks
* Built-in security checklist covering auth token handling, RLS policies, view access control, and storage permissions

SKILL.md

# Supabase

## Core Principles

**1. Supabase changes frequently — verify against changelog and current docs before implementing.**
Do not rely on training data for Supabase features. Function signatures, config.toml settings, and API conventions change between versions.

First, fetch `https://supabase.com/changelog.md` (a lightweight summary index — not a heavy pull), scan for `breaking-change` tags relevant to your task, and follow the linked page for any that apply. Then look up the relevant topic using the documentation access methods below.

**2. Verify your work.**
After implementing any fix, run a test query to confirm the change works. A fix without verification is incomplete.

**3. Recover from errors, don't loop.**
If an approach fails after 2-3 attempts, stop and reconsider. Try a different method, check documentation, inspect the error more carefully, and review relevant logs when available. Supabase issues are not always solved by retrying the same command, and the answer is not always in the logs, but logs are often worth checking before proceeding.

**4. Exposing tables to the Data API:** Depending on the user's [Data API settings](https://supabase.com/dashboard/project/%3Cref%3E/integrations/data_api/settings), newly created tables may not be automatically exposed via the Data (REST) API. If this is the case, `anon` and `authenticated` roles will need to be explicitly granted access.

> Note that this is separate from RLS, which controls which *rows* are visible once a table is accessible, not whether the table is accessible at all.

Show more

Related skills

## More in [Databases](/topic/databases)

* [### supabase-postgres-best-practices

  Postgres patterns for Supabase: schema design, RLS, indexing, and query performance

  supabase/agent-skills](/supabase/agent-skills/supabase-postgres-best-practices)
* [### firebase-basics

  Firebase setup, Firestore queries, security rules, and project configuration

  firebase/agent-skills](/firebase/agent-skills/firebase-basics)
* [### firebase-auth-basics

  Firebase Authentication flows, providers, custom claims, and session management

  firebase/agent-skills](/firebase/agent-skills/firebase-auth-basics)
* [### firebase-firestore-enterprise-native-mode

  Firestore at scale: sharding, composite indexes, and enterprise data modeling

  firebase/agent-skills](/firebase/agent-skills/firebase-firestore-enterprise-native-mode)
* [### convex-quickstart

  Convex schema, queries, mutations, and real-time reactivity patterns

  get-convex/agent-skills](/get-convex/agent-skills/convex-quickstart)

Installs

185.5K

Repository

[supabase/agent-skills](https://github.com/supabase/agent-skills "supabase/agent-skills")

GitHub Stars

2.4K

First Seen

Apr 5, 2026

Security Audits

[Gen Agent Trust HubPass](/supabase/agent-skills/supabase/security/agent-trust-hub)[SocketPass](/supabase/agent-skills/supabase/security/socket)[SnykWarn](/supabase/agent-skills/supabase/security/snyk)