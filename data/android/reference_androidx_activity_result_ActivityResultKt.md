# ActivityResultKt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/ActivityResultKt))

Added in 1.9.0

---

[Kotlin](/reference/kotlin/androidx/activity/result/package-summary "View this page in Kotlin")
|Java

```
public final class ActivityResultKt
```

---

## Summary

| Public methods |
| --- |
| `static final int` | `component1(@NonNull ActivityResult receiver)`  Destructuring declaration for `ActivityResult` to provide the requestCode |
| `static final Intent` | `component2(@NonNull ActivityResult receiver)`  Destructuring declaration for `ActivityResult` to provide the intent |

## Public methods

### component1

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResult.kt+function:component1)

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
public static final int component1(@NonNull ActivityResult receiver)
```

Destructuring declaration for `ActivityResult` to provide the requestCode

| Returns |
| --- |
| `int` | the resultCode of the `ActivityResult` |

### component2

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResult.kt+function:component2)

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
public static final Intent component2(@NonNull ActivityResult receiver)
```

Destructuring declaration for `ActivityResult` to provide the intent

| Returns |
| --- |
| `Intent` | the intent of the `ActivityResult` |
