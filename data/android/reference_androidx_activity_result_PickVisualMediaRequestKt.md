# PickVisualMediaRequestKt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/PickVisualMediaRequestKt))

Added in 1.6.0

---

[Kotlin](/reference/kotlin/androidx/activity/result/package-summary "View this page in Kotlin")
|Java

```
public final class PickVisualMediaRequestKt
```

---

## Summary

| Public methods |
| --- |
| `static final @NonNull PickVisualMediaRequest` | `PickVisualMediaRequest(     @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,     @IntRange(from = 2) int maxItems,     boolean isOrderedSelection,     @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab )`  Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract. |
| `static final @NonNull PickVisualMediaRequest` | `PickVisualMediaRequest(     long accentColor,     @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,     @IntRange(from = 2) int maxItems,     boolean isOrderedSelection,     @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab )`  Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract. |
| `static final @NonNull PickVisualMediaRequest` | `@RequiresApi(value = 33) PickVisualMediaRequest(     ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilitiesForTranscoding,     @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,     @IntRange(from = 2) int maxItems,     boolean isOrderedSelection,     @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab )`  Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract. |
| `static final @NonNull PickVisualMediaRequest` | `@RequiresApi(value = 33) PickVisualMediaRequest(     ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilitiesForTranscoding,     long accentColor,     @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,     @IntRange(from = 2) int maxItems,     boolean isOrderedSelection,     @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab )`  Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract. |

## Public methods

### PickVisualMediaRequest

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/PickVisualMediaRequest.kt+function:PickVisualMediaRequest)

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public static final @NonNull PickVisualMediaRequest PickVisualMediaRequest(  
    @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,  
    @IntRange(from = 2) int maxItems,  
    boolean isOrderedSelection,  
    @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab  
)
```

Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract.

| Parameters |
| --- |
| `@NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType` | type to go into the PickVisualMediaRequest |
| `@IntRange(from = 2) int maxItems` | limit the number of selectable items when using `PickMultipleVisualMedia` |
| `boolean isOrderedSelection` | whether the user can control the order of selected media when using `PickMultipleVisualMedia` (defaults to false) |
| `@NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab` | the tab to initially open the picker in (defaults to `DefaultTab.PhotosTab`). Note that the support for this parameter was added in API level 35 / R ext 12 and applies the default behavior for older versions. Also see `android.provider.MediaStore.EXTRA_PICK_IMAGES_LAUNCH_TAB` |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest` | a PickVisualMediaRequest that contains the given input |

### PickVisualMediaRequest

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/PickVisualMediaRequest.kt+function:PickVisualMediaRequest)

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public static final @NonNull PickVisualMediaRequest PickVisualMediaRequest(  
    long accentColor,  
    @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,  
    @IntRange(from = 2) int maxItems,  
    boolean isOrderedSelection,  
    @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab  
)
```

Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract.

| Parameters |
| --- |
| `long accentColor` | color long to customize picker accent color. Note that the support for this parameter was added in API level 35 / R ext 12 and applies the default behavior for older versions. Also see `android.provider.MediaStore.EXTRA_PICK_IMAGES_ACCENT_COLOR` |
| `@NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType` | type to go into the PickVisualMediaRequest |
| `@IntRange(from = 2) int maxItems` | limit the number of selectable items when using `PickMultipleVisualMedia` |
| `boolean isOrderedSelection` | whether the user can control the order of selected media when using `PickMultipleVisualMedia` (defaults to false) |
| `@NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab` | the tab to initially open the picker in (defaults to `DefaultTab.PhotosTab`). Note that the support for this parameter was added in API level 35 / R ext 12 and applies the default behavior for older versions. Also see `android.provider.MediaStore.EXTRA_PICK_IMAGES_LAUNCH_TAB` |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest` | a PickVisualMediaRequest that contains the given input |

### PickVisualMediaRequest

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/PickVisualMediaRequest.kt+function:PickVisualMediaRequest)

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
@RequiresApi(value = 33)  
public static final @NonNull PickVisualMediaRequest PickVisualMediaRequest(  
    ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilitiesForTranscoding,  
    @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,  
    @IntRange(from = 2) int maxItems,  
    boolean isOrderedSelection,  
    @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab  
)
```

Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract.

| Parameters |
| --- |
| `ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilitiesForTranscoding` | the `MediaCapabilities` that the application can handle. |
| `@NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType` | type to go into the PickVisualMediaRequest |
| `@IntRange(from = 2) int maxItems` | limit the number of selectable items when using `PickMultipleVisualMedia` |
| `boolean isOrderedSelection` | whether the user can control the order of selected media when using `PickMultipleVisualMedia` (defaults to false) |
| `@NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab` | the tab to initially open in the picker (defaults to `DefaultTab.PhotosTab`) |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest` | a PickVisualMediaRequest that contains the given input |

### PickVisualMediaRequest

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/PickVisualMediaRequest.kt+function:PickVisualMediaRequest)

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
@RequiresApi(value = 33)  
public static final @NonNull PickVisualMediaRequest PickVisualMediaRequest(  
    ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilitiesForTranscoding,  
    long accentColor,  
    @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType,  
    @IntRange(from = 2) int maxItems,  
    boolean isOrderedSelection,  
    @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab  
)
```

Creates a request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract.

| Parameters |
| --- |
| `ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilitiesForTranscoding` | the `MediaCapabilities` that the application can handle. |
| `long accentColor` | color long to customize picker accent color |
| `@NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType` | type to go into the PickVisualMediaRequest |
| `@IntRange(from = 2) int maxItems` | limit the number of selectable items when using `PickMultipleVisualMedia` |
| `boolean isOrderedSelection` | whether the user can control the order of selected media when using `PickMultipleVisualMedia` (defaults to false) |
| `@NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab` | the tab to initially open in the picker (defaults to `DefaultTab.PhotosTab`) |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest` | a PickVisualMediaRequest that contains the given input |
