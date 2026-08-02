# OnContextAvailableListener

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/contextaware/OnContextAvailableListener))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/contextaware/OnContextAvailableListener.kt+class:androidx.activity.contextaware.OnContextAvailableListener)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/contextaware/OnContextAvailableListener "View this page in Kotlin")
|Java

```
public fun interface OnContextAvailableListener
```

---

Listener for receiving a callback at the first moment a `Context` is made available to the `ContextAware` class.

| See also |
| --- |
| `addOnContextAvailableListener` |  |

## Summary

| Public methods |
| --- |
| `abstract void` | `onContextAvailable(@NonNull Context context)`  Called when the `ContextAware` object this listener was added to is associated to a `Context`. |

## Public methods

### onContextAvailable

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract void onContextAvailable(@NonNull Context context)
```

Called when the `ContextAware` object this listener was added to is associated to a `Context`.

| Parameters |
| --- |
| `@NonNull Context context` | The `Context` the `ContextAware` object is now associated with. |
