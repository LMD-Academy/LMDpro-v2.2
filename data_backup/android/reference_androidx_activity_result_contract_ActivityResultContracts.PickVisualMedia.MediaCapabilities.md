--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.MediaCapabilities ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.PickVisualMedia.MediaCapabilities

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia.MediaCapabilities)

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia.MediaCapabilities "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.PickVisualMedia.MediaCapabilities
```

---

Represents the media capabilities of an application.

This class allows you to specify the media capabilities that your application can handle, such as the HDR type of the media. By providing this information to `PickVisualMediaRequest`, the photo picker can provide a more appropriate media format when possible.

| See also |
| --- |
| `setMediaCapabilitiesForTranscoding` |  |

## Summary

| Nested types |
| --- |
| `public final class ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder`  A builder for constructing `MediaCapabilities` instances. |

| Constants |
| --- |
| `static final int` | `TYPE_DOLBY_VISION = 3`  HDR type for Dolby-Vision. |
| `static final int` | `TYPE_HDR10 = 1`  HDR type for HDR10. |
| `static final int` | `TYPE_HDR10_PLUS = 2`  HDR type for HDR10+. |
| `static final int` | `TYPE_HLG10 = 0`  HDR type for HLG10. |

| Public methods |
| --- |
| `final @NonNull Set<@NonNull Integer>` | `getSupportedHdrTypes()` |

## Constants

### TYPE\_DOLBY\_VISION

```
public static final int TYPE_DOLBY_VISION = 3
```

HDR type for Dolby-Vision.

### TYPE\_HDR10

```
public static final int TYPE_HDR10 = 1
```

HDR type for HDR10.

### TYPE\_HDR10\_PLUS

```
public static final int TYPE_HDR10_PLUS = 2
```

HDR type for HDR10+.

### TYPE\_HLG10

```
public static final int TYPE_HLG10 = 0
```

HDR type for HLG10.

## Public methods

### getSupportedHdrTypes

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
public final @NonNull Set<@NonNull Integer> getSupportedHdrTypes()
```