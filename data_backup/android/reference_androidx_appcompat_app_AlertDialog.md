--- source: https://developer.android.com/reference/androidx/appcompat/app/AlertDialog ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AlertDialog

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/AlertDialog.java+class:androidx.appcompat.app.AlertDialog)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/AlertDialog "View this page in Kotlin")
|Java

```
public class AlertDialog extends AppCompatDialog implements DialogInterface
```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | |
| ↳ | [android.app.Dialog](https://developer.android.com/reference/android/app/Dialog.html) | | | |
|  | ↳ | [androidx.activity.ComponentDialog](/reference/androidx/activity/ComponentDialog) | | |
|  |  | ↳ | [androidx.appcompat.app.AppCompatDialog](/reference/androidx/appcompat/app/AppCompatDialog) | |
|  |  |  | ↳ | [androidx.appcompat.app.AlertDialog](/reference/androidx/appcompat/app/AlertDialog) |

Known direct subclasses

[MediaRouteControllerDialog](/reference/androidx/mediarouter/app/MediaRouteControllerDialog)

|  |  |
| --- | --- |
| `MediaRouteControllerDialog` | This class implements the route controller dialog for `MediaRouter`. |

---

A subclass of Dialog that can display one, two or three buttons. If you only want to display a String in this dialog box, use the setMessage() method. If you want to display a more complex view, look up the FrameLayout called "custom" and add your view to it:

```
FrameLayout fl = findViewById(android.R.id.custom);
fl.addView(myView, new LayoutParams(MATCH_PARENT, WRAP_CONTENT));
```

The AlertDialog class takes care of automatically setting `android.view.WindowManager.LayoutParams.FLAG_ALT_FOCUSABLE_IM` for you based on whether any views in the dialog return true from `View.onCheckIsTextEditor()`. Generally you want this set for a Dialog without text editors, so that it will be placed on top of the current input method UI. You can modify this behavior by forcing the flag to your desired mode after calling onCreate.

## Summary

| Nested types |
| --- |
| `public class AlertDialog.Builder` |

| Protected constructors |
| --- |
| `AlertDialog(@NonNull Context context)` |
| `AlertDialog(@NonNull Context context, @StyleRes int themeResId)`  Construct an AlertDialog that uses an explicit theme. |
| `AlertDialog(     @NonNull Context context,     boolean cancelable,     @Nullable DialogInterface.OnCancelListener cancelListener )` |

| Public methods |
| --- |
| `Button` | `getButton(int whichButton)`  Gets one of the buttons used in the dialog. |
| `ListView` | `getListView()`  Gets the list view used in the dialog. |
| `boolean` | `onKeyDown(int keyCode, KeyEvent event)` |
| `boolean` | `onKeyUp(int keyCode, KeyEvent event)` |
| `void` | `setButton(     int whichButton,     CharSequence text,     DialogInterface.OnClickListener listener )`  Sets a listener to be invoked when the positive button of the dialog is pressed. |
| `void` | `setButton(int whichButton, CharSequence text, Message msg)`  Sets a message to be sent when a button is pressed. |
| `void` | `setButton(     int whichButton,     CharSequence text,     Drawable icon,     DialogInterface.OnClickListener listener )`  Sets an icon to be displayed along with the button text and a listener to be invoked when the positive button of the dialog is pressed. |
| `void` | `setCustomTitle(View customTitleView)`  This method has no effect if called after `show`. |
| `void` | `setIcon(Drawable icon)`  Set the `Drawable` to be used in the title. |
| `void` | `setIcon(int resId)`  Set resId to 0 if you don't want an icon. |
| `void` | `setIconAttribute(int attrId)`  Sets an icon as supplied by a theme attribute. e.g. android.R.attr.alertDialogIcon |
| `void` | `setMessage(CharSequence message)`  Sets the message to display. |
| `void` | `setTitle(CharSequence title)` |
| `void` | `setView(View view)`  Set the view to display in the dialog. |
| `void` | `setView(     View view,     int viewSpacingLeft,     int viewSpacingTop,     int viewSpacingRight,     int viewSpacingBottom )`  Set the view to display in the dialog, specifying the spacing to appear around that view. |

| Protected methods |
| --- |
| `void` | `onCreate(Bundle savedInstanceState)` |

| Inherited Constants |
| --- |
| From [android.content.DialogInterface](https://developer.android.com/reference/android/content/DialogInterface.html) |  |  | | --- | --- | | `static final int` | `BUTTON1 = -1`  **This field is deprecated.** | | `static final int` | `BUTTON2 = -2`  **This field is deprecated.** | | `static final int` | `BUTTON3 = -3`  **This field is deprecated.** | | `static final int` | `BUTTON_NEGATIVE = -2` | | `static final int` | `BUTTON_NEUTRAL = -3` | | `static final int` | `BUTTON_POSITIVE = -1` | |

| Inherited methods |
| --- |
| From [androidx.appcompat.app.AppCompatDialog](/reference/androidx/appcompat/app/AppCompatDialog) |  |  | | --- | --- | | `void` | `addContentView(@NonNull View view, ViewGroup.LayoutParams params)` | | `void` | `dismiss()` | | `boolean` | `dispatchKeyEvent(KeyEvent event)` | | `@Nullable T` | `<T extends View> findViewById(@IdRes int id)` | | `@NonNull AppCompatDelegate` | `getDelegate()` | | `ActionBar` | `getSupportActionBar()`  Support library version of `getActionBar`. | | `void` | `onStop()` | | `void` | `onSupportActionModeFinished(ActionMode mode)`  Called when a support action mode has finished. | | `void` | `onSupportActionModeStarted(ActionMode mode)`  Called when a support action mode has been started. | | `@Nullable ActionMode` | `onWindowStartingSupportActionMode(ActionMode.Callback callback)`  Called when a support action mode is being started for this window. | | `void` | `setContentView(@LayoutRes int layoutResID)` | | `void` | `setContentView(@NonNull View view)` | | `void` | `setContentView(@NonNull View view, ViewGroup.LayoutParams params)` | | `void` | `setTitle(int titleId)` | | `boolean` | `supportRequestWindowFeature(int featureId)`  Enable extended support library window features. | |
| From [androidx.activity.ComponentDialog](/reference/androidx/activity/ComponentDialog) |  |  | | --- | --- | | `void` | `addContentView(View view, ViewGroup.LayoutParams params)` | | `Lifecycle` | `getLifecycle()`  Returns the Lifecycle of the provider. | | `NavigationEventDispatcher` | `getNavigationEventDispatcher()`  Lazily provides a `NavigationEventDispatcher` for back navigation handling, including support for predictive back gestures introduced in Android 13 (API 33+). | | `final OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  Retrieve the `OnBackPressedDispatcher` that will be triggered when `onBackPressed` is called. | | `SavedStateRegistry` | `getSavedStateRegistry()`  The `SavedStateRegistry` owned by this SavedStateRegistryOwner | | `void` | `initializeViewTreeOwners()`  Sets the view tree owners before setting the content view so that the inflation process and attach listeners will see them already present. | | `void` | `onBackPressed()`  **This method is deprecated.** | | `void` | `onCreate(Bundle savedInstanceState)` | | `Bundle` | `onSaveInstanceState()` | | `void` | `onStart()` | | `void` | `onStop()` | | `void` | `setContentView(int layoutResID)` | |
| From [android.app.Dialog](https://developer.android.com/reference/android/app/Dialog.html) |  |  | | --- | --- | | `void` | `addContentView(View view, ViewGroup.LayoutParams params)` | | `void` | `closeOptionsMenu()` | | `void` | `create()` | | `boolean` | `dispatchGenericMotionEvent(MotionEvent ev)` | | `boolean` | `dispatchKeyEvent(KeyEvent event)` | | `boolean` | `dispatchKeyShortcutEvent(KeyEvent event)` | | `boolean` | `dispatchPopulateAccessibilityEvent(AccessibilityEvent event)` | | `boolean` | `dispatchTouchEvent(MotionEvent ev)` | | `boolean` | `dispatchTrackballEvent(MotionEvent ev)` | | `T` | `<T extends View> findViewById(int id)` | | `ActionBar` | `getActionBar()` | | `final Context` | `getContext()` | | `View` | `getCurrentFocus()` | | `LayoutInflater` | `getLayoutInflater()` | | `OnBackInvokedDispatcher` | `getOnBackInvokedDispatcher()` | | `final Activity` | `getOwnerActivity()` | | `final SearchEvent` | `getSearchEvent()` | | `final int` | `getVolumeControlStream()` | | `Window` | `getWindow()` | | `void` | `hide()` | | `void` | `invalidateOptionsMenu()` | | `boolean` | `isShowing()` | | `void` | `onActionModeFinished(ActionMode mode)` | | `void` | `onActionModeStarted(ActionMode mode)` | | `void` | `onAttachedToWindow()` | | `void` | `onBackPressed()`  **This method is deprecated.** | | `void` | `onContentChanged()` | | `boolean` | `onContextItemSelected(MenuItem item)` | | `void` | `onContextMenuClosed(Menu menu)` | | `void` | `onCreate(Bundle savedInstanceState)` | | `void` | `onCreateContextMenu(     ContextMenu menu,     View v,     ContextMenu.ContextMenuInfo menuInfo )` | | `boolean` | `onCreateOptionsMenu(Menu menu)` | | `boolean` | `onCreatePanelMenu(int featureId, Menu menu)` | | `View` | `onCreatePanelView(int featureId)` | | `void` | `onDetachedFromWindow()` | | `boolean` | `onGenericMotionEvent(MotionEvent event)` | | `boolean` | `onKeyLongPress(int keyCode, KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, KeyEvent event)` | | `boolean` | `onKeyShortcut(int keyCode, KeyEvent event)` | | `boolean` | `onMenuItemSelected(int featureId, MenuItem item)` | | `boolean` | `onMenuOpened(int featureId, Menu menu)` | | `boolean` | `onOptionsItemSelected(MenuItem item)` | | `void` | `onOptionsMenuClosed(Menu menu)` | | `void` | `onPanelClosed(int featureId, Menu menu)` | | `boolean` | `onPrepareOptionsMenu(Menu menu)` | | `boolean` | `onPreparePanel(int featureId, View view, Menu menu)` | | `void` | `onRestoreInstanceState(Bundle savedInstanceState)` | | `Bundle` | `onSaveInstanceState()` | | `boolean` | `onSearchRequested()` | | `void` | `onStart()` | | `void` | `onStop()` | | `boolean` | `onTouchEvent(MotionEvent event)` | | `boolean` | `onTrackballEvent(MotionEvent event)` | | `void` | `onWindowAttributesChanged(WindowManager.LayoutParams params)` | | `void` | `onWindowFocusChanged(boolean hasFocus)` | | `ActionMode` | `onWindowStartingActionMode(ActionMode.Callback callback)` | | `void` | `openContextMenu(View view)` | | `void` | `openOptionsMenu()` | | `void` | `registerForContextMenu(View view)` | | `final boolean` | `requestWindowFeature(int featureId)` | | `final T` | `<T extends View> requireViewById(int id)` | | `void` | `setCancelMessage(Message msg)` | | `void` | `setCancelable(boolean flag)` | | `void` | `setCanceledOnTouchOutside(boolean cancel)` | | `void` | `setContentView(View view)` | | `void` | `setDismissMessage(Message msg)` | | `final void` | `setFeatureDrawable(int featureId, Drawable drawable)` | | `final void` | `setFeatureDrawableAlpha(int featureId, int alpha)` | | `final void` | `setFeatureDrawableResource(int featureId, int resId)` | | `final void` | `setFeatureDrawableUri(int featureId, Uri uri)` | | `void` | `setOnCancelListener(DialogInterface.OnCancelListener listener)` | | `void` | `setOnDismissListener(DialogInterface.OnDismissListener listener)` | | `void` | `setOnKeyListener(DialogInterface.OnKeyListener onKeyListener)` | | `void` | `setOnShowListener(DialogInterface.OnShowListener listener)` | | `final void` | `setOwnerActivity(Activity activity)` | | `void` | `setTitle(int titleId)` | | `final void` | `setVolumeControlStream(int streamType)` | | `void` | `show()` | | `void` | `takeKeyEvents(boolean get)` | | `void` | `unregisterForContextMenu(View view)` | |
| From [android.content.DialogInterface](https://developer.android.com/reference/android/content/DialogInterface.html) |  |  | | --- | --- | | `abstract void` | `cancel()` | | `abstract void` | `dismiss()` | |
| From [androidx.lifecycle.LifecycleOwner](/reference/androidx/lifecycle/LifecycleOwner) |  |  | | --- | --- | | `abstract Lifecycle` | `getLifecycle()`  Returns the Lifecycle of the provider. | |
| From [androidx.navigationevent.NavigationEventDispatcherOwner](/reference/androidx/navigationevent/NavigationEventDispatcherOwner) |  |  | | --- | --- | | `abstract NavigationEventDispatcher` | `getNavigationEventDispatcher()`  The `NavigationEventDispatcher` that should handle the navigation events. | |
| From [androidx.activity.OnBackPressedDispatcherOwner](/reference/androidx/activity/OnBackPressedDispatcherOwner) |  |  | | --- | --- | | `abstract OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  The `OnBackPressedDispatcher` that should handle the system back button. | |
| From [androidx.savedstate.SavedStateRegistryOwner](/reference/androidx/savedstate/SavedStateRegistryOwner) |  |  | | --- | --- | | `abstract SavedStateRegistry` | `getSavedStateRegistry()`  The `SavedStateRegistry` owned by this SavedStateRegistryOwner | |
| From [android.view.Window.Callback](https://developer.android.com/reference/android/view/Window.Callback.html) |  |  | | --- | --- | | `void` | `onPointerCaptureChanged(boolean hasCapture)` | | `void` | `onProvideKeyboardShortcuts(     List<KeyboardShortcutGroup> data,     Menu menu,     int deviceId )` | |

## Protected constructors

### AlertDialog

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected AlertDialog(@NonNull Context context)
```

### AlertDialog

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected AlertDialog(@NonNull Context context, @StyleRes int themeResId)
```

Construct an AlertDialog that uses an explicit theme. The actual style that an AlertDialog uses is a private implementation, however you can here supply either the name of an attribute in the theme from which to get the dialog's style (such as `alertDialogTheme`.

### AlertDialog

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected AlertDialog(  
    @NonNull Context context,  
    boolean cancelable,  
    @Nullable DialogInterface.OnCancelListener cancelListener  
)
```

## Public methods

### getButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Button getButton(int whichButton)
```

Gets one of the buttons used in the dialog. Returns null if the specified button does not exist or the dialog has not yet been fully created (for example, via `show` or `create`).

| Parameters |
| --- |
| `int whichButton` | The identifier of the button that should be returned. For example, this can be `BUTTON_POSITIVE`. |

| Returns |
| --- |
| `Button` | The button from the dialog, or null if a button does not exist. |

### getListView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ListView getListView()
```

Gets the list view used in the dialog.

| Returns |
| --- |
| `ListView` | The `ListView` from the dialog. |

### onKeyDown

```
public boolean onKeyDown(int keyCode, KeyEvent event)
```

### onKeyUp

```
public boolean onKeyUp(int keyCode, KeyEvent event)
```

### setButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setButton(  
    int whichButton,  
    CharSequence text,  
    DialogInterface.OnClickListener listener  
)
```

Sets a listener to be invoked when the positive button of the dialog is pressed. This method has no effect if called after `show`.

| Parameters |
| --- |
| `int whichButton` | Which button to set the listener on, can be one of `BUTTON_POSITIVE`, `BUTTON_NEGATIVE`, or `BUTTON_NEUTRAL` |
| `CharSequence text` | The text to display in positive button. |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

### setButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setButton(int whichButton, CharSequence text, Message msg)
```

Sets a message to be sent when a button is pressed. This method has no effect if called after `show`.

| Parameters |
| --- |
| `int whichButton` | Which button to set the message for, can be one of `BUTTON_POSITIVE`, `BUTTON_NEGATIVE`, or `BUTTON_NEUTRAL` |
| `CharSequence text` | The text to display in positive button. |
| `Message msg` | The `Message` to be sent when clicked. |

### setButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setButton(  
    int whichButton,  
    CharSequence text,  
    Drawable icon,  
    DialogInterface.OnClickListener listener  
)
```

Sets an icon to be displayed along with the button text and a listener to be invoked when the positive button of the dialog is pressed. This method has no effect if called after `show`.

| Parameters |
| --- |
| `int whichButton` | Which button to set the listener on, can be one of `BUTTON_POSITIVE`, `BUTTON_NEGATIVE`, or `BUTTON_NEUTRAL` |
| `CharSequence text` | The text to display in positive button. |
| `Drawable icon` | The `Drawable` to be set as an icon for the button. |
| `DialogInterface.OnClickListener listener` | The `DialogInterface.OnClickListener` to use. |

### setCustomTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setCustomTitle(View customTitleView)
```

This method has no effect if called after `show`.

| See also |
| --- |
| `setCustomTitle` |  |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setIcon(Drawable icon)
```

Set the `Drawable` to be used in the title.

| Parameters |
| --- |
| `Drawable icon` | Drawable to use as the icon or null if you don't want an icon. |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setIcon(int resId)
```

Set resId to 0 if you don't want an icon.

| Parameters |
| --- |
| `int resId` | the resourceId of the drawable to use as the icon or 0 if you don't want an icon. |

### setIconAttribute

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setIconAttribute(int attrId)
```

Sets an icon as supplied by a theme attribute. e.g. android.R.attr.alertDialogIcon

| Parameters |
| --- |
| `int attrId` | ID of a theme attribute that points to a drawable resource. |

### setMessage

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setMessage(CharSequence message)
```

Sets the message to display.

| Parameters |
| --- |
| `CharSequence message` | The message to display in the dialog. |

### setTitle

```
public void setTitle(CharSequence title)
```

### setView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setView(View view)
```

Set the view to display in the dialog. This method has no effect if called after `show`.

### setView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setView(  
    View view,  
    int viewSpacingLeft,  
    int viewSpacingTop,  
    int viewSpacingRight,  
    int viewSpacingBottom  
)
```

Set the view to display in the dialog, specifying the spacing to appear around that view. This method has no effect if called after `show`.

| Parameters |
| --- |
| `View view` | The view to show in the content area of the dialog |
| `int viewSpacingLeft` | Extra space to appear to the left of `view` |
| `int viewSpacingTop` | Extra space to appear above `view` |
| `int viewSpacingRight` | Extra space to appear to the right of `view` |
| `int viewSpacingBottom` | Extra space to appear below `view` |

## Protected methods

### onCreate

```
protected void onCreate(Bundle savedInstanceState)
```