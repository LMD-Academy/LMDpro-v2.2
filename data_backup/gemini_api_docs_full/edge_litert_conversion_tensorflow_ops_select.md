--- source: https://ai.google.dev/edge/litert/conversion/tensorflow/ops_select ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Select TensorFlow operators Stay organized with collections Save and categorize content based on your preferences.



Since the LiteRT builtin operator library only supports a limited number of
TensorFlow operators, not every model is convertible. For details, refer to
[operator compatibility](https://developers.google.com/edge/litert/conversion/tensorflow/ops_compatibility.md).

To allow conversion, users can enable the usage of [certain TensorFlow
ops](https://developers.google.com/edge/litert/conversion/tensorflow/op_select_allowlist.md) in their LiteRT model. However, running LiteRT
models with TensorFlow ops requires pulling in the core TensorFlow runtime,
which increases the LiteRT interpreter binary size. For Android, you can avoid
this by selectively building only required Tensorflow ops. For the details,
refer to [reduce binary size](https://developers.google.com/edge/litert/build/reduce_binary_size.md).

This document outlines how to [convert](#convert_a_model) and
[run](#run_inference) a LiteRT model containing TensorFlow ops on a platform of
your choice. It also discusses [performance and size metrics](#metrics) and
[known limitations](#known_limitations).

## Convert a model

The following example shows how to generate a LiteRT model with select
TensorFlow ops.

```
import tensorflow as tf

converter = tf.lite.TFLiteConverter.from_saved_model(saved_model_dir)
converter.target_spec.supported_ops = [
  tf.lite.OpsSet.TFLITE_BUILTINS, # enable LiteRT ops.
  tf.lite.OpsSet.SELECT_TF_OPS # enable TensorFlow ops.
]
tflite_model = converter.convert()
open("converted_model.tflite", "wb").write(tflite_model)
```

## Run Inference

When using a LiteRT model that has been converted with support for select
TensorFlow ops, the client must also use a LiteRT runtime that includes the
necessary library of TensorFlow ops.

### Android AAR

To reduce the binary size, please build your own custom AAR files as guided in
the [next section](#building-the-android-aar). If the binary size is not a
considerable concern, we recommend using the prebuilt [AAR with TensorFlow ops
hosted at
MavenCentral](https://search.maven.org/artifact/org.tensorflow/tensorflow-lite-select-tf-ops).

You can specify this in your `build.gradle` dependencies by adding it alongside
the standard LiteRT AAR as follows:

```
dependencies {
    implementation 'org.tensorflow:tensorflow-lite:0.0.0-nightly-SNAPSHOT'
    // This dependency adds the necessary TF op support.
    implementation 'org.tensorflow:tensorflow-lite-select-tf-ops:0.0.0-nightly-SNAPSHOT'
}
```

To use nightly snapshots, make sure that you have added [Sonatype snapshot
repository](https://developers.google.com/edge/litert/build/android.md#use_nightly_snapshots).

Once you've added the dependency, the necessary delegate for handling the
graph's TensorFlow ops should be automatically installed for graphs that require
them.

*Note*: The TensorFlow ops dependency is relatively large, so you'll probably
want to filter out unnecessary x86 ABIs in your `.gradle` file by setting up
your `abiFilters`.

```
android {
    defaultConfig {
        ndk {
            abiFilters 'armeabi-v7a', 'arm64-v8a'
        }
    }
}
```

#### Building the Android AAR

For reducing the binary size or other advanced cases, you can also build the
library manually. Assuming a [working LiteRT build environment](https://developers.google.com/edge/litert/android/),
build the Android AAR with select TensorFlow ops as follows:

```
sh tensorflow/lite/tools/build_aar.sh \
  --input_models=/a/b/model_one.tflite,/c/d/model_two.tflite \
  --target_archs=x86,x86_64,arm64-v8a,armeabi-v7a
```

This will generate the AAR file `bazel-bin/tmp/tensorflow-lite.aar` for LiteRT
built-in and custom ops; and generate the AAR file
`bazel-bin/tmp/tensorflow-lite-select-tf-ops.aar` for TensorFlow ops. If you
don't have a working build environment, You can also [build above files with
docker](https://developers.google.com/edge/litert/build/reduce_binary_size.md#selectively_build_tensorflow_lite_with_docker).

From there, you can either import the AAR files directly into your project, or
publish the custom AAR files to your local Maven repository:

```
mvn install:install-file \
  -Dfile=bazel-bin/tmp/tensorflow-lite.aar \
  -DgroupId=org.tensorflow \
  -DartifactId=tensorflow-lite -Dversion=0.1.100 -Dpackaging=aar
mvn install:install-file \
  -Dfile=bazel-bin/tmp/tensorflow-lite-select-tf-ops.aar \
  -DgroupId=org.tensorflow \
  -DartifactId=tensorflow-lite-select-tf-ops -Dversion=0.1.100 -Dpackaging=aar
```

Finally, in your app's `build.gradle`, ensure you have the `mavenLocal()`
dependency and replace the standard LiteRT dependency with the one that has
support for select TensorFlow ops:

```
allprojects {
    repositories {
        mavenCentral()
        maven {  // Only for snapshot artifacts
            name 'ossrh-snapshot'
            url 'https://oss.sonatype.org/content/repositories/snapshots'
        }
        mavenLocal()
    }
}

dependencies {
    implementation 'org.tensorflow:tensorflow-lite:0.1.100'
    implementation 'org.tensorflow:tensorflow-lite-select-tf-ops:0.1.100'
}
```

### iOS

#### Using CocoaPods

LiteRT provides nightly prebuilt select TF ops CocoaPods for `arm64`, which you
can depend on alongside the `TensorFlowLiteSwift` or `TensorFlowLiteObjC`
CocoaPods.

*Note*: If you need to use select TF ops in an `x86_64` simulator, you can build
the select ops framework yourself. See [Using Bazel + Xcode](#using_bazel_xcode)
section for more details.

```
# In your Podfile target:
  pod 'TensorFlowLiteSwift'   # or 'TensorFlowLiteObjC'
  pod 'TensorFlowLiteSelectTfOps', '~> 0.0.1-nightly'
```

After running `pod install`, you need to provide an additional linker flag to
force load the select TF ops framework into your project. In your Xcode project,
go to `Build Settings` -> `Other Linker Flags`, and add:

For versions >= 2.9.0:

```
-force_load $(SRCROOT)/Pods/TensorFlowLiteSelectTfOps/Frameworks/TensorFlowLiteSelectTfOps.xcframework/ios-arm64/TensorFlowLiteSelectTfOps.framework/TensorFlowLiteSelectTfOps
```

For versions < 2.9.0:

```
-force_load $(SRCROOT)/Pods/TensorFlowLiteSelectTfOps/Frameworks/TensorFlowLiteSelectTfOps.framework/TensorFlowLiteSelectTfOps
```

You should then be able to run any models converted with the `SELECT_TF_OPS` in
your iOS app. For example, you can modify the [Image Classification iOS
app](https://github.com/tensorflow/examples/tree/master/lite/examples/image_classification/ios)
to test the select TF ops feature.

* Replace the model file with the one converted with `SELECT_TF_OPS` enabled.
* Add `TensorFlowLiteSelectTfOps` dependency to the `Podfile` as instructed.
* Add the additional linker flag as above.
* Run the example app and see if the model works correctly.

#### Using Bazel + Xcode

LiteRT with select TensorFlow ops for iOS can be built using Bazel. First,
follow the [iOS build instructions](https://developers.google.com/edge/litert/build/ios.md) to configure your Bazel
workspace and `.bazelrc` file correctly.

Once you have configured the workspace with iOS support enabled, you can use the
following command to build the select TF ops addon framework, which can be added
on top of the regular `TensorFlowLiteC.framework`. Note that the select TF ops
framework cannot be built for `i386` architecture, so you need to explicitly
provide the list of target architectures excluding `i386`.

```
bazel build -c opt --config=ios --ios_multi_cpus=arm64,x86_64 \
  //tensorflow/lite/ios:TensorFlowLiteSelectTfOps_framework
```

This will generate the framework under `bazel-bin/tensorflow/lite/ios/`
directory. You can add this new framework to your Xcode project by following
similar steps described under the [Xcode project
settings](https://developers.google.com/edge/litert/build/ios.md#modify_xcode_project_settings_directly) section in the
iOS build guide.

After adding the framework into your app project, an additional linker flag
should be specified in your app project to force load the select TF ops
framework. In your Xcode project, go to `Build Settings` -> `Other Linker
Flags`, and add:

```
-force_load <path/to/your/TensorFlowLiteSelectTfOps.framework/TensorFlowLiteSelectTfOps>
```

### C/C++

If you're using Bazel or [CMake](https://developers.google.com/edge/litert/build/cmake) to build LiteRT interpreter,
you can enable Flex delegate by linking a LiteRT Flex delegate shared library.
You can build it with Bazel as the following command.

```
bazel build -c opt --config=monolithic tensorflow/lite/delegates/flex:tensorflowlite_flex
```

This command generates the following shared library in
`bazel-bin/tensorflow/lite/delegates/flex`.

| Platform | Library name |
| --- | --- |
| Linux | `libtensorflowlite_flex.so` |
| macOS | `libtensorflowlite_flex.dylib` |
| Windows | `tensorflowlite_flex.dll` |

Note that the necessary `TfLiteDelegate` will be installed automatically when
creating the interpreter at runtime as long as the shared library is linked. It
is not necessary to explicitly install the delegate instance as is typically
required with other delegate types.

**Note:** This feature is available since version 2.7.

### Python

LiteRT with select TensorFlow ops will be installed automatically with the
[TensorFlow pip package](https://www.tensorflow.org/install/pip). You can also
choose to only install the [LiteRT Interpreter pip
package](https://www.tensorflow.org/lite/guide/python#install_just_the_tensorflow_lite_interpreter).

**Note:** LiteRT with select TensorFlow ops are available in the TensorFlow pip
package version since 2.3 for Linux and 2.4 for other environments.

## Metrics

### Performance

When using a mixture of both builtin and select TensorFlow ops, all of the same
LiteRT optimizations and optimized builtin ops will be available and usable with
the converted model.

The following table describes the average time taken to run inference on
MobileNet on a Pixel 2. The listed times are an average of 100 runs. These
targets were built for Android using the flags: `--config=android_arm64 -c opt`.

| Build | Time (milliseconds) |
| --- | --- |
| Only built-in ops (`TFLITE_BUILTIN`) | 260.7 |
| Using only TF ops (`SELECT_TF_OPS`) | 264.5 |

### Binary size

The following table describes the binary size of LiteRT for each build. These
targets were built for Android using `--config=android_arm -c opt`.

| Build | C++ Binary Size | Android APK Size |
| --- | --- | --- |
| Only built-in ops | 796 KB | 561 KB |
| Built-in ops + TF ops | 23.0 MB | 8.0 MB |
| Built-in ops + TF ops (1) | 4.1 MB | 1.8 MB |

(1) These libraries are selectively built for [i3d-kinetics-400
model](https://www.kaggle.com/models/deepmind/i3d-kinetics/tensorFlow1/400/1)
with 8 TFLite builtin ops and 3 Tensorflow ops. For more details, please see the
[Reduce LiteRT binary size](https://developers.google.com/edge/litert/build/reduce_binary_size.md) section.

## Known limitations

* Unsupported types: Certain TensorFlow ops may not support the full set of
  input/output types that are typically available in TensorFlow.

## Updates

* Version 2.6
  + Supports for GraphDef-attribute based operators and HashTable resource
    initializations have improved.
* Version 2.5
  + You can apply an optimization known as [post training quantization](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/post_training_quantization.md)
* Version 2.4
  + Compatibility with hardware accelerated delegates has improved






Send feedback