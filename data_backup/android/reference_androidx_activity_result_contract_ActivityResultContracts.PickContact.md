--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.PickContact ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.PickContact

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.PickContact)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.PickContact "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.PickContact extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.PickContact](/reference/androidx/activity/result/contract/ActivityResultContracts.PickContact) |

---

An `ActivityResultContract` to request the user to pick a contact from the contacts app.

The result is a `content:` `Uri`.

| See also |
| --- |
| `ContactsContract` |  |

## Summary

| Public constructors |
| --- |
| `PickContact()` |

| Public methods |
| --- |
| `@NonNull Intent` | `createIntent(@NonNull Context context, Void input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `Uri` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

| Inherited methods |
| --- |
| From [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) |  |  | | --- | --- | | `ActivityResultContract.SynchronousResult<Uri>` | `getSynchronousResult(@NonNull Context context, Void input)`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. | |

## Public constructors

### PickContact

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public PickContact()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public @NonNull Intent createIntent(@NonNull Context context, Void input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### parseResult

```
public Uri parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.