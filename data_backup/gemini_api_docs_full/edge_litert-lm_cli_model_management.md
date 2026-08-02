--- source: https://ai.google.dev/edge/litert-lm/cli/model_management ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT-LM](https://developers.google.com/edge/litert-lm)

Send feedback

# Model Management Stay organized with collections Save and categorize content based on your preferences.



Manage your local LiteRT-LM models using the CLI.

LiteRT-LM stores imported models in a local registry. Once imported, you
can refer to these models by their **Model ID** in other commands (like
`run` or `serve`).

## List Models

To view all imported models in your local registry:

```
litert-lm list
```

This will output a table showing the **ID**, **SIZE**, and **MODIFIED**
timestamp for each model.

```
ID              SIZE            MODIFIED
gemma3-1b       557.3 MB        2026-03-05 17:00:53
gemma4-e2b      2.4 GB          2026-04-02 10:44:33
gemma4-e4b      3.4 GB          2026-04-02 10:45:10
```

## Import a Model

You can import `.litertlm` models into your local registry from a local path
or directly from the Hugging Face Hub.

The basic syntax is:
`bash
litert-lm import SOURCE_PATH [MODEL_ID]`
If `MODEL_ID` is omitted, the filename of the source model will be used
as the default ID.

### Import from a Local Path

To import a model file located on your machine:

```
litert-lm import gemma-4-E2B-it.litertlm gemma4-e2b
```

### Import from Hugging Face

To download and import a model directly from a Hugging Face repository:

### Linux/MacOS

```
litert-lm import \
  --from-huggingface-repo litert-community/gemma-4-E2B-it-litert-lm \
  gemma-4-E2B-it.litertlm \
  gemma4-e2b
```

### Windows

```
litert-lm import `
  --from-huggingface-repo litert-community/gemma-4-E2B-it-litert-lm `
  gemma-4-E2B-it.litertlm `
  gemma4-e2b
```

*Note: If the repository is private, you can specify your Hugging Face
token using the `--huggingface-token` option.*

### Run the Imported Model

After importing, you can use the model ID to run the model.

```
litert-lm run gemma4-e2b
```

## Rename a Model

To rename an existing model in your local registry:

```
litert-lm rename old-model-id new-model-id
```

This will safely move the model files to the new identifier. The command
will fail if the new ID is already in use.

## Delete a Model

To delete a model and free up disk space:

```
litert-lm delete my-model
```

This permanently removes the model files from your local registry.






Send feedback