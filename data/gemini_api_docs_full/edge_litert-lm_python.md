# LiteRT-LM Python API Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert-lm/python))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The Python API of LiteRT-LM for **Linux, macOS, Windows, and Android**. Features like
**multi-modality**, **tools use**, and **GPU and NPU acceleration** are
supported.

## Introduction

Here is a sample terminal chat app built with the Python API:

```
import litert_lm

litert_lm.set_min_log_severity(litert_lm.LogSeverity.ERROR) # Hide log for TUI app

with litert_lm.Engine("path/to/model.litertlm") as engine:
  with engine.create_conversation() as conversation:
    while True:
      user_input = input("\n>>> ")
      for chunk in conversation.send_message_async(user_input):
        print(chunk["content"][0]["text"], end="", flush=True)
```

![Demo Image](/static/edge/litert-lm/images/demo.gif)

## Getting Started

LiteRT-LM is available as a Python library across Linux, macOS, Windows, and Android (`aarch64` and `x86_64`). You can install the package from PyPI:

```
# Using pip
pip install litert-lm-api

# Using uv
uv pip install litert-lm-api
```

### Initialize the Engine

The `Engine` is the entry point to the API. It handles model loading and
resource management. Using it as a context manager (with the `with` statement)
ensures that resources are released promptly.

**Note:** Initializing the engine can take several seconds to load the model.

```
import litert_lm

# Initialize with the model path and optionally specify the backend.
# backend can be Backend.CPU() (default), Backend.GPU() or Backend.NPU().
with litert_lm.Engine(
    "path/to/your/model.litertlm",
    backend=litert_lm.Backend.GPU(),
    # Optional: Pick a writable dir for caching compiled artifacts.
    # cache_dir="/tmp/litert-lm-cache"
) as engine:
    # ... Use the engine to create a conversation ...
    pass
```

### Create a Conversation

A `Conversation` manages the state and history of your interaction with the
model.

```
# Optional: Configure system instruction and initial messages
messages = [litert_lm.Message.system("You are a helpful assistant.")]

# Create the conversation
with engine.create_conversation(messages=messages) as conversation:
    # ... Interact with the conversation ...
    pass
```

### Sending Messages

You can send messages synchronously or asynchronously (streaming).

The `send_message` and `send_message_async` methods accept:

* A `str` (automatically wrapped as a user message).
* A `litert_lm.Contents` object (for multi-modal inputs).
* A `litert_lm.Message` object (for full message structure).
* A json-like dictionary object as prompt template input.

**Synchronous Example:**

```
# Simple string input
response = conversation.send_message("What is the capital of France?")
print(response["content"][0]["text"])

# Or with a Message object
# response = conversation.send_message(litert_lm.Message.user("What is the capital of France?"))
```

**Asynchronous (Streaming) Example:**

```
# sendMessageAsync returns an iterator of response chunks
stream = conversation.send_message_async("Tell me a long story.")
for chunk in stream:
    # Chunks are dictionaries containing pieces of the response
    for item in chunk.get("content", []):
      if item.get("type") == "text":
        print(item["text"], end="", flush=True)
print()
```

### 🔴 New: Multi-Token Prediction (MTP)

Multi-Token Prediction (MTP) is a performance optimization that significantly
accelerates decode speeds. MTP is universally recommended for all tasks on GPU
backends.

To use MTP, enable speculative decoding when initializing the engine.

```
import litert_lm

# Enable MTP by setting enable_speculative_decoding=True
with litert_lm.Engine(
    "path/to/your/model.litertlm",
    backend=litert_lm.Backend.GPU(),
    enable_speculative_decoding=True,
) as engine:
    with engine.create_conversation() as conversation:
        response = conversation.send_message("What is the capital of France?")
        print(response["content"][0]["text"])
```

### Multi-Modality

**Note:** This requires models with multi-modality support, such as [Gemma 4](https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm).

```
# Initialize with vision and/or audio backends if needed
with litert_lm.Engine(
    "path/to/multimodal_model.litertlm",
    audio_backend=litert_lm.Backend.CPU(),
    vision_backend=litert_lm.Backend.GPU(),
) as engine:
    with engine.create_conversation() as conversation:
        response = conversation.send_message(
            litert_lm.Contents.of(
                "Describe this audio.",
                litert_lm.Content.AudioFile(absolute_path="/path/to/audio.wav"),
            )
        )
        print(response["content"][0]["text"])
```

### Defining and Using Tools

**Note:** This requires models with tool support, such as [Gemma 4](https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm).

You can define Python functions as tools that the model can call automatically.

```
def add_numbers(a: float, b: float) -> float:
    """Adds two numbers.

    Args:
        a: The first number.
        b: The second number.
    """
    return a + b

# Register the tool in the conversation
tools = [add_numbers]
with engine.create_conversation(tools=tools) as conversation:
    # The model will call add_numbers automatically if it needs to sum values
    response = conversation.send_message("What is 123 + 456?")
    print(response["content"][0]["text"])
```

LiteRT-LM uses the function's docstring and type hints to generate the tool schema for the model.

Send feedback
