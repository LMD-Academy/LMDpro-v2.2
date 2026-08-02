--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.StartActivityForResult ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.StartActivityForResult

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.StartActivityForResult)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.StartActivityForResult "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.StartActivityForResult extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.StartActivityForResult](/reference/androidx/activity/result/contract/ActivityResultContracts.StartActivityForResult) |

---

An `ActivityResultContract` that doesn't do any type conversion, taking raw `Intent` as an input and `ActivityResult` as an output.

Can be used with `androidx.activity.result.ActivityResultCaller.registerForActivityResult` to avoid having to manage request codes when calling an activity API for which a type-safe contract is not available.

## Summary

| Constants |
| --- |
| `static final @NonNull String` | `EXTRA_ACTIVITY_OPTIONS_BUNDLE`  Key for the extra containing a `android.os.Bundle` generated from `androidx.core.app.ActivityOptionsCompat.toBundle` or `android.app.ActivityOptions.toBundle`. |

| Public constructors |
| --- |
| `StartActivityForResult()` |

| Public methods |
| --- |
| `@NonNull Intent` | `createIntent(@NonNull Context context, @NonNull Intent input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `@NonNull ActivityResult` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

| Inherited methods |
| --- |
| From [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) |  |  | | --- | --- | | `ActivityResultContract.SynchronousResult<@NonNull ActivityResult>` | `getSynchronousResult(@NonNull Context context, @NonNull Intent input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. | |

## Constants

### EXTRA\_ACTIVITY\_OPTIONS\_BUNDLE

```
public static final @NonNull String EXTRA_ACTIVITY_OPTIONS_BUNDLE
```

Key for the extra containing a `android.os.Bundle` generated from `androidx.core.app.ActivityOptionsCompat.toBundle` or `android.app.ActivityOptions.toBundle`.

This will override any `androidx.core.app.ActivityOptionsCompat` passed to `androidx.activity.result.ActivityResultLauncher.launch`

## Public constructors

### StartActivityForResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public StartActivityForResult()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public @NonNull Intent createIntent(@NonNull Context context, @NonNull Intent input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### parseResult

```
public @NonNull ActivityResult parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.