# ActivityResultContracts.TakeVideo

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts.TakeVideo))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/contract/ActivityResultContracts.kt+class:androidx.activity.result.contract.ActivityResultContracts.TakeVideo)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/activity#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/contract/ActivityResultContracts.TakeVideo "View this page in Kotlin")
|Java

```
public class ActivityResultContracts.TakeVideo extends ActivityResultContract
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [androidx.activity.result.contract.ActivityResultContract](/reference/androidx/activity/result/contract/ActivityResultContract) | |
|  | ↳ | [androidx.activity.result.contract.ActivityResultContracts.TakeVideo](/reference/androidx/activity/result/contract/ActivityResultContracts.TakeVideo) |

---

**This class is deprecated.**  
The thumbnail bitmap is rarely returned and is not a good signal to determine
whether the video was actually successfully captured. Use {@link CaptureVideo} instead.

An `ActivityResultContract` to `take a video` saving it into the provided content-`Uri`.

Returns a thumbnail.

This can be extended to override `createIntent` if you wish to pass additional extras to the Intent created by `super.createIntent()`.

## Summary

| Public constructors |
| --- |
| `TakeVideo()`  **This method is deprecated.** The thumbnail bitmap is rarely returned and is not a good signal to determine whether the video was actually successfully captured. |

| Public methods |
| --- |
| `@NonNull Intent` | `@CallSuper createIntent(@NonNull Context context, @NonNull Uri input)`  **This method is deprecated.** The thumbnail bitmap is rarely returned and is not a good signal to determine whether the video was actually successfully captured. |
| `final ActivityResultContract.SynchronousResult<Bitmap>` | `getSynchronousResult(@NonNull Context context, @NonNull Uri input)`  **This method is deprecated.** The thumbnail bitmap is rarely returned and is not a good signal to determine whether the video was actually successfully captured. |
| `final Bitmap` | `parseResult(int resultCode, Intent intent)`  **This method is deprecated.** The thumbnail bitmap is rarely returned and is not a good signal to determine whether the video was actually successfully captured. |

## Public constructors

### TakeVideo

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/activity#1.3.0)

```
public TakeVideo()
```

**This method is deprecated.**  
The thumbnail bitmap is rarely returned and is not a good signal to determine
whether the video was actually successfully captured. Use {@link CaptureVideo} instead.

## Public methods

### createIntent

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/activity#1.3.0)

```
@CallSuper  
public @NonNull Intent createIntent(@NonNull Context context, @NonNull Uri input)
```

**This method is deprecated.**  
The thumbnail bitmap is rarely returned and is not a good signal to determine
whether the video was actually successfully captured. Use {@link CaptureVideo} instead.

Create an intent that can be used for `android.app.Activity.startActivityForResult`.

### getSynchronousResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

Deprecated in [1.3.0](/jetpack/androidx/releases/activity#1.3.0)

```
public final ActivityResultContract.SynchronousResult<Bitmap> getSynchronousResult(@NonNull Context context, @NonNull Uri input)
```

**This method is deprecated.**  
The thumbnail bitmap is rarely returned and is not a good signal to determine
whether the video was actually successfully captured. Use {@link CaptureVideo} instead.

An optional method you can implement that can be used to potentially provide a result in lieu of starting an activity.

| Returns |
| --- |
| `ActivityResultContract.SynchronousResult<Bitmap>` | the result wrapped in a `SynchronousResult` or `null` if the call should proceed to start an activity. |

### parseResult

```
public final Bitmap parseResult(int resultCode, Intent intent)
```

**This method is deprecated.**  
The thumbnail bitmap is rarely returned and is not a good signal to determine
whether the video was actually successfully captured. Use {@link CaptureVideo} instead.

Convert result obtained from `android.app.Activity.onActivityResult` to `O`.
