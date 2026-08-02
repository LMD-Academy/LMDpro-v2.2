--- source: https://developer.android.com/reference/androidx/activity/result/ActivityResultLauncher ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActivityResultLauncher

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultLauncher.kt+class:androidx.activity.result.ActivityResultLauncher)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/ActivityResultLauncher "View this page in Kotlin")
|Java

```
public abstract class ActivityResultLauncher<I extends Object>
```

---

A launcher for a previously-`prepared call` to start the process of executing an `ActivityResultContract` that takes an `I` as its required input.

## Summary

| Public constructors |
| --- |
| `<I extends Object> ActivityResultLauncher()` |

| Public methods |
| --- |
| `abstract @NonNull ActivityResultContract<@NonNull I, @NonNull ?>` | `getContract()`  Returns the `ActivityResultContract` that was used to create this launcher. |
| `void` | `launch(@NonNull I input)`  Executes an `ActivityResultContract` given the required `input`. |
| `abstract void` | `launch(@NonNull I input, ActivityOptionsCompat options)`  Executes an `ActivityResultContract` given the required `input` and optional `options` for how the Activity should be started. |
| `abstract void` | `@MainThread unregister()`  Unregisters this launcher, releasing the underlying result callback, and any references captured within it. |

| Extension functions |
| --- |
| `final void` | `ActivityResultLauncherKt.launch(     @NonNull ActivityResultLauncher<Void> receiver,     ActivityOptionsCompat options )`  Convenience method to launch a no-argument registered call without needing to pass in `null`. |
| `final void` | `ActivityResultLauncherKt.launch(     @NonNull ActivityResultLauncher<Unit> receiver,     ActivityOptionsCompat options )`  Convenience method to launch a no-argument registered call without needing to pass in `Unit`. |

## Public constructors

### ActivityResultLauncher

```
public <I extends Object> ActivityResultLauncher()
```

## Public methods

### getContract

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public abstract @NonNull ActivityResultContract<@NonNull I, @NonNull ?> getContract()
```

Returns the `ActivityResultContract` that was used to create this launcher.

### launch

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public void launch(@NonNull I input)
```

Executes an `ActivityResultContract` given the required `input`.

This method throws `android.content.ActivityNotFoundException` if there was no Activity found to run the given Intent.

| Throws |
| --- |
| `android.content.ActivityNotFoundException` |  |

### launch

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public abstract void launch(@NonNull I input, ActivityOptionsCompat options)
```

Executes an `ActivityResultContract` given the required `input` and optional `options` for how the Activity should be started.

This method throws `android.content.ActivityNotFoundException` if there was no Activity found to run the given Intent.

| Throws |
| --- |
| `android.content.ActivityNotFoundException` |  |

### unregister

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@MainThread  
public abstract void unregister()
```

Unregisters this launcher, releasing the underlying result callback, and any references captured within it.

You should call this if the registry may live longer than the callback registered for this launcher.

## Extension functions

### ActivityResultLauncherKt.launch

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultLauncher.kt+function:launch)

```
public final void ActivityResultLauncherKt.launch(  
    @NonNull ActivityResultLauncher<Void> receiver,  
    ActivityOptionsCompat options  
)
```

Convenience method to launch a no-argument registered call without needing to pass in `null`.

### ActivityResultLauncherKt.launch

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultLauncher.kt+function:launch)

```
public final void ActivityResultLauncherKt.launch(  
    @NonNull ActivityResultLauncher<Unit> receiver,  
    ActivityOptionsCompat options  
)
```

Convenience method to launch a no-argument registered call without needing to pass in `Unit`.