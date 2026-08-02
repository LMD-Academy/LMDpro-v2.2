# Image generation guide Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_generator))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

**Deprecated:** MediaPipe Image Generator task is still available, but is no longer actively
maintained.

![Image generator task](https://storage.googleapis.com/mediapipe-assets/documentation/image_generator_racecar.gif)

**Note:** Use of the MediaPipe Image Generator task is subject to the [Generative AI Prohibited
Use Policy](https://policies.google.com/terms/generative-ai/use-policy).

The MediaPipe Image Generator task lets you generate images based on a text prompt. This
task uses a text-to-image model to generate images using diffusion techniques.

The task accepts a text prompt as input, along with an optional condition image
that the model can augment and use as a reference for generation. For more on
conditioned text-to-image generation, see [On-device diffusion plugins for
conditioned text-to-image
generation](https://blog.research.google/2023/06/on-device-diffusion-plugins-for.html).

Image Generator
can also generate images based on specific concepts provided to the model during
training or retraining. For more information, see [customize with
LoRA](https://github.com/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model_garden/model_garden_mediapipe_image_generation.ipynb).

## Get Started

Start using this task by following one of these implementation guides for your
target platform. These platform-specific guides walk you through a basic
implementation of this task, with code examples that use a default model and the
recommended configuration options:

* **Android** - [Code example](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_generation/android) - [Guide](https://developers.google.com/edge/mediapipe/solutions/vision/image_generator/android)
* **Customize with LoRA** - [Code
  example](https://colab.sandbox.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model_garden/model_garden_mediapipe_image_generation.ipynb) - [Colab](https://colab.sandbox.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model_garden/model_garden_mediapipe_image_generation.ipynb)

## Task details

This section describes the capabilities, inputs, outputs, and configuration
options of this task.

### Features

You can use the Image Generator to implement the following:

1. **Text-to-image generation** - Generate images with a text prompt.
2. **Image generation with condition images** - Generate images with a text
   prompt and a reference image. Image Generator uses condition images in ways
   similar to [ControlNet](https://arxiv.org/abs/2302.05543).
3. **Image generation with LoRA weights** - Generate images of specific people,
   objects, and styles with a text prompt using customized model weights.

| Task inputs | Task outputs |
| --- | --- |
| The Image Generator accepts the following inputs:   * Text prompt  * Seed  * Number of generative iterations  * Optional: condition image | The Image Generator outputs the following results:   * Generated image based on the inputs.  * Optional: Iterative snapshots of the generated image. |

### Configurations options

This task has the following configuration options:

| Option Name | Description | Value Range |
| --- | --- | --- |
| `imageGeneratorModelDirectory` | The image generator model directory storing the model weights. | `PATH` |
| `loraWeightsFilePath` | Sets the path to LoRA weights file. Optional and only applicable if the model was customized with LoRA. | `PATH` |
| `errorListener` | Sets an optional error listener. | `N/A` |

The task also supports plugin models, which lets users include condition images
in the task input, which the foundation model can augment and use as a reference
for generation. These condition images can be face landmarks, edge outlines, and
depth estimates, which the model uses as additional context and information to
generate images.

When adding a plugin model to the foundation model, also configure the plugin
options. The Face landmark plugin uses `faceConditionOptions`, the Canny edge
plugin uses `edgeConditionOptions`, and the Depth plugin uses
`depthConditionOptions`.

#### Canny edge options

Configure the following options in `edgeConditionOptions`.

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `threshold1` | First threshold for the hysteresis procedure. | `Float` | `100` |
| `threshold2` | Second threshold for the hysteresis procedure. | `Float` | `200` |
| `apertureSize` | Aperture size for the Sobel operator. Typical range is between 3-7. | `Integer` | `3` |
| `l2Gradient` | Whether the L2 norm is used to calculate the image gradient magnitude, instead of the default L1 norm. | `BOOLEAN` | `False` |
| `EdgePluginModelBaseOptions` | The `BaseOptions` object that sets the path for the plugin model. | `BaseOptions` object | `N/A` |

For more information on how these configuration options work, see
[Canny edge detector](https://en.wikipedia.org/wiki/Canny_edge_detector).

#### Face landmark options

Configure the following options in `faceConditionOptions`.

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `minFaceDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `minFacePresenceConfidence` | The minimum confidence score of face presence score in the face landmark detection. | `Float [0.0,1.0]` | `0.5` |
| `faceModelBaseOptions` | The `BaseOptions` object that sets the path for the model that creates the condition image. | `BaseOptions` object | `N/A` |
| `FacePluginModelBaseOptions` | The `BaseOptions` object that sets the path for the plugin model. | `BaseOptions` object | `N/A` |

For more information on how these configuration options work, see the
[Face Landmarker task](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index).

#### Depth options

Configure the following options in `depthConditionOptions`.

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `depthModelBaseOptions` | The `BaseOptions` object that sets the path for the model that creates the condition image. | `BaseOptions` object | `N/A` |
| `depthPluginModelBaseOptions` | The `BaseOptions` object that sets the path for the plugin model. | `BaseOptions` object | `N/A` |

## Models

The Image Generator requires a foundation model, which is a text-to-image AI model
that uses diffusion techniques to generate new images. The foundation models
listed in this section are lightweight models optimized to run on high-end
smartphones.

Plugin models are optional and complement the foundational models, enabling
users to provide an additional condition image along with a text prompt, for
more specific image generation. Customizing the foundation models using LoRA
weights is an option that teach the foundation model about a specific concept,
such as an object, person, or style, and inject them into generated images.

### Foundation models

**Note:** When downloading an open source model from an external repository, you are
responsible for complying with any applicable license terms. These open source
models are not a Google service.

The foundation models are latent text-to-image diffusion models that generate
images from a text prompt. The Image Generator requires that the foundation model
match the `stable-diffusion-v1-5/stable-diffusion-v1-5 EMA-only` model format, based on the
following model:

* [stable-diffusion-v1-5/stable-diffusion-v1-5](https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/blob/main/v1-5-pruned-emaonly.ckpt)

The following foundation models are also compatible with the Image Generator:

* [justinpinkney/miniSD](https://huggingface.co/justinpinkney/miniSD/blob/main/miniSD.ckpt)
* [hakurei/waifu-diffusion-v1-4](https://huggingface.co/hakurei/waifu-diffusion-v1-4/blob/main/models/wd-1-3-penultimate-ucg-cont.ckpt)
* [Fictiverse/Stable\_Diffusion\_PaperCut\_Model](https://huggingface.co/Fictiverse/Stable_Diffusion_PaperCut_Model/blob/main/PaperCut_v1.ckpt)

After downloading a foundation model, use the
[image\_generator\_converter](https://github.com/googlesamples/mediapipe/tree/main/tools/image_generator_converter)
to convert the model into the appropriate on-device format for the
Image Generator.

Install the necessary dependencies:

```
$ pip install torch typing_extensions numpy Pillow requests pytorch_lightning absl-py
```

Run the
[`convert.py`](https://github.com/googlesamples/mediapipe/blob/main/tools/image_generator_converter/convert.py)
script:

```
$ python3 convert.py --ckpt_path <ckpt_path> --output_path <output_path>
```

### Plugin models

The plugin models in this section are developed by Google and must be used in
combination with a foundation model. Plugin models enable Image Generator to
accept a condition image along with a text prompt as input, which lets you
control the structure of generated images. The plugin models provide
capabilities similar to [ControlNet](https://arxiv.org/abs/2302.05543), with a
novel architecture specifically for
[on-device diffusion](https://blog.research.google/2023/06/on-device-diffusion-plugins-for.html).

The plugin models must be specified in the base options and may require you to
download additional model files. Each plugin has unique requirements for the
condition image, which can be generated by the Image Generator.

#### Canny Edge plugin

![Example output of two generated images that use a provided condition image with a strong outline of bricks and the prompt ](/static/mediapipe/images/solutions/image-generator-canny.png)

The Canny Edge plugin accepts a condition image that outlines the intended edges
of the generated image. The foundation model uses the edges implied by the
condition image, and generates a new image based on the text prompt. The
Image Generator contains built-in capabilities to create condition images, and
only requires downloading the plugin model.

[Download Canny Edge plugin](https://storage.googleapis.com/mediapipe-models/image_generator/plugin_models/float32/latest/canny_edge_plugin.tflite)

The Canny Edge plugin contains the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `threshold1` | First threshold for the hysteresis procedure. | `Float` | `100` |
| `threshold2` | Second threshold for the hysteresis procedure. | `Float` | `200` |
| `apertureSize` | Aperture size for the Sobel operator. Typical range is between 3-7. | `Integer` | `3` |
| `l2Gradient` | Whether the L2 norm is used to calculate the image gradient magnitude, instead of the default L1 norm. | `BOOLEAN` | `False` |
| `EdgePluginModelBaseOptions` | The `BaseOptions` object that sets the path for the plugin model. | `BaseOptions` object | `N/A` |

For more information on how these configuration options work, see
[Canny edge detector](https://en.wikipedia.org/wiki/Canny_edge_detector).

#### Face Landmark plugin

![Example output of two generated images that use a provided condition image of a sketched face and two different prompt to show that the same condition image can be used to generate very different looking images](/static/mediapipe/images/solutions/image-generator-face.png)

The Face Landmark plugin accepts the output from the MediaPipe [Face
Landmarker](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index) as the condition image. The Face
Landmarker provides a detailed face mesh of a single face, which maps the
presence and location of facial features. The foundation model uses the facial
mapping implied by the condition image, and generates a new face over the mesh.

[Download Face landmark plugin](https://storage.googleapis.com/mediapipe-models/image_generator/plugin_models/float32/latest/face_landmark_plugin.tflite)

The Face landmark plugin also requires the Face Landmarker [model
bundle](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index#models) to create the condition image. This
model bundle is the same bundle used by the
[Face Landmarker](/mediapipe/solutions/vision/face_landmarker) task.

[Download Face landmark model bundle](https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task)

The Face Landmark plugin contains the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `minFaceDetectionConfidence` | The minimum confidence score for the face detection to be considered successful. | `Float [0.0,1.0]` | `0.5` |
| `minFacePresenceConfidence` | The minimum confidence score of face presence score in the face landmark detection. | `Float [0.0,1.0]` | `0.5` |
| `faceModelBaseOptions` | The `BaseOptions` object that sets the path for the model that creates the condition image. | `BaseOptions` object | `N/A` |
| `FacePluginModelBaseOptions` | The `BaseOptions` object that sets the path for the plugin model. | `BaseOptions` object | `N/A` |

For more information on how these configuration options work, see the
[Face Landmarker task](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index).

#### Depth plugin

![Example output of two generated images that use a provided condition image showing a general shape of a car to show that the Depth plugin can create images that add depth to a flat image](/static/mediapipe/images/solutions/image-generator-depth.png)

The Depth plugin accepts a condition image that specifies the monocular depth of
an object. The foundation model uses the condition image to infer the size and
depth of the object to be generated, and generates a new image based on the text
prompt.

[Download Depth plugin](https://storage.googleapis.com/mediapipe-models/image_generator/plugin_models/float32/latest/depth_plugin.tflite)

The Depth plugin also requires a Depth estimation model to create the condition
image.

[Download Depth estimation model](https://storage.googleapis.com/mediapipe-models/image_generator/condition_image_models/float16/latest/depth_512_512_fp16_opt_w_metadata.tflite)

The Depth plugin contains the following configuration options:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `depthModelBaseOptions` | The `BaseOptions` object that sets the path for the model that creates the condition image. | `BaseOptions` object | `N/A` |
| `depthPluginModelBaseOptions` | The `BaseOptions` object that sets the path for the plugin model. | `BaseOptions` object | `N/A` |

### Customization with LoRA

**Note:** If a model is customized with LoRA weights, it should only be used to
generate images of the tokenized concept. It is no longer useful as a
generalized image generation model and becomes incompatible with plugin models.

Customizing a model with [LoRA](https://arxiv.org/abs/2106.09685) can enable the
Image Generator to generate images based on specific concepts, which are
identified by unique tokens during training. With the new LoRA weights after
training, the model is able to generate images of the new concept when the token
is specified in the text prompt.

Creating LoRA weights requires training a foundation model on images of a
specific object, person, or style, which enables the model to recognize the new
concept and apply it when generating images. If you are creating LoRa weights to
generate images of specific people and faces, only use this solution on your
face or faces of people who have given you permission to do so.

Below is the output from a customized model trained on images of
[teapots](https://github.com/google/dreambooth/tree/main/dataset/teapot) from
the [DreamBooth dataset](https://github.com/google/dreambooth/tree/main), using
the token "monadikos teapot":

![A generated photo realistic image of a teapot sitting on a table next to a mirror mounted on a wall](/static/mediapipe/images/solutions/lora_output.png)

*Prompt*: a monadikos teapot beside a mirror

The customized model received the token in the prompt and injected a teapot that
it learned to depict from the LoRA weights, and places it the image beside a
mirror as requested in the prompt.

[LoRA with Vertex AI](https://console.cloud.google.com/vertex-ai/publishers/google/model-garden/130)

For more information, see the [customization
guide](https://github.com/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model_garden/model_garden_mediapipe_image_generation.ipynb),
which uses
[Model Garden on Vertex AI](https://console.cloud.google.com/vertex-ai/publishers/google/model-garden/130)
to customize a model by applying LoRA weights to a foundation model.

Send feedback
