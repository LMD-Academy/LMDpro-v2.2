--- source: https://skills.sh/get-convex/agent-skills/convex-setup-auth/security/agent-trust-hub ---

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/[convex-setup-auth](/get-convex/agent-skills/convex-setup-auth)/Gen Agent Trust Hub

# convex-setup-auth

Pass

Audited by Gen Agent Trust Hub on May 1, 2026

Risk Level: SAFE

Full Analysis

* **[SAFE]:** The skill provides workflows for integrating well-known and trusted authentication services including Auth0, Clerk, WorkOS, and Convex's own authentication solution. All external links point to official documentation and domains associated with these services.- **[SAFE]:** Security best practices are promoted, specifically demonstrating how to protect backend functions by verifying user identities server-side rather than relying on client-provided arguments.- **[SAFE]:** Configuration steps involve standard environment variable management and the use of official CLI tools (e.g., npx convex, auth0-cli) to perform mechanical setup tasks.- **[SAFE]:** No malicious patterns such as prompt injection, credential harvesting, or unauthorized data exfiltration were detected within the skill's instructions or logic.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 1, 2026, 04:55 AM