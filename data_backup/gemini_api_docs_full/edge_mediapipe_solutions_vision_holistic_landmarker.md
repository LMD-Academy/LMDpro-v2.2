--- source: https://ai.google.dev/edge/mediapipe/solutions/vision/holistic_landmarker ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Holistic landmarks detection task guide Stay organized with collections Save and categorize content based on your preferences.



The MediaPipe Holistic Landmarker task lets you combine components of the
[pose](https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker/index), [face](https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker/index), and
[hand](https://developers.google.com/edge/mediapipe/solutions/vision/hand_landmarker/index) landmarkers to create a complete landmarker for
the human body. You can use this task to analyze full-body gestures, poses, and
actions. This task uses a machine learning (ML) model on a continuous stream of
images. The task outputs a total of 543 landmarks (33 pose landmarks, 468 face
landmarks, and 21 hand landmarks per hand) in real-time.

An upgraded version of this MediaPipe Solution is coming soon! The MediaPipe Legacy
Solution for this task is available on
[GitHub](https://github.com/google/mediapipe/blob/master/docs/solutions/holistic.md).






Send feedback