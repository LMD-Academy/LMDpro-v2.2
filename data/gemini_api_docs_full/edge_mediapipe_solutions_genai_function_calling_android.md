# AI Edge Function Calling guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/genai/function_calling/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

**Deprecated:** AI Edge Function Calling SDK is still available, but we recommend migrating to
[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM/tree/main).**Note:** Use of the AI Edge Function Calling SDK is subject to the [Generative AI Prohibited
Use Policy](https://policies.google.com/terms/generative-ai/use-policy).

The AI Edge Function Calling SDK (FC SDK) is a library that enables developers
to use function calling with on-device LLMs. Function calling lets you connect
models to external tools and APIs, enabling models to call specific functions
with the necessary parameters to execute real-world actions.

Rather than just generating text, an LLM using the FC SDK can generate a
structured call to a function that executes an action, such as searching for
up-to-date information, setting alarms, or making reservations.

This guide walks you through a basic quickstart to add the LLM Inference API
with the FC SDK to an Android application. This guide focuses on adding function
calling capabilities to an on-device LLM. For more information on using the LLM
Inference API, see the [LLM Inference for Android
guide](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/android).

## Quickstart

Use the following steps to use the FC SDK in your Android application. This
quickstart uses the LLM Inference API with [Hammer 2.1
(1.5B)](https://huggingface.co/litert-community/Hammer2.1-1.5b). The LLM
Inference API is optimized for high-end Android devices, such as Pixel 8 and
Samsung S23 or later, and does not reliably support device emulators.

### Add dependencies

The FC SDK uses the `com.google.ai.edge.localagents:localagents-fc` library and
the LLM Inference API uses the `com.google.mediapipe:tasks-genai` library. Add
both dependencies to the `build.gradle` file of your Android app:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-genai:0.10.24'
    implementation 'com.google.ai.edge.localagents:localagents-fc:0.1.0'
}
```

For devices with Android 12 (API 31) or higher, add the native OpenCL library
dependency. For more information, see the documentation on the
[`uses-native-library`](https://developer.android.com/guide/topics/manifest/uses-native-library-element)
tag.

Add the following `uses-native-library` tags to the `AndroidManifest.xml` file:

```
<uses-native-library android:name="libOpenCL.so" android:required="false"/>
<uses-native-library android:name="libOpenCL-car.so" android:required="false"/>
<uses-native-library android:name="libOpenCL-pixel.so" android:required="false"/>
```

### Download a model

Download Hammer 1B in a 8-bit quantized format from [Hugging
Face](https://huggingface.co/litert-community/Hammer2.1-1.5b). For more
information on the available models, see the [Models
documentation](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/index#models).

Push the content of the `hammer2.1_1.5b_q8_ekv4096.task` folder to the Android
device.

```
$ adb shell rm -r /data/local/tmp/llm/ # Remove any previously loaded models
$ adb shell mkdir -p /data/local/tmp/llm/
$ adb push hammer2.1_1.5b_q8_ekv4096.task /data/local/tmp/llm/hammer2.1_1.5b_q8_ekv4096.task
```

**Note:** During development, you can use adb to push the model to your test device
for a simpler workflow. For deployment, host the model on a server and download
it at runtime. The model is too large to be bundled in an APK.

### Declare function definitions

Define the functions that will be made available to the model. To illustrate the
process, this quickstart includes two functions as static methods that return
hard-coded responses. A more practical implementation would define functions
that calls a REST API or retrieves information from a database.

The following defines the `getWeather` and `getTime` functions:

```
class ToolsForLlm {
    public static String getWeather(String location) {
        return "Cloudy, 56°F";
    }

    public static String getTime(String timezone) {
        return "7:00 PM " + timezone;
    }

    private ToolsForLlm() {}
}
```

Use `FunctionDeclaration` to describe each function, giving each a name and
description, and specifying the types. This informs the model of what the
functions do and when to make function calls.

```
var getWeather = FunctionDeclaration.newBuilder()
    .setName("getWeather")
    .setDescription("Returns the weather conditions at a location.")
    .setParameters(
        Schema.newBuilder()
            .setType(Type.OBJECT)
            .putProperties(
                "location",
                Schema.newBuilder()
                    .setType(Type.STRING)
                    .setDescription("The location for the weather report.")
                    .build())
            .build())
    .build();
var getTime = FunctionDeclaration.newBuilder()
    .setName("getTime")
    .setDescription("Returns the current time in the given timezone.")

    .setParameters(
        Schema.newBuilder()
            .setType(Type.OBJECT)
            .putProperties(
                "timezone",
                Schema.newBuilder()
                    .setType(Type.STRING)
                    .setDescription("The timezone to get the time from.")
                    .build())
            .build())
    .build();
```

Add the function declarations to a `Tool` object:

```
var tool = Tool.newBuilder()
    .addFunctionDeclarations(getWeather)
    .addFunctionDeclarations(getTime)
    .build();
```

### Create the inference backend

Create an inference backend using LLM Inference API and pass it a formatter
object for your model. The FC SDK Formatter (`ModelFormatter`) acts as both a
formatter and parser. Since this quickstart uses Gemma-3 1B, we will use
`GemmaFormatter`:

```
var llmInferenceOptions = LlmInferenceOptions.builder()
    .setModelPath(modelFile.getAbsolutePath())
    .build();
var llmInference = LlmInference.createFromOptions(context, llmInferenceOptions);
var llmInferenceBackend = new llmInferenceBackend(llmInference, new GemmaFormatter());
```

For more information, see the [LLM Inference configuration
options](https://developers.google.com/edge/mediapipe/solutions/genai/llm_inference/index##configurations_options).

### Instantiate the model

Use the `GenerativeModel` object to connect the inference backend, system
prompt, and tools. We already have the inference backend and tools, so we only
need to create the system prompt:

```
var systemInstruction = Content.newBuilder()
      .setRole("system")
      .addParts(Part.newBuilder().setText("You are a helpful assistant."))
      .build();
```

Instantiate the model with `GenerativeModel`:

```
var generativeModel = new GenerativeModel(
    llmInferenceBackend,
    systemInstruction,
    List.of(tool),
)
```

### Start a chat session

For simplicity, this quickstart starts a single chat session. You can also
create multiple, independent sessions.

Using the new instance of `GenerativeModel`, start a chat session:

```
var chat = generativeModel.startChat();
```

Send prompts to the model through the chat session, using the `sendMessage`
method:

```
var response = chat.sendMessage("How's the weather in San Francisco?");
```

### Parse the model response

After passing a prompt to the model, the application must examine the response
to determine whether to make a function call or output natural language text.

```
// Extract the model's message from the response.
var message = response.getCandidates(0).getContent().getParts(0);

// If the message contains a function call, execute the function.
if (message.hasFunctionCall()) {
  var functionCall = message.getFunctionCall();
  var args = functionCall.getArgs().getFieldsMap();
  var result = null;

  // Call the appropriate function.
  switch (functionCall.getName()) {
    case "getWeather":
      result = ToolsForLlm.getWeather(args.get("location").getStringValue());
      break;
    case "getTime":
      result = ToolsForLlm.getWeather(args.get("timezone").getStringValue());
      break;
    default:
      throw new Exception("Function does not exist:" + functionCall.getName());
  }
  // Return the result of the function call to the model.
  var functionResponse =
      FunctionResponse.newBuilder()
          .setName(functionCall.getName())
          .setResponse(
              Struct.newBuilder()
                  .putFields("result", Value.newBuilder().setStringValue(result).build()))
          .build();
  var functionResponseContent = Content.newBuilder()
        .setRole("user")
        .addParts(Part.newBuilder().setFunctionResponse(functionResponse))
        .build();
  var response = chat.sendMessage(functionResponseContent);
} else if (message.hasText()) {
  Log.i(message.getText());
}
```

The sample code is an overly simplified implementation. For more information on
how an application could examine model responses, see [Formatting and
Parsing](#format-parse).

## How it works

This section provides more in-depth information on the core concepts and
components of the Function Calling SDK for Android.

### Models

The Function Calling SDK requires a model with a formatter and parser. The FC
SDK contains a built-in formatter and parser for the following models:

* [Gemma](https://huggingface.co/litert-community/Gemma3-1B-IT): use the
  `GemmaFormatter`.
* [Llama](https://huggingface.co/litert-community/Llama-3.2-1B-Instruct): use
  the `LlamaFormatter`.
* [Hammer](https://huggingface.co/litert-community/Hammer2.1-1.5b): use the
  `HammerFormatter`.

In order to use a different model with the FC SDK, you must develop your own
formatter and parser that is compatible with the LLM Inference API.

### Formatting and parsing

A key part of function calling support is the formatting of prompts and parsing
of model output. While these are two separate processes, the FC SDK handles both
formatting and parsing with the `ModelFormatter` interface.

The formatter is responsible for converting the structured function declarations
into text, formatting function responses, and inserting tokens to indicate the
start and end of conversation turns, as well as the roles of those turns (e.g.
"user", "model").

The parser is responsible for detecting whether the model response contains a
function call. If the parser detects a function call, it parses it into a
structured data type. Otherwise, it treats the text as a natural language
response.

### Constrained decoding

**Note:** Only Gemma models support constrained decoding in FC SDK.

Constrained decoding is a technique that guides the output generation of LLMs to
ensure it adheres to a predefined structured format, such as JSON objects or
Python function calls. By enforcing these constraints, the model formats its
outputs in a way that aligns with the predefined functions and their
corresponding parameter types.

To enable constrained decoding, define the constraints in a `ConstraintOptions`
object and invoke the `enableConstraint` method of a `ChatSession` instance.
When enabled, this constraint will restrict the response to only include the
tools associated with the `GenerativeModel`.

The following example demonstrates how to configure constrained decoding to
restrict the response to tool calls. It constrains the tool call to start with
the prefix ```` ```tool_code\n ```` and end with the suffix
```` \n``` ````.

```
ConstraintOptions constraintOptions = ConstraintOptions.newBuilder()
.setToolCallOnly( ConstraintOptions.ToolCallOnly.newBuilder()
.setConstraintPrefix("```tool_code\n")
  .setConstraintSuffix("\n```"))
.build(); chatSession.enableConstraint(constraintOptions);
```

To disable the active constraint within the same session, use the
`disableConstraint` method:

```
chatSession.disableConstraint();
```

Send feedback
