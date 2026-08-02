# ActivityResultContracts.TakePicture

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.TakePicture))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.TakePicture)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.TakePicture "View this page in Kotlin")
|Java

```
public class ActivityResultContracts.TakePicture extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.TakePicture](/reference/androidx/activity/result/contract/ActivityResultContracts.TakePicture) |

---

An `ActivityResultContract` to `take a picture` saving it into the provided content-`Uri`.

Returns `true` if the image was saved into the given `Uri`.

This can be extended to override `createIntent` if you wish to pass additional extras to the Intent created by `super.createIntent()`.

## Summary

| Public constructors |
| --- |
| `TakePicture()` |

| Public methods |
| --- |
| `@NonNull Intent` | `@CallSuper createIntent(@NonNull Context context, @NonNull Uri input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `final ActivityResultContract.SynchronousResult<@NonNull Boolean>` | `getSynchronousResult(@NonNull Context context, @NonNull Uri input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `final boolean` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Public constructors

### TakePicture

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public TakePicture()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@CallSuper  
public @NonNull Intent createIntent(@NonNull Context context, @NonNull Uri input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final ActivityResultContract.SynchronousResult<@NonNull Boolean> getSynchronousResult(@NonNull Context context, @NonNull Uri input)
```

An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity.

| Returns |
| --- |
| `ActivityResultContract.SynchronousResult<@NonNull Boolean>` | the result wrapped in a `SynchronousResult` or `null` if the call should proceed to start an activity. |

### parseResult

```
public final boolean parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.
