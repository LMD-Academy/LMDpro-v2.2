--- source: https://ai.google.dev/edge/mediapipe/solutions/tasks ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# MediaPipe Tasks Stay organized with collections Save and categorize content based on your preferences.



MediaPipe Tasks provides the core programming interface of the MediaPipe
Solutions suite, including a set of libraries for deploying innovative ML
solutions onto devices with a minimum of code. It supports multiple platforms,
including Android, Web / JavaScript, Python, and support for iOS is coming soon.

**Easy to use, well-defined cross-platform APIs**  
Run ML Inferences with just 5 lines of code. Use the powerful and easy-to-use
solution APIs in MediaPipe Tasks as building blocks to build your own ML
features.

**Customizable solutions**  
You can leverage all benefits MediaPipe Tasks provides, and easily customize it
using models built with your own data via [Model
Maker](/edge/mediapipe/solutions/model_maker). For example, you can create a model
that recognizes the custom gestures you defined using the [Model Maker
GestureRecognizer API](/mediapipe/solutions/customization/gesture_recognizer),
and deploy the model onto desired platforms using the [Tasks GestureRecognizer
API](/edge/mediapipe/solutions/vision/gesture_recognizer).

**High performance ML pipelines**  
Typical on-device ML solutions combine multiple ML and non-ML blocks, slowing
performance. MediaPipe Tasks provides optimized ML pipelines with end-to-end
acceleration on CPU, GPU, and TPU to meet the needs of real time on-device use
cases.

## Supported platforms

This section provides an overview of MediaPipe Tasks for each supported
platform. For specific implementations, see the platform-specific development
[guides](/edge/mediapipe/solutions/vision/object_detector/android) for each task. For
help getting your development environment set up to use MediaPipe Tasks on a
platform, check out the platform [setup
guides](/mediapipe/solutions/setup_android).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Android

The MediaPipe Tasks [Java
API](/edge/api/mediapipe/java/com/google/mediapipe/framework/image/package-summary)
for Android is divided into packages that perform ML tasks in major domains,
including vision, natural language, and audio. The following is a list of
dependencies you can add to your Android app development project to enable these
APIs:

```
dependencies {
    implementation 'com.google.mediapipe:tasks-vision:latest.release'
    implementation 'com.google.mediapipe:tasks-text:latest.release'
    implementation 'com.google.mediapipe:tasks-audio:latest.release'
}
```

For specific implementation details, see the platform-specific development
[guides](/edge/mediapipe/solutions/vision/object_detector/android) for each solution
in MediaPipe Tasks.

### Python

The MediaPipe Tasks [Python API](/edge/api/mediapipe/python/mp) has a few main
modules for solutions that perform ML tasks in major domains, including vision,
natural language, and audio. The following shows you the install command and a
list of imports you can add to your Python development project to enable these
APIs:

```
$ python -m pip install mediapipe

import mediapipe as mp
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
from mediapipe.tasks.python import text
from mediapipe.tasks.python import audio
```

For specific implementation details, see the platform-specific development
[guides](/edge/mediapipe/solutions/vision/object_detector/python) for each solution
in MediaPipe Tasks.

### Web and JavaScript

The MediaPipe Tasks [Web JavaScript API](/edge/api/mediapipe/js/tasks-vision) is
divided into packages that perform ML tasks in major domains, including vision,
natural language, and audio. The following is a list of script imports you can
add to your Web and JavaScript development project to enable these APIs:

```
<head>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-text/text_bundle.js"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-audio/audio_bundle.js"
    crossorigin="anonymous"></script>
</head>
```

For specific implementation details, see the platform-specific development
[guides](/edge/mediapipe/solutions/vision/object_detector/web_js) for each solution
in MediaPipe Tasks.

### MediaPipe Tasks Privacy Notice

Last modified: June 5, 2026

When you use MediaPipe Tasks, processing of the input data (e.g. images, video,
text) takes place on device, and MediaPipe does not send that input data to
Google servers. As a result, you can use our MediaPipe Tasks APIs for
processing data that should not leave the device.

MediaPipe Tasks APIs send metrics about the performance and utilization of the
APIs in your app to Google. Google uses this metrics data to measure
performance, usage, debug, maintain and improve the MediaPipe Tasks, as further
described in our [Privacy Policy](https://policies.google.com/privacy).

**You are responsible for obtaining informed consent from your app users about
Google's processing of MediaPipe metrics data as required by applicable law.**






Send feedback