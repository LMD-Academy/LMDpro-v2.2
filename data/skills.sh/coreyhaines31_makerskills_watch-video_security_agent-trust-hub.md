# watch-video

[//]: # (source: [skills.sh](https://skills.sh/coreyhaines31/makerskills/watch-video/security/agent-trust-hub))

[skills](/)/[coreyhaines31](/coreyhaines31)/[makerskills](/coreyhaines31/makerskills)/[watch-video](/coreyhaines31/makerskills/watch-video)/Gen Agent Trust Hub

Warn

Audited by Gen Agent Trust Hub on Jul 11, 2026

Risk Level: MEDIUMCOMMAND\_EXECUTIONEXTERNAL\_DOWNLOADSDATA\_EXFILTRATIONPROMPT\_INJECTION

Full Analysis

* **[COMMAND\_EXECUTION]:** The skill instructs the agent to execute shell commands (e.g., `yt-dlp`, `ffprobe`, `ffmpeg`, and `python3 -c`) using variables derived from external input such as URLs and file paths. If the agent fails to properly escape or sanitize these inputs, it could lead to command injection vulnerabilities.
* Evidence: `yt-dlp ... "<url>"`, `ffprobe ... "<file>"`, and `python3 -c "import mlx_whisper; mlx_whisper.transcribe('<file>', ...)"`.
* **[EXTERNAL\_DOWNLOADS]:** The skill downloads video content from third-party URLs using the `yt-dlp` tool. While this is the intended functionality, it involves fetching and storing large amounts of untrusted binary data from various external platforms.
* **[DATA\_EXFILTRATION]:** In multimodal mode, the skill uploads video files to Google's Gemini API using `curl` and an environment-stored API key. While necessary for the feature, this involves sending local video data to an external service.
* Evidence: `curl -s -X POST "https://generativelanguage.googleapis.com/upload/v1beta/files?key=$GEMINI_API_KEY" ...`.
* **[PROMPT\_INJECTION]:** The skill possesses an indirect prompt injection surface by processing untrusted data from video transcripts and metadata. This content is then fed into Claude or Gemini models, which could potentially trigger unintended agent behaviors if malicious instructions are embedded in the video's content.
* **Ingestion points**: Video metadata (titles/descriptions) from `yt-dlp` and transcript text from external platforms or local transcription tools.
* **Boundary markers**: The prompts provided for the vision and multimodal passes lack clear delimiters or instructions to ignore embedded commands within the analyzed content.
* **Capability inventory**: The agent has the ability to write files to the user's Documents folder, execute shell commands for media processing, and perform network requests to AI APIs.
* **Sanitization**: The skill includes basic cleaning for YouTube VTT files using `awk`, but does not mention sanitizing metadata or overall transcript text for injection patterns.

Audit Metadata

Risk Level
:   MEDIUM

Analyzed
:   Jul 11, 2026, 09:45 PM
