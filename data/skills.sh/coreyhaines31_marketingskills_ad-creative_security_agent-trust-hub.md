# ad-creative

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/marketingskills/ad-creative/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[ad-creative](/coreyhaines31/marketingskills/ad-creative)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on May 19, 2026

Risk Level: SAFEPROMPT\_INJECTIONEXTERNAL\_DOWNLOADSREMOTE\_CODE\_EXECUTIONCOMMAND\_EXECUTION

Full Analysis

* **[PROMPT\_INJECTION]:** The skill's 'Iterate from Performance Data' mode involves processing external data (CSV, API output, or text) to identify winning patterns. This creates an attack surface for indirect prompt injection where malicious instructions could be embedded in the provided data.
* **Ingestion points**: Performance data provided via CSV files, text blocks, or API responses as described in `SKILL.md`.
* **Boundary markers**: The instructions lack explicit delimiters or specific directives for the agent to ignore any natural language instructions found within the performance data.
* **Capability inventory**: The skill utilizes various advertising platform tools (`google-ads`, `meta-ads`, `linkedin-ads`, `tiktok-ads`) and generates content used in campaign management.
* **Sanitization**: There are no documented steps for validating or sanitizing the ingested performance metrics or ad text data.
* **[EXTERNAL\_DOWNLOADS]:** The reference documentation recommends the use of several external services and repositories.
* It provides instructions to clone the `voicebox` repository from GitHub (`jamiepine/voicebox`) for local voice synthesis.
* It mentions using `npx` to fetch and run the `create-video` and `remotion` packages from the npm registry.
* It lists multiple well-known AI providers (Google, OpenAI, ElevenLabs, Replicate) for image and video generation.
* **[REMOTE\_CODE\_EXECUTION]:** The workflow for scaled video production suggests using generative AI to create React components that are then executed and rendered by the Remotion framework. Executing dynamically generated code is a known risk factor, although it is a functional requirement for the described video automation process.
* **[COMMAND\_EXECUTION]:** The skill documentation includes examples of executing shell commands to interact with advertising APIs and media processing tools.
* Commands for interacting with platform CLIs (e.g., `node tools/clis/google-ads.js reports get`).
* Media processing commands using `ffmpeg` for combining video and audio tracks.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 19, 2026, 01:23 AM
