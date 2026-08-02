--- source: https://skills.sh/get-convex/convex-agent-plugins/auth-setup ---

[skills](/)/[get-convex](/get-convex)/[convex-agent-plugins](/get-convex/convex-agent-plugins)/auth-setup

# auth-setup

Installation

CommandPrompt

`$ npx skills add https://github.com/get-convex/convex-agent-plugins --skill auth-setup`

SKILL.md

# Convex Authentication Setup

Implement secure authentication in Convex with user management and access control.

## When to Use

* Setting up authentication for the first time
* Implementing user management (users table, identity mapping)
* Creating authentication helper functions
* Setting up OAuth providers (WorkOS, Auth0, etc.)

## Architecture Overview

Convex authentication has two main parts:

1. **Client Authentication**: Use a provider (WorkOS, Auth0, custom JWT)
2. **Backend Identity**: Map auth provider identity to your users table

## Schema Setup

Show more

Installs

211

Repository

[get-convex/conv…-plugins](https://github.com/get-convex/convex-agent-plugins "get-convex/convex-agent-plugins")

GitHub Stars

102

First Seen

Feb 7, 2026

Security Audits

[Gen Agent Trust HubPass](/get-convex/convex-agent-plugins/auth-setup/security/agent-trust-hub)[SocketPass](/get-convex/convex-agent-plugins/auth-setup/security/socket)[SnykPass](/get-convex/convex-agent-plugins/auth-setup/security/snyk)