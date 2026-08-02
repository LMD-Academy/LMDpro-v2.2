--- source: https://skills.sh/coreyhaines31/makerskills/read-book/security/agent-trust-hub ---

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[read-book](/coreyhaines31/makerskills/read-book)/Gen Agent Trust Hub

# read-book

Warn

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: MEDIUMCOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADSPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill constructs and executes multiple shell commands using variables derived from input filenames and metadata which could be exploited if filenames are maliciously crafted.
* Evidence: Templates in `SKILL.md` and `references/sources.md` such as `pdfinfo "<pdf>"`, `pdftotext -layout "<pdf>"`, `pandoc "<book.epub>"`, and `ebook-convert "<book.mobi>"` indicate direct use of file paths in shell commands.
* Risk: Improperly sanitized file paths containing shell metacharacters could lead to arbitrary command execution on the host system.
* **[EXTERNAL\_DOWNLOADS]:** The skill utilizes the `WebFetch` tool to retrieve content from external websites.
* Evidence: `SKILL.md` (Step 1) and `references/sources.md` detail fetching public-domain texts from Project Gutenberg and Archive.org via URLs.
* Risk: While targeting well-known public domain sites is generally safe, processing arbitrary external URLs for content ingestion is a standard security risk vector.
* **[PROMPT\_INJECTION]:** The skill exhibits a significant indirect prompt injection surface as it ingests large volumes of untrusted text from external sources.
* Ingestion points: PDF, EPUB, MOBI files, and text fetched from URLs via `WebFetch` (as documented in `references/sources.md`).
* Boundary markers: Absent. There are no instructions or delimiters designed to isolate the extracted book text or prevent the agent from following malicious commands embedded within the text.
* Capability inventory: The skill can execute shell commands (`pandoc`, `pdftotext`), access the file system (reading and writing to `~/Documents/books/`), and perform network requests (`WebFetch`).
* Sanitization: Absent. The skill does not mention any validation, filtering, or escaping of the content extracted from books before it is processed by the AI model.

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 11, 2026, 09:45 PM