--- source: https://ai.google.dev/edge/litert-lm/cli/usage ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT-LM](https://developers.google.com/edge/litert-lm)

Send feedback

# Usage Stay organized with collections Save and categorize content based on your preferences.



Learn how to run models and apply basic optimizations using the LiteRT-LM CLI.

**Tip:** You can append `--help` or `-h` to any `litert-lm` command to view all
available options and usage instructions. For example: `litert-lm run --help`.

## Quick Start

### Run the Gemma4 E2B model:

### Linux/MacOS

```
litert-lm run  \
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm \
  gemma-4-E2B-it.litertlm \
  --prompt="What is the capital of France?"
```

### Windows

```
litert-lm run `
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm `
  gemma-4-E2B-it.litertlm `
  --prompt="What is the capital of France?"
```

### Run a local model

### Linux/MacOS

```
litert-lm run path/to/model.litertlm
```

### Windows

```
litert-lm run path\to\model.litertlm
```

## GPU Acceleration

To accelerate inference using your device's GPU, use the `--backend=gpu` flag:

### Linux/MacOS

```
litert-lm run  \
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm \
  gemma-4-E2B-it.litertlm \
  --backend=gpu \
  --prompt="What is the capital of France?"
```

### Windows

```
litert-lm run `
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm `
  gemma-4-E2B-it.litertlm `
  --backend=gpu `
  --prompt="What is the capital of France?"
```

**Note:** GPU acceleration is supported across Linux, macOS, and Windows. Ensure you have compatible graphics drivers installed (e.g., Vulkan-compatible drivers for Linux/Windows, or Metal on macOS).

## Multi-Token Prediction (MTP)

**Note:** MTP requires the model to ship with a drafter (speculative model). Not all `.litertlm` models support MTP.

Multi-Token Prediction (MTP) is a performance optimization that significantly
accelerates decode speeds. MTP is universally recommended for all tasks on GPU
backends.

To enable MTP in the CLI, use the `--enable-speculative-decoding=true` flag:

### Linux/MacOS

```
litert-lm run  \
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm \
  gemma-4-E2B-it.litertlm \
  --backend=gpu \
  --enable-speculative-decoding=true \
  --prompt="What is the capital of France?"
```

### Windows

```
litert-lm run `
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm `
  gemma-4-E2B-it.litertlm `
  --backend=gpu `
  --enable-speculative-decoding=true `
  --prompt="What is the capital of France?"
```

## Multi-Modality

The LiteRT-LM CLI supports running multimodal models with image and audio
attachments.

### Prerequisites

To use attachments, you must specify the appropriate backend for processing
them:

* For images: Use the `--vision-backend` option.
* For audio: Use the `--audio-backend` option.

Supported backends typically include `cpu` and `gpu`.

### Image Attachments

To run a model with an image attachment:

```
litert-lm run <model-ref> --vision-backend=gpu --attachment=image.jpg --prompt="Describe this image."
```

### Audio Attachments

To run a model with an audio attachment:

```
litert-lm run <model-ref> --audio-backend=gpu --attachment=audio.wav --prompt="Transcribe this audio."
```

### Multiple Attachments

You can attach multiple files by repeating the `--attachment` option:

```
litert-lm run <model-ref> --audio-backend=cpu --vision-backend=gpu --attachment=audio.wav --attachment=image.jpg ...
```

## Function Calling

Augment your local LLMs with Python capabilities by running tools through
presets.

### Using Presets for Tool Use

You can run tools with presets. Create a `preset.py` file to define your tools
and system instructions:

```
import datetime

def get_current_time() -> str:
    """Returns the current date and time."""
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

system_instruction = "You are a helpful assistant with access to tools."
tools = [get_current_time]
```

Run the model with the preset:

```
litert-lm run <model-ref> --preset=preset.py
```

#### How it Works

When you ask a question that requires external information (like the current
time), the model recognizes that it needs to call a tool:

1. **Model Emits `tool_call`**: The model outputs a JSON request to call the `get_current_time` function.
2. **CLI Executes Tool**: The LiteRT-LM CLI intercepts this call and executes the corresponding Python function defined in your `preset.py`.
3. **CLI Sends `tool_response`**: The CLI sends the result back to the model.
4. **Model Generates Final Answer**: The model uses the tool response to compute and generate the final answer for the user.

Sample interactive session:

```
> what will the time be in two hours?
[tool_call] {"arguments": {}, "name": "get_current_time"}
[tool_response] {"name": "get_current_time", "response": "2026-03-25 21:54:07"}
The current time is 2026-03-25 21:54:07.

In two hours, it will be **2026-03-25 23:54:07**.
```

This "Function Calling" loop happens automatically within the CLI, allowing
you to augment local LLMs with Python capabilities without writing any complex
orchestration code.






Send feedback