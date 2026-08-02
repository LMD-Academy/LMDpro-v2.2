# LiteRT-LM API Overview Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert-lm/api_overview))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT-LM provides APIs for multiple platforms, allowing you to
integrate large language models into your applications with ease.

## Installation & Dependency Setup

Before writing code, you need to add the LiteRT-LM SDK to your project.
Use the following tabs to see how to configure the dependency for your
target language.

### Python

Install the official API package from PyPI:

```
# Using pip
pip install litert-lm-api
```

### Kotlin

Add the Maven dependency to your `build.gradle` file:

```
dependencies {
    // For Android apps
    implementation("com.google.ai.edge.litertlm:litertlm-android:latest.release")

    // For JVM-based desktop apps (Linux, macOS, Windows)
    implementation("com.google.ai.edge.litertlm:litertlm-jvm:latest.release")
}
```

### Swift

Integrate LiteRT-LM natively in Xcode using **Swift Package Manager (SPM)**:

1. In Xcode, select **File > Add Package Dependencies...**
2. Enter the repository URL: `https://github.com/google-ai-edge/LiteRT-LM`
3. Select **LiteRTLM** and add it to your target.

Or add it to your `Package.swift` dependencies:

```
dependencies: [
  .package(url: "https://github.com/google-ai-edge/LiteRT-LM", from: "0.12.0")
]
```

### JavaScript

Install the package from npm,

```
# Using npm
npm install --save @litert-lm/core
```

or import it directly from a CDN in your HTML:

```
<!-- Direct HTML CDN import -->
<script type="module">
  import { Engine } from 'https://cdn.jsdelivr.net/npm/@litert-lm/core/+esm';
</script>
```

---

## Quick Start Example

All official LiteRT-LM SDKs share a similar workflow:

1. **Initialize the Engine**: Load the model weights and configure execution settings (such as hardware acceleration).
2. **Create a Conversation**: Manage the history and state of a chat session.
3. **Send Messages**: Send prompts to the model and receive responses (either blocking or streaming).

The following is a comparison of how to perform a basic text-generation
request across different platforms using the provided SDKs.

### Python

```
import litert_lm

# 1. Initialize the Engine
with litert_lm.Engine("path/to/model.litertlm") as engine:

  # 2. Create a Conversation
  with engine.create_conversation() as conversation:

    # 3. Send a message and get the response
    response = conversation.send_message("What is the capital of France?")
    print(response["content"][0]["text"])
```

### Kotlin

```
import com.google.ai.edge.litertlm.*

suspend fun main() {
  // 1. Initialize the Engine
  val config = EngineConfig(modelPath = "path/to/model.litertlm")
  Engine(config).use { engine ->
    engine.initialize()

    // 2. Create a Conversation
    engine.createConversation().use { conversation ->

      // 3. Send a message and get the response
      val response = conversation.sendMessage("What is the capital of France?")
      println(response)
    }
  }
}
```

### Swift

```
import LiteRTLM

// 1. Initialize the Engine
let config = try EngineConfig(
  modelPath: "path/to/model.litertlm",
  backend: .gpu,
  cacheDir: NSTemporaryDirectory()
)
let engine = Engine(engineConfig: config)
try await engine.initialize()

// 2. Create a Conversation
let conversation = try await engine.createConversation()

// 3. Send a message and get the response
let response = try await conversation.sendMessage(Message("What is the capital of France?"))
print(response.toString)
```

### JavaScript

```
import { Engine } from '@litert-lm/core';

// 1. Initialize the Engine
const engine = await Engine.create({
  model: 'url/path/to/model.litertlm'
});

// 2. Create a Conversation
const conversation = await engine.createConversation();

// 3. Send a message and get the response
const response = await conversation.sendMessage("What is the capital of France?");
console.log(response.content[0].text);

// Clean up
await engine.delete();
```

---

## Hardware Acceleration (GPU)

You can run LiteRT-LM models on your device's GPU to accelerate inference
speeds. The following is how to configure the engine to run on the GPU.

### Python

```
import litert_lm

# Set backend to GPU
with litert_lm.Engine("path/to/model.litertlm", backend=litert_lm.Backend.GPU()) as engine:
    with engine.create_conversation() as conversation:
        response = conversation.send_message("Hello!")
        print(response["content"][0]["text"])
```

### Kotlin

```
import com.google.ai.edge.litertlm.*

suspend fun main() {
  // Set backend to GPU in EngineConfig
  val config = EngineConfig(
      modelPath = "path/to/model.litertlm",
      backend = Backend.GPU()
  )
  Engine(config).use { engine ->
    engine.initialize()
    engine.createConversation().use { conversation ->
      val response = conversation.sendMessage("Hello!")
      println(response)
    }
  }
}
```

### Swift

```
import LiteRTLM

// Set backend to .gpu in EngineConfig
let config = try EngineConfig(
  modelPath: "path/to/model.litertlm",
  backend: .gpu(),
  cacheDir: NSTemporaryDirectory()
)
let engine = Engine(engineConfig: config)
try await engine.initialize()

let conversation = try await engine.createConversation()
let response = try await conversation.sendMessage(Message("Hello!"))
print(response.toString)
```

### JavaScript

WebGPU acceleration is enabled by default in the Web SDK and does not
require any manual backend configuration:

```
import { Engine } from '@litert-lm/core';

// WebGPU is used automatically
const engine = await Engine.create({
  model: 'url/path/to/model.litertlm'
});

const conversation = await engine.createConversation();
const response = await conversation.sendMessage("Hello!");
console.log(response.content[0].text);
```

---

## Multi-Modality (Images)

LiteRT-LM supports multimodal input (such as image attachments) when using
compatible models.

### Python

```
import litert_lm

# Initialize engine with a vision backend
with litert_lm.Engine(
    "path/to/multimodal_model.litertlm",
    vision_backend=litert_lm.Backend.GPU()
) as engine:
    with engine.create_conversation() as conversation:
        # Send image attachment alongside text prompt
        response = conversation.send_message(
            litert_lm.Contents.of(
                "Describe this image.",
                litert_lm.Content.ImageFile(absolute_path="path/to/image.jpg")
            )
        )
        print(response["content"][0]["text"])
```

### Kotlin

```
import com.google.ai.edge.litertlm.*

suspend fun main() {
  // Initialize engine with a vision backend
  val config = EngineConfig(
      modelPath = "path/to/multimodal_model.litertlm",
      visionBackend = Backend.GPU()
  )
  Engine(config).use { engine ->
    engine.initialize()
    engine.createConversation().use { conversation ->
      // Send image attachment alongside text prompt
      val response = conversation.sendMessage(Contents.of(
          Content.Text("Describe this image."),
          Content.ImageFile("path/to/image.jpg"),
      ))
      println(response)
    }
  }
}
```

### Swift

```
import LiteRTLM

// Initialize engine with a vision backend
let config = try EngineConfig(
  modelPath: "path/to/multimodal_model.litertlm",
  visionBackend: .cpu(), // Or .gpu() if supported
  cacheDir: NSTemporaryDirectory()
)
let engine = Engine(engineConfig: config)
try await engine.initialize()

let conversation = try await engine.createConversation()

// Send image attachment alongside text prompt
let message = Message(contents: [
  Content.text("Describe this image."),
  Content.imageFile("path/to/image.jpg")
])
let response = try await conversation.sendMessage(message)
print(response.toString)
```

### JavaScript

**Note:** The LiteRT-LM Web SDK only supports text-in / text-out running on
WebGPU and does not support multimodal attachments (like images or audio)
yet.

---

## Function Calling (Tool Use)

Function calling allows the language model to request the execution of
client-side code tools to perform actions or retrieve information.

### Python

```
import litert_lm

# 1. Define a tool function
def get_current_time() -> str:
    """Returns the current time."""
    return "12:00 PM"

# 2. Register the tool with the conversation
tools = [get_current_time]
with engine.create_conversation(tools=tools) as conversation:
    # The model will invoke the tool automatically if it needs it
    response = conversation.send_message("What time is it?")
    print(response["content"][0]["text"])
```

### Kotlin

```
import com.google.ai.edge.litertlm.*

// 1. Define a ToolSet
class MyToolSet: ToolSet {
    @Tool(description = "Get the current time")
    fun getCurrentTime(): String {
        return "12:00 PM"
    }
}

suspend fun main() {
  // 2. Register the tool with ConversationConfig
  val config = ConversationConfig(
      tools = listOf(tool(MyToolSet()))
  )
  val conversation = engine.createConversation(config)

  // The model will invoke the tool automatically if it needs it
  val response = conversation.sendMessage("What time is it?")
  println(response)
}
```

### Swift

```
import LiteRTLM

// 1. Define a Tool conforming to the Tool protocol
struct GetCurrentTimeTool: Tool {
  static let name = "get_current_time"
  static let description = "Get the current time."

  func run() async throws -> Any {
    return ["time": "12:00 PM"]
  }
}

// 2. Register the tool in ConversationConfig
let config = ConversationConfig(
  tools: [GetCurrentTimeTool()]
)
let conversation = try await engine.createConversation(with: config)

// The model will invoke the tool automatically if it needs it
let response = try await conversation.sendMessage(Message("What time is it?"))
print(response.toString)
```

### JavaScript

**Note:** The LiteRT-LM Web SDK only supports basic text interactions and
does not support function calling or tool execution yet.

---

## Next Steps

Explore the detailed integration guides for your target platform:

* [Python SDK](https://developers.google.com/edge/litert-lm/python)
* [Kotlin (Android/JVM) SDK](https://developers.google.com/edge/litert-lm/android)
* [Swift (iOS/macOS) SDK](https://developers.google.com/edge/litert-lm/swift)
* [Web (JavaScript/TypeScript) SDK](https://developers.google.com/edge/litert-lm/js)
* [Cross-Platform C++ SDK](https://developers.google.com/edge/litert-lm/cpp)

For **Flutter** development, check out the community-maintained
[flutter\_gemma](https://github.com/DenisovAV/flutter_gemma) package.

Send feedback
