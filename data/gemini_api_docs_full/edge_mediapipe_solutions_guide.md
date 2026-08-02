# MediaPipe Solutions guide Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/mediapipe/solutions/guide))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

MediaPipe Solutions provides a suite of libraries and tools for you to quickly
apply artificial intelligence (AI) and machine learning (ML) techniques in your
applications. You can plug these solutions into your applications immediately,
customize them to your needs, and use them across multiple development
platforms. MediaPipe Solutions is part of the MediaPipe [open source
project](https://github.com/google/mediapipe), so you can further customize the
solutions code to meet your application needs. The MediaPipe Solutions suite
includes the following:

![MediaPipe Solutions, Studio, and Model Maker](/static/edge/mediapipe/images/solutions/overview-diagram.svg)

These libraries and resources provide the core functionality for each MediaPipe
Solution:

* **MediaPipe Tasks**: Cross-platform APIs and libraries for deploying
  solutions. [Learn more](/edge/mediapipe/solutions/tasks)
* **MediaPipe Models**: Pre-trained, ready-to-run models for use with each
  solution.

These tools let you customize and evaluate solutions:

* **MediaPipe Model Maker**: Customize models for solutions with your
  data. [Learn
  more](/edge/mediapipe/solutions/model_maker)
* **MediaPipe Studio**: Visualize, evaluate, and benchmark solutions in
  your browser. [Learn
  more](/edge/mediapipe/solutions/studio)

## Available solutions

MediaPipe Solutions are available across multiple platforms. Each solution
includes one or more models, and you can customize models for some solutions as
well. The following list shows what solutions are available for each supported
platform and if you can use Model Maker to customize the model:

| Solution | Android | Web | Python | iOS | Customize model |
| --- | --- | --- | --- | --- | --- |
| [LLM Inference API](/edge/mediapipe/solutions/genai/llm_inference) | filled circle | filled circle |  | filled circle | filled circle |
| [Object detection](/edge/mediapipe/solutions/vision/object_detector) | filled circle | filled circle | filled circle | filled circle | filled circle |
| [Image classification](/edge/mediapipe/solutions/vision/image_classifier) | filled circle | filled circle | filled circle | filled circle | filled circle |
| [Image segmentation](/edge/mediapipe/solutions/vision/image_segmenter) | filled circle | filled circle | filled circle |  |  |
| [Interactive segmentation](/edge/mediapipe/solutions/vision/interactive_segmenter) | filled circle | filled circle | filled circle |  |  |
| [Hand landmark detection](/edge/mediapipe/solutions/vision/hand_landmarker) | filled circle | filled circle | filled circle | filled circle |  |
| [Gesture recognition](/edge/mediapipe/solutions/vision/gesture_recognizer) | filled circle | filled circle | filled circle | filled circle | filled circle |
| [Image embedding](/edge/mediapipe/solutions/vision/image_embedder) | filled circle | filled circle | filled circle |  |  |
| [Face detection](/edge/mediapipe/solutions/vision/face_detector) | filled circle | filled circle | filled circle | filled circle |  |
| [Face landmark detection](/edge/mediapipe/solutions/vision/face_landmarker) | filled circle | filled circle | filled circle |  |  |
| [Pose landmark detection](/edge/mediapipe/solutions/vision/pose_landmarker) | filled circle | filled circle | filled circle |  |  |
| [Image generation](/edge/mediapipe/solutions/vision/image_generator) | filled circle |  |  |  | filled circle |
| [Text classification](/edge/mediapipe/solutions/text/text_classifier) | filled circle | filled circle | filled circle | filled circle | filled circle |
| [Text embedding](/edge/mediapipe/solutions/text/text_embedder) | filled circle | filled circle | filled circle |  |  |
| [Language detector](/edge/mediapipe/solutions/text/language_detector) | filled circle | filled circle | filled circle |  |  |
| [Audio classification](/edge/mediapipe/solutions/audio/audio_classifier) | filled circle | filled circle | filled circle |  |  |

## Get started

You can get started with MediaPipe Solutions by selecting any of the tasks
listed in the left navigation tree, including
[vision](/edge/mediapipe/solutions/vision/object_detector),
[text](/edge/mediapipe/solutions/text/text_classifier), and
[audio](/edge/mediapipe/solutions/audio/audio_classifier) tasks.
If you need help setting up a development environment for use with MediaPipe
Tasks, check out the setup guides for
[Android](/edge/mediapipe/solutions/setup_android),
[web apps](/edge/mediapipe/solutions/setup_web), and
[Python](/edge/mediapipe/solutions/setup_python).

## Legacy solutions

We have ended support for the MediaPipe Legacy Solutions listed below as of
March 1, 2023. All other MediaPipe Legacy Solutions will be upgraded to a new
MediaPipe Solution. See the list below for details. The
[code repository](https://github.com/google/mediapipe/tree/master/mediapipe) and
prebuilt binaries for all MediaPipe Legacy Solutions will continue to be
provided on an as-is basis.

| Legacy Solution | Status | New MediaPipe Solution |
| --- | --- | --- |
| Face Detection ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/face_detection.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector) | [Face detection](https://developers.google.com/edge/mediapipe/solutions/vision/face_detector) |
| Face Mesh ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/face_mesh.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker) | [Face landmark detection](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker) |
| Iris ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/iris.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker) | [Face landmark detection](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker) |
| Hands ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/hands.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/hand_landmarker) | [Hand landmark detection](https://developers.google.com/edge/mediapipe/solutions/vision/hand_landmarker) |
| Pose ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/pose.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker) | [Pose landmark detection](https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker) |
| Holistic ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/holistic.md)) | Upgrade | [Holistic landmarks detection](https://developers.google.com/edge/mediapipe/solutions/vision/holistic_landmarker) |
| Selfie segmentation ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/selfie_segmentation.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter) | [Image segmentation](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter) |
| Hair segmentation ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/hair_segmentation.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter) | [Image segmentation](https://developers.google.com/edge/mediapipe/solutions/vision/image_segmenter) |
| Object detection ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/object_detection.md)) | [Upgraded](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector) | [Object detection](https://developers.google.com/edge/mediapipe/solutions/vision/object_detector) |
| Box tracking ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/box_tracking.md)) | Support ended |  |
| Instant motion tracking ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/instant_motion_tracking.md)) | Support ended |  |
| Objectron ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/objectron.md)) | Support ended |  |
| KNIFT ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/knift.md)) | Support ended |  |
| AutoFlip ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/autoflip.md)) | Support ended |  |
| MediaSequence ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/media_sequence.md)) | Support ended |  |
| YouTube 8M ([info](https://github.com/google/mediapipe/blob/master/docs/solutions/youtube_8m.md)) | Support ended |  |

Send feedback
