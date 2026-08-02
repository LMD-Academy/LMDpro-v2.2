--- source: https://developer.android.com/reference/androidx/appcompat/app/ActionBar.OnMenuVisibilityListener ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionBar.OnMenuVisibilityListener

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBar.java+class:androidx.appcompat.app.ActionBar.OnMenuVisibilityListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBar.OnMenuVisibilityListener "View this page in Kotlin")
|Java

```
public interface ActionBar.OnMenuVisibilityListener
```

---

Listener for receiving events when action bar menus are shown or hidden.

## Summary

| Public methods |
| --- |
| `abstract void` | `onMenuVisibilityChanged(boolean isVisible)`  Called when an action bar menu is shown or hidden. |

## Public methods

### onMenuVisibilityChanged

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onMenuVisibilityChanged(boolean isVisible)
```

Called when an action bar menu is shown or hidden. Applications may want to use this to tune auto-hiding behavior for the action bar or pause/resume video playback, gameplay, or other activity within the main content area.

| Parameters |
| --- |
| `boolean isVisible` | True if an action bar menu is now visible, false if no action bar menus are visible. |