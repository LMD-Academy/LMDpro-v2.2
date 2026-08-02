# Image embedding guide for Web Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_embedder/web_js))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Image Embedder task lets you convert image data into a numeric representation to accomplish ML-related image processing tasks, such as comparing the similarity of two images. These instructions show you how to use the Image Embedder
for Node and web apps.

For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index).

## Code example

The example code for Image Embedder provides a complete implementation of this
task in JavaScript for your reference. This code helps you test this task and
get started on building your own image embedding app. You can view, run,
and edit the Image Embedder
[example](https://stackblitz.com/https://github.com/google-ai-edge/mediapipe-samples-web/)
using just your web browser.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Image Embedder. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Web](/mediapipe/solutions/setup_web).

### JavaScript packages

Image Embedder code is available through the MediaPipe `@mediapipe/tasks-vision`
[NPM](https://www.npmjs.com/search?q=%40mediapipe) package. You can
find and download these libraries from links provided in the platform
[Setup guide](/mediapipe/solutions/setup_web#downloads).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

You can install the required packages with the following code for local staging
using the following command:

```
npm install @mediapipe/tasks-vision
```

If you want to import the task code via a content delivery network (CDN)
service, add the following code in the  tag in your HTML file:

```
<!-- You can replace jsDelivr with your preferred CDN -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs"
    crossorigin="anonymous"></script>
</head>
```

### Model

The MediaPipe Image Embedder task requires a trained model that is compatible with this
task. For more information on available trained models for Image Embedder, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/index#models).

Select and download a model, and then store it within your project directory:

```
<dev-project-root>/app/shared/models/
```

## Create the task

### Specify a model path

You can create a task with the default options using the `createFromModelPath()`
method:

```
const vision = await FilesetResolver.forVisionTasks(
  // path/to/wasm/root
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
);
  const imageEmbedder = await ImageEmbedder.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/image_embedder/mobilenet_v3_small/float32/1/mobilenet_v3_small.tflite`
    },
  });
```

### Specify the model buffer

If your model is already loaded into memory, you can use the
`createFromModelBuffer()` method:

```
const vision = await FilesetResolver.forVisionTasks(
  // path/to/wasm/root
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
);
const imageEmbedder = ImageEmbedder.createFromModelBuffer(
    vision, 
    new Uint8Array(...)
);
```

### Specify custom options

The MediaPipe Image Embedder task uses the `createFromOptions` function to set
up the task. The `createFromOptions` function accepts values for
configuration options. For more information on
configuration options, see [Configuration options](#configuration_options).

The following code demonstrates how to build and configure the task with custom
options:

```
const vision = await FilesetResolver.forVisionTasks(
  // path/to/wasm/root
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
);
const imageEmbedder = await ImageEmbedder.createFromOptions(
    vision,
    {
      baseOptions: {
        modelAssetPath: "model.tflite"
      },
      quantize: true
    });
```

### Configuration options

This task has the following configuration options for Web applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are two modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video or on a livestream of input data, such as from a camera. | {`IMAGE, VIDEO`} | `IMAGE` |
| `l2Normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2Normalize option if this is not the case. | `Boolean` | `False` |

## Prepare data

Image Embedder can embed images in any format supported by the
host browser. The task also handles data input preprocessing, including
resizing, rotation and value normalization.

Calls to the Image Embedder `embed()` and `embedForVideo()` methods run
synchronously and block the user interface thread. If you want to extract
feature vectors from video frames, each embedding will block the main thread.
You can prevent this by implementing web workers to run the `embed()` and
`embedForVideo()` methods on another thread.

## Run the task

The Image Embedder uses the `embed()` (with running mode `image`) and
`embedForVideo()` (with running mode `video`) methods to trigger
inferences. The Image Embedder API will return the embedding vectors for the
input image.

The following code demonstrates how execute the processing with the task model:

### Image

```
const image = document.getElementById("image") as HTMLImageElement;
const imageEmbedderResult = imageEmbedder.embed(image);
```

### Video

```
  const video = document.getElementById("webcam");

  const startTimeMs = performance.now();
  const embedderResult = await imageEmbedder.embedForVideo(video, startTimeMs);
```

## Handle and display results

Upon running inference, the Image Embedder task returns an
`ImageEmbedderResult` object which contains the embedding vectors for the input
image or frame.

The following shows an example of the output data from this task:

```
ImageEmbedderResult:
  Embedding #0 (sole embedding head):
    float_embedding: {0.0, 0.0, ..., 0.0, 1.0, 0.0, 0.0, 2.0}
    head_index: 0
```

This result was obtained by embedding the following image:

![Medium shot of an exotic cat](/static/mediapipe/images/solutions/image-embedder.jpg)

You can compare the semantic similarity of two embeddings using the
`ImageEmbedder.cosineSimilarity` function. See the following code for an
example.

```
// Compute cosine similarity.
const similarity = ImageEmbedder.cosineSimilarity(
  imageEmbedderResult.embeddings[0],
  otherEmbedderResult.embeddings[0]);
```

The Image Embedder example code demonstrates how to display the embedder
results returned from the task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/image-embedder.ts)
for details.

Send feedback
