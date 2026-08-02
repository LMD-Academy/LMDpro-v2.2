# ActivityResultRegistry

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/result/ActivityResultRegistry))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/result/ActivityResultRegistry.kt+class:androidx.activity.result.ActivityResultRegistry)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/result/ActivityResultRegistry "View this page in Kotlin")
|Java

```
public abstract class ActivityResultRegistry
```

---

A registry that stores `activity result callbacks` for `registered calls`.

You can create your own instance for testing by overriding `onLaunch` and calling `dispatchResult` immediately within it, thus skipping the actual `Activity.startActivityForResult` call.

When testing, make sure to explicitly provide a registry instance whenever calling `ActivityResultCaller.registerForActivityResult`, to be able to inject a test instance.

## Summary

| Public constructors |
| --- |
| `ActivityResultRegistry()` |

| Public methods |
| --- |
| `final boolean` | `@MainThread <O extends Object> dispatchResult(int requestCode, @NonNull O result)`  Dispatch a result object to the callback on record. |
| `final boolean` | `@MainThread dispatchResult(int requestCode, int resultCode, Intent data)`  Dispatch a result received via `Activity.onActivityResult` to the callback on record, or store the result if callback was not yet registered. |
| `abstract void` | `@MainThread <I extends Object, O extends Object> onLaunch(     int requestCode,     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull I input,     ActivityOptionsCompat options )`  Start the process of executing an `ActivityResultContract` in a type-safe way, using the provided `contract`. |
| `final void` | `onRestoreInstanceState(Bundle savedInstanceState)`  Restore the state of this registry from the given `Bundle` |
| `final void` | `onSaveInstanceState(@NonNull Bundle outState)`  Save the state of this registry in the given `Bundle` |
| `final @NonNull ActivityResultLauncher<@NonNull I>` | `<I extends Object, O extends Object> register(     @NonNull String key,     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull ActivityResultCallback<@NonNull O> callback )`  Register a new callback with this registry. |
| `final @NonNull ActivityResultLauncher<@NonNull I>` | `<I extends Object, O extends Object> register(     @NonNull String key,     @NonNull LifecycleOwner lifecycleOwner,     @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,     @NonNull ActivityResultCallback<@NonNull O> callback )`  Register a new callback with this registry. |

## Public constructors

### ActivityResultRegistry

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public ActivityResultRegistry()
```

## Public methods

### dispatchResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@MainThread  
public final boolean <O extends Object> dispatchResult(int requestCode, @NonNull O result)
```

Dispatch a result object to the callback on record.

| Parameters |
| --- |
| `int requestCode` | request code to identify the callback |
| `@NonNull O result` | the result to propagate |

| Returns |
| --- |
| `boolean` | true if there is a callback registered for the given request code, false otherwise. |

### dispatchResult

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@MainThread  
public final boolean dispatchResult(int requestCode, int resultCode, Intent data)
```

Dispatch a result received via `Activity.onActivityResult` to the callback on record, or store the result if callback was not yet registered.

| Parameters |
| --- |
| `int requestCode` | request code to identify the callback |
| `int resultCode` | status to indicate the success of the operation |
| `Intent data` | an intent that carries the result data |

| Returns |
| --- |
| `boolean` | whether there was a callback was registered for the given request code which was or will be called. |

### onLaunch

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
@MainThread  
public abstract void <I extends Object, O extends Object> onLaunch(  
    int requestCode,  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull I input,  
    ActivityOptionsCompat options  
)
```

Start the process of executing an `ActivityResultContract` in a type-safe way, using the provided `contract`.

| Parameters |
| --- |
| `int requestCode` | request code to use |
| `@NonNull ActivityResultContract<@NonNull I, @NonNull O> contract` | contract to use for type conversions |
| `@NonNull I input` | input required to execute an ActivityResultContract. |
| `ActivityOptionsCompat options` | Additional options for how the Activity should be started. |

### onRestoreInstanceState

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final void onRestoreInstanceState(Bundle savedInstanceState)
```

Restore the state of this registry from the given `Bundle`

| Parameters |
| --- |
| `Bundle savedInstanceState` | the place to restore from |

### onSaveInstanceState

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final void onSaveInstanceState(@NonNull Bundle outState)
```

Save the state of this registry in the given `Bundle`

| Parameters |
| --- |
| `@NonNull Bundle outState` | the place to put state into |

### register

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final @NonNull ActivityResultLauncher<@NonNull I> <I extends Object, O extends Object> register(  
    @NonNull String key,  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull ActivityResultCallback<@NonNull O> callback  
)
```

Register a new callback with this registry.

This is normally called by a higher level convenience methods like `ActivityResultCaller.registerForActivityResult`.

When calling this, you must call `ActivityResultLauncher.unregister` on the returned `ActivityResultLauncher` when the launcher is no longer needed to release any values that might be captured in the registered callback.

| Parameters |
| --- |
| `@NonNull String key` | a unique string key identifying this call |
| `@NonNull ActivityResultContract<@NonNull I, @NonNull O> contract` | the contract specifying input/output types of the call |
| `@NonNull ActivityResultCallback<@NonNull O> callback` | the activity result callback |

| Returns |
| --- |
| `@NonNull ActivityResultLauncher<@NonNull I>` | a launcher that can be used to execute an ActivityResultContract. |

### register

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final @NonNull ActivityResultLauncher<@NonNull I> <I extends Object, O extends Object> register(  
    @NonNull String key,  
    @NonNull LifecycleOwner lifecycleOwner,  
    @NonNull ActivityResultContract<@NonNull I, @NonNull O> contract,  
    @NonNull ActivityResultCallback<@NonNull O> callback  
)
```

Register a new callback with this registry.

This is normally called by a higher level convenience methods like `ActivityResultCaller.registerForActivityResult`.

| Parameters |
| --- |
| `@NonNull String key` | a unique string key identifying this call |
| `@NonNull LifecycleOwner lifecycleOwner` | a `LifecycleOwner` that makes this call. |
| `@NonNull ActivityResultContract<@NonNull I, @NonNull O> contract` | the contract specifying input/output types of the call |
| `@NonNull ActivityResultCallback<@NonNull O> callback` | the activity result callback |

| Returns |
| --- |
| `@NonNull ActivityResultLauncher<@NonNull I>` | a launcher that can be used to execute an ActivityResultContract. |
