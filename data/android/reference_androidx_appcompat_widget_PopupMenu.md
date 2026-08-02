# PopupMenu

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/PopupMenu))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/PopupMenu.java+class:androidx.appcompat.widget.PopupMenu)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/PopupMenu "View this page in Kotlin")
|Java

```
public class PopupMenu
```

---

Static library support version of the framework's `android.widget.PopupMenu`. Used to write apps that run on platforms prior to Android 3.0. When running on Android 3.0 or above, this implementation is still used; it does not try to switch to the framework's implementation. See the framework SDK documentation for a class overview.

## Summary

| Nested types |
| --- |
| `public interface PopupMenu.OnDismissListener`  Callback interface used to notify the application that the menu has closed. |
| `public interface PopupMenu.OnMenuItemClickListener`  Interface responsible for receiving menu item click events if the items themselves do not have individual item click listeners. |

| Public constructors |
| --- |
| `PopupMenu(@NonNull Context context, @NonNull View anchor)`  Constructor to create a new popup menu with an anchor view. |
| `PopupMenu(@NonNull Context context, @NonNull View anchor, int gravity)`  Constructor to create a new popup menu with an anchor view and alignment gravity. |
| `PopupMenu(     @NonNull Context context,     @NonNull View anchor,     int gravity,     @AttrRes int popupStyleAttr,     @StyleRes int popupStyleRes )`  Constructor a create a new popup menu with a specific style. |

| Public methods |
| --- |
| `void` | `dismiss()`  Dismiss the menu popup. |
| `@NonNull View.OnTouchListener` | `getDragToOpenListener()`  Returns an `View.OnTouchListener` that can be added to the anchor view to implement drag-to-open behavior. |
| `int` | `getGravity()` |
| `@NonNull Menu` | `getMenu()`  Returns the `Menu` associated with this popup. |
| `@NonNull MenuInflater` | `getMenuInflater()` |
| `void` | `inflate(@MenuRes int menuRes)`  Inflate a menu resource into this PopupMenu. |
| `void` | `setForceShowIcon(boolean forceShowIcon)`  Sets whether the popup menu's adapter is forced to show icons in the menu item views. |
| `void` | `setGravity(int gravity)`  Sets the gravity used to align the popup window to its anchor view. |
| `void` | `setOnDismissListener(@Nullable PopupMenu.OnDismissListener listener)`  Sets a listener that will be notified when this menu is dismissed. |
| `void` | `setOnMenuItemClickListener(     @Nullable PopupMenu.OnMenuItemClickListener listener )`  Sets a listener that will be notified when the user selects an item from the menu. |
| `void` | `show()`  Show the menu popup anchored to the view specified during construction. |

## Public constructors

### PopupMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public PopupMenu(@NonNull Context context, @NonNull View anchor)
```

Constructor to create a new popup menu with an anchor view.

| Parameters |
| --- |
| `@NonNull Context context` | Context the popup menu is running in, through which it can access the current theme, resources, etc. |
| `@NonNull View anchor` | Anchor view for this popup. The popup will appear below the anchor if there is room, or above it if there is not. |

### PopupMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public PopupMenu(@NonNull Context context, @NonNull View anchor, int gravity)
```

Constructor to create a new popup menu with an anchor view and alignment gravity.

| Parameters |
| --- |
| `@NonNull Context context` | Context the popup menu is running in, through which it can access the current theme, resources, etc. |
| `@NonNull View anchor` | Anchor view for this popup. The popup will appear below the anchor if there is room, or above it if there is not. |
| `int gravity` | The `Gravity` value for aligning the popup with its anchor. |

### PopupMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public PopupMenu(  
    @NonNull Context context,  
    @NonNull View anchor,  
    int gravity,  
    @AttrRes int popupStyleAttr,  
    @StyleRes int popupStyleRes  
)
```

Constructor a create a new popup menu with a specific style.

| Parameters |
| --- |
| `@NonNull Context context` | Context the popup menu is running in, through which it can access the current theme, resources, etc. |
| `@NonNull View anchor` | Anchor view for this popup. The popup will appear below the anchor if there is room, or above it if there is not. |
| `int gravity` | The `Gravity` value for aligning the popup with its anchor. |
| `@AttrRes int popupStyleAttr` | An attribute in the current theme that contains a reference to a style resource that supplies default values for the popup window. Can be 0 to not look for defaults. |
| `@StyleRes int popupStyleRes` | A resource identifier of a style resource that supplies default values for the popup window, used only if popupStyleAttr is 0 or can not be found in the theme. Can be 0 to not look for defaults. |

## Public methods

### dismiss

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void dismiss()
```

Dismiss the menu popup.

| See also |
| --- |
| `show` |  |

### getDragToOpenListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull View.OnTouchListener getDragToOpenListener()
```

Returns an `View.OnTouchListener` that can be added to the anchor view to implement drag-to-open behavior.

When the listener is set on a view, touching that view and dragging outside of its bounds will open the popup window. Lifting will select the currently touched list item.

Example usage:

```
PopupMenu myPopup = new PopupMenu(context, myAnchor);
myAnchor.setOnTouchListener(myPopup.getDragToOpenListener());
```

| Returns |
| --- |
| `@NonNull View.OnTouchListener` | a touch listener that controls drag-to-open behavior |

### getGravity

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getGravity()
```

| Returns |
| --- |
| `int` | the gravity used to align the popup window to its anchor view |

| See also |
| --- |
| `setGravity` |  |

### getMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull Menu getMenu()
```

Returns the `Menu` associated with this popup. Populate the returned Menu with items before calling `show`.

| Returns |
| --- |
| `@NonNull Menu` | the `Menu` associated with this popup |

| See also |
| --- |
| `show` |  |
| `getMenuInflater` |  |

### getMenuInflater

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull MenuInflater getMenuInflater()
```

| Returns |
| --- |
| `@NonNull MenuInflater` | a `MenuInflater` that can be used to inflate menu items from XML into the menu returned by `getMenu` |

| See also |
| --- |
| `getMenu` |  |

### inflate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void inflate(@MenuRes int menuRes)
```

Inflate a menu resource into this PopupMenu. This is equivalent to calling `popupMenu.getMenuInflater().inflate(menuRes, popupMenu.getMenu())`.

| Parameters |
| --- |
| `@MenuRes int menuRes` | Menu resource to inflate |

### setForceShowIcon

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
public void setForceShowIcon(boolean forceShowIcon)
```

Sets whether the popup menu's adapter is forced to show icons in the menu item views.

Changes take effect on the next call to show().

| Parameters |
| --- |
| `boolean forceShowIcon` | `true` to force icons to be shown, or `false` for icons to be optionally shown |

### setGravity

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setGravity(int gravity)
```

Sets the gravity used to align the popup window to its anchor view.

If the popup is showing, calling this method will take effect only the next time the popup is shown.

| Parameters |
| --- |
| `int gravity` | the gravity used to align the popup window |

| See also |
| --- |
| `getGravity` |  |

### setOnDismissListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setOnDismissListener(@Nullable PopupMenu.OnDismissListener listener)
```

Sets a listener that will be notified when this menu is dismissed.

| Parameters |
| --- |
| `@Nullable PopupMenu.OnDismissListener listener` | the listener to notify |

### setOnMenuItemClickListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setOnMenuItemClickListener(  
    @Nullable PopupMenu.OnMenuItemClickListener listener  
)
```

Sets a listener that will be notified when the user selects an item from the menu.

| Parameters |
| --- |
| `@Nullable PopupMenu.OnMenuItemClickListener listener` | the listener to notify |

### show

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void show()
```

Show the menu popup anchored to the view specified during construction.

| See also |
| --- |
| `dismiss` |  |
