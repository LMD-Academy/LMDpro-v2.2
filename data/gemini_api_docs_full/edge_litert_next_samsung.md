# Samsung NPU (Exynos AI LiteCore) with LiteRT Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/samsung))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT supports Samsung Exynos AI LiteCore through the `CompiledModel` API for both AOT and on-device compilation.

## Set up development environment

Samsung Exynos AI LiteCore has the following development environment
requirements:

* **Operating System**: Ubuntu 22.04 LTS
* **Build System**: Bazel version 7.4.1
* **Standard libraries**: Libc++ and Libc++abi 16+
* **Platform Specific Requirements:**
  + **Android:**
  + **Android SDK**: Android API Level 36 (Android 16).
  + **Android NDK**: Support for API Level 28 (Android 9 Pie).

You can use the [Quick system setup with Docker](https://github.com/google-ai-edge/LiteRT/blob/main/docker_build/README.md) to configure
dependencies automatically.

## Supported SoCs

* Exynos 2500 Mobile Platform (E9955)
* Exynos 2600 Mobile Platform (E9965)

## Next steps

1. Start with the unified NPU guide: [NPU acceleration with LiteRT](https://ai.google.dev/edge/litert/next/npu)
2. Follow the conversion and deployment steps there, choosing Samsung where applicable.
3. For LLMs, see [Execute LLMs on NPU using LiteRT-LM](https://ai.google.dev/edge/litert/next/litert_lm_npu).

Send feedback
