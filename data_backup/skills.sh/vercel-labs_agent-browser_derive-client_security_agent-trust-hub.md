--- source: https://skills.sh/vercel-labs/agent-browser/derive-client/security/agent-trust-hub ---

[skills](/)/[vercel-labs](/vercel-labs)/[agent-browser](/vercel-labs/agent-browser)/[derive-client](/vercel-labs/agent-browser/derive-client)/Gen Agent Trust Hub

# derive-client

Pass

Audited by Gen Agent Trust Hub on Jul 20, 2026

Risk Level: SAFE

Full Analysis

* **[Data Handling Considerations]:** The skill facilitates the recording of network traffic into HAR files and the extraction of session cookies. Because these files can contain authentication tokens and private data, the skill includes a specific 'Caveats' section advising users to treat these files as secrets, delete them when finished, and avoid hardcoding credentials in any generated scripts.
* **[Processing External Data]:** The skill involves parsing and analyzing responses (JSON, HTML, etc.) from external websites to identify API endpoints. While this involves processing untrusted content from the web, the skill follows a standard reverse-engineering methodology and includes verification steps to confirm the accuracy of the derived client.
* **[Automated Code Generation]:** The primary function of this skill is to generate standalone scripts or libraries based on recorded interactions. This is a common automation pattern that replaces manual browser driving with direct HTTP calls, and the skill provides clear guidance on structuring these generated functions securely.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   Jul 20, 2026, 02:11 PM