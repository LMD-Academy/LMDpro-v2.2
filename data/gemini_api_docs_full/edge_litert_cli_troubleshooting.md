# Verified Platforms and Troubleshooting Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/cli/troubleshooting))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

This guide covers the verified hardware and operating systems for the LiteRT
CLI, along with solutions for common issues and tips for advanced workflows.

## Verified Platforms

Verified in Python 3.13.

* **Host Machines**:
  + Linux (Ubuntu)
  + macOS (Apple Silicon): `litert compile` not supported yet.
  + Windows: `litert compile` and `litert convert` not supported yet.
* **Android**:
  + CPU, GPU
  + NPU: Qualcomm, MediaTek (soon), Google Tensor (soon)

## Troubleshooting and Tips

* **Virtual Environments**: Always activate your Python virtual environment
  before running `litert` commands to avoid package conflicts.
* **uv Dependency Resolution**: When `uv` fails to resolve dependencies, try
  setting the environment variable first:
  `export UV_INDEX_URL=https://pypi.org/simple`.
* **GPU Fallback**: When a run fails on GPU using `--gpu`, try adding both
  `--cpu --gpu`. The CLI will try CPU first and fall back to GPU if CPU fails.
* **Android Device Detection**: When `litert run` fails on an Android device
  because the device is not detected, try running `adb kill-server` first.
* **PyTorch Model Wrapping**: When converting a traditional PyTorch model, you
  need to write a script to wrap it with the required functions `get_model`
  and `get_args`. Check the script format in
  [resnet18.py](https://github.com/google-ai-edge/LiteRT-CLI/blob/main/litert_cli/test_data/resnet18.py).
* **LLM Conversion**: LLM conversion supports Hugging Face models with type
  `AutoModelForCausalLM` and the Gemma family.
* **Resource Requirements**: For large models like LLMs, `litert convert`
  requires significant memory and disk space, and can take multiple minutes.
  Please ensure you have enough resources and be patient.
* **Clang Requirements for Compilation**: `litert compile` only supports Linux
  hosts and requires Clang version `18.x.x` or later. Try:
  `sudo apt install clang libc++-dev libc++abi-dev`.
* **GCP Benchmarking Prerequisites**: When benchmarking using `--gcp`, you
  must:
  1. Join the EAP program of the
     [Google AI Edge Portal](https://ai.google.dev/edge/ai-edge-portal).
  2. Log in to GCP using `gcloud auth login`.
  3. Set your GCP project using `--gcp=<Your-GCP-Project>`.
* **Visualizer Issues**: When `litert visualize` fails to launch Model
  Explorer, try running `litert visualize --stop-all` first.
* **Verbose Logging**: Exporting `LITERT_VERBOSE=1` enables verbose logging.
* **Cleaning Caches**: `litert clean` cleans all local caches (model files and
  binaries), which frees disk space and helps resolve complicated issues like
  NPU library version mismatches.

## Quick Start Demos

Check comprehensive usage examples under the
[examples/](https://github.com/google-ai-edge/LiteRT-CLI/tree/main/examples)
directory of the LiteRT-CLI repository, which contains per-command demos and
model-specific demos.

```
# Run all command demos
./examples/run_commands.sh

# Run specific command demos
./examples/run_commands.sh download,benchmark

# Run all model demos
./examples/run_models.sh

# Run a specific model demo
./examples/run_models.sh efficientnet
```

## Use in Coding Agents

Add the LiteRT CLI skill `SKILL.md` into your coding agent (like Google
Antigravity) and try prompts such as:

* *Download LiteRT model `litert-community/efficientnet_b1` and run it on CPU*
* *Benchmark LiteRT model `litert-community/efficientnet_b1` on my Android
  GPU*
* *Compile LiteRT model `litert-community/efficientnet_b1` for NPU target
  `sm8750`*
* *Visualize LiteRT model `litert-community/efficientnet_b1`*

Send feedback
