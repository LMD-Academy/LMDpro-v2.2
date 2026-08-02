--- source: https://developer.android.com/reference/androidx/activity/ViewTreeOnBackPressedDispatcherOwner ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ViewTreeOnBackPressedDispatcherOwner

Added in 1.5.0

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

```
public final class ViewTreeOnBackPressedDispatcherOwner
```

---

## Summary

| Public methods |
| --- |
| `static final OnBackPressedDispatcherOwner` | `get(@NonNull View receiver)`  Retrieve the `OnBackPressedDispatcherOwner` associated with the given `View`. |
| `static final void` | `set(     @NonNull View receiver,     @NonNull OnBackPressedDispatcherOwner onBackPressedDispatcherOwner )`  Set the `OnBackPressedDispatcherOwner` associated with the given `View`. |

## Public methods

### get

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ViewTreeOnBackPressedDispatcherOwner.kt+function:findViewTreeOnBackPressedDispatcherOwner)

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public static final OnBackPressedDispatcherOwner get(@NonNull View receiver)
```

Retrieve the `OnBackPressedDispatcherOwner` associated with the given `View`. This may be used to add a callback for the system back button.

| Returns |
| --- |
| `OnBackPressedDispatcherOwner` | The `OnBackPressedDispatcherOwner` associated with this view and/or some subset of its ancestors |

### set

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ViewTreeOnBackPressedDispatcherOwner.kt+function:setViewTreeOnBackPressedDispatcherOwner)

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public static final void set(  
    @NonNull View receiver,  
    @NonNull OnBackPressedDispatcherOwner onBackPressedDispatcherOwner  
)
```

Set the `OnBackPressedDispatcherOwner` associated with the given `View`. Calls to `findViewTreeOnBackPressedDispatcherOwner` from this view or descendants will return `onBackPressedDispatcherOwner`.

This should only be called by constructs such as activities or dialogs that manage a view tree and handle the dispatch of the system back button. Callers should only set a `OnBackPressedDispatcherOwner` that will be *stable.*

| Parameters |
| --- |
| `@NonNull OnBackPressedDispatcherOwner onBackPressedDispatcherOwner` | `OnBackPressedDispatcherOwner` associated with the `View` |