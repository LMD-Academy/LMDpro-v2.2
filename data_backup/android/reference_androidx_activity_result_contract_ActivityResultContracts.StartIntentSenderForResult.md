--- source: https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.StartIntentSenderForResult ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultContracts.StartIntentSenderForResult

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.StartIntentSenderForResult)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.StartIntentSenderForResult "View this page in Kotlin")
|Java

```
public final class ActivityResultContracts.StartIntentSenderForResult extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.StartIntentSenderForResult](/reference/androidx/activity/result/contract/ActivityResultContracts.StartIntentSenderForResult) |

---

An `ActivityResultContract` that calls `Activity.startIntentSender`.

This `ActivityResultContract` takes an `IntentSenderRequest`, which must be constructed using an `IntentSenderRequest.Builder`.

If the call to `Activity.startIntentSenderForResult` throws an `android.content.IntentSender.SendIntentException` the `androidx.activity.result.ActivityResultCallback` will receive an `ActivityResult` with an `Activity.RESULT_CANCELED` `resultCode` and whose intent has the `action` of `ACTION_INTENT_SENDER_REQUEST` and an extra `EXTRA_SEND_INTENT_EXCEPTION` that contains the thrown exception.

## Summary

| Constants |
| --- |
| `static final @NonNull String` | `ACTION_INTENT_SENDER_REQUEST`  An `Intent` action for making a request via the `Activity.startIntentSenderForResult` API. |
| `static final @NonNull String` | `EXTRA_INTENT_SENDER_REQUEST`  Key for the extra containing the `IntentSenderRequest`. |
| `static final @NonNull String` | `EXTRA_SEND_INTENT_EXCEPTION`  Key for the extra containing the `android.content.IntentSender.SendIntentException` if the call to `Activity.startIntentSenderForResult` fails. |

| Public constructors |
| --- |
| `StartIntentSenderForResult()` |

| Public methods |
| --- |
| `@NonNull Intent` | `createIntent(@NonNull Context context, @NonNull IntentSenderRequest input)`  Create an intent that can be used for `android.app.Activity.startActivityForResult`. |
| `@NonNull ActivityResult` | `parseResult(int resultCode, Intent intent)`  Convert result obtained from `android.app.Activity.onActivityResult` to `O`. |

| Inherited methods |
| --- |
| From [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) |  |  | | --- | --- | | `ActivityResultContract.SynchronousResult<@NonNull ActivityResult>` | `getSynchronousResult(     @NonNull Context context,     @NonNull IntentSenderRequest input )`  An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity. | |

## Constants

### ACTION\_INTENT\_SENDER\_REQUEST

```
public static final @NonNull String ACTION_INTENT_SENDER_REQUEST
```

An `Intent` action for making a request via the `Activity.startIntentSenderForResult` API.

### EXTRA\_INTENT\_SENDER\_REQUEST

```
public static final @NonNull String EXTRA_INTENT_SENDER_REQUEST
```

Key for the extra containing the `IntentSenderRequest`.

| See also |
| --- |
| `ACTION_INTENT_SENDER_REQUEST` |  |

### EXTRA\_SEND\_INTENT\_EXCEPTION

```
public static final @NonNull String EXTRA_SEND_INTENT_EXCEPTION
```

Key for the extra containing the `android.content.IntentSender.SendIntentException` if the call to `Activity.startIntentSenderForResult` fails.

## Public constructors

### StartIntentSenderForResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public StartIntentSenderForResult()
```

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public @NonNull Intent createIntent(@NonNull Context context, @NonNull IntentSenderRequest input)
```

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### parseResult

```
public @NonNull ActivityResult parseResult(int resultCode, Intent intent)
```

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.