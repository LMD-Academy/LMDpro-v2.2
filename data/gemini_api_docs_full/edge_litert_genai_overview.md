# Deploy GenAI Models with LiteRT Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/genai/overview))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT delivers high-performance deployment for Generative AI models across
mobile, desktop, and web platforms. By seamlessly leveraging hardware
acceleration from CPUs, GPUs, and NPUs, LiteRT provides state-of-the-art
performance for on-device GenAI inference.

You can deploy complex GenAI models using the following integrated tech stack:

* **Torch Generative API**: A Python module within the LiteRT Torch Library for
  authoring and converting PyTorch GenAI models. It provides optimized building
  blocks that ensures high-performance execution on devices. See
  [Convert PyTorch GenAI models](https://developers.google.com/edge/litert/conversion/pytorch/genai) for more details.
* **LiteRT-LM**: A specialized orchestration layer built on top of LiteRT to
  manage LLM-specific complexities, such as session cloning, kv-cache management,
  prompt caching/scoring, stateful inference. See
  [LiteRT-LM GitHub repo](https://github.com/google-ai-edge/LiteRT-LM)
  for more details.
* **LiteRT Converter and Runtime**: The foundational engine that provides
  efficient model conversion, runtime execution, and optimization, empowering
  advanced hardware acceleration across CPU, GPU, and NPU.

## LiteRT GenAI Model Zoo

LiteRT supports a growing collection of popular open-weight models
on the [LiteRT Hugging Face Community](https://huggingface.co/litert-community).
These models are pre-converted and tuned for immediate deployment, enabling you
to leverage peak performance on CPUs, GPUs, and NPUs out-of-the-box.

* [**Gemma Family**](https://huggingface.co/collections/litert-community/gemma-family)
  + Gemma 3 270M
  + Gemma 3 1B
  + Gemma 3n E2B/E4B
  + EmbeddingGemma 300M: see [EmbeddingGemma semantic similarity LiteRT C++ App](https://github.com/google-ai-edge/litert-samples/tree/main/compiled_model_api/semantic_similarity/build_from_source)
  + Function Gemma 270M
* [**Qwen Family**](https://huggingface.co/collections/litert-community/qwen-family)
* **Llama**
* **Phi**
* **SmoLM**
* **FastVLM**

## Featured Insights

* [MediaTek NPU and LiteRT: Powering the next generation of on-device AI](https://developers.googleblog.com/mediatek-npu-and-litert-powering-the-next-generation-of-on-device-ai/)
* [Unlocking Peak Performance on Qualcomm NPU with LiteRT](https://developers.googleblog.com/unlocking-peak-performance-on-qualcomm-npu-with-litert/)
* [On-device GenAI in Chrome, Chromebook Plus, and Pixel Watch with LiteRT-LM](https://developers.googleblog.com/on-device-genai-in-chrome-chromebook-plus-and-pixel-watch-with-litert-lm/)
* [On-device small language models with multimodality, RAG, and Function Calling](https://developers.googleblog.com/google-ai-edge-small-language-models-multimodality-rag-function-calling/)
* [Gemma 3 on mobile and web with Google AI Edge](https://developers.googleblog.com/gemma-3-on-mobile-and-web-with-google-ai-edge/)

Send feedback
