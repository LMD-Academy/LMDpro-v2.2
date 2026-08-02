# ActionBar.OnNavigationListener

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/app/ActionBar.OnNavigationListener))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBar.java+class:androidx.appcompat.app.ActionBar.OnNavigationListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBar.OnNavigationListener "View this page in Kotlin")
|Java

```
public interface ActionBar.OnNavigationListener
```

---

**This interface is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Listener interface for ActionBar navigation events.

## Summary

| Public methods |
| --- |
| `abstract boolean` | `onNavigationItemSelected(int itemPosition, long itemId)`  This method is called whenever a navigation item in your action bar is selected. |

## Public methods

### onNavigationItemSelected

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onNavigationItemSelected(int itemPosition, long itemId)
```

This method is called whenever a navigation item in your action bar is selected.

| Parameters |
| --- |
| `int itemPosition` | Position of the item clicked. |
| `long itemId` | ID of the item clicked. |

| Returns |
| --- |
| `boolean` | True if the event was handled, false otherwise. |
