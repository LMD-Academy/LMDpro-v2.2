# Object detection guide for Web Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/vision/object_detector/web_js))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The MediaPipe Object Detector task lets you detect the presence and location of multiple
classes of objects. This task takes image data and outputs a list of detection
results, each representing an object identified in the image. You can
view, run, and edit the Object Detector
[example](https://stackblitz.com/https://github.com/google-ai-edge/mediapipe-samples-web/)
using just your web browser.

For more information about the capabilities, models, and
configuration options of this task, see the [Overview](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/index).

## Setup

This section describes key steps for setting up your development environment
specifically to use Object Detector. For general information on
setting up your web and JavaScript development environment, including
platform version requirements, see the
[Setup guide for web](/edge/mediapipe/solutions/setup_web).

### JavaScript packages

Object Detector code is available through the MediaPipe `@mediapipe/tasks-vision`
[NPM](https://www.npmjs.com/search?q=%40mediapipe) package. You can
find and download these libraries by following the instructions in the platform
[Setup guide](/edge/mediapipe/solutions/setup_web).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

You can install the required packages through NPM
using the following command:

```
npm install @mediapipe/tasks-vision
```

If you want to import the task code via a content delivery network (CDN)
service, add the following code in the `<head>` tag in your HTML file:

```
<!-- You can replace JSDeliver with another CDN if you prefer to -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs"
    crossorigin="anonymous"></script>
</head>
```

### Model

The MediaPipe Object Detector task requires a trained model that is compatible with this
task. For more information on available trained models for Object Detector, see
the task overview in the [Models section](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector/index#models).

Select and download a model, and then store it within your project directory:

```
<dev-project-root>/app/shared/models/
```

## Create the task

Use one of the Object Detector `ObjectDetector.createFrom...()` functions to
prepare the task for running inferences. Use the `createFromModelPath()`
function with a relative or absolute path to the trained model file.
If your model is already loaded into memory, you can use the
`createFromModelBuffer()` method. The code example below demonstrates using
the `createFromOptions()` function, which allows you to set more configuration
options. For more information on the available configuration options, see
[Configuration options](#configuration_options) section.

The following code demonstrates how to build and configure this task:

```
const vision = await FilesetResolver.forVisionTasks(
  // path/to/wasm/root
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
);
objectDetector = await ObjectDetector.createFromOptions(vision, {
  baseOptions: {
    modelAssetPath: `https://storage.googleapis.com/mediapipe-tasks/object_detector/efficientdet_lite0_uint8.tflite`
  },
  scoreThreshold: 0.5,
  runningMode: runningMode
});
```

For a more complete implementation of creating a Object Detector task, see the
[code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/workers/object-detector.worker.ts).

### Configuration options

This task has the following configuration options for Web applications:

| Option Name | Description | Value Range | Default Value |
| --- | --- | --- | --- |
| `runningMode` | Sets the running mode for the task. There are two modes:    IMAGE: The mode for single image inputs.    VIDEO: The mode for decoded frames of a video or on a livestream of input data, such as from a camera. | {`IMAGE, VIDEO`} | `IMAGE` |
| `displayNamesLocale` | Sets the language of labels to use for display names provided in the metadata of the task's model, if available. Default is `en` for English. You can add localized labels to the metadata of a custom model using the [TensorFlow Lite Metadata Writer API](https://ai.google.dev/edge/lite/models/metadata_writer_tutorial) | Locale code | en |
| `maxResults` | Sets the optional maximum number of top-scored detection results to return. | Any positive numbers | -1 (all results are returned) |
| `scoreThreshold` | Sets the prediction score threshold that overrides the one provided in the model metadata (if any). Results below this value are rejected. | Any float | Not set |
| `categoryAllowlist` | Sets the optional list of allowed category names. If non-empty, detection results whose category name is not in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryDenylist` and using both results in an error. | Any strings | Not set |
| `categoryDenylist` | Sets the optional list of category names that are not allowed. If non-empty, detection results whose category name is in this set will be filtered out. Duplicate or unknown category names are ignored. This option is mutually exclusive with `categoryAllowlist` and using both results in an error. | Any strings | Not set |

## Prepare data

Object Detector can detect objects in images in any format supported by the
host browser. The task also handles data input preprocessing, including
resizing, rotation and value normalization. To detect objects in videos, you
can use the API to quickly process a frame at a time, using the timestamp of the
frame to determine when the gestures occur in the video.

## Run the task

The Object Detector uses `detect()` for working on single images and
`detectForVideo()` work detecting objects in video frames. The task processes
the data, attempts to recognize objects, and then reports the results.

Calls to the `detect()` and `detectForVideo()` methods run
synchronously and block the user interface thread. If you recognize objects in
video frames from a device's camera, each classification blocks the main
thread. You can prevent this by implementing web workers to run the detection on
another thread.

The following code demonstrates how execute the processing with the task model:

### Image

```
const image = document.getElementById("image") as HTMLImageElement;
const detections = objectDetector.detect(image);
```

### Video

```
await objectDetector.setOptions({ runningMode: "video" });

let lastVideoTime = -1;
function renderLoop(): void {
  const video = document.getElementById("video");

  if (video.currentTime !== lastVideoTime) {
    const detections = detector.detectForVideo(video);
    processResults(detections);
    lastVideoTime = video.currentTime;
  }

  requestAnimationFrame(() => {
    renderLoop();
  });
}
```

For a more complete implementation of running an Object Detector task, see the
[code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/workers/object-detector.worker.ts).

## Handle and display results

The Object Detector generates a detection results object for each detection run.
The results object contains a list of detections, where each detection includes
a bounding box and category information about the detected object, including the
name of the object and a confidence score.

The following shows an example of the output data from this task:

```
ObjectDetectorResult:
 Detection #0:
  Box: (x: 355, y: 133, w: 190, h: 206)
  Categories:
   index       : 17
   score       : 0.73828
   class name  : dog
 Detection #1:
  Box: (x: 103, y: 15, w: 138, h: 369)
  Categories:
   index       : 17
   score       : 0.73047
   class name  : dog
```

The following image shows a visualization of the task output:

![Two dogs that are highlighted with bounding boxes](https://developers.google.com/edge/mediapipe/images/solutions/object-detection-output.png)

The Object Detector example code demonstrates how to display the detection
results returned from the task, see the
[code example](https://github.com/google-ai-edge/mediapipe-samples-web/blob/main/src/tasks/object-detector.ts)
for details.

Send feedback
