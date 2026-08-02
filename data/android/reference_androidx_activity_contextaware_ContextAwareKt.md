# ContextAwareKt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/contextaware/ContextAwareKt))

Added in 1.7.0

---

[Kotlin](/reference/kotlin/androidx/activity/contextaware/package-summary "View this page in Kotlin")
|Java

```
public final class ContextAwareKt
```

---

## Summary

| Public methods |
| --- |
| `static final @NonNull R` | `<R extends Object> withContextAvailable(     @NonNull ContextAware receiver,     @NonNull Function1<@NonNull Context, @NonNull R> onContextAvailable )`  Run `onContextAvailable` when the `Context` becomes available and resume with the result. |

## Public methods

### withContextAvailable

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/contextaware/ContextAware.kt+function:withContextAvailable)

```
public static final @NonNull R <R extends Object> withContextAvailable(  
    @NonNull ContextAware receiver,  
    @NonNull Function1<@NonNull Context, @NonNull R> onContextAvailable  
)
```

Run `onContextAvailable` when the `Context` becomes available and resume with the result.

If the `Context` is already available, `onContextAvailable` will be synchronously called on the current coroutine context. Otherwise, `onContextAvailable` will be called on the UI thread immediately when the Context becomes available.
