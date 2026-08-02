--- source: https://developer.android.com/reference/androidx/activity/result/PickVisualMediaRequest ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# PickVisualMediaRequest

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/PickVisualMediaRequest.kt+class:androidx.activity.result.PickVisualMediaRequest)

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/PickVisualMediaRequest "View this page in Kotlin")
|Java

```
public final class PickVisualMediaRequest
```

---

A request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract.

## Summary

| Nested types |
| --- |
| `public final class PickVisualMediaRequest.Builder`  A builder for constructing `PickVisualMediaRequest` instances. |

| Public methods |
| --- |
| `final long` | `getAccentColor()` |
| `final @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab` | `getDefaultTab()` |
| `final int` | `getMaxItems()` |
| `final ActivityResultContracts.PickVisualMedia.MediaCapabilities` | `getMediaCapabilitiesForTranscoding()` |
| `final @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType` | `getMediaType()` |
| `final boolean` | `isCustomAccentColorApplied()` |
| `final boolean` | `isOrderedSelection()` |

## Public methods

### getAccentColor

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final long getAccentColor()
```

### getDefaultTab

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab getDefaultTab()
```

### getMaxItems

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final int getMaxItems()
```

### getMediaCapabilitiesForTranscoding

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
public final ActivityResultContracts.PickVisualMedia.MediaCapabilities getMediaCapabilitiesForTranscoding()
```

### getMediaType

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public final @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType getMediaType()
```

### isCustomAccentColorApplied

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final boolean isCustomAccentColorApplied()
```

### isOrderedSelection

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final boolean isOrderedSelection()
```