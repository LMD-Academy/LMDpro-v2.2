# LiteRT in Google Play services C and C++ APIs Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/android/native))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

**Beta:** LiteRT in Google Play services C++ API (but not the C API)
is currently in Beta.

LiteRT in Google Play services runtime lets you run machine
learning (ML) models without statically bundling LiteRT libraries into
your app. This guide provide instructions on how to use the C or C++ APIs
for Google Play services.

Before working with the LiteRT in Google Play services C API or C++ API,
make sure you have the [CMake](https://cmake.org/) build tool installed.

## Update your build configuration

(1) Add the following dependencies to your app project code to access the Play
services API for LiteRT:

```
implementation "com.google.android.gms:play-services-tflite-java:16.5.0"
```

Note that although the package name ends in `-java`, that package also contains
the C and C++ APIs.

(2) Then, enable the
[Prefab](https://developer.android.com/build/dependencies#build-system-configuration)
feature to access the C API from your CMake script by updating the android block
of your module's build.gradle file:

```
buildFeatures {
  prefab = true
}
```

(3) [C++ API only] If you are using the C++ API, copy
[tflite-java-extract-cpp-sdk.gradle](https://github.com/tensorflow/examples/blob/master/lite/examples/native_api/android_play_services/cc_api/app/tflite-java-extract-cpp-sdk.gradle)
into your project, in your `app` directory, and add the following to the start
of your app's gradle script (e.g. `app/build.gradle`):

```
apply from: 'tflite-java-extract-cpp-sdk.gradle'
```

This contains Gradle code to automatically unpack the C++ SDK from the
AAR file for `play-services-tflite-java`.

(4) [C++ API only] If you are using the C++ API, find the directory that
contains your app's CMake config file (normally `CMakeLists.txt`); that
directory is normally your `app/src/main/cpp` directory. Then copy
[Findtflite\_cc\_api.cmake](https://github.com/tensorflow/examples/blob/master/lite/examples/native_api/android_play_services/cc_api/app/src/main/cpp/Modules/Findtflite_cc_api.cmake)
into your project, in a new `Modules` subdirectory of that directory.
This contains code that finds the C++ SDK unpacked by the Gradle script in
the previous step.

(5) You finally need to add the package `tensorflowlite_jni_gms_client`, and
for the C++ API also the package `tflite_cc_api`, both of which are imported
from the AAR, as dependencies in your CMake script:

### C

```
find_package(tensorflowlite_jni_gms_client REQUIRED CONFIG)

# Set up C/C++ compiler flags to enable use of LiteRT in Play services
# (rather than regular LiteRT bundled with the app).
add_compile_definitions(TFLITE_IN_GMSCORE)
add_compile_definitions(TFLITE_WITH_STABLE_ABI)

target_link_libraries(tflite-jni # your JNI lib target
        tensorflowlite_jni_gms_client::tensorflowlite_jni_gms_client
        android # other deps for your target
        log)
```

### C++

```
# Set up LiteRT in Play services C API (tensorflowlite_jni_gms_client) dependency.

find_package(tensorflowlite_jni_gms_client REQUIRED CONFIG)

# Set up LiteRT in Play services C++ API (tflite_cc_api) dependency.

list(PREPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/Modules")

find_package(tflite_cc_api REQUIRED MODULE)
include_directories(${tflite_cc_api_INCLUDE_DIR})
add_subdirectory(${tflite_cc_api_DIR} tflite_cc_api_build)

# Set up C/C++ compiler flags to enable use of LiteRT in Play services
# (rather than regular LiteRT bundled with the app).
add_compile_definitions(TFLITE_IN_GMSCORE)
add_compile_definitions(TFLITE_WITH_STABLE_ABI)

target_link_libraries(tflite-jni # your JNI lib target
        tflite_cc_api::tflite_cc_api
        tensorflowlite_jni_gms_client::tensorflowlite_jni_gms_client
        android # other deps for your target
        log)
```

## Initialize the LiteRT runtime

Before calling the LiteRT C or C++ API you must initialize the
`TfLiteNative` runtime in your Java or Kotlin code.

### Java

```
Task tfLiteInitializeTask = TfLiteNative.initialize(context);
```

### Kotlin

```
val tfLiteInitializeTask: Task = TfLiteNative.initialize(context)
```

Using the Google Play services Task API, `TfLiteNative.initialize`
asynchronously loads the LiteRT runtime from Google Play services into your
application's runtime process. Use `addOnSuccessListener()` to make sure the
`TfLite.initialize()` task completes before executing code that accesses
LiteRT APIs. Once the task has completed successfully, you can invoke
all the available LiteRT Native APIs.

## Native code implementation

To use LiteRT in Google Play services with your C/C++ code, you can do
one (or both) of the following:

* declare new JNI functions to call C or C++ functions from your Java code
* call the LiteRT Native API from your existing C or C++ code.

### JNI functions

You can declare new JNI functions to make the LiteRT runtime declared
in C/C++ code accessible to your Java/Kotlin code as follow:

### Java

```
package com.google.samples.gms.tflite.c;

public class TfLiteJni {
  static {
    System.loadLibrary("tflite-jni");
  }
  public TfLiteJni() { /**/ };
  public native void loadModel(AssetManager assetManager, String assetName);
  public native float[] runInference(float[] input);  // For example.
}
```

### Kotlin

```
package com.google.samples.gms.tflite.c

class TfLiteJni() {
  companion object {
    init {
      System.loadLibrary("tflite-jni")
    }
  }
  external fun loadModel(assetManager: AssetManager, assetName: String)
  external fun runInference(input: FloatArray): FloatArray  // For example.
}
```

Matching the following `loadModel` and `runInference` C or C++ functions:

```
#ifdef __cplusplus
extern "C" {
#endif

void Java_com_google_samples_gms_tflite_c_loadModel(
  JNIEnv *env, jobject tflite_jni, jobject asset_manager, jstring asset_name){
  //...
}

jfloatArray Java_com_google_samples_gms_tflite_c_TfLiteJni_runInference(
  JNIEnv* env, jobject tfliteJni, jfloatArray input) {
  //...
}

#ifdef __cplusplus
}  // extern "C".
#endif
```

You can then call your C/C++ functions from your Java/Kotlin code:

### Java

```
tfLiteHandleTask.onSuccessTask(unused -> {
    TfLiteJni jni = new TfLiteJni();
    jni.loadModel(getAssets(), "add.bin");
    //...
});
```

### Kotlin

```
tfLiteHandleTask.onSuccessTask {
    val jni = TfLiteJni()
    jni.loadModel(assets, "add.bin")
    // ...
}
```

### LiteRT in native code

Include the appropriate API header file to include the LiteRT with Google Play
services API:

### C

```
#include "tensorflow/lite/c/c_api.h"
```

### C++

```
#include "tensorflow/lite/interpreter.h"
#include "tensorflow/lite/model_builder.h"
```

You can then use the regular LiteRT C or C++ API:

### C

```
TfLiteModel* model = TfLiteModelCreate(model_asset, model_asset_length);
// ...
TfLiteInterpreterOptions* options = TfLiteInterpreterOptionsCreate();
// ...
TfLiteInterpreter* interpreter = TfLiteInterpreterCreate(model, options);
```

### C++

```
  // Load the model.
  auto model = tflite::FlatBufferModel::VerifyAndBuildFromBuffer(
      model_asset, model_asset_length);
  ...
  // Initialize the interpreter.
  BuiltinOpResolver op_resolver;
  InterpreterBuilder interpreter_builder(*model, op_resolver);
  interpreter_builder(&interpreter);
  std::unique_ptr<Interpreter>` interpreter;
  interpreter_builder(&interpreter);
```

### Supported APIs

### C

The LiteRT with Google Play services C API headers provide the
same API as the regular
[LiteRT C API](https://developers.google.com/edge/api/tflite/c), excluding
features that are deprecated or experimental. For now the functions and types
from the following headers are available.

TensorFlow Lite APIs  for loading and executing models:

```
tensorflow/lite/c/c_api.h
tensorflow/lite/c/c_api_types.h
```

TensorFlow Lite Extension APIs  for defining custom ops and delegates (e.g. for hardware acceleration):

```
tensorflow/lite/c/c_api_opaque.h
tensorflow/lite/c/common.h
tensorflow/lite/c/builtin_op_data.h
tensorflow/lite/builtin_ops.h
```

Delegate plug-in APIs for using existing delegates:

```
tensorflow/lite/acceleration/configuration/c/gpu_plugin.h
tensorflow/lite/acceleration/configuration/c/xnnpack_plugin.h
```

Please note that functions from the `c_api_experimental.h` header
are not supported.

You can use functions specific to LiteRT with Google Play services by
including the following header:

```
tensorflow/lite/abi/tflite.h
```

.

### C++

The LiteRT with Google Play services C++ API headers provide the
same API as the regular [LiteRT C++ API](https://developers.google.com/edge/api/tflite/cc), excluding
features that are deprecated or experimental, and with a few
minor exceptions noted later in this section.
The functionality from the following headers is available:

```
tensorflow/lite/model_builder.h
tensorflow/lite/interpreter_builder.h
tensorflow/lite/interpreter.h
tensorflow/lite/signature_runner.h
tensorflow/lite/acceleration/configuration/delegate_registry.h
tensorflow/lite/kernels/builtin_op_kernels.h
tensorflow/lite/kernels/register.h
tensorflow/lite/tools/verifier.h
```

For `tensorflow/lite/interpreter.h`, the supported API with Play
services excludes a few members of `tflite::Interpreter` for which
LiteRT does not offer a stable ABI:

```
Interpreter::variables()
Interpreter::nodes_size()
Interpreter::node_and_registration(int node_index)
Interpreter::kTensorsReservedCapacity
Interpreter::kTensorsCapacityHeadroom
Interpreter::OpProfilingString(const TfLiteRegistration&, const TfLiteNode*)
Interpreter::SetExternalContext(TfLiteExternalContextType type, TfLiteExternalContext* ctx)
```

Send feedback
