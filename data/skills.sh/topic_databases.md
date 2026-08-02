# Database skills

[//]: # (source: [skills.sh](https://skills.sh/topic/databases))

[skills](/)/[topics](/topic)/Databases

Database skills give your agent working knowledge of Postgres, Supabase, Firebase, Neon, and Convex so it writes correct queries, schemas, and migrations rather than generic SQL that needs rework.

## What your agent can do with databases skills installed

* Design Postgres schemas with correct normalization, indexing strategy, and row-level security policies
* Write Supabase queries using the correct client methods, realtime subscriptions, and edge functions
* Set up authentication flows with row-level security scoped correctly to authenticated users
* Implement Convex queries, mutations, and scheduled functions with correct reactivity patterns
* Configure Firestore security rules, composite indexes, and data structures for production scale
* Run Neon and PlanetScale branching workflows: create a database branch per pull request, run migrations, merge or discard
* Define type-safe schemas and migrations with Drizzle ORM, with full TypeScript inference end-to-end
* Use Turso (libSQL) for edge-replicated SQLite — connection setup, replication, and serverless query patterns
* Run analytical queries against local files, Parquet, and remote sources with DuckDB

## Skills in this category

Skill

What it does

[### supabase-postgres-best-practices

supabase/agent-skills

Postgres patterns for Supabase: schema design, RLS, indexing, and query performance](/supabase/agent-skills/supabase-postgres-best-practices)[### supabase

supabase/agent-skills

Supabase client: auth, storage, realtime, edge functions, and migrations](/supabase/agent-skills/supabase)[### firebase-basics

firebase/agent-skills

Firebase setup, Firestore queries, security rules, and project configuration](/firebase/agent-skills/firebase-basics)[### firebase-auth-basics

firebase/agent-skills

Firebase Authentication flows, providers, custom claims, and session management](/firebase/agent-skills/firebase-auth-basics)[### firebase-firestore-enterprise-native-mode

firebase/agent-skills

Firestore at scale: sharding, composite indexes, and enterprise data modeling](/firebase/agent-skills/firebase-firestore-enterprise-native-mode)[### convex-quickstart

get-convex/agent-skills

Convex schema, queries, mutations, and real-time reactivity patterns](/get-convex/agent-skills/convex-quickstart)[### convex-setup-auth

get-convex/agent-skills

Authentication in Convex with Clerk, Auth0, and custom JWT providers](/get-convex/agent-skills/convex-setup-auth)[### neon-postgres

neondatabase/agent-skills

Neon-specific patterns: branching workflow, serverless driver, and connection pooling](/neondatabase/agent-skills/neon-postgres)[### planetscale-postgres

planetscale/database-skills

PlanetScale Postgres: schema design, branching, and the Vitess-backed scaling model](/planetscale/database-skills/postgres)[### planetscale-mysql

planetscale/database-skills

PlanetScale MySQL: branch-based schema migrations, sharded scaling, and connection patterns](/planetscale/database-skills/mysql)[### turso-db

tursodatabase/agent-skills

Turso (libSQL): edge-replicated SQLite — setup, queries, and replication patterns for serverless apps](/tursodatabase/agent-skills/turso-db)[### duckdb-query

duckdb/duckdb-skills

DuckDB query patterns for in-process analytical workloads, Parquet/CSV reads, and embedded analytics](/duckdb/duckdb-skills/query)[### drizzle-orm

bobmatnyc/claude-mpm-skills

Drizzle ORM: type-safe schemas, migrations, and queries with end-to-end TypeScript inference](/bobmatnyc/claude-mpm-skills/drizzle-orm)

## Works with your agent

Databases skills are compatible with Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Codex, Gemini CLI, and all agents that support the [skills CLI](https://github.com/vercel-labs/skills).

## Frequently asked questions

Which skill should I use for plain Postgres without Supabase?+

supabase-postgres-best-practices covers general Postgres patterns — schema design, indexing, and query performance — that apply regardless of whether you're using Supabase. The Supabase-specific client API is covered separately in the supabase skill.

Do Supabase and Firebase skills conflict if both are installed?+

No. Skills are loaded on demand based on what you're working on. If you ask about Firestore, the Firebase skill loads. If you switch to a Supabase query, it uses the Supabase skill instead.

What makes Neon different enough to need its own skill?+

Neon's branching model has no equivalent in other Postgres providers. You create a branch per pull request, run migrations against it, and discard it when the branch closes. The neon-postgres skill covers that workflow specifically, along with the serverless driver's connection behavior, which differs from standard pg connection pooling.

Is there a skill for database migrations specifically?+

Migration patterns are covered within each platform skill. supabase covers Supabase migrations, neon-postgres covers Neon's branching migration workflow, and supabase-postgres-best-practices has the most depth on general Postgres schema migration patterns.

## Related topics

[Agent workflows](/topic/agent-workflows)[Testing](/topic/testing)
