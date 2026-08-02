# LiteRT CompiledModel C++ API Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/cpp))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The LiteRT `CompiledModel` API is available in C++, giving developers
fine-grained control over memory allocation and low-level development. For an
example, see the [Image segmentation C++ App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/image_segmentation/c%2B%2B_segmentation/build_from_source).

The following guide shows the basic CPU inference of the `CompiledModel` Kotlin
API. See guide on [GPU acceleration](https://developers.google.com/edge/litert/next/gpu) and [NPU acceleration](https://developers.google.com/edge/litert/next/npu) for
advanced acceleration features.

## Add build dependency

Choose the path that fits your project:

* **Use prebuilt library (cross-platform)**: Use the LiteRT prebuilt library
  for instant setup. See how to use the prebuilt C++ library
  [from LiteRT Maven package on Android](https://developers.google.com/edge/litert/next/android_cpp_sdk), or download/integrate
  the prebuilt C++ binary on [Android, iOS, macOS, Linux, and Windows](https://developers.google.com/edge/litert/next/cpp_sdk).
* **Build from source (cross-platform)**: Build from source with CMake for full
  control and multi-platform support (Android, iOS, macOS, Linux, Windows). See
  details in this [guide](https://ai.google.dev/edge/litert/build/cmake_litert).

## Basic inference

This section shows how the basic inference is performed.

### Create the environment

The `Environment` object provides a runtime environment that includes components
such as the path of the compiler plugin and GPU contexts. The `Environment` is
required when creating `CompiledModel` and `TensorBuffer`. The following code
creates an `Environment` for CPU and GPU execution without any options:

```
LITERT_ASSIGN_OR_RETURN(auto env, Environment::Create({}));
```

**Tip:** Use `LITERT_ASSIGN_OR_RETURN` where possible. For more information, see
[Error Handling](#error-handling).

### Create the `CompiledModel`

After obtaining a LiteRT model, or converting a model into the `.tflite` format,
initialize the runtime with the model file using the `CompiledModel` API.
You can specify the hardware acceleration at this point
(`kLiteRtHwAcceleratorCpu` or `kLiteRtHwAcceleratorGpu`):

```
LITERT_ASSIGN_OR_RETURN(auto compiled_model,
  CompiledModel::Create(env, model, kLiteRtHwAcceleratorCpu));
```

### Create Input and Output Buffers

Create the necessary data structures (buffers) to hold the input data that you
will feed into the model for inference, and the output data that the model
produces after running inference.

```
LITERT_ASSIGN_OR_RETURN(auto input_buffers, compiled_model.CreateInputBuffers());
LITERT_ASSIGN_OR_RETURN(auto output_buffers, compiled_model.CreateOutputBuffers());
```

If you are using CPU memory, fill the inputs by writing data directly into the
first input buffer.

```
input_buffers[0].Write<float>(absl::MakeConstSpan(input_data, input_size));
```

### Invoke the model

Providing the input and output buffers, run the Compiled Model with the model
and hardware acceleration specified in previous steps.

```
compiled_model.Run(input_buffers, output_buffers);
```

### Retrieve Outputs

Retrieve outputs by directly reading the model output from memory.

```
std::vector<float> data(output_data_size);
output_buffers[0].Read<float>(absl::MakeSpan(data));
// ... process output data
```

## Key concepts and components

Refer to the following sections for information on key concepts and components
of the LiteRT `CompiledModel` API.

### Error Handling

LiteRT uses `litert::Expected` to either return values or propagate errors in a
similar way to `absl::StatusOr` or `std::expected`. You can manually check for
the error yourself.

For convenience, LiteRT provides the following macros:

* `LITERT_ASSIGN_OR_RETURN(lhs, expr)` assigns the result of `expr` to `lhs` if
  it doesn't produce an error and otherwise returns the error.

  It will expand to something like the following snippet.

  ```
  auto maybe_model = CompiledModel::Create(env, "mymodel.tflite", HwAccelerators::kCpu);
  if (!maybe_model) {
    return maybe_model.Error();
  }
  auto model = std::move(maybe_model.Value());
  ```
* `LITERT_ASSIGN_OR_ABORT(lhs, expr)` does the same as `LITERT_ASSIGN_OR_RETURN`
  but aborts the program in case of error.
* `LITERT_RETURN_IF_ERROR(expr)` returns `expr` if its evaluation produces an
  error.
* `LITERT_ABORT_IF_ERROR(expr)` does the same as `LITERT_RETURN_IF_ERROR` but
  aborts the program in case of error.

For more information on LiteRT macros, see [`litert_macros.h`](https://github.com/google-ai-edge/LiteRT/blob/main/litert/cc/litert_macros.h).

### Tensor Buffer (TensorBuffer)

LiteRT provides built-in support for I/O buffer interoperability, using the
Tensor Buffer API (`TensorBuffer`) to handle the flow of data into and out of
the compiled model. The Tensor Buffer API provides the ability to write
(`Write<T>()`) and read (`Read<T>()`), and lock CPU memory.

For a more complete view of how the `TensorBuffer` API is implemented, see the
source code for
[litert\_tensor\_buffer.h](https://github.com/google-ai-edge/LiteRT/blob/main/litert/cc/litert_tensor_buffer.h).

#### Query model input/output requirements

The requirements for allocating a Tensor Buffer (`TensorBuffer`) are typically
specified by the hardware accelerator. Buffers for inputs and outputs can have
requirements regarding alignment, buffer strides, and memory type. You can use
helper functions like `CreateInputBuffers` to automatically handle these
requirements.

The following simplified code snippet demonstrates how you can retrieve the
buffer requirements for input data:

```
LITERT_ASSIGN_OR_RETURN(auto reqs, compiled_model.GetInputBufferRequirements(signature_index, input_index));
```

For a more complete view of how the `TensorBufferRequirements` API is
implemented, see the source code for
[litert\_tensor\_buffer\_requirements.h](https://github.com/google-ai-edge/LiteRT/blob/main/litert/cc/litert_tensor_buffer_requirements.h).

#### Create Managed Tensor Buffers (TensorBuffers)

The following simplified code snippet demonstrates how to create Managed Tensor
Buffers, where the `TensorBuffer` API allocates the respective buffers:

```
LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_cpu,
TensorBuffer::CreateManaged(env, /*buffer_type=*/kLiteRtTensorBufferTypeHostMemory,
  ranked_tensor_type, buffer_size));

LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_gl, TensorBuffer::CreateManaged(env,
  /*buffer_type=*/kLiteRtTensorBufferTypeGlBuffer, ranked_tensor_type, buffer_size));

LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_ahwb, TensorBuffer::CreateManaged(env,
  /*buffer_type=*/kLiteRtTensorBufferTypeAhwb, ranked_tensor_type, buffer_size));
```

#### Create Tensor Buffers with zero-copy

To wrap an existing buffer as a Tensor Buffer (zero-copy), use the following
code snippet:

```
// Create a TensorBuffer from host memory
LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_from_host,
  TensorBuffer::CreateFromHostMemory(env, ranked_tensor_type,
  ptr_to_host_memory, buffer_size));

// Create a TensorBuffer from GlBuffer
LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_from_gl,
  TensorBuffer::CreateFromGlBuffer(env, ranked_tensor_type, gl_target, gl_id,
  size_bytes, offset));

// Create a TensorBuffer from AHardware Buffer
LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_from_ahwb,
  TensorBuffer::CreateFromAhwb(env, ranked_tensor_type, ahardware_buffer, offset));
```

#### Reading and writing from Tensor Buffer

The following snippet demonstrates how you can read from an input buffer and
write to an output buffer:

```
// Example of reading to input buffer:
std::vector<float> input_tensor_data = {1,2};
LITERT_ASSIGN_OR_RETURN(auto write_success,
  input_tensor_buffer.Write<float>(absl::MakeConstSpan(input_tensor_data)));
if(write_success){
  /* Continue after successful write... */
}

// Example of writing to output buffer:
std::vector<float> data(total_elements);
LITERT_ASSIGN_OR_RETURN(auto read_success,
  output_tensor_buffer.Read<float>(absl::MakeSpan(data)));
if(read_success){
  /* Continue after successful read */
}
```

### Advanced: Zero-copy buffer interop for specialized hardware buffer types

Certain buffer types, such as `AHardwareBuffer`, allow for interoperability with
other buffer types. For example, an OpenGL buffer can be created from an
`AHardwareBuffer` with zero-copy. The following code-snippet shows an example:

```
LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_ahwb,
  TensorBuffer::CreateManaged(env, kLiteRtTensorBufferTypeAhwb,
  ranked_tensor_type, buffer_size));
// Buffer interop: Get OpenGL buffer from AHWB,
// internally creating an OpenGL buffer backed by AHWB memory.
LITERT_ASSIGN_OR_RETURN(auto gl_buffer, tensor_buffer_ahwb.GetGlBuffer());
```

OpenCL buffers can also be created from `AHardwareBuffer`:

```
LITERT_ASSIGN_OR_RETURN(auto cl_buffer, tensor_buffer_ahwb.GetOpenClMemory());
```

On mobile devices that support interoperability between OpenCL and OpenGL, CL
buffers can be created from GL buffers:

```
LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_from_gl,
  TensorBuffer::CreateFromGlBuffer(env, ranked_tensor_type, gl_target, gl_id,
  size_bytes, offset));

// Creates an OpenCL buffer from the OpenGL buffer, zero-copy.
LITERT_ASSIGN_OR_RETURN(auto cl_buffer, tensor_buffer_from_gl.GetOpenClMemory());
```

## Example implementations

Refer to the following implementations of LiteRT in C++.

### Basic Inference (CPU)

The following is a condensed version of the code snippets from the [Get
Started](https://developers.google.com/edge/litert/next/overview) section. It is the simplest implementation of inference
with LiteRT.

```
// Load model and initialize runtime
LITERT_ASSIGN_OR_RETURN(auto env, Environment::Create({}));
LITERT_ASSIGN_OR_RETURN(auto compiled_model, CompiledModel::Create(env, "mymodel.tflite",
  kLiteRtHwAcceleratorCpu));

// Preallocate input/output buffers
LITERT_ASSIGN_OR_RETURN(auto input_buffers, compiled_model.CreateInputBuffers());
LITERT_ASSIGN_OR_RETURN(auto output_buffers, compiled_model.CreateOutputBuffers());

// Fill the first input
float input_values[] = { /* your data */ };
input_buffers[0].Write<float>(absl::MakeConstSpan(input_values, /*size*/));

// Invoke
compiled_model.Run(input_buffers, output_buffers);

// Read the output
std::vector<float> data(output_data_size);
output_buffers[0].Read<float>(absl::MakeSpan(data));
```

### Zero-Copy with Host Memory

The LiteRT `CompiledModel` API reduces the friction of inference pipelines,
especially when dealing with multiple hardware backends and zero-copy flows. The
following code snippet uses the `CreateFromHostMemory` method when creating the
input buffer, which uses zero-copy with host memory.

```
// Define an LiteRT environment to use existing EGL display and context.
const std::vector<Environment::Option> environment_options = {
   {OptionTag::EglDisplay, user_egl_display},
   {OptionTag::EglContext, user_egl_context}};
LITERT_ASSIGN_OR_RETURN(auto env,
   Environment::Create(absl::MakeConstSpan(environment_options)));

// Load model1 and initialize runtime.
LITERT_ASSIGN_OR_RETURN(auto compiled_model1, CompiledModel::Create(env, "model1.tflite", kLiteRtHwAcceleratorGpu));

// Prepare I/O buffers. opengl_buffer is given outside from the producer.
LITERT_ASSIGN_OR_RETURN(auto tensor_type, model.GetInputTensorType("input_name0"));
// Create an input TensorBuffer based on tensor_type that wraps the given OpenGL Buffer.
LITERT_ASSIGN_OR_RETURN(auto tensor_buffer_from_opengl,
    litert::TensorBuffer::CreateFromGlBuffer(env, tensor_type, opengl_buffer));

// Create an input event and attach it to the input buffer. Internally, it creates
// and inserts a fence sync object into the current EGL command queue.
LITERT_ASSIGN_OR_RETURN(auto input_event, Event::CreateManaged(env, LiteRtEventTypeEglSyncFence));
tensor_buffer_from_opengl.SetEvent(std::move(input_event));

std::vector<TensorBuffer> input_buffers;
input_buffers.push_back(std::move(tensor_buffer_from_opengl));

// Create an output TensorBuffer of the model1. It's also used as an input of the model2.
LITERT_ASSIGN_OR_RETURN(auto intermedidate_buffers,  compiled_model1.CreateOutputBuffers());

// Load model2 and initialize runtime.
LITERT_ASSIGN_OR_RETURN(auto compiled_model2, CompiledModel::Create(env, "model2.tflite", kLiteRtHwAcceleratorGpu));
LITERT_ASSIGN_OR_RETURN(auto output_buffers, compiled_model2.CreateOutputBuffers());

compiled_model1.RunAsync(input_buffers, intermedidate_buffers);
compiled_model2.RunAsync(intermedidate_buffers, output_buffers);
```

Send feedback
