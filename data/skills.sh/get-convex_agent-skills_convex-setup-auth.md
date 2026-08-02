# convex-setup-auth

[//]: # (source: [skills.sh](https://skills.sh/get-convex/agent-skills/convex-setup-auth))

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/convex-setup-auth

[Databases](/topic/databases)

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/agent-skills --skill convex-setup-auth`

Summary

**Set up Convex authentication with the right provider, user management, and access control patterns.**

* Supports multiple auth providers: Convex Auth, Clerk, WorkOS AuthKit, Auth0, and custom JWT, with provider detection from repo signals
* Guides you through choosing a provider, configuring client and backend wiring, environment variables, and `convex/auth.config.ts` setup
* Covers authentication checks in protected functions, optional app-level user storage, and authorization patterns for ownership and roles
* Includes reference files for each provider with concrete workflows, expected files, gotchas, and validation steps

SKILL.md

# Convex Authentication Setup

Implement secure authentication in Convex with user management and access
control.

## When to Use

* Setting up authentication for the first time
* Implementing user management (users table, identity mapping)
* Creating authentication helper functions
* Setting up auth providers (Convex Auth, Clerk, WorkOS AuthKit, Auth0, custom
  JWT)

## When Not to Use

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

91.6K

Repository

[get-convex/agent-skills](https://github.com/get-convex/agent-skills "get-convex/agent-skills")

GitHub Stars

41

First Seen

Mar 16, 2026

Security Audits

[Gen Agent Trust HubPass](/get-convex/agent-skills/convex-setup-auth/security/agent-trust-hub)[SocketPass](/get-convex/agent-skills/convex-setup-auth/security/socket)[SnykPass](/get-convex/agent-skills/convex-setup-auth/security/snyk)
