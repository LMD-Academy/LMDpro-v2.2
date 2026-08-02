--- source: https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-image ---

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

* [Home](https://ai.google.dev/)
* [Gemini API](https://ai.google.dev/gemini-api)
* [Docs](https://ai.google.dev/gemini-api/docs)

Send feedback

# Gemini 3.1 Flash Image



**Nano Banana 2** provides high-quality image generation and conversational
editing at a mainstream price point and low latency. It serves as the
high-efficiency counterpart to [Gemini 3 Pro Image](/gemini-api/docs/models/gemini-3-pro-image), optimized for speed and
high-volume developer use cases.

**Key updates:**

* New output resolution options:
  + New support for 0.5K, 2K and 4K, default 1K
* New Image Search Grounding:
  + Integration of both text and image search results to inform generation with
    real-time web data
  + Supported with Thinking on or off
* New 1:4, 4:1, 1:8 and 8:1 aspect ratios
* Improved aspect ratio adherence
* Improved image quality and consistency
* Improved i18n text rendering

[Try in Google AI Studio](https://aistudio.google.com?model=gemini-3.1-flash-image)

## Documentation

Visit the [Image generation](/gemini-api/docs/image-generation) page for full
coverage of features and capabilities.

## gemini-3.1-flash-image

| Property | Description |
| --- | --- |
| id\_cardModel code | `gemini-3.1-flash-image` |
| saveSupported data types | **Inputs**  Text and Image / PDF  **Output**  Image and Text |
| token\_autoToken limits[[\*]](/gemini-api/docs/tokens) | **Input token limit**  131,072  **Output token limit**  32,768 |
| handymanCapabilities | **[Audio generation](/gemini-api/docs/speech-generation)**  Not supported  **[Caching](/gemini-api/docs/caching)**  Not supported  **[Code execution](/gemini-api/docs/code-execution)**  Not supported  **[File search](/gemini-api/docs/file-search)**  Not supported  **[Function calling](/gemini-api/docs/function-calling)**  Not supported  **[Grounding with Google Maps](/gemini-api/docs/maps-grounding)**  Not supported  **[Image generation](/gemini-api/docs/image-generation)**  Supported  **[Live API](/gemini-api/docs/live-api)**  Not supported  **[Search grounding](/gemini-api/docs/google-search)**  Supported  **[Structured outputs](/gemini-api/docs/structured-output)**  Not supported  **[Thinking](/gemini-api/docs/thinking)**  Supported  **[URL context](/gemini-api/docs/url-context)**  Not supported |
| speedConsumption options | **[Batch API](/gemini-api/docs/batch-api)**  Supported  **[Flex inference](/gemini-api/docs/flex-inference)**  Not supported  **[Priority inference](/gemini-api/docs/priority-inference)**  Not supported |
| 123Versions | Read the [model version patterns](/gemini-api/docs/models/gemini#model-versions) for more details.  * Stable: `gemini-3.1-flash-image` |
| calendar\_monthLatest update | February 2026 |
| id\_cardModel card | [Model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-image/) |




Send feedback