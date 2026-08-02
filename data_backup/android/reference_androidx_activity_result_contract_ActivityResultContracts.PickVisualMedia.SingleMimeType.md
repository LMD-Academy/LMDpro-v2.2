--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.SingleMimeType ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.PickVisualMedia.SingleMimeType

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.SingleMimeType)

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.SingleMimeType "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.PickVisualMedia.SingleMimeType implements ActivityResultContracts.PickVisualMedia.VisualMediaType
```

---

`VisualMediaType` class used to filter a single mime type only when using the photo picker.

## Summary

| Public constructors |
| --- |
| `SingleMimeType(@NonNull String mimeType)` |

| Public methods |
| --- |
| `final @NonNull String` | `getMimeType()` |

## Public constructors

### SingleMimeType

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public SingleMimeType(@NonNull String mimeType)
```

## Public methods

### getMimeType

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public final @NonNull String getMimeType()
```