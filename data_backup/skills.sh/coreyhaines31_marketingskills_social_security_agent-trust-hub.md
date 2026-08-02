--- source: https://skills.sh/coreyhaines31/marketingskills/social/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[social](/coreyhaines31/marketingskills/social)/Gen Agent Trust Hub

# social

Pass

Audited by Gen Agent Trust Hub on May 14, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill provides comprehensive instructions for social media content creation, repurposing, and engagement. It does not perform any network operations, access sensitive system files, or execute external code.
* **[INDIRECT\_PROMPT\_INJECTION]:** The skill is designed to process untrusted external data such as blog posts, podcast transcripts, and webinar recordings to repurpose them into social media posts. 1. Ingestion points: The 'Content Repurposing System' section in SKILL.md and the 'Reverse Engineering' section in references/reverse-engineering.md involve processing user-provided text or data scraped from social media platforms. 2. Boundary markers: No specific delimiters or instructions to ignore embedded commands are present in the guidelines for processing this external data. 3. Capability inventory: The skill is limited to text generation and analysis; it does not have access to tools for file system modification, network requests, or code execution. 4. Sanitization: No input validation or sanitization routines are specified for the processed content.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 14, 2026, 05:12 AM