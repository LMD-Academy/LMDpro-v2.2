# PickVisualMediaRequest.Builder

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/PickVisualMediaRequest.Builder))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/PickVisualMediaRequest.kt+class:androidx.activity.result.PickVisualMediaRequest.Builder)

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/PickVisualMediaRequest.Builder "View this page in Kotlin")
|Java

```
public final class PickVisualMediaRequest.Builder
```

---

A builder for constructing `PickVisualMediaRequest` instances.

## Summary

| Public constructors |
| --- |
| `Builder()` |

| Public methods |
| --- |
| `final @NonNull PickVisualMediaRequest` | `build()`  Build the PickVisualMediaRequest specified by this builder. |
| `final @NonNull PickVisualMediaRequest.Builder` | `setAccentColor(long accentColor)`  Set the accent color for the `PickVisualMediaRequest`. |
| `final @NonNull PickVisualMediaRequest.Builder` | `setDefaultTab(     @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab )`  Set the default tab for the `PickVisualMediaRequest`. |
| `final @NonNull PickVisualMediaRequest.Builder` | `setMaxItems(@IntRange(from = 2) int maxItems)`  Limit the number of selectable items in the photo picker when using `PickMultipleVisualMedia` |
| `final @NonNull PickVisualMediaRequest.Builder` | `@RequiresApi(value = 33) setMediaCapabilitiesForTranscoding(     ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilities )`  Set the media capabilities for the `PickVisualMediaRequest`. |
| `final @NonNull PickVisualMediaRequest.Builder` | `setMediaType(     @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType )`  Set the media type for the `PickVisualMediaRequest`. |
| `final @NonNull PickVisualMediaRequest.Builder` | `setOrderedSelection(boolean isOrderedSelection)`  Set the ordered selection for the `PickVisualMediaRequest`. |

## Public constructors

### Builder

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public Builder()
```

## Public methods

### build

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public final @NonNull PickVisualMediaRequest build()
```

Build the PickVisualMediaRequest specified by this builder.

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest` | the newly constructed PickVisualMediaRequest. |

### setAccentColor

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final @NonNull PickVisualMediaRequest.Builder setAccentColor(long accentColor)
```

Set the accent color for the `PickVisualMediaRequest`.

The accent color is used to change the main color in the photo picker. This feature was added in API level 35 / R ext 12 and applies the default behavior for older versions.

| Parameters |
| --- |
| `long accentColor` | color long to apply as accent to the main color in the picker |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest.Builder` | This builder. |

| See also |
| --- |
| `EXTRA_PICK_IMAGES_ACCENT_COLOR` |  |

### setDefaultTab

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final @NonNull PickVisualMediaRequest.Builder setDefaultTab(  
    @NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab  
)
```

Set the default tab for the `PickVisualMediaRequest`.

The default tab is used to open the preferred view inside the photo picker at first such as, e.g. `DefaultTab.PhotosTab`, `DefaultTab.AlbumsTab`. This feature was added in API level 35 / R ext 12 and applies the default behavior for older versions.

| Parameters |
| --- |
| `@NonNull ActivityResultContracts.PickVisualMedia.DefaultTab defaultTab` | the tab to launch the picker in (defaults to `DefaultTab.PhotosTab`) |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest.Builder` | This builder. |

| See also |
| --- |
| `EXTRA_PICK_IMAGES_LAUNCH_TAB` |  |

### setMaxItems

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final @NonNull PickVisualMediaRequest.Builder setMaxItems(@IntRange(from = 2) int maxItems)
```

Limit the number of selectable items in the photo picker when using `PickMultipleVisualMedia`

| Parameters |
| --- |
| `@IntRange(from = 2) int maxItems` | int type limiting the number of selectable items |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest.Builder` | This builder. |

### setMediaCapabilitiesForTranscoding

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
@RequiresApi(value = 33)  
public final @NonNull PickVisualMediaRequest.Builder setMediaCapabilitiesForTranscoding(  
    ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilities  
)
```

Set the media capabilities for the `PickVisualMediaRequest`.

This parameter allows you to specify the media capabilities that your application can handle, such as the HDR type of the media. This parameter might be not supported by the underlying photo picker implementation.

When the requested video format does not match the capabilities specified by the calling app and the video duration is within the range that photo picker can handle, photo picker will transcode the video into a default supported format, otherwise, the calling app will receive the original file.

| Parameters |
| --- |
| `ActivityResultContracts.PickVisualMedia.MediaCapabilities mediaCapabilities` | the `MediaCapabilities` to apply to the media selection. |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest.Builder` | This builder. |

### setMediaType

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public final @NonNull PickVisualMediaRequest.Builder setMediaType(  
    @NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType  
)
```

Set the media type for the `PickVisualMediaRequest`.

The type is the mime type to filter by, e.g. `PickVisualMedia.ImageOnly`, `PickVisualMedia.ImageAndVideo`, `PickVisualMedia.SingleMimeType("image/gif")`

| Parameters |
| --- |
| `@NonNull ActivityResultContracts.PickVisualMedia.VisualMediaType mediaType` | type to go into the PickVisualMediaRequest |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest.Builder` | This builder. |

### setOrderedSelection

Added in [1.10.0](/jetpack/androidx/releases/activity#1.10.0)

```
public final @NonNull PickVisualMediaRequest.Builder setOrderedSelection(boolean isOrderedSelection)
```

Set the ordered selection for the `PickVisualMediaRequest`.

Allow the user to control the order in which images are returned to the calling app. This parameter might be not supported by the underlying photo picker implementation.

| Parameters |
| --- |
| `boolean isOrderedSelection` | boolean to enable customisable selection order in the picker |

| Returns |
| --- |
| `@NonNull PickVisualMediaRequest.Builder` | This builder. |
