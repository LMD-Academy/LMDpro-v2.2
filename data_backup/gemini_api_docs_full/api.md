--- source: https://ai.google.dev/api ---

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

* [Home](https://ai.google.dev/)
* [Gemini API](https://ai.google.dev/gemini-api)
* [API reference](https://ai.google.dev/api)

Send feedback

# Gemini API reference



This API reference describes the unary, streaming, and real-time APIs you can
use to interact with the Gemini models. You can use the REST APIs in any
environment that supports HTTP requests. Refer to the
[Get started guide](https://ai.google.dev/gemini-api/docs/get-started)
for how to get started with your first API call. If you're looking for
the references for our language-specific libraries and SDKs, go to the
link for that language in the left navigation under **SDK references**.

## Primary endpoints

The Gemini API is organized around the following major endpoints:

* **Interactions ([`CreateInteraction`](/api/interactions-api#CreateInteraction)) (Recommended):**
  The recommended standard primitive for building with Gemini, optimized for
  agentic workflows, server-side state management, and complex multi-modal,
  multi-turn conversations.
* **Standard content generation ([`generateContent`](/api/generate-content#method:-models.generatecontent)):**
  A standard REST endpoint that processes your request and returns the model's
  full response in a single package. This is best for non-interactive tasks
  where you can wait for the entire result.
* **Streaming content generation ([`streamGenerateContent`](/api/generate-content#method:-models.streamgeneratecontent)):**
  Uses Server-Sent Events (SSE) to push chunks of the response to you as they
  are generated. This provides a faster, more interactive experience for
  applications like chatbots.
* **Live API ([`BidiGenerateContent`](/api/live#send-messages)):** A stateful WebSocket-based
  API for bi-directional streaming, designed for real-time conversational use
  cases.
* **Batch mode ([`batchGenerateContent`](/api/batch-mode)):** A standard REST
  endpoint for submitting batches of `generateContent` requests.
* **Embeddings ([`embedContent`](/api/embeddings)):** A standard REST endpoint
  that generates a text embedding vector from the input `Content`.
* **Gen Media APIs:** Endpoints for generating media with our specialized
  models such as [Imagen for image generation](/api/models#method:-models.predict),
  and [Veo for video generation](/api/models#method:-models.predictlongrunning).
  Gemini also has these capabilities built in which you can access using the
  `generateContent` API.
* **Platform APIs:** Utility endpoints that support core capabilities such as
  [uploading files](/api/files), and [counting tokens](/api/tokens).

## Authentication

All requests to the Gemini API must include a `x-goog-api-key` header with your
API key. Create one with a few clicks in [Google AI
Studio](https://aistudio.google.com/apikey).

The following is an example request with the API key included in the header:

```
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'
```

For instructions on how to pass your key to the API using Gemini SDKs,
see the [Using Gemini API keys](/gemini-api/docs/api-key) guide.




Send feedback