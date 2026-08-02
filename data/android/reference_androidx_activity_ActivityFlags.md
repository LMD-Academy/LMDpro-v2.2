# ActivityFlags

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/ActivityFlags))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ActivityFlags.kt+class:androidx.activity.ActivityFlags)

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

---

[Kotlin](/reference/kotlin/androidx/activity/ActivityFlags "View this page in Kotlin")
|Java

```
@ExperimentalActivityApi  
public static class ActivityFlags
```

---

A collection of runtime feature flags used to guard behavior changes, migrations, or experimental paths within the `androidx.activity` package and its related integrations.

These flags are **mutable** to support temporary toggling, staged rollouts, and regression isolation. They are **not API-stable** and may be changed or removed at any time.

All flags default to values that reflect the intended behavior for current stable releases. If you encounter a regression that can be mitigated by toggling a flag, please file a bug referencing the flag name.

**Usage:**

Flags should be set as early as possible, ideally during application startup, before any Activity or Compose integration code runs. Changing a flag at runtime may lead to inconsistent behavior.

```
class MyApplication : Application() {  
    override fun onCreate() {  
        ActivityFlags.useEnableDisableForOnBackPressedLifecycle = true  
        super.onCreate()  
    }  
}
```

## Summary

| Public fields |
| --- |
| `static @NonNull ActivityFlags` | `INSTANCE` |
| `static final boolean` | `isOnBackPressedLifecycleOrderMaintained`  Toggles how `OnBackPressedDispatcher.addCallback` responds to lifecycle changes. |

## Public fields

### INSTANCE

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

```
public static @NonNull ActivityFlags INSTANCE
```

### isOnBackPressedLifecycleOrderMaintained

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

```
public static final boolean isOnBackPressedLifecycleOrderMaintained
```

Toggles how `OnBackPressedDispatcher.addCallback` responds to lifecycle changes.

When `true` (default), callbacks are **enabled and disabled** in place without being re-added. This preserves handler ordering across lifecycle transitions and improves interoperability with APIs such as `NavigationEventDispatcher` and `BackHandler`.

When `false`, `OnBackPressedDispatcher` uses the legacy behavior of **adding and removing** callbacks as the associated `LifecycleOwner` moves between `Lifecycle.Event.ON_START` and `Lifecycle.Event.ON_STOP`. This can reorder the callback stack when lifecycle transitions occur, which may affect the relative priority of registered handlers.

This flag is intended for testing and migration. It may be removed once the legacy behavior is fully retired.
