# IntentSenderRequest.Builder

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/IntentSenderRequest.Builder))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/IntentSenderRequest.kt+class:androidx.activity.result.IntentSenderRequest.Builder)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/IntentSenderRequest.Builder "View this page in Kotlin")
|Java

```
public final class IntentSenderRequest.Builder
```

---

A builder for constructing `IntentSenderRequest` instances.

## Summary

| Public constructors |
| --- |
| `Builder(@NonNull IntentSender intentSender)` |
| `Builder(@NonNull PendingIntent pendingIntent)`  Convenience constructor that takes an `PendingIntent` and uses its `IntentSender`. |

| Public methods |
| --- |
| `final @NonNull IntentSenderRequest` | `build()`  Build the IntentSenderRequest specified by this builder. |
| `final @NonNull IntentSenderRequest.Builder` | `setFillInIntent(Intent fillInIntent)`  Set the intent for the `IntentSenderRequest`. |
| `final @NonNull IntentSenderRequest.Builder` | `setFlags(int values, int mask)`  Set the flag mask and flag values for the `IntentSenderRequest`. |

## Public constructors

### Builder

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public Builder(@NonNull IntentSender intentSender)
```

### Builder

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public Builder(@NonNull PendingIntent pendingIntent)
```

Convenience constructor that takes an `PendingIntent` and uses its `IntentSender`.

| Parameters |
| --- |
| `@NonNull PendingIntent pendingIntent` | the pendingIntent containing with the intentSender to go in the IntentSenderRequest. |

## Public methods

### build

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final @NonNull IntentSenderRequest build()
```

Build the IntentSenderRequest specified by this builder.

| Returns |
| --- |
| `@NonNull IntentSenderRequest` | the newly constructed IntentSenderRequest. |

### setFillInIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final @NonNull IntentSenderRequest.Builder setFillInIntent(Intent fillInIntent)
```

Set the intent for the `IntentSenderRequest`.

| Parameters |
| --- |
| `Intent fillInIntent` | intent to go in the IntentSenderRequest. If non-null, this will be provided as the intent parameter to IntentSender#sendIntent. |

| Returns |
| --- |
| `@NonNull IntentSenderRequest.Builder` | This builder. |

### setFlags

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final @NonNull IntentSenderRequest.Builder setFlags(int values, int mask)
```

Set the flag mask and flag values for the `IntentSenderRequest`.

| Parameters |
| --- |
| `int values` | flagValues to go in the IntentSenderRequest. Desired values for any bits set in flagsMask |
| `int mask` | mask to go in the IntentSenderRequest. Intent flags in the original IntentSender that you would like to change. |

| Returns |
| --- |
| `@NonNull IntentSenderRequest.Builder` | This builder. |
