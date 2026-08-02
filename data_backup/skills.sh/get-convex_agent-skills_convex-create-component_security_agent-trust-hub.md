--- source: https://skills.sh/get-convex/agent-skills/convex-create-component/security/agent-trust-hub ---

[skills](/)/[get-convex](/get-convex)/[agent-skills](/get-convex/agent-skills)/[convex-create-component](/get-convex/agent-skills/convex-create-component)/Gen Agent Trust Hub

# convex-create-component

Pass

Audited by Gen Agent Trust Hub on May 1, 2026

Risk Level: SAFECOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADSREMOTE\_CODE\_EXECUTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill uses standard Convex CLI tools, including `npx convex dev` and `npx convex codegen`, to manage development and code generation within the application's environment.
* **[EXTERNAL\_DOWNLOADS]:** Instructions reference official and well-known ecosystem packages such as `@convex-dev/auth`, `convex-helpers`, and `convex-test` to implement authentication, utility functions, and testing.
* **[REMOTE\_CODE\_EXECUTION]:** The skill recommends bootstrapping components via `npx create-convex@latest`, which is the official initialization method provided by the framework vendor.
* **[SAFE]:** Code templates and guidelines explicitly instruct users to handle sensitive operations—such as authentication and environment variable access (e.g., `OPENAI_API_KEY`)—at the application level rather than within internal components, ensuring proper security boundaries.

Audit Metadata

Risk Level
:   SAFE

Analyzed
:   May 1, 2026, 04:55 AM