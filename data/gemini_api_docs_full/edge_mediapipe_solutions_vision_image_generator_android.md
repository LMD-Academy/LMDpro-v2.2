# Image generation guide for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_generator/android))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

**Deprecated:** MediaPipe Image Generator task is still available, but is no longer actively
maintained.**Note:** Use of the MediaPipe Image Generator task is subject to the [Generative AI Prohibited
Use Policy](https://policies.google.com/terms/generative-ai/use-policy).

The MediaPipe Image Generator task lets you generate images based on a text prompt. This
task uses a text-to-image model to generate images using diffusion techniques.

The task accepts a text prompt as input, along with an optional condition image
that the model can augment and use as a reference for generation. Image Generator
can also generate images based on specific concepts provided to the model during
training or retraining. For more information, see [customize with
LoRA](https://github.com/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model_garden/model_garden_mediapipe_image_generation.ipynb).

The code sample described in these instructions is available on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_generation/android).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_generator/index).

## Code example

The MediaPipe Tasks example code is a basic implementation of a Image Generator
app for Android. You can use the app as a starting point for your own Android
app, or refer to it when modifying an existing app. The Image Generator example
code is hosted on
[GitHub](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/image_generation/android).

### Download the code

The following instructions show you how to create a local copy of the example
code using the [git](https://git-scm.com/) command line tool.

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

To download the example code:

1. Clone the git repository using the following command:

   ```
   git clone https://github.com/google-ai-edge/mediapipe-samples
   ```
2. Optionally, configure your git instance to use sparse checkout, so you have
   only the files for the Image Generator example app:

   ```
   cd mediapipe-samples
   git sparse-checkout init --cone
   git sparse-checkout set examples/image_generation/android
   ```

After creating a local version of the example code, you can import the project
into Android Studio and run the app. For instructions, see the [Setup Guide for
Android](/mediapipe/solutions/setup_android#example_code).

### Key components

The following files contain the crucial code for this image generation example
application:

* [ImageGenerationHelper.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_generation/android/app/src/main/java/com/google/mediapipe/examples/imagegeneration/ImageGenerationHelper.kt):
  Initializes the task and handles the image generation.
* [DiffusionActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_generation/android/app/src/main/java/com/google/mediapipe/examples/imagegeneration/diffusion/DiffusionActivity.kt):
  Generates images when plugins or LoRA weights are not enabled.
* [PluginActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_generation/android/app/src/main/java/com/google/mediapipe/examples/imagegeneration/plugins/PluginActivity.kt):
  Implements the plugin models, which enables users to provide a condition
  image as an input.
* [LoRAWeightActivity.kt](https://github.com/googlesamples/mediapipe/blob/main/examples/image_generation/android/app/src/main/java/com/google/mediapipe/examples/imagegeneration/loraweights/LoRAWeightActivity.kt):
  Accesses and handles the LoRA weights, which are used to customize foundation
  models and enable them to generate images of specific concepts.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Image Generator. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the [Setup guide for
Android](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Dependencies

The Image Generator task uses the
`com.google.mediapipe:tasks-vision-image-generator` library. Add this dependency
to the `build.gradle` file of your Android app:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-vision-image-generator:latest.release'
}
```

For devices with Android 12 (API 31) or higher, add the native OpenCL library
dependency. For more information, see the documentation on the
[`uses-native-library`](https://developer.android.com/guide/topics/manifest/uses-native-library-element)
tag.

Add the following `uses-native-library` tags to the `AndroidManifest.xml`
file:

```
<uses-native-library android:name="libOpenCL.so" android:required="false" />
<uses-native-library android:name="libOpenCL-car.so" android:required="false"/>
<uses-native-library android:name="libOpenCL-pixel.so" android:required="false" />
```

### Model

The MediaPipe Image Generator task requires a trained foundation model that is compatible
with this task. After downloading a model, install the required dependencies and
convert ther model into a suitable a suitable format. Then, push the converted
model to the Android device.

For more information on available trained models for Image Generator, see the task
overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_generator/index#models).

**Note:** When downloading an openly available model from an external repository,
you are responsible for complying with any applicable license terms. These open
source models are not a Google service.

#### Download foundation model

The Image Generator requires that the foundation model match the
`stable-diffusion-v1-5/stable-diffusion-v1-5 EMA-only` model format, based on the following
model:
[stable-diffusion-v1-5/stable-diffusion-v1-5 EMA-only](https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.ckpt).

#### Install dependencies and convert the model

```
$ pip install torch typing_extensions numpy Pillow requests pytorch_lightning absl-py
```

Run the
[`convert.py`](https://github.com/googlesamples/mediapipe/blob/main/tools/image_generator_converter/convert.py)
script:

```
$ python3 convert.py --ckpt_path <ckpt_path> --output_path <output_path>
```

#### Push converted model to the device

**Note:** During development, you can use adb to push the foundation model to your
test device for simplicity.

Push the content of the `<output_path>` folder to the Android device.

```
$ adb shell rm -r /data/local/tmp/image_generator/ # Remove any previously loaded weights
$ adb shell mkdir -p /data/local/tmp/image_generator/
$ adb push <output_path>/. /data/local/tmp/image_generator/bins
```

**Note:** For production deployment, host the converted model on a server and
download it during runtime. The model is too large to be bundled in an APK.

#### Download Plugin models and add LoRA weights (Optional)

If you intend to use a [plugin model](https://developers.google.com/edge/mediapipe/solutions/vision/image_generator/index#plugins), check whether the model
must be downloaded. For plugins that require an additional model, the plugin
models must be either bundled in the APK or downloaded on-demand. Plugin models
are lightweight (~23MB) and can be bundled directly in the APK. However, we
recommended downloading plugin models on-demand.

If you have [customized a model with
LoRA](https://github.com/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model_garden/model_garden_mediapipe_image_generation.ipynb),
download them on-demand. For more
information, see LoRA weights [plugin model](https://developers.google.com/edge/mediapipe/solutions/vision/image_generator/index#plugins).

## Create the task

The MediaPipe Image Generator task uses the `createFromOptions()` function to set up the
task. The `createFromOptions()` function accepts values for the configuration
options. For more information on configuration options, see [Configuration
options](#configuration_options).

### Configuration options

This task has the following configuration options for Android apps:

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

### Create with only the foundation model

```
val options = ImageGeneratorOptions.builder()
    .setImageGeneratorModelDirectory(modelPath)
    .build()

imageGenerator = ImageGenerator.createFromOptions(context, options)
```

### Create with plugins

If you are applying an optional plugin model, set the base options for the
plugin model with `setPluginModelBaseOptions`. If the plugin model requires an
additional downloaded model to create the condition image, specify the path in
`BaseOptions`.

### Face landmark

```
val options = ImageGeneratorOptions.builder()
    .setImageGeneratorModelDirectory(modelPath)
    .build()

val faceModelBaseOptions = BaseOptions.builder()
    .setModelAssetPath("face_landmarker.task")
    .build()

val facePluginModelBaseOptions = BaseOptions.builder()
    .setModelAssetPath("face_landmark_plugin.tflite")
    .build()

val faceConditionOptions = FaceConditionOptions.builder()
    .setFaceModelBaseOptions(faceModelBaseOptions)
    .setPluginModelBaseOptions(facePluginModelBaseOptions)
    .setMinFaceDetectionConfidence(0.3f)
    .setMinFacePresenceConfidence(0.3f)
    .build()

val conditionOptions = ConditionOptions.builder()
    .setFaceConditionOptions(faceConditionOptions)
    .build()

imageGenerator =
    ImageGenerator.createFromOptions(context, options, conditionOptions)
```

### Canny Edge

```
val options = ImageGeneratorOptions.builder()
    .setImageGeneratorModelDirectory(modelPath)
    .build()

val edgePluginModelBaseOptions = BaseOptions.builder()
    .setModelAssetPath("canny_edge_plugin.tflite")
    .build()

val edgeConditionOptions = EdgeConditionOptions.builder()
    .setThreshold1(100.0f)
    .setThreshold2(100.0f)
    .setApertureSize(3)
    .setL2Gradient(false)
    .setPluginModelBaseOptions(edgePluginModelBaseOptions)
    .build()

val conditionOptions = ConditionOptions.builder()
    .setEdgeConditionOptions(edgeConditionOptions)
    .build()

imageGenerator =
    ImageGenerator.createFromOptions(context, options, conditionOptions)
```

### Depth

```
val options = ImageGeneratorOptions.builder()
    .setImageGeneratorModelDirectory(modelPath)
    .build()

val depthModelBaseOptions = BaseOptions.builder()
    .setModelAssetPath("depth_model.tflite")
    .build()

val depthPluginModelBaseOptions = BaseOptions.builder()
    .setModelAssetPath("depth_plugin.tflite")
    .build()

val depthConditionOptions =
    ConditionOptions.DepthConditionOptions.builder()
        .setDepthModelBaseOptions(depthModelBaseOptions)
        .setPluginModelBaseOptions(depthPluginModelBaseOptions)
        .build()

val conditionOptions = ConditionOptions.builder()
    .setDepthConditionOptions(depthConditionOptions)
    .build()

imageGenerator =
    ImageGenerator.createFromOptions(context, options, conditionOptions)
```

### Create with LoRA weights

If you are including LoRA weights, use the `loraWeightsFilePath` parameter to
point to the path location.

```
val options = ImageGeneratorOptions.builder()
    .setLoraWeightsFilePath(weightsPath)
    .setImageGeneratorModelDirectory(modelPath)
    .build()

imageGenerator = ImageGenerator.createFromOptions(context, options)
```

## Prepare data

The Image Generator accepts the following inputs:

* **prompt** (required): The text prompt describing the image to be generated.
* **iterations** (required): The total iterations to generate the image. A
  good starting point is 20.
* **seed** (required): The random seed used during image generation.
* **condition image** (optional): The image the model uses as a reference for
  generation. Only applicable when using a plugin model.
* **condition type** (optional): The type of plugin model used with the task.
  Only applicable when using a plugin model.

### Inputs with only the foundation model

```
fun setInput(prompt: String, iteration: Int, seed: Int) {
    imageGenerator.setInputs(prompt, iteration, seed)
}
```

### Inputs with plugins

If you are applying an optional plugin model, also use the `conditionType`
parameter to choose the plugin model and the `sourceConditionImage` parameter to
generate the condition image.

| Option Name | Description | Value |
| --- | --- | --- |
| `conditionType` | The plugin model applied to the foundation model. | `{"FACE", "EDGE", "DEPTH"}` |
| `sourceConditionImage` | The source image used to create the condition image. | `MPImage` object |

If you are using a plugin model, use the `createConditionImage` to create the
condition image:

```
fun createConditionImage(
    inputImage: MPImage,
    conditionType: ConditionType
): Bitmap {
    val result =
        imageGenerator.createConditionImage(inputImage, conditionType)
    return BitmapExtractor.extract(result)
}
```

After creating the condition image, include in as an input along with the
prompt, seed, and number of iterations.

```
imageGenerator.setInputs(
    prompt,
    conditionalImage,
    conditionType,
    iteration,
    seed
)
```

### Inputs with LoRA weights

If you are using LoRA weights, ensure that the token is in the text prompt if
you intend to generate an image with the specific concept represented by the
weights.

```
fun setInput(prompt: String, iteration: Int, seed: Int) {
    imageGenerator.setInputs(prompt, iteration, seed)
}
```

**Note:** After customizing a model with LoRA weights, the model only uses the new
weights if the token is present in the prompt.

## Run the task

Use the `generate()` method to generate an image using the inputs provided in
the previous section. This produces a single generated image.

### Generate with only the foundation model

```
fun generate(prompt: String, iteration: Int, seed: Int): Bitmap {
    val result = imageGenerator.generate(prompt, iteration, seed)
    val bitmap = BitmapExtractor.extract(result?.generatedImage())
    return bitmap
}
```

### Generate with plugins

```
fun generate(
    prompt: String,
    inputImage: MPImage,
    conditionType: ConditionType,
    iteration: Int,
    seed: Int
): Bitmap {
    val result = imageGenerator.generate(
        prompt,
        inputImage,
        conditionType,
        iteration,
        seed
    )
    val bitmap = BitmapExtractor.extract(result?.generatedImage())
    return bitmap
}
```

### Generate with LoRA weights

The process of generating images with a model customized with LoRA weights is
similar to the process with a standard foundation model. Ensure that the token
is included in the prompt and run the same code.

```
fun generate(prompt: String, iteration: Int, seed: Int): Bitmap {
    val result = imageGenerator.generate(prompt, iteration, seed)
    val bitmap = BitmapExtractor.extract(result?.generatedImage())
    return bitmap
}
```

### Iterative generation

The Image Generator can also output the generated intermediate images during each
iteration, as defined in the `iterations` input parameter. To view these
intermediate results, call the `setInputs` method, then call `execute()` to run
each step. Set the `showResult` parameter to `true` to display the intermediate
results.

```
fun execute(showResult: Boolean): Bitmap {
    val result = imageGenerator.execute(showResult)

    val bitmap =
        BitmapExtractor.extract(result.generatedImage())

    return bitmap
}
```

**Note:** Executing and displaying intermediate generations significantly increases
processing times.

## Handle and display results

The Image Generator returns a `ImageGeneratorResult`, which includes the generated
image, a timestamp of the time of completion, and the conditional image if one
was provided as an input.

```
val bitmap = BitmapExtractor.extract(result.generatedImage())
```

The following image was generated from the following inputs, using only a
foundation model.

**Inputs:**

* *Prompt*: "a colorful cartoon raccoon wearing a floppy wide brimmed hat
  holding a stick walking through the forest, animated, three-quarter view,
  painting"
* *Seed*: 312687592
* *Iterations*: 20

**Generated image:**

![Generated image of a raccoon that aligns with the prompt](/static/mediapipe/images/solutions/img-gen-raccoon.png)

Send feedback
