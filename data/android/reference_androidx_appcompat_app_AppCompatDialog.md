# AppCompatDialog

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/app/AppCompatDialog))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/AppCompatDialog.java+class:androidx.appcompat.app.AppCompatDialog)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/AppCompatDialog "View this page in Kotlin")
|Java

```
public class AppCompatDialog extends ComponentDialog implements AppCompatCallback
```

|  |  |  |  |
| --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | |
| ↳ | [android.app.Dialog](https://developer.android.com/reference/android/app/Dialog.html) | | |
|  | ↳ | [androidx.activity.ComponentDialog](/reference/androidx/activity/ComponentDialog) | |
|  |  | ↳ | [androidx.appcompat.app.AppCompatDialog](/reference/androidx/appcompat/app/AppCompatDialog) |

Known direct subclasses

[AlertDialog](/reference/androidx/appcompat/app/AlertDialog), [MediaRouteChooserDialog](/reference/androidx/mediarouter/app/MediaRouteChooserDialog)

|  |  |
| --- | --- |
| `AlertDialog` | A subclass of Dialog that can display one, two or three buttons. |
| `MediaRouteChooserDialog` | This class implements the route chooser dialog for `MediaRouter`. |

Known indirect subclasses

[MediaRouteControllerDialog](/reference/androidx/mediarouter/app/MediaRouteControllerDialog)

|  |  |
| --- | --- |
| `MediaRouteControllerDialog` | This class implements the route controller dialog for `MediaRouter`. |

---

Base class for AppCompat themed `android.app.Dialog`s.

## Summary

| Public constructors |
| --- |
| `AppCompatDialog(@NonNull Context context)` |
| `AppCompatDialog(@NonNull Context context, int theme)` |

| Protected constructors |
| --- |
| `AppCompatDialog(     @NonNull Context context,     boolean cancelable,     @Nullable DialogInterface.OnCancelListener cancelListener )` |

| Public methods |
| --- |
| `void` | `addContentView(@NonNull View view, ViewGroup.LayoutParams params)` |
| `void` | `dismiss()` |
| `boolean` | `dispatchKeyEvent(KeyEvent event)` |
| `@Nullable T` | `<T extends View> findViewById(@IdRes int id)` |
| `@NonNull AppCompatDelegate` | `getDelegate()` |
| `ActionBar` | `getSupportActionBar()`  Support library version of `getActionBar`. |
| `void` | `onSupportActionModeFinished(ActionMode mode)`  Called when a support action mode has finished. |
| `void` | `onSupportActionModeStarted(ActionMode mode)`  Called when a support action mode has been started. |
| `@Nullable ActionMode` | `onWindowStartingSupportActionMode(ActionMode.Callback callback)`  Called when a support action mode is being started for this window. |
| `void` | `setContentView(@LayoutRes int layoutResID)` |
| `void` | `setContentView(@NonNull View view)` |
| `void` | `setContentView(@NonNull View view, ViewGroup.LayoutParams params)` |
| `void` | `setTitle(CharSequence title)` |
| `void` | `setTitle(int titleId)` |
| `boolean` | `supportRequestWindowFeature(int featureId)`  Enable extended support library window features. |

| Protected methods |
| --- |
| `void` | `onCreate(Bundle savedInstanceState)` |
| `void` | `onStop()` |

| Inherited Constants |
| --- |
| From [android.content.DialogInterface](https://developer.android.com/reference/android/content/DialogInterface.html) |  |  | | --- | --- | | `static final int` | `BUTTON1 = -1`  **This field is deprecated.** | | `static final int` | `BUTTON2 = -2`  **This field is deprecated.** | | `static final int` | `BUTTON3 = -3`  **This field is deprecated.** | | `static final int` | `BUTTON_NEGATIVE = -2` | | `static final int` | `BUTTON_NEUTRAL = -3` | | `static final int` | `BUTTON_POSITIVE = -1` | |

| Inherited methods |
| --- |
| From [androidx.activity.ComponentDialog](/reference/androidx/activity/ComponentDialog) |  |  | | --- | --- | | `Lifecycle` | `getLifecycle()`  Returns the Lifecycle of the provider. | | `NavigationEventDispatcher` | `getNavigationEventDispatcher()`  Lazily provides a `NavigationEventDispatcher` for back navigation handling, including support for predictive back gestures introduced in Android 13 (API 33+). | | `final OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  Retrieve the `OnBackPressedDispatcher` that will be triggered when `onBackPressed` is called. | | `SavedStateRegistry` | `getSavedStateRegistry()`  The `SavedStateRegistry` owned by this SavedStateRegistryOwner | | `void` | `initializeViewTreeOwners()`  Sets the view tree owners before setting the content view so that the inflation process and attach listeners will see them already present. | | `void` | `onBackPressed()`  **This method is deprecated.** | | `Bundle` | `onSaveInstanceState()` | | `void` | `onStart()` | |
| From [android.app.Dialog](https://developer.android.com/reference/android/app/Dialog.html) |  |  | | --- | --- | | `void` | `addContentView(View view, ViewGroup.LayoutParams params)` | | `void` | `cancel()` | | `void` | `closeOptionsMenu()` | | `void` | `create()` | | `boolean` | `dispatchGenericMotionEvent(MotionEvent ev)` | | `boolean` | `dispatchKeyShortcutEvent(KeyEvent event)` | | `boolean` | `dispatchPopulateAccessibilityEvent(AccessibilityEvent event)` | | `boolean` | `dispatchTouchEvent(MotionEvent ev)` | | `boolean` | `dispatchTrackballEvent(MotionEvent ev)` | | `ActionBar` | `getActionBar()` | | `final Context` | `getContext()` | | `View` | `getCurrentFocus()` | | `LayoutInflater` | `getLayoutInflater()` | | `OnBackInvokedDispatcher` | `getOnBackInvokedDispatcher()` | | `final Activity` | `getOwnerActivity()` | | `final SearchEvent` | `getSearchEvent()` | | `final int` | `getVolumeControlStream()` | | `Window` | `getWindow()` | | `void` | `hide()` | | `boolean` | `isShowing()` | | `void` | `onActionModeFinished(ActionMode mode)` | | `void` | `onActionModeStarted(ActionMode mode)` | | `void` | `onAttachedToWindow()` | | `void` | `onBackPressed()`  **This method is deprecated.** | | `void` | `onContentChanged()` | | `boolean` | `onContextItemSelected(MenuItem item)` | | `void` | `onContextMenuClosed(Menu menu)` | | `void` | `onCreate(Bundle savedInstanceState)` | | `void` | `onCreateContextMenu(     ContextMenu menu,     View v,     ContextMenu.ContextMenuInfo menuInfo )` | | `boolean` | `onCreateOptionsMenu(Menu menu)` | | `boolean` | `onCreatePanelMenu(int featureId, Menu menu)` | | `View` | `onCreatePanelView(int featureId)` | | `void` | `onDetachedFromWindow()` | | `boolean` | `onGenericMotionEvent(MotionEvent event)` | | `boolean` | `onKeyDown(int keyCode, KeyEvent event)` | | `boolean` | `onKeyLongPress(int keyCode, KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, KeyEvent event)` | | `boolean` | `onKeyShortcut(int keyCode, KeyEvent event)` | | `boolean` | `onKeyUp(int keyCode, KeyEvent event)` | | `boolean` | `onMenuItemSelected(int featureId, MenuItem item)` | | `boolean` | `onMenuOpened(int featureId, Menu menu)` | | `boolean` | `onOptionsItemSelected(MenuItem item)` | | `void` | `onOptionsMenuClosed(Menu menu)` | | `void` | `onPanelClosed(int featureId, Menu menu)` | | `boolean` | `onPrepareOptionsMenu(Menu menu)` | | `boolean` | `onPreparePanel(int featureId, View view, Menu menu)` | | `void` | `onRestoreInstanceState(Bundle savedInstanceState)` | | `Bundle` | `onSaveInstanceState()` | | `boolean` | `onSearchRequested()` | | `void` | `onStart()` | | `void` | `onStop()` | | `boolean` | `onTouchEvent(MotionEvent event)` | | `boolean` | `onTrackballEvent(MotionEvent event)` | | `void` | `onWindowAttributesChanged(WindowManager.LayoutParams params)` | | `void` | `onWindowFocusChanged(boolean hasFocus)` | | `ActionMode` | `onWindowStartingActionMode(ActionMode.Callback callback)` | | `void` | `openContextMenu(View view)` | | `void` | `openOptionsMenu()` | | `void` | `registerForContextMenu(View view)` | | `final boolean` | `requestWindowFeature(int featureId)` | | `final T` | `<T extends View> requireViewById(int id)` | | `void` | `setCancelMessage(Message msg)` | | `void` | `setCancelable(boolean flag)` | | `void` | `setCanceledOnTouchOutside(boolean cancel)` | | `void` | `setContentView(View view)` | | `void` | `setDismissMessage(Message msg)` | | `final void` | `setFeatureDrawable(int featureId, Drawable drawable)` | | `final void` | `setFeatureDrawableAlpha(int featureId, int alpha)` | | `final void` | `setFeatureDrawableResource(int featureId, int resId)` | | `final void` | `setFeatureDrawableUri(int featureId, Uri uri)` | | `void` | `setOnCancelListener(DialogInterface.OnCancelListener listener)` | | `void` | `setOnDismissListener(DialogInterface.OnDismissListener listener)` | | `void` | `setOnKeyListener(DialogInterface.OnKeyListener onKeyListener)` | | `void` | `setOnShowListener(DialogInterface.OnShowListener listener)` | | `final void` | `setOwnerActivity(Activity activity)` | | `final void` | `setVolumeControlStream(int streamType)` | | `void` | `show()` | | `void` | `takeKeyEvents(boolean get)` | | `void` | `unregisterForContextMenu(View view)` | |
| From [androidx.lifecycle.LifecycleOwner](/reference/androidx/lifecycle/LifecycleOwner) |  |  | | --- | --- | | `abstract Lifecycle` | `getLifecycle()`  Returns the Lifecycle of the provider. | |
| From [androidx.navigationevent.NavigationEventDispatcherOwner](/reference/androidx/navigationevent/NavigationEventDispatcherOwner) |  |  | | --- | --- | | `abstract NavigationEventDispatcher` | `getNavigationEventDispatcher()`  The `NavigationEventDispatcher` that should handle the navigation events. | |
| From [androidx.activity.OnBackPressedDispatcherOwner](/reference/androidx/activity/OnBackPressedDispatcherOwner) |  |  | | --- | --- | | `abstract OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  The `OnBackPressedDispatcher` that should handle the system back button. | |
| From [androidx.savedstate.SavedStateRegistryOwner](/reference/androidx/savedstate/SavedStateRegistryOwner) |  |  | | --- | --- | | `abstract SavedStateRegistry` | `getSavedStateRegistry()`  The `SavedStateRegistry` owned by this SavedStateRegistryOwner | |
| From [android.view.Window.Callback](https://developer.android.com/reference/android/view/Window.Callback.html) |  |  | | --- | --- | | `void` | `onPointerCaptureChanged(boolean hasCapture)` | | `void` | `onProvideKeyboardShortcuts(     List<KeyboardShortcutGroup> data,     Menu menu,     int deviceId )` | |

## Public constructors

### AppCompatDialog

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatDialog(@NonNull Context context)
```

### AppCompatDialog

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatDialog(@NonNull Context context, int theme)
```

## Protected constructors

### AppCompatDialog

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected AppCompatDialog(  
    @NonNull Context context,  
    boolean cancelable,  
    @Nullable DialogInterface.OnCancelListener cancelListener  
)
```

## Public methods

### addContentView

```
public void addContentView(@NonNull View view, ViewGroup.LayoutParams params)
```

### dismiss

```
public void dismiss()
```

### dispatchKeyEvent

```
public boolean dispatchKeyEvent(KeyEvent event)
```

### findViewById

```
public @Nullable T <T extends View> findViewById(@IdRes int id)
```

### getDelegate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull AppCompatDelegate getDelegate()
```

| Returns |
| --- |
| `@NonNull AppCompatDelegate` | The `AppCompatDelegate` being used by this Dialog. |

### getSupportActionBar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ActionBar getSupportActionBar()
```

Support library version of `getActionBar`.

Retrieve a reference to this dialog's ActionBar.

| Returns |
| --- |
| `ActionBar` | The Dialog's ActionBar, or null if it does not have one. |

### onSupportActionModeFinished

```
public void onSupportActionModeFinished(ActionMode mode)
```

Called when a support action mode has finished.

| Parameters |
| --- |
| `ActionMode mode` | The action mode that just finished. |

### onSupportActionModeStarted

```
public void onSupportActionModeStarted(ActionMode mode)
```

Called when a support action mode has been started.

| Parameters |
| --- |
| `ActionMode mode` | The new action mode. |

### onWindowStartingSupportActionMode

```
public @Nullable ActionMode onWindowStartingSupportActionMode(ActionMode.Callback callback)
```

Called when a support action mode is being started for this window. Gives the callback an opportunity to handle the action mode in its own unique and beautiful way. If this method returns null the system can choose a way to present the mode or choose not to start the mode at all.

| Parameters |
| --- |
| `ActionMode.Callback callback` | Callback to control the lifecycle of this action mode |

| Returns |
| --- |
| `@Nullable ActionMode` | The ActionMode that was started, or null if the system should present it |

### setContentView

```
public void setContentView(@LayoutRes int layoutResID)
```

### setContentView

```
public void setContentView(@NonNull View view)
```

### setContentView

```
public void setContentView(@NonNull View view, ViewGroup.LayoutParams params)
```

### setTitle

```
public void setTitle(CharSequence title)
```

### setTitle

```
public void setTitle(int titleId)
```

### supportRequestWindowFeature

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean supportRequestWindowFeature(int featureId)
```

Enable extended support library window features.

This is a convenience for calling `getWindow().requestFeature()`.

| Parameters |
| --- |
| `int featureId` | The desired feature as defined in `android.view.Window` or `androidx.core.view.WindowCompat`. |

| Returns |
| --- |
| `boolean` | Returns true if the requested feature is supported and now enabled. |

| See also |
| --- |
| `requestWindowFeature` |  |
| `requestFeature` |  |

## Protected methods

### onCreate

```
protected void onCreate(Bundle savedInstanceState)
```

### onStop

```
protected void onStop()
```
