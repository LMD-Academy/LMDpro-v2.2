--- source: https://developer.android.com/reference/androidx/activity/result/contract/package-summary ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# androidx.activity.result.contract

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/package-summary "View this page in Kotlin")
|Java

## Interfaces

|  |  |
| --- | --- |
| `ActivityResultContracts.PickVisualMedia.VisualMediaType` | Represents filter input type accepted by the photo picker. |

## Classes

|  |  |
| --- | --- |
| `ActivityResultContract` | A contract specifying that an activity can be called with an input of type `I` and produce an output of type `O`. |
| `ActivityResultContract.SynchronousResult` | The wrapper for a result provided in `getSynchronousResult`. |
| `ActivityResultContracts` | A collection of some standard activity call contracts, as provided by android. |
| `ActivityResultContracts.CaptureVideo` | An `ActivityResultContract` to `take a video` saving it into the provided content-`Uri`. |
| `ActivityResultContracts.CreateDocument` | An `ActivityResultContract` to prompt the user to select a path for creating a new document of the given `mimeType`, returning the `content:` `Uri` of the item that was created. |
| `ActivityResultContracts.GetContent` | An `ActivityResultContract` to prompt the user to pick a piece of content, receiving a `content://` `Uri` for that content that allows you to use `android.content.ContentResolver.openInputStream` to access the raw data. |
| `ActivityResultContracts.GetMultipleContents` | An `ActivityResultContract` to prompt the user to pick one or more a pieces of content, receiving a `content://` `Uri` for each piece of content that allows you to use `android.content.ContentResolver.openInputStream` to access the raw data. |
| `ActivityResultContracts.OpenDocument` | An `ActivityResultContract` to prompt the user to open a document, receiving its contents as a `file:/http:/content:` `Uri`. |
| `ActivityResultContracts.OpenDocumentTree` | An `ActivityResultContract` to prompt the user to select a directory, returning the user selection as a `Uri`. |
| `ActivityResultContracts.OpenMultipleDocuments` | An `ActivityResultContract` to prompt the user to open (possibly multiple) documents, receiving their contents as `file:/http:/content:` `Uri`s. |
| `ActivityResultContracts.PickContact` | An `ActivityResultContract` to request the user to pick a contact from the contacts app. |
| `ActivityResultContracts.PickMultipleVisualMedia` | An `ActivityResultContract` to use the [Photo Picker](https://developer.android.com/training/data-storage/shared/photopicker) to select multiple images, videos, or other types of visual media. |
| `ActivityResultContracts.PickVisualMedia` | An `ActivityResultContract` to use the [Photo Picker](https://developer.android.com/training/data-storage/shared/photopicker) to select a single image, video, or other type of visual media. |
| `ActivityResultContracts.PickVisualMedia.DefaultTab` | Represents filter input type accepted by the photo picker. |
| `ActivityResultContracts.PickVisualMedia.MediaCapabilities` | Represents the media capabilities of an application. |
| `ActivityResultContracts.PickVisualMedia.MediaCapabilities.Builder` | A builder for constructing `MediaCapabilities` instances. |
| `ActivityResultContracts.PickVisualMedia.SingleMimeType` | `VisualMediaType` class used to filter a single mime type only when using the photo picker. |
| `ActivityResultContracts.RequestMultiplePermissions` | An `ActivityResultContract` to `request permissions` |
| `ActivityResultContracts.RequestPermission` | An `ActivityResultContract` to `request a permission` |
| `ActivityResultContracts.StartActivityForResult` | An `ActivityResultContract` that doesn't do any type conversion, taking raw `Intent` as an input and `ActivityResult` as an output. |
| `ActivityResultContracts.StartIntentSenderForResult` | An `ActivityResultContract` that calls `Activity.startIntentSender`. |
| `ActivityResultContracts.TakePicture` | An `ActivityResultContract` to `take a picture` saving it into the provided content-`Uri`. |
| `ActivityResultContracts.TakePicturePreview` | An `ActivityResultContract` to `take small a picture` preview, returning it as a `Bitmap`. |
| `ActivityResultContracts.TakeVideo` | **This class is deprecated.** The thumbnail bitmap is rarely returned and is not a good signal to determine whether the video was actually successfully captured. |
| `ActivityResultContracts.PickVisualMedia.DefaultTab.AlbumsTab` | `DefaultTab` object used to open the picker in Albums tab. |
| `ActivityResultContracts.PickVisualMedia.DefaultTab.PhotosTab` | `DefaultTab` object used to open the picker in Photos tab (also the default if no value is provided). |
| `ActivityResultContracts.PickVisualMedia.ImageAndVideo` | `VisualMediaType` object used to filter images and video when using the photo picker. |
| `ActivityResultContracts.PickVisualMedia.ImageOnly` | `VisualMediaType` object used to filter images only when using the photo picker. |
| `ActivityResultContracts.PickVisualMedia.VideoOnly` | `VisualMediaType` object used to filter video only when using the photo picker. |