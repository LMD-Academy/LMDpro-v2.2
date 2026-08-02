--- source: https://www.rtrvr.ai/docs/ ---

Getting StartedOverview

Copy page

# Overview

DOM-native AI web agent platform for browser automation

rtrvr.ai is a DOM-native AI web agent platform. Give it a task in plain English, and an AI agent executes it in a real browser — clicking, typing, navigating, and extracting data autonomously. Built by ex-Google engineers, it uses proprietary Smart DOM Trees and Chrome Extension APIs to achieve industry-leading accuracy without the detection issues of CDP-based solutions.

## Core Advantages

#### DOM-Native Intelligence

Text-only DOM trees instead of screenshots. Avoids bot detection, handles JS-heavy SPAs, faster than vision-based agents.

#### 81.4% Benchmark Accuracy

State-of-the-art on WebBench. Competitors score 40–66%. Built with Chrome Extension APIs, not detectable CDP.

#### No Polling Required

API responses return inline. No session management or async polling loops — simpler integration, lower latency.

#### Cookie Syncing

Sync your logged-in browser sessions from the Extension to Cloud browsers. Access authenticated sites at scale.

## What rtrvr.ai Handles

#### Data Extraction at Scale

Extract structured data from dynamic websites without building custom scrapers. Handles pagination, infinite scroll, and JS-rendered content.

#### Form Automation

Navigate multi-step forms with conditional logic. Upload files, fill fields, and submit — autonomously.

#### E-commerce Workflows

Search products, compare prices, add items to cart — all through natural language.

#### Lead Enrichment

Visit company websites row-by-row, extract contacts, funding data, and tech stack info into your CRM.

#### Web Monitoring

Schedule recurring checks on competitor pricing, content changes, or stock levels with alerts.

#### QA & Adaptive Testing

Test web apps without brittle selectors. The agent adapts to UI changes automatically.

Example prompts:

"Extract all product prices from this e-commerce page, including pagination"

"Visit each company website in my spreadsheet and extract CEO name and employee count"

"Fill out this multi-step insurance form using the attached JSON data"

"Monitor competitor pricing daily and alert me via Slack when prices drop"

## Integration Options

Choose the integration method that fits your stack. All share the same authentication and credit system.

[#### Chrome Extension

Most powerful. Uses your logged-in browser — cookies, SSO, internal sessions. Record workflows and replay them.](/docs/mcp)[#### Cloud Platform

Managed browser cluster. Scale to thousands of URLs. Live VNC streaming. No local resources consumed.](/cloud)[#### REST API

/agent for end-to-end workflows, /scrape for raw DOM extraction. JSON in, JSON out. No polling needed.](/docs/api)[#### CLI & SDK

Unified CLI for cloud & extension. One command to run agents, scrape pages, and configure MCP.](/docs/cli)[#### MCP Server

Expose your browser as tools for Claude Desktop, Cline, or any MCP client. OAuth + API key auth.](/docs/mcp)[#### Webhooks

Real-time notifications when tasks complete or data is ready.](/docs/agent#webhooks)[#### n8n / Make / Zapier

Direct HTTP integration with no-code platforms. No polling — results returned inline or via webhook.](/docs/integrations)

| Method | Best For | Auth Sites |
| --- | --- | --- |
| Chrome Extension | Logged-in automation, recording workflows | ✅ Yes |
| Cloud Platform | Scaling to 1000s of URLs | ✅ With cookie sync |
| REST API /agent | Programmatic end-to-end tasks | Via cloud browsers |
| REST API /scrape | Raw DOM for your own LLM pipeline | Via cloud browsers |
| MCP Server | Claude Desktop, Cline, MCP clients | ✅ Your browser |
| Webhooks | Async triggers from n8n, Zapier, Make | Depends on endpoint |

## Live Streaming & VNC

Cloud browser sessions provide a live stream URL you can embed in your own dashboards or watch directly. Take over sessions manually with full VNC interactive control when the agent needs human intervention — for credentials, CAPTCHAs, or edge cases.

💡 Embedding live views

Every cloud task returns a `liveUrl` you can iframe into any application for real-time monitoring.

## Cookie Syncing

Sync your authenticated browser sessions from the Chrome Extension to Cloud browsers. This lets you run automations on login-protected sites (Gmail, Salesforce, LinkedIn) at scale using your real cookies — no credential storage needed.

Agent API with synced sessionCopy

```
// Cloud tasks automatically use synced cookies
{
  "input": "Export my last 30 days of orders from the vendor portal",
  "urls": ["https://vendor-portal.com/orders"],
  "response": { "verbosity": "final" }
}
```

## Get Started

[#### Quick Start

First task in 2 minutes](/docs/quick-start)[#### API Reference

Complete endpoint docs](/docs/api)[#### Integrations

n8n, Make, Zapier guides](/docs/integrations)[#### Webhooks

Async notification setup](/docs/webhooks)

#### Use rtrvr.ai in Claude Code or Codex

Download the rtrvr.ai skill — the full docs bundled for coding agents to load on demand. Unzip into `~/.claude/skills/` or `~/.codex/skills/`.

 [Download skill (.zip)](/rtrvr-ai-skill.zip)

[Next

Quick Start](/docs/quick-start)

#### On this page

[Core Advantages](#core-advantages)[What rtrvr.ai Handles](#what-rtrvr-handles)[Integration Options](#integration-options)[Live Streaming & VNC](#live-streaming)[Cookie Syncing](#cookie-sync)[Get Started](#get-started)