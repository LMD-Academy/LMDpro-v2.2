--- source: https://developer.android.com/reference/androidx/appcompat/view/ActionMode.Callback ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionMode.Callback

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/view/ActionMode.java+class:androidx.appcompat.view.ActionMode.Callback)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/view/ActionMode.Callback "View this page in Kotlin")
|Java

```
public interface ActionMode.Callback
```

---

Callback interface for action modes. Supplied to `startSupportActionMode` (Callback)}, a Callback configures and handles events raised by a user's interaction with an action mode.

An action mode's lifecycle is as follows:

* `onCreateActionMode` once on initial creation
* `onPrepareActionMode` after creation and any time the `ActionMode` is invalidated
* `onActionItemClicked` any time a contextual action button is clicked
* `onDestroyActionMode` when the action mode is closed

## Summary

| Public methods |
| --- |
| `abstract boolean` | `onActionItemClicked(ActionMode mode, MenuItem item)`  Called to report a user click on an action button. |
| `abstract boolean` | `onCreateActionMode(ActionMode mode, Menu menu)`  Called when action mode is first created. |
| `abstract void` | `onDestroyActionMode(ActionMode mode)`  Called when an action mode is about to be exited and destroyed. |
| `abstract boolean` | `onPrepareActionMode(ActionMode mode, Menu menu)`  Called to refresh an action mode's action menu whenever it is invalidated. |

## Public methods

### onActionItemClicked

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onActionItemClicked(ActionMode mode, MenuItem item)
```

Called to report a user click on an action button.

| Parameters |
| --- |
| `ActionMode mode` | The current ActionMode |
| `MenuItem item` | The item that was clicked |

| Returns |
| --- |
| `boolean` | true if this callback handled the event, false if the standard MenuItem invocation should continue. |

### onCreateActionMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onCreateActionMode(ActionMode mode, Menu menu)
```

Called when action mode is first created. The menu supplied will be used to generate action buttons for the action mode.

| Parameters |
| --- |
| `ActionMode mode` | ActionMode being created |
| `Menu menu` | Menu used to populate action buttons |

| Returns |
| --- |
| `boolean` | true if the action mode should be created, false if entering this mode should be aborted. |

### onDestroyActionMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onDestroyActionMode(ActionMode mode)
```

Called when an action mode is about to be exited and destroyed.

| Parameters |
| --- |
| `ActionMode mode` | The current ActionMode being destroyed |

### onPrepareActionMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onPrepareActionMode(ActionMode mode, Menu menu)
```

Called to refresh an action mode's action menu whenever it is invalidated.

| Parameters |
| --- |
| `ActionMode mode` | ActionMode being prepared |
| `Menu menu` | Menu used to populate action buttons |

| Returns |
| --- |
| `boolean` | true if the menu or action mode was updated, false otherwise. |