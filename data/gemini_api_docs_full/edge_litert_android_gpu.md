# GPU acceleration delegate with Interpreter API Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/android/gpu))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

Using graphics processing units (GPUs) to run your machine learning (ML) models
can dramatically improve the performance and the user experience of your
ML-enabled applications. On Android devices, you can enable a
[*delegate*](https://developers.google.com/edge/litert/performance/delegates) and one of the following APIs:

* Interpreter API - this guide
* Native (C/C++) API - [guide](https://developers.google.com/edge/litert/android/gpu_native)

This page describes how to enable GPU acceleration for LiteRT models in
Android apps using the Interpreter API. For more information about using the GPU
delegate for LiteRT, including best practices and advanced techniques,
see the [GPU delegates](https://developers.google.com/edge/litert/performance/gpu) page.

## Use GPU with LiteRT with Google Play services

The LiteRT [Interpreter
API](https://developers.google.com/edge/api/tflite/java/org/tensorflow/lite/InterpreterApi) provides a set of
general purpose APIs for building a machine learning applications. This section
describes how to use the GPU accelerator delegate with these APIs with
LiteRT with Google Play services.

[LiteRT with Google Play services](https://developers.google.com/edge/litert/android/play_services) is the recommended
path to use LiteRT on Android. If your application is targeting devices
not running Google Play, see the [GPU with Interpreter API and standalone
LiteRT](#standalone) section.

### Add project dependencies (with .toml version catalog)

1. Update your project's `libs.versions.toml` file

```
[libraries]
...
tflite-gpu = { module = "com.google.ai.edge.litert:litert-gpu", version = "2.X.Y" }
tflite-gpu-api = { module = "com.google.ai.edge.litert:litert-gpu-api", version = "2.X.Y" }
...
```

1. Add project dependencies in the app's `build.gradle.kts`

```
dependencies {
  ...
  implementation(libs.tflite.gpu)
  implementation(libs.tflite.gpu.api)
  ...
}
```

### Add project dependencies

To enable access to the GPU delegate, add
`com.google.android.gms:play-services-tflite-gpu` to your app's `build.gradle`
file:

```
dependencies {
    ...
    implementation 'com.google.android.gms:play-services-tflite-java:16.5.0'
    implementation 'com.google.android.gms:play-services-tflite-gpu:16.5.0'
}
```

### Enable GPU acceleration

Then initialize LiteRT with Google Play services with the GPU support:

### Kotlin

```
val useGpuTask = TfLiteGpu.isGpuDelegateAvailable(context)

val interpreterTask = useGpuTask.continueWith { useGpuTask ->
  TfLite.initialize(context,
      TfLiteInitializationOptions.builder()
      .setEnableGpuDelegateSupport(useGpuTask.result)
      .build())
  }
```

### Java

```
Task<boolean> useGpuTask = TfLiteGpu.isGpuDelegateAvailable(context);

Task<Options> interpreterOptionsTask = useGpuTask.continueWith({ task ->
  TfLite.initialize(context,
  TfLiteInitializationOptions.builder()
    .setEnableGpuDelegateSupport(true)
    .build());
});
```

You can finally initialize the interpreter passing a `GpuDelegateFactory`
through `InterpreterApi.Options`:

### Kotlin

```
    val options = InterpreterApi.Options()
      .setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY)
      .addDelegateFactory(GpuDelegateFactory())

    val interpreter = InterpreterApi(model, options)

    // Run inference
    writeToInput(input)
    interpreter.run(input, output)
    readFromOutput(output)
```

### Java

```
    Options options = InterpreterApi.Options()
      .setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY)
      .addDelegateFactory(new GpuDelegateFactory());

    Interpreter interpreter = new InterpreterApi(model, options);

    // Run inference
    writeToInput(input);
    interpreter.run(input, output);
    readFromOutput(output);
```

**Note:** The GPU delegate must be created on the same thread that runs it.
Otherwise, you may see the following error, `TfLiteGpuDelegate Invoke:
GpuDelegate must run on the same thread where it was initialized.`

The GPU delegate can also be used with ML model binding in Android Studio. For
more information, see [Generate model interfaces using
metadata](https://developers.google.com/edge/litert/android/metadata/codegen#acceleration).

## Use GPU with standalone LiteRT

If your application is targets devices which are not running Google Play, it is
possible to bundle the GPU delegate to your application and use it with the
standalone version of LiteRT.

### Add project dependencies

To enable access to the GPU delegate, add
`com.google.ai.edge.litert:litert-gpu-delegate-plugin` to your app's
`build.gradle` file:

```
dependencies {
    ...
    implementation 'com.google.ai.edge.litert:litert'
    implementation 'com.google.ai.edge.litert:litert-gpu'
    implementation 'com.google.ai.edge.litert:litert-gpu-api'
}
```

### Enable GPU acceleration

Then run LiteRT on GPU with `TfLiteDelegate`. In Java, you can specify
the `GpuDelegate` through `Interpreter.Options`.

### Kotlin

```
      import org.tensorflow.lite.Interpreter
      import org.tensorflow.lite.gpu.CompatibilityList
      import org.tensorflow.lite.gpu.GpuDelegate

      val compatList = CompatibilityList()

      val options = Interpreter.Options().apply{
          if(compatList.isDelegateSupportedOnThisDevice){
              // if the device has a supported GPU, add the GPU delegate
              val delegateOptions = compatList.bestOptionsForThisDevice
              this.addDelegate(GpuDelegate(delegateOptions))
          } else {
              // if the GPU is not supported, run on 4 threads
              this.setNumThreads(4)
          }
      }

      val interpreter = Interpreter(model, options)

      // Run inference
      writeToInput(input)
      interpreter.run(input, output)
      readFromOutput(output)
```

### Java

```
      import org.tensorflow.lite.Interpreter;
      import org.tensorflow.lite.gpu.CompatibilityList;
      import org.tensorflow.lite.gpu.GpuDelegate;

      // Initialize interpreter with GPU delegate
      Interpreter.Options options = new Interpreter.Options();
      CompatibilityList compatList = CompatibilityList();

      if(compatList.isDelegateSupportedOnThisDevice()){
          // if the device has a supported GPU, add the GPU delegate
          GpuDelegate.Options delegateOptions = compatList.getBestOptionsForThisDevice();
          GpuDelegate gpuDelegate = new GpuDelegate(delegateOptions);
          options.addDelegate(gpuDelegate);
      } else {
          // if the GPU is not supported, run on 4 threads
          options.setNumThreads(4);
      }

      Interpreter interpreter = new Interpreter(model, options);

      // Run inference
      writeToInput(input);
      interpreter.run(input, output);
      readFromOutput(output);
```

### Quantized models

Android GPU delegate libraries support quantized models by default. You do not
have to make any code changes to use quantized models with the GPU delegate. The
following section explains how to disable quantized support for testing or
experimental purposes.

#### Disable quantized model support

The following code shows how to ***disable*** support for quantized models.

### Java

```
GpuDelegate delegate = new GpuDelegate(new GpuDelegate.Options().setQuantizedModelsAllowed(false));

Interpreter.Options options = (new Interpreter.Options()).addDelegate(delegate);
```

For more information about running quantized models with GPU acceleration, see
[GPU delegate](https://developers.google.com/edge/litert/android/gpu#quantized_models) overview.

Send feedback
