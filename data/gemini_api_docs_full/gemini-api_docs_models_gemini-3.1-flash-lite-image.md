# Gemini 3.1 Flash Lite Image

[//]: # (source: [ai.google.dev](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite-image))

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

**Nano Banana 2 Lite** is designed as the efficiency specialist of the image
generation family, offering ultra-low latency and cost-effective image
generation and editing. By targeting a sub-2 second latency and significantly
reduced TPU compute costs, this model enables high-volume interactive developer
use cases and real-time consumer applications.

**Key capabilities:**

* **Sub-2 second end-to-end latency**
* **Interleaved generation and editing** with native support for Text -> Text + Image(s) and Image + Text -> Text + Image(s).
* **Optimized for lower resolutions** of 1K (1024x1024px).
* Supports a discrete set of **14 aspect ratios** including standard formats.
* **Fast multi-turn local edits** (swapping colors, sticker creation, background adjustments).
* Maintains high character alignment matching original Nano Banana standards.
* New `1:1`, `3:2`, `2:3`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9` aspect ratios.
* Supported `image_size` values: `1024px` (1K). *(Note: 2K and 4K are unsupported).*
* **SynthID (Always On) + C2PA** watermarking.

[Try in Google AI Studio](https://aistudio.google.com?model=gemini-3.1-flash-lite-image)

## Documentation

Visit the [Image generation](/gemini-api/docs/image-generation) page for full
coverage of features and capabilities.

## gemini-3.1-flash-lite-image

| Property | Description |
| --- | --- |
| id\_cardModel code | `gemini-3.1-flash-lite-image` |
| saveSupported data types | **Inputs**  Text and Image  **Output**  Image and Text |
| token\_autoToken limits[[\*]](/gemini-api/docs/tokens) | **Input token limit**  65,536  **Output token limit**  4,096 |
| handymanCapabilities | **Audio generation**  Not supported  **Batch API**  Supported  **Caching**  Not supported  **Code execution**  Not supported  **File search**  Not supported  **Function calling**  Supported  **Grounding with Google Maps**  Not supported  **Grounding with Google Search**  Not supported  **Image editing**  Supported  **Image generation**  Supported  **Live API**  Not supported  **Search grounding**  Not supported  **Structured outputs**  Not supported  **Thinking**  Supported (minimal and high)  **URL context**  Not supported |
| 123Versions | Read the [model version patterns](/gemini-api/docs/models/gemini#model-versions) for more details.  * Stable: `gemini-3.1-flash-lite-image` |
| calendar\_monthLatest update | June 2026 |
| id\_cardModel card | [Model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite-image/) |

Send feedback
