# MediaTek NPU (NeuroPilot) with LiteRT Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/mediatek))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT supports MediaTek NeuroPilot through the `CompiledModel` API for both AOT
and on-device compilation.

## Set up development environment

* **Operating System:** Ubuntu 22.04 LTS
* **Build System:** Bazel 7.4.1
* **Android SDK:** API Level 34 (Android 14)
* **Android NDK:** Support for API Level 28 (Android 9 Pie)

## Supported SoCs

* Dimensity 7300 (MT6878)
* Dimensity 8300 (MT6897)
* Dimensity 9000 (MT6983)
* Dimensity 9200 (MT6985)
* Dimensity 9300 (MT6989)
* Dimensity 9400 (MT6991)
* Dimensity 9500 (MT6990)

## Next steps

1. Start with the unified NPU guide: [NPU acceleration with LiteRT](https://developers.google.com/edge/litert/next/npu)
2. Follow the conversion and deployment steps there, choosing MediaTek where
   applicable.
3. For LLMs, see [Execute LLMs on NPU using LiteRT-LM](https://developers.google.com/edge/litert/next/litert_lm_npu).

Send feedback
