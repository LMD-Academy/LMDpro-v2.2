--- source: https://skills.sh/topic/testing ---

[skills](/)/[topics](/topic)/Testing

# Testing skills

Testing skills give your agent the frameworks to write meaningful tests rather than boilerplate coverage — TDD loops, Playwright automation, end-to-end verification passes, and React component testing patterns.

## What your agent can do with testing skills installed

* Run a proper TDD loop: write the failing test first, implement the minimal fix, verify, then refactor
* Write Playwright tests that are resilient to UI changes with correct selectors, wait strategies, and test isolation
* Use the Playwright CLI to control a running browser and capture interactions without writing scripts manually
* Test React components with correct patterns for what to mock versus what to test through the real implementation
* Force a verification pass at the end of any task before marking it complete
* Configure CI-appropriate Playwright test runs with parallelism, retries, and failure reporting

## Skills in this category

Skill

What it does

[### test-driven-development

obra/superpowers

TDD loop: write the failing test first, implement the minimal change, verify, then refactor](/obra/superpowers/test-driven-development)[### webapp-testing

anthropics/skills

Web app testing patterns covering unit, integration, and end-to-end approaches](/anthropics/skills/webapp-testing)[### verification-before-completion

obra/superpowers

Force a verification pass before any task is marked done](/obra/superpowers/verification-before-completion)[### playwright-best-practices

currents-dev/playwright-best-practices-skill

Playwright patterns: selectors, fixtures, parallelism, and CI integration](/currents-dev/playwright-best-practices-skill/playwright-best-practices)[### playwright-cli

microsoft/playwright-cli

Control a live browser via the Playwright CLI to record, inspect, and replay interactions](/microsoft/playwright-cli/playwright-cli)

## Works with your agent

Testing skills are compatible with Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Codex, Gemini CLI, and all agents that support the [skills CLI](https://github.com/vercel-labs/skills).

## Frequently asked questions

My agent writes tests that always pass because they test the implementation, not the behavior. Will TDD skills fix this?+

Yes. test-driven-development enforces the red-green-refactor loop structurally: the test must fail before any implementation is written. This prevents the agent from writing tests that reverse-engineer already-passing code, which is the most common failure mode.

What is the difference between webapp-testing and playwright-best-practices?+

webapp-testing covers the full testing stack: unit, integration, and end-to-end patterns for web apps broadly. playwright-best-practices is specifically about writing good Playwright tests — selector strategies, test isolation, fixture setup, and CI parallelism. Both are worth installing for projects with Playwright in the stack.

Can playwright-cli replace writing Playwright test files?+

The CLI is complementary rather than a replacement. It's most useful for exploration: connecting to a running browser, recording interactions, and inspecting element state. The test files themselves are then written using playwright-best-practices patterns.

Does verification-before-completion slow down an agent significantly?+

It adds one pass at the end of each task. For anything running in CI or touching production, that tradeoff is worth it. The bigger cost is accepting incorrect output and debugging it afterward.

## Related topics

[Agent workflows](/topic/agent-workflows)[React](/topic/react)