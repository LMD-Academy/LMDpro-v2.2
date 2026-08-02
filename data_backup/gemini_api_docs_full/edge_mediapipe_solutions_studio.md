--- source: https://ai.google.dev/edge/mediapipe/solutions/studio ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Instant Demos Stay organized with collections Save and categorize content based on your preferences.



Preview our GitHub Web samples instantly with our interactive playground, which
lets you evaluate our on-device ML models and pipelines. Our web app makes it
a joy to quickly test MediaPipe solutions in your browser with your own data.
For each task, you can experiment with model settings for the total number of
results, customize the minimum confidence threshold for reporting results, and
adjust much more.

[Try it!arrow\_forward](https://google-ai-edge.github.io/mediapipe-samples-web/)

This page provides some quick instructions on working with solutions in
MediaPipe Studio.

![MediaPipe Studio web application screenshot](/static/edge/mediapipe/images/studio/studio_app.jpg)
**Figure 1. MediaPipe Samples Web application home page.**

## Custom models

![MediaPipe Studio application select model](/static/edge/mediapipe/images/studio/studio_choose_model.png)
You can use customized models with MediaPipe in the **Model selection** option,
by choosing **Choose a model file** and selecting a model from your file
storage, as shown in the screenshot.

The model you choose must conform to the model input and output requirements of
the MediaPipe Tasks API you are using, and include compatible model metadata.
The quickest way to create your own model for use with a MediaPipe Tasks API is
to use the MediaPipe Model Maker tool to modify a compatible solution model with
your own data. For more information, see
[MediaPipe Model Maker](https://developers.google.com/mediapipe/solutions/model_maker).

## Custom input data

You can use your own data on each solution page in MediaPipe Studio. For
text-based tasks, you can enter text in the field provided. Vision tasks allow
you to use a web camera as input, and you can also upload your own images.

## Get started

You can interact with our APIs by running one of the solution demos, such as
Image Classification, and then use the related
[developer guide](https://developers.google.com/mediapipe/solutions/vision/image_classifier)
to build this functionality into your own application.






Send feedback