# Benchmark CompiledModel API Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/benchmark))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT benchmark tools measure and calculate statistics for
the following important performance metrics:

* Initialization time
* Inference time of warmup state
* Inference time of steady state
* Memory usage during initialization time
* Overall memory usage

The `CompiledModel` benchmark tool is provided as a C++ binary,
`benchmark_model`. You can execute this tool from a shell command line on
Android, Linux, macOS, Windows, and embedded devices with GPU acceleration
enabled.

## Download prebuilt benchmark binaries

Download the nightly prebuilt command-line binaries by following the
links following:

* [android\_arm64](https://storage.googleapis.com/litert/binaries/latest/android_arm64/benchmark_model)
* [linux\_x86\_64](https://storage.googleapis.com/litert/binaries/latest/linux_x86_64/benchmark_model)
* [linux\_arm64](https://storage.googleapis.com/litert/binaries/latest/linux_arm64/benchmark_model)
* [macos\_arm64](https://storage.googleapis.com/litert/binaries/latest/macos_arm64/gpu_numerics_check)
* [windows\_x86\_64](https://storage.googleapis.com/litert/binaries/latest/windows_x86_64/benchmark_model.exe)

## Build benchmark binary from source

You can build the benchmark binary from
[source](https://github.com/google-ai-edge/LiteRT/tree/main/litert/tools).

```
bazel build -c opt //litert/tools:benchmark_model
```

To build with Android NDK toolchain, you need to set up the build environment
first by following this
[guide](https://developers.google.com/edge/litert/build/android#set_up_build_environment_without_docker), or use
the docker image as described in this
[guide](https://developers.google.com/edge/litert/build/android#set_up_build_environment_using_docker).

```
bazel build -c opt --config=android_arm64 \
  //litert/tools:benchmark_model
```

**Note:** It is a valid approach to push and execute binaries directly on an Android
device for benchmarking, but it can result in subtle (but observable)
differences in performance relative to execution within an actual Android app.
In particular, Android's scheduler tailors behavior based on thread and process
priorities, which differ between a foreground Activity or Application and a
regular background binary executed using `adb shell ...`. This tailored behavior
is most evident when enabling multi-threaded CPU execution with LiteRT.
Therefore, the Android benchmark app is preferred for performance measurement.

## Run benchmark

To run benchmarks, execute the binary from the shell.

```
path/to/downloaded_or_built/benchmark_model \
  --graph=your_model.tflite \
  --num_threads=4
```

More parameter options can be found in the source code of
[benchmark\_model](https://github.com/google-ai-edge/LiteRT/blob/main/litert/tools/benchmark_litert_model.h).

## Benchmark GPU acceleration

These prebuilt binaries include LiteRT GPU Accelerator. It supports

* Android: OpenCL
* Linux: OpenCL and WebGPU (backed by Vulkan)
* macOS: Metal
* Windows: WebGPU (backed by Direct3D)

**Note:** OpenCL is used if the device supports it; otherwise, WebGPU is used.

To use the GPU Accelerator, pass the flag `--use_gpu=true`.

## Profile model ops

The benchmark model binary also let you profile model ops and get the
execution times of each operator. To do this, pass the flag
`--use_profiler=true` to `benchmark_model` during invocation.

Send feedback
