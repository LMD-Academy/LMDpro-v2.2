--- source: https://ai.google.dev/edge/litert/build/arm ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Build LiteRT for ARM boards Stay organized with collections Save and categorize content based on your preferences.



This page describes how to build the LiteRT libraries for ARM-based computers.

LiteRT supports two build systems and supported features from each build system
are not identical. Check the following table to pick a proper build system.

| Feature | Bazel | CMake |
| --- | --- | --- |
| Predefined toolchains | armhf, aarch64 | armel, armhf, aarch64 |
| Custom toolchains | harder to use | easy to use |
| [Select TF ops](https://developers.google.com/edge/litert/conversion/tensorflow/ops_select) | supported | not supported |
| [GPU delegate](https://developers.google.com/edge/litert/performance/gpu) | only available for Android | any platform that supports OpenCL |
| XNNPack | supported | supported |
| [Python Wheel](https://developers.google.com/edge/litert/build/cmake_pip) | supported | supported |
| [C API](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/c/README.md) | supported | [supported](https://developers.google.com/edge/litert/build/cmake#build_tensorflow_lite_c_library) |
| [C++ API](https://developers.google.com/edge/litert/inference#load_and_run_a_model_in_c) | supported for Bazel projects | supported for CMake projects |

## Cross-compilation for ARM with CMake

If you have a CMake project or if you want to use a custom toolchain, you'd
better use CMake for cross compilation. There is a separate [Cross compilation
LiteRT with CMake](https://developers.google.com/edge/litert/build/cmake_arm) page available for this.

## Cross-compilation for ARM with Bazel

If you have a Bazel project or if you want to use TF ops, you'd better use Bazel
build system. You'll use the integrated [ARM GCC 8.3
toolchains](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/tools/toolchains/embedded/arm-linux)
with Bazel to build an ARM32/64 shared library.

| Target Architecture | Bazel Configuration | Compatible Devices |
| --- | --- | --- |
| armhf (ARM32) | --config=elinux\_armhf | RPI3, RPI4 with 32 bit Raspberry Pi OS |
| AArch64 (ARM64) | --config=elinux\_aarch64 | Coral, RPI4 with Ubuntu 64 bit |

**Note:** The generated shared library requires glibc 2.28 or higher to run.

The following instructions have been tested on Ubuntu 16.04.3 64-bit PC (AMD64)
and TensorFlow devel docker image
[tensorflow/tensorflow:devel](https://hub.docker.com/r/tensorflow/tensorflow/tags/).

To cross compile LiteRT with Bazel, follow the steps:

#### Step 1. Install Bazel

Bazel is the primary build system for TensorFlow. Install the latest version of
the [Bazel build system](https://bazel.build/versions/master/docs/install.html).

**Note:** If you're using the TensorFlow Docker image, Bazel is already available.

#### Step 2. Clone TensorFlow repository

```
git clone https://github.com/tensorflow/tensorflow.git tensorflow_src
```

**Note:** If you're using the TensorFlow Docker image, the repo is already provided
in `/tensorflow_src/`.

#### Step 3. Build ARM binary

##### C library

```
bazel build --config=elinux_aarch64 -c opt //tensorflow/lite/c:libtensorflowlite_c.so
```

You can find a shared library in:
`bazel-bin/tensorflow/lite/c/libtensorflowlite_c.so`.

**Note:** Use `elinux_armhf` for [32bit ARM hard
float](https://wiki.debian.org/ArmHardFloatPort) build.

Check [LiteRT C
API](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/c/README.md)
page for the detail.

##### C++ library

```
bazel build --config=elinux_aarch64 -c opt //tensorflow/lite:libtensorflowlite.so
```

You can find a shared library in:
`bazel-bin/tensorflow/lite/libtensorflowlite.so`.

Currently, there is no straightforward way to extract all header files needed,
so you must include all header files in tensorflow/lite/ from the TensorFlow
repository. Additionally, you will need header files from FlatBuffers and
Abseil.

##### Etc

You can also build other Bazel targets with the toolchain. Here are some useful
targets.

* //tensorflow/lite/tools/benchmark:benchmark\_model
* //tensorflow/lite/examples/label\_image:label\_image






Send feedback