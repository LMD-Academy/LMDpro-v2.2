--- source: https://ai.google.dev/api/models ---

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

* [Home](https://ai.google.dev/)
* [Gemini API](https://ai.google.dev/gemini-api)
* [API reference](https://ai.google.dev/api)

Send feedback

# Models



The models endpoint provides a way for you to programmatically list the available models, and retrieve extended metadata such as supported functionality and context window sizing. Read more in [the Models guide](https://ai.google.dev/gemini-api/docs/models/gemini).

## Method: models.get




* [Endpoint](#body.HTTP_TEMPLATE)
* [Path parameters](#body.PATH_PARAMETERS)
* [Request body](#body.request_body)
* [Response body](#body.response_body)
* [Authorization scopes](#body.aspect)
* [Example request](#body.codeSnippets)
  + [Get](#body.codeSnippets.group)

Gets information about a specific `Model` such as its version number, token limits, [parameters](https://ai.google.dev/gemini-api/docs/models/generative-models#model-parameters) and other metadata. Refer to the [Gemini models guide](https://ai.google.dev/gemini-api/docs/models/gemini) for detailed model information.

### Endpoint

get

`https://generativelanguage.googleapis.com/v1beta/{name=models/*}`

### Path parameters

`name` |

`string`

Required. The resource name of the model.

This name should match a model name returned by the `models.list` method.

Format: `models/{model}` It takes the form `models/{model}`.

### Request body

The request body must be empty.

### Example request

### Python

```
from google import genai

client = genai.Client()
model_info = client.models.get(model="gemini-3.6-flash")
print(model_info)

models.py
```

### Go

```
ctx := context.Background()
client, err := genai.NewClient(ctx, &genai.ClientConfig{
	APIKey:  os.Getenv("GEMINI_API_KEY"),
	Backend: genai.BackendGeminiAPI,
})
if err != nil {
	log.Fatal(err)
}

modelInfo, err := client.Models.Get(ctx, "gemini-3.6-flash", nil)
if err != nil {
	log.Fatal(err)
}

fmt.Println(modelInfo)

models.go
```

### Shell

```
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash?key=$GEMINI_API_KEY

models

.sh
```

### Response body

If successful, the response body contains an instance of `Model`.