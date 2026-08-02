# ComponentDialog

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/ComponentDialog))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ComponentDialog.kt+class:androidx.activity.ComponentDialog)

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

---

[Kotlin](/reference/kotlin/androidx/activity/ComponentDialog "View this page in Kotlin")
|Java

```
public class ComponentDialog extends Dialog implements LifecycleOwner, OnBackPressedDispatcherOwner, NavigationEventDispatcherOwner, SavedStateRegistryOwner
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [android.app.Dialog](https://developer.android.com/reference/android/app/Dialog.html) | |
|  | ↳ | [androidx.activity.ComponentDialog](/reference/androidx/activity/ComponentDialog) |

Known direct subclasses

[AppCompatDialog](/reference/androidx/appcompat/app/AppCompatDialog)

|  |  |
| --- | --- |
| `AppCompatDialog` | Base class for AppCompat themed `android.app.Dialog`s. |

Known indirect subclasses

[AlertDialog](/reference/androidx/appcompat/app/AlertDialog), [MediaRouteChooserDialog](/reference/androidx/mediarouter/app/MediaRouteChooserDialog), [MediaRouteControllerDialog](/reference/androidx/mediarouter/app/MediaRouteControllerDialog)

|  |  |
| --- | --- |
| `AlertDialog` | A subclass of Dialog that can display one, two or three buttons. |
| `MediaRouteChooserDialog` | This class implements the route chooser dialog for `MediaRouter`. |
| `MediaRouteControllerDialog` | This class implements the route controller dialog for `MediaRouter`. |

---

Base class for dialogs that enables composition of higher level components.

## Summary

| Public constructors |
| --- |
| `ComponentDialog(@NonNull Context context, @StyleRes int themeResId)` |

| Public methods |
| --- |
| `void` | `addContentView(@NonNull View view, ViewGroup.LayoutParams params)` |
| `@NonNull Lifecycle` | `getLifecycle()` |
| `@NonNull NavigationEventDispatcher` | `getNavigationEventDispatcher()`  Lazily provides a `NavigationEventDispatcher` for back navigation handling, including support for predictive back gestures introduced in Android 13 (API 33+). |
| `final @NonNull OnBackPressedDispatcher` | `getOnBackPressedDispatcher()`  Retrieve the `OnBackPressedDispatcher` that will be triggered when `onBackPressed` is called. |
| `@NonNull SavedStateRegistry` | `getSavedStateRegistry()` |
| `void` | `@CallSuper initializeViewTreeOwners()`  Sets the view tree owners before setting the content view so that the inflation process and attach listeners will see them already present. |
| `void` | `@CallSuper onBackPressed()`  **This method is deprecated.** This method has been deprecated in favor of using the {@link OnBackPressedDispatcher} via {@link #getOnBackPressedDispatcher()}. |
| `@NonNull Bundle` | `onSaveInstanceState()` |
| `void` | `setContentView(int layoutResID)` |
| `void` | `setContentView(@NonNull View view)` |
| `void` | `setContentView(@NonNull View view, ViewGroup.LayoutParams params)` |

| Protected methods |
| --- |
| `void` | `@CallSuper onCreate(Bundle savedInstanceState)` |
| `void` | `@CallSuper onStart()` |
| `void` | `@CallSuper onStop()` |

| Inherited methods |
| --- |
| From [android.app.Dialog](https://developer.android.com/reference/android/app/Dialog.html) |  |  | | --- | --- | | `void` | `closeOptionsMenu()` | | `void` | `create()` | | `@NonNull T` | `<T extends View> findViewById(int id)` | | `@Nullable ActionBar` | `getActionBar()` | | `final @NonNull Context` | `getContext()` | | `@Nullable View` | `getCurrentFocus()` | | `@NonNull LayoutInflater` | `getLayoutInflater()` | | `@NonNull OnBackInvokedDispatcher` | `getOnBackInvokedDispatcher()` | | `final @Nullable Activity` | `getOwnerActivity()` | | `final @Nullable SearchEvent` | `getSearchEvent()` | | `final int` | `getVolumeControlStream()` | | `@Nullable Window` | `getWindow()` | | `void` | `hide()` | | `void` | `invalidateOptionsMenu()` | | `boolean` | `isShowing()` | | `boolean` | `onContextItemSelected(@NonNull MenuItem item)` | | `void` | `onContextMenuClosed(@NonNull Menu menu)` | | `boolean` | `onCreateOptionsMenu(@NonNull Menu menu)` | | `boolean` | `onGenericMotionEvent(@NonNull MotionEvent event)` | | `boolean` | `onKeyShortcut(int keyCode, @NonNull KeyEvent event)` | | `boolean` | `onOptionsItemSelected(@NonNull MenuItem item)` | | `void` | `onOptionsMenuClosed(@NonNull Menu menu)` | | `boolean` | `onPrepareOptionsMenu(@NonNull Menu menu)` | | `void` | `onRestoreInstanceState(@NonNull Bundle savedInstanceState)` | | `boolean` | `onTouchEvent(@NonNull MotionEvent event)` | | `boolean` | `onTrackballEvent(@NonNull MotionEvent event)` | | `void` | `openContextMenu(@NonNull View view)` | | `void` | `openOptionsMenu()` | | `void` | `registerForContextMenu(@NonNull View view)` | | `final boolean` | `requestWindowFeature(int featureId)` | | `final @NonNull T` | `<T extends View> requireViewById(int id)` | | `void` | `setCancelMessage(@Nullable Message msg)` | | `void` | `setCancelable(boolean flag)` | | `void` | `setCanceledOnTouchOutside(boolean cancel)` | | `void` | `setDismissMessage(@Nullable Message msg)` | | `final void` | `setFeatureDrawable(int featureId, @Nullable Drawable drawable)` | | `final void` | `setFeatureDrawableAlpha(int featureId, int alpha)` | | `final void` | `setFeatureDrawableResource(int featureId, int resId)` | | `final void` | `setFeatureDrawableUri(int featureId, @Nullable Uri uri)` | | `void` | `setOnCancelListener(@Nullable DialogInterface.OnCancelListener listener)` | | `void` | `setOnDismissListener(     @Nullable DialogInterface.OnDismissListener listener )` | | `void` | `setOnKeyListener(@Nullable DialogInterface.OnKeyListener onKeyListener)` | | `void` | `setOnShowListener(@Nullable DialogInterface.OnShowListener listener)` | | `final void` | `setOwnerActivity(@NonNull Activity activity)` | | `void` | `setTitle(@Nullable CharSequence title)` | | `void` | `setTitle(int titleId)` | | `final void` | `setVolumeControlStream(int streamType)` | | `void` | `show()` | | `void` | `takeKeyEvents(boolean get)` | | `void` | `unregisterForContextMenu(@NonNull View view)` | |
| From [android.content.DialogInterface](https://developer.android.com/reference/android/content/DialogInterface.html) |  |  | | --- | --- | | `void` | `cancel()` | | `void` | `dismiss()` | |
| From [android.view.KeyEvent.Callback](https://developer.android.com/reference/android/view/KeyEvent.Callback.html) |  |  | | --- | --- | | `boolean` | `onKeyDown(int keyCode, @NonNull KeyEvent event)` | | `boolean` | `onKeyLongPress(int keyCode, @NonNull KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, @NonNull KeyEvent event)` | | `boolean` | `onKeyUp(int keyCode, @NonNull KeyEvent event)` | |
| From [android.view.View.OnCreateContextMenuListener](https://developer.android.com/reference/android/view/View.OnCreateContextMenuListener.html) |  |  | | --- | --- | | `void` | `onCreateContextMenu(     @NonNull ContextMenu menu,     @NonNull View v,     @NonNull ContextMenu.ContextMenuInfo menuInfo )` | |
| From [android.view.Window.Callback](https://developer.android.com/reference/android/view/Window.Callback.html) |  |  | | --- | --- | | `boolean` | `dispatchGenericMotionEvent(@NonNull MotionEvent ev)` | | `boolean` | `dispatchKeyEvent(@NonNull KeyEvent event)` | | `boolean` | `dispatchKeyShortcutEvent(@NonNull KeyEvent event)` | | `boolean` | `dispatchPopulateAccessibilityEvent(@NonNull AccessibilityEvent event)` | | `boolean` | `dispatchTouchEvent(@NonNull MotionEvent ev)` | | `boolean` | `dispatchTrackballEvent(@NonNull MotionEvent ev)` | | `void` | `onActionModeFinished(@NonNull ActionMode mode)` | | `void` | `onActionModeStarted(@NonNull ActionMode mode)` | | `void` | `onAttachedToWindow()` | | `void` | `onContentChanged()` | | `boolean` | `onCreatePanelMenu(int featureId, @NonNull Menu menu)` | | `View` | `onCreatePanelView(int featureId)` | | `void` | `onDetachedFromWindow()` | | `boolean` | `onMenuItemSelected(int featureId, @NonNull MenuItem item)` | | `boolean` | `onMenuOpened(int featureId, @NonNull Menu menu)` | | `void` | `onPanelClosed(int featureId, @NonNull Menu menu)` | | `void` | `onPointerCaptureChanged(boolean hasCapture)` | | `boolean` | `onPreparePanel(int featureId, @Nullable View view, @NonNull Menu menu)` | | `void` | `onProvideKeyboardShortcuts(     @NonNull List<@NonNull KeyboardShortcutGroup> data,     @Nullable Menu menu,     int deviceId )` | | `boolean` | `onSearchRequested()` | | `boolean` | `onSearchRequested(@NonNull SearchEvent searchEvent)` | | `void` | `onWindowAttributesChanged(@NonNull WindowManager.LayoutParams params)` | | `void` | `onWindowFocusChanged(boolean hasFocus)` | | `ActionMode` | `onWindowStartingActionMode(@NonNull ActionMode.Callback callback)` | | `ActionMode` | `onWindowStartingActionMode(     @NonNull ActionMode.Callback callback,     int type )` | |

## Public constructors

### ComponentDialog

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public ComponentDialog(@NonNull Context context, @StyleRes int themeResId)
```

## Public methods

### addContentView

```
public void addContentView(@NonNull View view, ViewGroup.LayoutParams params)
```

### getLifecycle

Added in [1.5.0](/jetpack/androidx/releases/activity#1.5.0)

```
public @NonNull Lifecycle getLifecycle()
```

### getNavigationEventDispatcher

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

```
public @NonNull NavigationEventDispatcher getNavigationEventDispatcher()
```

Lazily provides a `NavigationEventDispatcher` for back navigation handling, including support for predictive back gestures introduced in Android 13 (API 33+).

This dispatcher acts as the central point for back navigation events. When a navigation event occurs (e.g., a back gesture), it safely invokes `ComponentDialog.onBackPressed`.

### getOnBackPressedDispatcher

```
public final @NonNull OnBackPressedDispatcher getOnBackPressedDispatcher()
```

Retrieve the `OnBackPressedDispatcher` that will be triggered when `onBackPressed` is called.

| Returns |
| --- |
| `@NonNull OnBackPressedDispatcher` | The `OnBackPressedDispatcher` associated with this ComponentDialog. |

### getSavedStateRegistry

Added in [1.7.0](/jetpack/androidx/releases/activity#1.7.0)

```
public @NonNull SavedStateRegistry getSavedStateRegistry()
```

### initializeViewTreeOwners

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@CallSuper  
public void initializeViewTreeOwners()
```

Sets the view tree owners before setting the content view so that the inflation process and attach listeners will see them already present.

### onBackPressed

Added in [1.6.0](/jetpack/androidx/releases/activity#1.6.0)

```
@CallSuper  
public void onBackPressed()
```

**This method is deprecated.**  
This method has been deprecated in favor of using the
{@link OnBackPressedDispatcher} via {@link #getOnBackPressedDispatcher()}.
The OnBackPressedDispatcher controls how back button events are dispatched
to one or more {@link OnBackPressedCallback} objects.

### onSaveInstanceState

```
public @NonNull Bundle onSaveInstanceState()
```

### setContentView

```
public void setContentView(int layoutResID)
```

### setContentView

```
public void setContentView(@NonNull View view)
```

### setContentView

```
public void setContentView(@NonNull View view, ViewGroup.LayoutParams params)
```

## Protected methods

### onCreate

```
@CallSuper  
protected void onCreate(Bundle savedInstanceState)
```

### onStart

```
@CallSuper  
protected void onStart()
```

### onStop

```
@CallSuper  
protected void onStop()
```
