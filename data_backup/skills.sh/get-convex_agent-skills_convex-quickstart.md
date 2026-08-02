--- source: https://skills.sh/get-convex/agent-skills/convex-quickstart ---

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/convex-quickstart

# convex-quickstart

[Databases](/topic/databases)

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/agent-skills --skill convex-quickstart`

Summary

**Scaffold a new Convex project or integrate Convex into an existing frontend app.**

* Supports two paths: scaffolding from templates (React + Vite, Next.js, Vue, Svelte, or bare backend) or adding Convex to an existing app with manual provider setup
* Templates include pre-configured frontend frameworks, Tailwind, shadcn/ui, and optional auth (Clerk, Convex Auth, Lucia)
* Requires running `npx convex dev` as a long-running process to sync backend code and manage deployments; cloud agents can use anonymous mode via `CONVEX_AGENT_MODE=anonymous`
* Provides step-by-step wiring for React (Vite), Next.js App Router, and links to guides for Vue, Svelte, React Native, Remix, and Node.js

SKILL.md

# Convex Quickstart

Set up a working Convex project as fast as possible.

## When to Use

* Starting a brand new project with Convex
* Adding Convex to an existing React, Next.js, Vue, Svelte, or other app
* Scaffolding a Convex app for prototyping

## When Not to Use

* The project already has Convex installed and `convex/` exists - just start
  building
* You only need to add auth to an existing Convex app - use the
  `convex-setup-auth` skill

## Workflow

Show more

Related skills

## More in [Databases](/topic/databases)

* [### supabase-postgres-best-practices

  Postgres patterns for Supabase: schema design, RLS, indexing, and query performance

  supabase/agent-skills](/supabase/agent-skills/supabase-postgres-best-practices)
* [### supabase

  Supabase client: auth, storage, realtime, edge functions, and migrations

  supabase/agent-skills](/supabase/agent-skills/supabase)
* [### firebase-basics

  Firebase setup, Firestore queries, security rules, and project configuration

  firebase/agent-skills](/firebase/agent-skills/firebase-basics)
* [### firebase-auth-basics

  Firebase Authentication flows, providers, custom claims, and session management

  firebase/agent-skills](/firebase/agent-skills/firebase-auth-basics)
* [### firebase-firestore-enterprise-native-mode

  Firestore at scale: sharding, composite indexes, and enterprise data modeling

  firebase/agent-skills](/firebase/agent-skills/firebase-firestore-enterprise-native-mode)

Installs

92.3K

Repository

[get-convex/agent-skills](https://github.com/get-convex/agent-skills "get-convex/agent-skills")

GitHub Stars

41

First Seen

Feb 18, 2026

Security Audits

[Gen Agent Trust HubPass](/get-convex/agent-skills/convex-quickstart/security/agent-trust-hub)[SocketPass](/get-convex/agent-skills/convex-quickstart/security/socket)[SnykPass](/get-convex/agent-skills/convex-quickstart/security/snyk)