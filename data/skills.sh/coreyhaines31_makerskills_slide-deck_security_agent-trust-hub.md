# slide-deck

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/slide-deck/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[slide-deck](/coreyhaines31/makerskills/slide-deck)/Gen Agent Trust Hub

Pass

Audited by Gen Agent Trust Hub on Jul 10, 2026

Risk Level: SAFEEXTERNAL\_DOWNLOADSCOMMAND\_EXECUTIONREMOTE\_CODE\_EXECUTIONDATA\_EXFILTRATION

Full Analysis

* **[EXTERNAL\_DOWNLOADS]:** The skill references and automates the installation of standard industry packages from NPM and PyPI, including Playwright, Vercel CLI, python-pptx, and img2pdf. These resources are from well-known services and registries.
* **[COMMAND\_EXECUTION]:** Shell commands are used to inspect the local environment (e.g., identifying active ports with lsof), manage files (archiving deck metadata in the user's config directory), and manage the Next.js development server.
* **[REMOTE\_CODE\_EXECUTION]:** The skill performs dynamic execution by generating a Playwright automation script from an internal template and running it with Node.js to capture slide snapshots. It also executes a Python script to extract data from PowerPoint files.
* **[DATA\_EXFILTRATION]:** The export functionality includes a feature to deploy standalone slide decks to Vercel's hosting platform. While this involves sending local data to a remote service, it is a core feature of the skill and uses the official Vercel CLI.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 10, 2026, 11:01 PM
