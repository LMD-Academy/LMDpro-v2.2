--- source: https://developer.android.com/reference/androidx/activity/FullyDrawnReporter ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# FullyDrawnReporter

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/FullyDrawnReporter.kt+class:androidx.activity.FullyDrawnReporter)

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

---

[Kotlin](/reference/kotlin/androidx/activity/FullyDrawnReporter "View this page in Kotlin")
|Java

```
public final class FullyDrawnReporter
```

---

Manages when to call `Activity.reportFullyDrawn`. Different parts of the UI may individually indicate when they are ready for interaction. `Activity.reportFullyDrawn` will only be called by this class when all parts are ready. At least one `addReporter` or `reportWhenComplete` must be used before `Activity.reportFullyDrawn` will be called by this class.

For example, to use coroutines:

```
val fullyDrawnReporter = componentActivity.fullyDrawnReporter  
launch {  
    fullyDrawnReporter.reportWhenComplete {  
        dataLoadedMutex.lock()  
        dataLoadedMutex.unlock()  
    }  
}
```

Or it can be manually controlled:

```
// On the UI thread:  
fullyDrawnReporter.addReporter()  
  
// Do the loading on worker thread:  
fullyDrawnReporter.removeReporter()
```

## Summary

| Public constructors |
| --- |
| `FullyDrawnReporter(     @NonNull Executor executor,     @NonNull Function0<Unit> reportFullyDrawn )` |

| Public methods |
| --- |
| `final void` | `addOnReportDrawnListener(@NonNull Function0<Unit> callback)`  Registers `callback` to be called when `reportFullyDrawn` is called by this class. |
| `final void` | `addReporter()`  Adds a lock to prevent calling `reportFullyDrawn`. |
| `final boolean` | `isFullyDrawnReported()`  Returns `true` after `reportFullyDrawn` has been called or if backed by a `ComponentActivity` and `ComponentActivity.reportFullyDrawn` has been called. |
| `final void` | `removeOnReportDrawnListener(@NonNull Function0<Unit> callback)`  Removes a previously registered `callback` so that it won't be called when `reportFullyDrawn` is called by this class. |
| `final void` | `removeReporter()`  Removes a lock added in `addReporter`. |

## Public constructors

### FullyDrawnReporter

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public FullyDrawnReporter(  
    @NonNull Executor executor,  
    @NonNull Function0<Unit> reportFullyDrawn  
)
```

| Parameters |
| --- |
| `@NonNull Executor executor` | The `Executor` on which to call `reportFullyDrawn`. |
| `@NonNull Function0<Unit> reportFullyDrawn` | Will be called when all reporters have been removed. |

## Public methods

### addOnReportDrawnListener

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public final void addOnReportDrawnListener(@NonNull Function0<Unit> callback)
```

Registers `callback` to be called when `reportFullyDrawn` is called by this class. If it has already been called, then `callback` will be called immediately.

Once `callback` has been called, it will be removed and `removeOnReportDrawnListener` does not need to be called to remove it.

### addReporter

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public final void addReporter()
```

Adds a lock to prevent calling `reportFullyDrawn`.

### isFullyDrawnReported

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public final boolean isFullyDrawnReported()
```

Returns `true` after `reportFullyDrawn` has been called or if backed by a `ComponentActivity` and `ComponentActivity.reportFullyDrawn` has been called.

### removeOnReportDrawnListener

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public final void removeOnReportDrawnListener(@NonNull Function0<Unit> callback)
```

Removes a previously registered `callback` so that it won't be called when `reportFullyDrawn` is called by this class.

### removeReporter

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public final void removeReporter()
```

Removes a lock added in `addReporter`. When all locks have been removed, `reportFullyDrawn` will be called on the next animation frame.