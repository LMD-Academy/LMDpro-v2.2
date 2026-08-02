--- source: https://ai.google.dev/edge/litert/ios/quickstart ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# iOS quickstart Stay organized with collections Save and categorize content based on your preferences.



LiteRT lets you run TensorFlow, PyTorch, and JAX models in your iOS apps.
The LiteRT system provides prebuilt and customizable execution environments
for running models on iOS quickly and efficiently, with additional flexibility
for version management and optional delegates such coreML and Metal for
enhanced performance.

For example iOS applications that use LiteRT, see the
[LiteRT samples](https://github.com/google-ai-edge/litert-samples/tree/main/examples)
repository.

## Add LiteRT to your Swift or Objective-C project

LiteRT offers native iOS libraries written in
[Swift](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/swift)
and
[Objective-C](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/objc).

The sections below demonstrate how to add LiteRT Swift or Objective-C
to your project:

### CocoaPods developers

In your `Podfile`, add the LiteRT pod. Then, run `pod install`.

#### Swift

```
use_frameworks!
pod 'TensorFlowLiteSwift'
```

#### Objective-C

```
pod 'TensorFlowLiteObjC'
```

#### Specifying versions

There are stable releases, and nightly releases available for both
`TensorFlowLiteSwift` and `TensorFlowLiteObjC` pods. If you do not specify a
version constraint as in the above examples, CocoaPods will pull the latest
stable release by default.

You can also specify a version constraint. For example, if you wish to depend on
version 2.10.0, you can write the dependency as:

```
pod 'TensorFlowLiteSwift', '~> 2.10.0'
```

This will ensure the latest available 2.x.y version of the `TensorFlowLiteSwift`
pod is used in your app. Alternatively, if you want to depend on the nightly
builds, you can write:

```
pod 'TensorFlowLiteSwift', '~> 0.0.1-nightly'
```

From 2.4.0 version and latest nightly releases, by default
[GPU](https://developers.google.com/edge/litert/performance/gpu) and [Core ML
delegates](https://developers.google.com/edge/litert/ios/coreml) are
excluded from the pod to reduce the binary size. You can include them by
specifying subspec:

```
pod 'TensorFlowLiteSwift', '~> 0.0.1-nightly', :subspecs => ['CoreML', 'Metal']
```

This will allow you to use the latest features added to LiteRT. Note
that once the `Podfile.lock` file is created when you run `pod install` command
for the first time, the nightly library version will be locked at the current
date's version. If you wish to update the nightly library to the newer one, you
should run `pod update` command.

For more information on different ways of specifying version constraints, see
[Specifying pod
versions](https://guides.cocoapods.org/using/the-podfile.html#specifying-pod-versions).

### Bazel developers

In your `BUILD` file, add the `TensorFlowLite` dependency to your target.

#### Swift

```
swift_library(
  deps = [
      "//tensorflow/lite/swift:TensorFlowLite",
  ],
)
```

#### Objective-C

```
objc_library(
  deps = [
      "//tensorflow/lite/objc:TensorFlowLite",
  ],
)
```

#### C/C++ API

Alternatively, you can use [C
API](https://www.tensorflow.org/code/tensorflow/lite/c/c_api.h) or [C++
API](https://developers.google.com/edge/api/tflite/cc)

```
# Using C API directly
objc_library(
  deps = [
      "//tensorflow/lite/c:c_api",
  ],
)

# Using C++ API directly
objc_library(
  deps = [
      "//tensorflow/lite:framework",
  ],
)
```

### Import the library

For Swift files, import the LiteRT module:

```
import TensorFlowLite
```

For Objective-C files, import the umbrella header:

```
#import "TFLTensorFlowLite.h"
```

Or, the module if you set `CLANG_ENABLE_MODULES = YES` in your Xcode project:

```
@import TFLTensorFlowLite;
```

**Note:** For CocoaPods developers who want to import the Objective-C TensorFlow
Lite module, you must also include `use_frameworks!` in your `Podfile`.






Send feedback