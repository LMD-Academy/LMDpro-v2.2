--- source: https://ai.google.dev/edge/litert/next/tensor-sdk ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Google Tensor with LiteRT Stay organized with collections Save and categorize content based on your preferences.



Google Tensor is a custom-designed System-on-Chip (SoC) made for running
AI models on Google Pixel phones. Tensor is optimized for
computational efficiency and minimal energy consumption. It uses a dedicated ML
inference accelerator called TPU (Tensor Processing Unit), which is accessible
through Google Tensor SDK.

## Sign up for access to Google Tensor SDK Beta

Google Tensor SDK is a software development kit created to optimize
on-device machine learning for Google Pixel phones by utilizing the custom
Tensor System-on-Chip (SoC) and its dedicated TPU inference accelerator.
This SDK provides a comprehensive suite of tools that help developers
access curated open-source models in [Model Garden](/edge/tensor-sdk/model-garden).
This kit also enables the compilation of models into TPU-compatible
formats.

---


[![](/static/edge/litert/images/tensor-ml-sdk/tensor-g5-hero.gif)](https://services.google.com/fb/forms/tensor_ml_sdk_experimental_access)
[Sign-up](https://services.google.com/fb/forms/tensor_ml_sdk_experimental_access)

---

## Key features

* **Direct access to dedicated TPU hardware** for efficient ML inference on
  Pixel devices.
* Curated open-source models optimized for the SDK in **Model Garden**.

## Set up the development environment

Following are the required hardware and software specifications, and the
prerequisites for utilizing the Google Tensor SDK:

### Hardware

* A local development workstation utilizing a Linux-based operating system
  with an **x86\_64 architecture**.
  + **Tip:** To ascertain your workstation's architecture, you can use the
    `uname -m` command or a similar diagnostic tool.
* A minimum of **16 GB RAM** is required.   
  The specific RAM capacity needed for SDK
  usage is dependent on your model's input size. For more substantial input
  data, a minimum of 64 GB RAM is recommended.

### Software

* **Operating System:** Ubuntu 22.04 LTS
* **Build System:** Bazel 7.4.1
* **Android SDK:** API Level 34 (Android 14)
* **Android NDK:** Support for API Level 28 (Android 9 Pie)
* (Optional) Python 3.11.0

  **Note:** Python is only required for local model conversion to LiteRT using
  AI Edge Torch.
* Android Debug Bridge (adb)

### Prerequisites

* (Optional) A Google Cloud Project (GCP) that has been granted access
  to
  remote Pixel devices by the Tensor SDK team. For guidance on
  Google Cloud project creation, consult
  [Creating and managing projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

  **Note:** This prerequisite does not apply to Pixel 10 devices.
* (Optional) A downloaded copy of `efficientnet_b0.tflite`

## Supported SoCs

Google Tensor SDK supports the following SoCs:

* Google Tensor G5 (Tensor\_G5)

## Next steps

1. Follow conversion and deployment steps in
   [NPU acceleration with LiteRT](https://developers.google.com/edge/litert/next/npu), choosing Google Tensor as applicable.

   **Note:** You can apply [compilation flags](/edge/tensor-sdk/compilation-flags) for Google Tensor to optimize your
   model's performance.
2. For language models, see [Execute LLMs on NPU using LiteRT-LM](https://developers.google.com/edge/litert/next/litert_lm_npu).






Send feedback