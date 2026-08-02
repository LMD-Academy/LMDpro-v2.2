# ActivityResultContract.SynchronousResult

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContract.SynchronousResult))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContract.kt+class:androidx.activity.result.contract.ActivityResultContract.SynchronousResult)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContract.SynchronousResult "View this page in Kotlin")
|Java

```
public final class ActivityResultContract.SynchronousResult<T extends Object>
```

---

The wrapper for a result provided in `getSynchronousResult`. This allows differentiating between a null `T` synchronous result and no synchronous result at all.

## Summary

| Public constructors |
| --- |
| `<T extends Object> SynchronousResult(@NonNull T value)` |

| Public methods |
| --- |
| `final @NonNull T` | `getValue()` |

## Public constructors

### SynchronousResult

```
public <T extends Object> SynchronousResult(@NonNull T value)
```

## Public methods

### getValue

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final @NonNull T getValue()
```
