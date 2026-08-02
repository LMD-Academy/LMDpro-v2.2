# Development tools for Android Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/android/development))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT provides a number of tools for integrating models into Android
apps. This page describes development tools for use in building apps with
Kotlin, Java, and C++, as well as support for LiteRT development in
Android Studio.

## Tools for building with Kotlin and Java

The following sections describe development tools for LiteRT that use
the Kotlin and Java languages.

### LiteRT library

Use the LiteRT library in your Android app by adding the [AAR hosted at
MavenCentral](https://maven.google.com/web/index.html#com.google.ai.edge.litert)
to your development project.

You can specify this in your `build.gradle` dependencies as follows:

```
dependencies {
    ...
    implementation 'com.google.ai.edge.litert:+'
}

repositories {
    ...
    google()
}
```

If you use nightly snapshots, make sure you add the [Sonatype snapshot
repository](https://developers.google.com/edge/litert/build/android#use_nightly_snapshots) to your project.

This AAR includes binaries for all of the [Android
ABIs](https://developer.android.com/ndk/guides/abis). You can reduce the size of
your application's binary by only including the ABIs you need to support.

Unless you are targeting specific hardware, you should omit the `x86`, `x86_64`,
and `arm32` ABIs in most cases. You can configure this with the following Gradle
configuration. It specifically includes only `armeabi-v7a` and `arm64-v8a`, and
should cover most modern Android devices.

```
android {
    defaultConfig {
        ndk {
            abiFilters 'armeabi-v7a', 'arm64-v8a'
        }
    }
}
```

To learn more about `abiFilters`, see [Android
ABIs](https://developer.android.com/ndk/guides/abis) in the Android NDK
documentation.

### LiteRT Support Library

The LiteRT Android Support Library makes it easier to integrate models
into your application. It provides high-level APIs that help transform raw input
data into the form required by the model, and interpret the model's output,
reducing the amount of boilerplate code required.

It supports common data formats for inputs and outputs, including images and
arrays. It also provides pre- and post-processing units that perform tasks such
as image resizing and cropping.

Use the Support Library in your Android app by including the LiteRT
[Support Library AAR hosted at
MavenCentral](https://search.maven.org/artifact/org.tensorflow/tensorflow-lite-support).

You can specify this in your `build.gradle` dependencies as follows:

```
dependencies {
    implementation 'com.google.ai.edge.litert:litert-support:+'
}
```

If you use nightly snapshots, make sure you add the [Sonatype snapshot
repository](https://developers.google.com/edge/litert/build/android#use_nightly_snapshots) to your project.

For instructions on how to get started, see the [LiteRT Android Support
Library](https://developers.google.com/edge/litert/android/metadata/lite_support).

### Using Android Studio

In addition to the development libraries described above, Android Studio also
provides support for integrating LiteRT models, as described below.

#### Android Studio ML Model Binding

The ML Model Binding feature of Android Studio 4.1 and later allows you to
import `.tflite` model files into your existing Android app, and generate
interface classes to make it easier to integrate your code with a model.

To import a LiteRT model:

1. Right-click on the module you would like to use the LiteRT model or click on
   **File > New > Other > LiteRT Model**.
2. Select the location of your LiteRT file. Note that the tooling
   configures the module's dependency with ML Model binding and automatically
   adds all required dependencies to your Android module's `build.gradle` file.

   **Note:** Select the second checkbox for importing TensorFlow GPU if you want to
   use [GPU acceleration](https://developers.google.com/edge/litert/android/gpu).
3. Click `Finish` to begin the import process. When the import is finished, the
   tool displays a screen describing the model, including its input and output
   tensors.
4. To start using the model, select Kotlin or Java, copy and paste the code in
   the **Sample Code** section.

You can return to the model information screen by double clicking the TensorFlow
Lite model under the `ml` directory in Android Studio. For more information on
using the Modle Binding feature of Android Studio, see the Android Studio
[release
notes](https://developer.android.com/studio/releases#4.1-tensor-flow-lite-models).
For an overview of using model binding in Android Studio, see the code example
[instructions](https://github.com/tensorflow/examples/blob/master/lite/examples/image_classification/android/README.md).

## Tools for building with C and C++

The C and C++ libraries for LiteRT are primarily intended for
developers using the Android Native Development Kit (NDK) to build their apps.
There are two ways to use LiteRT through C++ if you build your app with the NDK:

### LiteRT C API

Using this API is the *recommended* approach for developers using the NDK.
Download the [LiteRT AAR hosted at
MavenCentral](https://central.sonatype.com/artifact/org.tensorflow/tensorflow-lite)
file, rename to `tensorflow-lite-*.zip`, and unzip it. You must include the four
header files in the `headers/tensorflow/lite/` and `headers/tensorflow/lite/c/`
folders and the relevant `libtensorflowlite_jni.so` dynamic library in the
`jni/` folder in your NDK project.

The `c_api.h` header file contains basic documentation about using the LiteRT C
API.

### LiteRT C++ API

If you want to use LiteRT through C++ API, you can build the C++ shared
libraries:

32bit armeabi-v7a:

```
bazel build -c opt --config=android_arm //tensorflow/lite:libtensorflowlite.so
```

64bit arm64-v8a:

```
bazel build -c opt --config=android_arm64 //tensorflow/lite:libtensorflowlite.so
```

Currently, there is no straightforward way to extract all header files needed,
so you must include all header files in `tensorflow/lite/` from the TensorFlow
repository. Additionally, you will need header files from
[FlatBuffers](https://github.com/google/flatbuffers) and
[Abseil](https://github.com/abseil/abseil-cpp).

Send feedback
