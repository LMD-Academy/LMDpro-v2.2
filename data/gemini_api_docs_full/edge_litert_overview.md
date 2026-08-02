# LiteRT overview Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/overview))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT is Google's on-device framework for high-performance ML & GenAI
deployment on edge platforms, using efficient conversion, runtime, and
optimization.

The latest LiteRT 2.x release introduces the `CompiledModel` API,
a modern runtime interface designed to maximize hardware acceleration. While the
`Interpreter` API (formerly TensorFlow Lite) remains available for backward
compatibility, the `CompiledModel` API is the recommended choice for developers
seeking state-of-the-art performance in on-device AI applications.

## Key LiteRT features

### Streamline development with LiteRT

Automated accelerator selection versus explicit delegate creation. Efficient I/O
buffer handling and async execution for superior performance.
See [on-device inference documentation](https://developers.google.com/edge/litert/inference).

### Best-in-class GPU performance

Powered by ML Drift, now supporting both ML and Generative
AI models on GPUs APIs. See [GPU acceleration documentation](https://developers.google.com/edge/litert/next/gpu).

### Unified NPU acceleration

Accelerate your model using simplified NPU access from major
chipset providers. See [NPU acceleration documentation](https://developers.google.com/edge/litert/next/npu).

### Superior LLM Support

LiteRT delivers high-performance deployment for Generative AI models across
mobile, desktop, and web platforms. See
[GenAI deployment documentation](https://developers.google.com/edge/litert/genai/overview).

### Bindings for Multiple Languages

* [C++](https://developers.google.com/edge/litert/next/cpp), including [Prebuilt LiteRT C++ Binary](https://developers.google.com/edge/litert/next/cpp_sdk)
* [Kotlin](https://developers.google.com/edge/litert/next/android_kotlin)
* [Python](https://developers.google.com/edge/litert/next/python)
* Rust [crate](https://crates.io/crates/google-ai-edge-litert)

### Broad ML framework support

LiteRT supports streamlined conversion from PyTorch, TensorFlow, and JAX
Frameworks to `.tflite` or `.litertlm` format. See
[model conversion documentation](https://developers.google.com/edge/litert/conversion/overview).

## Get Started with `CompiledModel` API

* **For classical ML models**, see the following demo apps.

  + [Image segmentation Kotlin App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation): CPU/GPU/NPU inference.
  + [Image segmentation C++ App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation/async_segmentation): CPU/GPU/NPU inference with
    **async** execution.
* **For GenAI models**, see the following demo apps:

  + [EmbeddingGemma semantic similarity C++ App](https://github.com/google-ai-edge/LiteRT/tree/main/litert/samples/semantic_similarity):
    CPU/GPU/NPU inference.

## Development workflow

LiteRT runs inferences completely on-device on Android, iOS, Web, IoT, and on
desktop/laptop. Regardless of device, the following is the most common
workflow, with links to further instructions.

### Identify the most suitable solution to the ML challenge

**LiteRT** offers users a high level of flexibility and customizability when it
comes to solving machine learning problems, making it a good fit for users who
require a specific model or a specialized implementation. Users looking for
plug-and-play solutions may prefer [MediaPipe
Tasks](https://ai.google.dev/edge/mediapipe/solutions/tasks),
which provides ready-made
solutions for common machine learning tasks like object detection,
text classification, and LLM inference.

![LiteRT development workflow graph](/static/edge/litert/images/build/litert-development-workflow.png)

### Obtain and preparing the model

A LiteRT model is represented in an efficient portable format known as
[FlatBuffers](https://google.github.io/flatbuffers/), which uses the `.tflite`
file extension.

You can obtain a LiteRT model in the following ways:

* **Obtain a pre-trained model:** for popular ML workloads like Image
  segmentation, Object detection etc.

  The simplest approach is to use a LiteRT model already in the `.tflite`
  format. These models don't require any added conversion steps.

  | Model type | Pre-trained model source |
  | --- | --- |
  | Classical ML   (`.tflite` format) | Visit [Kaggle](https://www.kaggle.com/models?framework=tfLite) or [HuggingFace](https://huggingface.co/models?library=tflite&sort=downloads)   E.g. [Image segmentation models](https://www.kaggle.com/models/tensorflow/deeplabv3) and [sample app](https://github.com/google-ai-edge/litert-samples/tree/main/v2/image_segmentation) |
  | Generative AI   (`.litertlm` format) | [LiteRT Hugging Face page](https://huggingface.co/litert-community/models)   E.g. [Gemma Family](https://huggingface.co/collections/litert-community/gemma-family) |
* **Convert** your chosen PyTorch,
  TensorFlow or JAX model into a LiteRT model if you choose to not use a
  pre-trained model. **[PRO USER]**

  | Model framework | Sample models | Conversion tool |
  | --- | --- | --- |
  | Pytorch | [Hugging Face](https://huggingface.co/models?library=pytorch)   [Torchvision](https://pytorch.org/vision/0.9/models.html) | [Link](https://ai.google.dev/edge/litert/models/convert_pytorch) |
  | TensorFlow | [Kaggle Models](https://www.kaggle.com/models?framework=tensorFlow2&orderby=downloadCount)   [Hugging Face](https://huggingface.co/models?library=tf&sort=downloads) | [Link](https://ai.google.dev/edge/litert/models/convert_tf) |
  | Jax | [Hugging Face](https://huggingface.co/models?library=jax) | [Link](https://ai.google.dev/edge/litert/models/convert_jax) |
* **Author your LLM** for further optimization using Generative
  API **[PRO USER]**

  Our Generative API library provides PyTorch built-in building blocks for
  composing Transformer models such as [Gemma](https://github.com/google-ai-edge/litert-torch/blob/main/litert_torch/generative/examples/gemma), [TinyLlama](https://github.com/google-ai-edge/litert-torch/blob/main/litert_torch/generative/examples/tiny_llama)
  and [others](https://github.com/google-ai-edge/litert-torch/blob/main/litert_torch/generative/examples) using mobile-friendly abstractions, through which
  we can guarantee conversion,
  and performant execution on our mobile runtime, LiteRT. See [Generative API
  documentation](https://ai.google.dev/edge/litert/models/edge_generative).

### Optimize [PRO USER]

AI Edge Quantizer for advanced developers is a tool to quantize converted
LiteRT models. It aims to facilitate advanced users to strive for optimal
performance on resource demanding models (e.g., GenAI models).

See more details from [AI Edge Quantizer documentation](https://github.com/google-ai-edge/ai-edge-quantizer).

### Integrate the model into your app on edge platforms

LiteRT lets you to run ML models entirely on-device with high performance
across Android, iOS, Web, Desktop, and IoT platforms.

Use the following guides to integrate a LiteRT model on your preferred platform:

| Supported platform | Supported devices | Supported APIs |
| --- | --- | --- |
| [Run on Android](https://developers.google.com/edge/litert/android/index) | Android mobile devices | C++/Kotlin |
| [Run on iOS/macOS](https://developers.google.com/edge/litert/ios/quickstart) | iOS mobile devices, Macbooks | C++/Swift |
| [Run on Web using LiteRT.js](https://developers.google.com/edge/litert/web/index) | Device with Chrome, Firefox, or Safari | JavaScript |
| [Run on Linux](https://developers.google.com/edge/litert/next/cpp) | Linux workstation or Linux-based IoT devices | C++/Python |
| [Run on Windows](https://developers.google.com/edge/litert/next/cpp) | Windows workstation or laptops | C++/Python |
| [Run on IoT](https://developers.google.com/edge/litert/next/cpp) | Embedded devices | C++ |

The following code snippets show a basic implementation in
Kotlin and C++.

### Kotlin

```
// Load model and initialize runtime
val compiledModel = CompiledModel.create(
    "/path/to/mymodel.tflite",
    CompiledModel.Options(Accelerator.CPU))

// Preallocate input/output buffers
val inputBuffers = compiledModel.createInputBuffers()
val outputBuffers = compiledModel.createOutputBuffers()

// Fill the input buffer
inputBuffers.get(0).writeFloat(input0)
inputBuffers.get(1).writeFloat(input1)

// Invoke
compiledModel.run(inputBuffers, outputBuffers)

// Read the output
val output = outputBuffers.get(0).readFloat()
```

### C++

```
// Load model and initialize runtime
LITERT_ASSIGN_OR_RETURN(auto env, GetEnvironment());
LITERT_ASSIGN_OR_RETURN(auto options, GetOptions());
LITERT_ASSIGN_OR_RETURN(
    auto compiled_model,
    CompiledModel::Create(env, "/path/to/mymodel.tflite", options));

// Preallocate input/output buffers
LITERT_ASSIGN_OR_RETURN(auto input_buffers,compiled_model.CreateInputBuffers(signature_index));
LITERT_ASSIGN_OR_RETURN(auto output_buffers,compiled_model.CreateOutputBuffers(signature_index));

// Fill the input buffer
LITERT_ABORT_IF_ERROR(input_buffers[0].Write(input0));
LITERT_ABORT_IF_ERROR(input_buffers[1].Write(input1));

// Invoke
LITERT_ABORT_IF_ERROR(compiled_model.Run(signature_index, input_buffers, output_buffers));

// Read the output
LITERT_ABORT_IF_ERROR(output_buffers[0].Read(output0));
```

### Choose a backend

The most straightforward way to incorporate backends in LiteRT is to rely on
the runtime's built-in intelligence. With the `CompiledModel` API, LiteRT
simplifies the setup significantly with the ability to specify the
target backend as an option. [See on-device inference guide](https://ai.google.dev/edge/litert/inference) for more
details.

|  | Android | iOS / macOS | Web | Linux | Windows | IoT |
| --- | --- | --- | --- | --- | --- | --- |
| CPU | XNNPACK | XNNPACK | XNNPACK | XNNPACK | XNNPACK | XNNPACK |
| GPU | OpenGL   OpenCL | Metal   WebGPU | WebGPU | WebGPU   OpenCL | WebGPU   OpenCL | WebGPU |
| NPU | MediaTek   Qualcomm | - | - | Qualcomm | - | Qualcomm |

## Supported operators

LiteRT `CompiledModel` API supports a wide-range of operators across different
hardware accelerators. See [operators guide](https://developers.google.com/edge/litert/inference#operators).

## Additional documentation and support

* [**LiteRT-Samples GitHub Repo**](https://github.com/google-ai-edge/litert-samples) for more LiteRT sample apps.
* **For existing users of TensorFlow Lite**, see [migration guide](https://ai.google.dev/edge/litert/migration).
* [**LiteRT Tools page**](https://ai.google.dev/edge/litert/models/measurement) for performance, profiling, error reporting etc.

Send feedback
