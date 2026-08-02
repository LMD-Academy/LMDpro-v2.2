--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.VisualMediaType ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.PickVisualMedia.VisualMediaType

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.VisualMediaType)

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.VisualMediaType "View this page in Kotlin")
|Java

```
public sealed interface ActivityResultContracts.PickVisualMedia.VisualMediaType
```

Known direct subclasses

[ActivityResultContracts.PickVisualMedia.ImageAndVideo](/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.ImageAndVideo), [ActivityResultContracts.PickVisualMedia.ImageOnly](/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.ImageOnly), [ActivityResultContracts.PickVisualMedia.SingleMimeType](/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.SingleMimeType), [ActivityResultContracts.PickVisualMedia.VideoOnly](/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.VideoOnly)

|  |  |
| --- | --- |
| `ActivityResultContracts.PickVisualMedia.ImageAndVideo` | `VisualMediaType` object used to filter images and video when using the photo picker. |
| `ActivityResultContracts.PickVisualMedia.ImageOnly` | `VisualMediaType` object used to filter images only when using the photo picker. |
| `ActivityResultContracts.PickVisualMedia.SingleMimeType` | `VisualMediaType` class used to filter a single mime type only when using the photo picker. |
| `ActivityResultContracts.PickVisualMedia.VideoOnly` | `VisualMediaType` object used to filter video only when using the photo picker. |

---

Represents filter input type accepted by the photo picker.