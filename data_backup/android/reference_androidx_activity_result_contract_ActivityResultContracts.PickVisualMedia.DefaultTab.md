--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.DefaultTab ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.PickVisualMedia.DefaultTab

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.DefaultTab)

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.DefaultTab "View this page in Kotlin")
|Java

```
public abstract class ActivityResultContracts.PickVisualMedia.DefaultTab
```

Known direct subclasses

[ActivityResultContracts.PickVisualMedia.DefaultTab.AlbumsTab](/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.DefaultTab.AlbumsTab), [ActivityResultContracts.PickVisualMedia.DefaultTab.PhotosTab](/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.DefaultTab.PhotosTab)

|  |  |
| --- | --- |
| `ActivityResultContracts.PickVisualMedia.DefaultTab.AlbumsTab` | `DefaultTab` object used to open the picker in Albums tab. |
| `ActivityResultContracts.PickVisualMedia.DefaultTab.PhotosTab` | `DefaultTab` object used to open the picker in Photos tab (also the default if no value is provided). |

---

Represents filter input type accepted by the photo picker.

## Summary

| Nested types |
| --- |
| `public static class ActivityResultContracts.PickVisualMedia.DefaultTab.AlbumsTab extends ActivityResultContracts.PickVisualMedia.DefaultTab`  `DefaultTab` object used to open the picker in Albums tab. |
| `public static class ActivityResultContracts.PickVisualMedia.DefaultTab.PhotosTab extends ActivityResultContracts.PickVisualMedia.DefaultTab`  `DefaultTab` object used to open the picker in Photos tab (also the default if no value is provided). |

| Public methods |
| --- |
| `abstract int` | `getValue()` |

## Public methods

### getValue

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public abstract int getValue()
```