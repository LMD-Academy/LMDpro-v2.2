# ActivityResultContracts.PickMultipleVisualMedia

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickMultipleVisualMedia))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.PickMultipleVisualMedia)

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.PickMultipleVisualMedia "View this page in Kotlin")
|Java

```
public class ActivityResultContracts.PickMultipleVisualMedia extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.PickMultipleVisualMedia](/reference/androidx/activity/result/contract/ActivityResultContracts.PickMultipleVisualMedia) |

---

An `ActivityResultContract` to use the [Photo Picker](https://developer.android.com/training/data-storage/shared/photopicker) to select multiple images, videos, or other types of visual media.

This contract always prefers the system framework provided Photo Picker available via `MediaStore.ACTION_PICK_IMAGES` when it is available, but will also provide a fallback on devices that it is not available to provide a consistent API surface across all Android API 19 or higher devices.

The priority order for handling the Photo Picker is:

1. The system framework provided `MediaStore.ACTION_PICK_IMAGES`.

* An OEM can provide a system app that implements `PickVisualMedia.ACTION_SYSTEM_FALLBACK_PICK_IMAGES` to provide a consistent Photo Picker to older devices. These system apps may handle the `PickVisualMedia.EXTRA_SYSTEM_FALLBACK_PICK_IMAGES_MAX` extra to respect the `maxItems` passed to this contract.
* `Intent.ACTION_OPEN_DOCUMENT` is used as a final fallback on all Android API 19 or higher devices. This Intent does not allow limiting the max items the user selects.

The constructor accepts one parameter `maxItems` to limit the number of selectable items when using the photo picker to return. When launching the activity, the minimum of `maxItems` and input `PickVisualMediaRequest.maxItems` is set as the limit.

The input is a `PickVisualMediaRequest`.

The output is a list `Uri` of the selected media. It can be empty if the user hasn't selected any items. Keep in mind that `Uri` returned by the photo picker aren't writable.

This can be extended to override `createIntent` if you wish to pass additional extras to the Intent created by `super.createIntent()`.

## Summary

| Public constructors |
| --- |
| `PickMultipleVisualMedia(int maxItems)` |

| Public methods |
| --- |
| `@NonNull Intent` | `@CallSuper createIntent(     @NonNull Context context,     @NonNull PickVisualMediaRequest input )`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `final ActivityResultContract.SynchronousResult<@NonNull List<@NonNull Uri>>` | `getSynchronousResult(     @NonNull Context context,     @NonNull PickVisualMediaRequest input )`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `final @NonNull List<@NonNull Uri>` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Public constructors

### PickMultipleVisualMedia

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public PickMultipleVisualMedia(int maxItems)
```

## Public methods

### createIntent

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
@CallSuper  
public @NonNull Intent createIntent(  
    @NonNull Context context,  
    @NonNull PickVisualMediaRequest input  
)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
public final ActivityResultContract.SynchronousResult<@NonNull List<@NonNull Uri>> getSynchronousResult(  
    @NonNull Context context,  
    @NonNull PickVisualMediaRequest input  
)
```

An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity.

| Returns |
| --- |
| `ActivityResultContract.SynchronousResult<@NonNull List<@NonNull Uri>>` | the result wrapped in a `SynchronousResult` or `null` if the call should proceed to start an activity. |

### parseResult

```
public final @NonNull List<@NonNull Uri> parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.
