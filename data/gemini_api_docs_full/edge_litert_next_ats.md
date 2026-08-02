# LiteRT Accelerator Test Suite (ATS) Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/ats))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The **LiteRT Accelerator Test Suite (ATS)** is a comprehensive tool used to
validate the functional correctness and measure the performance of custom
accelerator implementations integrated with the LiteRT framework.

## Overview and Core Functionality

The primary function of ATS is to execute predefined machine learning models
against a target accelerator and compare the results against the LiteRT
**standard CPU backend**.

* **Validation:** The suite performs **numeric validation** by comparing the
  output tensors (activations) produced by the accelerator against those
  produced by the known-good CPU backend. This ensures the accelerator
  implementation maintains the required precision and correctness.
* **Performance Metrics:** It automatically captures and records critical
  performance details, including **latency** and other relevant metrics, which
  are made available to the user.
* **Execution:** The tests are typically executed on a target device (e.g., an
  Android phone) and are managed by a **shell script** wrapper that handles
  file transfers and setup using the `adb` (Android Debug Bridge) tool.

## Test Data (Models)

The ATS suite uses a collection of widely-used **`.tflite` models** as its test
data. Input data is generated randomly based on the data type and can be seeded
as needed.

### Included Models

The following models are automatically included and downloaded for testing
(subject to change):

* `hf_all_minilm_l6_v2`
* `hf_mobilevit_small`
* `qai_hub_midas`
* `qai_hub_real_esrgan_x4plus`
* `torchvision_mobilenet_v2`
* `torchvision_resnet18`
* `torchvision_squeezenet1_1`
* `u2net_lite`
* `whisper_tiny_decoder`
* `whisper_tiny_encoder`
* `yamnet`
* `yolo11n`

### Manual Model Retrieval

While models are automatically downloaded during a `bazel run`, you can manually
retrieve the entire model set using `wget`:

```
wget -p -O <target_file> https://storage.googleapis.com/litert/ats_models.tar.gz
```

## Defining an ATS Suite with Bazel

Use the `litert_define_ats` Bazel macro to configure and define an ATS testing
target specific to their accelerator.

The macro automatically creates **two** runnable targets:

1. The standard **on-device JIT test** (for execution & validation using adb`).
2. A dedicated **AOT "compile only" mode test** (for host compilation).

> **Note on Backend Configuration:** The macro's `backend` attribute accepts
> specific vendor names (e.g., `qualcomm`, `google_tensor`, `mediatek`, `samsung`,
> `intel_openvino`, `example`, `cpu`, `gpu`), while the underlying binary
> `--backend` flag denotes the hardware category (`cpu`, `gpu`, `npu`). The macro
> automatically translates NPU vendor names into `--backend=npu` and configures
> the matching plugin and dispatch library paths.

### Example `litert_define_ats` Usage

The example defines an ATS suite named
[`example_ats`](https://github.com/google-ai-edge/LiteRT/blob/827085b7b39c37c0d5817d37df8558f48249919d/litert/ats/BUILD#L44)
for an accelerator with the backend name `example`:

```
# Emits aot-mode and jit-mode test targets, one for running compilation test on host
# and another for running JIT and inference on device.
# These targets are named with their respective suffix attribute.
litert_define_ats(
    name = "example_ats",
    backend = "example",
    compile_only_suffix = "_aot",
    do_register = [
        "*mobilenet*",
    ],
    extra_flags = ["--limit=1"],
    jit_suffix = "",
    param_seeds = {
        # Seeds the randomized weights/params for the "Conv2d" test generator
        "Conv2d": 42,
    },
)
```

### Advanced Macro Attributes

* `param_seeds`: A dictionary mapping ATS test generator names (the operation
  under test, such as `"Conv2d"`, `"FullyConnected"`, `"Pooling"`, or
  `"ExtraModel"`) to specific integer seeds (e.g., `{"Conv2d": 42}`). This
  populates the `--seeds` flag at runtime to ensure reproducible,
  deterministic randomized weights and input tensors for that generator.
* `models`: A list of Bazel labels (or a single label) pointing to custom model
  directories or files. Specifying this overrides the default ATS model
  provider, automatically registers `"ExtraModel"`, and sets up
  device and host runfile paths.

### Execution

To execute the standard test targeted for android (which handles all `adb`
operations):

```
# Handles environment setup, and build + push of library and data dependencies to the device,
# executes the suite on the target.
bazel run -c opt --config=android_arm64 :example_ats
```

To execute the AOT compilation test:

```
# Handle environment setup, and builds library dependencies for host platform.
# Executes the ats compile only flow. The "--compile_mode" flag is already
# bound to the program arguments.
bazel run :example_ats_aot
```

### Linux Execution (Host)

For Linux execution, where ATS is being run on the same machine doing the build,
users will need to use the `:ats` binary directly:

```
bazel run -c opt :ats
```

### IoT Execution

For IoT execution, users will need to build the binary on the host and manually
push it to their device.

## Command-Line Flags

The `ats` executable accepts several flags for granular control over testing and
reporting.

| Flag | Type | Description |
| --- | --- | --- |
| `--backend` | `std::string` | **Required.** Which LiteRT backend to use as the accelerator under test (the "actual"). Options are `cpu`, `npu`, or `gpu`. |
| `--compile_mode` | `bool` | If true, runs the AOT compilation step on the workstation instead of on-device execution. NOTE: this option is automatically bound to the "aot" build target and doesn't need to be set explicitly. |
| `--models_out` | `std::string` | The directory path where side-effect serialized (compiled) models are saved. Only relevant for AOT or JIT compilation. |
| `--dispatch_dir` | `std::string` | Path to the directory containing the accelerator's dispatch library (relevant for NPU). |
| `--plugin_dir` | `std::string` | Path to the directory containing the accelerator's compiler plugin library (relevant for NPU). |
| `--soc_manufacturer` | `std::string` | The SOC manufacturer to target for AOT compilation (relevant for NPU compilation). |
| `--soc_model` | `std::string` | The SOC model to target for AOT compilation (relevant for NPU compilation). |
| `--iters_per_test` | `size_t` | Number of iterations to run per test, each with different randomized tensor data. |
| `--max_ms_per_test` | `int64_t` | Maximum time in milliseconds to run each test before a timeout. `-1` indicates no explicit limit (a default of 10 seconds is provided). |
| `--fail_on_timeout` | `bool` | Whether the test should fail if the execution times out. |
| `--csv` | `std::string` | File path to save the detailed report in CSV format. |
| `--dump_report` | `bool` | Whether to dump the entire report details directly to the user's console output. |
| `--data_seed` | std::optional<int> | A single seed for global data generation. |
| `--seeds` | std::vector<std::string> | Comma-separated test-generator/seed pairings in the form `<generator_name>:<seed>` (e.g., `Conv2d:42`). Used to generate reproducible randomized parameters for all invocations of the specified test generator. |
| `--cpu_hint_fully_delegated` | `bool` | If true (default), hints to the CPU backend to fully delegate execution to a single delegate. |
| `--f16_range_for_f32` | `bool` | If true, generates float16 range values stored as float32 for float32 tensors. Default is `false`. |
| `--dont_register` | std::vector<std::string> | Regex(es) to exclude specific tests. This is a negative match and takes priority over `do_register`. |
| `--do_register` | std::vector<std::string> | Regex(es) for explicitly including specific tests (e.g., `*mobilenet*`). Has lower priority than `dont_register`. |
| `--extra_models` | std::vector<std::string> | Optional list of directories or model files to add to the test suite. |
| `--gtest_filter` | `std::string` | GoogleTest filter override to execute specific test cases (e.g., `--gtest_filter=*Conv2d*`). |
| `--limit` | `int32_t` | Limit the total number of tests registered and run. |
| `--quiet` | `bool` | Minimize logging output during the test run. |

## Using the `litert_device_script` build utilities for ATS

The ATS targets users execute automatically include a shell entry point which
handles all of the environment setup, and any pushing of required libraries when
the target device differs from the host on which the build was completed (e.g.
`adb push`).

This functionality is provided generically through the `litert_device_script`
utilities which ATS builds use under the hood. There is a registration process
accelerators must do to access this build functionality. In addition to
supporting `ats`, these utilities can be used in a standalone fashion to
simulate `cc_binary` and `cc_test` meant to be executed on a device different
from the build host requiring pushed dependencies.

### Backend Registration

To enable a new accelerator for use with `litert_device_script` (and therefore
ATS), its required libraries must be registered in the
**`litert_device_common.bzl`** Bazel file. Registration is based on a unique
**"backend" name** which maps to a set of buildable or pre-compiled libraries
needed for LiteRT to operate with that accelerator.

#### Registration Steps

1. **Define a `BackendSpec` function:** Create a function that returns a
   dictionary containing your new accelerator's specification.
2. **Specify Libraries (`libs`):** This is a list of tuples detailing the Bazel
   target path for the shared library and the environment variable
   (`LD_LIBRARY_PATH`) required for the device linker to find it.

   * **Dispatch Library:** Required for runtime execution.
   * **Compiler Plugin Library:** Required for AOT compilation mode.
3. **Specify Library Names (`plugin`, `dispatch`):** Provide the file names of
   the plugin and dispatch libraries.
4. **Specify Host Libraries (`host_libs`, optional):** A list of prebuilt host
   libraries required when running AOT compilation on a Linux workstation.
5. **Register the Spec:** Merge your new spec function into the main `_Specs`
   function to make it available by its unique backend ID.

### Example Registration (`_ExampleSpec`)

The following code from `litert_device_common.bzl` illustrates how the "example"
accelerator is registered:

```
def _ExampleSpec():
    return {
        # The unique backend ID
        "example": BackendSpec(
            id = "example",
            libs = [
                # Dispatch Library and how to find it on device
                ("//third_party/odml/litert/litert/vendors/examples:libLiteRtDispatch_Example.so", "LD_LIBRARY_PATH"),
                # Compiler Plugin Library
                ("//third_party/odml/litert/litert/vendors/examples:libLiteRtCompilerPlugin_Example.so", "LD_LIBRARY_PATH"),
            ],
            plugin = "libLiteRtCompilerPlugin_Example.so",
            dispatch = "libLiteRtDispatch_Example.so",
            host_libs = [
                "//third_party/odml/litert/litert/vendors/examples:example_plugin_host_lib",
            ],
        ),
    }

# ... (Other specs are defined here)

def _Specs(name):
    # Your new spec function must be included here
    return (_QualcommSpec() | _GoogleTensorSpec() | _MediatekSpec() | _CpuSpec() | _GpuSpec() | _ExampleSpec())[name]
```

### Leveraging Registration with `litert_device_exec`

Once registered, use the **`litert_device_exec`** macro. This macro
automatically bundles the required libraries and any specified data files into
an executable ADB script.

```
cc_binary(
    name = "example_bin",
    srcs = ["example_bin.cc"],
)

litert_device_exec(
    name = "example_bin_device",
    backend_id = "example",  # Uses the libraries registered under "example"
    data = [
        "//third_party/odml/litert/litert/test:testdata/constant_output_tensor.tflite",
    ],
    target = ":example_bin",
)
```

To execute this binary on a physically attached device (handling all `adb push`
and execution setup), run the generated `_adb` target:

```
bazel run -c opt --config=android_arm64 :example_bin_device_adb
```

Running this target will:

1. Build the `example_bin` C++ binary.
2. Push the binary, `libLiteRtDispatch_Example.so`,
   `libLiteRtCompilerPlugin_Example.so`, and the `.tflite` file to the device.
3. Execute the binary using `adb shell`.

> **Note on Device Paths:** The canonical location for files on the device
> mirrors Bazel's runfile tree, specifically
> `/data/local/tmp/runfiles/runfiles_relative_path`. The device script
> automatically handles setting the appropriate paths for the dynamic linker.

### Simplified On-Device Testing with `litert_device_test`

For C++ unit tests (`cc_test`), LiteRT provides `litert_device_test` as a
higher-level wrapper around `litert_device_exec`. It automatically generates
the underlying `cc_test` and bundles it into an ADB execution script:

```
litert_device_test(
    name = "example_test",
    srcs = ["example_test.cc"],
    backend_id = "example",
    data = ["//path/to:model.tflite"],
    deps = ["//third_party/odml/litert/litert/cc:litert_common"],
)
```

Similar to `litert_device_exec`, execute the generated `_adb` target to run
the test on an attached device:

```
bazel run -c opt --config=android_arm64 :example_test_adb
```

## Compilation Mode (AOT)

For accelerators that support an **Ahead-of-Time (AOT) compilation** step, ATS
can be executed in a dedicated **"compile mode"**.

* **Purpose:** This mode is designed to be run on a **workstation** (host
  machine), not the target device. It compiles the models for the specified
  target hardware without executing them.
* **Output:** All compiled models are output to a designated directory on the
  workstation.
* **Activation:** The ATS build macros will emit a specific target for aot
  where libraries are built for the host platform. This flow can be enabled on
  any binary with the `--compile_mode` flag, but is is automatically bound to
  the arguments of the aot build.

## Single Operation (Op) Testing

In addition to full model validation, ATS provides comprehensive, dedicated
testing for individual LiteRT operations. The suite automatically generates
randomized input tensors and parameters across various op configurations (e.g.,
`Unary`, `BinaryBroadcast`, `Conv2d`, `FullyConnected`, `Pooling`, `Reduction`,
`OneHot`, `Reshape`).

### Enabling Single Op Tests

Single op tests are prefixed with `SingleOp`. You can enable them in your
`litert_define_ats` target by including `"SingleOp"` in the `do_register`
attribute:

```
litert_define_ats(
    name = "example_ats",
    backend = "example",
    compile_only_suffix = "_aot",
    do_register = [
        "SingleOp",             # Enables all standard single op tests
        "hf_mobilevit_small",   # Enables full model tests
    ],
    jit_suffix = "",
)
```

Send feedback
