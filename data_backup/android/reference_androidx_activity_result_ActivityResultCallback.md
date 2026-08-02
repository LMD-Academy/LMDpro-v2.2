--- source: https://developer.android.com/reference/androidx/activity/result/ActivityResultCallback ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultCallback

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultCallback.kt+class:androidx.activity.result.ActivityResultCallback)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/ActivityResultCallback "View this page in Kotlin")
|Java

```
public fun interface ActivityResultCallback<O extends Object>
```

---

A type-safe callback to be called when an `activity result` is available.

## Summary

| Public methods |
| --- |
| `abstract void` | `onActivityResult(@NonNull O result)`  Called when result is available |

## Public methods

### onActivityResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
abstract void onActivityResult(@NonNull O result)
```

Called when result is available