# GenerationConfigKt

[//]: # (source: [developer.android.com](https://developer.android.com/ai/reference/com/google/ai/edge/aicore/GenerationConfigKt))

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/package-summary "View this page in Kotlin")
|Java

```
public final class GenerationConfigKt
```

---

## Summary

| Public methods |
| --- |
| `static final @NonNull GenerationConfig` | `generationConfig(     @ExtensionFunctionType @NonNull Function1<@NonNull GenerationConfig.Builder, Unit> init )`  Helper method to construct a `GenerationConfig` in a DSL-like manner. |

## Public methods

### generationConfig

```
public static final @NonNull GenerationConfig generationConfig(  
    @ExtensionFunctionType @NonNull Function1<@NonNull GenerationConfig.Builder, Unit> init  
)
```

Helper method to construct a `GenerationConfig` in a DSL-like manner.

Example Usage:

```
generationConfig {  
  context = context // required  
  workerExecutor = workerThread // Set the [ExecutorService] on which background tasks should be run. If no value is specified, a background thread pool will be used.  
  callbackExecutor = callbackExecutor // Set the [Executor] on which callbacks should be invoked. If no value is specified, callbacks will be invoked on the UI thread.  
  temperature = 0.75f  
  topK = 30  
  candidateCount = 4  
  maxOutputTokens = 300  
}
```

Send feedback
