--- source: https://developer.android.com/reference/androidx/activity/ViewTreeFullyDrawnReporterOwner ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ViewTreeFullyDrawnReporterOwner

Added in 1.7.0

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

```
public final class ViewTreeFullyDrawnReporterOwner
```

---

## Summary

| Public methods |
| --- |
| `static final FullyDrawnReporterOwner` | `get(@NonNull View receiver)`  Retrieve the `FullyDrawnReporterOwner` associated with the given `View`. |
| `static final void` | `set(     @NonNull View receiver,     @NonNull FullyDrawnReporterOwner fullyDrawnReporterOwner )`  Set the `FullyDrawnReporterOwner` associated with the given `View`. |

## Public methods

### get

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ViewTreeFullyLoadedReporterOwner.kt+function:findViewTreeFullyDrawnReporterOwner)

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public static final FullyDrawnReporterOwner get(@NonNull View receiver)
```

Retrieve the `FullyDrawnReporterOwner` associated with the given `View`. This may be used to indicate that a part of the UI is drawn and ready for first user interaction.

| Returns |
| --- |
| `FullyDrawnReporterOwner` | The `FullyDrawnReporterOwner` associated with this view and/or some subset of its ancestors |

### set

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ViewTreeFullyLoadedReporterOwner.kt+function:setViewTreeFullyDrawnReporterOwner)

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public static final void set(  
    @NonNull View receiver,  
    @NonNull FullyDrawnReporterOwner fullyDrawnReporterOwner  
)
```

Set the `FullyDrawnReporterOwner` associated with the given `View`. Calls to `findViewTreeFullyDrawnReporterOwner` from this `View` or descendants will return `fullyDrawnReporterOwner`.

This should only be called by constructs such as activities that manage a view tree and handle the dispatch of `ComponentActivity.reportFullyDrawn`.

| Parameters |
| --- |
| `@NonNull FullyDrawnReporterOwner fullyDrawnReporterOwner` | `FullyDrawnReporterOwner` associated with the `View` |