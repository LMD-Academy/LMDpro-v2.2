--- source: https://skills.sh/coreyhaines31/marketingskills/product-marketing-context/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[marketingskills](/coreyhaines31/marketingskills)/[product-marketing-context](/coreyhaines31/marketingskills/product-marketing-context)/Gen Agent Trust Hub

# product-marketing-context

Pass

Audited by Gen Agent Trust Hub on Mar 5, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** All identified operations are local file system reads and writes consistent with the skill's stated purpose of managing marketing documentation. No suspicious commands or privileged operations are present.- **[PROMPT\_INJECTION]:** The skill possesses a surface for indirect prompt injection as it ingests untrusted content from the codebase to influence its drafting logic. 1. Ingestion points: Local repository files including README, landing pages, and package.json. 2. Boundary markers: Absent. 3. Capability inventory: File system read and write access to the project directory. 4. Sanitization: Absent. The security risk is assessed as negligible because the skill lacks high-risk capabilities like network connectivity or arbitrary code execution.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Mar 5, 2026, 09:21 AM