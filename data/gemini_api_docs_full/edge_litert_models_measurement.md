# Benchmark Interpreter API Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/models/measurement))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT benchmark tools measure and calculate statistics for
the following important performance metrics:

* Initialization time
* Inference time of warmup state
* Inference time of steady state
* Memory usage during initialization time
* Overall memory usage

The benchmark tools are available as benchmark apps for Android and iOS and as
prebuilt command-line binaries, and they all share the same core performance
measurement logic. Note that the available options and output formats are
slightly different due to the differences in runtime environment.

## Android benchmark app

An Android benchmark app based on v1 Interpreter API is also provided. This is a
better gauge of how the model would perform in an Android app. the numbers from
the benchmark tool will still differ slightly from when running inference with
the model in the actual app.

This Android benchmark app has no UI. Install and run it by using the `adb`
command and retrieve results by using the `adb logcat` command.

### Download or build the app

Download the nightly prebuilt Android benchmark apps using the following links:

* [android\_aarch64](https://storage.googleapis.com/tensorflow-nightly-public/prod/tensorflow/release/lite/tools/nightly/latest/android_aarch64_benchmark_model.apk)
* [android\_arm](https://storage.googleapis.com/tensorflow-nightly-public/prod/tensorflow/release/lite/tools/nightly/latest/android_arm_benchmark_model.apk)

As for Android benchmark apps that support [TF ops](https://developers.google.com/edge/litert/models/ops_select)
via [Flex delegate](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/delegates/flex),
use the links below:

* [android\_aarch64](https://storage.googleapis.com/tensorflow-nightly-public/prod/tensorflow/release/lite/tools/nightly/latest/android_aarch64_benchmark_model_plus_flex.apk)
* [android\_arm](https://storage.googleapis.com/tensorflow-nightly-public/prod/tensorflow/release/lite/tools/nightly/latest/android_arm_benchmark_model_plus_flex.apk)

You can also build the app from source by following these
[instructions](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark/android).

**Note:** It is required to build the app from the source if you want to run the
Android benchmark apk on x86 CPU, or if your model contains
[select TF operators](https://developers.google.com/edge/litert/models/ops_select) or
[custom operators](https://developers.google.com/edge/litert/models/ops_custom).

### Prepare benchmark

Before running the benchmark app, install the app and push the model file to the
device as follows:

```
adb install -r -d -g android_aarch64_benchmark_model.apk
adb push your_model.tflite /data/local/tmp
```

### Run benchmark

```
adb shell am start -S \
  -n org.tensorflow.lite.benchmark/.BenchmarkModelActivity \
  --es args '"--graph=/data/local/tmp/your_model.tflite \
              --num_threads=4"'
```

`graph` is a required parameter.

* `graph`: `string`   
  The path to the TFLite model file.

You can specify more optional parameters for running the benchmark.

* `num_threads`: `int` (default=1)   
  The number of threads to use for running TFLite interpreter.
* `use_gpu`: `bool` (default=false)   
  Use [GPU delegate](https://developers.google.com/edge/litert/performance/gpu).
* `use_xnnpack`: `bool` (default=`false`)   
  Use
  [XNNPACK delegate](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/delegates/xnnpack).

Depending on the device you are using, some of these options may not be
available or have no effect. Refer to
[parameters](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark#parameters)
for more performance parameters that you could run with the benchmark app.

View the results using the `logcat` command:

```
adb logcat | grep "Inference timings"
```

The benchmark results are reported as:

```
... tflite  : Inference timings in us: Init: 5685, First inference: 18535, Warmup (avg): 14462.3, Inference (avg): 14575.2
```

## iOS benchmark app

To run benchmarks on iOS device, you need to build the app from
[source](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark/ios).
Put the LiteRT model file in the
[benchmark\_data](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark/ios/TFLiteBenchmark/TFLiteBenchmark/benchmark_data)
directory of the source tree and modify the `benchmark_params.json` file. Those
files are packaged into the app and the app reads data from the directory. Visit
the
[iOS benchmark app](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark/ios)
for detailed instructions.

## Performance benchmarks for well known models

This section lists LiteRT performance benchmarks when running well
known models on some Android and iOS devices.

### Android performance benchmarks

These performance benchmark numbers were generated with the
[native benchmark binary](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark).

For Android benchmarks, the CPU affinity is set to use big cores on the device
to reduce variance (see
[details](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark#reducing-variance-between-runs-on-android)).

It assumes that models were downloaded and unzipped to the
`/data/local/tmp/tflite_models` directory. The benchmark binary is built using
[these instructions](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark#on-android)
and assumed to be in the `/data/local/tmp` directory.

To run the benchmark:

```
adb shell /data/local/tmp/benchmark_model \
  --num_threads=4 \
  --graph=/data/local/tmp/tflite_models/${GRAPH} \
  --warmup_runs=1 \
  --num_runs=50
```

To run with GPU delegate, set `--use_gpu=true`.

The performance values below are measured on Android 10.

| Model Name | Device | CPU, 4 threads | GPU |
| --- | --- | --- | --- |
| [Mobilenet\_1.0\_224(float)](https://storage.googleapis.com/download.tensorflow.org/models/mobilenet_v1_2018_08_02/mobilenet_v1_1.0_224.tgz) | Pixel 3 | 23.9 ms | 6.45 ms |
| Pixel 4 | 14.0 ms | 9.0 ms |
| [Mobilenet\_1.0\_224 (quant)](https://storage.googleapis.com/download.tensorflow.org/models/mobilenet_v1_2018_08_02/mobilenet_v1_1.0_224_quant.tgz) | Pixel 3 | 13.4 ms | --- |
| Pixel 4 | 5.0 ms | --- |
| [NASNet mobile](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/nasnet_mobile_2018_04_27.tgz) | Pixel 3 | 56 ms | --- |
| Pixel 4 | 34.5 ms | --- |
| [SqueezeNet](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/squeezenet_2018_04_27.tgz) | Pixel 3 | 35.8 ms | 9.5 ms |
| Pixel 4 | 23.9 ms | 11.1 ms |
| [Inception\_ResNet\_V2](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/inception_resnet_v2_2018_04_27.tgz) | Pixel 3 | 422 ms | 99.8 ms |
| Pixel 4 | 272.6 ms | 87.2 ms |
| [Inception\_V4](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/inception_v4_2018_04_27.tgz) | Pixel 3 | 486 ms | 93 ms |
| Pixel 4 | 324.1 ms | 97.6 ms |

### iOS performance benchmarks

These performance benchmark numbers were generated with the
[iOS benchmark app](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark/ios).

To run iOS benchmarks, the benchmark app was modified to include the appropriate
model and `benchmark_params.json` was modified to set `num_threads` to 2. To use
the GPU delegate, `"use_gpu" : "1"` and `"gpu_wait_type" : "aggressive"` options
were also added to `benchmark_params.json`.

| Model Name | Device | CPU, 2 threads | GPU |
| --- | --- | --- | --- |
| [Mobilenet\_1.0\_224(float)](https://storage.googleapis.com/download.tensorflow.org/models/mobilenet_v1_2018_08_02/mobilenet_v1_1.0_224.tgz) | iPhone XS | 14.8 ms | 3.4 ms |
| [Mobilenet\_1.0\_224 (quant)](https://storage.googleapis.com/download.tensorflow.org/models/mobilenet_v1_2018_08_02/mobilenet_v1_1.0_224_quant.tgz) | iPhone XS | 11 ms | --- |
| [NASNet mobile](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/nasnet_mobile_2018_04_27.tgz) | iPhone XS | 30.4 ms | --- |
| [SqueezeNet](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/squeezenet_2018_04_27.tgz) | iPhone XS | 21.1 ms | 15.5 ms |
| [Inception\_ResNet\_V2](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/inception_resnet_v2_2018_04_27.tgz) | iPhone XS | 261.1 ms | 45.7 ms |
| [Inception\_V4](https://storage.googleapis.com/download.tensorflow.org/models/tflite/model_zoo/upload_20180427/inception_v4_2018_04_27.tgz) | iPhone XS | 309 ms | 54.4 ms |

## Trace LiteRT internals

### Trace LiteRT internals in Android

**Note:** This feature is available from LiteRT v2.4.

Internal events from the LiteRT interpreter of an Android app can be
captured by
[Android tracing tools](https://developer.android.com/topic/performance/tracing).
They are the same events with Android
[Trace](https://developer.android.com/reference/android/os/Trace) API, so the
captured events from Java/Kotlin code are seen together with LiteRT
internal events.

Some examples of events are:

* Operator invocation
* Graph modification by delegate
* Tensor allocation

Among different options for capturing traces, this guide covers the Android
Studio CPU Profiler and the System Tracing app. Refer to
[Perfetto command-line tool](https://developer.android.com/studio/command-line/perfetto)
or
[Systrace command-line tool](https://developer.android.com/topic/performance/tracing/command-line)
for other options.

#### Adding trace events in Java code

This is a code snippet from the
[Image Classification](https://github.com/tensorflow/examples/tree/master/lite/examples/image_classification/android)
example app. LiteRT interpreter runs in the
`recognizeImage/runInference` section. This step is optional but it is useful to
help notice where the inference call is made.

```
  Trace.beginSection("recognizeImage");
  ...
  // Runs the inference call.
  Trace.beginSection("runInference");
  tflite.run(inputImageBuffer.getBuffer(), outputProbabilityBuffer.getBuffer().rewind());
  Trace.endSection();
  ...
  Trace.endSection();
```

#### Enable LiteRT tracing

To enable LiteRT tracing, set the Android system property
`debug.tflite.trace` to 1 before starting the Android app.

```
adb shell setprop debug.tflite.trace 1
```

If this property has been set when LiteRT interpreter is initialized,
key events (e.g., operator invocation) from the interpreter will be traced.

After you captured all the traces, disable tracing by setting the property value
to 0.

```
adb shell setprop debug.tflite.trace 0
```

#### Android Studio CPU Profiler

Capture traces with the
[Android Studio CPU Profiler](https://developer.android.com/studio/profile/cpu-profiler)
by following the steps below:

1. Select **Run > Profile 'app'** from the top menus.
2. Click anywhere in CPU timeline when the Profiler window appears.
3. Select 'Trace System Calls' among CPU Profiling modes.

   ![Select 'Trace System Calls'](https://developers.google.com/edge/litert/images/models/as_select_profiling_mode.png)
4. Press 'Record' button.
5. Press 'Stop' button.
6. Investigate the trace result.

   ![Android Studio trace](https://developers.google.com/edge/litert/images/models/as_traces.png)

In this example, you can see the hierarchy of events in a thread and statistics
for each operator time and also see the data flow of the whole app among
threads.

#### System Tracing app

Capture traces without Android Studio by following the steps detailed in
[System Tracing app](https://developer.android.com/topic/performance/tracing/on-device).

In this example, the same TFLite events were captured and saved to the Perfetto
or Systrace format depending on the version of Android device. The captured
trace files can be opened in the [Perfetto UI](https://ui.perfetto.dev/#!/).

![Perfetto trace](https://developers.google.com/edge/litert/images/models/perfetto_traces.png)

### Trace LiteRT internals in iOS

**Note:** This feature is available from LiteRT v2.5.

Internal events from the LiteRT interpreter of an iOS app can be
captured by
[Instruments](https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/MeasuringPerformance.html#//apple_ref/doc/uid/TP40010215-CH60-SW1)
tool included with Xcode. They are the iOS
[signpost](https://developer.apple.com/documentation/os/logging/recording_performance_data)
events, so the captured events from Swift/Objective-C code are seen together
with LiteRT internal events.

Some examples of events are:

* Operator invocation
* Graph modification by delegate
* Tensor allocation

#### Enable LiteRT tracing

Set the environment variable `debug.tflite.trace` by following the steps below:

1. Select **Product > Scheme > Edit Scheme...** from the top menus of Xcode.
2. Click 'Profile' in the left pane.
3. Deselect 'Use the Run action's arguments and environment variables'
   checkbox.
4. Add `debug.tflite.trace` under 'Environment Variables' section.

   ![Set environment variable](https://developers.google.com/edge/litert/images/models/xcode_profile_environment.png)

If you want to exclude LiteRT events when profiling the iOS app,
disable tracing by removing the environment variable.

#### XCode Instruments

Capture traces by following the steps below:

1. Select **Product > Profile** from the top menus of Xcode.
2. Click **Logging** among profiling templates when Instruments tool launches.
3. Press 'Start' button.
4. Press 'Stop' button.
5. Click 'os\_signpost' to expand OS Logging subsystem items.
6. Click 'org.tensorflow.lite' OS Logging subsystem.
7. Investigate the trace result.

   ![Xcode Instruments trace](https://developers.google.com/edge/litert/images/models/xcode_traces.png)

In this example, you can see the hierarchy of events and statistics for each
operator time.

### Using the tracing data

The tracing data allows you to identify performance bottlenecks.

Here are some examples of insights that you can get from the profiler and
potential solutions to improve performance:

* If the number of available CPU cores is smaller than the number of inference
  threads, then the CPU scheduling overhead can lead to subpar performance.
  You can reschedule other CPU intensive tasks in your application to avoid
  overlapping with your model inference or tweak the number of interpreter
  threads.
* If the operators are not fully delegated, then some parts of the model graph
  are executed on the CPU rather than the expected hardware accelerator. You
  can substitute the unsupported operators with similar supported operators.

Send feedback
