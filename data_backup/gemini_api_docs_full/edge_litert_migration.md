--- source: https://ai.google.dev/edge/litert/migration ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Migrate to LiteRT from TensorFlow Lite Stay organized with collections Save and categorize content based on your preferences.



**Note:** This page is for existing TFLite users to migrate to LiteRT.

[TensorFlow Lite is now LiteRT](https://developers.googleblog.com/tensorflow-lite-is-now-litert/).
LiteRT is the primary runtime for Google's high-performance on-device AI.
While existing TensorFlow Lite packages will remain functional, all future
feature updates and performance enhancements will be exclusive to LiteRT.
Because **LiteRT fully supports the TensorFlow Lite Interpreter API**, migrating
requires only a package name update—no logic changes are necessary.

For package name changes, see the following migration guides for specific
platforms.

## Migrate on Android

To migrate an Android application using Tensorflow Lite, replace the dependency
from `org.tensorflow:tensorflow-lite` to `com.google.ai.edge.litert`. The
[LiteRT Maven repository](https://maven.google.com/web/index.html#com.google.ai.edge.litert)
includes the following packages:

* [`com.google.ai.edge.litert:litert`](https://maven.google.com/web/index.html#com.google.ai.edge.litert:litert)
* [`com.google.ai.edge.litert:litert-gpu`](https://maven.google.com/web/index.html#com.google.ai.edge.litert:litert-gpu)
* [`com.google.ai.edge.litert:litert-metadata`](https://maven.google.com/web/index.html#com.google.ai.edge.litert:litert-metadata)
* [`com.google.ai.edge.litert:litert-support`](https://maven.google.com/web/index.html#com.google.ai.edge.litert:litert-support)

You can make this change in your `build.gradle` dependencies:

```
dependencies {
  ...
  implementation `com.google.ai.edge.litert:litert:2.1.0`
}
```

**Note:** GPU acceleration with the `Interpreter` API is exclusive to LiteRT Maven
V1 packages. If you are using LiteRT Maven V2, you must transition to the
[CompiledModel](https://developers.google.com/edge/litert/next/android_kotlin) API for GPU inference. Refer to the
[supported Android versions page](https://developers.google.com/edge/litert/android#supported_android_versions) for the
latest release details.

### Play Services

LiteRT in the Play Services runtime continues to use the `play-services-tflite`
dependency. If your app is already using the Play Services runtime with
TensorFlow Lite, you don't need to make any code changes.

To use LiteRT in Play Services, add the following to your `build.gradle`
dependencies:

```
dependencies {
...
    // LiteRT dependencies for Google Play services
    implementation 'com.google.android.gms:play-services-tflite-java:16.5.0'
    // Optional: include LiteRT Support Library
    implementation 'com.google.android.gms:play-services-tflite-support:16.5.0'
...
}
```



## Migrate with Python

To migrate Python code using Tensorflow Lite, replace the PIP package from
`tflite-runtime` to `ai-edge-litert`.

Install LiteRT with PIP:

```
$ python3 -m pip install ai-edge-litert
```

Import LiteRT with the following:

```
from ai_edge_litert.interpreter import Interpreter
interpreter = Interpreter(model_path=args.model_file)
```

## Other Libraries

The Swift and Objective-C SDKs for iOS, C++ SDK, Task Library, and Model Maker
library continues to exist in the TensorFlow Lite packages. Applications using
these SDKs or libraries shouldn't migrate to LiteRT.






Send feedback