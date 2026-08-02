--- source: https://ai.google.dev/edge/litert/android/java ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# LiteRT in Google Play services Java (and Kotlin) API Stay organized with collections Save and categorize content based on your preferences.



LiteRT in Google Play services can also be accessed using Java APIs,
which can be used from Java or Kotlin code, in
addition to the Native API. In particular, LiteRT in Google Play
services is available through the [LiteRT Interpreter
API](https://developers.google.com/edge/api/tflite/java/org/tensorflow/lite/InterpreterApi).

## Using the Interpreter APIs

The LiteRT Interpreter API, provided by the TensorFlow runtime,
provides a general-purpose interface for building and running ML models. Use the
following steps to run inferences with the Interpreter API using the TensorFlow
Lite in Google Play services runtime.

### 1. Add project dependencies

**Note:** LiteRT in Google Play services uses the `play-services-tflite` package.

Add the following dependencies to your app project code to access the Play
services API for LiteRT:

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

### 2. Add initialization of LiteRT

Initialize the LiteRT component of the Google Play services API
*before* using the LiteRT APIs:

### Kotlin

```
val initializeTask: Task<Void> by lazy { TfLite.initialize(this) }
```

### Java

```
Task<Void> initializeTask = TfLite.initialize(context);
```

**Note:** Make sure the `TfLite.initialize` task completes before executing code
that accesses LiteRT APIs. Use the `addOnSuccessListener()` method, as
shown in the next section.

### 3. Create an Interpreter and set runtime option

Create an interpreter using `InterpreterApi.create()` and configure it to use
Google Play services runtime, by calling `InterpreterApi.Options.setRuntime()`,
as shown in the following example code:

### Kotlin

```
import org.tensorflow.lite.InterpreterApi
import org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime
...
private lateinit var interpreter: InterpreterApi
...
initializeTask.addOnSuccessListener {
  val interpreterOption =
    InterpreterApi.Options().setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY)
  interpreter = InterpreterApi.create(
    modelBuffer,
    interpreterOption
  )}
  .addOnFailureListener { e ->
    Log.e("Interpreter", "Cannot initialize interpreter", e)
  }
```

### Java

```
import org.tensorflow.lite.InterpreterApi
import org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime
...
private InterpreterApi interpreter;
...
initializeTask.addOnSuccessListener(a -> {
    interpreter = InterpreterApi.create(modelBuffer,
      new InterpreterApi.Options().setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY));
  })
  .addOnFailureListener(e -> {
    Log.e("Interpreter", String.format("Cannot initialize interpreter: %s",
          e.getMessage()));
  });
```

You should use the implementation above because it avoids blocking the Android
user interface thread. If you need to manage thread execution more closely, you
can add a `Tasks.await()` call to interpreter creation:

### Kotlin

```
import androidx.lifecycle.lifecycleScope
...
lifecycleScope.launchWhenStarted { // uses coroutine
  initializeTask.await()
}
```

### Java

```
@BackgroundThread
InterpreterApi initializeInterpreter() {
    Tasks.await(initializeTask);
    return InterpreterApi.create(...);
}
```

**Warning:** Do not call `.await()` on the foreground user interface thread because
it interrupts display of user interface elements and creates a poor user
experience.

### 4. Run inferences

Using the `interpreter` object you created, call the `run()` method to generate
an inference.

### Kotlin

```
interpreter.run(inputBuffer, outputBuffer)
```

### Java

```
interpreter.run(inputBuffer, outputBuffer);
```

## Hardware acceleration

LiteRT allows you to accelerate the performance of your model using
specialized hardware processors, such as graphics processing units (GPUs). You
can take advantage of these specialized processors using hardware drivers called
[*delegates*](https://developers.google.com/edge/litert/performance/delegates).

The [GPU delegate](https://developers.google.com/edge/litert/performance/gpu) is provided through Google Play services
and is dynamically loaded, just like the Play services versions of the
Interpreter API.

### Checking device compatibility

Not all devices support GPU hardware acceleration with TFLite. In order to
mitigate errors and potential crashes, use the
`TfLiteGpu.isGpuDelegateAvailable` method to check whether a device is
compatible with the GPU delegate.

Use this method to confirm whether a device is compatible with GPU, and use CPU
as a fallback for when GPU is not supported.

```
useGpuTask = TfLiteGpu.isGpuDelegateAvailable(context)
```

Once you have a variable like `useGpuTask`, you can use it to determine whether
devices use the GPU delegate.

### Kotlin

```
val interpreterTask = useGpuTask.continueWith { task ->
  val interpreterOptions = InterpreterApi.Options()
      .setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY)
  if (task.result) {
      interpreterOptions.addDelegateFactory(GpuDelegateFactory())
  }
  InterpreterApi.create(FileUtil.loadMappedFile(context, MODEL_PATH), interpreterOptions)
}
```

### Java

```
Task<InterpreterApi.Options> interpreterOptionsTask = useGpuTask.continueWith({ task ->
  InterpreterApi.Options options =
      new InterpreterApi.Options().setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY);
  if (task.getResult()) {
     options.addDelegateFactory(new GpuDelegateFactory());
  }
  return options;
});
```

### GPU with Interpreter APIs

To use the GPU delegate with the Interpreter APIs:

1. Update the project dependencies to use the GPU delegate from Play services:

   ```
   implementation 'com.google.android.gms:play-services-tflite-gpu:16.5.0'
   ```
2. Enable the GPU delegate option in the TFlite initialization:

   ### Kotlin

   ```
   TfLite.initialize(context,
     TfLiteInitializationOptions.builder()
       .setEnableGpuDelegateSupport(true)
       .build())
   ```

   ### Java

   ```
   TfLite.initialize(context,
     TfLiteInitializationOptions.builder()
       .setEnableGpuDelegateSupport(true)
       .build());
   ```
3. Enable GPU delegate in the interpreter options: set the delegate factory to
   GpuDelegateFactory by calling `addDelegateFactory()
   within`InterpreterApi.Options()`:

   ### Kotlin

   ```
   val interpreterOption = InterpreterApi.Options()
     .setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY)
     .addDelegateFactory(GpuDelegateFactory())
   ```

   ### Java

   ```
   Options interpreterOption = InterpreterApi.Options()
     .setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY)
     .addDelegateFactory(new GpuDelegateFactory());
   ```

## Migrating from stand-alone LiteRT

If you are planning to migrate your app from stand-alone LiteRT to the
Play services API, review the following additional guidance for updating your
app project code:

1. Review the [Limitations](https://developers.google.com/edge/litert/android/play_services#limitations) section
   to ensure your use case is supported.
2. Prior to updating your code, we recommend doing performance and accuracy
   checks for your models, particularly if you are using versions of LiteRT
   (TF Lite) earlier than version 2.1, so you have a baseline to compare
   against the new implementation.
3. If you have migrated all of your code to use the Play services API for
   LiteRT, you should remove the existing LiteRT *runtime
   library* dependencies (entries with
   `org.tensorflow:tensorflow-lite:*`) from your build.gradle
   file so that you can reduce your app size.
4. Identify all occurrences of `new Interpreter` object creation in your code,
   and modify each one so that it uses the `InterpreterApi.create()` call. The
   new `TfLite.initialize` is asynchronous, which means in most cases it's not
   a drop-in replacement: you must register a listener for when the call
   completes. Refer to the code snippet in [Step 3](#step_3_interpreter) code.
5. Add `import org.tensorflow.lite.InterpreterApi;` and `import
   org.tensorflow.lite.InterpreterApi.Options.TfLiteRuntime;` to any source
   files using the `org.tensorflow.lite.Interpreter` or
   `org.tensorflow.lite.InterpreterApi` classes.
6. If any of the resulting calls to `InterpreterApi.create()` have only a
   single argument, append `new InterpreterApi.Options()` to the argument list.
7. Append `.setRuntime(TfLiteRuntime.FROM_SYSTEM_ONLY)` to the last argument of
   any calls to `InterpreterApi.create()`.
8. Replace all other occurrences of the `org.tensorflow.lite.Interpreter` class
   with `org.tensorflow.lite.InterpreterApi`.

If you want to use stand-alone LiteRT and the Play services API
side-by-side, you must use LiteRT (TF Lite) version 2.9 or later.
LiteRT (TF Lite) version 2.8 and earlier versions are not compatible with the
Play services API version.






Send feedback