--- source: https://ai.google.dev/edge/litert/next/qualcomm ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Qualcomm NPU (AI Engine Direct) with LiteRT Stay organized with collections Save and categorize content based on your preferences.



LiteRT supports Qualcomm AI Engine Direct (QNN) through the `CompiledModel` API
for both AOT and on-device compilation.

## Set up development environment

Qualcomm AI Engine Direct has the following development environment
requirements:

* **Operating System**: Ubuntu 22.04 LTS
* **Build System**: Bazel version 7.4.1
* **Standard libraries**: Libc++ and Libc++abi 16+
* **Platform Specific Requirements:**
  + **Android:**
  + **Android SDK**: Android API Level 34 (Android 14).
  + **Android NDK**: Support for API Level 28 (Android 9 Pie).
  + **IoT**: coming soon.
  + **Windows**: coming soon.

You can use the [Quick system setup with Docker](https://github.com/google-ai-edge/LiteRT/blob/main/docker_build/README.md) to configure
dependencies automatically.

## Supported operations

LiteRT lowers a broad set of ops to the QNN Hexagon Tensor Processor (HTP)
backend. Both AOT and on-device compilation are supported. See the
[supported ops](https://github.com/google-ai-edge/LiteRT/blob/main/litert/vendors/qualcomm/compiler/Qualcomm_QNN_Compiler.md)
list.

## Supported SoCs

* Snapdragon 8 Elite Gen 5 Mobile Platform (SM8850)
* Snapdragon 8 Elite Mobile Platform (SM8750)
* Snapdragon 8 Gen 3 Mobile Platform (SM8650)
* Snapdragon 8 Gen 2 Mobile Platform (SM8550)
* Snapdragon 8+ Gen 1 Mobile Platform (SM8475)
* Snapdragon 8 Gen 1 Mobile Platform (SM8450)
* Refer to the [Qualcomm QNN HTP Backend](https://docs.qualcomm.com/doc/80-63442-10/topic/htp_backend.html) Documentation for advanced configuration of the HTP backend

## Next steps

1. Start with the unified NPU guide: [NPU acceleration with LiteRT](https://developers.google.com/edge/litert/next/npu)
2. Follow the conversion and deployment steps there, choosing Qualcomm where
   applicable.
3. For LLMs, see [Execute LLMs on NPU using LiteRT-LM](https://developers.google.com/edge/litert/next/litert_lm_npu).






Send feedback