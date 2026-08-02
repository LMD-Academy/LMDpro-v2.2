# ActionBarDrawerToggle

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/app/ActionBarDrawerToggle))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBarDrawerToggle.java+class:androidx.appcompat.app.ActionBarDrawerToggle)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBarDrawerToggle "View this page in Kotlin")
|Java

```
public class ActionBarDrawerToggle implements DrawerLayout.DrawerListener
```

---

This class provides a handy way to tie together the functionality of `DrawerLayout` and the framework `ActionBar` to implement the recommended design for navigation drawers.

To use `ActionBarDrawerToggle`, create one in your Activity and call through to the following methods corresponding to your Activity callbacks:

* `onConfigurationChanged`
* `onOptionsItemSelected`

Call `syncState` from your `Activity`'s `onPostCreate` to synchronize the indicator with the state of the linked DrawerLayout after `onRestoreInstanceState` has occurred.

`ActionBarDrawerToggle` can be used directly as a `DrawerLayout.DrawerListener`, or if you are already providing your own listener, call through to each of the listener methods from your own.

You can customize the the animated toggle by defining the drawerArrowStyle in your ActionBar theme.

## Summary

| Nested types |
| --- |
| `public interface ActionBarDrawerToggle.Delegate` |
| `public interface ActionBarDrawerToggle.DelegateProvider`  Allows an implementing Activity to return an `ActionBarDrawerToggle.Delegate` to use with ActionBarDrawerToggle. |

| Public constructors |
| --- |
| `ActionBarDrawerToggle(     Activity activity,     DrawerLayout drawerLayout,     @StringRes int openDrawerContentDescRes,     @StringRes int closeDrawerContentDescRes )`  Construct a new ActionBarDrawerToggle. |
| `ActionBarDrawerToggle(     Activity activity,     DrawerLayout drawerLayout,     Toolbar toolbar,     @StringRes int openDrawerContentDescRes,     @StringRes int closeDrawerContentDescRes )`  Construct a new ActionBarDrawerToggle with a Toolbar. |

| Public methods |
| --- |
| `@NonNull DrawerArrowDrawable` | `getDrawerArrowDrawable()` |
| `View.OnClickListener` | `getToolbarNavigationClickListener()`  Returns the fallback listener for Navigation icon click events. |
| `boolean` | `isDrawerIndicatorEnabled()` |
| `boolean` | `isDrawerSlideAnimationEnabled()` |
| `void` | `onConfigurationChanged(Configuration newConfig)`  This method should always be called by your `Activity`'s `onConfigurationChanged` method. |
| `void` | `onDrawerClosed(View drawerView)`  `DrawerLayout.DrawerListener` callback method. |
| `void` | `onDrawerOpened(View drawerView)`  `DrawerLayout.DrawerListener` callback method. |
| `void` | `onDrawerSlide(View drawerView, float slideOffset)`  `DrawerLayout.DrawerListener` callback method. |
| `void` | `onDrawerStateChanged(int newState)`  `DrawerLayout.DrawerListener` callback method. |
| `boolean` | `onOptionsItemSelected(MenuItem item)`  This method should be called by your `Activity`'s `onOptionsItemSelected` method. |
| `void` | `setDrawerArrowDrawable(@NonNull DrawerArrowDrawable drawable)`  Sets the DrawerArrowDrawable that should be shown by this ActionBarDrawerToggle. |
| `void` | `setDrawerIndicatorEnabled(boolean enable)`  Enable or disable the drawer indicator. |
| `void` | `setDrawerSlideAnimationEnabled(boolean enabled)`  Specifies whether the drawer arrow should animate when the drawer position changes. |
| `void` | `setHomeAsUpIndicator(Drawable indicator)`  Set the up indicator to display when the drawer indicator is not enabled. |
| `void` | `setHomeAsUpIndicator(int resId)`  Set the up indicator to display when the drawer indicator is not enabled. |
| `void` | `setToolbarNavigationClickListener(     View.OnClickListener onToolbarNavigationClickListener )`  When DrawerToggle is constructed with a Toolbar, it sets the click listener on the Navigation icon. |
| `void` | `syncState()`  Synchronize the state of the drawer indicator/affordance with the linked DrawerLayout. |

## Public constructors

### ActionBarDrawerToggle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ActionBarDrawerToggle(  
    Activity activity,  
    DrawerLayout drawerLayout,  
    @StringRes int openDrawerContentDescRes,  
    @StringRes int closeDrawerContentDescRes  
)
```

Construct a new ActionBarDrawerToggle.

The given `Activity` will be linked to the specified `DrawerLayout` and its Actionbar's Up button will be set to a custom drawable.

This drawable shows a Hamburger icon when drawer is closed and an arrow when drawer is open. It animates between these two states as the drawer opens.

String resources must be provided to describe the open/close drawer actions for accessibility services.

| Parameters |
| --- |
| `Activity activity` | The Activity hosting the drawer. Should have an ActionBar. |
| `DrawerLayout drawerLayout` | The DrawerLayout to link to the given Activity's ActionBar |
| `@StringRes int openDrawerContentDescRes` | A String resource to describe the "open drawer" action for accessibility |
| `@StringRes int closeDrawerContentDescRes` | A String resource to describe the "close drawer" action for accessibility |

### ActionBarDrawerToggle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public ActionBarDrawerToggle(  
    Activity activity,  
    DrawerLayout drawerLayout,  
    Toolbar toolbar,  
    @StringRes int openDrawerContentDescRes,  
    @StringRes int closeDrawerContentDescRes  
)
```

Construct a new ActionBarDrawerToggle with a Toolbar.

The given `Activity` will be linked to the specified `DrawerLayout` and the Toolbar's navigation icon will be set to a custom drawable. Using this constructor will set Toolbar's navigation click listener to toggle the drawer when it is clicked.

This drawable shows a Hamburger icon when drawer is closed and an arrow when drawer is open. It animates between these two states as the drawer opens.

String resources must be provided to describe the open/close drawer actions for accessibility services.

Please use `ActionBarDrawerToggle` if you are setting the Toolbar as the ActionBar of your activity.

| Parameters |
| --- |
| `Activity activity` | The Activity hosting the drawer. |
| `DrawerLayout drawerLayout` | The DrawerLayout to link to the given Activity's ActionBar |
| `Toolbar toolbar` | The toolbar to use if you have an independent Toolbar. |
| `@StringRes int openDrawerContentDescRes` | A String resource to describe the "open drawer" action for accessibility |
| `@StringRes int closeDrawerContentDescRes` | A String resource to describe the "close drawer" action for accessibility |

## Public methods

### getDrawerArrowDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @NonNull DrawerArrowDrawable getDrawerArrowDrawable()
```

| Returns |
| --- |
| `@NonNull DrawerArrowDrawable` | DrawerArrowDrawable that is currently shown by the ActionBarDrawerToggle. |

### getToolbarNavigationClickListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public View.OnClickListener getToolbarNavigationClickListener()
```

Returns the fallback listener for Navigation icon click events.

| Returns |
| --- |
| `View.OnClickListener` | The click listener which receives Navigation click events from Toolbar when drawer indicator is disabled. |

| See also |
| --- |
| `setToolbarNavigationClickListener` |  |
| `setDrawerIndicatorEnabled` |  |
| `isDrawerIndicatorEnabled` |  |

### isDrawerIndicatorEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isDrawerIndicatorEnabled()
```

| Returns |
| --- |
| `boolean` | true if the enhanced drawer indicator is enabled, false otherwise |

| See also |
| --- |
| `setDrawerIndicatorEnabled` |  |

### isDrawerSlideAnimationEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isDrawerSlideAnimationEnabled()
```

| Returns |
| --- |
| `boolean` | whether the drawer slide animation is enabled |

### onConfigurationChanged

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onConfigurationChanged(Configuration newConfig)
```

This method should always be called by your `Activity`'s `onConfigurationChanged` method.

| Parameters |
| --- |
| `Configuration newConfig` | The new configuration |

### onDrawerClosed

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onDrawerClosed(View drawerView)
```

`DrawerLayout.DrawerListener` callback method. If you do not use your ActionBarDrawerToggle instance directly as your DrawerLayout's listener, you should call through to this method from your own listener object.

| Parameters |
| --- |
| `View drawerView` | Drawer view that is now closed |

### onDrawerOpened

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onDrawerOpened(View drawerView)
```

`DrawerLayout.DrawerListener` callback method. If you do not use your ActionBarDrawerToggle instance directly as your DrawerLayout's listener, you should call through to this method from your own listener object.

| Parameters |
| --- |
| `View drawerView` | Drawer view that is now open |

### onDrawerSlide

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onDrawerSlide(View drawerView, float slideOffset)
```

`DrawerLayout.DrawerListener` callback method. If you do not use your ActionBarDrawerToggle instance directly as your DrawerLayout's listener, you should call through to this method from your own listener object.

| Parameters |
| --- |
| `View drawerView` | The child view that was moved |
| `float slideOffset` | The new offset of this drawer within its range, from 0-1 |

### onDrawerStateChanged

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onDrawerStateChanged(int newState)
```

`DrawerLayout.DrawerListener` callback method. If you do not use your ActionBarDrawerToggle instance directly as your DrawerLayout's listener, you should call through to this method from your own listener object.

| Parameters |
| --- |
| `int newState` | The new drawer motion state |

### onOptionsItemSelected

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean onOptionsItemSelected(MenuItem item)
```

This method should be called by your `Activity`'s `onOptionsItemSelected` method. If it returns true, your `onOptionsItemSelected` method should return true and skip further processing.

| Parameters |
| --- |
| `MenuItem item` | the MenuItem instance representing the selected menu item |

| Returns |
| --- |
| `boolean` | true if the event was handled and further processing should not occur |

### setDrawerArrowDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setDrawerArrowDrawable(@NonNull DrawerArrowDrawable drawable)
```

Sets the DrawerArrowDrawable that should be shown by this ActionBarDrawerToggle.

| Parameters |
| --- |
| `@NonNull DrawerArrowDrawable drawable` | DrawerArrowDrawable that should be shown by this ActionBarDrawerToggle |

### setDrawerIndicatorEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setDrawerIndicatorEnabled(boolean enable)
```

Enable or disable the drawer indicator. The indicator defaults to enabled.

When the indicator is disabled, the `ActionBar` will revert to displaying the home-as-up indicator provided by the `Activity`'s theme in the `android.R.attr.homeAsUpIndicator` attribute instead of the animated drawer glyph.

| Parameters |
| --- |
| `boolean enable` | true to enable, false to disable |

### setDrawerSlideAnimationEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setDrawerSlideAnimationEnabled(boolean enabled)
```

Specifies whether the drawer arrow should animate when the drawer position changes.

| Parameters |
| --- |
| `boolean enabled` | if this is `true` then the animation will run, else it will be skipped |

### setHomeAsUpIndicator

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHomeAsUpIndicator(Drawable indicator)
```

Set the up indicator to display when the drawer indicator is not enabled.

If you pass `null` to this method, the default drawable from the theme will be used.

| Parameters |
| --- |
| `Drawable indicator` | A drawable to use for the up indicator, or null to use the theme's default |

| See also |
| --- |
| `setDrawerIndicatorEnabled` |  |

### setHomeAsUpIndicator

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHomeAsUpIndicator(int resId)
```

Set the up indicator to display when the drawer indicator is not enabled.

If you pass 0 to this method, the default drawable from the theme will be used.

| Parameters |
| --- |
| `int resId` | Resource ID of a drawable to use for the up indicator, or 0 to use the theme's default |

| See also |
| --- |
| `setDrawerIndicatorEnabled` |  |

### setToolbarNavigationClickListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setToolbarNavigationClickListener(  
    View.OnClickListener onToolbarNavigationClickListener  
)
```

When DrawerToggle is constructed with a Toolbar, it sets the click listener on the Navigation icon. If you want to listen for clicks on the Navigation icon when DrawerToggle is disabled (`setDrawerIndicatorEnabled`, you should call this method with your listener and DrawerToggle will forward click events to that listener when drawer indicator is disabled.

| See also |
| --- |
| `setDrawerIndicatorEnabled` |  |

### syncState

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void syncState()
```

Synchronize the state of the drawer indicator/affordance with the linked DrawerLayout.

This should be called from your `Activity`'s `onPostCreate` method to synchronize after the DrawerLayout's instance state has been restored, and any other time when the state may have diverged in such a way that the ActionBarDrawerToggle was not notified. (For example, if you stop forwarding appropriate drawer events for a period of time.)
