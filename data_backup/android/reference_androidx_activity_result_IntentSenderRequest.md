--- source: https://developer.android.com/reference/androidx/activity/result/IntentSenderRequest ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# IntentSenderRequest

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/IntentSenderRequest.kt+class:androidx.activity.result.IntentSenderRequest)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/IntentSenderRequest "View this page in Kotlin")
|Java

```
public final class IntentSenderRequest implements Parcelable
```

---

A request for a `androidx.activity.result.contract.ActivityResultContracts.StartIntentSenderForResult` Activity Contract.

## Summary

| Nested types |
| --- |
| `public final class IntentSenderRequest.Builder`  A builder for constructing `IntentSenderRequest` instances. |

| Public fields |
| --- |
| `static final @NonNull Parcelable.Creator<@NonNull IntentSenderRequest>` | `CREATOR` |

| Public methods |
| --- |
| `int` | `describeContents()` |
| `final Intent` | `getFillInIntent()`  The intent from this IntentSender request. |
| `final int` | `getFlagsMask()`  The flag mask from this IntentSender request. |
| `final int` | `getFlagsValues()`  The flag values from this IntentSender request. |
| `final @NonNull IntentSender` | `getIntentSender()`  The intentSender from this IntentSenderRequest. |
| `void` | `writeToParcel(@NonNull Parcel dest, int flags)` |

## Public fields

### CREATOR

```
public static final @NonNull Parcelable.Creator<@NonNull IntentSenderRequest> CREATOR
```

## Public methods

### describeContents

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public int describeContents()
```

### getFillInIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final Intent getFillInIntent()
```

The intent from this IntentSender request. If non-null, this will be provided as the intent parameter to IntentSender#sendIntent.

### getFlagsMask

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final int getFlagsMask()
```

The flag mask from this IntentSender request.

### getFlagsValues

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final int getFlagsValues()
```

The flag values from this IntentSender request.

### getIntentSender

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final @NonNull IntentSender getIntentSender()
```

The intentSender from this IntentSenderRequest.

### writeToParcel

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public void writeToParcel(@NonNull Parcel dest, int flags)
```