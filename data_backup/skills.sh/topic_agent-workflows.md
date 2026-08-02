--- source: https://skills.sh/topic/agent-workflows ---

[skills](/)/[topics](/topic)/Agent workflows

# Agent workflow skills

Workflow skills teach your agent how to operate: how to plan before acting, debug methodically, dispatch parallel subagents, automate the browser, and run autonomous task loops without supervision. They are the meta-skills that make every other skill more effective.

## What your agent can do with agent workflows skills installed

* Break ambiguous tasks into structured plans before touching any code
* Dispatch parallel subagents for independent work streams and coordinate their outputs
* Automate browser tasks — navigate, fill forms, extract data, take screenshots — without writing custom scripts
* Debug using a systematic hypothesis-and-test loop rather than making random edits
* Discover and install new skills from skills.sh directly inside an agent session
* Close branches cleanly: run tests, write commit messages, open pull requests, request review
* Run a ralph loop: feed your agent a prd.json task list and let it work through every item autonomously, committing passing work and retrying failures without supervision

## Skills in this category

Skill

What it does

[### find-skills

vercel-labs/skills

Discover and install skills from skills.sh directly inside an agent session](/vercel-labs/skills/find-skills)[### agent-browser

vercel-labs/agent-browser

Full browser automation: navigate, click, fill forms, extract data, and screenshot](/vercel-labs/agent-browser/agent-browser)[### skill-creator

anthropics/skills

Create, test, and publish new skills from within your agent](/anthropics/skills/skill-creator)[### brainstorming

obra/superpowers

Structured ideation and problem decomposition frameworks](/obra/superpowers/brainstorming)[### browser-use

browser-use/browser-use

Browser automation with visual understanding — interacts with pages based on what it sees](/browser-use/browser-use/browser-use)[### systematic-debugging

obra/superpowers

Hypothesis-driven debugging loop: observe, hypothesize, test, verify](/obra/superpowers/systematic-debugging)[### writing-plans

obra/superpowers

Write structured implementation plans before starting complex tasks](/obra/superpowers/writing-plans)[### executing-plans

obra/superpowers

Execute a plan step-by-step with checkpoints and verification at each stage](/obra/superpowers/executing-plans)[### test-driven-development

obra/superpowers

TDD loop: write the failing test first, implement the minimal fix, verify, then refactor](/obra/superpowers/test-driven-development)[### requesting-code-review

obra/superpowers

Prepare code for review: self-review, test coverage, and pull request description](/obra/superpowers/requesting-code-review)[### subagent-driven-development

obra/superpowers

Orchestrate specialized subagents for different parts of a task](/obra/superpowers/subagent-driven-development)[### verification-before-completion

obra/superpowers

Force a verification pass before any task is marked complete](/obra/superpowers/verification-before-completion)[### dispatching-parallel-agents

obra/superpowers

Split work across parallel subagents and coordinate their outputs](/obra/superpowers/dispatching-parallel-agents)[### using-git-worktrees

obra/superpowers

Use git worktrees to run parallel agent sessions on separate branches](/obra/superpowers/using-git-worktrees)[### finishing-a-development-branch

obra/superpowers

Branch close checklist: tests, commit message, pull request, and review request](/obra/superpowers/finishing-a-development-branch)[### ralph-tui-prd

subsy/ralph-tui

Generate a structured prd.json task list for use with ralph-tui's autonomous loop](/subsy/ralph-tui/ralph-tui-prd)[### ralph-tui-create-beads

subsy/ralph-tui

Create Beads tasks (git-backed, with dependencies) for ralph-tui](/subsy/ralph-tui/ralph-tui-create-beads)[### ralph-tui-create-json

subsy/ralph-tui

Create JSON-format task lists for ralph-tui](/subsy/ralph-tui/ralph-tui-create-json)[### ralph-wiggum

fstandhartinger/ralph-wiggum

The Ralph Wiggum loop technique: simplified autonomous agent loop with minimal setup](/fstandhartinger/ralph-wiggum/ralph-wiggum)[### ralph-loop

andrelandgraf/fullstackrecipes

Ralph loop implementation with agent mode for sustained autonomous task completion](/andrelandgraf/fullstackrecipes/ralph-loop)

## Works with your agent

Agent workflows skills are compatible with Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Codex, Gemini CLI, and all agents that support the [skills CLI](https://github.com/vercel-labs/skills).

## Frequently asked questions

What is the difference between agent-browser and browser-use?+

agent-browser is a CLI-driven automation tool, fast and reliable for structured tasks like form filling and data extraction. browser-use adds visual understanding: the agent sees the rendered page and interacts based on appearance rather than selectors. Use agent-browser for predictable automation, browser-use when the page structure is inconsistent or unknown.

Should I install both writing-plans and executing-plans?+

They are designed as a pair. writing-plans handles upfront decomposition, turning a vague goal into a concrete sequence of steps. executing-plans handles the runtime behavior, following that sequence with checkpoints rather than free-running. Either works independently, but the combination is more reliable for multi-step tasks.

Can find-skills install skills mid-session without restarting?+

Yes, and that is its primary use case. Ask your agent to find a skill relevant to what you're working on and it becomes available in the same session without restarting.

Is dispatching-parallel-agents only useful for large tasks?+

Even moderately sized tasks benefit from parallelism when the work divides cleanly. Writing tests in one agent while another writes the implementation is a common pattern that works well for features of any size.

## Related topics

[Testing](/topic/testing)[React](/topic/react)