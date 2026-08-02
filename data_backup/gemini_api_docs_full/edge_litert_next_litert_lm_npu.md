--- source: https://ai.google.dev/edge/litert/next/litert_lm_npu ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Run LLMs using LiteRT-LM Stay organized with collections Save and categorize content based on your preferences.



**LiteRT-LM** is a cross-platform library designed to efficiently run language
model pipelines on a wide range of devices, from mobile phones to embedded
systems. It provides developers with the tools to create and deploy
sophisticated language model workflows, now with seamless NPU integration.

## Run LLMs on CPU and GPU

See [LiteRT-LM GitHub repo](https://github.com/google-ai-edge/LiteRT-LM) for detailed instructions on
cross-platform development and CPU/GPU hardware acceleration.

## Run LLMs on NPU

Neural Processing Units (NPUs) offer specialized hardware blocks optimized for
deep learning workloads. They are increasingly available in modern systems on a
chip (SoCs), especially on mobile devices. Their high-performing nature makes
them a great fit for running LLM inference.

### NPU Vendors

LiteRT-LM supports running LLMs using NPU acceleration with the following
vendors. Choose the instructions depending on which vendor you would like to
try:

* [Google Tensor](#tensor)
* [Qualcomm AI Engine Direct](#qualcomm)
* [MediaTek NeuroPilot](#mediatek)
* [Intel OpenVino](#intel)

## Quick Start

To get started, first follow the
[Prerequisites](https://github.com/google-ai-edge/LiteRT-LM?tab=readme-ov-file#prerequisites)
instructions to set up the environment and the repository.

Also, to be able to interact with your Android device, make sure you've properly
installed [Android Debug Bridge](https://developer.android.com/tools/adb) and
have a connected device that can be accessed using `adb`.

For more details instructions, checkout the
[Quick Start](https://github.com/google-ai-edge/LiteRT-LM?tab=readme-ov-file#quick-start)
section in the [LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)
repository and find more information about the `litert_lm_main`
[command line demo](https://github.com/google-ai-edge/LiteRT-LM?tab=readme-ov-file#command-line-demo-usage-).

### Google Tensor

Follow these steps to run LLMs on Google Tensor:

**Step 1:** Download the `.litertlm` model
The LiteRT-LM runtime is designed to work with models in the `.litertlm` format.

You can find and download compatible models in the following table:

| Model | SoC | Quantization | Context size | Model Size (Mb) | Download link |
| --- | --- | --- | --- | --- | --- |
| Gemma3-1B | Tensor\_G5 | 8-bit per-channel | 1280 | 1704 | [download](https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q8_ekv1280_Google_Tensor_G5.litertlm) |

Following is an example command that can help you get the Hugging Face link that
can download the correct model for the SoC of your phone (note that you'll have
to login and acknowledge the form in order to have the permission to download
the file). You should make sure there is a connected device that can
be accessed using `adb`.

```
SOC_MODEL=$(adb shell getprop ro.soc.model | tr '[:upper:]' '[:lower:]')
echo "https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_Google_${SOC_MODEL}.litertlm"
```

Verify that the $SOC\_MODEL is listed in the support table. The generated link
won't function for unsupported models. New support for NPUs is being added
regularly so check back again later to see if your device is supported.

**Step 2:** Build the LiteRT-LM runtime / libraries

***Develop in Linux***

To be able to build the binary for Android, one needs to install NDK r28b or
newer from [Latest Stable Version](https://developer.android.com/ndk/downloads#stable-downloads).

Follow these steps:

* Download the latest stable NDK package (`zip` file) from
  [Latest Stable Version](https://developer.android.com/ndk/downloads#stable-downloads).
* Extract the `zip` file to your preferred location (say
  `/path/to/AndroidNDK/`)
* Make `ANDROID_NDK_HOME` point to the NDK directory. It should be
  something like the following:

```
export ANDROID_NDK_HOME=/path/to/AndroidNDK/
```

**Tip:** make sure your `ANDROID_NDK_HOME` points to the directory that has
`README.md` in it.\*

With this set up, build the `litert_lm_main` binary using the following command:

```
bazel build --config=android_arm64 //runtime/engine:litert_lm_main
```

Additionally, build the dispatch API library in order for enabling the
LiteRT-LM runtime to interact with NPU:

```
bazel build --config=android_arm64 \
    @litert//litert/vendors/google_tensor/dispatch:dispatch_api_so
```

**Step 3:** Run the model on device
After the binary is successfully built, we can now try to run the model on
device. Make sure you have the write access to the `DEVICE_FOLDER`:

In order to run the binary on your Android device, we have to push a few assets
/ binaries. First set your `DEVICE_FOLDER`, make sure you have the write access
to it (typically you can put things under `/data/local/tmp/`):

```
export DEVICE_FOLDER=/data/local/tmp/
adb shell mkdir -p $DEVICE_FOLDER

export MODEL_PATH=<path to your downloaded .litertlm >
```

Push the *.litertlm* file.

**Tip:** you only need to push those assets once.

```
adb push $MODEL_PATH $DEVICE_FOLDER/model.litertlm
```

Push the dispatch API and main binary compiled in Step 2.

```
adb push bazel-bin/external/litert/litert/vendors/google_tensor/*/*.so \
    $DEVICE_FOLDER
adb push prebuilt/android_arm64/*.so $DEVICE_FOLDER
adb push bazel-bin/runtime/engine/litert_lm_main $DEVICE_FOLDER
```

Now, you can execute the binary.

```
adb shell LD_LIBRARY_PATH=$DEVICE_FOLDER \
    $DEVICE_FOLDER/litert_lm_main \
    --backend=npu \
    --model_path=$DEVICE_FOLDER/model.litertlm
```

### Qualcomm AI Engine Direct

The steps to run the LLMs on Qualcomm NPU are as the following:

**Step 1:** Download the `.litertlm` model
The LiteRT-LM runtime is designed to work with models in the `.litertlm` format.
You can find and download compatible models in the following table.

| Model | SoC | Quantization | Context size | Model Size (Mb) | Download link |
| --- | --- | --- | --- | --- | --- |
| Gemma3-1B | SM8750 | 4-bit per-channel | 1280 | 658 | [download](https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_sm8750.litertlm) |
| Gemma3-1B | SM8650 | 4-bit per-channel | 1280 | 658 | [download](https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_sm8650.litertlm) |
| Gemma3-1B | SM8550 | 4-bit per-channel | 1280 | 657 | [download](https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_sm8550.litertlm) |

You'll have to download the model that corresponds to your SoC.
Following is an example command that can help you get the Hugging Face link that
can download the correct model for the SoC of your phone (note that you'll have
to login and acknowledge the form in order to have the permission to download
the file). You should make sure there is a connected device that can
be accessed using `adb`.

```
SOC_MODEL=$(adb shell getprop ro.soc.model | tr '[:upper:]' '[:lower:]')
echo "https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_${SOC_MODEL}.litertlm"
```

Verify that the $SOC\_MODEL is listed in the support table. The generated link
won't function for unsupported models. New support for NPUs is being added
regularly so check back again later to see if your device is supported.

**Step 2:** Download and extract the QAIRT libraries
In order to run the model using the Qualcomm NPU, it requires associated runtime
libraries on the device. One can download the QAIRT SDK from
[the link](https://softwarecenter.qualcomm.com/api/download/software/sdks/Qualcomm_AI_Runtime_Community/All/2.42.0.251225/v2.42.0.251225.zip) and extract the file. Set the variable `QAIRT_ROOT` (will use it in later steps) to point to the unzipped folder that contains the version number, for example:

```
unzip <your_file.zip> -d ~/

QAIRT_ROOT=~/qairt/2.42.0.251225
```

**Step 3:** Build the LiteRT-LM runtime / libraries

***Develop in Linux***

To be able to build the binary for Android, one needs to install NDK r28b or
newer from https://developer.android.com/ndk/downloads#stable-downloads.
Specific steps are:

* Download the `zip` file from
  https://developer.android.com/ndk/downloads#stable-downloads.
* Extract the `zip` file to your preferred location (say
  `/path/to/AndroidNDK/`)
* Make `ANDROID_NDK_HOME` to point to the NDK directory. It should be
  something like:

```
export ANDROID_NDK_HOME=/path/to/AndroidNDK/
```

*Tips: make sure your `ANDROID_NDK_HOME` points to the directory that has
`README.md` in it.*

With the set up, try to build the `litert_lm_main` binary:

```
bazel build --config=android_arm64 //runtime/engine:litert_lm_main
```

Additionally, we should build the dispatch API library in order for the
LiteRT-LM runtime to interact with NPU:

```
bazel build --config=android_arm64 \
    @litert//litert/vendors/qualcomm/dispatch:dispatch_api_so
```

***Develop in macOS***

Xcode command line tools include clang. Run `xcode-select --install` if not
installed before.

To be able to build the binary for Android, one needs to install NDK r28b or
newer from https://developer.android.com/ndk/downloads#stable-downloads.
Specific steps are:

* Download the `.dmg` file from
  https://developer.android.com/ndk/downloads#stable-downloads.
* Open the `.dmg` file and move the `AndroidNDK*` file to your preferred
  location (say `/path/to/AndroidNDK/`)
* Make `ANDROID_NDK_HOME` to point to the NDK directory. It should be
  something like:

```
export ANDROID_NDK_HOME=/path/to/AndroidNDK/AndroidNDK*.app/Contents/NDK/
```

*Tips: make sure your `ANDROID_NDK_HOME` points to the directory that has
`README.md` in it.*

With the set up, try to build the `litert_lm_main` binary:

```
bazel build --config=android_arm64 //runtime/engine:litert_lm_main
```

Additionally, we should build the dispatch API library in order for the
LiteRT-LM runtime to interact with NPU:

```
bazel build --config=android_arm64 \
    @litert//litert/vendors/qualcomm/dispatch:dispatch_api_so
```

**Step 4:** Run the model on device
After the binary is successfully built, we can now try to run the model on
device. Make sure you have the write access to the `DEVICE_FOLDER`:

In order to run the binary on your Android device, we have to push a few assets
/ binaries. First set your `DEVICE_FOLDER`, make sure you have the write access
to it (typically you can put things under `/data/local/tmp/`):

```
export DEVICE_FOLDER=/data/local/tmp/
adb shell mkdir -p $DEVICE_FOLDER

export MODEL_PATH=<path to your downloaded .litertlm >
```

Push the .litertlm file. Tip: you only need to push those assets once.

```
adb push $MODEL_PATH $DEVICE_FOLDER/model.litertlm
```

Push the QAIRT libraries. You can find them located in the unzipped folder in
**Step 2** `$QAIRT_ROOT/lib/aarch64-android/`. Note that the `QAIRT_ROOT` should
contain the version number, e.g. `2.42.0.251225`.

```
adb push $QAIRT_ROOT/lib/aarch64-android/libQnnHtp*Stub.so $DEVICE_FOLDER
adb push $QAIRT_ROOT/lib/aarch64-android/libQnnHtp.so $DEVICE_FOLDER
adb push $QAIRT_ROOT/lib/aarch64-android/libQnnSystem.so $DEVICE_FOLDER
adb push $QAIRT_ROOT/lib/aarch64-android/libQnnHtpPrepare.so $DEVICE_FOLDER
adb push $QAIRT_ROOT/lib/hexagon-*/unsigned/libQnnHtp*Skel.so $DEVICE_FOLDER
```

Push the dispatch API and main binary compiled in Step 3.

```
adb push bazel-bin/external/litert/litert/vendors/qualcomm/*/*.so \
    $DEVICE_FOLDER
adb push prebuilt/android_arm64/*.so $DEVICE_FOLDER
adb push bazel-bin/runtime/engine/litert_lm_main $DEVICE_FOLDER
```

Now, you can execute the binary.

```
adb shell LD_LIBRARY_PATH=$DEVICE_FOLDER ADSP_LIBRARY_PATH=$DEVICE_FOLDER \
    $DEVICE_FOLDER/litert_lm_main \
    --backend=npu \
    --model_path=$DEVICE_FOLDER/model.litertlm
```

### MediaTek NeuroPilot

The steps to run the LLMs on MediaTek NPU are as the following:

**Step 1:** Download the `.litertlm` model
The LiteRT-LM runtime is designed to work with models in the `.litertlm` format.
You can find and download compatible models in the following table.

| Model | SoC | Quantization | Context size | Model Size (Mb) | Download link |
| --- | --- | --- | --- | --- | --- |
| Gemma3-1B | MT6989 | 4-bit per-channel | 1280 | 985 | [download](https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_mt6989.litertlm) |
| Gemma3-1B | MT6991 | 4-bit per-channel | 1280 | 986 | [download](https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_mt6991.litertlm) |

You'll have to download the model that corresponds to your SoC.
Following is an example command that can help you get the Hugging Face link that
can download the correct model for the SoC of your phone (note that you'll have
to login and acknowledge the form in order to have the permission to download
the file). You should make sure there is a connected device that can
be accessed using `adb`.

```
SOC_MODEL=$(adb shell getprop ro.soc.model | tr '[:upper:]' '[:lower:]')
echo "https://huggingface.co/litert-community/Gemma3-1B-IT/blob/main/Gemma3-1B-IT_q4_ekv1280_${SOC_MODEL}.litertlm"
```

Verify that the $SOC\_MODEL is listed in the support table. The generated link
won't function for unsupported models. New support for NPUs is being added
regularly so check back again later to see if your device is supported.

**Step 2:** Build the LiteRT-LM runtime / libraries

***Develop in Linux***

To be able to build the binary for Android, one needs to install NDK r28b or
newer from https://developer.android.com/ndk/downloads#stable-downloads.
Specific steps are:

* Download the `zip` file from
  https://developer.android.com/ndk/downloads#stable-downloads.
* Extract the `zip` file to your preferred location (say
  `/path/to/AndroidNDK/`)
* Make `ANDROID_NDK_HOME` to point to the NDK directory. It should be
  something like:

```
export ANDROID_NDK_HOME=/path/to/AndroidNDK/
```

*Tips: make sure your `ANDROID_NDK_HOME` points to the directory that has
`README.md` in it.*

With the set up, try to build the `litert_lm_main` binary:

```
bazel build --config=android_arm64 //runtime/engine:litert_lm_main
```

Additionally, we should build the dispatch API library in order for the
LiteRT-LM runtime to interact with NPU:

```
bazel build --config=android_arm64 \
    @litert//litert/vendors/mediatek/dispatch:dispatch_api_so
```

***Develop in macOS***

Xcode command line tools include clang. Run `xcode-select --install` if not
installed before.

To be able to build the binary for Android, one needs to install NDK r28b or
newer from https://developer.android.com/ndk/downloads#stable-downloads.
Specific steps are:

* Download the `.dmg` file from
  https://developer.android.com/ndk/downloads#stable-downloads.
* Open the `.dmg` file and move the `AndroidNDK*` file to your preferred
  location (say `/path/to/AndroidNDK/`)
* Make `ANDROID_NDK_HOME` to point to the NDK directory. It should be
  something like:

```
export ANDROID_NDK_HOME=/path/to/AndroidNDK/AndroidNDK*.app/Contents/NDK/
```

*Tips: make sure your `ANDROID_NDK_HOME` points to the directory that has
`README.md` in it.*

With the set up, try to build the `litert_lm_main` binary:

```
bazel build --config=android_arm64 //runtime/engine:litert_lm_main
```

Additionally, we should build the dispatch API library in order for the
LiteRT-LM runtime to interact with NPU:

```
bazel build --config=android_arm64 \
    @litert//litert/vendors/mediatek/dispatch:dispatch_api_so
```

**Step 3:** Run the model on device
After the binary is successfully built, we can now try to run the model on
device. Make sure you have the write access to the `DEVICE_FOLDER`:

In order to run the binary on your Android device, we have to push a few assets
/ binaries. First set your `DEVICE_FOLDER`, make sure you have the write access
to it (typically you can put things under `/data/local/tmp/`):

```
export DEVICE_FOLDER=/data/local/tmp/
adb shell mkdir -p $DEVICE_FOLDER

export MODEL_PATH=<path to your downloaded .litertlm >
```

Push the .litertlm file. Tip: you only need to push those assets once.

```
adb push $MODEL_PATH $DEVICE_FOLDER/model.litertlm
```

Push the dispatch API and main binary compiled in Step 2.

```
adb push bazel-bin/external/litert/litert/vendors/mediatek/*/*.so \
    $DEVICE_FOLDER
adb push prebuilt/android_arm64/*.so $DEVICE_FOLDER
adb push bazel-bin/runtime/engine/litert_lm_main $DEVICE_FOLDER
```

Now, you can execute the binary.

```
adb shell LD_LIBRARY_PATH=$DEVICE_FOLDER \
    $DEVICE_FOLDER/litert_lm_main \
    --backend=npu \
    --model_path=$DEVICE_FOLDER/model.litertlm
```

### Intel OpenVino

#### Run using the C++ executable

The steps to run the LLMs on Intel NPU are as the following:

**Step 1:** Download the `.litertlm` model
The LiteRT-LM runtime is designed to work with models in the `.litertlm` format.
You can find and download compatible models in the following table.

| Model | SoC | Context size | Model Size (Mb) | Download link |
| --- | --- | --- | --- | --- |
| Gemma4-2B | PantherLake | 4096 | 2.95 GB | [download](https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm/blob/main/gemma-4-E2B-it_intel_PTL.litertlm) |
| Gemma4-2B | LunarLake | 4096 | 2.96 GB | [download](https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm/blob/main/gemma-4-E2B-it_intel_LNL.litertlm) |

**Step 2:** Build the LiteRT-LM runtime and LiteRT Intel Dispatch library

***Develop on Windows***

With the set up, try to build the `litert_lm_main` binary:

```
bazel --output_base=C:\bzl_lrtlm build --define=DISABLE_HUGGINGFACE_TOKENIZER=1 --config=windows //runtime/engine:litert_lm_main
```

Additionally, we should build the dispatch API library in order for the
LiteRT-LM runtime to interact with NPU:

```
bazel --output_base=C:\bzl_lrtlm build --config=windows  @litert//litert/vendors/intel_openvino/dispatch:LiteRtDispatch
```

**Step 3:** Run the model on device
After the binary is successfully built, we can now try to run the model on
device. We package all binaries, DLLs and the model into a 'execution\_dir':

```
cp bazel-bin/external/litert/vendors/intel_openvino/dispatch/LiteRtDispatch.dll execution_dir
cp bazel-bin/runtime/engine/litert_lm_main.exe execution_dir
cp prebuilt\windows_x86_64\libGemmaModelConstraintProvider.dll execution_dir

# Run OpenVino's setup script to ensure the OpenVino DLLs can be found.
& C:\bzl_lrtlm\external\intel_openvino\openvino\setupvars.ps1

# Test run
cd execution_dir
.\litert_lm_main.exe --backend=npu --model_path="execution_dir\model.litertlm"  --input_prompt="What is the capital of France?"
```

Also see https://ai.google.dev/edge/litert-lm/python for LiteRT-LM's Python API
to run a .`litertlm` file with the NPU backend.

```
import litert_lm

with litert_lm.Engine("C:\path\to\npu-model.litertlm", backend=litert_lm.Backend.NPU()) as engine:
  with engine.create_conversation() as conversation:
    print(conversation.send_message("What is the capital of France?"))
```






Send feedback