--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.GetMultipleContents ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.GetMultipleContents

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.GetMultipleContents)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.GetMultipleContents "View this page in Kotlin")
|Java

```
public class ActivityResultContracts.GetMultipleContents extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.GetMultipleContents](/reference/androidx/activity/result/contract/ActivityResultContracts.GetMultipleContents) |

---

An `ActivityResultContract` to prompt the user to pick one or more a pieces of content, receiving a `content://` `Uri` for each piece of content that allows you to use `android.content.ContentResolver.openInputStream` to access the raw data. By default, this adds `Intent.CATEGORY_OPENABLE` to only return content that can be represented as a stream.

The input is the mime type to filter by, e.g. `image/\*`.

This can be extended to override `createIntent` if you wish to pass additional extras to the Intent created by `super.createIntent()`.

## Summary

| Public constructors |
| --- |
| `GetMultipleContents()` |

| Public methods |
| --- |
| `@NonNull Intent` | `@CallSuper createIntent(@NonNull Context context, @NonNull String input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `final ActivityResultContract.SynchronousResult<@NonNull List<@NonNull Uri>>` | `getSynchronousResult(@NonNull Context context, @NonNull String input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `final @NonNull List<@NonNull Uri>` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Public constructors

### GetMultipleContents

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public GetMultipleContents()
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
public final ActivityResultContract.SynchronousResult<@NonNull List<@NonNull Uri>> getSynchronousResult(@NonNull Context context, @NonNull String input)
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