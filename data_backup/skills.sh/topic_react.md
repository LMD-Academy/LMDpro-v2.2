--- source: https://skills.sh/topic/react ---

[skills](/)/[topics](/topic)/React

# Frontend & React skills

React skills give your agent the performance rules, component patterns, and ecosystem knowledge to write production-quality frontend code, not just code that works.

## What your agent can do with react skills installed

* Identify and eliminate data-fetching waterfalls in React component trees
* Apply correct memoization, knowing when useMemo, useCallback, and React.memo genuinely help versus when they add overhead without benefit
* Build composable component APIs that stay maintainable as features grow rather than accumulating boolean prop sprawl
* Set up and extend shadcn/ui components with correct Tailwind configuration and theming
* Catch bundle size problems: barrel imports, unnecessary client components, and heavy third-party libraries
* Write TypeScript types correctly for complex component APIs, discriminated unions, and conditional types

## Skills in this category

Skill

What it does

[### vercel-react-best-practices

vercel-labs/agent-skills

69 prioritized React performance rules covering waterfalls, bundle size, re-renders, and advanced patterns](/vercel-labs/agent-skills/vercel-react-best-practices)[### vercel-composition-patterns

vercel-labs/agent-skills

Compound components, render props, and context patterns for scalable component APIs](/vercel-labs/agent-skills/vercel-composition-patterns)[### shadcn

shadcn/ui

shadcn/ui component usage, customization, and Tailwind integration](/shadcn/ui/shadcn)[### webapp-testing

anthropics/skills

Testing React apps: unit, integration, and end-to-end patterns](/anthropics/skills/webapp-testing)[### typescript-advanced-types

wshobson/agents

Discriminated unions, conditional types, template literals, and utility type patterns](/wshobson/agents/typescript-advanced-types)[### tailwind-design-system

wshobson/agents

Design system implementation with Tailwind: tokens, variants, and component patterns](/wshobson/agents/tailwind-design-system)

Building on Vercel? Several of these ship together as a single plugin — `npx plugins add vercel/vercel-plugin`.

## Works with your agent

React skills are compatible with Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Codex, Gemini CLI, and all agents that support the [skills CLI](https://github.com/vercel-labs/skills).

## Frequently asked questions

Does vercel-react-best-practices cover React 19?+

Yes. The rules cover concurrent features, server components, and hooks introduced in React 18 and 19, alongside foundational patterns that apply across all recent React versions.

What is the difference between vercel-composition-patterns and vercel-react-best-practices?+

vercel-react-best-practices addresses performance: identifying and fixing slow or expensive code. vercel-composition-patterns addresses architecture: building component APIs that stay maintainable as products grow. Both are worth installing for production frontend work.

Do I need the shadcn skill if I've already installed shadcn/ui?+

Installing the library and having your agent understand it are different things. The shadcn skill teaches your agent how to theme, extend, and compose the components correctly rather than copying examples verbatim. It is particularly useful when customizing beyond the defaults.

Do these skills require using Vercel?+

No. The React rules and composition patterns apply to any React app regardless of where it's deployed. Vercel authors these skills, but there's no deployment dependency.

## Related topics

[Next.js](/topic/nextjs)[Design & UI](/topic/design)[Testing](/topic/testing)