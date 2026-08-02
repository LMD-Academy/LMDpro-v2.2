--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.CreateDocument ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.CreateDocument

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.CreateDocument)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.CreateDocument "View this page in Kotlin")
|Java

```
public class ActivityResultContracts.CreateDocument extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.CreateDocument](/reference/androidx/activity/result/contract/ActivityResultContracts.CreateDocument) |

---

An `ActivityResultContract` to prompt the user to select a path for creating a new document of the given `mimeType`, returning the `content:` `Uri` of the item that was created.

The input is the suggested name for the new file.

This can be extended to override `createIntent` if you wish to pass additional extras to the Intent created by `super.createIntent()`.

## Summary

| Public constructors |
| --- |
| `CreateDocument()`  **This method is deprecated.** Using a wildcard mime type with CreateDocument is not recommended as it breaks the automatic handling of file extensions. |
| `CreateDocument(@NonNull String mimeType)` |

| Public methods |
| --- |
| `@NonNull Intent` | `@CallSuper createIntent(@NonNull Context context, @NonNull String input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `final ActivityResultContract.SynchronousResult<Uri>` | `getSynchronousResult(@NonNull Context context, @NonNull String input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `final Uri` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Public constructors

### CreateDocument

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public CreateDocument()
```

**This method is deprecated.**  
Using a wildcard mime type with CreateDocument is not recommended as it breaks the automatic handling of file extensions. Instead, specify the mime type by using the constructor that takes an concrete mime type (e.g.., CreateDocument("image/png")).

### CreateDocument

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public CreateDocument(@NonNull String mimeType)
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@CallSuper  
public @NonNull Intent createIntent(@NonNull Context context, @NonNull String input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final ActivityResultContract.SynchronousResult<Uri> getSynchronousResult(@NonNull Context context, @NonNull String input)
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