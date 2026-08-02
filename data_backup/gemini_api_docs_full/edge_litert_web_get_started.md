--- source: https://ai.google.dev/edge/litert/web/get_started ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Get started with LiteRT.js Stay organized with collections Save and categorize content based on your preferences.



This is an end-to-end LiteRT.js guide covering the process of converting a
PyTorch model to run in the browser, leveraging backends including WebGPU and
WebNN. This example uses
[ResNet18](https://docs.pytorch.org/vision/2.0/models/generated/torchvision.models.resnet18.html)
for the vision model, and [TensorFlow.js](https://www.tensorflow.org/js) for
pre- and post-processing.

The guide will cover the following steps:

1. Convert your PyTorch model to LiteRT using [LiteRT
   Torch](https://github.com/google-ai-edge/litert-torch?tab=readme-ov-file#pytorch-converter).
   1. Add the LiteRT package to your web app.
2. Load the model.
3. Write pre- and post-processing logic.

## Convert to LiteRT

Use the [PyTorch Converter
notebook](https://github.com/google-ai-edge/litert-torch/blob/main/docs/pytorch_converter/getting_started.ipynb)
to convert a PyTorch model to the appropriate `.tflite` format. For an in-depth
guide on the types of errors you may encounter and how to fix them, see the [AI
Edge Torch Converter
README](https://github.com/google-ai-edge/litert-torch/blob/main/docs/pytorch_converter/README.md).

Your model must be compatible with
[`torch.export.export`](https://pytorch.org/docs/stable/export.html), which
means it must be exportable with TorchDynamo. Therefore, it must not have any
python conditional branches that depend on the runtime values within tensors. If
you see the following [errors during
`torch.export.export`](https://github.com/google-ai-edge/litert-torch/blob/main/docs/pytorch_converter/README.md#error-during-torchexportexport),
your model is not exportable with `torch.export.export`. Your model also must
not have any dynamic input or output dimensions on its tensors. This includes
batch dimension.

You can also start with a TensorRT-compatible or ONNX-exportable PyTorch model:

* A TensorRT-compatible version of a model can be a good starting point, since
  some types of TensorRT conversions also require models to be [TorchDynamo
  exportable](https://pytorch.org/TensorRT/user_guide/dynamo_export.html). If
  you use any NVIDIA / CUDA ops in the model, you will need to replace them
  with standard PyTorch ops.
* An ONNX-exportable PyTorch model can be a good starting point, though some
  ONNX models use TorchScript instead of TorchDynamo to export, in which case
  the model may not be TorchDynamo-exportable (although it's likely closer
  than the original model code).

For more information, see [Convert PyTorch models to
LiteRT](https://developers.google.com/edge/litert/conversion/pytorch/overview).

## Add the LiteRT package

You can add LiteRT.js to your project using NPM (`npm install @litertjs/core`),
or by referencing it directly from a CDN like JSDelivr. The following
examples use JSDelivr for ease of copy-pasting.

To get started, import LiteRT.js and load its Wasm files:

```
import {loadLiteRt} from 'https://cdn.jsdelivr.net/npm/@litertjs/core/+esm';

// Load the LiteRT.js Wasm files from a CDN.
await loadLiteRt('https://cdn.jsdelivr.net/npm/@litertjs/core/wasm/')
// Alternatively, host them from your server.
// They are located in node_modules/@litertjs/core/wasm/
await loadLiteRt(`your/path/to/wasm/`);
```

The `loadLiteRt` function loads the LiteRT WebAssembly (Wasm) module and
supporting files. Based on your browser environment and the options you
provide, `loadLiteRt` loads one of several different builds to support
different features. For example, to use WebNN you must load LiteRT with [JSPI](https://v8.dev/blog/jspi)
enabled, as described in [Load with WebNN acceleration](#load-webNN).

## Platform Requirements

Depending on the hardware accelerator you plan to use, your browser environment
must meet specific conditions.

### WebGPU Requirements

WebGPU enables generic graphics acceleration on any system with a GPU.

* **[Browser Support:](https://caniuse.com/?search=webgpu)**
  + Chrome and Microsoft Edge (113+)
  + Safari (17.4+)
  + Firefox (121+, partial support)
* **Hardware:** A system with a discrete or integrated GPU.

### WebNN Requirements

WebNN targets dedicated Neural Processing Units (NPUs) or system-level ML
frameworks. Node that WebNN is still experimental, requiring strict browser
configurations, and has not yet been made generally available by any browser.

* **[Browser Support:](https://caniuse.com/?search=webnn)**
  + Experimental support in Chromium-based (121+) browsers (Chrome, Edge).
* **Browser Activation (Flags):**
  + Enable `#web-machine-learning-neural-network` in `chrome://flags`.
  + Enable JavaScript Promise Integration (JSPI) using `#enable-experimental-webassembly-features` or similar V8 flags.
* **OS Architecture Support:**
  + **Windows:** Requires DirectML-supported DirectX 12 hardware.
  + **MacOS:** Requires Apple Silicon
  + **Linux:** Requires OpenVINO configurations.
* **Architecture Driver Limits:** Ensure vendor-specific NPU drivers are installed.
* **JSPI:** LiteRT.js *requires* JSPI to bridge synchronous kernel scheduling
  with asynchronous WebNN device polling. You must load LiteRT.js with JSPI when
  using WebNN (`await loadLiteRt('...', {jspi: true});`).

## Load the model

Import and initialize LiteRT.js and the LiteRT-TFJS conversion utilities. You
may also want to import TensorFlow.js to perform pre-post processing of tensors
passed to or from LiteRT.js.

```
import {loadLiteRt, getWebGpuDevice} from 'https://cdn.jsdelivr.net/npm/@litertjs/core@2.5.0/+esm';
import {runWithTfjsTensors} from 'https://cdn.jsdelivr.net/npm/@litertjs/tfjs-interop@2.5.0/+esm';

// TensorFlow.js imports
import * as tf from 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/+esm';
import {WebGPUBackend} from 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgpu/+esm';

async function main() {
  // Initialize TensorFlow.js WebGPU backend
  await tf.setBackend('webgpu');

  // Initialize LiteRT.js's Wasm files
  await loadLiteRt('https://cdn.jsdelivr.net/npm/@litertjs/core/wasm/');

  // Make TFJS use the same GPU device as LiteRT.js (for tensor conversion)
  const device = getWebGpuDevice();
  tf.removeBackend('webgpu');
  tf.registerBackend('webgpu', () => new WebGPUBackend(device, device.adapterInfo));
  await tf.setBackend('webgpu');
  // ...
}

main();
```

### Load with WebGPU acceleration

Load the converted LiteRT model targeting Generic WebGPU graphics evaluators.
This is standard for modern fast inference:

```
import {loadLiteRt, loadAndCompile} from 'https://cdn.jsdelivr.net/npm/@litertjs/core/+esm';

await loadLiteRt('https://cdn.jsdelivr.net/npm/@litertjs/core/wasm/');

const model = await loadAndCompile('path_to_model.tflite', {
  accelerator: 'webgpu',
});
```

### Load with WebNN acceleration (dedicated NPUs)

Load the converted LiteRT model leveraging dedicated hardware.
Ensure JSPI is enabled in `loadLiteRt`:

```
import {loadLiteRt, loadAndCompile} from 'https://cdn.jsdelivr.net/npm/@litertjs/core/+esm';

// Ensure JSPI is passed true to bridge asynchronous WebNN drivers
await loadLiteRt('https://cdn.jsdelivr.net/npm/@litertjs/core/wasm/', {jspi: true});

const model = await loadAndCompile('path_to_model.tflite', {
  accelerator: 'webnn',
  webNNOptions: {devicePreference: 'npu'} // Targets dedicated neural silicon
});
```

## Write the model pipeline

**Tip:** Before writing the model pipeline, test the model by adding fake inputs and
running the LiteRT.js model tester. For more information, see [Testing with fake
inputs](#testing-fake-inputs).

Write the pre- and post-processing logic that connects the model to your app.
Using TensorFlow.js for pre- and post-processing is recommended, but if it is
not written in TensorFlow.js, you can call [`await
tensor.data`](https://js.tensorflow.org/api/latest/#tf.Tensor.data) to get the
value as an ArrayBuffer or [`await
tensor.array`](https://js.tensorflow.org/api/latest/#tf.Tensor.array) to get a
structured JS array.

**Note:** Avoid TensorFlow.js's `tensor.dataSync`, since this has significant
performance penalties when using the WebGPU backend.

The following is an example end-to-end pipeline for ResNet18:

```
// Wrap in a tf.tidy call to automatically clean up intermediate TensorFlow.js tensors.
// (Note: tidy only supports synchronous functions).
const imageData = tf.tidy(() => {
  // Get RGB data values from an image element and convert it to range [0, 1).
  const image = tf.browser.fromPixels(dogs, 3).div(255);

  // These preprocessing steps come from https://github.com/pytorch/vision/blob/main/torchvision/models/resnet.py#L315
  // The mean and standard deviation for the image normalization come from https://github.com/pytorch/vision/blob/main/torchvision/transforms/_presets.py#L38
  return image.resizeBilinear([224, 224])
    .sub([0.485, 0.456, 0.406])
    .div([0.229, 0.224, 0.225])
    .reshape([1, 224, 224, 3])
    .transpose([0, 3, 1, 2]);
});

// Run the model
const outputs = await runWithTfjsTensors(model, [imageData]);
const probabilities = outputs[0];

// Get the top five classes.
const top5 = tf.topk(probabilities, 5);

const values = await top5.values.data();
const indices = await top5.indices.data();

// Clean up TFJS tensors
tf.dispose(outputs);
tf.dispose(top5);
tf.dispose(imageData);

// Print the top five classes.
const classes = ... // Class names are loaded from a JSON file in the demo.
for (let i = 0; i < 5; ++i) {
  const text = `${classes[indices[i]]}: ${values[i]}`;
  console.log(text);
}
```

## Testing and troubleshooting

Refer to the following sections on ways to test your application and handle
errors.

### Testing with fake inputs

After loading a model, it's a good idea to test the model with fake inputs
first. This will catch any runtime errors before you spend the time writing the
pre and post processing logic for your model pipeline. To check this, you can
use the LiteRT.js Model Tester or test it manually.

#### LiteRT.js Model Tester

The LiteRT.js Model Tester runs your model on WebNN, WebGPU and CPU using random
inputs to verify that the model runs correctly. It checks Whether the graph can
be executed on the specialized WebGPU or WebNN backends, and if so, benchmarks
the model over a configurable number of runs.

To run the LiteRT.js Model Tester, run `npm i @litertjs/model-tester` and then
`npx model-tester`. It will open a browser tab for you to run your model.

#### Manual model testing

If you prefer to manually test the model instead of using the LiteRT.js model
tester (`@litertjs/model-tester`), you can generate fake inputs and run the
model with `runWithTfjsTensors`.

To generate fake inputs, you need to know the names and shapes of the input
tensors. These can be found with LiteRT.js by calling `model.getInputDetails` or
`model.getOutputDetails`. Alternatively, use [Model
Explorer](https://github.com/google-ai-edge/model-explorer).

Once you know the input and output shapes and names, you can test the model with
a fake input. This gives some confidence that the model will run before you
write the rest of the machine learning pipeline. This would test that all model
operations are supported. For example:

```
// Imports, initialization, and model loading...
// Create fake inputs for the model
const fakeInputs = model.getInputDetails().map(
    ({shape, dtype}) => tf.ones(shape, dtype));

// Run the model
const outputs = await runWithTfjsTensors(model, fakeInputs);
console.log(outputs);
```

### Error types

Some LiteRT models may not be supported by LiteRT.js. Errors usually fall into
these categories:

* **Shape Mismatch**: A known bug that only affects GPU.
* **Operation Not Supported**: The semantic runtime doesn't contain a mapped
  implementation for an operation present in the requested model topology.
  Hardware backends (like WebGPU or WebNN) exhibit disparate coverage as compared
  to CPU, so falling back to 'wasm' is often an adequate solution.
* **Unsupported Tensor Type**: Specifically constrained to robust computation
  pathways, LiteRT.js exclusively bounds int32 and float32 buffer layouts at the
  tensor evaluation stage. (i.e. I/O to the model must be 4-byte aligned)
* **Model Too Large**: Suboptimal buffer alignments or raw artifact sizes
  occasionally exceed the WASM memory limit present in certain environments,
  solutions for WebGPU / WebNN are underway.

#### Operation Not Supported

This indicates that the backend being used does not support one of the
operations in the model. You will need to rewrite the original PyTorch model to
avoid this op and re-convert it, or you may be able to run the model on CPU.

In the case of `BROADCAST_TO`, this may be solved by making the batch dimension
the same for every input tensor to the model. Other cases may be more
complicated.

**Note:** LiteRT.js does not support partial delegation, where part of the model can
run on CPU while another part can run on GPU.

#### Unsupported Tensor Type

LiteRT.js only supports int32 and float32 tensors for the model's inputs and
outputs.

#### Model Too Large

This usually appears as a call to `Aborted()` or a memory allocation failure at
model-loading time. LiteRT.js is limited in the size of models it can load, so
if you're seeing this, your model may be too large. You can try quantizing the
weights with the
[ai-edge-quantizer](https://github.com/google-ai-edge/ai-edge-quantizer), but
keep computations at float32 or float16, and model inputs and outputs as float32
or int32.






Send feedback