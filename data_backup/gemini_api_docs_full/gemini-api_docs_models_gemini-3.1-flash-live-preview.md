--- source: https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-live-preview ---

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

* [Home](https://ai.google.dev/)
* [Gemini API](https://ai.google.dev/gemini-api)
* [Docs](https://ai.google.dev/gemini-api/docs)

Send feedback

# Gemini 3.1 Flash Live Preview



Gemini 3.1 Flash Live Preview is our low-latency, audio-to-audio model optimized
for real-time dialogue and voice-first AI applications with acoustic nuance
detection, numeric precision, and multimodal awareness.

[Try in Google AI Studio](https://aistudio.google.com/live?model=gemini-3.1-flash-live-preview)

## Documentation

Visit the [Live API](/gemini-api/docs/live-api) guide for full coverage
of features and capabilities.

## gemini-3.1-flash-live-preview

| Property | Description |
| --- | --- |
| id\_cardModel code | `gemini-3.1-flash-live-preview` |
| saveSupported data types | **Inputs**  Text, images, audio, video  **Output**  Text and audio |
| token\_autoToken limits[[\*]](/gemini-api/docs/tokens) | **Input token limit**  131,072  **Output token limit**  65,536 |
| handymanCapabilities | **[Audio generation](/gemini-api/docs/speech-generation)**  Supported  **[Caching](/gemini-api/docs/caching)**  Not supported  **[Code execution](/gemini-api/docs/code-execution)**  Not supported  **[File search](/gemini-api/docs/file-search)**  Not Supported  **[Function calling](/gemini-api/docs/function-calling)**  Supported  **[Grounding with Google Maps](/gemini-api/docs/maps-grounding)**  Not supported  **[Image generation](/gemini-api/docs/image-generation)**  Not supported  **[Live API](/gemini-api/docs/live-api)**  Supported  **[Search grounding](/gemini-api/docs/google-search)**  Supported  **[Structured outputs](/gemini-api/docs/structured-output)**  Not supported  **[Thinking](/gemini-api/docs/thinking)**  Supported  **[URL context](/gemini-api/docs/url-context)**  Not supported |
| speedConsumption options | **[Batch API](/gemini-api/docs/batch-api)**  Not supported |
| 123Versions | Read the [model version patterns](/gemini-api/docs/models/gemini#model-versions) for more details.  * Preview: `gemini-3.1-flash-live-preview` |
| calendar\_monthLatest update | March 2026 |
| id\_cardModel card | [Model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-audio/) |

## Migrating from Gemini 2.5 Flash Live

Gemini 3.1 Flash Live Preview is optimized for low-latency, real-time dialogue.
When migrating from `gemini-2.5-flash-native-audio-preview-12-2025`, consider
the following:

* **Model string**: Update your model string from
  `gemini-2.5-flash-native-audio-preview-12-2025` to
  `gemini-3.1-flash-live-preview`.
* **Thinking configuration**: Gemini 3.1 uses `thinkingLevel` (with settings
  like `minimal`, `low`, `medium`, and `high`) instead of `thinkingBudget`.
  The default is `minimal` to optimize for lowest latency. See
  [Thinking levels and budgets](/gemini-api/docs/thinking#levels-budgets).
* **Server events**: A single
  [`BidiGenerateContentServerContent`](/api/live#bidigeneratecontentservercontent)
  event can now contain multiple content parts simultaneously (for example,
  audio chunks and transcript). Update your code to process all parts in each
  event to avoid missing content.
* **Client content**: `send_client_content` is only supported for seeding
  initial context history (requires setting
  [`initial_history_in_client_content`](/api/live#HistoryConfig) in
  [`history_config`](/api/live#BidiGenerateContentSetup)). Use
  [`send_realtime_input`](/api/live#bidigeneratecontentrealtimeinput) to send
  text updates during the conversation. See
  [Incremental content updates](/gemini-api/docs/live-guide#incremental-updates).
* **Turn coverage**: Defaults to
  [`TURN_INCLUDES_AUDIO_ACTIVITY_AND_ALL_VIDEO`](/api/live#turncoverage) instead of
  `TURN_INCLUDES_ONLY_ACTIVITY`. The model's turn now includes detected
  audio activity and all video frames. If your application currently sends a constant stream of video frames, you may want to update your application to only send video frames when there is audio activity to avoid incurring additional costs.
* **Async function calling**: Not yet supported. Function calling is
  synchronous only. The model will not start responding until you've sent
  the tool response. See
  [Async function calling](/gemini-api/docs/live-tools#async-function-calling).
* **Proactive audio and affective dialogue**: These features are not yet
  supported in Gemini 3.1 Flash Live. Remove any configuration for these
  features from your code. See
  [Proactive audio](/gemini-api/docs/live-guide#proactive-audio) and
  [Affective dialogue](/gemini-api/docs/live-guide#affective-dialog).

For a detailed feature comparison, see the
[Model comparison](/gemini-api/docs/live-guide#model-comparison) table in the
capabilities guide.




Send feedback