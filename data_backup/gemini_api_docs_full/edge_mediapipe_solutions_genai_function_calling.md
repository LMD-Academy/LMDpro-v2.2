--- source: https://ai.google.dev/edge/mediapipe/solutions/genai/function_calling ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# AI Edge Function Calling guide Stay organized with collections Save and categorize content based on your preferences.



**Deprecated:** AI Edge Function Calling SDK is still available, but we recommend migrating to
[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM/tree/main).

The AI Edge Function Calling SDK (FC SDK) is a library that enables developers
to use function calling with on-device LLMs. Function calling lets you connect
models to external tools and APIs, enabling models to call specific functions
with the necessary parameters to execute real-world actions.

Rather than just generating text, an LLM using the FC SDK can generate a
structured call to a function that executes an action, such as searching for
up-to-date information, setting alarms, or making reservations.

The AI Edge FC SDK is available for Android and can be run completely on-device
with the LLM Inference API. Start using the SDK by following the [Android
guide](https://developers.google.com/edge/mediapipe/solutions/genai/function_calling/android), which walks you through a basic implementation of a sample
application using function calling.

## Function calling pipeline

Setting up an on-device LLM with function calling capabilities requires the
following key steps:

1. **Define function declarations**: The structure and parameters of the
   functions that the LLM can call must be defined in your application code.
   This includes specifying function names, parameters, and types.
2. **Format prompts and outputs**: Input and output text can contain natural
   language and function calls. A formatter controls how data structures are
   converted to and from strings, enabling the LLM to appropriately format
   information.
3. **Parse outputs**: A parser detects if the generated response contains a
   function call and parses it into a structured data type so that the
   application can execute the function call.
4. **Examine responses**: If the parser detects a function call, the
   application calls the function with the appropriate parameters and
   structured data type. Otherwise, it returns natural language text.

## Key components

The FC SDK contains to following key components:

* **Inference Backend**: An interface for running inference on a generative AI
  model. The FC SDK uses the LLM Inference API to execute inference on LiteRT
  (TFLite) models. The API uses the
  [InferenceBackend](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/function_calling/java/com/google/ai/edge/localagents/fc/InferenceBackend.java)
  interface.
* **Prompt Formatter**: An interface for formatting requests and responses to
  and from the Generative AI model. The FC SDK provides a formatter that
  converts function declarations into the model-specific format required by
  the LLM and inserts them into the system prompt. The formatter also handles
  model-specific tokens to indicate user and model turns. The API uses the
  [ModelFormatter](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/function_calling/java/com/google/ai/edge/localagents/fc/ModelFormatter.java)
  interface.
* **Output Parser**: The FC SDK provides a parser that detects if the model's
  output represents a function call and parses it into a data structure for
  use by the application. The API uses the
  [ModelFormatter](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/function_calling/java/com/google/ai/edge/localagents/fc/ModelFormatter.java)
  interface.
* **Constrained Decoding**: An interface for creating and managing constraints
  to ensure that the generated output adheres to specific rules or conditions.
  For supported models, the FC SDK will configure the inference backend to use
  constrained decoding, which ensures that the model only outputs valid
  function names and parameters. The API uses the
  [ConstraintProvider](https://github.com/google-ai-edge/ai-edge-apis/blob/main/local_agents/function_calling/java/com/google/ai/edge/localagents/fc/ConstraintProvider.java)
  interface.






Send feedback