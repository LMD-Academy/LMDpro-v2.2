# firebase-auth-basics

[//]: # (source: [skills.sh](https://skills.sh/firebase/agent-skills/firebase-auth-basics))

[skills](/)/[firebase](/firebase)/[agent-skills](/firebase/agent-skills)/firebase-auth-basics

[Databases](/topic/databases)

Installation

CommandPrompt

`$ npx skills add https://github.com/firebase/agent-skills --skill firebase-auth-basics`

Summary

**Set up Firebase Authentication with multiple identity providers and secure data access rules.**

* Supports email/password, phone number, anonymous, federated providers (Google, Facebook, Twitter, GitHub, Microsoft, Apple), and custom auth integration
* Each authenticated user receives a unique ID and JWT-based tokens (short-lived ID tokens and long-lived refresh tokens) for accessing Firebase services
* Enable providers via CLI for Google Sign In, anonymous, and email/password; use Firebase Console for additional federated providers
* Secure Firestore and Cloud Storage using `request.auth` in security rules to control data access based on user identity

SKILL.md

## Prerequisites

* **Firebase Project**: Created via
  `npx -y firebase-tools@latest projects:create` (see `firebase-basics`).
* **Firebase CLI**: Installed and logged in (see `firebase-basics`).

## Core Concepts

Firebase Authentication provides backend services, easy-to-use SDKs, and
ready-made UI libraries to authenticate users to your app.

### Users

A user is an entity that can sign in to your app. Each user is identified by a
unique ID (`uid`) which is guaranteed to be unique across all providers. User
properties include:

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
* [### firebase-firestore-enterprise-native-mode

  Firestore at scale: sharding, composite indexes, and enterprise data modeling

  firebase/agent-skills](/firebase/agent-skills/firebase-firestore-enterprise-native-mode)
* [### convex-quickstart

  Convex schema, queries, mutations, and real-time reactivity patterns

  get-convex/agent-skills](/get-convex/agent-skills/convex-quickstart)

Installs

114.8K

Repository

[firebase/agent-skills](https://github.com/firebase/agent-skills "firebase/agent-skills")

GitHub Stars

390

First Seen

Feb 17, 2026

Security Audits

[Gen Agent Trust HubPass](/firebase/agent-skills/firebase-auth-basics/security/agent-trust-hub)[SocketPass](/firebase/agent-skills/firebase-auth-basics/security/socket)[SnykPass](/firebase/agent-skills/firebase-auth-basics/security/snyk)
