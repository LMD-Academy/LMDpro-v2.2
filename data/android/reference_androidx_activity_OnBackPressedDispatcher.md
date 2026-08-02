# OnBackPressedDispatcher

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/OnBackPressedDispatcher))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/OnBackPressedDispatcher.kt+class:androidx.activity.OnBackPressedDispatcher)

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/activity/OnBackPressedDispatcher "View this page in Kotlin")
|Java

```
public final class OnBackPressedDispatcher
```

---

Dispatcher that can be used to register `OnBackPressedCallback` instances for handling the `ComponentActivity.onBackPressed` callback via composition.

```
class FormEntryFragment : Fragment() {  
  override fun onAttach(context: Context) {  
    super.onAttach(context)  
    val callback = object : OnBackPressedCallback(  
      true // default to enabled  
    ) {  
      override fun handleOnBackPressed() {  
        showAreYouSureDialog()  
      }  
    }  
    requireActivity().onBackPressedDispatcher.addCallback(  
      this, // LifecycleOwner  
      callback  
    )  
  }  
}
```

When constructing an instance of this class, the `fallbackOnBackPressed` can be set to receive a callback if `onBackPressed` is called when `hasEnabledCallbacks` returns `false`.

## Summary

| Public constructors |
| --- |
| `OnBackPressedDispatcher(Runnable fallbackOnBackPressed)` |
| `OnBackPressedDispatcher(     Runnable fallbackOnBackPressed,     Consumer<@NonNull Boolean> onHasEnabledCallbacksChanged )` |

| Public methods |
| --- |
| `final void` | `@MainThread addCallback(@NonNull OnBackPressedCallback onBackPressedCallback)`  Add a new `OnBackPressedCallback`. |
| `final void` | `@MainThread addCallback(     @NonNull LifecycleOwner owner,     @NonNull OnBackPressedCallback onBackPressedCallback )`  Registers a new `OnBackPressedCallback` that follows the lifecycle of the given `LifecycleOwner`. |
| `final void` | `@VisibleForTesting @MainThread dispatchOnBackCancelled()` |
| `final void` | `@VisibleForTesting @MainThread dispatchOnBackProgressed(@NonNull BackEventCompat backEvent)` |
| `final void` | `@VisibleForTesting @MainThread dispatchOnBackStarted(@NonNull BackEventCompat backEvent)` |
| `final boolean` | `@MainThread hasEnabledCallbacks()`  Returns `true` if there is at least one `enabled` callback registered with this dispatcher. |
| `final void` | `@MainThread onBackPressed()`  Trigger a call to the currently added `callbacks` in reverse order in which they were added. |
| `final void` | `@RequiresApi(value = 33) setOnBackInvokedDispatcher(@NonNull OnBackInvokedDispatcher invoker)`  Sets the `OnBackInvokedDispatcher` for handling system back for Android SDK T+. |

| Extension functions |
| --- |
| `final @NonNull OnBackPressedCallback` | `OnBackPressedDispatcherKt.addCallback(     @NonNull OnBackPressedDispatcher receiver,     LifecycleOwner owner,     boolean enabled,     @NonNull Function1<@NonNull OnBackPressedCallback, Unit> onBackPressed )`  Creates and registers a new `OnBackPressedCallback` that invokes `onBackPressed`. |

## Public constructors

### OnBackPressedDispatcher

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public OnBackPressedDispatcher(Runnable fallbackOnBackPressed)
```

### OnBackPressedDispatcher

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public OnBackPressedDispatcher(  
    Runnable fallbackOnBackPressed,  
    Consumer<@NonNull Boolean> onHasEnabledCallbacksChanged  
)
```

## Public methods

### addCallback

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public final void addCallback(@NonNull OnBackPressedCallback onBackPressedCallback)
```

Add a new `OnBackPressedCallback`. Callbacks are invoked in the reverse order in which they are added, so this newly added `OnBackPressedCallback` will be the first callback to receive a callback if `onBackPressed` is called.

This method is **not** `Lifecycle` aware - if you'd like to ensure that you only get callbacks when at least `started`, use `addCallback`. It is expected that you call `OnBackPressedCallback.remove` to manually remove your callback.

| Parameters |
| --- |
| `@NonNull OnBackPressedCallback onBackPressedCallback` | The callback to add |

| See also |
| --- |
| `onBackPressed` |  |

### addCallback

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public final void addCallback(  
    @NonNull LifecycleOwner owner,  
    @NonNull OnBackPressedCallback onBackPressedCallback  
)
```

Registers a new `OnBackPressedCallback` that follows the lifecycle of the given `LifecycleOwner`.

The callback is registered once and stays attached for the lifetime of the `LifecycleOwner`. Its `OnBackPressedCallback.isEnabled` state automatically follows the lifecycle: it becomes enabled when the lifecycle is at least `Lifecycle.State.STARTED` and disabled otherwise.

When the `LifecycleOwner` is `Lifecycle.State.DESTROYED`, the callback is removed and lifecycle tracking stops. If the lifecycle is already destroyed when this method is called, the callback is not added.

## Legacy Behavior

To restore the legacy add/remove behavior, set `ActivityFlags.isOnBackPressedLifecycleOrderMaintained` to `false`. In legacy mode, the handler is added on `Lifecycle.Event.ON_START` and removed on `Lifecycle.Event.ON_STOP`, which may change dispatch ordering across lifecycle transitions.

| Parameters |
| --- |
| `@NonNull LifecycleOwner owner` | The `LifecycleOwner` that controls when the callback should be active. |
| `@NonNull OnBackPressedCallback onBackPressedCallback` | The callback to register. |

| See also |
| --- |
| `onBackPressed` |  |

### dispatchOnBackCancelled

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@VisibleForTesting  
@MainThread  
public final void dispatchOnBackCancelled()
```

### dispatchOnBackProgressed

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@VisibleForTesting  
@MainThread  
public final void dispatchOnBackProgressed(@NonNull BackEventCompat backEvent)
```

### dispatchOnBackStarted

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@VisibleForTesting  
@MainThread  
public final void dispatchOnBackStarted(@NonNull BackEventCompat backEvent)
```

### hasEnabledCallbacks

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public final boolean hasEnabledCallbacks()
```

Returns `true` if there is at least one `enabled` callback registered with this dispatcher.

| Returns |
| --- |
| `boolean` | True if there is at least one enabled callback. |

### onBackPressed

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public final void onBackPressed()
```

Trigger a call to the currently added `callbacks` in reverse order in which they were added. Only if the most recently added callback is not `enabled` will any previously added callback be called.

If `hasEnabledCallbacks` is `false` when this method is called, the `fallbackOnBackPressed` set by the constructor will be triggered.

### setOnBackInvokedDispatcher

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
@RequiresApi(value = 33)  
public final void setOnBackInvokedDispatcher(@NonNull OnBackInvokedDispatcher invoker)
```

Sets the `OnBackInvokedDispatcher` for handling system back for Android SDK T+.

| Parameters |
| --- |
| `@NonNull OnBackInvokedDispatcher invoker` | the OnBackInvokedDispatcher to be set on this dispatcher |

## Extension functions

### OnBackPressedDispatcherKt.addCallback

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/OnBackPressedDispatcher.kt+function:addCallback)

```
public final @NonNull OnBackPressedCallback OnBackPressedDispatcherKt.addCallback(  
    @NonNull OnBackPressedDispatcher receiver,  
    LifecycleOwner owner,  
    boolean enabled,  
    @NonNull Function1<@NonNull OnBackPressedCallback, Unit> onBackPressed  
)
```

Creates and registers a new `OnBackPressedCallback` that invokes `onBackPressed`.

If a `LifecycleOwner` is provided, the callback’s enabled state automatically follows the lifecycle: it is enabled while the lifecycle is at least `State.STARTED` and disabled otherwise. The callback stays registered until the `LifecycleOwner` is destroyed.

A default `enabled` state can be supplied.

## Legacy Behavior

To restore the legacy add/remove behavior, set `ActivityFlags.isOnBackPressedLifecycleOrderMaintained` to `false`. In legacy mode, the handler is added on `Lifecycle.Event.ON_START` and removed on `Lifecycle.Event.ON_STOP`, which may change dispatch ordering across lifecycle transitions.
