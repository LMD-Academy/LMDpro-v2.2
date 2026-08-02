# LiteRT CompiledModel Python API Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/python))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The LiteRT `CompiledModel` API is available in Python, offering a high-level
interface for compiling and running TFLite models with the LiteRT runtime.

The following guide shows basic CPU inference with the `CompiledModel` Python
API.

## Install the pip package

Install the LiteRT pip package in your Python environment:

```
pip install ai-edge-litert
```

## Basic inference

### Create `CompiledModel`

Create a compiled model from a `.tflite` file. The current Python wrapper
compiles for CPU by default.

```
from ai_edge_litert.compiled_model import CompiledModel

model = CompiledModel.from_file("mymodel.tflite")
```

You can also create a compiled model from an in-memory buffer:

```
from ai_edge_litert.compiled_model import CompiledModel

with open("mymodel.tflite", "rb") as f:
  model = CompiledModel.from_buffer(f.read())
```

### Create Input and Output Buffers

Create the necessary data structures (buffers) to hold the input data that you
will feed into the model for inference, and the output data that the model
produces after running inference.

```
signature_index = 0
input_buffers = model.create_input_buffers(signature_index)
output_buffers = model.create_output_buffers(signature_index)
```

The `signature_index` value of `0` selects the first signature in the model.

If you are using CPU memory, fill the inputs by writing NumPy arrays directly
into the input buffers.

```
import numpy as np

input_data = np.array([[1.0, 2.0, 3.0, 4.0]], dtype=np.float32)
input_buffers[0].write(input_data)
```

### Invoke the model

Providing the input and output buffers, run the model.

```
model.run_by_index(signature_index, input_buffers, output_buffers)
```

### Retrieve Outputs

Retrieve outputs by directly reading the model output from memory.

```
import numpy as np

# Replace num_elements with the size of your model's output tensor.
num_elements = 4
output_array = output_buffers[0].read(num_elements, np.float32)
```

## Use `TensorBuffer`

LiteRT provides built-in support for I/O buffer interoperability through the
`TensorBuffer` API, which supports writing NumPy arrays (`write`) and reading
NumPy arrays (`read`). Supported dtypes are `np.float32`, `np.int32`, and
`np.int8`.

You can also create a buffer backed by existing host memory:

```
import numpy as np
from ai_edge_litert.tensor_buffer import TensorBuffer

input_array = np.array([[1.0, 2.0, 3.0, 4.0]], dtype=np.float32)
input_buffer = TensorBuffer.create_from_host_memory(input_array)
```

To run by signature name, first inspect the model signatures and then supply
maps from input/output names to `TensorBuffer` instances:

```
from ai_edge_litert.tensor_buffer import TensorBuffer

signatures = model.get_signature_list()
# Example signature structure:
# {"serving_default": {"inputs": ["input_0"], "outputs": ["output_0"]}}

input_buffer = TensorBuffer.create_from_host_memory(input_array)
output_buffer = model.create_output_buffer_by_name("serving_default", "output_0")

model.run_by_name(
  "serving_default",
  {"input_0": input_buffer},
  {"output_0": output_buffer},
)
```

For a more complete view of how the TensorBuffer API is implemented, see the
source code at
[TensorBuffer](https://github.com/google-ai-edge/LiteRT/blob/main/litert/python/litert_wrapper/tensor_buffer_wrapper/tensor_buffer.py).

### Use GPU Accelerator

If you have GPU, you can use it just by adding `HardwareAccelerator.GPU` option
to CompiledModel creation API.

```
from ai_edge_litert.compiled_model import CompiledModel
from ai_edge_litert.compiled_model import HardwareAccelerator

model = CompiledModel.from_file("mymodel.tflite", HardwareAccelerator.GPU)
```

Check [this](https://developers.google.com/edge/litert/next/gpu#supported-backend) to see which backend is supported for your
platform.

**Note:** Windows needs DirectXShaderCompiler. Download the dxc\_2025\_07\_14.zip or
the latest zip file from
https://github.com/microsoft/DirectXShaderCompiler/releases , extract the file
and locate the right architecture directory under bin, copy the `dxil.dll` and
`dxcompiler.dll` into the same directory as the ai\_edge\_litert package.
(Can see the location from `pip show ai-edge-litert`)

Send feedback
