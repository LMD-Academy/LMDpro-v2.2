# CollapsibleActionView

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/view/CollapsibleActionView))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/view/CollapsibleActionView.java+class:androidx.appcompat.view.CollapsibleActionView)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/appcompat#1.2.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/view/CollapsibleActionView "View this page in Kotlin")
|Java

```
public interface CollapsibleActionView
```

Known direct subclasses

[SearchView](/reference/androidx/appcompat/widget/SearchView)

|  |  |
| --- | --- |
| `SearchView` | A widget that provides a user interface for the user to enter a search query and submit a request to a search provider. |

---

**This interface is deprecated.**  

Use the platform-provided `android.view.CollapsibleActionView` interface.

When a `android.view.View` implements this interface it will receive callbacks when expanded or collapsed as an action view alongside the optional, app-specified callbacks to `androidx.core.view.MenuItemCompat.OnActionExpandListener`.

See `androidx.core.view.MenuItemCompat` for more information about action views. See `android.app.ActionBar` for more information about the action bar.

## Summary

| Public methods |
| --- |
| `abstract void` | `onActionViewCollapsed()`  Called when this view is collapsed as an action view. |
| `abstract void` | `onActionViewExpanded()`  Called when this view is expanded as an action view. |

## Public methods

### onActionViewCollapsed

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/appcompat#1.2.0)

```
abstract void onActionViewCollapsed()
```

Called when this view is collapsed as an action view. See `collapseActionView`.

### onActionViewExpanded

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.2.0](/jetpack/androidx/releases/appcompat#1.2.0)

```
abstract void onActionViewExpanded()
```

Called when this view is expanded as an action view. See `expandActionView`.
