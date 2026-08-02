# LiteRT CLI Common Commands Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/cli/commands))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

This guide covers the most common commands and workflows available in the LiteRT
CLI. You can always run `litert --help` or `litert <command> --help` for direct
terminal assistance.

## 1. Download a model from Hugging Face Hub

```
# Download only .tflite files
litert download litert-community/MobileNet-v3-large \
  --file "*.tflite" \
  --output mobilenet

# Download full repository
litert download litert-community/MobileNet-v3-large \
  --output mobilenet_full

# Download models using Hugging Face ID
litert download litert-community/MobileNet-v3-large

# Download models with custom model reference
litert download litert-community/MobileNet-v3-large --model-ref my_model_ref
```

## 2. Convert a PyTorch model into a LiteRT model

```
# Automated Hugging Face conversion
litert convert Qwen/Qwen1.5-0.5B-Chat --output /tmp/qwen

# Automated Hugging Face conversion with INT4 weight-only quantization
litert convert Qwen/Qwen1.5-0.5B-Chat \
  --quantize-recipe weight_only_wi4_afp32 \
  --output /tmp/qwen_w4

# Generic script injection with INT8 dynamic quantization
litert convert my_model.py \
  --quantize-recipe dynamic_wi8_afp32 \
  --output /tmp/mymodel
```

## 3. Quantize a LiteRT model

```
# Dynamic INT8 quantization (default)
litert quantize model.tflite \
  --recipe dynamic_wi8_afp32 \
  --output dynamic.tflite

# Weight-only quantization
litert quantize model.tflite \
  --recipe weight_only_wi8_afp32 \
  --output weight_only.tflite

# Static W8A8 quantization (with calibration data)
litert quantize model.tflite \
  --recipe static_wi8_ai8 \
  --calibration-data calib_data.py \
  --output static.tflite

# Custom recipe
litert quantize model.tflite \
  --custom-recipe quantize_recipe.json \
  --output custom_quant.tflite
```

## 4. A.O.T. Compile a LiteRT model for NPU

**Note:** Supported on Linux hosts and Qualcomm NPUs. Additional NPU support is
coming soon.

```
# Basic compilation for a specific Qualcomm NPU (e.g., sm8750)
litert compile model.tflite --target sm8750

# Compile for multiple targets and export an AI Pack for Android
litert compile model.tflite \
  --target sm8750 \
  --target mt6989 \
  --export-aipack my_npu_models
```

## 5. Run a LiteRT model on desktop or Android

```
# Run locally on desktop (CPU)
litert run model.tflite --desktop --cpu
litert run my_model_ref --desktop --cpu

# Run with GPU acceleration and CPU fallback
litert run model.tflite --gpu --cpu
litert run model.tflite --accelerator gpu,cpu

# Run on a connected Android device
litert run model.tflite --android

# Run on a connected Android device with NPU acceleration and CPU fallback
litert run model.tflite --android --npu --cpu
litert run model.tflite --android --accelerator npu,cpu

# Run on a connected Android device with an NPU AOT-compiled model
litert run model_sm8450.tflite --android --npu

# Run multiple iterations and print output tensors
litert run model.tflite \
  --iterations 5 \
  --print-tensors

# Run with custom input formats (image, raw binary, numpy array)
litert run model.tflite \
  --input "image.png" \
  --print-tensors
```

## 6. Benchmark a LiteRT model

```
# Benchmark on Android (CPU)
litert benchmark my_model_ref --android --cpu
litert benchmark model.tflite --android --cpu

# Benchmark on Android NPU (JIT mode)
litert benchmark model.tflite --android --npu

# Benchmark AOT compiled model on Android NPU
litert benchmark model_sm8450.tflite --android --npu

# Benchmark on Android GPU
litert benchmark model.tflite --android --gpu

# Benchmark on macOS (CPU)
litert benchmark my_model_ref --desktop --cpu

# Benchmark on Google AI Edge Portal in Google Cloud
litert benchmark model.tflite \
  --gcp \
  --device "pixel 7" \
  --gcp-project "your-gcp-project-id" \
  --gcp-bucket "your-gcp-bucket"

litert benchmark model.tflite \
  --gcp \
  --devices "pixel 7, sm-s931u1" \
  --gpu
```

## 7. Run and benchmark generative LLMs

The `litert lm` command utilizes `litert-lm` under the hood. You can find
detailed instructions in the [LiteRT-LM CLI guide](/edge/litert-lm/cli).

```
# Run a generative LLM from Hugging Face
litert lm run \
  --from-huggingface-repo=litert-community/gemma-4-E2B-it-litert-lm \
  gemma-4-E2B-it.litertlm \
  --prompt="What is the capital of France?"

# Load from a local LLM model file
litert lm run ./my_model.litertlm

# Example with a custom prompt
litert lm run ./my_model.litertlm --prompt "Hello, how are you?"

# Benchmark a generative LLM
litert lm benchmark ./my_model.litertlm
```

## 8. Visualize a model's architecture

```
# Open in Model Explorer
litert visualize model.tflite

# Clean up and stop visualizer background servers
litert visualize --stop-all
```

## 9. Import a local model

```
# Import a local file into the centralized cache
litert import my_model.tflite --model-ref my_model

# Import a directory and associate with a Hugging Face ID
litert import ./my_model_dir \
  --model-ref my_model \
  --hf-id my_org_name/my_model
```

## 10. List managed models

```
# List all managed models
litert list

# Show detailed contents of a specific model
litert list my_model
```

## 11. Delete a managed model

```
# Delete a model from cache
litert delete my_model
```

## 12. Clean up all caches

```
# Clean up local cache (model files and binaries)
litert clean
```

Send feedback
