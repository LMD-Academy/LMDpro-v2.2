# LiteRT inference with metadata Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/android/metadata/overview))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

Inferencing [models with metadata](https://developers.google.com/edge/litert/conversion/tensorflow/metadata) can be
as easy as just a few lines of code. LiteRT metadata contains a rich description
of what the model does and how to use the model. It can empower code generators
to automatically generate the inference code for you, such as using the [Android
Studio ML Binding feature](https://developers.google.com/edge/litert/android/metadata/codegen#mlbinding) or [LiteRT Android
code generator](https://developers.google.com/edge/litert/android/metadata/codegen#codegen). It can also be used to configure
your custom inference pipeline.

## Tools and libraries

LiteRT provides varieties of tools and libraries to serve different tiers of
deployment requirements as follows:

### Generate model interface with Android code generators

There are two ways to automatically generate the necessary Android wrapper code
for LiteRT model with metadata:

1. [Android Studio ML Model Binding](https://developers.google.com/edge/litert/android/metadata/codegen#mlbinding) is tooling available
   within Android Studio to import LiteRT model through a graphical interface.
   Android Studio will automatically configure settings for the project and
   generate wrapper classes based on the model metadata.
2. [LiteRT Code Generator](https://developers.google.com/edge/litert/android/metadata/codegen#codegen) is an executable that generates
   model interface automatically based on the metadata. It currently supports
   Android with Java. The wrapper code removes the need to interact directly
   with `ByteBuffer`. Instead, developers can interact with the LiteRT model
   with typed objects such as `Bitmap` and `Rect`. Android Studio users can
   also get access to the codegen feature through [Android Studio ML
   Binding](https://developers.google.com/edge/litert/android/metadata/codegen#mlbinding).

### Build custom inference pipelines with the LiteRT Support Library

[LiteRT Support Library](https://developers.google.com/edge/litert/android/metadata/lite_support) is a cross-platform library that helps
to customize model interface and build inference pipelines. It contains
varieties of util methods and data structures to perform pre/post processing and
data conversion. It is also designed to match the behavior of TensorFlow
modules, such as TF.Image and TF.Text, ensuring consistency from training to
inferencing.

## Explore pretrained models with metadata

Browse [Kaggle Models](https://www.kaggle.com/models?framework=tfLite) to
download pretrained models with metadata for both vision and text tasks. Also
see different options of [visualizing the
metadata](https://developers.google.com/edge/litert/conversion/tensorflow/metadata#visualize_the_metadata).

## LiteRT Support GitHub repo

Visit the [LiteRT Support GitHub
repo](https://github.com/tensorflow/tflite-support) for more examples and source
code.

Send feedback
