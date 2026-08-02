--- source: https://developer.android.com/reference/androidx/activity/contextaware/ContextAwareHelper ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ContextAwareHelper

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/contextaware/ContextAwareHelper.kt+class:androidx.activity.contextaware.ContextAwareHelper)

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/activity/contextaware/ContextAwareHelper "View this page in Kotlin")
|Java

```
public final class ContextAwareHelper
```

---

Helper class for implementing `ContextAware`. Classes using this helper should call `addOnContextAvailableListener` and `removeOnContextAvailableListener` as the respective methods of `ContextAware` are called.

You must call `dispatchOnContextAvailable` once the `Context` is available to dispatch the callbacks to all registered listeners.

Listeners added after the context has been made available via `dispatchOnContextAvailable` will have the Context synchronously delivered to them up until `clearAvailableContext` is called.

## Summary

| Public constructors |
| --- |
| `ContextAwareHelper()` |

| Public methods |
| --- |
| `final void` | `addOnContextAvailableListener(     @NonNull OnContextAvailableListener listener )`  Add a new `OnContextAvailableListener` for receiving a callback for when this class is associated with a `android.content.Context`. |
| `final void` | `clearAvailableContext()`  Clear any `Context` previously made available via `dispatchOnContextAvailable`. |
| `final void` | `dispatchOnContextAvailable(@NonNull Context context)`  Dispatch the callback of `OnContextAvailableListener.onContextAvailable` to all currently added listeners in the order they were added. |
| `final Context` | `peekAvailableContext()`  Get the `Context` if it is currently available. |
| `final void` | `removeOnContextAvailableListener(     @NonNull OnContextAvailableListener listener )`  Remove a `OnContextAvailableListener` previously added via `addOnContextAvailableListener`. |

## Public constructors

### ContextAwareHelper

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public ContextAwareHelper()
```

## Public methods

### addOnContextAvailableListener

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final void addOnContextAvailableListener(  
    @NonNull OnContextAvailableListener listener  
)
```

Add a new `OnContextAvailableListener` for receiving a callback for when this class is associated with a `android.content.Context`.

| Parameters |
| --- |
| `@NonNull OnContextAvailableListener listener` | The listener that should be added. |

| See also |
| --- |
| `removeOnContextAvailableListener` |  |

### clearAvailableContext

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final void clearAvailableContext()
```

Clear any `Context` previously made available via `dispatchOnContextAvailable`.

### dispatchOnContextAvailable

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final void dispatchOnContextAvailable(@NonNull Context context)
```

Dispatch the callback of `OnContextAvailableListener.onContextAvailable` to all currently added listeners in the order they were added.

| Parameters |
| --- |
| `@NonNull Context context` | The `Context` the `ContextAware` object is now associated with. |

### peekAvailableContext

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final Context peekAvailableContext()
```

Get the `Context` if it is currently available. If this returns `null`, you can use `addOnContextAvailableListener` to receive a callback for when it available.

| Returns |
| --- |
| `Context` | the Context if it is currently available. |

### removeOnContextAvailableListener

Added in [1.2.0](/jetpack/androidx/releases/activity#1.2.0)

```
public final void removeOnContextAvailableListener(  
    @NonNull OnContextAvailableListener listener  
)
```

Remove a `OnContextAvailableListener` previously added via `addOnContextAvailableListener`.

| Parameters |
| --- |
| `@NonNull OnContextAvailableListener listener` | The listener that should be removed. |

| See also |
| --- |
| `addOnContextAvailableListener` |  |