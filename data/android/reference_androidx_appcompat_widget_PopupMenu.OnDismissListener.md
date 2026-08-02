# PopupMenu.OnDismissListener

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/PopupMenu.OnDismissListener))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/PopupMenu.java+class:androidx.appcompat.widget.PopupMenu.OnDismissListener)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/PopupMenu.OnDismissListener "View this page in Kotlin")
|Java

```
public interface PopupMenu.OnDismissListener
```

---

Callback interface used to notify the application that the menu has closed.

## Summary

| Public methods |
| --- |
| `abstract void` | `onDismiss(PopupMenu menu)`  Called when the associated menu has been dismissed. |

## Public methods

### onDismiss

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
abstract void onDismiss(PopupMenu menu)
```

Called when the associated menu has been dismissed.

| Parameters |
| --- |
| `PopupMenu menu` | the popup menu that was dismissed |
