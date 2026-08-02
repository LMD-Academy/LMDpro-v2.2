--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/GenerativeAIException.ErrorCode ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# GenerativeAIException.ErrorCode

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/GenerativeAIException.ErrorCode "View this page in Kotlin")
|Java

```
@IntDef  
public annotation GenerativeAIException.ErrorCode
```

---

The set of `GenerativeAIException` error codes.

## Summary

| Constants |
| --- |
| `static final int` | `BAD_DATA`  Bad data for inputs. |
| `static final int` | `BAD_REQUEST`  Bad request for inputs. |
| `static final int` | `BINDING_DIED`  AICore service binding is died. |
| `static final int` | `BINDING_FAILURE`  Error during service binding. |
| `static final int` | `BUSY`  The service is currently busy. |
| `static final int` | `CANCELLED`  Inference cancelled. |
| `static final int` | `COMPUTE_ERROR`  Underlying inference engine encounters an error and fails to compute results. |
| `static final int` | `IPC_ERROR`  IPC error. |
| `static final int` | `NEEDS_SYSTEM_UPDATE`  AICore service requires Android system update to function properly. |
| `static final int` | `NOT_AVAILABLE`  Underlying inference engine is not available. |
| `static final int` | `NOT_ENOUGH_DISK_SPACE`  Download error. |
| `static final int` | `NULL_BINDING`  AICore service returns null on binding. |
| `static final int` | `REQUEST_PROCESSING_ERROR`  Request encountered error during processing, and no response will be generated. |
| `static final int` | `REQUEST_TOO_LARGE`  Request is too large to be processed by AICore. |
| `static final int` | `RESPONSE_GENERATION_ERROR`  The model failed to generate a proper response. |
| `static final int` | `RESPONSE_PROCESSING_ERROR`  Response generated encountered error. |
| `static final int` | `SERVICE_DISCONNECTED`  AICore service is disconnected. |
| `static final int` | `SERVICE_PROCESSING_ERROR`  The service encountered an error during processing. |
| `static final int` | `UNKNOWN`  Unknown failures. |

| Public constructors |
| --- |
| `ErrorCode()` |

## Constants

### BAD\_DATA

```
public static final int BAD_DATA
```

Bad data for inputs.

### BAD\_REQUEST

```
public static final int BAD_REQUEST
```

Bad request for inputs.

### BINDING\_DIED

```
public static final int BINDING_DIED
```

AICore service binding is died.

### BINDING\_FAILURE

```
public static final int BINDING_FAILURE
```

Error during service binding.

### BUSY

```
public static final int BUSY
```

The service is currently busy. Callers should retry with exponential backoff.

### CANCELLED

```
public static final int CANCELLED
```

Inference cancelled.

### COMPUTE\_ERROR

```
public static final int COMPUTE_ERROR
```

Underlying inference engine encounters an error and fails to compute results.

### IPC\_ERROR

```
public static final int IPC_ERROR
```

IPC error.

### NEEDS\_SYSTEM\_UPDATE

```
public static final int NEEDS_SYSTEM_UPDATE
```

AICore service requires Android system update to function properly.

### NOT\_AVAILABLE

```
public static final int NOT_AVAILABLE
```

Underlying inference engine is not available.

### NOT\_ENOUGH\_DISK\_SPACE

```
public static final int NOT_ENOUGH_DISK_SPACE
```

Download error.

### NULL\_BINDING

```
public static final int NULL_BINDING
```

AICore service returns null on binding.

### REQUEST\_PROCESSING\_ERROR

```
public static final int REQUEST_PROCESSING_ERROR
```

Request encountered error during processing, and no response will be generated. Note that this may be due to the inference engine refusing to generate a response e.g. because of safety filtering triggering.

### REQUEST\_TOO\_LARGE

```
public static final int REQUEST_TOO_LARGE
```

Request is too large to be processed by AICore.

### RESPONSE\_GENERATION\_ERROR

```
public static final int RESPONSE_GENERATION_ERROR
```

The model failed to generate a proper response.

### RESPONSE\_PROCESSING\_ERROR

```
public static final int RESPONSE_PROCESSING_ERROR
```

Response generated encountered error. Note that this may be due to the inference engine refusing to generate a response e.g. because of safety filtering triggering.

### SERVICE\_DISCONNECTED

```
public static final int SERVICE_DISCONNECTED
```

AICore service is disconnected.

### SERVICE\_PROCESSING\_ERROR

```
public static final int SERVICE_PROCESSING_ERROR
```

The service encountered an error during processing.

### UNKNOWN

```
public static final int UNKNOWN
```

Unknown failures.

## Public constructors

### ErrorCode

```
public ErrorCode()
```






Send feedback