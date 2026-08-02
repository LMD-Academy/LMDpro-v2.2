# ActivityResultContracts.RequestPermission

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.RequestPermission))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.RequestPermission)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.RequestPermission "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.RequestPermission extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.RequestPermission](/reference/androidx/activity/result/contract/ActivityResultContracts.RequestPermission) |

---

An `ActivityResultContract` to `request a permission`

## Summary

| Public constructors |
| --- |
| `RequestPermission()` |

| Public methods |
| --- |
| `@NonNull Intent` | `createIntent(@NonNull Context context, @NonNull String input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `ActivityResultContract.SynchronousResult<@NonNull Boolean>` | `getSynchronousResult(@NonNull Context context, @NonNull String input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `boolean` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Public constructors

### RequestPermission

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public RequestPermission()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public @NonNull Intent createIntent(@NonNull Context context, @NonNull String input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public ActivityResultContract.SynchronousResult<@NonNull Boolean> getSynchronousResult(@NonNull Context context, @NonNull String input)
```

An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity.

| Returns |
| --- |
| `ActivityResultContract.SynchronousResult<@NonNull Boolean>` | the result wrapped in a `SynchronousResult` or `null` if the call should proceed to start an activity. |

### parseResult

```
public boolean parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.
