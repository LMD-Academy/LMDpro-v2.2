# ActivityResultContracts.RequestMultiplePermissions

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.RequestMultiplePermissions))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.RequestMultiplePermissions)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.RequestMultiplePermissions "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.RequestMultiplePermissions extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.RequestMultiplePermissions](/reference/androidx/activity/result/contract/ActivityResultContracts.RequestMultiplePermissions) |

---

An `ActivityResultContract` to `request permissions`

## Summary

| Constants |
| --- |
| `static final @NonNull String` | `ACTION_REQUEST_PERMISSIONS`  An `Intent` action for making a permission request via a regular `Activity.startActivityForResult` API. |
| `static final @NonNull String` | `EXTRA_PERMISSIONS`  Key for the extra containing all the requested permissions. |
| `static final @NonNull String` | `EXTRA_PERMISSION_GRANT_RESULTS`  Key for the extra containing whether permissions were granted. |

| Public constructors |
| --- |
| `RequestMultiplePermissions()` |

| Public methods |
| --- |
| `@NonNull Intent` | `createIntent(@NonNull Context context, @NonNull String[] input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `ActivityResultContract.SynchronousResult<@NonNull Map<@NonNull String, @NonNull Boolean>>` | `getSynchronousResult(@NonNull Context context, @NonNull String[] input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. |
| `@NonNull Map<@NonNull String, @NonNull Boolean>` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

## Constants

### ACTION\_REQUEST\_PERMISSIONS

```
public static final @NonNull String ACTION_REQUEST_PERMISSIONS
```

An `Intent` action for making a permission request via a regular `Activity.startActivityForResult` API.

Caller must provide a `String[]` extra `EXTRA_PERMISSIONS`

Result will be delivered via `Activity.onActivityResult` with `String[]` `EXTRA_PERMISSIONS` and `int[]` `EXTRA_PERMISSION_GRANT_RESULTS`, similar to `Activity.onRequestPermissionsResult`

| See also |
| --- |
| `requestPermissions` |  |
| `onRequestPermissionsResult` |  |

### EXTRA\_PERMISSIONS

```
public static final @NonNull String EXTRA_PERMISSIONS
```

Key for the extra containing all the requested permissions.

| See also |
| --- |
| `ACTION_REQUEST_PERMISSIONS` |  |

### EXTRA\_PERMISSION\_GRANT\_RESULTS

```
public static final @NonNull String EXTRA_PERMISSION_GRANT_RESULTS
```

Key for the extra containing whether permissions were granted.

| See also |
| --- |
| `ACTION_REQUEST_PERMISSIONS` |  |

## Public constructors

### RequestMultiplePermissions

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public RequestMultiplePermissions()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public @NonNull Intent createIntent(@NonNull Context context, @NonNull String[] input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public ActivityResultContract.SynchronousResult<@NonNull Map<@NonNull String, @NonNull Boolean>> getSynchronousResult(@NonNull Context context, @NonNull String[] input)
```

An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity.

| Returns |
| --- |
| `ActivityResultContract.SynchronousResult<@NonNull Map<@NonNull String, @NonNull Boolean>>` | the result wrapped in a `SynchronousResult` or `null` if the call should proceed to start an activity. |

### parseResult

```
public @NonNull Map<@NonNull String, @NonNull Boolean> parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.
