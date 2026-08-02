--- source: https://ai.google.dev/edge/litert-lm/cli/openai_server ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT-LM](https://developers.google.com/edge/litert-lm)

Send feedback

# OpenAI-Compatible Server Stay organized with collections Save and categorize content based on your preferences.



LiteRT-LM CLI can start a local HTTP server that is compatible with the
OpenAI API. This lets you use LiteRT-LM as a drop-in replacement for OpenAI
in your existing applications and workflows.

## Import Models

To serve a model, it must be present in your local registry. If you haven't
imported a model yet, you can import the Gemma 4 12B model with the following
command:

### Linux/macOS

```
litert-lm import \
  --from-huggingface-repo=litert-community/gemma-4-12B-it-litert-lm \
  gemma-4-12B-it.litertlm \
  gemma4-12b
```

### Windows

```
litert-lm import `
  --from-huggingface-repo=litert-community/gemma-4-12B-it-litert-lm `
  gemma-4-12B-it.litertlm `
  gemma4-12b
```

For more information on importing and managing models, see the
[Model Management](https://developers.google.com/edge/litert-lm/cli/model_management) guide.

## Start the Server

Use the `serve` command to start the server. By default, it starts an
OpenAI-compatible server on port `9379`.

The server dynamically loads and serves any models in your local registry.

```
litert-lm serve
```

### Configuration Options

You can customize the server using the following options:

* `--host`: The host to listen on (default: `0.0.0.0`).
* `--port`: The port to listen on (default: `9379`).
* `--verbose`: Enable verbose logging.

Example with custom host and port:

```
litert-lm serve --host 127.0.0.1 --port 8080
```

## Supported Endpoints

The server emulates the following OpenAI API endpoints:

* **List Models**: `GET /v1/models`
  Lists the models that are available to the server.
* **Chat Completions**: `POST /v1/chat/completions`
  Generates text completions for a given chat conversation. Supports
  streaming responses.

## Usage Example

Once the server is running, you can interact with it by sending HTTP requests.

### Sending HTTP Requests

### Linux/macOS

```
curl http://localhost:9379/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemma4-12b",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'
```

### Windows

```
Invoke-RestMethod -Uri "http://localhost:9379/v1/chat/completions" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"model": "gemma4-12b", "messages": [{"role": "user", "content": "Hello!"}]}'
```






Send feedback