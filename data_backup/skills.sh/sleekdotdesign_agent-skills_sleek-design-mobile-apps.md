--- source: https://skills.sh/sleekdotdesign/agent-skills/sleek-design-mobile-apps ---

[skills](/)/[sleekdotdesign](/sleekdotdesign)/[agent-skills](/sleekdotdesign/agent-skills)/sleek-design-mobile-apps

# sleek-design-mobile-apps

[Design & UI](/topic/design)[Mobile](/topic/mobile)

Installation

CommandPrompt

`$ npx skills add https://github.com/sleekdotdesign/agent-skills --skill sleek-design-mobile-apps`

Summary

**AI-powered mobile app design tool with REST API for creating projects, describing designs in plain language, and rendering screens.**

* Supports high-level requests ("design a fitness app") and specific edits ("add a pricing section to this screen"); send natural language descriptions via chat messages and let the AI decide what to create or modify
* Requires Pro+ plan and API key with scoped permissions (`projects:read/write`, `chats:read/write`, `screenshots`, `components:read`)
* Async and sync modes available; async returns immediately with a run ID for polling, sync blocks up to 300 seconds
* Always screenshot newly created or updated screens after each chat run and deliver them to the user; combine all project screens into one screenshot when screens are created for the first time
* One active run per project at a time; retry failed requests safely using idempotency keys

SKILL.md

# Designing with Sleek

[![Design mobile apps in minutes](/api/image-proxy?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsleekdotdesign%2Fagent-skills%2Fmain%2Fassets%2Fhero.png&s=9aa654682c7480ca)](https://sleek.design)

## Overview

[sleek.design](https://sleek.design) is an AI-powered mobile app design tool. You interact with it via a REST API at `/api/v1/*` to create projects, describe what you want built in plain language, and get back rendered screens. All communication is standard HTTP with bearer token auth.

**Base URL**: `https://sleek.design`
**Auth**: `Authorization: Bearer $SLEEK_API_KEY` on every `/api/v1/*` request
**Content-Type**: `application/json` (requests and responses)
**CORS**: Enabled on all `/api/v1/*` endpoints
**API docs**: OpenAPI spec at `https://sleek.design/api/v1/spec.json`; browsable docs at `https://sleek.design/api/v1/docs`. Fetch the spec for any contract detail not covered here.

---

## Prerequisites: API Key

If `SLEEK_API_KEY` is not set, use the device flow so the user never handles the raw key:

Show more

Related skills

## More in [Design & UI](/topic/design)

* [### frontend-design

  Comprehensive frontend design patterns and visual polish guidance

  anthropics/skills](/anthropics/skills/frontend-design)
* [### web-design-guidelines

  Vercel's Web Interface Guidelines covering spacing, typography, interaction, and accessibility

  vercel-labs/agent-skills](/vercel-labs/agent-skills/web-design-guidelines)
* [### vercel-composition-patterns

  React composition patterns for flexible, scalable UI component architecture

  vercel-labs/agent-skills](/vercel-labs/agent-skills/vercel-composition-patterns)
* [### ui-ux-pro-max

  Advanced UI/UX patterns for complex interfaces and interaction design

  nextlevelbuilder/ui-ux-pro-max-skill](/nextlevelbuilder/ui-ux-pro-max-skill/ui-ux-pro-max)
* [### canvas-design

  Design generation and iteration in canvas-based environments

  anthropics/skills](/anthropics/skills/canvas-design)

## More in [Mobile](/topic/mobile)

* [### vercel-react-native-skills

  React Native best practices: performance, navigation, native modules, and platform APIs

  vercel-labs/agent-skills](/vercel-labs/agent-skills/vercel-react-native-skills)
* [### building-native-ui

  Expo native UI components: lists, modals, tabs, bottom sheets, and haptics

  expo/skills](/expo/skills/building-native-ui)
* [### native-data-fetching

  Data fetching for native apps: offline caching, background refresh, and sync patterns

  expo/skills](/expo/skills/native-data-fetching)
* [### expo-tailwind-setup

  NativeWind and Tailwind setup in Expo with correct native class handling

  expo/skills](/expo/skills/expo-tailwind-setup)
* [### upgrading-expo

  Expo SDK upgrade guide covering breaking changes, native module compatibility, and migration steps

  expo/skills](/expo/skills/upgrading-expo)

Installs

12

Repository

[sleekdotdesign/…t-skills](https://github.com/sleekdotdesign/agent-skills "sleekdotdesign/agent-skills")

GitHub Stars

472

First Seen

Feb 25, 2026

Security Audits

[Gen Agent Trust HubPass](/sleekdotdesign/agent-skills/sleek-design-mobile-apps/security/agent-trust-hub)[SocketPass](/sleekdotdesign/agent-skills/sleek-design-mobile-apps/security/socket)[SnykWarn](/sleekdotdesign/agent-skills/sleek-design-mobile-apps/security/snyk)