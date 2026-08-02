# ActivityResultContracts.OpenDocumentTree

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.OpenDocumentTree))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.OpenDocumentTree)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.OpenDocumentTree "View this page in Kotlin")
|Java

```
public class ActivityResultContracts.OpenDocumentTree extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.OpenDocumentTree](/reference/androidx/activity/result/contract/ActivityResultContracts.OpenDocumentTree) |

---

An `ActivityResultContract` to prompt the user to select a directory, returning the user selection as a `Uri`. Apps can fully manage documents within the returned directory.

The input is an optional `Uri` of the initial starting location.

This can be extended to override `createIntent` if you wish to pass additional extras to the Intent created by `super.createIntent()`.

| See also |
| --- |
| `ACTION_OPEN_DOCUMENT_TREE` |  |
| `buildDocumentUriUsingTree` |  |
| `buildChildDocumentsUriUsingTree` |  |

## Summary

| Public constructors |
| --- |
| `OpenDocumentTree()` |

| Public methods |
| --- |
| `@NonNull Intent` | `@CallSuper createIntent(@NonNull Context context, Uri input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `final ActivityResultContract.SynchronousResult<Uri>` | `getSynchronousResult(@NonNull Context context, Uri input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `final Uri` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Public constructors

### OpenDocumentTree

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public OpenDocumentTree()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@CallSuper  
public @NonNull Intent createIntent(@NonNull Context context, Uri input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final ActivityResultContract.SynchronousResult<Uri> getSynchronousResult(@NonNull Context context, Uri input)
```

An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity.

| Returns |
| --- |
| `ActivityResultContract.SynchronousResult<Uri>` | the result wrapped in a `SynchronousResult` or `null` if the call should proceed to start an activity. |

### parseResult

```
public final Uri parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.
