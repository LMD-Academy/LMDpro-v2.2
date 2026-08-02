--- source: https://skills.sh/anthropics/skills/skill-creator ---

[skills](/)/[anthropics](/anthropics)/[skills](/anthropics/skills)/skill-creator

# skill-creator

[Agent workflows](/topic/agent-workflows)

Installation

CommandPrompt

`$ npx skills add https://github.com/anthropics/skills --skill skill-creator`

Summary

**Create, test, and iteratively improve AI agent skills with structured evaluation and benchmarking.**

* Guides you through the full skill development lifecycle: intent capture, drafting, test case creation, evaluation, and iteration based on user feedback
* Runs parallel test cases with and without the skill to measure impact, capturing timing and token usage for quantitative comparison
* Generates an interactive browser-based reviewer showing outputs, qualitative feedback, and benchmark metrics (pass rates, latency, token efficiency) across iterations
* Includes description optimization to improve skill triggering accuracy by testing 20 realistic trigger/non-trigger queries and iterating the description through up to 5 rounds

SKILL.md

# Skill Creator

A skill for creating new skills and iteratively improving them.

At a high level, the process of creating a skill goes like this:

* Decide what you want the skill to do and roughly how it should do it
* Write a draft of the skill
* Create a few test prompts and run claude-with-access-to-the-skill on them
* Help the user evaluate the results both qualitatively and quantitatively
  + While the runs happen in the background, draft some quantitative evals if there aren't any (if there are some, you can either use as is or modify if you feel something needs to change about them). Then explain them to the user (or if they already existed, explain the ones that already exist)
  + Use the `eval-viewer/generate_review.py` script to show the user the results for them to look at, and also let them look at the quantitative metrics
* Rewrite the skill based on feedback from the user's evaluation of the results (and also if there are any glaring flaws that become apparent from the quantitative benchmarks)
* Repeat until you're satisfied
* Expand the test set and try again at larger scale

Your job when using this skill is to figure out where the user is in this process and then jump in and help them progress through these stages. So for instance, maybe they're like "I want to make a skill for X". You can help narrow down what they mean, write a draft, write the test cases, figure out how they want to evaluate, run all the prompts, and repeat.

On the other hand, maybe they already have a draft of the skill. In this case you can go straight to the eval/iterate part of the loop.

Show more

Related skills

## More in [Agent workflows](/topic/agent-workflows)

* [### find-skills

  Discover and install skills from skills.sh directly inside an agent session

  vercel-labs/skills](/vercel-labs/skills/find-skills)
* [### agent-browser

  Full browser automation: navigate, click, fill forms, extract data, and screenshot

  vercel-labs/agent-browser](/vercel-labs/agent-browser/agent-browser)
* [### brainstorming

  Structured ideation and problem decomposition frameworks

  obra/superpowers](/obra/superpowers/brainstorming)
* [### browser-use

  Browser automation with visual understanding — interacts with pages based on what it sees

  browser-use/browser-use](/browser-use/browser-use/browser-use)
* [### systematic-debugging

  Hypothesis-driven debugging loop: observe, hypothesize, test, verify

  obra/superpowers](/obra/superpowers/systematic-debugging)

Installs

330.1K

Repository

[anthropics/skills](https://github.com/anthropics/skills "anthropics/skills")

GitHub Stars

164.3K

First Seen

Jan 19, 2026

Security Audits

[Gen Agent Trust HubPass](/anthropics/skills/skill-creator/security/agent-trust-hub)[SocketPass](/anthropics/skills/skill-creator/security/socket)[SnykPass](/anthropics/skills/skill-creator/security/snyk)