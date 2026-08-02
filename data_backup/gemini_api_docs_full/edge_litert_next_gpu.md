--- source: https://ai.google.dev/edge/litert/next/gpu ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# GPU acceleration with LiteRT Stay organized with collections Save and categorize content based on your preferences.



Graphics Processing Units (GPUs) are commonly used for deep learning
acceleration due to their massive parallel throughput compared to CPUs. LiteRT
simplifies the process of using GPU acceleration by allowing users to
specify the hardware acceleration as a parameter when creating a Compiled Model
(`CompiledModel`).

With LiteRT's GPU acceleration, you can create GPU-friendly input and
output buffers, achieve zero-copy with your data in GPU memory, and execute
tasks asynchronously to maximize parallelism.

## Get Started

* **For classical ML models**, see the following demo apps.

  + [Image segmentation Kotlin App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation): CPU/GPU/NPU inference.
  + [Image segmentation C++ App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation/async_segmentation): CPU/GPU/NPU inference with
    **async** execution.
* **For GenAI models**, see the following demos and guide:

  + [EmbeddingGemma semantic similarity C++ App](https://github.com/google-ai-edge/LiteRT/tree/main/litert/samples/semantic_similarity):
    CPU/GPU/NPU inference.
  + Guide on [running LLMs using LiteRT-LM](https://developers.google.com/edge/litert/next/litert_lm_npu).

## Add GPU dependency

Use the following steps to add GPU dependency to your Kotlin or C++ application.

### Kotlin

For Kotlin users, the GPU accelerator is built-in and does not require
additional steps beyond the [Get Started](https://developers.google.com/edge/litert/next/get_started) guide.

### C++

For C++ users, you must build the dependencies of the application with LiteRT
GPU acceleration. The `cc_binary` rule that packages the core application logic
(e.g., `main.cc`) requires the following runtime components:

* **LiteRT C API shared library**: the `data` attribute must include the
  LiteRT C API shared library (`//litert/c:litert_runtime_c_api_shared_lib`)
  and GPU-specific components
  (`litert_gpu_accelerator_prebuilts`).
* **Attribute dependencies**: The `deps` attribute typically includes GLES
  dependencies `gles_deps()`, and `linkopts` typically includes
  `gles_linkopts()`. Both are highly relevant for GPU acceleration, since
  LiteRT often uses OpenGLES on Android.
* **Model files and other assets**: Included through the `data` attribute.

The following is an example of a `cc_binary` rule:

```
load("//litert/build_common:special_rule.bzl", "litert_gpu_accelerator_prebuilts")

cc_binary(
    name = "your_application",
    srcs = [
        "main.cc",
    ],
    data = [
        ...
        # litert c api shared library
        "//litert/c:litert_runtime_c_api_shared_lib",
    ] + litert_gpu_accelerator_prebuilts(),
    linkopts = select({
        "@org_tensorflow//tensorflow:android": ["-landroid"],
        "//conditions:default": [],
    }) + gles_linkopts(), # gles link options
    deps = [
        ...
        "//litert/cc:litert_tensor_buffer", # litert cc library
        ...
    ] + gles_deps(), # gles dependencies
)
```

This setup allows your compiled binary to dynamically load and use the GPU for
accelerated machine learning inference.

### Prebuilt GPU Accelerators

The new LiteRT GPU Accelerator isn't open sourced yet. But prebuilts are
available. For the Kotlin users, the LiteRT Maven package already contains GPU
Accelerators.
For C++ SDK users, you need to download it separately using
[this](/edge/litert/next/cpp_sdk#prebuilt-gpu-accelerators).

In Bazel, you can use the following rule to add dependency to your target.
`cpp
load("//litert/build_common:special_rule.bzl", "litert_gpu_accelerator_prebuilts")`

## Use GPU with `CompiledModel` API

To get started using the GPU accelerator, pass the GPU parameter when creating
the Compiled Model (`CompiledModel`). The following code snippet shows a basic
implementation of the entire process:

### C++

```
// 1. Create a compiled model targeting GPU
LITERT_ASSIGN_OR_RETURN(auto env, Environment::Create({}));
LITERT_ASSIGN_OR_RETURN(auto compiled_model, CompiledModel::Create(env, "mymodel.tflite", kLiteRtHwAcceleratorGpu));

// 2. Prepare input/output buffers
LITERT_ASSIGN_OR_RETURN(auto input_buffers, compiled_model.CreateInputBuffers());
LITERT_ASSIGN_OR_RETURN(auto output_buffers, compiled_model.CreateOutputBuffers());

// 3. Fill input data (if you have CPU-based data)
input_buffers[0].Write<float>(absl::MakeConstSpan(cpu_data, data_size));

// 4. Execute
compiled_model.Run(input_buffers, output_buffers);

// 5. Access model output
std::vector<float> data(output_data_size);
output_buffers.Read<float>(absl::MakeSpan(data));
```

### Kotlin

```
// Load model and initialize runtime
val  model =
    CompiledModel.create(
        context.assets,
        "mymodel.tflite",
        CompiledModel.Options(Accelerator.GPU),
        env,
    )

// Preallocate input/output buffers
val inputBuffers = model.createInputBuffers()
val outputBuffers = model.createOutputBuffers()

// Fill the first input
inputBuffers[0].writeFloat(FloatArray(data_size) { data_value /* your data */ })

// Invoke
model.run(inputBuffers, outputBuffers)

// Read the output
val outputFloatArray = outputBuffers[0].readFloat()
```

For more information, see the [Get Started with C++](https://developers.google.com/edge/litert/next/cpp) or
[Get Started with Kotlin](https://developers.google.com/edge/litert/next/android_kotlin) guides.

## Zero-copy with GPU acceleration

Using zero-copy enables a GPU to access data directly in its own memory without
the need for the CPU to explicitly copy that data. By not copying data to and
from CPU memory, zero-copy can significantly reduce end-to-end latency.

The following code is an example implementation of Zero-Copy GPU with
[OpenGL](https://www.opengl.org/), an API for rendering vector graphics. The
code passes images in the OpenGL buffer format directly to LiteRT:

```
// Suppose you have an OpenGL buffer consisting of:
// target (GLenum), id (GLuint), size_bytes (size_t), and offset (size_t)
// Load model and compile for GPU
LITERT_ASSIGN_OR_RETURN(auto env, Environment::Create({}));
LITERT_ASSIGN_OR_RETURN(auto compiled_model,
    CompiledModel::Create(env, "mymodel.tflite", kLiteRtHwAcceleratorGpu));

// Create a TensorBuffer that wraps the OpenGL buffer.
LITERT_ASSIGN_OR_RETURN(auto tensor_type, model.GetInputTensorType("input_tensor_name"));
LITERT_ASSIGN_OR_RETURN(auto gl_input_buffer, TensorBuffer::CreateFromGlBuffer(env,
    tensor_type, opengl_buffer.target, opengl_buffer.id, opengl_buffer.size_bytes, opengl_buffer.offset));
std::vector<TensorBuffer> input_buffers{gl_input_buffer};
LITERT_ASSIGN_OR_RETURN(auto output_buffers, compiled_model.CreateOutputBuffers());

// Execute
compiled_model.Run(input_buffers, output_buffers);

// If your output is also GPU-backed, you can fetch an OpenCL buffer or re-wrap it as an OpenGL buffer:
LITERT_ASSIGN_OR_RETURN(auto out_cl_buffer, output_buffers[0].GetOpenClBuffer());
```

## Asynchronous execution

LiteRT's asynchronous methods, like `RunAsync()`, let you schedule GPU inference
while continuing other tasks using the CPU or the NPU. In complex pipelines, GPU
is often used asynchronously alongside CPU or NPUs.

The following code snippet builds on the code provided in the [Zero-copy GPU
acceleration](https://developers.google.com/edge/litert/next/android_cpp) example. The code uses both CPU and GPU
asynchronously and attaches a LiteRT `Event` to the input buffer. LiteRT `Event`
is responsible for managing different types of synchronization primitives, and
the following code creates a managed LiteRT Event object of type
`LiteRtEventTypeEglSyncFence`. This `Event` object ensures that we don't read
from the input buffer until the GPU is done. All this is done without involving
the CPU.

```
LITERT_ASSIGN_OR_RETURN(auto env, Environment::Create({}));
LITERT_ASSIGN_OR_RETURN(auto compiled_model,
    CompiledModel::Create(env, "mymodel.tflite", kLiteRtHwAcceleratorGpu));

// 1. Prepare input buffer (OpenGL buffer)
LITERT_ASSIGN_OR_RETURN(auto gl_input,
    TensorBuffer::CreateFromGlBuffer(env, tensor_type, opengl_tex));
std::vector<TensorBuffer> inputs{gl_input};
LITERT_ASSIGN_OR_RETURN(auto outputs, compiled_model.CreateOutputBuffers());

// 2. If the GL buffer is in use, create and set an event object to synchronize with the GPU.
LITERT_ASSIGN_OR_RETURN(auto input_event,
    Event::CreateManagedEvent(env, LiteRtEventTypeEglSyncFence));
inputs[0].SetEvent(std::move(input_event));

// 3. Kick off the GPU inference
compiled_model.RunAsync(inputs, outputs);

// 4. Meanwhile, do other CPU work...
// CPU Stays busy ..

// 5. Access model output
std::vector<float> data(output_data_size);
outputs[0].Read<float>(absl::MakeSpan(data));
```

## Supported backend

LiteRT supports the following GPU backend for each platform.

| Platform | Backend |
| --- | --- |
| Android | OpenCL + OpenGL |
| Linux | WebGPU (Vulkan) |
| macOS | Metal |
| Windows | WebGPU (Direct3D) |
| Android | OpenCL + OpenGL |

**Note:** Windows needs DirectXShaderCompiler. Download the dxc\_2025\_07\_14.zip or
the latest zip file from
https://github.com/microsoft/DirectXShaderCompiler/releases , extract the file
and locate the right architecture directory under bin, copy the `dxil.dll` and
`dxcompiler.dll` into the same directory as the executable.

## Supported models

LiteRT supports GPU acceleration with the following models. Benchmark
results are based on tests run on a Samsung Galaxy S24 device.

| **Model** | **LiteRT GPU Acceleration** | **LiteRT GPU (ms)** |
| --- | --- | --- |
| [hf\_mms\_300m](https://huggingface.co/facebook/mms-300m) | Fully delegated | 19.6 |
| [hf\_mobilevit\_small](https://huggingface.co/apple/mobilevit-small) | Fully delegated | 8.7 |
| [hf\_mobilevit\_small\_e2e](https://huggingface.co/apple/mobilevit-small) | Fully delegated | 8.0 |
| [hf\_wav2vec2\_base\_960h](https://huggingface.co/facebook/wav2vec2-base-960h) | Fully delegated | 9.1 |
| [hf\_wav2vec2\_base\_960h\_dynamic](https://huggingface.co/facebook/wav2vec2-base-960h) | Fully delegated | 9.8 |
| [isnet](https://github.com/xuebinqin/DIS/blob/main/IS-Net/models/isnet.py) | Fully delegated | 43.1 |
| [timm\_efficientnet](https://github.com/huggingface/pytorch-image-models/blob/edc37be1c3804a06c4c02b6377c214e5c66633b8/timm/models/efficientnet.py#L1974) | Fully delegated | 3.7 |
| [timm\_nfnet](https://github.com/huggingface/pytorch-image-models/blob/edc37be1c3804a06c4c02b6377c214e5c66633b8/timm/models/nfnet.py#L528) | Fully delegated | 9.7 |
| [timm\_regnety\_120](https://github.com/huggingface/pytorch-image-models/blob/edc37be1c3804a06c4c02b6377c214e5c66633b8/timm/models/regnet.py#L1110) | Fully delegated | 12.1 |
| [torchaudio\_deepspeech](https://pytorch.org/audio/stable/_modules/torchaudio/models/deepspeech.html#DeepSpeech) | Fully delegated | 4.6 |
| [torchaudio\_wav2letter](https://pytorch.org/audio/stable/generated/torchaudio.models.Wav2Letter.html#torchaudio.models.Wav2Letter) | Fully delegated | 4.8 |
| [torchvision\_alexnet](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.alexnet.html) | Fully delegated | 3.3 |
| [torchvision\_deeplabv3\_mobilenet\_v3\_large](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.segmentation.deeplabv3_mobilenet_v3_large.html) | Fully delegated | 5.7 |
| [torchvision\_deeplabv3\_resnet101](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.segmentation.deeplabv3_resnet101.html) | Fully delegated | 35.1 |
| [torchvision\_deeplabv3\_resnet50](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.segmentation.deeplabv3_resnet50.html) | Fully delegated | 24.5 |
| [torchvision\_densenet121](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.densenet121.html) | Fully delegated | 13.9 |
| [torchvision\_efficientnet\_b0](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b0.html) | Fully delegated | 3.6 |
| [torchvision\_efficientnet\_b1](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b1.html) | Fully delegated | 4.7 |
| [torchvision\_efficientnet\_b2](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b2.html) | Fully delegated | 5.0 |
| [torchvision\_efficientnet\_b3](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b3.html) | Fully delegated | 6.1 |
| [torchvision\_efficientnet\_b4](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b4.html) | Fully delegated | 7.6 |
| [torchvision\_efficientnet\_b5](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b5.html) | Fully delegated | 8.6 |
| [torchvision\_efficientnet\_b6](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b6.html) | Fully delegated | 11.2 |
| [torchvision\_efficientnet\_b7](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.efficientnet_b7.html) | Fully delegated | 14.7 |
| [torchvision\_fcn\_resnet50](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.segmentation.fcn_resnet50.html) | Fully delegated | 19.9 |
| [torchvision\_googlenet](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.googlenet.html) | Fully delegated | 3.9 |
| [torchvision\_inception\_v3](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.inception_v3.html) | Fully delegated | 8.6 |
| [torchvision\_lraspp\_mobilenet\_v3\_large](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.segmentation.lraspp_mobilenet_v3_large.html) | Fully delegated | 3.3 |
| [torchvision\_mnasnet0\_5](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.mnasnet0_5.html) | Fully delegated | 2.4 |
| [torchvision\_mobilenet\_v2](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.mobilenet_v2.html) | Fully delegated | 2.8 |
| [torchvision\_mobilenet\_v3\_large](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.mobilenet_v3_large.html) | Fully delegated | 2.8 |
| [torchvision\_mobilenet\_v3\_small](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.mobilenet_v3_small.html) | Fully delegated | 2.3 |
| [torchvision\_resnet152](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.resnet152.html) | Fully delegated | 15.0 |
| [torchvision\_resnet18](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.resnet18.html) | Fully delegated | 4.3 |
| [torchvision\_resnet50](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.resnet50.html) | Fully delegated | 6.9 |
| [torchvision\_squeezenet1\_0](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.squeezenet1_0.html) | Fully delegated | 2.9 |
| [torchvision\_squeezenet1\_1](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.squeezenet1_1.html) | Fully delegated | 2.5 |
| [torchvision\_vgg16](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.vgg16.html) | Fully delegated | 13.4 |
| [torchvision\_wide\_resnet101\_2](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.wide_resnet101_2.html#torchvision.models.wide_resnet101_2) | Fully delegated | 25.0 |
| [torchvision\_wide\_resnet50\_2](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.wide_resnet50_2.html) | Fully delegated | 13.4 |
| [u2net\_full](https://github.com/xuebinqin/U-2-Net) | Fully delegated | 98.3 |
| [u2net\_lite](https://github.com/xuebinqin/U-2-Net) | Fully delegated | 51.4 |
| [hf\_distil\_whisper\_small\_no\_cache](https://github.com/huggingface/distil-whisper) | Partially delegated | 251.9 |
| [hf\_distilbert](https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english) | Partially delegated | 13.7 |
| [hf\_tinyroberta\_squad2](https://huggingface.co/deepset/tinyroberta-squad2) | Partially delegated | 17.1 |
| [hf\_tinyroberta\_squad2\_dynamic\_batch](https://huggingface.co/deepset/tinyroberta-squad2) | Partially delegated | 52.1 |
| [snapml\_StyleTransferNet](https://github.com/Snapchat/snapml-templates/blob/main/Style%20Transfer/style_transfer.ipynb) | Partially delegated | 40.9 |
| [timm\_efficientformer\_l1](https://github.com/huggingface/pytorch-image-models/blob/main/timm/models/efficientformer.py) | Partially delegated | 17.6 |
| [timm\_efficientformerv2\_s0](https://github.com/huggingface/pytorch-image-models/blob/main/timm/models/efficientformer_v2.py) | Partially delegated | 16.1 |
| [timm\_pvt\_v2\_b1](https://github.com/huggingface/pytorch-image-models/blob/edc37be1c3804a06c4c02b6377c214e5c66633b8/timm/models/pvt_v2.py#L525) | Partially delegated | 73.5 |
| [timm\_pvt\_v2\_b3](https://github.com/huggingface/pytorch-image-models/blob/edc37be1c3804a06c4c02b6377c214e5c66633b8/timm/models/pvt_v2.py#L525) | Partially delegated | 246.7 |
| [timm\_resnest14d](https://github.com/huggingface/pytorch-image-models/blob/edc37be1c3804a06c4c02b6377c214e5c66633b8/timm/models/resnest.py#L163) | Partially delegated | 88.9 |
| [torchaudio\_conformer](https://pytorch.org/audio/stable/generated/torchaudio.models.Conformer.html) | Partially delegated | 21.5 |
| [torchvision\_convnext\_tiny](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.convnext_tiny.html) | Partially delegated | 8.2 |
| [torchvision\_maxvit\_t](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.maxvit_t.html#torchvision.models.maxvit_t) | Partially delegated | 194.0 |
| [torchvision\_shufflenet\_v2](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.shufflenet_v2_x1_0.html) | Partially delegated | 9.5 |
| [torchvision\_swin\_tiny](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.swin_t.html) | Partially delegated | 164.4 |
| [torchvision\_video\_resnet2plus1d\_18](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.video.r2plus1d_18.html) | Partially delegated | 6832.0 |
| [torchvision\_video\_swin3d\_tiny](https://docs.pytorch.org/vision/main/models/generated/torchvision.models.video.swin3d_t.html) | Partially delegated | 2617.8 |
| [yolox\_tiny](https://github.com/Megvii-BaseDetection/YOLOX/blob/main/yolox/exp/yolox_base.py) | Partially delegated | 11.2 |






Send feedback