# Gemini Webhooks API

[//]: # (source: [ai.google.dev](https://ai.google.dev/api/webhooks))

The [Interactions API](/gemini-api/docs/interactions-overview) is now generally available. We recommend using this API for access to all the latest features and models.

Webhooks allow the Gemini API to push real-time notifications to your server when asynchronous or Long-Running Operations (LROs) complete. This replaces the need to poll the API for status updates, reducing latency and overhead.

[View as markdown](/static/api/interactions.md.txt)
[View the OpenAPI Spec](/static/api/interactions.openapi.json)

This API is in Beta. Endpoints are under `/v1beta/`.

## CreateWebhook

post

https://generativelanguage.googleapis.com/v1beta/webhooks

Creates a new Webhook.

* [Request body](#CreateWebhook.request_body)
* [Response](#CreateWebhook.response)

### Request body

The request body contains data with the following structure:

name
string
 (optional)

Optional. The user-provided name of the webhook.

subscribed\_events
array (enum (string))
 (required)

Required. The events that the webhook is subscribed to.
Available events:
- batch.succeeded
- batch.expired
- batch.failed
- interaction.requires\_action
- interaction.completed
- interaction.failed
- video.generated

Possible
values:

* `batch.succeeded`

  Batch processing finished successfully.
* `batch.expired`

  Batch has not been processed within the 48h timeframe.
* `batch.failed`

  Batch job failed.
* `interaction.requires_action`

  Interaction requires action (e.g., function calling).
* `interaction.completed`

  Interaction completed successfully.
* `interaction.failed`

  Interaction failed.
* `video.generated`

  Video generation completed.

uri
string
 (required)

Required. The URI to which webhook events will be sent.

### Response

If successful, the response body contains data with the following structure:

create\_time
string
 (optional)

Output only. The timestamp when the webhook was created.

id
string
 (optional)

Output only. The ID of the webhook.

name
string
 (optional)

Optional. The user-provided name of the webhook.

new\_signing\_secret
string
 (optional)

Output only. The new signing secret for the webhook. Only populated on create.

signing\_secrets
SigningSecret
 (optional) 

Output only. The signing secrets associated with this webhook.

Represents a signing secret used to verify webhook payloads.

#### Fields

expire\_time
string
 (optional)

Output only. The expiration date of the signing secret.

truncated\_secret
string
 (optional)

Output only. The truncated version of the signing secret.

state
enum (string)
 (optional)

Output only. The state of the webhook.

Possible
values:

* `enabled`

  The webhook is enabled.
* `disabled`

  The webhook is disabled by the user.
* `disabled_due_to_failed_deliveries`

  The webhook is disabled due to failed deliveries.

subscribed\_events
array (enum (string))
 (optional)

Required. The events that the webhook is subscribed to.
Available events:
- batch.succeeded
- batch.expired
- batch.failed
- interaction.requires\_action
- interaction.completed
- interaction.failed
- video.generated

Possible
values:

* `batch.succeeded`

  Batch processing finished successfully.
* `batch.expired`

  Batch has not been processed within the 48h timeframe.
* `batch.failed`

  Batch job failed.
* `interaction.requires_action`

  Interaction requires action (e.g., function calling).
* `interaction.completed`

  Interaction completed successfully.
* `interaction.failed`

  Interaction failed.
* `video.generated`

  Video generation completed.

update\_time
string
 (optional)

Output only. The timestamp when the webhook was last updated.

uri
string
 (optional)

Required. The URI to which webhook events will be sent.

### Example

#### Example Response

```
{
  "create_time": "string",
  "id": "string",
  "name": "string",
  "new_signing_secret": "string",
  "signing_secrets": [
    {
      "expire_time": "string",
      "truncated_secret": "string"
    }
  ],
  "state": "enabled",
  "subscribed_events": [
    "batch.succeeded"
  ],
  "update_time": "string",
  "uri": "string"
}
```

## PingWebhook

post

https://generativelanguage.googleapis.com/v1beta/webhooks/{id}:ping

Sends a ping event to a Webhook.

* [Path / Query parameters](#PingWebhook.PATH_PARAMETERS)
* [Request body](#PingWebhook.request_body)
* [Response](#PingWebhook.response)

### Path / Query Parameters

id
string
 (required)

Required. The ID of the webhook to ping.
Format: `{webhook\_id}`

### Request body

The request body contains data with the following structure:

### Response

If successful, the response is empty.

### Example

## RotateSigningSecret

post

https://generativelanguage.googleapis.com/v1beta/webhooks/{id}:rotateSigningSecret

Generates a new signing secret for a Webhook.

* [Path / Query parameters](#RotateSigningSecret.PATH_PARAMETERS)
* [Request body](#RotateSigningSecret.request_body)
* [Response](#RotateSigningSecret.response)

### Path / Query Parameters

id
string
 (required)

Required. The ID of the webhook for which to generate a signing secret.
Format: `{webhook\_id}`

### Request body

The request body contains data with the following structure:

revocation\_behavior
enum (string)
 (optional)

Optional. The revocation behavior for previous signing secrets.

Possible
values:

* `revoke_previous_secrets_after_h24`

  Generate a new signing secret and revoke all previous secrets after 24
  hours. Default and safest option for migrations.
* `revoke_previous_secrets_immediately`

  Revoke all previous secrets immediately. Use with caution as this can
  interrupt ongoing notifications.

### Response

If successful, the response body contains data with the following structure:

secret
string
 (optional)

Output only. The newly generated signing secret.

### Example

#### Example Response

```
{
  "secret": "string"
}
```

## ListWebhooks

get

https://generativelanguage.googleapis.com/v1beta/webhooks

Lists all Webhooks.

* [Path / Query parameters](#ListWebhooks.PATH_PARAMETERS)
* [Response](#ListWebhooks.response)

### Path / Query Parameters

page\_size
integer
 (optional)

Optional. The maximum number of webhooks to return. The service may return fewer than
this value. If unspecified, at most 50 webhooks will be returned.
The maximum value is 1000.

page\_token
string
 (optional)

Optional. A page token, received from a previous `ListWebhooks` call.
Provide this to retrieve the subsequent page.

### Response

If successful, the response body contains data with the following structure:

next\_page\_token
string
 (optional)

A token, which can be sent as `page\_token` to retrieve the next page.
If this field is omitted, there are no subsequent pages.

webhooks
array ([Webhook](#Resource:Webhook))
 (optional)

The webhooks.

### Example

#### Example Response

```
{
  "next_page_token": "string",
  "webhooks": [
    {
      "create_time": "string",
      "id": "string",
      "name": "string",
      "new_signing_secret": "string",
      "signing_secrets": [
        {
          "expire_time": "string",
          "truncated_secret": "string"
        }
      ],
      "state": "enabled",
      "subscribed_events": [
        "batch.succeeded"
      ],
      "update_time": "string",
      "uri": "string"
    }
  ]
}
```

## GetWebhook

get

https://generativelanguage.googleapis.com/v1beta/webhooks/{id}

Gets a specific Webhook.

* [Path / Query parameters](#GetWebhook.PATH_PARAMETERS)
* [Response](#GetWebhook.response)

### Path / Query Parameters

id
string
 (required)

Required. The ID of the webhook to retrieve.

### Response

If successful, the response body contains data with the following structure:

create\_time
string
 (optional)

Output only. The timestamp when the webhook was created.

id
string
 (optional)

Output only. The ID of the webhook.

name
string
 (optional)

Optional. The user-provided name of the webhook.

new\_signing\_secret
string
 (optional)

Output only. The new signing secret for the webhook. Only populated on create.

signing\_secrets
SigningSecret
 (optional) 

Output only. The signing secrets associated with this webhook.

Represents a signing secret used to verify webhook payloads.

#### Fields

expire\_time
string
 (optional)

Output only. The expiration date of the signing secret.

truncated\_secret
string
 (optional)

Output only. The truncated version of the signing secret.

state
enum (string)
 (optional)

Output only. The state of the webhook.

Possible
values:

* `enabled`

  The webhook is enabled.
* `disabled`

  The webhook is disabled by the user.
* `disabled_due_to_failed_deliveries`

  The webhook is disabled due to failed deliveries.

subscribed\_events
array (enum (string))
 (optional)

Required. The events that the webhook is subscribed to.
Available events:
- batch.succeeded
- batch.expired
- batch.failed
- interaction.requires\_action
- interaction.completed
- interaction.failed
- video.generated

Possible
values:

* `batch.succeeded`

  Batch processing finished successfully.
* `batch.expired`

  Batch has not been processed within the 48h timeframe.
* `batch.failed`

  Batch job failed.
* `interaction.requires_action`

  Interaction requires action (e.g., function calling).
* `interaction.completed`

  Interaction completed successfully.
* `interaction.failed`

  Interaction failed.
* `video.generated`

  Video generation completed.

update\_time
string
 (optional)

Output only. The timestamp when the webhook was last updated.

uri
string
 (optional)

Required. The URI to which webhook events will be sent.

### Example

#### Example Response

```
{
  "create_time": "string",
  "id": "string",
  "name": "string",
  "new_signing_secret": "string",
  "signing_secrets": [
    {
      "expire_time": "string",
      "truncated_secret": "string"
    }
  ],
  "state": "enabled",
  "subscribed_events": [
    "batch.succeeded"
  ],
  "update_time": "string",
  "uri": "string"
}
```

## UpdateWebhook

patch

https://generativelanguage.googleapis.com/v1beta/webhooks/{id}

Updates an existing Webhook.

* [Path / Query parameters](#UpdateWebhook.PATH_PARAMETERS)
* [Request body](#UpdateWebhook.request_body)
* [Response](#UpdateWebhook.response)

### Path / Query Parameters

id
string
 (required)

Required. The ID of the webhook to update.

update\_mask
string
 (optional)

Optional. The list of fields to update.

### Request body

The request body contains data with the following structure:

name
string
 (optional)

Optional. The user-provided name of the webhook.

state
enum (string)
 (optional)

Optional. The state of the webhook.

Possible
values:

* `enabled`

  The webhook is enabled.
* `disabled`

  The webhook is disabled by the user.
* `disabled_due_to_failed_deliveries`

  The webhook is disabled due to failed deliveries.

subscribed\_events
array (enum (string))
 (optional)

Optional. The events that the webhook is subscribed to.
Available events:
- batch.succeeded
- batch.expired
- batch.failed
- interaction.requires\_action
- interaction.completed
- interaction.failed
- video.generated

Possible
values:

* `batch.succeeded`

  Batch processing finished successfully.
* `batch.expired`

  Batch has not been processed within the 48h timeframe.
* `batch.failed`

  Batch job failed.
* `interaction.requires_action`

  Interaction requires action (e.g., function calling).
* `interaction.completed`

  Interaction completed successfully.
* `interaction.failed`

  Interaction failed.
* `video.generated`

  Video generation completed.

uri
string
 (optional)

Optional. The URI to which webhook events will be sent.

### Response

If successful, the response body contains data with the following structure:

create\_time
string
 (optional)

Output only. The timestamp when the webhook was created.

id
string
 (optional)

Output only. The ID of the webhook.

name
string
 (optional)

Optional. The user-provided name of the webhook.

new\_signing\_secret
string
 (optional)

Output only. The new signing secret for the webhook. Only populated on create.

signing\_secrets
SigningSecret
 (optional) 

Output only. The signing secrets associated with this webhook.

Represents a signing secret used to verify webhook payloads.

#### Fields

expire\_time
string
 (optional)

Output only. The expiration date of the signing secret.

truncated\_secret
string
 (optional)

Output only. The truncated version of the signing secret.

state
enum (string)
 (optional)

Output only. The state of the webhook.

Possible
values:

* `enabled`

  The webhook is enabled.
* `disabled`

  The webhook is disabled by the user.
* `disabled_due_to_failed_deliveries`

  The webhook is disabled due to failed deliveries.

subscribed\_events
array (enum (string))
 (optional)

Required. The events that the webhook is subscribed to.
Available events:
- batch.succeeded
- batch.expired
- batch.failed
- interaction.requires\_action
- interaction.completed
- interaction.failed
- video.generated

Possible
values:

* `batch.succeeded`

  Batch processing finished successfully.
* `batch.expired`

  Batch has not been processed within the 48h timeframe.
* `batch.failed`

  Batch job failed.
* `interaction.requires_action`

  Interaction requires action (e.g., function calling).
* `interaction.completed`

  Interaction completed successfully.
* `interaction.failed`

  Interaction failed.
* `video.generated`

  Video generation completed.

update\_time
string
 (optional)

Output only. The timestamp when the webhook was last updated.

uri
string
 (optional)

Required. The URI to which webhook events will be sent.

### Example

#### Example Response

```
{
  "create_time": "string",
  "id": "string",
  "name": "string",
  "new_signing_secret": "string",
  "signing_secrets": [
    {
      "expire_time": "string",
      "truncated_secret": "string"
    }
  ],
  "state": "enabled",
  "subscribed_events": [
    "batch.succeeded"
  ],
  "update_time": "string",
  "uri": "string"
}
```

## DeleteWebhook

delete

https://generativelanguage.googleapis.com/v1beta/webhooks/{id}

Deletes a Webhook.

* [Path / Query parameters](#DeleteWebhook.PATH_PARAMETERS)
* [Response](#DeleteWebhook.response)

### Path / Query Parameters

id
string
 (required)

Required. The ID of the webhook to delete.
Format: `{webhook\_id}`

### Response

If successful, the response is empty.

### Example

## Resources

### Webhook

A Webhook resource.

#### Fields

create\_time
string
 (optional)

Output only. The timestamp when the webhook was created.

id
string
 (optional)

Output only. The ID of the webhook.

name
string
 (optional)

Optional. The user-provided name of the webhook.

new\_signing\_secret
string
 (optional)

Output only. The new signing secret for the webhook. Only populated on create.

signing\_secrets
SigningSecret
 (optional) 

Output only. The signing secrets associated with this webhook.

Represents a signing secret used to verify webhook payloads.

#### Fields

expire\_time
string
 (optional)

Output only. The expiration date of the signing secret.

truncated\_secret
string
 (optional)

Output only. The truncated version of the signing secret.

state
enum (string)
 (optional)

Output only. The state of the webhook.

Possible
values:

* `enabled`

  The webhook is enabled.
* `disabled`

  The webhook is disabled by the user.
* `disabled_due_to_failed_deliveries`

  The webhook is disabled due to failed deliveries.

subscribed\_events
array (enum (string))
 (optional)

Required. The events that the webhook is subscribed to.
Available events:
- batch.succeeded
- batch.expired
- batch.failed
- interaction.requires\_action
- interaction.completed
- interaction.failed
- video.generated

Possible
values:

* `batch.succeeded`

  Batch processing finished successfully.
* `batch.expired`

  Batch has not been processed within the 48h timeframe.
* `batch.failed`

  Batch job failed.
* `interaction.requires_action`

  Interaction requires action (e.g., function calling).
* `interaction.completed`

  Interaction completed successfully.
* `interaction.failed`

  Interaction failed.
* `video.generated`

  Video generation completed.

update\_time
string
 (optional)

Output only. The timestamp when the webhook was last updated.

uri
string
 (optional)

Required. The URI to which webhook events will be sent.

## Data Models

### InteractionSseEvent

### Possible Types

Polymorphic discriminator: `event_type`

ErrorEvent

error
Error
 (optional) 

No description provided.

Error message from an interaction.

#### Fields

code
string
 (optional)

A URI that identifies the error type.

message
string
 (optional)

A human-readable error message.

event\_id
string
 (optional)

The event\_id token to be used to resume the interaction stream, from
this event.

event\_type
object
 (required)

No description provided.

Always set to `"error"`.

metadata
StreamMetadata
 (optional) 

Optional metadata accompanying ANY streamed event.

#### Fields

total\_usage
Usage
 (optional) 

No description provided.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

InteractionCompletedEvent

event\_id
string
 (optional)

The event\_id token to be used to resume the interaction stream, from
this event.

event\_type
object
 (required)

No description provided.

Always set to `"interaction.completed"`.

interaction
InteractionSseEventInteraction
 (required) 

Partial completed interaction resource emitted at the end of the stream.

Partial interaction resource emitted by interaction lifecycle SSE events.
Streaming lifecycle payloads may omit fields that are only available on
full non-streaming Interaction responses.

#### Fields

agent
string
 (optional)

The agent to interact with.

created
string
 (optional)

Output only. The time at which the response was created in ISO 8601 format.

id
string
 (optional)

Required. Output only. A unique identifier for the interaction completion.

model
string
 (optional)

The model that will complete your prompt.

object
string
 (optional)

Output only. The resource type.

service\_tier
ServiceTier
 (optional) 

The service tier for the interaction.

#### Possible values

* `flex`

  Flex service tier.
* `standard`

  Standard service tier.
* `priority`

  Priority service tier.

status
enum (string)
 (optional)

Required. Output only. The status of the interaction.

Possible
values:

* `in_progress`

  The interaction is in progress.
* `requires_action`

  The interaction requires action/input from the user.
* `completed`

  The interaction is completed.
* `failed`

  The interaction failed.
* `cancelled`

  The interaction was cancelled.
* `incomplete`

  The interaction is completed, but contains incomplete results (e.g. hitting max\_tokens).

steps
Step
 (optional) 

Output only. The steps that make up the interaction, if included in this event.

A step in the interaction.

#### Possible Types

Polymorphic discriminator: `type`

CodeExecutionCallStep

Code execution call step.

arguments
CodeExecutionCallStepArguments
 (required) 

Required. The arguments to pass to the code execution.

The arguments to pass to the code execution.

#### Fields

code
string
 (optional)

The code to be executed.

language
enum (string)
 (optional)

Programming language of the `code`.

Possible
values:

* `python`

  Python >= 3.10, with numpy and simpy available.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_call"`.

CodeExecutionResultStep

Code execution result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the code execution resulted in an error.

result
string
 (required)

Required. The output of the code execution.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_result"`.

FileSearchCallStep

File Search call step.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_call"`.

FileSearchResultStep

File Search result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_result"`.

FunctionCallStep

A function tool call step.

arguments
object
 (required)

Required. The arguments to pass to the function.

id
string
 (required)

Required. A unique ID for this specific tool call.

name
string
 (required)

Required. The name of the tool to call.

type
object
 (required)

No description provided.

Always set to `"function_call"`.

FunctionResultStep

Result of a function tool call.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the tool call resulted in an error.

name
string
 (optional)

The name of the tool that was called.

result
array (ImageContent or TextContent) or object or string
 (required)

Required. The result of the tool call.

type
object
 (required)

No description provided.

Always set to `"function_result"`.

GoogleMapsCallStep

Google Maps call step.

arguments
GoogleMapsCallStepArguments
 (optional) 

The arguments to pass to the Google Maps tool.

The arguments to pass to the Google Maps tool.

#### Fields

queries
array (string)
 (optional)

The queries to be executed.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_call"`.

GoogleMapsResultStep

Google Maps result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

result
GoogleMapsResultItem
 (required) 

No description provided.

The result of the Google Maps.

#### Fields

places
GoogleMapsResultPlaces
 (optional) 

No description provided.

#### Fields

name
string
 (optional)

No description provided.

place\_id
string
 (optional)

No description provided.

review\_snippets
ReviewSnippet
 (optional) 

No description provided.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

url
string
 (optional)

No description provided.

widget\_context\_token
string
 (optional)

No description provided.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_result"`.

GoogleSearchCallStep

Google Search call step.

arguments
GoogleSearchCallStepArguments
 (required) 

Required. The arguments to pass to Google Search.

The arguments to pass to Google Search.

#### Fields

queries
array (string)
 (optional)

Web search queries for the following-up web search.

id
string
 (required)

Required. A unique ID for this specific tool call.

search\_type
enum (string)
 (optional)

The type of search grounding enabled.

Possible
values:

* `web_search`

  Setting this field enables web search. Only text results are returned.
* `image_search`

  Setting this field enables image search. Image bytes are returned.
* `enterprise_web_search`

  Setting this field enables enterprise web search.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_call"`.

GoogleSearchResultStep

Google Search result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the Google Search resulted in an error.

result
GoogleSearchResultItem
 (required) 

Required. The results of the Google Search.

The result of the Google Search.

#### Fields

search\_suggestions
string
 (optional)

Web content snippet that can be embedded in a web page or an app webview.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_result"`.

McpServerToolCallStep

MCPServer tool call step.

arguments
object
 (required)

Required. The JSON object of arguments for the function.

id
string
 (required)

Required. A unique ID for this specific tool call.

name
string
 (required)

Required. The name of the tool which was called.

server\_name
string
 (required)

Required. The name of the used MCP server.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_call"`.

McpServerToolResultStep

MCPServer tool result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

name
string
 (optional)

Name of the tool which is called for this specific tool call.

result
array (ImageContent or TextContent) or object or string
 (required)

Required. The output from the MCP server call. Can be simple text or rich content.

server\_name
string
 (optional)

The name of the used MCP server.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_result"`.

ModelOutputStep

Output generated by the model.

content
Content
 (optional) 

No description provided.

The content of the response.

#### Possible Types

Polymorphic discriminator: `type`

AudioContent

An audio content block.

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

The audio content.

mime\_type
enum (string)
 (optional)

The mime type of the audio.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

The URI of the audio.

DocumentContent

A document content block.

data
string
 (optional)

The document content.

mime\_type
enum (string)
 (optional)

The mime type of the document.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

The URI of the document.

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

VideoContent

A video content block.

data
string
 (optional)

The video content.

mime\_type
enum (string)
 (optional)

The mime type of the video.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

The URI of the video.

error
Status
 (optional) 

The error result of the operation in case of failure or cancellation.

The `Status` type defines a logical error model that is suitable for
different programming environments, including REST APIs and RPC APIs. It is
used by [gRPC](https://github.com/grpc). Each `Status` message contains
three pieces of data: error code, error message, and error details.
You can find out more about this error model and how to work with it in the
[API Design Guide](https://cloud.google.com/apis/design/errors).

#### Fields

code
integer
 (optional)

The status code, which should be an enum value of google.rpc.Code.

details
array (object)
 (optional)

A list of messages that carry the error details. There is a common set of
message types for APIs to use.

message
string
 (optional)

A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.

type
object
 (required)

No description provided.

Always set to `"model_output"`.

ThoughtStep

A thought step.

signature
string
 (optional)

A signature hash for backend validation.

summary
ThoughtSummaryContent
 (optional) 

A summary of the thought.

#### Possible Types

Polymorphic discriminator: `type`

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

type
object
 (required)

No description provided.

Always set to `"thought"`.

UrlContextCallStep

URL context call step.

arguments
UrlContextCallArguments
 (required) 

Required. The arguments to pass to the URL context.

The arguments to pass to the URL context.

#### Fields

urls
array (string)
 (optional)

The URLs to fetch.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_call"`.

UrlContextResultStep

URL context result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the URL context resulted in an error.

result
UrlContextResult
 (required) 

Required. The results of the URL context.

The result of the URL context.

#### Fields

status
enum (string)
 (optional)

The status of the URL retrieval.

Possible
values:

* `success`

  Url retrieval is successful.
* `error`

  Url retrieval is failed due to error.
* `paywall`

  Url retrieval is failed because the content is behind paywall.
* `unsafe`

  Url retrieval is failed because the content is unsafe.

url
string
 (optional)

The URL that was fetched.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_result"`.

UserInputStep

Input provided by the user.

content
Content
 (optional) 

No description provided.

The content of the response.

#### Possible Types

Polymorphic discriminator: `type`

AudioContent

An audio content block.

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

The audio content.

mime\_type
enum (string)
 (optional)

The mime type of the audio.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

The URI of the audio.

DocumentContent

A document content block.

data
string
 (optional)

The document content.

mime\_type
enum (string)
 (optional)

The mime type of the document.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

The URI of the document.

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

VideoContent

A video content block.

data
string
 (optional)

The video content.

mime\_type
enum (string)
 (optional)

The mime type of the video.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

The URI of the video.

type
object
 (required)

No description provided.

Always set to `"user_input"`.

updated
string
 (optional)

Output only. The time at which the response was last updated in ISO 8601 format.

usage
Usage
 (optional) 

Output only. Statistics on the interaction request's token usage.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

metadata
StreamMetadata
 (optional) 

Optional metadata accompanying ANY streamed event.

#### Fields

total\_usage
Usage
 (optional) 

No description provided.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

InteractionCreatedEvent

event\_id
string
 (optional)

The event\_id token to be used to resume the interaction stream, from
this event.

event\_type
object
 (required)

No description provided.

Always set to `"interaction.created"`.

interaction
InteractionSseEventInteraction
 (required) 

Partial interaction resource emitted when the stream is created.

Partial interaction resource emitted by interaction lifecycle SSE events.
Streaming lifecycle payloads may omit fields that are only available on
full non-streaming Interaction responses.

#### Fields

agent
string
 (optional)

The agent to interact with.

created
string
 (optional)

Output only. The time at which the response was created in ISO 8601 format.

id
string
 (optional)

Required. Output only. A unique identifier for the interaction completion.

model
string
 (optional)

The model that will complete your prompt.

object
string
 (optional)

Output only. The resource type.

service\_tier
ServiceTier
 (optional) 

The service tier for the interaction.

#### Possible values

* `flex`

  Flex service tier.
* `standard`

  Standard service tier.
* `priority`

  Priority service tier.

status
enum (string)
 (optional)

Required. Output only. The status of the interaction.

Possible
values:

* `in_progress`

  The interaction is in progress.
* `requires_action`

  The interaction requires action/input from the user.
* `completed`

  The interaction is completed.
* `failed`

  The interaction failed.
* `cancelled`

  The interaction was cancelled.
* `incomplete`

  The interaction is completed, but contains incomplete results (e.g. hitting max\_tokens).

steps
Step
 (optional) 

Output only. The steps that make up the interaction, if included in this event.

A step in the interaction.

#### Possible Types

Polymorphic discriminator: `type`

CodeExecutionCallStep

Code execution call step.

arguments
CodeExecutionCallStepArguments
 (required) 

Required. The arguments to pass to the code execution.

The arguments to pass to the code execution.

#### Fields

code
string
 (optional)

The code to be executed.

language
enum (string)
 (optional)

Programming language of the `code`.

Possible
values:

* `python`

  Python >= 3.10, with numpy and simpy available.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_call"`.

CodeExecutionResultStep

Code execution result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the code execution resulted in an error.

result
string
 (required)

Required. The output of the code execution.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_result"`.

FileSearchCallStep

File Search call step.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_call"`.

FileSearchResultStep

File Search result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_result"`.

FunctionCallStep

A function tool call step.

arguments
object
 (required)

Required. The arguments to pass to the function.

id
string
 (required)

Required. A unique ID for this specific tool call.

name
string
 (required)

Required. The name of the tool to call.

type
object
 (required)

No description provided.

Always set to `"function_call"`.

FunctionResultStep

Result of a function tool call.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the tool call resulted in an error.

name
string
 (optional)

The name of the tool that was called.

result
array (ImageContent or TextContent) or object or string
 (required)

Required. The result of the tool call.

type
object
 (required)

No description provided.

Always set to `"function_result"`.

GoogleMapsCallStep

Google Maps call step.

arguments
GoogleMapsCallStepArguments
 (optional) 

The arguments to pass to the Google Maps tool.

The arguments to pass to the Google Maps tool.

#### Fields

queries
array (string)
 (optional)

The queries to be executed.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_call"`.

GoogleMapsResultStep

Google Maps result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

result
GoogleMapsResultItem
 (required) 

No description provided.

The result of the Google Maps.

#### Fields

places
GoogleMapsResultPlaces
 (optional) 

No description provided.

#### Fields

name
string
 (optional)

No description provided.

place\_id
string
 (optional)

No description provided.

review\_snippets
ReviewSnippet
 (optional) 

No description provided.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

url
string
 (optional)

No description provided.

widget\_context\_token
string
 (optional)

No description provided.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_result"`.

GoogleSearchCallStep

Google Search call step.

arguments
GoogleSearchCallStepArguments
 (required) 

Required. The arguments to pass to Google Search.

The arguments to pass to Google Search.

#### Fields

queries
array (string)
 (optional)

Web search queries for the following-up web search.

id
string
 (required)

Required. A unique ID for this specific tool call.

search\_type
enum (string)
 (optional)

The type of search grounding enabled.

Possible
values:

* `web_search`

  Setting this field enables web search. Only text results are returned.
* `image_search`

  Setting this field enables image search. Image bytes are returned.
* `enterprise_web_search`

  Setting this field enables enterprise web search.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_call"`.

GoogleSearchResultStep

Google Search result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the Google Search resulted in an error.

result
GoogleSearchResultItem
 (required) 

Required. The results of the Google Search.

The result of the Google Search.

#### Fields

search\_suggestions
string
 (optional)

Web content snippet that can be embedded in a web page or an app webview.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_result"`.

McpServerToolCallStep

MCPServer tool call step.

arguments
object
 (required)

Required. The JSON object of arguments for the function.

id
string
 (required)

Required. A unique ID for this specific tool call.

name
string
 (required)

Required. The name of the tool which was called.

server\_name
string
 (required)

Required. The name of the used MCP server.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_call"`.

McpServerToolResultStep

MCPServer tool result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

name
string
 (optional)

Name of the tool which is called for this specific tool call.

result
array (ImageContent or TextContent) or object or string
 (required)

Required. The output from the MCP server call. Can be simple text or rich content.

server\_name
string
 (optional)

The name of the used MCP server.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_result"`.

ModelOutputStep

Output generated by the model.

content
Content
 (optional) 

No description provided.

The content of the response.

#### Possible Types

Polymorphic discriminator: `type`

AudioContent

An audio content block.

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

The audio content.

mime\_type
enum (string)
 (optional)

The mime type of the audio.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

The URI of the audio.

DocumentContent

A document content block.

data
string
 (optional)

The document content.

mime\_type
enum (string)
 (optional)

The mime type of the document.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

The URI of the document.

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

VideoContent

A video content block.

data
string
 (optional)

The video content.

mime\_type
enum (string)
 (optional)

The mime type of the video.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

The URI of the video.

error
Status
 (optional) 

The error result of the operation in case of failure or cancellation.

The `Status` type defines a logical error model that is suitable for
different programming environments, including REST APIs and RPC APIs. It is
used by [gRPC](https://github.com/grpc). Each `Status` message contains
three pieces of data: error code, error message, and error details.
You can find out more about this error model and how to work with it in the
[API Design Guide](https://cloud.google.com/apis/design/errors).

#### Fields

code
integer
 (optional)

The status code, which should be an enum value of google.rpc.Code.

details
array (object)
 (optional)

A list of messages that carry the error details. There is a common set of
message types for APIs to use.

message
string
 (optional)

A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.

type
object
 (required)

No description provided.

Always set to `"model_output"`.

ThoughtStep

A thought step.

signature
string
 (optional)

A signature hash for backend validation.

summary
ThoughtSummaryContent
 (optional) 

A summary of the thought.

#### Possible Types

Polymorphic discriminator: `type`

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

type
object
 (required)

No description provided.

Always set to `"thought"`.

UrlContextCallStep

URL context call step.

arguments
UrlContextCallArguments
 (required) 

Required. The arguments to pass to the URL context.

The arguments to pass to the URL context.

#### Fields

urls
array (string)
 (optional)

The URLs to fetch.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_call"`.

UrlContextResultStep

URL context result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the URL context resulted in an error.

result
UrlContextResult
 (required) 

Required. The results of the URL context.

The result of the URL context.

#### Fields

status
enum (string)
 (optional)

The status of the URL retrieval.

Possible
values:

* `success`

  Url retrieval is successful.
* `error`

  Url retrieval is failed due to error.
* `paywall`

  Url retrieval is failed because the content is behind paywall.
* `unsafe`

  Url retrieval is failed because the content is unsafe.

url
string
 (optional)

The URL that was fetched.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_result"`.

UserInputStep

Input provided by the user.

content
Content
 (optional) 

No description provided.

The content of the response.

#### Possible Types

Polymorphic discriminator: `type`

AudioContent

An audio content block.

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

The audio content.

mime\_type
enum (string)
 (optional)

The mime type of the audio.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

The URI of the audio.

DocumentContent

A document content block.

data
string
 (optional)

The document content.

mime\_type
enum (string)
 (optional)

The mime type of the document.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

The URI of the document.

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

VideoContent

A video content block.

data
string
 (optional)

The video content.

mime\_type
enum (string)
 (optional)

The mime type of the video.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

The URI of the video.

type
object
 (required)

No description provided.

Always set to `"user_input"`.

updated
string
 (optional)

Output only. The time at which the response was last updated in ISO 8601 format.

usage
Usage
 (optional) 

Output only. Statistics on the interaction request's token usage.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

metadata
StreamMetadata
 (optional) 

Optional metadata accompanying ANY streamed event.

#### Fields

total\_usage
Usage
 (optional) 

No description provided.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

InteractionStatusUpdate

event\_id
string
 (optional)

The event\_id token to be used to resume the interaction stream, from
this event.

event\_type
object
 (required)

No description provided.

Always set to `"interaction.status_update"`.

interaction\_id
string
 (required)

No description provided.

metadata
StreamMetadata
 (optional) 

Optional metadata accompanying ANY streamed event.

#### Fields

total\_usage
Usage
 (optional) 

No description provided.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

status
enum (string)
 (required)

No description provided.

Possible
values:

* `in_progress`

  The interaction is in progress.
* `requires_action`

  The interaction requires action/input from the user.
* `completed`

  The interaction is completed.
* `failed`

  The interaction failed.
* `cancelled`

  The interaction was cancelled.
* `incomplete`

  The interaction is completed, but contains incomplete results (e.g.
  hitting max\_tokens).
* `budget_exceeded`

  The interaction was halted because the token budget was exceeded.
* `queued`

  The interaction is queued, waiting for processing (e.g. waiting for
  off-peak capacity).

StepDelta

delta
StepDeltaData
 (required) 

No description provided.

#### Possible Types

Polymorphic discriminator: `type`

ArgumentsDelta

arguments
string
 (optional)

No description provided.

type
object
 (required)

No description provided.

Always set to `"arguments_delta"`.

AudioDelta

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

No description provided.

mime\_type
enum (string)
 (optional)

No description provided.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

No description provided.

CodeExecutionCallDelta

arguments
CodeExecutionCallArguments
 (required) 

No description provided.

The arguments to pass to the code execution.

#### Fields

code
string
 (optional)

The code to be executed.

language
enum (string)
 (optional)

Programming language of the `code`.

Possible
values:

* `python`

  Python >= 3.10, with numpy and simpy available.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_call"`.

CodeExecutionResultDelta

is\_error
boolean
 (optional)

No description provided.

result
string
 (required)

No description provided.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_result"`.

DocumentDelta

data
string
 (optional)

No description provided.

mime\_type
enum (string)
 (optional)

No description provided.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

No description provided.

FileSearchCallDelta

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_call"`.

FileSearchResultDelta

result
FileSearchResult
 (required) 

No description provided.

The result of the File Search.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_result"`.

FunctionResultDelta

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

No description provided.

name
string
 (optional)

No description provided.

result
array (ImageContent or TextContent) or object or string
 (required)

No description provided.

type
object
 (required)

No description provided.

Always set to `"function_result"`.

GoogleMapsCallDelta

arguments
GoogleMapsCallArguments
 (optional) 

The arguments to pass to the Google Maps tool.

The arguments to pass to the Google Maps tool.

#### Fields

queries
array (string)
 (optional)

The queries to be executed.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_call"`.

GoogleMapsResultDelta

result
GoogleMapsResult
 (optional) 

The results of the Google Maps.

The result of the Google Maps.

#### Fields

places
Places
 (optional) 

The places that were found.

#### Fields

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

url
string
 (optional)

URI reference of the place.

widget\_context\_token
string
 (optional)

Resource name of the Google Maps widget context token.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_result"`.

GoogleSearchCallDelta

arguments
GoogleSearchCallArguments
 (required) 

No description provided.

The arguments to pass to Google Search.

#### Fields

queries
array (string)
 (optional)

Web search queries for the following-up web search.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_call"`.

GoogleSearchResultDelta

is\_error
boolean
 (optional)

No description provided.

result
GoogleSearchResult
 (required) 

No description provided.

The result of the Google Search.

#### Fields

search\_suggestions
string
 (optional)

Web content snippet that can be embedded in a web page or an app webview.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_result"`.

ImageDelta

data
string
 (optional)

No description provided.

mime\_type
enum (string)
 (optional)

No description provided.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

No description provided.

McpServerToolCallDelta

arguments
object
 (required)

No description provided.

name
string
 (required)

No description provided.

server\_name
string
 (required)

No description provided.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_call"`.

McpServerToolResultDelta

name
string
 (optional)

No description provided.

result
array (ImageContent or TextContent) or object or string
 (required)

No description provided.

server\_name
string
 (optional)

No description provided.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_result"`.

RetrievalCallDelta

Used by Vertex Retrieval tools such as Parallel AI, Exa AI, Vertex AI Search,
etc. RetrievalType decides which tool is used.

arguments
RetrievalStepArguments
 (required) 

Required. The arguments to pass to the Retrieval tool.

The arguments to pass to Retrieval tools.

#### Fields

queries
array (string)
 (optional)

Queries for Retrieval information.

retrieval\_type
enum (string)
 (optional)

The type of retrieval tools.

Possible
values:

* `rag_store`

  The type of retrieval tools.
* `exa_ai_search`

  The type of retrieval tools.
* `parallel_ai_search`

  The type of retrieval tools.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"retrieval_call"`.

RetrievalResultDelta

Used by Vertex Retrieval tools such as Parallel AI, Exa AI, Vertex AI Search,
etc.
ToolResultDelta.type

is\_error
boolean
 (optional)

Whether the retrieval resulted in an error.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"retrieval_result"`.

TextAnnotationDelta

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

type
object
 (required)

No description provided.

Always set to `"text_annotation_delta"`.

TextDelta

text
string
 (required)

No description provided.

type
object
 (required)

No description provided.

Always set to `"text"`.

ThoughtSignatureDelta

signature
string
 (optional)

Signature to match the backend source to be part of the generation.

type
object
 (required)

No description provided.

Always set to `"thought_signature"`.

ThoughtSummaryDelta

content
Content
 (optional) 

A new summary item to be added to the thought.

The content of the response.

#### Possible Types

Polymorphic discriminator: `type`

AudioContent

An audio content block.

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

The audio content.

mime\_type
enum (string)
 (optional)

The mime type of the audio.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

The URI of the audio.

DocumentContent

A document content block.

data
string
 (optional)

The document content.

mime\_type
enum (string)
 (optional)

The mime type of the document.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

The URI of the document.

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

VideoContent

A video content block.

data
string
 (optional)

The video content.

mime\_type
enum (string)
 (optional)

The mime type of the video.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

The URI of the video.

type
object
 (required)

No description provided.

Always set to `"thought_summary"`.

UrlContextCallDelta

arguments
UrlContextCallArguments
 (required) 

No description provided.

The arguments to pass to the URL context.

#### Fields

urls
array (string)
 (optional)

The URLs to fetch.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_call"`.

UrlContextResultDelta

is\_error
boolean
 (optional)

No description provided.

result
UrlContextResult
 (required) 

No description provided.

The result of the URL context.

#### Fields

status
enum (string)
 (optional)

The status of the URL retrieval.

Possible
values:

* `success`

  Url retrieval is successful.
* `error`

  Url retrieval is failed due to error.
* `paywall`

  Url retrieval is failed because the content is behind paywall.
* `unsafe`

  Url retrieval is failed because the content is unsafe.

url
string
 (optional)

The URL that was fetched.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_result"`.

VideoDelta

data
string
 (optional)

No description provided.

mime\_type
enum (string)
 (optional)

No description provided.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

No description provided.

event\_id
string
 (optional)

The event\_id token to be used to resume the interaction stream, from
this event.

event\_type
object
 (required)

No description provided.

Always set to `"step.delta"`.

index
integer
 (required)

No description provided.

metadata
StepDeltaMetadata
 (optional) 

Optional metadata accompanying ANY streamed event.

Optional metadata accompanying ANY streamed event.

#### Fields

total\_usage
Usage
 (optional) 

Statistics on the interaction request's token usage.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

StepStart

event\_id
string
 (optional)

The event\_id token to be used to resume the interaction stream, from
this event.

event\_type
object
 (required)

No description provided.

Always set to `"step.start"`.

index
integer
 (required)

No description provided.

metadata
StreamMetadata
 (optional) 

Optional metadata accompanying ANY streamed event.

#### Fields

total\_usage
Usage
 (optional) 

No description provided.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

step
Step
 (required) 

No description provided.

A step in the interaction.

#### Possible Types

Polymorphic discriminator: `type`

CodeExecutionCallStep

Code execution call step.

arguments
CodeExecutionCallStepArguments
 (required) 

Required. The arguments to pass to the code execution.

The arguments to pass to the code execution.

#### Fields

code
string
 (optional)

The code to be executed.

language
enum (string)
 (optional)

Programming language of the `code`.

Possible
values:

* `python`

  Python >= 3.10, with numpy and simpy available.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_call"`.

CodeExecutionResultStep

Code execution result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the code execution resulted in an error.

result
string
 (required)

Required. The output of the code execution.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"code_execution_result"`.

FileSearchCallStep

File Search call step.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_call"`.

FileSearchResultStep

File Search result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"file_search_result"`.

FunctionCallStep

A function tool call step.

arguments
object
 (required)

Required. The arguments to pass to the function.

id
string
 (required)

Required. A unique ID for this specific tool call.

name
string
 (required)

Required. The name of the tool to call.

type
object
 (required)

No description provided.

Always set to `"function_call"`.

FunctionResultStep

Result of a function tool call.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the tool call resulted in an error.

name
string
 (optional)

The name of the tool that was called.

result
array (ImageContent or TextContent) or object or string
 (required)

Required. The result of the tool call.

type
object
 (required)

No description provided.

Always set to `"function_result"`.

GoogleMapsCallStep

Google Maps call step.

arguments
GoogleMapsCallStepArguments
 (optional) 

The arguments to pass to the Google Maps tool.

The arguments to pass to the Google Maps tool.

#### Fields

queries
array (string)
 (optional)

The queries to be executed.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_call"`.

GoogleMapsResultStep

Google Maps result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

result
GoogleMapsResultItem
 (required) 

No description provided.

The result of the Google Maps.

#### Fields

places
GoogleMapsResultPlaces
 (optional) 

No description provided.

#### Fields

name
string
 (optional)

No description provided.

place\_id
string
 (optional)

No description provided.

review\_snippets
ReviewSnippet
 (optional) 

No description provided.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

url
string
 (optional)

No description provided.

widget\_context\_token
string
 (optional)

No description provided.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_maps_result"`.

GoogleSearchCallStep

Google Search call step.

arguments
GoogleSearchCallStepArguments
 (required) 

Required. The arguments to pass to Google Search.

The arguments to pass to Google Search.

#### Fields

queries
array (string)
 (optional)

Web search queries for the following-up web search.

id
string
 (required)

Required. A unique ID for this specific tool call.

search\_type
enum (string)
 (optional)

The type of search grounding enabled.

Possible
values:

* `web_search`

  Setting this field enables web search. Only text results are returned.
* `image_search`

  Setting this field enables image search. Image bytes are returned.
* `enterprise_web_search`

  Setting this field enables enterprise web search.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_call"`.

GoogleSearchResultStep

Google Search result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the Google Search resulted in an error.

result
GoogleSearchResultItem
 (required) 

Required. The results of the Google Search.

The result of the Google Search.

#### Fields

search\_suggestions
string
 (optional)

Web content snippet that can be embedded in a web page or an app webview.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"google_search_result"`.

McpServerToolCallStep

MCPServer tool call step.

arguments
object
 (required)

Required. The JSON object of arguments for the function.

id
string
 (required)

Required. A unique ID for this specific tool call.

name
string
 (required)

Required. The name of the tool which was called.

server\_name
string
 (required)

Required. The name of the used MCP server.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_call"`.

McpServerToolResultStep

MCPServer tool result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

name
string
 (optional)

Name of the tool which is called for this specific tool call.

result
array (ImageContent or TextContent) or object or string
 (required)

Required. The output from the MCP server call. Can be simple text or rich content.

server\_name
string
 (optional)

The name of the used MCP server.

type
object
 (required)

No description provided.

Always set to `"mcp_server_tool_result"`.

ModelOutputStep

Output generated by the model.

content
Content
 (optional) 

No description provided.

The content of the response.

#### Possible Types

Polymorphic discriminator: `type`

AudioContent

An audio content block.

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

The audio content.

mime\_type
enum (string)
 (optional)

The mime type of the audio.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

The URI of the audio.

DocumentContent

A document content block.

data
string
 (optional)

The document content.

mime\_type
enum (string)
 (optional)

The mime type of the document.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

The URI of the document.

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

VideoContent

A video content block.

data
string
 (optional)

The video content.

mime\_type
enum (string)
 (optional)

The mime type of the video.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

The URI of the video.

error
Status
 (optional) 

The error result of the operation in case of failure or cancellation.

The `Status` type defines a logical error model that is suitable for
different programming environments, including REST APIs and RPC APIs. It is
used by [gRPC](https://github.com/grpc). Each `Status` message contains
three pieces of data: error code, error message, and error details.
You can find out more about this error model and how to work with it in the
[API Design Guide](https://cloud.google.com/apis/design/errors).

#### Fields

code
integer
 (optional)

The status code, which should be an enum value of google.rpc.Code.

details
array (object)
 (optional)

A list of messages that carry the error details. There is a common set of
message types for APIs to use.

message
string
 (optional)

A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.

type
object
 (required)

No description provided.

Always set to `"model_output"`.

ThoughtStep

A thought step.

signature
string
 (optional)

A signature hash for backend validation.

summary
ThoughtSummaryContent
 (optional) 

A summary of the thought.

#### Possible Types

Polymorphic discriminator: `type`

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

type
object
 (required)

No description provided.

Always set to `"thought"`.

UrlContextCallStep

URL context call step.

arguments
UrlContextCallArguments
 (required) 

Required. The arguments to pass to the URL context.

The arguments to pass to the URL context.

#### Fields

urls
array (string)
 (optional)

The URLs to fetch.

id
string
 (required)

Required. A unique ID for this specific tool call.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_call"`.

UrlContextResultStep

URL context result step.

call\_id
string
 (required)

Required. ID to match the ID from the function call block.

is\_error
boolean
 (optional)

Whether the URL context resulted in an error.

result
UrlContextResult
 (required) 

Required. The results of the URL context.

The result of the URL context.

#### Fields

status
enum (string)
 (optional)

The status of the URL retrieval.

Possible
values:

* `success`

  Url retrieval is successful.
* `error`

  Url retrieval is failed due to error.
* `paywall`

  Url retrieval is failed because the content is behind paywall.
* `unsafe`

  Url retrieval is failed because the content is unsafe.

url
string
 (optional)

The URL that was fetched.

signature
string
 (optional)

A signature hash for backend validation.

type
object
 (required)

No description provided.

Always set to `"url_context_result"`.

UserInputStep

Input provided by the user.

content
Content
 (optional) 

No description provided.

The content of the response.

#### Possible Types

Polymorphic discriminator: `type`

AudioContent

An audio content block.

channels
integer
 (optional)

The number of audio channels.

data
string
 (optional)

The audio content.

mime\_type
enum (string)
 (optional)

The mime type of the audio.

Possible
values:

* `audio/wav`

  WAV audio format
* `audio/mp3`

  MP3 audio format
* `audio/aiff`

  AIFF audio format
* `audio/aac`

  AAC audio format
* `audio/ogg`

  OGG audio format
* `audio/flac`

  FLAC audio format
* `audio/mpeg`

  MPEG audio format
* `audio/m4a`

  M4A audio format
* `audio/l16`

  L16 audio format
* `audio/opus`

  OPUS audio format
* `audio/alaw`

  ALAW audio format
* `audio/mulaw`

  MULAW audio format

sample\_rate
integer
 (optional)

The sample rate of the audio.

type
object
 (required)

No description provided.

Always set to `"audio"`.

uri
string
 (optional)

The URI of the audio.

DocumentContent

A document content block.

data
string
 (optional)

The document content.

mime\_type
enum (string)
 (optional)

The mime type of the document.

Possible
values:

* `application/pdf`

  PDF document format
* `text/csv`

  CSV document format

type
object
 (required)

No description provided.

Always set to `"document"`.

uri
string
 (optional)

The URI of the document.

ImageContent

An image content block.

data
string
 (optional)

The image content.

mime\_type
enum (string)
 (optional)

The mime type of the image.

Possible
values:

* `image/png`

  PNG image format
* `image/jpeg`

  JPEG image format
* `image/webp`

  WebP image format
* `image/heic`

  HEIC image format
* `image/heif`

  HEIF image format
* `image/gif`

  GIF image format
* `image/bmp`

  BMP image format
* `image/tiff`

  TIFF image format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"image"`.

uri
string
 (optional)

The URI of the image.

TextContent

A text content block.

annotations
Annotation
 (optional) 

Citation information for model-generated content.

Citation information for model-generated content.

#### Possible Types

Polymorphic discriminator: `type`

FileCitation

A file citation annotation.

custom\_metadata
object
 (optional)

User provided metadata about the retrieved context.

document\_uri
string
 (optional)

The URI of the file.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

file\_name
string
 (optional)

The name of the file.

media\_id
string
 (optional)

Media ID in-case of image citations, if applicable.

page\_number
integer
 (optional)

Page number of the cited document, if applicable.

source
string
 (optional)

Source attributed for a portion of the text.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"file_citation"`.

PlaceCitation

A place citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

name
string
 (optional)

Title of the place.

place\_id
string
 (optional)

The ID of the place, in `places/{place\_id}` format.

review\_snippets
ReviewSnippet
 (optional) 

Snippets of reviews that are used to generate answers about the
features of a given place in Google Maps.

Encapsulates a snippet of a user review that answers a question about
the features of a specific place in Google Maps.

#### Fields

review\_id
string
 (optional)

The ID of the review snippet.

title
string
 (optional)

Title of the review.

url
string
 (optional)

A link that corresponds to the user review on Google Maps.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

type
object
 (required)

No description provided.

Always set to `"place_citation"`.

url
string
 (optional)

URI reference of the place.

UrlCitation

A URL citation annotation.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

title
string
 (optional)

The title of the URL.

type
object
 (required)

No description provided.

Always set to `"url_citation"`.

url
string
 (optional)

The URL.

WordInfo

Word-level ASR annotation for transcription output.
Carries the word text, optional timing, and optional speaker attribution.

end\_index
integer
 (optional)

End of the attributed segment, exclusive.

end\_offset
string
 (optional)

End offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

speaker
string
 (optional)

Optional. Speaker label for this word (e.g. "spk\_1", "spk\_2").
Present when diarization\_mode is set in TranscriptionConfig.

start\_index
integer
 (optional)

Start of segment of the response that is attributed to this source.
Index indicates the start of the segment, measured in bytes.

start\_offset
string
 (optional)

Start offset in time of the word relative to the start of the audio.
Present when timestamp\_granularities contains "word".

text
string
 (optional)

The transcribed word.

type
object
 (required)

No description provided.

Always set to `"word_info"`.

text
string
 (required)

Required. The text content.

type
object
 (required)

No description provided.

Always set to `"text"`.

VideoContent

A video content block.

data
string
 (optional)

The video content.

mime\_type
enum (string)
 (optional)

The mime type of the video.

Possible
values:

* `video/mp4`

  MP4 video format
* `video/mpeg`

  MPEG video format
* `video/mpg`

  MPG video format
* `video/mov`

  MOV video format
* `video/avi`

  AVI video format
* `video/x-flv`

  FLV video format
* `video/webm`

  WebM video format
* `video/wmv`

  WMV video format
* `video/3gpp`

  3GPP video format

resolution
MediaResolution
 (optional) 

The resolution of the media.

#### Possible values

* `low`

  Low resolution.
* `medium`

  Medium resolution.
* `high`

  High resolution.
* `ultra_high`

  Ultra high resolution.

type
object
 (required)

No description provided.

Always set to `"video"`.

uri
string
 (optional)

The URI of the video.

type
object
 (required)

No description provided.

Always set to `"user_input"`.

StepStop

event\_id
string
 (optional)

The event\_id token to be used to resume the interaction stream, from
this event.

event\_type
object
 (required)

No description provided.

Always set to `"step.stop"`.

index
integer
 (required)

No description provided.

metadata
StreamMetadata
 (optional) 

Optional metadata accompanying ANY streamed event.

#### Fields

total\_usage
Usage
 (optional) 

No description provided.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

step\_usage
Usage
 (optional) 

Model usage stats for this specific step.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

usage
Usage
 (optional) 

Cumulative model usage stats from the start of the session.

Statistics on the interaction request's token usage.

#### Fields

cached\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of cached token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

grounding\_tool\_count
GroundingToolCount
 (optional) 

Grounding tool count.

The number of grounding tool counts.

#### Fields

count
integer
 (optional)

The number of grounding tool counts.

type
enum (string)
 (optional)

The grounding tool type associated with the count.

Possible
values:

* `google_search`

  Grounding with Google Web Search and Image Search, & Web Grounding
  for Enterprise.
* `google_maps`

  Grounding with Google Maps.
* `retrieval`

  Grounding with customer's data, for example, VertexAISearch.

input\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of input token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

output\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of output token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

tool\_use\_tokens\_by\_modality
ModalityTokens
 (optional) 

A breakdown of tool-use token usage by modality.

The token count for a single response modality.

#### Fields

modality
ResponseModality
 (optional) 

The modality associated with the token count.

#### Possible values

* `text`

  Indicates the model should return text.
* `image`

  Indicates the model should return images.
* `audio`

  Indicates the model should return audio.
* `video`

  Indicates the model should return video.
* `document`

  Indicates the model should return documents.

tokens
integer
 (optional)

Number of tokens for the modality.

total\_cached\_tokens
integer
 (optional)

Number of tokens in the cached part of the prompt (the cached content).

total\_input\_tokens
integer
 (optional)

Number of tokens in the prompt (context).

total\_output\_tokens
integer
 (optional)

Total number of tokens across all the generated responses.

total\_thought\_tokens
integer
 (optional)

Number of tokens of thoughts for thinking models.

total\_tokens
integer
 (optional)

Total token count for the interaction request (prompt + responses + other
internal tokens).

total\_tool\_use\_tokens
integer
 (optional)

Number of tokens present in tool-use prompt(s).

### Examples

### Error Event

```
{
  "error": {
    "code": "not_found",
    "message": "Failed to get completed interaction: Result not found."
  },
  "event_type": "error"
}
```

### Interaction Completed

```
{
  "event_id": "evt_123",
  "event_type": "interaction.completed",
  "interaction": {
    "created": "2025-12-04T15:01:45Z",
    "id": "v1_ChdXS0l4YWZXTk9xbk0xZThQczhEcmlROBIXV0tJeGFmV05PcW5NMWU4UHM4RHJpUTg",
    "model": "gemini-3.6-flash",
    "status": "completed",
    "updated": "2025-12-04T15:01:45Z"
  }
}
```

### Interaction Completed

```
{
  "event_id": "evt_123",
  "event_type": "interaction.completed",
  "interaction": {
    "created": "2025-12-04T15:01:45Z",
    "id": "v1_ChdXS0l4YWZXTk9xbk0xZThQczhEcmlROBIXV0tJeGFmV05PcW5NMWU4UHM4RHJpUTg",
    "model": "gemini-3-flash-preview",
    "object": "interaction",
    "status": "completed",
    "updated": "2025-12-04T15:01:45Z"
  }
}
```

### Interaction Created

```
{
  "event_id": "evt_123",
  "event_type": "interaction.created",
  "interaction": {
    "created": "2025-12-04T15:01:45Z",
    "id": "v1_ChdXS0l4YWZXTk9xbk0xZThQczhEcmlROBIXV0tJeGFmV05PcW5NMWU4UHM4RHJpUTg",
    "model": "gemini-3.6-flash",
    "status": "in_progress",
    "updated": "2025-12-04T15:01:45Z"
  }
}
```

### Interaction Created

```
{
  "event_id": "evt_123",
  "event_type": "interaction.created",
  "interaction": {
    "id": "v1_ChdXS0l4YWZXTk9xbk0xZThQczhEcmlROBIXV0tJeGFmV05PcW5NMWU4UHM4RHJpUTg",
    "model": "gemini-3-flash-preview",
    "object": "interaction",
    "status": "in_progress"
  }
}
```

### Interaction Status Update

```
{
  "event_type": "interaction.status_update",
  "interaction_id": "v1_ChdTMjQ0YWJ5TUF1TzcxZThQdjRpcnFRcxIXUzI0NGFieU1BdU83MWU4UHY0aXJxUXM",
  "status": "in_progress"
}
```

### Step Delta

```
{
  "delta": {
    "type": "text",
    "text": "Hello"
  },
  "event_type": "step.delta",
  "index": 0
}
```

### Step Start

```
{
  "event_type": "step.start",
  "index": 0,
  "step": {
    "type": "model_output"
  }
}
```

### Step Stop

```
{
  "event_type": "step.stop",
  "index": 0
}
```

Send feedback
