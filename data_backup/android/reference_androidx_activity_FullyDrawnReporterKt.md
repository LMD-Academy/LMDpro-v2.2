--- source: https://developer.android.com/reference/androidx/activity/FullyDrawnReporterKt ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# FullyDrawnReporterKt

Added in 1.7.0

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

```
public final class FullyDrawnReporterKt
```

---

## Summary

| Public methods |
| --- |
| `static final void` | `reportWhenComplete(     @NonNull FullyDrawnReporter receiver,     @NonNull SuspendFunction0<Unit> reporter )`  Tells the `FullyDrawnReporter` to wait until `reporter` has completed before calling `Activity.reportFullyDrawn`. |

## Public methods

### reportWhenComplete

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/FullyDrawnReporter.kt+function:reportWhenComplete)

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public static final void reportWhenComplete(  
    @NonNull FullyDrawnReporter receiver,  
    @NonNull SuspendFunction0<Unit> reporter  
)
```

Tells the `FullyDrawnReporter` to wait until `reporter` has completed before calling `Activity.reportFullyDrawn`.