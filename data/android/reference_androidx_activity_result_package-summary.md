# androidx.activity.result

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/package-summary))

---

[Kotlin](/reference/kotlin/androidx/activity/result/package-summary "View this page in Kotlin")
|Java

## Interfaces

|  |  |
| --- | --- |
| `ActivityResultCallback` | A type-safe callback to be called when an `activity result` is available. |
| `ActivityResultCaller` | A class that can call `Activity.startActivityForResult`-style APIs without having to manage request codes, and converting request/response to an `Intent` |
| `ActivityResultRegistryOwner` | A class that has an `ActivityResultRegistry` that allows you to register a `ActivityResultCallback` for handling an `androidx.activity.result.contract.ActivityResultContract`. |

## Classes

|  |  |
| --- | --- |
| `ActivityResult` | A container for an activity result as obtained from `Activity.onActivityResult` |
| `ActivityResultCallerKt` |  |
| `ActivityResultKt` |  |
| `ActivityResultLauncher` | A launcher for a previously-`prepared call` to start the process of executing an `ActivityResultContract` that takes an `I` as its required input. |
| `ActivityResultLauncherKt` |  |
| `ActivityResultRegistry` | A registry that stores `activity result callbacks` for `registered calls`. |
| `IntentSenderRequest` | A request for a `androidx.activity.result.contract.ActivityResultContracts.StartIntentSenderForResult` Activity Contract. |
| `IntentSenderRequest.Builder` | A builder for constructing `IntentSenderRequest` instances. |
| `PickVisualMediaRequest` | A request for a `PickMultipleVisualMedia` or `androidx.activity.result.contract.ActivityResultContracts.PickVisualMedia` Activity Contract. |
| `PickVisualMediaRequest.Builder` | A builder for constructing `PickVisualMediaRequest` instances. |
| `PickVisualMediaRequestKt` |  |
