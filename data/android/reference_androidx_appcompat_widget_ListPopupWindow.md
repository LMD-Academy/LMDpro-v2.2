# ListPopupWindow

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/ListPopupWindow))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/ListPopupWindow.java+class:androidx.appcompat.widget.ListPopupWindow)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/ListPopupWindow "View this page in Kotlin")
|Java

```
public class ListPopupWindow
```

---

Static library support version of the framework's `android.widget.ListPopupWindow`. Used to write apps that run on platforms prior to Android L. When running on Android L or above, this implementation is still used; it does not try to switch to the framework's implementation. See the framework SDK documentation for a class overview.

| See also |
| --- |
| `ListPopupWindow` |  |

## Summary

| Constants |
| --- |
| `static final int` | `INPUT_METHOD_FROM_FOCUSABLE = 0`  Mode for `setInputMethodMode`: the requirements for the input method should be based on the focusability of the popup. |
| `static final int` | `INPUT_METHOD_NEEDED = 1`  Mode for `setInputMethodMode`: this popup always needs to work with an input method, regardless of whether it is focusable. |
| `static final int` | `INPUT_METHOD_NOT_NEEDED = 2`  Mode for `setInputMethodMode`: this popup never needs to work with an input method, regardless of whether it is focusable. |
| `static final int` | `MATCH_PARENT = -1`  Alias for `MATCH_PARENT`. |
| `static final int` | `POSITION_PROMPT_ABOVE = 0`  The provided prompt view should appear above list content. |
| `static final int` | `POSITION_PROMPT_BELOW = 1`  The provided prompt view should appear below list content. |
| `static final int` | `WRAP_CONTENT = -2`  Alias for `WRAP_CONTENT`. |

| Public constructors |
| --- |
| `ListPopupWindow(@NonNull Context context)`  Create a new, empty popup window capable of displaying items from a ListAdapter. |
| `ListPopupWindow(@NonNull Context context, @Nullable AttributeSet attrs)`  Create a new, empty popup window capable of displaying items from a ListAdapter. |
| `ListPopupWindow(     @NonNull Context context,     @Nullable AttributeSet attrs,     @AttrRes int defStyleAttr )`  Create a new, empty popup window capable of displaying items from a ListAdapter. |
| `ListPopupWindow(     @NonNull Context context,     @Nullable AttributeSet attrs,     @AttrRes int defStyleAttr,     @StyleRes int defStyleRes )`  Create a new, empty popup window capable of displaying items from a ListAdapter. |

| Public methods |
| --- |
| `void` | `clearListSelection()`  Clear any current list selection. |
| `View.OnTouchListener` | `createDragToOpenListener(View src)`  Returns an `OnTouchListener` that can be added to the source view to implement drag-to-open behavior. |
| `void` | `dismiss()`  Dismiss the popup window. |
| `@Nullable View` | `getAnchorView()`  Returns the view that will be used to anchor this popup. |
| `@StyleRes int` | `getAnimationStyle()`  Returns the animation style that will be used when the popup window is shown or dismissed. |
| `@Nullable Drawable` | `getBackground()` |
| `@Nullable Rect` | `getEpicenterBounds()`  Return custom anchor-relative bounds of the popup's transition epicenter |
| `int` | `getHeight()` |
| `int` | `getHorizontalOffset()` |
| `int` | `getInputMethodMode()`  Return the current value in `setInputMethodMode`. |
| `@Nullable ListView` | `getListView()` |
| `int` | `getPromptPosition()` |
| `@Nullable Object` | `getSelectedItem()` |
| `long` | `getSelectedItemId()` |
| `int` | `getSelectedItemPosition()` |
| `@Nullable View` | `getSelectedView()` |
| `int` | `getSoftInputMode()`  Returns the current value in `setSoftInputMode`. |
| `int` | `getVerticalOffset()` |
| `int` | `getWidth()` |
| `boolean` | `isInputMethodNotNeeded()` |
| `boolean` | `isModal()`  Returns whether the popup window will be modal when shown. |
| `boolean` | `isShowing()` |
| `boolean` | `onKeyDown(int keyCode, @NonNull KeyEvent event)`  Filter key down events. |
| `boolean` | `onKeyPreIme(int keyCode, @NonNull KeyEvent event)`  Filter pre-IME key events. |
| `boolean` | `onKeyUp(int keyCode, @NonNull KeyEvent event)`  Filter key up events. |
| `boolean` | `performItemClick(int position)`  Perform an item click operation on the specified list adapter position. |
| `void` | `postShow()`  Post a `show` call to the UI thread. |
| `void` | `setAdapter(@Nullable ListAdapter adapter)`  Sets the adapter that provides the data and the views to represent the data in this popup window. |
| `void` | `setAnchorView(@Nullable View anchor)`  Sets the popup's anchor view. |
| `void` | `setAnimationStyle(@StyleRes int animationStyle)`  Set an animation style to use when the popup window is shown or dismissed. |
| `void` | `setBackgroundDrawable(@Nullable Drawable d)`  Sets a drawable to be the background for the popup window. |
| `void` | `setContentWidth(int width)`  Sets the width of the popup window by the size of its content. |
| `void` | `setDropDownGravity(int gravity)`  Set the gravity of the dropdown list. |
| `void` | `setEpicenterBounds(@Nullable Rect bounds)`  Specifies the custom anchor-relative bounds of the popup's transition epicenter. |
| `void` | `setHeight(int height)`  Sets the height of the popup window in pixels. |
| `void` | `setHorizontalOffset(int offset)`  Set the horizontal offset of this popup from its anchor view in pixels. |
| `void` | `setInputMethodMode(int mode)`  Control how the popup operates with an input method: one of `INPUT_METHOD_FROM_FOCUSABLE`, `INPUT_METHOD_NEEDED`, or `INPUT_METHOD_NOT_NEEDED`. |
| `void` | `setListSelector(Drawable selector)`  Sets a drawable to use as the list item selector. |
| `void` | `setModal(boolean modal)`  Set whether this window should be modal when shown. |
| `void` | `setOnDismissListener(@Nullable PopupWindow.OnDismissListener listener)`  Set a listener to receive a callback when the popup is dismissed. |
| `void` | `setOnItemClickListener(     @Nullable AdapterView.OnItemClickListener clickListener )`  Sets a listener to receive events when a list item is clicked. |
| `void` | `setOnItemSelectedListener(     @Nullable AdapterView.OnItemSelectedListener selectedListener )`  Sets a listener to receive events when a list item is selected. |
| `void` | `setPromptPosition(int position)`  Set where the optional prompt view should appear. |
| `void` | `setPromptView(@Nullable View prompt)`  Set a view to act as a user prompt for this popup window. |
| `void` | `setSelection(int position)`  Set the selected position of the list. |
| `void` | `setSoftInputMode(int mode)`  Sets the operating mode for the soft input area. |
| `void` | `setVerticalOffset(int offset)`  Set the vertical offset of this popup from its anchor view in pixels. |
| `void` | `setWidth(int width)`  Sets the width of the popup window in pixels. |
| `void` | `setWindowLayoutType(int layoutType)`  Set the layout type for this popup window. |
| `void` | `show()`  Show the popup list. |

## Constants

### INPUT\_METHOD\_FROM\_FOCUSABLE

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int INPUT_METHOD_FROM_FOCUSABLE = 0
```

Mode for `setInputMethodMode`: the requirements for the input method should be based on the focusability of the popup. That is if it is focusable than it needs to work with the input method, else it doesn't.

### INPUT\_METHOD\_NEEDED

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int INPUT_METHOD_NEEDED = 1
```

Mode for `setInputMethodMode`: this popup always needs to work with an input method, regardless of whether it is focusable. This means that it will always be displayed so that the user can also operate the input method while it is shown.

### INPUT\_METHOD\_NOT\_NEEDED

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int INPUT_METHOD_NOT_NEEDED = 2
```

Mode for `setInputMethodMode`: this popup never needs to work with an input method, regardless of whether it is focusable. This means that it will always be displayed to use as much space on the screen as needed, regardless of whether this covers the input method.

### MATCH\_PARENT

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int MATCH_PARENT = -1
```

Alias for `MATCH_PARENT`. If used to specify a popup width, the popup will match the width of the anchor view. If used to specify a popup height, the popup will fill available space.

### POSITION\_PROMPT\_ABOVE

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int POSITION_PROMPT_ABOVE = 0
```

The provided prompt view should appear above list content.

| See also |
| --- |
| `setPromptPosition` |  |
| `getPromptPosition` |  |
| `setPromptView` |  |

### POSITION\_PROMPT\_BELOW

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int POSITION_PROMPT_BELOW = 1
```

The provided prompt view should appear below list content.

| See also |
| --- |
| `setPromptPosition` |  |
| `getPromptPosition` |  |
| `setPromptView` |  |

### WRAP\_CONTENT

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int WRAP_CONTENT = -2
```

Alias for `WRAP_CONTENT`. If used to specify a popup width, the popup will use the width of its content.

## Public constructors

### ListPopupWindow

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ListPopupWindow(@NonNull Context context)
```

Create a new, empty popup window capable of displaying items from a ListAdapter. Backgrounds should be set using `setBackgroundDrawable`.

| Parameters |
| --- |
| `@NonNull Context context` | Context used for contained views. |

### ListPopupWindow

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ListPopupWindow(@NonNull Context context, @Nullable AttributeSet attrs)
```

Create a new, empty popup window capable of displaying items from a ListAdapter. Backgrounds should be set using `setBackgroundDrawable`.

| Parameters |
| --- |
| `@NonNull Context context` | Context used for contained views. |
| `@Nullable AttributeSet attrs` | Attributes from inflating parent views used to style the popup. |

### ListPopupWindow

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ListPopupWindow(  
    @NonNull Context context,  
    @Nullable AttributeSet attrs,  
    @AttrRes int defStyleAttr  
)
```

Create a new, empty popup window capable of displaying items from a ListAdapter. Backgrounds should be set using `setBackgroundDrawable`.

| Parameters |
| --- |
| `@NonNull Context context` | Context used for contained views. |
| `@Nullable AttributeSet attrs` | Attributes from inflating parent views used to style the popup. |
| `@AttrRes int defStyleAttr` | Default style attribute to use for popup content. |

### ListPopupWindow

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ListPopupWindow(  
    @NonNull Context context,  
    @Nullable AttributeSet attrs,  
    @AttrRes int defStyleAttr,  
    @StyleRes int defStyleRes  
)
```

Create a new, empty popup window capable of displaying items from a ListAdapter. Backgrounds should be set using `setBackgroundDrawable`.

| Parameters |
| --- |
| `@NonNull Context context` | Context used for contained views. |
| `@Nullable AttributeSet attrs` | Attributes from inflating parent views used to style the popup. |
| `@AttrRes int defStyleAttr` | Style attribute to read for default styling of popup content. |
| `@StyleRes int defStyleRes` | Style resource ID to use for default styling of popup content. |

## Public methods

### clearListSelection

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void clearListSelection()
```

Clear any current list selection. Only valid when `isShowing` == `true`.

### createDragToOpenListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public View.OnTouchListener createDragToOpenListener(View src)
```

Returns an `OnTouchListener` that can be added to the source view to implement drag-to-open behavior. Generally, the source view should be the same view that was passed to `setAnchorView`.

When the listener is set on a view, touching that view and dragging outside of its bounds will open the popup window. Lifting will select the currently touched list item.

Example usage:

```
ListPopupWindow myPopup = new ListPopupWindow(context);
myPopup.setAnchor(myAnchor);
OnTouchListener dragListener = myPopup.createDragToOpenListener(myAnchor);
myAnchor.setOnTouchListener(dragListener);
```

| Parameters |
| --- |
| `View src` | the view on which the resulting listener will be set |

| Returns |
| --- |
| `View.OnTouchListener` | a touch listener that controls drag-to-open behavior |

### dismiss

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void dismiss()
```

Dismiss the popup window.

### getAnchorView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable View getAnchorView()
```

Returns the view that will be used to anchor this popup.

| Returns |
| --- |
| `@Nullable View` | The popup's anchor view |

### getAnimationStyle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @StyleRes int getAnimationStyle()
```

Returns the animation style that will be used when the popup window is shown or dismissed.

| Returns |
| --- |
| `@StyleRes int` | Animation style that will be used. |

### getBackground

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable Drawable getBackground()
```

| Returns |
| --- |
| `@Nullable Drawable` | The background drawable for the popup window. |

### getEpicenterBounds

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable Rect getEpicenterBounds()
```

Return custom anchor-relative bounds of the popup's transition epicenter

| Returns |
| --- |
| `@Nullable Rect` | anchor-relative bounds, or @`null` if not set |

| See also |
| --- |
| `setEpicenterBounds` |  |

### getHeight

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getHeight()
```

| Returns |
| --- |
| `int` | The height of the popup window in pixels. |

### getHorizontalOffset

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getHorizontalOffset()
```

| Returns |
| --- |
| `int` | The horizontal offset of the popup from its anchor in pixels. |

### getInputMethodMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getInputMethodMode()
```

Return the current value in `setInputMethodMode`.

| See also |
| --- |
| `setInputMethodMode` |  |

### getListView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable ListView getListView()
```

| Returns |
| --- |
| `@Nullable ListView` | The `ListView` displayed within the popup window. Only valid when `isShowing` == `true`. |

### getPromptPosition

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getPromptPosition()
```

| Returns |
| --- |
| `int` | Where the optional prompt view should appear. |

| See also |
| --- |
| `POSITION_PROMPT_ABOVE` |  |
| `POSITION_PROMPT_BELOW` |  |

### getSelectedItem

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable Object getSelectedItem()
```

| Returns |
| --- |
| `@Nullable Object` | The currently selected item or null if the popup is not showing. |

### getSelectedItemId

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public long getSelectedItemId()
```

| Returns |
| --- |
| `long` | The ID of the currently selected item or `INVALID_ROW_ID` if `isShowing` == `false`. |

| See also |
| --- |
| `getSelectedItemId` |  |

### getSelectedItemPosition

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getSelectedItemPosition()
```

| Returns |
| --- |
| `int` | The position of the currently selected item or `INVALID_POSITION` if `isShowing` == `false`. |

| See also |
| --- |
| `getSelectedItemPosition` |  |

### getSelectedView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable View getSelectedView()
```

| Returns |
| --- |
| `@Nullable View` | The View for the currently selected item or null if `isShowing` == `false`. |

| See also |
| --- |
| `getSelectedView` |  |

### getSoftInputMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getSoftInputMode()
```

Returns the current value in `setSoftInputMode`.

| See also |
| --- |
| `setSoftInputMode` |  |
| `softInputMode` |  |

### getVerticalOffset

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getVerticalOffset()
```

| Returns |
| --- |
| `int` | The vertical offset of the popup from its anchor in pixels. |

### getWidth

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getWidth()
```

| Returns |
| --- |
| `int` | The width of the popup window in pixels. |

### isInputMethodNotNeeded

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isInputMethodNotNeeded()
```

| Returns |
| --- |
| `boolean` | `true` if this popup is configured to assume the user does not need to interact with the IME while it is showing, `false` otherwise. |

### isModal

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isModal()
```

Returns whether the popup window will be modal when shown.

| Returns |
| --- |
| `boolean` | `true` if the popup window will be modal, `false` otherwise. |

### isShowing

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isShowing()
```

| Returns |
| --- |
| `boolean` | `true` if the popup is currently showing, `false` otherwise. |

### onKeyDown

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean onKeyDown(int keyCode, @NonNull KeyEvent event)
```

Filter key down events. By forwarding key down events to this function, views using non-modal ListPopupWindow can have it handle key selection of items.

| Parameters |
| --- |
| `int keyCode` | keyCode param passed to the host view's onKeyDown |
| `@NonNull KeyEvent event` | event param passed to the host view's onKeyDown |

| Returns |
| --- |
| `boolean` | true if the event was handled, false if it was ignored. |

| See also |
| --- |
| `setModal` |  |
| `onKeyUp` |  |

### onKeyPreIme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean onKeyPreIme(int keyCode, @NonNull KeyEvent event)
```

Filter pre-IME key events. By forwarding `onKeyPreIme` events to this function, views using ListPopupWindow can have it dismiss the popup when the back key is pressed.

| Parameters |
| --- |
| `int keyCode` | keyCode param passed to the host view's onKeyPreIme |
| `@NonNull KeyEvent event` | event param passed to the host view's onKeyPreIme |

| Returns |
| --- |
| `boolean` | true if the event was handled, false if it was ignored. |

| See also |
| --- |
| `setModal` |  |

### onKeyUp

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean onKeyUp(int keyCode, @NonNull KeyEvent event)
```

Filter key up events. By forwarding key up events to this function, views using non-modal ListPopupWindow can have it handle key selection of items.

| Parameters |
| --- |
| `int keyCode` | keyCode param passed to the host view's onKeyUp |
| `@NonNull KeyEvent event` | event param passed to the host view's onKeyUp |

| Returns |
| --- |
| `boolean` | true if the event was handled, false if it was ignored. |

| See also |
| --- |
| `setModal` |  |
| `onKeyDown` |  |

### performItemClick

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean performItemClick(int position)
```

Perform an item click operation on the specified list adapter position.

| Parameters |
| --- |
| `int position` | Adapter position for performing the click |

| Returns |
| --- |
| `boolean` | true if the click action could be performed, false if not. (e.g. if the popup was not showing, this method would return false.) |

### postShow

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void postShow()
```

Post a `show` call to the UI thread.

### setAdapter

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setAdapter(@Nullable ListAdapter adapter)
```

Sets the adapter that provides the data and the views to represent the data in this popup window.

| Parameters |
| --- |
| `@Nullable ListAdapter adapter` | The adapter to use to create this window's content. |

### setAnchorView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setAnchorView(@Nullable View anchor)
```

Sets the popup's anchor view. This popup will always be positioned relative to the anchor view when shown.

| Parameters |
| --- |
| `@Nullable View anchor` | The view to use as an anchor. |

### setAnimationStyle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setAnimationStyle(@StyleRes int animationStyle)
```

Set an animation style to use when the popup window is shown or dismissed.

| Parameters |
| --- |
| `@StyleRes int animationStyle` | Animation style to use. |

### setBackgroundDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setBackgroundDrawable(@Nullable Drawable d)
```

Sets a drawable to be the background for the popup window.

| Parameters |
| --- |
| `@Nullable Drawable d` | A drawable to set as the background. |

### setContentWidth

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setContentWidth(int width)
```

Sets the width of the popup window by the size of its content. The final width may be larger to accommodate styled window dressing.

| Parameters |
| --- |
| `int width` | Desired width of content in pixels. |

### setDropDownGravity

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setDropDownGravity(int gravity)
```

Set the gravity of the dropdown list. This is commonly used to set gravity to START or END for alignment with the anchor.

| Parameters |
| --- |
| `int gravity` | Gravity value to use |

### setEpicenterBounds

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setEpicenterBounds(@Nullable Rect bounds)
```

Specifies the custom anchor-relative bounds of the popup's transition epicenter.

| Parameters |
| --- |
| `@Nullable Rect bounds` | anchor-relative bounds or `null` to use default epicenter |

| See also |
| --- |
| `getEpicenterBounds` |  |

### setHeight

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHeight(int height)
```

Sets the height of the popup window in pixels. Can also be `MATCH_PARENT`.

| Parameters |
| --- |
| `int height` | Height of the popup window must be a positive value, `MATCH_PARENT`, or `WRAP_CONTENT`. |

| Throws |
| --- |
| `java.lang.IllegalArgumentException` | if height is set to negative value |

### setHorizontalOffset

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHorizontalOffset(int offset)
```

Set the horizontal offset of this popup from its anchor view in pixels.

| Parameters |
| --- |
| `int offset` | The horizontal offset of the popup from its anchor. |

### setInputMethodMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setInputMethodMode(int mode)
```

Control how the popup operates with an input method: one of `INPUT_METHOD_FROM_FOCUSABLE`, `INPUT_METHOD_NEEDED`, or `INPUT_METHOD_NOT_NEEDED`.

If the popup is showing, calling this method will take effect only the next time the popup is shown or through a manual call to the `show` method.

| See also |
| --- |
| `getInputMethodMode` |  |
| `show` |  |

### setListSelector

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setListSelector(Drawable selector)
```

Sets a drawable to use as the list item selector.

| Parameters |
| --- |
| `Drawable selector` | List selector drawable to use in the popup. |

### setModal

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setModal(boolean modal)
```

Set whether this window should be modal when shown.

If a popup window is modal, it will receive all touch and key input. If the user touches outside the popup window's content area the popup window will be dismissed.

| Parameters |
| --- |
| `boolean modal` | `true` if the popup window should be modal, `false` otherwise. |

### setOnDismissListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setOnDismissListener(@Nullable PopupWindow.OnDismissListener listener)
```

Set a listener to receive a callback when the popup is dismissed.

| Parameters |
| --- |
| `@Nullable PopupWindow.OnDismissListener listener` | Listener that will be notified when the popup is dismissed. |

### setOnItemClickListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setOnItemClickListener(  
    @Nullable AdapterView.OnItemClickListener clickListener  
)
```

Sets a listener to receive events when a list item is clicked.

| Parameters |
| --- |
| `@Nullable AdapterView.OnItemClickListener clickListener` | Listener to register |

| See also |
| --- |
| `setOnItemClickListener` |  |

### setOnItemSelectedListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setOnItemSelectedListener(  
    @Nullable AdapterView.OnItemSelectedListener selectedListener  
)
```

Sets a listener to receive events when a list item is selected.

| Parameters |
| --- |
| `@Nullable AdapterView.OnItemSelectedListener selectedListener` | Listener to register. |

| See also |
| --- |
| `setOnItemSelectedListener` |  |

### setPromptPosition

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setPromptPosition(int position)
```

Set where the optional prompt view should appear. The default is `POSITION_PROMPT_ABOVE`.

| Parameters |
| --- |
| `int position` | A position constant declaring where the prompt should be displayed. |

| See also |
| --- |
| `POSITION_PROMPT_ABOVE` |  |
| `POSITION_PROMPT_BELOW` |  |

### setPromptView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setPromptView(@Nullable View prompt)
```

Set a view to act as a user prompt for this popup window. Where the prompt view will appear is controlled by `setPromptPosition`.

| Parameters |
| --- |
| `@Nullable View prompt` | View to use as an informational prompt. |

### setSelection

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSelection(int position)
```

Set the selected position of the list. Only valid when `isShowing` == `true`.

| Parameters |
| --- |
| `int position` | List position to set as selected. |

### setSoftInputMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSoftInputMode(int mode)
```

Sets the operating mode for the soft input area.

| Parameters |
| --- |
| `int mode` | The desired mode, see `softInputMode` for the full list |

| See also |
| --- |
| `softInputMode` |  |
| `getSoftInputMode` |  |

### setVerticalOffset

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setVerticalOffset(int offset)
```

Set the vertical offset of this popup from its anchor view in pixels.

| Parameters |
| --- |
| `int offset` | The vertical offset of the popup from its anchor. |

### setWidth

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setWidth(int width)
```

Sets the width of the popup window in pixels. Can also be `MATCH_PARENT` or `WRAP_CONTENT`.

| Parameters |
| --- |
| `int width` | Width of the popup window. |

### setWindowLayoutType

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setWindowLayoutType(int layoutType)
```

Set the layout type for this popup window.

See `type` for possible values.

| Parameters |
| --- |
| `int layoutType` | Layout type for this window. |

| See also |
| --- |
| `type` |  |

### show

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void show()
```

Show the popup list. If the list is already showing, this method will recalculate the popup's size and position.
