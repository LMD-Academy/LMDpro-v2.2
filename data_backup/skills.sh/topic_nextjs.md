--- source: https://skills.sh/topic/nextjs ---

[skills](/)/[topics](/topic)/Next.js

# Next.js skills

Next.js skills give your agent current knowledge of the App Router, server components, caching APIs, and Vercel deployment so it applies correct patterns rather than reaching for outdated ones from the Pages Router era.

## What your agent can do with next.js skills installed

* Identify and fix data-fetching waterfalls across server and client component boundaries
* Apply the right caching strategy (use cache, cacheLife, cacheTag) for each route and data source
* Structure App Router projects with correct file conventions, layouts, and error boundaries
* Catch bundle size problems: barrel imports, heavy client components, and unnecessary dynamic imports
* Set up Turborepo monorepos with correct task pipelines, remote caching, and affected-only runs
* Deploy to Vercel with environment variable wiring, preview URLs, and edge config in place

## Skills in this category

Skill

What it does

[### vercel-react-best-practices

vercel-labs/agent-skills

69 prioritized React and Next.js performance rules across 8 categories](/vercel-labs/agent-skills/vercel-react-best-practices)[### vercel-composition-patterns

vercel-labs/agent-skills

Composable component architecture patterns for scalable Next.js apps](/vercel-labs/agent-skills/vercel-composition-patterns)[### next-best-practices

vercel-labs/next-skills

File conventions, RSC boundaries, data patterns, async APIs, and metadata](/vercel-labs/next-skills/next-best-practices)[### deploy-to-vercel

vercel-labs/agent-skills

Deploy Next.js apps to Vercel with correct config and environment setup](/vercel-labs/agent-skills/deploy-to-vercel)[### next-cache-components

vercel-labs/next-skills

PPR, use cache directive, cacheLife, cacheTag, and revalidateTag](/vercel-labs/next-skills/next-cache-components)[### turborepo

vercel/turborepo

Turborepo task pipelines, caching, remote cache, and CI configuration](/vercel/turborepo/turborepo)[### ai-sdk

vercel/ai

Vercel AI SDK: generateText, streamText, tool calling, and useChat](/vercel/ai/ai-sdk)

Building on Vercel? Several of these ship together as a single plugin — `npx plugins add vercel/vercel-plugin`.

## Works with your agent

Next.js skills are compatible with Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Codex, Gemini CLI, and all agents that support the [skills CLI](https://github.com/vercel-labs/skills).

## Frequently asked questions

My agent keeps writing Pages Router patterns instead of App Router. Will these fix that?+

Yes. next-best-practices and vercel-react-best-practices both explicitly cover App Router conventions and override the tendency to fall back on older patterns. Installing either one is usually enough to shift the agent's defaults.

What is the difference between next-best-practices and vercel-react-best-practices?+

vercel-react-best-practices covers React performance broadly: waterfalls, bundle size, re-renders, and advanced patterns across 69 rules. next-best-practices focuses on Next.js-specific conventions like file structure, async APIs, metadata, and route handlers. Both are worth installing for production Next.js work.

Does next-cache-components cover the use cache directive from Next.js 15?+

Yes. The skill covers Partial Prerendering, the use cache directive, cacheLife presets, and cacheTag with revalidateTag for on-demand invalidation.

Can I use these skills without deploying to Vercel?+

Yes. The React and Next.js skills apply to any deployment target. deploy-to-vercel is only needed if you're actually deploying there.

## Related topics

[React](/topic/react)[Design & UI](/topic/design)