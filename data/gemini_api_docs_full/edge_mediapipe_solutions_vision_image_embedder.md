# Image embedding task guide Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_embedder))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

![Two example images of ice cream cones that include the numerical embeddings of the images as arrays](/static/mediapipe/images/solutions/examples/image_embedder.png)

The MediaPipe Image Embedder task lets you create a numeric representation of an image,
which is useful in accomplishing various ML-based image tasks. This
functionality is frequently used to compare the similarity of two images using
mathematical comparison techniques such as Cosine Similarity. This task operates
on image data with a machine learning (ML) model as static data or a continuous
stream, and outputs a numeric representation of the image data as a list of
high-dimensional feature vectors, also known as embedding vectors, in either
floating-point or quantized form.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_embedder)

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, using a recommended model, and provide code
examples with the recommended configuration options:

* **Android** - [Code
  example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_embedder/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/android)
* **Python** - [Code
  example](https://colab.sandbox.google.com/github/googlesamples/mediapipe/blob/main/examples/image_embedder/python/image_embedder.ipynb) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/python)
* **Web** - [Code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/image-embedder.ts) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_embedder/web_js)

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

* **Input image processing** - Processing includes image rotation, resizing,
  normalization, and color space conversion.
* **Region of interest** - Performs embedding on a region of the image instead
  of the whole image.
* **Embedding similarity computation** - Built-in utility function to compute
  the [cosine similarity](https://en.wikipedia.org/wiki/Cosine_similarity)
  between two feature vectors
* **Quantization** - Supports scalar quantization for the feature vectors.

| Task inputs | Task outputs |
| --- | --- |
| Input can be one of the following data types:   * Still images  * Decoded video frames  * Live video feed | Image Embedder outputs a list of embeddings consisting of:   * Embedding: the feature vector itself, either in floating-point form or   scalar-quantized.  * Head index: the index for the head that produced this embedding.  * Head name (optional): the name of the head that produced this embedding. |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `running_mode` | Sets the running mode for the task. There are three modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video.    LIVE\_STREAM: The mode for a livestream of input data, such as from a camera. In this mode, resultListener must be called to set up a listener to receive results asynchronously. | {`IMAGE, VIDEO, LIVE_STREAM`} | `IMAGE` |
| `l2_normalize` | Whether to normalize the returned feature vector with L2 norm. Use this option only if the model does not already contain a native L2\_NORMALIZATION TFLite Op. In most cases, this is already the case and L2 normalization is thus achieved through TFLite inference with no need for this option. | `Boolean` | `False` |
| `quantize` | Whether the returned embedding should be quantized to bytes via scalar quantization. Embeddings are implicitly assumed to be unit-norm and therefore any dimension is guaranteed to have a value in [-1.0, 1.0]. Use the l2\_normalize option if this is not the case. | `Boolean` | `False` |
| `result_callback` | Sets the result listener to receive the embedding results asynchronously when the Image Embedder is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | Not set |

**Note:** The `resultListener` is dependent on `runningMode`. Only set the
`resultListener` when `runningMode` is set to `LIVE_STREAM`.

## Models

The Image Embedder requires an image embedding model to be downloaded and stored
in your project directory. Start with the default, recommended model for your
target platform when you start developing with this task. The other available
models typically make trade-offs between performance, accuracy, resolution, and
resource requirements, and in some cases, include additional features.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### MobileNetV3 model

This model family uses a [MobileNet V3](https://arxiv.org/abs/1905.02244)
architecture and was trained using [ImageNet](https://www.image-net.org) data.
This model uses a multiplier of 0.75 for the depth (number of features) in the
convolutional layers to tune the accuracy-latency trade off. In addition,
MobileNet V3 comes in two different sizes, small and large, to adapt the network
to low or high resource use cases.

| Model name | Input shape | Quantization type | Versions |
| --- | --- | --- | --- |
| [MobileNet-V3 (small)](https://storage.googleapis.com/mediapipe-models/image_embedder/mobilenet_v3_small/float32/latest/mobilenet_v3_small.tflite) 224 x 224 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/image_embedder/mobilenet_v3_small/float32/latest/mobilenet_v3_small.tflite) | |
| [MobileNet-V3 (large)](https://storage.googleapis.com/mediapipe-models/image_embedder/mobilenet_v3_large/float32/latest/mobilenet_v3_large.tflite) 224 x 224 | None (float32) | [Latest](https://storage.googleapis.com/mediapipe-models/image_embedder/mobilenet_v3_large/float32/latest/mobilenet_v3_large.tflite) | |

## Task benchmarks

Here's the task benchmarks for the whole pipeline based on the above
pre-trained models. The latency result is the average latency on Pixel 6 using
CPU / GPU.

| Model Name | CPU Latency | GPU Latency |
| --- | --- | --- |
| MobileNet-V3 (small) | 3.94ms | 7.83ms |||  |  |  |
| --- | --- | --- |
| MobileNet-V3 (large) | 9.75ms | 9.08ms ||

Send feedback
