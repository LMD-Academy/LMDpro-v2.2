# Gemma 4 Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert-lm/models/gemma-4))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

Gemma 4 models are designed to deliver frontier-level performance at each size,
targeting deployment scenarios from mobile and edge devices (E2B, E4B) to
consumer GPUs and workstations (26B A4B, 31B). They are well-suited for
reasoning, agentic workflows, coding, and multimodal understanding.

**Note:** LiteRT-LM supports E2B and E4B models today, with support for larger
models coming soon.

Gemma 4 is licensed under the Apache-2.0 license. For more details, see the
[Gemma 4 Model Card](https://ai.google.dev/gemma/docs/core/model_card_4).

## 🔴 What's New: Multi-Token Prediction

Multi-Token Prediction (MTP) is a new performance optimization that
significantly accelerates decode speeds across CPU and GPU backends with zero
quality degradation.

* **Performance Gains:**
  + **GPU:** Massive acceleration, delivering up to 2.2x decode speedup on
    mobile GPUs.
  + **CPU:** Performance boosts up to 1.5x speedup on mobile CPUs and
    significant acceleration on SME-enabled hardware (e.g., M4 MacBooks).
* **Recommendations:** MTP is universally recommended for all tasks on GPU
  backends and for the Gemma4-E4B model on CPU. For the Gemma4-E2B model on
  CPU, it is highly valuable for rewrite, summarize, and coding tasks, but
  should be enabled selectively as it may cause a slight slowdown during
  freeform prompting or generative tasks.

To try it out, see the platform-specific guides:

* [LiteRT-LM CLI](/edge/litert-lm/cli#mtp)
* [Python API Guide](/edge/litert-lm/python#mtp)
* [Android (Kotlin) Guide](/edge/litert-lm/android#mtp)
* [iOS (Swift) Guide](/edge/litert-lm/swift#mtp)
* [C++ API Guide](/edge/litert-lm/cpp#mtp)

## Get Started

Chat with Gemma4-E2B, hosted on the Hugging Face LiteRT Community.

```
uv tool install litert-lm

litert-lm run  \
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm \
  gemma-4-E2B-it.litertlm \
  --prompt="What is the capital of France?"
```

## Deploy from Safetensors

Follow these steps to deploy Gemma 4 starting from your custom safetensors (for
example, after fine-tuning the model for your use-case):

* Convert to a `.litertlm` format:

  ```
  uv tool install litert-torch-nightly

  litert-torch export_hf \
    --model=google/gemma-4-E2B-it \
    --output_dir=/tmp/gemma4_2b \
    --externalize_embedder \
    --jinja_chat_template_override=litert-community/gemma-4-E2B-it-litert-lm
  ```
* Deploy using
  [LiteRT-LM cross-platform APIs](/edge/litert-lm/overview#start_building):

  ```
  litert-lm run  \
    /tmp/gemma4_2b/model.litertlm \
    --prompt="What is the capital of France?"
  ```

## Performance Summary

### Gemma-4-E2B

* Model Size: 2.58 GB
* Additional technical details are in the
  [HuggingFace model card](https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm)

  | Platform (Device) | Backend | Prefill (tk/s) | Decode (tk/s) | Time to First Token (seconds) | Peak CPU Memory (MB) |
  | --- | --- | --- | --- | --- | --- |
  | Android (S26 Ultra) | CPU | 557 | 47 | 1.8 | 1733 |
  | GPU | 3808 | 52 | 0.3 | 676 |
  | iOS (iPhone 17 Pro) | CPU | 532 | 25 | 1.9 | 607 |
  | GPU | 2878 | 56 | 0.3 | 1450 |
  | Linux (Arm 2.3 & 2.8 GHz, NVIDIA GeForce RTX 4090) | CPU | 260 | 35 | 4 | 1628 |
  | GPU | 11234 | 143 | 0.1 | 913 |
  | macOS (MacBook Pro M4) | CPU | 901 | 42 | 1.1 | 736 |
  | GPU | 7835 | 160 | 0.1 | 1623 |
  | Windows (Intel LunarLake) | CPU | 435 | 30 | 2.4 | 3505 |
  | GPU | 3751 | 48 | 0.3 | 3540 |
  | IoT (Raspberry Pi 5 16GB) | CPU | 133 | 8 | 7.8 | 1546 |

### Gemma-4-E4B

* Model Size: 3.65 GB
* Additional technical details are in the
  [HuggingFace model card](https://huggingface.co/litert-community/gemma-4-E4B-it-litert-lm)

  | Platform (Device) | Backend | Prefill (tk/s) | Decode (tk/s) | Time to First Token (seconds) | Peak CPU Memory (MB) |
  | --- | --- | --- | --- | --- | --- |
  | Android (S26 Ultra) | CPU | 195 | 18 | 5.3 | 3283 |
  | GPU | 1293 | 22 | 0.8 | 710 |
  | iOS (iPhone 17 Pro) | CPU | 159 | 10 | 6.5 | 961 |
  | GPU | 1189 | 25 | 0.9 | 3380 |
  | Linux (Arm 2.3 & 2.8GHz / RTX 4090) | CPU | 82 | 18 | 12.6 | 3139 |
  | GPU | 7260 | 91 | 0.2 | 1119 |
  | macOS (MacBook Pro M4 Max) | CPU | 277 | 27 | 3.7 | 890 |
  | GPU | 2560 | 101 | 0.4 | 3217 |
  | Windows (Intel LunarLake) | CPU | 173 | 17 | 6.0 | 9372 |
  | GPU | 1202 | 25 | 0.9 | 7147 |
  | IoT (Raspberry Pi 5 16GB) | CPU | 51 | 3 | 20.5 | 3069 |

Send feedback
