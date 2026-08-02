# ActivityResultContract

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContract))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContract.kt+class:androidx.activity.result.contract.ActivityResultContract)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContract "View this page in Kotlin")
|Java

```
public abstract class ActivityResultContract<I extends Object, O extends Object>
```

Known direct subclasses

[ActivityResultContracts.CaptureVideo](/reference/androidx/activity/result/contract/ActivityResultContracts.CaptureVideo), [ActivityResultContracts.CreateDocument](/reference/androidx/activity/result/contract/ActivityResultContracts.CreateDocument), [ActivityResultContracts.GetContent](/reference/androidx/activity/result/contract/ActivityResultContracts.GetContent), [ActivityResultContracts.GetMultipleContents](/reference/androidx/activity/result/contract/ActivityResultContracts.GetMultipleContents), [ActivityResultContracts.OpenDocumentTree](/reference/androidx/activity/result/contract/ActivityResultContracts.OpenDocumentTree), [ActivityResultContracts.OpenDocument](/reference/androidx/activity/result/contract/ActivityResultContracts.OpenDocument), [ActivityResultContracts.OpenMultipleDocuments](/reference/androidx/activity/result/contract/ActivityResultContracts.OpenMultipleDocuments), [ActivityResultContracts.PickContact](/reference/androidx/activity/result/contract/ActivityResultContracts.PickContact), [ActivityResultContracts.PickMultipleVisualMedia](/reference/androidx/activity/result/contract/ActivityResultContracts.PickMultipleVisualMedia), [ActivityResultContracts.PickVisualMedia](/reference/androidx/activity/result/contract/ActivityResultContracts.PickVisualMedia), [ActivityResultContracts.RequestMultiplePermissions](/reference/androidx/activity/result/contract/ActivityResultContracts.RequestMultiplePermissions), [ActivityResultContracts.RequestPermission](/reference/androidx/activity/result/contract/ActivityResultContracts.RequestPermission), [ActivityResultContracts.StartActivityForResult](/reference/androidx/activity/result/contract/ActivityResultContracts.StartActivityForResult), [ActivityResultContracts.StartIntentSenderForResult](/reference/androidx/activity/result/contract/ActivityResultContracts.StartIntentSenderForResult), [ActivityResultContracts.TakePicturePreview](/reference/androidx/activity/result/contract/ActivityResultContracts.TakePicturePreview), [ActivityResultContracts.TakePicture](/reference/androidx/activity/result/contract/ActivityResultContracts.TakePicture), [ActivityResultContracts.TakeVideo](/reference/androidx/activity/result/contract/ActivityResultContracts.TakeVideo), [AuthTabIntent.AuthenticateUserResultContract](/reference/androidx/browser/auth/AuthTabIntent.AuthenticateUserResultContract), [ExerciseRouteRequestContract](/reference/androidx/health/connect/client/contracts/ExerciseRouteRequestContract), [HealthPermissionsRequestContract](/reference/androidx/health/connect/client/contracts/HealthPermissionsRequestContract), [ProjectedPermissionsResultContract](/reference/androidx/xr/projected/permissions/ProjectedPermissionsResultContract), [WatchFaceEditorContract](/reference/androidx/wear/watchface/editor/WatchFaceEditorContract)

|  |  |
| --- | --- |
| `ActivityResultContracts.CaptureVideo` | An `ActivityResultContract` to `take a video` saving it into the provided content-`Uri`. |
| `ActivityResultContracts.CreateDocument` | An `ActivityResultContract` to prompt the user to select a path for creating a new document of the given `mimeType`, returning the `content:` `Uri` of the item that was created. |
| `ActivityResultContracts.GetContent` | An `ActivityResultContract` to prompt the user to pick a piece of content, receiving a `content://` `Uri` for that content that allows you to use `android.content.ContentResolver.openInputStream` to access the raw data. |
| `ActivityResultContracts.GetMultipleContents` | An `ActivityResultContract` to prompt the user to pick one or more a pieces of content, receiving a `content://` `Uri` for each piece of content that allows you to use `android.content.ContentResolver.openInputStream` to access the raw data. |
| `ActivityResultContracts.OpenDocumentTree` | An `ActivityResultContract` to prompt the user to select a directory, returning the user selection as a `Uri`. |
| `ActivityResultContracts.OpenDocument` | An `ActivityResultContract` to prompt the user to open a document, receiving its contents as a `file:/http:/content:` `Uri`. |
| `ActivityResultContracts.OpenMultipleDocuments` | An `ActivityResultContract` to prompt the user to open (possibly multiple) documents, receiving their contents as `file:/http:/content:` `Uri`s. |
| `ActivityResultContracts.PickContact` | An `ActivityResultContract` to request the user to pick a contact from the contacts app. |
| `ActivityResultContracts.PickMultipleVisualMedia` | An `ActivityResultContract` to use the [Photo Picker](https://developer.android.com/training/data-storage/shared/photopicker) to select multiple images, videos, or other types of visual media. |
| `ActivityResultContracts.PickVisualMedia` | An `ActivityResultContract` to use the [Photo Picker](https://developer.android.com/training/data-storage/shared/photopicker) to select a single image, video, or other type of visual media. |
| `ActivityResultContracts.RequestMultiplePermissions` | An `ActivityResultContract` to `request permissions` |
| `ActivityResultContracts.RequestPermission` | An `ActivityResultContract` to `request a permission` |
| `ActivityResultContracts.StartActivityForResult` | An `ActivityResultContract` that doesn't do any type conversion, taking raw `Intent` as an input and `ActivityResult` as an output. |
| `ActivityResultContracts.StartIntentSenderForResult` | An `ActivityResultContract` that calls `Activity.startIntentSender`. |
| `ActivityResultContracts.TakePicturePreview` | An `ActivityResultContract` to `take small a picture` preview, returning it as a `Bitmap`. |
| `ActivityResultContracts.TakePicture` | An `ActivityResultContract` to `take a picture` saving it into the provided content-`Uri`. |
| `ActivityResultContracts.TakeVideo` | **This class is deprecated.** The thumbnail bitmap is rarely returned and is not a good signal to determine whether the video was actually successfully captured. |
| `AuthTabIntent.AuthenticateUserResultContract` | An `ActivityResultContract` for launching an Auth Tab and receiving the result. |
| `ExerciseRouteRequestContract` | An `ActivityResultContract` to request a route associated with an `androidx.health.connect.client.records.ExerciseSessionRecord`. |
| `HealthPermissionsRequestContract` | An `ActivityResultContract` to request Health permissions. |
| `ProjectedPermissionsResultContract` | **This class is deprecated.** Use ProjectedActivityCompat.requestPermissions() instead. |
| `WatchFaceEditorContract` | **This class is deprecated.** AndroidX watchface libraries are deprecated, use Watch Face Format instead. |

---

A contract specifying that an activity can be called with an input of type `I` and produce an output of type `O`.

Makes calling an activity for result type-safe.

| See also |
| --- |
| `ActivityResultCaller` |  |

## Summary

| Nested types |
| --- |
| `public final class ActivityResultContract.SynchronousResult<T extends Object>`  The wrapper for a result provided in `getSynchronousResult`. |

| Public constructors |
| --- |
| `<I extends Object, O extends Object> ActivityResultContract()` |

| Public methods |
| --- |
| `abstract @NonNull Intent` | `createIntent(@NonNull Context context, @NonNull I input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `ActivityResultContract.SynchronousResult<@NonNull O>` | `getSynchronousResult(@NonNull Context context, @NonNull I input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `abstract @NonNull O` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Public constructors

### ActivityResultContract

```
public <I extends Object, O extends Object> ActivityResultContract()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public abstract @NonNull Intent createIntent(@NonNull Context context, @NonNull I input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public ActivityResultContract.SynchronousResult<@NonNull O> getSynchronousResult(@NonNull Context context, @NonNull I input)
```

An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity.

| Returns |
| --- |
| `ActivityResultContract.SynchronousResult<@NonNull O>` | the result wrapped in a `SynchronousResult` or `null` if the call should proceed to start an activity. |

### parseResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public abstract @NonNull O parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.
