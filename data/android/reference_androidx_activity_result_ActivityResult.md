# ActivityResult

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/ActivityResult))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResult.kt+class:androidx.activity.result.ActivityResult)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/ActivityResult "View this page in Kotlin")
|Java

```
public final class ActivityResult implements Parcelable
```

---

A container for an activity result as obtained from `Activity.onActivityResult`

| See also |
| --- |
| `onActivityResult` |  |

## Summary

| Public fields |
| --- |
| `static final @NonNull Parcelable.Creator<@NonNull ActivityResult>` | `CREATOR` |

| Public constructors |
| --- |
| `ActivityResult(int resultCode, Intent data)` |

| Public methods |
| --- |
| `int` | `describeContents()` |
| `final Intent` | `getData()`  The intent that carries the result data |
| `final int` | `getResultCode()`  Status to indicate the success of the operation |
| `static final @NonNull String` | `resultCodeToString(int resultCode)`  A readable representation of standard activity result codes for the given `resultCode` |
| `@NonNull String` | `toString()` |
| `void` | `writeToParcel(@NonNull Parcel dest, int flags)` |

| Extension functions |
| --- |
| `final int` | `ActivityResultKt.component1(@NonNull ActivityResult receiver)`  Destructuring declaration for `ActivityResult` to provide the requestCode |
| `final Intent` | `ActivityResultKt.component2(@NonNull ActivityResult receiver)`  Destructuring declaration for `ActivityResult` to provide the intent |

## Public fields

### CREATOR

```
public static final @NonNull Parcelable.Creator<@NonNull ActivityResult> CREATOR
```

## Public constructors

### ActivityResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public ActivityResult(int resultCode, Intent data)
```

## Public methods

### describeContents

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public int describeContents()
```

### getData

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final Intent getData()
```

The intent that carries the result data

### getResultCode

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final int getResultCode()
```

Status to indicate the success of the operation

### resultCodeToString

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
public static final @NonNull String resultCodeToString(int resultCode)
```

A readable representation of standard activity result codes for the given `resultCode`

| Returns |
| --- |
| `@NonNull String` | RESULT\_OK, RESULT\_CANCELED, or the number otherwise |

### toString

```
public @NonNull String toString()
```

### writeToParcel

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public void writeToParcel(@NonNull Parcel dest, int flags)
```

## Extension functions

### ActivityResultKt.component1

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResult.kt+function:component1)

```
public final int ActivityResultKt.component1(@NonNull ActivityResult receiver)
```

Destructuring declaration for `ActivityResult` to provide the requestCode

| Returns |
| --- |
| `int` | the resultCode of the `ActivityResult` |

### ActivityResultKt.component2

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResult.kt+function:component2)

```
public final Intent ActivityResultKt.component2(@NonNull ActivityResult receiver)
```

Destructuring declaration for `ActivityResult` to provide the intent

| Returns |
| --- |
| `Intent` | the intent of the `ActivityResult` |
