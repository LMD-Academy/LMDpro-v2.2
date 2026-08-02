--- source: https://ai.google.dev/edge/litert-lm/file_builder ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT-LM](https://developers.google.com/edge/litert-lm)

Send feedback

# LiteRT-LM File Builder Stay organized with collections Save and categorize content based on your preferences.



The `litert-lm-builder` [package](https://pypi.org/project/litert-lm-builder/)
provides Python tools and Command Line Interfaces (CLIs) to **build, inspect,
and unpack LiteRT-LM (`.litertlm`) container files**.

A `.litertlm` file is a single unified container that packages your TFLite
models, tokenizer files, external weights, and associated model metadata so they
can be distributed and loaded by the LiteRT-LM runtime.

**Note:** If you are starting from a raw PyTorch checkpoints and need to convert it
into `.tflite` format first, follow the step-by-step instructions in the
[LiteRT PyTorch GenAI Conversion Guide](/edge/litert/conversion/pytorch/genai).

## Installation

Install the `litert-lm-builder` package from PyPI using `pip` within a virtual
environment:

```
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade litert-lm-builder
```



---

## Build a `.litertlm` file: `litert-lm-builder`

Use the `litert-lm-builder` CLI to package your model components. You can do
this either using a configuration file or by chaining command-line arguments.

### Usage

The following methods can be used to prepare the `.litertlm` file using the
builder.

#### Method 1: Build using TOML Configuration (Recommended)

Specify all components, paths, and metadata in a TOML configuration file, then
run the builder:

```
litert-lm-builder toml --path config.toml output --path model.litertlm
```

**Example `config.toml`:**

```
[system_metadata]
entries = [
  { key = "author", value_type = "String", value = "Authors" }
]

[[section]]
section_type = "LlmMetadata"
data_path = "path/to/llm_metadata.pb"

[[section]]
section_type = "SP_Tokenizer"
data_path = "path/to/sp.model"

[[section]]
section_type = "TFLiteModel"
model_type = "PREFILL_DECODE"
data_path = "path/to/model.tflite"
additional_metadata = [
  { key = "model_version", value_type = "String", value = "1.0.1" }
]
```

#### Method 2: Build using Command Line Arguments

You can build the container dynamically by chaining sub-commands in your
terminal. The order of the sub-commands determines the order of the sections in
the generated file.

```
litert-lm-builder \
  system_metadata --str author "Authors" \
  llm_metadata --path path/to/llm_metadata.pb \
  sp_tokenizer --path path/to/sp.model \
  tflite_model --path path/to/model.tflite --model_type prefill_decode --str_metadata model_version "1.0.1" \
  output --path model.litertlm
```

### CLI Options Reference

The `litert-lm-builder` CLI supports the following sub-commands:

* **`output`** (Required): Specifies the output path.
  + `--path PATH`: Path to save the built `.litertlm` file.
* **`unpack`**: Unpack an existing `.litertlm` file into a directory
  containing its extracted sections and a reconstructed `model.toml`.
  + `--input PATH`: Path to the `.litertlm` file to unpack.
  + `--output PATH`: Output directory where extracted files and
    `model.toml` will be saved.
* **`toml`**: Load configuration from a TOML file.
  + `--path PATH`: Path to the `.toml` file.
* **`system_metadata`**: Add global system metadata.
  + `--str KEY VALUE`: Add a string key-value pair (can be specified
    multiple times).
  + `--int KEY VALUE`: Add an integer key-value pair (can be specified
    multiple times).
  + **Note**: The builder automatically generates and appends a unique
    `uuid` and `creation_timestamp` (in UTC ISO 8601 format) to the system
    metadata. Don't specify these keys manually. These fields are used by
    the runtime to identify the model build uniquely and manage compiled
    cache invalidation.
* **`llm_metadata`**: Add LLM-specific configuration.
  + `--path PATH`: Path to the LLM metadata (text or binary proto).
* **`tflite_model`**: Add a TFLite model.
  + `--path PATH`: Path to the `.tflite` file.
  + `--model_type TYPE`: One of: `embedder`, `prefill_decode` (representing
    both prefill and decode), `prefill`, `decode`.
  + `--backend_constraint BACKEND`: (Optional) Backend constraint (e.g.,
    `gpu`, `cpu`, `npu`).
  + `--prefer_activation_type TYPE`: (Optional) Preferred activation type
    (`fp16`, `fp32`, `fp32_fp16`).
  + `--str_metadata KEY VALUE`: (Optional) String metadata for this model
    section.
* **`sp_tokenizer`**: Add a SentencePiece tokenizer.
  + `--path PATH`: Path to the `.model` file.
  + `--str_metadata KEY VALUE`: (Optional) String metadata.
* **`hf_tokenizer`**: Add a Hugging Face tokenizer.
  + `--path PATH`: Path to the `tokenizer.json` file.
  + `--str_metadata KEY VALUE`: (Optional) String metadata.

---

## Unpack a `.litertlm` file: `litert-lm-builder unpack`

Use the `unpack` sub-command to cleanly extract all binary sections from an
existing `.litertlm` archive and automatically reconstruct a `model.toml`
configuration manifest.

```
litert-lm-builder unpack --input model.litertlm --output ./unpacked_dir
```

This lets you modify extracted components or metadata and immediately re-pack
them using:
`bash
litert-lm-builder toml --path ./unpacked_dir/model.toml output --path modified.litertlm`

---

## Inspect and unpack a `.litertlm` file: `litert-lm-peek`

Use the `litert-lm-peek` CLI to inspect a `.litertlm` container or unpack its
embedded components. Running it displays the full container structure, all
packaged sections, and the automatically generated system metadata (such as
`uuid` and `creation_timestamp`).

### Usage

```
litert-lm-peek --litertlm_file model.litertlm [options]
```

### CLI Options Reference

* **`--litertlm_file PATH`** (Required): The path to the `.litertlm` file to
  inspect.
* **`--dump_files_dir PATH`** (Optional): The directory where all packaged
  files (models, tokenizers, weights, metadata) should be extracted/unpacked.
  If not provided, the tool will only print the metadata and section structure
  to the console without extracting files.






Send feedback