# Counting tokens

[//]: # (source: [ai.google.dev](https://ai.google.dev/api/tokens))

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

For a detailed guide on counting tokens using the Gemini API, including how images, audio and video are counted, see the [Token counting guide](https://ai.google.dev/gemini-api/docs/tokens) and accompanying [Cookbook recipe](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Counting_Tokens.ipynb).

## Method: models.countTokens

* [Endpoint](#body.HTTP_TEMPLATE)
* [Path parameters](#body.PATH_PARAMETERS)
* [Request body](#body.request_body)
  + [JSON representation](#body.request_body.SCHEMA_REPRESENTATION)
* [Response body](#body.response_body)
  + [JSON representation](#body.CountTokensResponse.SCHEMA_REPRESENTATION)
* [Authorization scopes](#body.aspect)
* [Example request](#body.codeSnippets)
  + [Text](#body.codeSnippets.group)
  + [Chat](#body.codeSnippets.group_1)
  + [Inline media](#body.codeSnippets.group_2)
  + [Video](#body.codeSnippets.group_3)
  + [PDF](#body.codeSnippets.group_4)
  + [Cache](#body.codeSnippets.group_5)
  + [System Instruction](#body.codeSnippets.group_6)
  + [Tools](#body.codeSnippets.group_7)

Runs a model's tokenizer on input `Content` and returns the token count. Refer to the [tokens guide](https://ai.google.dev/gemini-api/docs/tokens) to learn more about tokens.

### Endpoint

post

`https://generativelanguage.googleapis.com/v1beta/{model=models/*}:countTokens`

### Path parameters

`model` |

`string`

Required. The model's resource name. This serves as an ID for the Model to use.

This name should match a model name returned by the `models.list` method.

Format: `models/{model}` It takes the form `models/{model}`.

### Request body

The request body contains data with the following structure:

| Fields | |
| --- | --- |

`contents[]` |

`object (Content)`

Optional. The input given to the model as a prompt. This field is ignored when `generateContentRequest` is set.

`generateContentRequest` |

`object (GenerateContentRequest)`

Optional. The overall input given to the `Model`. This includes the prompt as well as other model steering information like [system instructions](https://ai.google.dev/gemini-api/docs/system-instructions), and/or function declarations for [function calling](https://ai.google.dev/gemini-api/docs/function-calling). `Model`s/`Content`s and `generateContentRequest`s are mutually exclusive. You can either send `Model` + `Content`s or a `generateContentRequest`, but never both.

### Example request

### Text

### Python

```
from google import genai

client = genai.Client()
prompt = "The quick brown fox jumps over the lazy dog."

# Count tokens using the new client method.
total_tokens = client.models.count_tokens(
    model="gemini-3.6-flash", contents=prompt
)
print("total_tokens: ", total_tokens)
# ( e.g., total_tokens: 10 )

response = client.models.generate_content(
    model="gemini-3.6-flash", contents=prompt
)

# The usage_metadata provides detailed token counts.
print(response.usage_metadata)
# ( e.g., prompt_token_count: 11, candidates_token_count: 73, total_token_count: 84 )

count_tokens.py
```

### Node.js

```
// Make sure to include the following import:
// import {GoogleGenAI} from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const prompt = "The quick brown fox jumps over the lazy dog.";
const countTokensResponse = await ai.models.countTokens({
  model: "gemini-3.6-flash",
  contents: prompt,
});
console.log(countTokensResponse.totalTokens);

const generateResponse = await ai.models.generateContent({
  model: "gemini-3.6-flash",
  contents: prompt,
});
console.log(generateResponse.usageMetadata);

count_tokens.js
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
prompt := "The quick brown fox jumps over the lazy dog."

// Convert prompt to a slice of *genai.Content using the helper.
contents := []*genai.Content{
	genai.NewContentFromText(prompt, genai.RoleUser),
}
countResp, err := client.Models.CountTokens(ctx, "gemini-3.6-flash", contents, nil)
if err != nil {
	return err
}
fmt.Println("total_tokens:", countResp.TotalTokens)

response, err := client.Models.GenerateContent(ctx, "gemini-3.6-flash", contents, nil)
if err != nil {
	log.Fatal(err)
}
usageMetadata, err := json.MarshalIndent(response.UsageMetadata, "", "  ")
if err != nil {
	log.Fatal(err)
}
fmt.Println(string(usageMetadata))

count_tokens.go
```

### Shell

```
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:countTokens?key=$GEMINI_API_KEY \
    -H 'Content-Type: application/json' \
    -X POST \
    -d '{
      "contents": [{
        "parts":[{
          "text": "The quick brown fox jumps over the lazy dog."
          }],
        }],
      }'

count_tokens.sh
```
