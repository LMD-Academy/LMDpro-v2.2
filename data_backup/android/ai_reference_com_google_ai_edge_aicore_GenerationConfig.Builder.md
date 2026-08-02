--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/GenerationConfig.Builder ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# GenerationConfig.Builder

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/GenerationConfig.Builder "View this page in Kotlin")
|Java

```
public final class GenerationConfig.Builder
```

---

## Summary

| Public constructors |
| --- |
| `Builder()` |

| Public methods |
| --- |
| `final @NonNull GenerationConfig` | `build()` |
| `final @NonNull Executor` | `getCallbackExecutor()` |
| `final Integer` | `getCandidateCount()` |
| `final Context` | `getContext()` |
| `final Integer` | `getMaxOutputTokens()` |
| `final Float` | `getTemperature()` |
| `final Integer` | `getTopK()` |
| `final @NonNull ExecutorService` | `getWorkerExecutor()` |
| `final void` | `setCallbackExecutor(@NonNull Executor callbackExecutor)` |
| `final void` | `setCandidateCount(Integer candidateCount)` |
| `final void` | `setContext(Context context)` |
| `final void` | `setMaxOutputTokens(Integer maxOutputTokens)` |
| `final void` | `setTemperature(Float temperature)` |
| `final void` | `setTopK(Integer topK)` |
| `final void` | `setWorkerExecutor(@NonNull ExecutorService workerExecutor)` |

## Public constructors

### Builder

```
public Builder()
```

## Public methods

### build

```
public final @NonNull GenerationConfig build()
```

### getCallbackExecutor

```
public final @NonNull Executor getCallbackExecutor()
```

### getCandidateCount

```
public final Integer getCandidateCount()
```

### getContext

```
public final Context getContext()
```

### getMaxOutputTokens

```
public final Integer getMaxOutputTokens()
```

### getTemperature

```
public final Float getTemperature()
```

### getTopK

```
public final Integer getTopK()
```

### getWorkerExecutor

```
public final @NonNull ExecutorService getWorkerExecutor()
```

### setCallbackExecutor

```
public final void setCallbackExecutor(@NonNull Executor callbackExecutor)
```

### setCandidateCount

```
public final void setCandidateCount(Integer candidateCount)
```

### setContext

```
public final void setContext(Context context)
```

### setMaxOutputTokens

```
public final void setMaxOutputTokens(Integer maxOutputTokens)
```

### setTemperature

```
public final void setTemperature(Float temperature)
```

### setTopK

```
public final void setTopK(Integer topK)
```

### setWorkerExecutor

```
public final void setWorkerExecutor(@NonNull ExecutorService workerExecutor)
```






Send feedback