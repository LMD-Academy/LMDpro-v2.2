# LiteRT delegate for NPUs Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/android/npu/overview))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

The Android ecosystem encompasses a wide range of devices with diverse neural
processing units (NPUs). Leveraging these specialized NPUs can significantly
accelerate LiteRT (TFLite) model inference and reduce energy consumption
compared to CPU or GPU execution, enhancing the user experience in your
applications.

Chip vendors who manufacture NPUs provide LiteRT delegates to allow your app to
use their specific hardware on each user's device.

## Qualcomm® AI Engine Direct Delegate

The Qualcomm® AI Engine Direct Delegate enables users to run LiteRT models using
the [AI Engine Direct runtime](https://www.qualcomm.com/developer/software/qualcomm-ai-engine-direct-sdk). The delegate is backed by Qualcomm's Neural
Network API.

The Qualcomm® AI Engine Direct Delegate is available on [Maven Central](https://central.sonatype.com/artifact/com.qualcomm.qti/qnn-litert-delegate). For
more information, see the [Qualcomm Neural Network documentation](https://docs.qualcomm.com/bundle/publicresource/topics/80-63442-50/tflite_delegate.html).

## Intel OpenVino

LiteRT's `CompiledModel` API supports Intel NPU, check
[the LiteRT IntelOpenVino docs](https://ai.google.dev/edge/litert/next/npu#intel-openvino)
for details.

## Coming soon

We look forward to supporting delegates from the following vendors in the coming
months:

* Google Pixel
* Samsung System LSI

Stay tuned for updates and further instructions on using these delegates to
harness the power of NPUs in your LiteRT (TFLite) models.

Send feedback
