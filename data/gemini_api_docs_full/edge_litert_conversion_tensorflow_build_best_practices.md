# Performance best practices Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/conversion/tensorflow/build/best_practices))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

Mobile and embedded devices have limited computational resources, so it is
important to keep your application resource efficient. We have compiled a list
of best practices and strategies that you can use to improve your TensorFlow
Lite model performance.

## Choose the best model for the task

Depending on the task, you will need to make a tradeoff between model complexity
and size. If your task requires high accuracy, then you may need a large and
complex model. For tasks that require less precision, it is better to use a
smaller model because they not only use less disk space and memory, but they are
also generally faster and more energy efficient. For example, graphs below show
accuracy and latency tradeoffs for some common image classification models.

![Graph of model size vs
accuracy](https://developers.google.com/edge/litert/images/performance/model_size_vs_accuracy.png "Model Size vs
Accuracy")

![Graph of accuracy vs latency](https://developers.google.com/edge/litert/images/performance/accuracy_vs_latency.png "Accuracy vs Latency")

One example of models optimized for mobile devices are
[MobileNets](https://arxiv.org/abs/1704.04861), which are optimized for mobile
vision applications. [Kaggle
Models](https://www.kaggle.com/models?framework=tfLite) lists several other
models that have been optimized specifically for mobile and embedded devices.

You can retrain the listed models on your own dataset by using transfer
learning.

## Profile your model

Once you have selected a candidate model that is right for your task, it is a
good practice to profile and benchmark your model. LiteRT [benchmarking
tool](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/tools/benchmark)
has a built-in profiler that shows per operator profiling statistics. This can
help in understanding performance bottlenecks and which operators dominate the
computation time.

You can also use [LiteRT
tracing](https://developers.google.com/edge/litert/models/measurement#trace_tensorflow_lite_internals_in_android) to profile
the model in your Android application, using standard Android system tracing,
and to visualize the operator invocations by time with GUI based profiling
tools.

## Profile and optimize operators in the graph

If a particular operator appears frequently in the model and, based on
profiling, you find that the operator consumes the most amount of time, you can
look into optimizing that operator. This scenario should be rare as TensorFlow
Lite has optimized versions for most operators. However, you may be able to
write a faster version of a custom op if you know the constraints in which the
operator is executed. Check out the [custom operators guide](https://developers.google.com/edge/litert/conversion/tensorflow/ops_custom).

## Optimize your model

Model optimization aims to create smaller models that are generally faster and
more energy efficient, so that they can be deployed on mobile devices. LiteRT
supports multiple optimization techniques, such as quantization.

Check out the [model optimization docs](https://developers.google.com/edge/litert/conversion/tensorflow/quantization/model_optimization) for details.

## Tweak the number of threads

LiteRT supports multi-threaded kernels for many operators. You can increase the
number of threads and speed up execution of operators. Increasing the number of
threads will, however, make your model use more resources and power.

For some applications, latency may be more important than energy efficiency. You
can increase the number of threads by setting the number of interpreter
[threads](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/interpreter.h#L346).
Multi-threaded execution, however, comes at the cost of increased performance
variability depending on what else is executed concurrently. This is
particularly the case for mobile apps. For example, isolated tests may show 2x
speed-up vs single-threaded, but, if another app is executing at the same time,
it may result in worse performance than single-threaded.

## Eliminate redundant copies

If your application is not carefully designed, there can be redundant copies
when feeding the input to and reading the output from the model. Make sure to
eliminate redundant copies. If you are using higher level APIs, like Java, make
sure to carefully check the documentation for performance caveats. For example,
the Java API is a lot faster if `ByteBuffers` are used as
[inputs](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/java/src/main/java/org/tensorflow/lite/Interpreter.java#L175).

## Profile your application with platform specific tools

Platform specific tools like [Android
profiler](https://developer.android.com/studio/profile/android-profiler) and
[Instruments](https://help.apple.com/instruments/mac/current/) provide a wealth
of profiling information that can be used to debug your app. Sometimes the
performance bug may be not in the model but in parts of application code that
interact with the model. Make sure to familiarize yourself with platform
specific profiling tools and best practices for your platform.

## Evaluate whether your model benefits from using hardware accelerators available on the device

LiteRT has added new ways to accelerate models with faster hardware like GPUs,
DSPs, and neural accelerators. Typically, these accelerators are exposed through
[delegate](https://developers.google.com/edge/litert/performance/delegates) submodules that take over parts of the
interpreter execution. LiteRT can use delegates by:

* GPU delegate is available on Android and iOS, using OpenGL/OpenCL and Metal,
  respectively. To try them out, see the [GPU delegate](https://developers.google.com/edge/litert/performance/gpu).
* It is possible to create your own delegate if you have access to
  non-standard hardware. See [LiteRT delegates](https://developers.google.com/edge/litert/performance/delegates) for
  more information.

Be aware that some accelerators work better for different types of models. Some
delegates only support float models or models optimized in a specific way. It is
important to [benchmark](https://developers.google.com/edge/litert/models/measurement) each delegate to see if it is a good
choice for your application. For example, if you have a very small model, it may
not be worth delegating the model to the GPU. Conversely, accelerators are a
great choice for large models that have high arithmetic intensity.

Send feedback
