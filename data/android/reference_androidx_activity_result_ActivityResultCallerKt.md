# ActivityResultCallerKt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/ActivityResultCallerKt))

Added in 1.9.0

---

[Kotlin](/reference/kotlin/androidx/activity/result/package-summary "View this page in Kotlin")
|Java

```
public final class ActivityResultCallerKt
```

---

## Summary

| Public methods |
| --- |
| `static final @NonNull ActivityResultLauncher<Unit>` | `<I extends Object, O extends Object> registerForActivityResult(     @NonNull ActivityResultCaller receiver,     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull I input,     @NonNull Function1<@NonNull O, Unit> callback )`  A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called. |
| `static final @NonNull ActivityResultLauncher<Unit>` | `<I extends Object, O extends Object> registerForActivityResult(     @NonNull ActivityResultCaller receiver,     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull I input,     @NonNull ActivityResultRegistry registry,     @NonNull Function1<@NonNull O, Unit> callback )`  A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called. |

## Public methods

### registerForActivityResult

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultCaller.kt+function:registerForActivityResult)

```
public static final @NonNull ActivityResultLauncher<Unit> <I extends Object, O extends Object> registerForActivityResult(  
    @NonNull ActivityResultCaller receiver,  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull I input,  
    @NonNull Function1<@NonNull O, Unit> callback  
)
```

A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called.

| See also |
| --- |
| `registerForActivityResult` |  |

### registerForActivityResult

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultCaller.kt+function:registerForActivityResult)

```
public static final @NonNull ActivityResultLauncher<Unit> <I extends Object, O extends Object> registerForActivityResult(  
    @NonNull ActivityResultCaller receiver,  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull I input,  
    @NonNull ActivityResultRegistry registry,  
    @NonNull Function1<@NonNull O, Unit> callback  
)
```

A version of `ActivityResultCaller.registerForActivityResult` that additionally takes an input right away, producing a launcher that doesn't take any additional input when called.

| See also |
| --- |
| `registerForActivityResult` |  |
