# Image classification guide for Web Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/image_classifier/web_js))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Image Classifier task lets you perform classification on images. You can use
this task to identify what an image represents among a set of categories defined
at training time. These instructions show you how to use the Image Classifier
for Node and web apps.

You can see this task in action by viewing the
[demo](https://google-ai-edge.github.io/mediapipe-samples-web/#/vision/image_classifier).
For more information about the capabilities, models, and configuration options
of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/index).

## Code example

The example code for Image Classifier provides a complete implementation of this
task in JavaScript for your reference. This code helps you test this task and
get started on building your own image classification app. You can view, run, and
edit the Image Classifier
[example](https://stackblitz.com/https://github.com/google-ai-edge/mediapipe-samples-web/)
using just your web browser.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Image Classifier. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for Web](/mediapipe/solutions/setup_web).

### JavaScript packages

Image Classifier code is available through the MediaPipe `@mediapipe/tasks-vision`
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
<!-- You can replace JSDeliver with another CDN if you prefer to -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs"
    crossorigin="anonymous"></script>
</head>
```

### Model

The MediaPipe Image Classifier task requires a trained model that is compatible with this
task. For more information on available trained models for Image Classifier, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_classifier/index#models).

Select and download a model, and then store it within your project directory:

```
<dev-project-root>/app/shared/models/
```

## Create the task

Use one of the Image Classifier `createFrom...()` functions to
prepare the task for running inferences. Use the `createFromModelPath()`
function with a relative or absolute path to the trained model file.
If your model is already loaded into memory, you can use the
`createFromModelBuffer()` method.

The code example below demonstrates using the `createFromOptions()` function to
set up the task. The `createFromOptions` function allows you to customize the
Image Classifier with configuration options. For more information on configuration
options, see [Configuration options](#configuration_options).

The following code demonstrates how to build and configure the task with custom
options:

```
async function createImageClassifier {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
  );
  imageClassifier = await ImageClassifier.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/image_classifier/efficientnet_lite0/float32/1/efficientnet_lite0.tflite`
    },
  });
}
```

### Configuration options

This task has the following configuration options for Web applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are two modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video or on a livestream of input data, such as from a camera. | {`IMAGE, VIDEO`} | `IMAGE` |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) | Locale code | en |
| `maxResults` | Sets the optional maximum number of top-scored classification results to return. If < 0, all available results will be returned. | Any positive numbers | `-1` |
| `scoreThreshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `categoryAllowlist` | Sets the optional list of allowed category names. If non-empty, classification results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryDenylist` and using both results in an error. | Any strings | Not set |
| `categoryDenylist` | Sets the optional list of category names that are not allowed. If non-empty, classification results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryAllowlist` and using both results in an error. | Any strings | Not set |
| `resultListener` | Sets the result listener to receive the classification results asynchronously when the Image Classifier is in the live stream mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | Not set |

## Prepare data

Image Classifier can classify objects in images in any format supported by the
host browser. The task also handles data input preprocessing, including
resizing, rotation and value normalization.

Calls to the Image Classifier `classify()` and `classifyForVideo()` methods run
synchronously and block the user interface thread. If you classify objects in
video frames from a device's camera, each classification will block the main
thread. You can prevent this by implementing web workers to run
`classify()` and `classifyForVideo()` on another thread.

## Run the task

The Image Classifier uses the `classify()` method with image mode and
the `classifyForVideo()` method with `video` mode to trigger
inferences. The Image Classifier API will return the possible categories
for the objects within the input image.

The following code demonstrates how execute the processing with the task model:

### Image

```
const image = document.getElementById("image") as HTMLImageElement;
const imageClassifierResult = imageClassifier.classify(image);
```

### Video

```
const video = document.getElementById("video");
await imageClassifier.setOptions({ runningMode: "VIDEO" });

const timestamp = performance.now();
const classificationResult = await imageClassifier.classifyForVideo(
    video,
    timestamp
  );
```

For a more complete implementation of running an Image Classifier task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/workers/image-classifier.worker.ts).

## Handle and display results

Upon running inference, the Image Classifier task returns an
`ImageClassifierResult` object which contains the list of possible categories
for the objects within the input image or frame.

The following shows an example of the output data from this task:

```
ImageClassifierResult:
 Classifications #0 (single classification head):
  head index: 0
  category #0:
   category name: "/m/01bwb9"
   display name: "Passer domesticus"
   score: 0.91406
   index: 671
  category #1:
   category name: "/m/01bwbt"
   display name: "Passer montanus"
   score: 0.00391
   index: 670
```

This result has been obtained by running the [Bird Classifier](https://www.kaggle.com/models/google/aiy/tfLite/vision-classifier-birds-v1/3)
on:

![Close-up photograph of a house sparrow](/static/mediapipe/images/solutions/image-classifier.jpg)

The Image Classifier example code demonstrates how to display the classification
results returned from the task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/image-classifier.ts)
for details.

Send feedback
