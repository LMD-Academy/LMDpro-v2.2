--- source: https://developer.android.com/reference/androidx/activity/OnBackPressedCallback ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# OnBackPressedCallback

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/OnBackPressedCallback.kt+class:androidx.activity.OnBackPressedCallback)

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/activity/OnBackPressedCallback "View this page in Kotlin")
|Java

```
public abstract class OnBackPressedCallback
```

---

Class for handling `OnBackPressedDispatcher.onBackPressed` callbacks without strongly coupling that implementation to a subclass of `ComponentActivity`.

This class maintains its own `enabled state`. Only when this callback is enabled will it receive callbacks to `handleOnBackPressed`.

Note that the enabled state is an additional layer on top of the `androidx.lifecycle.LifecycleOwner` passed to `OnBackPressedDispatcher.addCallback` which controls when the callback is added and removed to the dispatcher.

By calling `remove`, this callback will be removed from any `OnBackPressedDispatcher` it has been added to. It is strongly recommended to instead disable this callback to handle temporary changes in state.

| See also |
| --- |
| `OnBackPressedDispatcher` |  |

## Summary

| Public constructors |
| --- |
| `OnBackPressedCallback(boolean enabled)` |

| Public methods |
| --- |
| `void` | `@MainThread handleOnBackCancelled()`  Callback for handling the system UI generated equivalent to `OnBackPressedDispatcher.dispatchOnBackCancelled`. |
| `abstract void` | `@MainThread handleOnBackPressed()`  Callback for handling the `OnBackPressedDispatcher.onBackPressed` event. |
| `void` | `@MainThread handleOnBackProgressed(@NonNull BackEventCompat backEvent)`  Callback for handling the system UI generated equivalent to `OnBackPressedDispatcher.dispatchOnBackProgressed`. |
| `void` | `@MainThread handleOnBackStarted(@NonNull BackEventCompat backEvent)`  Callback for handling the system UI generated equivalent to `OnBackPressedDispatcher.dispatchOnBackStarted`. |
| `final boolean` | `@MainThread isEnabled()`  The enabled state of the callback. |
| `final void` | `@MainThread remove()`  Removes this callback from any `OnBackPressedDispatcher` it is currently added to. |
| `final void` | `@MainThread setEnabled(boolean value)`  The enabled state of the callback. |

## Public constructors

### OnBackPressedCallback

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
public OnBackPressedCallback(boolean enabled)
```

| Parameters |
| --- |
| `boolean enabled` | The default enabled state for this callback. |

## Public methods

### handleOnBackCancelled

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@MainThread  
public void handleOnBackCancelled()
```

Callback for handling the system UI generated equivalent to `OnBackPressedDispatcher.dispatchOnBackCancelled`.

This will only be called by the framework on API 34 and above.

### handleOnBackPressed

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public abstract void handleOnBackPressed()
```

Callback for handling the `OnBackPressedDispatcher.onBackPressed` event.

### handleOnBackProgressed

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@MainThread  
public void handleOnBackProgressed(@NonNull BackEventCompat backEvent)
```

Callback for handling the system UI generated equivalent to `OnBackPressedDispatcher.dispatchOnBackProgressed`.

This will only be called by the framework on API 34 and above.

### handleOnBackStarted

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@MainThread  
public void handleOnBackStarted(@NonNull BackEventCompat backEvent)
```

Callback for handling the system UI generated equivalent to `OnBackPressedDispatcher.dispatchOnBackStarted`.

This will only be called by the framework on API 34 and above.

### isEnabled

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public final boolean isEnabled()
```

The enabled state of the callback. Only when this callback is enabled will it receive callbacks to `handleOnBackPressed`.

When registered with a `androidx.lifecycle.LifecycleOwner`, the callback is only active when **both** this property is `true` and the `androidx.lifecycle.Lifecycle` is at least `androidx.lifecycle.Lifecycle.State.STARTED`.

### remove

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public final void remove()
```

Removes this callback from any `OnBackPressedDispatcher` it is currently added to.

### setEnabled

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
@MainThread  
public final void setEnabled(boolean value)
```

The enabled state of the callback. Only when this callback is enabled will it receive callbacks to `handleOnBackPressed`.

When registered with a `androidx.lifecycle.LifecycleOwner`, the callback is only active when **both** this property is `true` and the `androidx.lifecycle.Lifecycle` is at least `androidx.lifecycle.Lifecycle.State.STARTED`.