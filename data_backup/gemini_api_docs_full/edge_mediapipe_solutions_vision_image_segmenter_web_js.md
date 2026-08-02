--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter/web_js ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Image segmentation guide for web Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Image Segmenter task lets you divide images into regions based on predefined
categories for applying visual effects such as background blurring. These
instructions show you how to use the Image Segmenter for Node and web apps. For
more information about the capabilities, models, and configuration options of
this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter/index).

## Code example

The example code for Image Segmenter provides a complete implementation of this
task in JavaScript for your reference. This code helps you test this task and
get started on building your own image segmentation app. You can view, run,
and edit the Image Segmenter
[example](https://stackblitz.com/https://github.com/google-ai-edge/mediapipe-samples-web/)
using just your web browser.

## Setup

This section describes key steps for setting up your development environment and
code projects specifically to use Image Segmenter. For general information on
setting up your development environment for using MediaPipe tasks, including
platform version requirements, see the
[Setup guide for web](/mediapipe/solutions/setup_web).

### JavaScript packages

Image Segmenter code is available through the MediaPipe `@mediapipe/tasks-vision`
[NPM](https://www.npmjs.com/package/@mediapipe/tasks-vision) package. You can
find and download these libraries from links provided in the platform
[Setup guide](/mediapipe/solutions/setup_web#downloads).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

You can install the required packages with the following code for local staging
using the following command:

```
npm install --save @mediapipe/tasks-vision
```

If you want to import the task code via a content delivery network (CDN)
service, add the following code in the  tag in your HTML file:

```
<head>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs"
    crossorigin="anonymous"></script>
</head>
```

### Model

The MediaPipe Image Segmenter task requires a trained model that is compatible with this
task. For more information on available trained models for Image Segmenter, see
the task overview [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter/index#models).

Select and download a model, and then store it within your project directory:

```
<dev-project-root>/app/shared/models/
```

## Create the task

Use one of the Image Segmenter `createFrom...()` functions to
prepare the task for running inferences. Use the `createFromModelPath()`
function with a relative or absolute path to the trained model file.
If your model is already loaded into memory, you can use the
`createFromModelBuffer()` method.

The code example below demonstrates using the `createFromOptions()` function to
set up the task. The `createFromOptions` function allows you to customize the
Image Segmenter with configuration options. For more information on task
configuration, see [Configuration options](#configuration_options).

The following code demonstrates how to build and configure the task with custom
options:

```
runningMode = "IMAGE";

async function createImageSegmenter() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );

  imageSegmenter = await ImageSegmenter.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-assets/deeplabv3.tflite?generation=1661875711618421",
    },
    outputCategoryMask: true,
    outputConfidenceMasks: false
    runningMode: runningMode
  });
}
createImageSegmenter();
```

For a more complete implementation of creating an Image Segmenter task, see the
[code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/workers/image-segmenter.worker.ts).

### Configuration options

This task has the following configuration options for Web applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
||  |  |  |  |
| --- | --- | --- | --- |
| `outputCategoryMask` | If set to `True`, the output includes a segmentation mask as a uint8 image, where each pixel value indicates the winning category value. | {`True, False`} | `False` |
 `outputConfidenceMasks` | If set to `True`, the output includes a segmentation mask as a float value image, where each float value represents the confidence score map of the category. | {`True, False`} | `True` |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://www.tensorflow.org/lite/models/convert/metadata_writer_tutorial) | Locale code | en |
| `resultListener` | Sets the result listener to receive the segmentation results asynchronously when the image segmenter is in the `LIVE_STREAM` mode. Can only be used when running mode is set to `LIVE_STREAM` | N/A | N/A |

## Prepare data

Image Segmenter can segment objects in images in any format supported by the
host browser. The task also handles data input preprocessing, including
resizing, rotation and value normalization.

Calls to the Image Segmenter `segment()` and `segmentForVideo()` methods run
synchronously and block the user interface thread. If you segment objects in
video frames from a device's camera, each segmentation task blocks the main
thread. You can prevent this by implementing web workers to run
`segment()` and `segmentForVideo()` on another thread.

## Run the task

The Image Segmenter uses the `segment()` method with image mode and the
`segmentForVideo()` method with `video` mode to trigger inferences. The
Image Segmenter returns the detected segments as image data to a callback
function you set when running an inference for the task.

The following code demonstrates how to execute processing with the task model:

### Image

```
const image = document.getElementById("image") as HTMLImageElement;
imageSegmenter.segment(image, callback);
```

### Video

```
async function renderLoop(): void {
  const video = document.getElementById("video");
  let startTimeMs = performance.now();

  imageSegmenter.segmentForVideo(video, startTimeMs, callbackForVideo);

  requestAnimationFrame(() => {
    renderLoop();
  });
}
```

For a more complete implementation of running an Image Segmenter task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/workers/image-segmentation.worker.ts).

## Handle and display results

Upon running inference, the Image Segmenter task returns segment image data to a
callback function. The content of the output depends on the `outputType` you set
when you [configured](#configuration_options) the task.

The following sections show examples of the output data from this task:

### Category confidence

The following images show a visualization of the task output for a category
confidence mask. The confidence mask output contains float values between
`[0, 1]`.

![Two girls riding a horse and one girl walking beside the horse](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-example-input.jpg)
![The image mask that outlines the shape of the girls and horse from the previous photograph. The left half of the image's outline is captured, but the right half of the image is not](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-confidence-output.png)

**Original image and category confidence mask output. Source image from the
[Pascal VOC 2012](https://www.kaggle.com/datasets/huanghanchina/pascal-voc-2012)
dataset.**

**Note:** In the second, output image, the floating point output values are scaled
to values in the `[0, 255]` range and converted to a uint8 data type.

### Category value

The following images show a visualization of the task output for a category
value mask. The category mask range is `[0, 255]` and each pixel value
represents the winning category index of the model output. The winning category
index is has the highest score among the categories the model can recognize.

![Two girls riding a horse and one girl walking beside the horse](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-example-input.jpg)
![The image mask that outlines the shape of the girls and horse from the previous image. The shape of all three girls and the horse are masked accurately](https://developers.google.com/edge/mediapipe/images/solutions/image-segmenter-category-output.jpg)

**Original image and category mask output. Source image from the
[Pascal VOC 2012](https://www.kaggle.com/datasets/huanghanchina/pascal-voc-2012)
dataset.**

**Note:** In the second, output image, the pixel values are multiplied by 10 to
increase contrast and improve the visualization.

The Image Segmenter example code demonstrates how to display the segmentation
results returned from the task, see the
[example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/image-segmenter.ts)
for details.






Send feedback