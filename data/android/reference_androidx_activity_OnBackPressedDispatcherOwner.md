# OnBackPressedDispatcherOwner

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/OnBackPressedDispatcherOwner))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/OnBackPressedDispatcherOwner.kt+class:androidx.activity.OnBackPressedDispatcherOwner)

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/activity/OnBackPressedDispatcherOwner "View this page in Kotlin")
|Java

```
public interface OnBackPressedDispatcherOwner extends LifecycleOwner
```

Known direct subclasses

[ComponentActivity](/reference/androidx/activity/ComponentActivity), [ComponentDialog](/reference/androidx/activity/ComponentDialog)

|  |  |
| --- | --- |
| `ComponentActivity` | Base class for activities that enables composition of higher level components. |
| `ComponentDialog` | Base class for dialogs that enables composition of higher level components. |

Known indirect subclasses

[AlertDialog](/reference/androidx/appcompat/app/AlertDialog), [AppCompatActivity](/reference/androidx/appcompat/app/AppCompatActivity), [AppCompatDialog](/reference/androidx/appcompat/app/AppCompatDialog), [BaseCarAppActivity](/reference/androidx/car/app/activity/BaseCarAppActivity), [CarAppActivity](/reference/androidx/car/app/activity/CarAppActivity), [FragmentActivity](/reference/androidx/fragment/app/FragmentActivity), [LauncherActivity](/reference/androidx/car/app/activity/LauncherActivity), [MediaRouteChooserDialog](/reference/androidx/mediarouter/app/MediaRouteChooserDialog), [MediaRouteControllerDialog](/reference/androidx/mediarouter/app/MediaRouteControllerDialog)

|  |  |
| --- | --- |
| `AlertDialog` | A subclass of Dialog that can display one, two or three buttons. |
| `AppCompatActivity` | Base class for activities that wish to use some of the newer platform features on older Android devices. |
| `AppCompatDialog` | Base class for AppCompat themed `android.app.Dialog`s. |
| `BaseCarAppActivity` | Core logic for CarAppLibrary Activity interaction with a host. |
| `CarAppActivity` | The class representing a car app activity in the main display. |
| `FragmentActivity` | Base class for activities that want to use the support-based `Fragments`. |
| `LauncherActivity` | This class handles providing the right launcher activity when running native applications and Car App Library applications. |
| `MediaRouteChooserDialog` | This class implements the route chooser dialog for `MediaRouter`. |
| `MediaRouteControllerDialog` | This class implements the route controller dialog for `MediaRouter`. |

---

A class that has an `OnBackPressedDispatcher` that allows you to register a `OnBackPressedCallback` for handling the system back button.

It is expected that classes that implement this interface route the system back button to the dispatcher

| See also |
| --- |
| `OnBackPressedDispatcher` |  |

## Summary

| Public methods |
| --- |
| `abstract @NonNull OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  The `OnBackPressedDispatcher` that should handle the system back button. |

| Inherited methods |
| --- |
| From [androidx.lifecycle.LifecycleOwner](/reference/androidx/lifecycle/LifecycleOwner) |  |  | | --- | --- | | `abstract @NonNull Lifecycle` | `getLifecycle()` | |

## Public methods

### getOnBackPressedDispatcher

Added in [1.0.0](/jetpack/androidx/releases/activity#1.0.0)

```
abstract @NonNull OnBackPressedDispatcher getOnBackPressedDispatcher()
```

The `OnBackPressedDispatcher` that should handle the system back button.
