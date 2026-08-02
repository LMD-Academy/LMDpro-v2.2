# OnBackPressedDispatcherKt

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/OnBackPressedDispatcherKt))

Added in 1.7.0

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

```
public final class OnBackPressedDispatcherKt
```

---

## Summary

| Public methods |
| --- |
| `static final @NonNull OnBackPressedCallback` | `addCallback(     @NonNull OnBackPressedDispatcher receiver,     LifecycleOwner owner,     boolean enabled,     @NonNull Function1<@NonNull OnBackPressedCallback, Unit> onBackPressed )`  Creates and registers a new `OnBackPressedCallback` that invokes `onBackPressed`. |

## Public methods

### addCallback

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/OnBackPressedDispatcher.kt+function:addCallback)

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public static final @NonNull OnBackPressedCallback addCallback(  
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
