--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/GenerationConfig ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# GenerationConfig

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/GenerationConfig "View this page in Kotlin")
|Java

```
public final class GenerationConfig
```

---

Configuration parameters to use for content generation.

## Summary

| Nested types |
| --- |
| `public final class GenerationConfig.Builder` |
| `public static class GenerationConfig.Companion` |

| Public methods |
| --- |
| `final @NonNull Executor` | `getCallbackExecutor()`  The `Executor` on which callbacks should be invoked |
| `final Integer` | `getCandidateCount()`  The max *unique* responses to return |
| `final Context` | `getContext()`  The application context to use |
| `final Integer` | `getMaxOutputTokens()`  The max tokens to generate per response |
| `final Float` | `getTemperature()`  The degree of randomness in token selection, typically between 0 and 1 |
| `final Integer` | `getTopK()`  How many tokens to select amongst the highest probabilities |
| `final @NonNull ExecutorService` | `getWorkerExecutor()`  The `ExecutorService` on which background tasks should be run |

## Public methods

### getCallbackExecutor

```
public final @NonNull Executor getCallbackExecutor()
```

The `Executor` on which callbacks should be invoked

### getCandidateCount

```
public final Integer getCandidateCount()
```

The max *unique* responses to return

### getContext

```
public final Context getContext()
```

The application context to use

### getMaxOutputTokens

```
public final Integer getMaxOutputTokens()
```

The max tokens to generate per response

### getTemperature

```
public final Float getTemperature()
```

The degree of randomness in token selection, typically between 0 and 1

### getTopK

```
public final Integer getTopK()
```

How many tokens to select amongst the highest probabilities

### getWorkerExecutor

```
public final @NonNull ExecutorService getWorkerExecutor()
```

The `ExecutorService` on which background tasks should be run






Send feedback