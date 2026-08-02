# Toolbar.OnMenuItemClickListener

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/Toolbar.OnMenuItemClickListener))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/Toolbar.java+class:androidx.appcompat.widget.Toolbar.OnMenuItemClickListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/Toolbar.OnMenuItemClickListener "View this page in Kotlin")
|Java

```
public interface Toolbar.OnMenuItemClickListener
```

---

Interface responsible for receiving menu item click events if the items themselves do not have individual item click listeners.

## Summary

| Public methods |
| --- |
| `abstract boolean` | `onMenuItemClick(MenuItem item)`  This method will be invoked when a menu item is clicked if the item itself did not already handle the event. |

## Public methods

### onMenuItemClick

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract boolean onMenuItemClick(MenuItem item)
```

This method will be invoked when a menu item is clicked if the item itself did not already handle the event.

| Parameters |
| --- |
| `MenuItem item` | `MenuItem` that was clicked |

| Returns |
| --- |
| `boolean` | `true` if the event was handled, `false` otherwise. |
