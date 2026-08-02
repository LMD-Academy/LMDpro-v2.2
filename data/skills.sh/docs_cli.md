# CLI Reference

[//]: # (source: [skills.sh](https://skills.sh/docs/cli))

The `skills` CLI is the primary way to install and manage skills for your AI agents.

## Installation

The CLI can be run directly with npx—no installation required:

```
npx skills add <skill-name>
```

## Basic usage

Install a skill by specifying the owner and skill name:

```
npx skills add vercel-labs/agent-skills
```

This downloads the skill and configures it for use with your AI agent.

## Examples

Install the agent skills collection:

```
npx skills add vercel-labs/agent-skills
```

## Telemetry

By default, the CLI collects anonymous telemetry data to help rank skills on the leaderboard. This data includes the skill name, skill files, and a timestamp—no personal or device information is collected.

To opt out, set the `DISABLE_TELEMETRY=1` environment variable.
