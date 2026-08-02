--- source: https://developer.android.com/reference/androidx/appcompat/app/AppCompatCallback ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppCompatCallback

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/AppCompatCallback.java+class:androidx.appcompat.app.AppCompatCallback)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/AppCompatCallback "View this page in Kotlin")
|Java

```
public interface AppCompatCallback
```

Known direct subclasses

[AppCompatActivity](/reference/androidx/appcompat/app/AppCompatActivity), [AppCompatDialog](/reference/androidx/appcompat/app/AppCompatDialog)

|  |  |
| --- | --- |
| `AppCompatActivity` | Base class for activities that wish to use some of the newer platform features on older Android devices. |
| `AppCompatDialog` | Base class for AppCompat themed `android.app.Dialog`s. |

Known indirect subclasses

[AlertDialog](/reference/androidx/appcompat/app/AlertDialog), [MediaRouteChooserDialog](/reference/androidx/mediarouter/app/MediaRouteChooserDialog), [MediaRouteControllerDialog](/reference/androidx/mediarouter/app/MediaRouteControllerDialog)

|  |  |
| --- | --- |
| `AlertDialog` | A subclass of Dialog that can display one, two or three buttons. |
| `MediaRouteChooserDialog` | This class implements the route chooser dialog for `MediaRouter`. |
| `MediaRouteControllerDialog` | This class implements the route controller dialog for `MediaRouter`. |

---

Implemented this in order for AppCompat to be able to callback in certain situations.

This should be provided to `create`.

## Summary

| Public methods |
| --- |
| `abstract void` | `onSupportActionModeFinished(ActionMode mode)`  Called when a support action mode has finished. |
| `abstract void` | `onSupportActionModeStarted(ActionMode mode)`  Called when a support action mode has been started. |
| `abstract @Nullable ActionMode` | `onWindowStartingSupportActionMode(ActionMode.Callback callback)`  Called when a support action mode is being started for this window. |

## Public methods

### onSupportActionModeFinished

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onSupportActionModeFinished(ActionMode mode)
```

Called when a support action mode has finished.

| Parameters |
| --- |
| `ActionMode mode` | The action mode that just finished. |

### onSupportActionModeStarted

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onSupportActionModeStarted(ActionMode mode)
```

Called when a support action mode has been started.

| Parameters |
| --- |
| `ActionMode mode` | The new action mode. |

### onWindowStartingSupportActionMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract @Nullable ActionMode onWindowStartingSupportActionMode(ActionMode.Callback callback)
```

Called when a support action mode is being started for this window. Gives the callback an opportunity to handle the action mode in its own unique and beautiful way. If this method returns null the system can choose a way to present the mode or choose not to start the mode at all.

| Parameters |
| --- |
| `ActionMode.Callback callback` | Callback to control the lifecycle of this action mode |

| Returns |
| --- |
| `@Nullable ActionMode` | The ActionMode that was started, or null if the system should present it |