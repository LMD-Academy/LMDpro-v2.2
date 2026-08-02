--- source: https://developer.android.com/reference/androidx/appcompat/app/ActionBar ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionBar

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/ActionBar.java+class:androidx.appcompat.app.ActionBar)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/ActionBar "View this page in Kotlin")
|Java

```
public abstract class ActionBar
```

---

A primary toolbar within the activity that may display the activity title, application-level navigation affordances, and other interactive items.

The action bar appears at the top of an activity's window when the activity uses the AppCompat's `AppCompat` theme (or one of its descendant themes). You may otherwise add the action bar by calling  `requestFeature(FEATURE_SUPPORT_ACTION_BAR)` or by declaring it in a custom theme with the windowActionBar property.

The action bar may be represented by any Toolbar widget within the application layout. The application may signal to the Activity which Toolbar should be treated as the Activity's action bar. Activities that use this feature should use one of the supplied `.NoActionBar` themes, set the windowActionBar attribute to `false` or otherwise not request the window feature.

If your activity has an options menu, you can make select items accessible directly from the action bar as "action items". You can also modify various characteristics of the action bar or remove it completely.

The navigation button (formerly "Home") takes over the space previously occupied by the application icon. Apps wishing to express a stronger branding should use their brand colors heavily in the action bar and other application chrome or use a `logo` in place of their standard title text.

From your activity, you can retrieve an instance of `ActionBar` by calling `getSupportActionBar` getSupportActionBar()}.

In some cases, the action bar may be overlayed by another bar that enables contextual actions, using an `ActionMode`. For example, when the user selects one or more items in your activity, you can enable an action mode that offers actions specific to the selected items, with a UI that temporarily replaces the action bar. Although the UI may occupy the same space, the `ActionMode` APIs are distinct and independent from those for `ActionBar`.

## Summary

| Nested types |
| --- |
| `public class ActionBar.LayoutParams extends ViewGroup.MarginLayoutParams`  Per-child layout information associated with action bar custom views. |
| `public interface ActionBar.OnMenuVisibilityListener`  Listener for receiving events when action bar menus are shown or hidden. |
| `public interface ActionBar.OnNavigationListener`  **This interface is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `public abstract class ActionBar.Tab`  **This class is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `public interface ActionBar.TabListener`  **This interface is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |

| Constants |
| --- |
| `static final int` | `DISPLAY_HOME_AS_UP = 4`  Display the 'home' element such that it appears as an 'up' affordance. e.g. show an arrow to the left indicating the action that will be taken. |
| `static final int` | `DISPLAY_SHOW_CUSTOM = 16`  Show the custom view if one has been set. |
| `static final int` | `DISPLAY_SHOW_HOME = 2`  Show 'home' elements in this action bar, leaving more space for other navigation elements. |
| `static final int` | `DISPLAY_SHOW_TITLE = 8`  Show the activity title and subtitle, if present. |
| `static final int` | `DISPLAY_USE_LOGO = 1`  Use logo instead of icon if available. |
| `static final int` | `NAVIGATION_MODE_LIST = 1`  **This field is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `static final int` | `NAVIGATION_MODE_STANDARD = 0`  **This field is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `static final int` | `NAVIGATION_MODE_TABS = 2`  **This field is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |

| Public constructors |
| --- |
| `ActionBar()` |

| Public methods |
| --- |
| `abstract void` | `addOnMenuVisibilityListener(     ActionBar.OnMenuVisibilityListener listener )`  Add a listener that will respond to menu visibility change events. |
| `abstract void` | `addTab(ActionBar.Tab tab)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `addTab(ActionBar.Tab tab, int position)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `addTab(ActionBar.Tab tab, boolean setSelected)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `addTab(ActionBar.Tab tab, int position, boolean setSelected)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract View` | `getCustomView()` |
| `abstract int` | `getDisplayOptions()` |
| `float` | `getElevation()`  Get the Z-axis elevation of the action bar in pixels. |
| `abstract int` | `getHeight()`  Retrieve the current height of the ActionBar. |
| `int` | `getHideOffset()`  Return the current vertical offset of the action bar. |
| `abstract int` | `getNavigationItemCount()`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract int` | `getNavigationMode()`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract int` | `getSelectedNavigationIndex()`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract @Nullable ActionBar.Tab` | `getSelectedTab()`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract @Nullable CharSequence` | `getSubtitle()`  Returns the current ActionBar subtitle in standard mode. |
| `abstract ActionBar.Tab` | `getTabAt(int index)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract int` | `getTabCount()`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `Context` | `getThemedContext()`  Returns a `Context` with an appropriate theme for creating views that will appear in the action bar. |
| `abstract @Nullable CharSequence` | `getTitle()`  Returns the current ActionBar title in standard mode. |
| `abstract void` | `hide()`  Hide the ActionBar if it is currently showing. |
| `boolean` | `isHideOnContentScrollEnabled()`  Return whether the action bar is configured to scroll out of sight along with a `nested scrolling child`. |
| `abstract boolean` | `isShowing()` |
| `abstract ActionBar.Tab` | `newTab()`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `removeAllTabs()`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `removeOnMenuVisibilityListener(     ActionBar.OnMenuVisibilityListener listener )`  Remove a menu visibility listener. |
| `abstract void` | `removeTab(ActionBar.Tab tab)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `removeTabAt(int position)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `selectTab(ActionBar.Tab tab)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `setBackgroundDrawable(@Nullable Drawable d)`  Set the ActionBar's background. |
| `abstract void` | `setCustomView(int resId)`  Set the action bar into custom navigation mode, supplying a view for custom navigation. |
| `abstract void` | `setCustomView(View view)`  Set the action bar into custom navigation mode, supplying a view for custom navigation. |
| `abstract void` | `setCustomView(View view, ActionBar.LayoutParams layoutParams)`  Set the action bar into custom navigation mode, supplying a view for custom navigation. |
| `abstract void` | `setDisplayHomeAsUpEnabled(boolean showHomeAsUp)`  Set whether home should be displayed as an "up" affordance. |
| `abstract void` | `setDisplayOptions(int options)`  Set display options. |
| `abstract void` | `setDisplayOptions(int options, int mask)`  Set selected display options. |
| `abstract void` | `setDisplayShowCustomEnabled(boolean showCustom)`  Set whether a custom view should be displayed, if set. |
| `abstract void` | `setDisplayShowHomeEnabled(boolean showHome)`  Set whether to include the application home affordance in the action bar. |
| `abstract void` | `setDisplayShowTitleEnabled(boolean showTitle)`  Set whether an activity title/subtitle should be displayed. |
| `abstract void` | `setDisplayUseLogoEnabled(boolean useLogo)`  Set whether to display the activity logo rather than the activity icon. |
| `void` | `setElevation(float elevation)`  Set the Z-axis elevation of the action bar in pixels. |
| `void` | `setHideOffset(int offset)`  Set the current hide offset of the action bar. |
| `void` | `setHideOnContentScrollEnabled(boolean hideOnContentScroll)`  Enable hiding the action bar on content scroll. |
| `void` | `setHomeActionContentDescription(@Nullable CharSequence description)`  Set an alternate description for the Home/Up action, when enabled. |
| `void` | `setHomeActionContentDescription(@StringRes int resId)`  Set an alternate description for the Home/Up action, when enabled. |
| `void` | `setHomeAsUpIndicator(@Nullable Drawable indicator)`  Set an alternate drawable to display next to the icon/logo/title when `DISPLAY_HOME_AS_UP` is enabled. |
| `void` | `setHomeAsUpIndicator(@DrawableRes int resId)`  Set an alternate drawable to display next to the icon/logo/title when `DISPLAY_HOME_AS_UP` is enabled. |
| `void` | `setHomeButtonEnabled(boolean enabled)`  Enable or disable the "home" button in the corner of the action bar. |
| `abstract void` | `setIcon(Drawable icon)`  Set the icon to display in the 'home' section of the action bar. |
| `abstract void` | `setIcon(@DrawableRes int resId)`  Set the icon to display in the 'home' section of the action bar. |
| `abstract void` | `setListNavigationCallbacks(     SpinnerAdapter adapter,     ActionBar.OnNavigationListener callback )`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `setLogo(Drawable logo)`  Set the logo to display in the 'home' section of the action bar. |
| `abstract void` | `setLogo(@DrawableRes int resId)`  Set the logo to display in the 'home' section of the action bar. |
| `abstract void` | `setNavigationMode(int mode)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `abstract void` | `setSelectedNavigationItem(int position)`  **This method is deprecated.** Action bar navigation modes are deprecated and not supported by inline toolbar action bars. |
| `void` | `setSplitBackgroundDrawable(Drawable d)`  Set the ActionBar's split background. |
| `void` | `setStackedBackgroundDrawable(Drawable d)`  Set the ActionBar's stacked background. |
| `abstract void` | `setSubtitle(int resId)`  Set the action bar's subtitle. |
| `abstract void` | `setSubtitle(CharSequence subtitle)`  Set the action bar's subtitle. |
| `abstract void` | `setTitle(@StringRes int resId)`  Set the action bar's title. |
| `abstract void` | `setTitle(CharSequence title)`  Set the action bar's title. |
| `abstract void` | `show()`  Show the ActionBar if it is not currently showing. |

## Constants

### DISPLAY\_HOME\_AS\_UP

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int DISPLAY_HOME_AS_UP = 4
```

Display the 'home' element such that it appears as an 'up' affordance. e.g. show an arrow to the left indicating the action that will be taken. Set this flag if selecting the 'home' button in the action bar to return up by a single level in your UI rather than back to the top level or front page.

Setting this option will implicitly enable interaction with the home/up button. See `setHomeButtonEnabled`.

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### DISPLAY\_SHOW\_CUSTOM

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int DISPLAY_SHOW_CUSTOM = 16
```

Show the custom view if one has been set.

| See also |
| --- |
| `setCustomView` |  |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### DISPLAY\_SHOW\_HOME

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int DISPLAY_SHOW_HOME = 2
```

Show 'home' elements in this action bar, leaving more space for other navigation elements. This includes logo and icon.

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### DISPLAY\_SHOW\_TITLE

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int DISPLAY_SHOW_TITLE = 8
```

Show the activity title and subtitle, if present.

| See also |
| --- |
| `setTitle` |  |
| `setTitle` |  |
| `setSubtitle` |  |
| `setSubtitle` |  |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### DISPLAY\_USE\_LOGO

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int DISPLAY_USE_LOGO = 1
```

Use logo instead of icon if available. This flag will cause appropriate navigation modes to use a wider logo in place of the standard icon.

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### NAVIGATION\_MODE\_LIST

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int NAVIGATION_MODE_LIST = 1
```

**This field is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

List navigation mode. Instead of static title text this mode presents a list menu for navigation within the activity. e.g. this might be presented to the user as a dropdown list.

### NAVIGATION\_MODE\_STANDARD

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int NAVIGATION_MODE_STANDARD = 0
```

**This field is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Standard navigation mode. Consists of either a logo or icon and title text with an optional subtitle. Clicking any of these elements will dispatch onOptionsItemSelected to the host Activity with a MenuItem with item ID android.R.id.home.

### NAVIGATION\_MODE\_TABS

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int NAVIGATION_MODE_TABS = 2
```

**This field is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Tab navigation mode. Instead of static title text this mode presents a series of tabs for navigation within the activity.

## Public constructors

### ActionBar

Added in 1.1.0

```
public ActionBar()
```

## Public methods

### addOnMenuVisibilityListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void addOnMenuVisibilityListener(  
    ActionBar.OnMenuVisibilityListener listener  
)
```

Add a listener that will respond to menu visibility change events.

| Parameters |
| --- |
| `ActionBar.OnMenuVisibilityListener listener` | The new listener to add |

### addTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void addTab(ActionBar.Tab tab)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Add a tab for use in tabbed navigation mode. The tab will be added at the end of the list. If this is the first tab to be added it will become the selected tab.

| Parameters |
| --- |
| `ActionBar.Tab tab` | Tab to add |

### addTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void addTab(ActionBar.Tab tab, int position)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Add a tab for use in tabbed navigation mode. The tab will be inserted at `position`. If this is the first tab to be added it will become the selected tab.

| Parameters |
| --- |
| `ActionBar.Tab tab` | The tab to add |
| `int position` | The new position of the tab |

### addTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void addTab(ActionBar.Tab tab, boolean setSelected)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Add a tab for use in tabbed navigation mode. The tab will be added at the end of the list.

| Parameters |
| --- |
| `ActionBar.Tab tab` | Tab to add |
| `boolean setSelected` | True if the added tab should become the selected tab. |

### addTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void addTab(ActionBar.Tab tab, int position, boolean setSelected)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Add a tab for use in tabbed navigation mode. The tab will be inserted at `position`.

| Parameters |
| --- |
| `ActionBar.Tab tab` | The tab to add |
| `int position` | The new position of the tab |
| `boolean setSelected` | True if the added tab should become the selected tab. |

### getCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract View getCustomView()
```

| Returns |
| --- |
| `View` | The current custom view. |

### getDisplayOptions

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract int getDisplayOptions()
```

| Returns |
| --- |
| `int` | The current set of display options. |

### getElevation

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public float getElevation()
```

Get the Z-axis elevation of the action bar in pixels.

The action bar's elevation is the distance it is placed from its parent surface. Higher values are closer to the user.

| Returns |
| --- |
| `float` | Elevation value in pixels |

### getHeight

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract int getHeight()
```

Retrieve the current height of the ActionBar.

| Returns |
| --- |
| `int` | The ActionBar's height |

### getHideOffset

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getHideOffset()
```

Return the current vertical offset of the action bar.

The action bar's current hide offset is the distance that the action bar is currently scrolled offscreen in pixels. The valid range is 0 (fully visible) to the action bar's current measured `height` (fully invisible).

| Returns |
| --- |
| `int` | The action bar's offset toward its fully hidden state in pixels |

### getNavigationItemCount

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract int getNavigationItemCount()
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Get the number of navigation items present in the current navigation mode.

| Returns |
| --- |
| `int` | Number of navigation items. |

### getNavigationMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract int getNavigationMode()
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Returns the current navigation mode. The result will be one of:

* `NAVIGATION_MODE_STANDARD`
* `NAVIGATION_MODE_LIST`
* `NAVIGATION_MODE_TABS`

| Returns |
| --- |
| `int` | The current navigation mode. |

### getSelectedNavigationIndex

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract int getSelectedNavigationIndex()
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Get the position of the selected navigation item in list or tabbed navigation modes.

| Returns |
| --- |
| `int` | Position of the selected item. |

### getSelectedTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract @Nullable ActionBar.Tab getSelectedTab()
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Returns the currently selected tab if in tabbed navigation mode and there is at least one tab present.

| Returns |
| --- |
| `@Nullable ActionBar.Tab` | The currently selected tab or null |

### getSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract @Nullable CharSequence getSubtitle()
```

Returns the current ActionBar subtitle in standard mode. Returns null if `getNavigationMode` would not return `NAVIGATION_MODE_STANDARD`.

| Returns |
| --- |
| `@Nullable CharSequence` | The current ActionBar subtitle or null. |

### getTabAt

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab getTabAt(int index)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Returns the tab at the specified index.

| Parameters |
| --- |
| `int index` | Index value in the range 0-get |

| Returns |
| --- |
| `ActionBar.Tab` |  |

### getTabCount

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract int getTabCount()
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Returns the number of tabs currently registered with the action bar.

| Returns |
| --- |
| `int` | Tab count |

### getThemedContext

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Context getThemedContext()
```

Returns a `Context` with an appropriate theme for creating views that will appear in the action bar. If you are inflating or instantiating custom views that will appear in an action bar, you should use the Context returned by this method. (This includes adapters used for list navigation mode.) This will ensure that views contrast properly against the action bar.

| Returns |
| --- |
| `Context` | A themed Context for creating views |

### getTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract @Nullable CharSequence getTitle()
```

Returns the current ActionBar title in standard mode. Returns null if `getNavigationMode` would not return `NAVIGATION_MODE_STANDARD`.

| Returns |
| --- |
| `@Nullable CharSequence` | The current ActionBar title or null. |

### hide

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void hide()
```

Hide the ActionBar if it is currently showing. If the window hosting the ActionBar does not have the feature `FEATURE_ACTION_BAR_OVERLAY` it will resize application content to fit the new space available.

Instead of calling this function directly, you can also cause an ActionBar using the overlay feature to hide through `View.SYSTEM_UI_FLAG_FULLSCREEN`. Hiding the ActionBar through this system UI flag allows you to more seamlessly hide it in conjunction with other screen decorations.

### isHideOnContentScrollEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isHideOnContentScrollEnabled()
```

Return whether the action bar is configured to scroll out of sight along with a `nested scrolling child`.

| Returns |
| --- |
| `boolean` | true if hide-on-content-scroll is enabled |

| See also |
| --- |
| `setHideOnContentScrollEnabled` |  |

### isShowing

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract boolean isShowing()
```

| Returns |
| --- |
| `boolean` | `true` if the ActionBar is showing, `false` otherwise. |

### newTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract ActionBar.Tab newTab()
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Create and return a new `Tab`. This tab will not be included in the action bar until it is added.

| Returns |
| --- |
| `ActionBar.Tab` | A new Tab |

| See also |
| --- |
| `addTab` |  |

### removeAllTabs

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void removeAllTabs()
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Remove all tabs from the action bar and deselect the current tab.

### removeOnMenuVisibilityListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void removeOnMenuVisibilityListener(  
    ActionBar.OnMenuVisibilityListener listener  
)
```

Remove a menu visibility listener. This listener will no longer receive menu visibility change events.

| Parameters |
| --- |
| `ActionBar.OnMenuVisibilityListener listener` | A listener to remove that was previously added |

### removeTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void removeTab(ActionBar.Tab tab)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Remove a tab from the action bar. If the removed tab was selected it will be deselected and another tab will be selected if present.

| Parameters |
| --- |
| `ActionBar.Tab tab` | The tab to remove |

### removeTabAt

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void removeTabAt(int position)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Remove a tab from the action bar. If the removed tab was selected it will be deselected and another tab will be selected if present.

| Parameters |
| --- |
| `int position` | Position of the tab to remove |

### selectTab

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void selectTab(ActionBar.Tab tab)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Select the specified tab. If it is not a child of this action bar it will be added.

Note: If you want to select by index, use `setSelectedNavigationItem`.

| Parameters |
| --- |
| `ActionBar.Tab tab` | Tab to select |

### setBackgroundDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setBackgroundDrawable(@Nullable Drawable d)
```

Set the ActionBar's background. This will be used for the primary action bar.

| Parameters |
| --- |
| `@Nullable Drawable d` | Background drawable |

| See also |
| --- |
| `setStackedBackgroundDrawable` |  |
| `setSplitBackgroundDrawable` |  |

### setCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setCustomView(int resId)
```

Set the action bar into custom navigation mode, supplying a view for custom navigation.

Custom navigation views appear between the application icon and any action buttons and may use any space available there. Common use cases for custom navigation views might include an auto-suggesting address bar for a browser or other navigation mechanisms that do not translate well to provided navigation modes.

The display option `DISPLAY_SHOW_CUSTOM` must be set for the custom view to be displayed.

| Parameters |
| --- |
| `int resId` | Resource ID of a layout to inflate into the ActionBar. |

| See also |
| --- |
| `setDisplayOptions` |  |

### setCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setCustomView(View view)
```

Set the action bar into custom navigation mode, supplying a view for custom navigation. Custom navigation views appear between the application icon and any action buttons and may use any space available there. Common use cases for custom navigation views might include an auto-suggesting address bar for a browser or other navigation mechanisms that do not translate well to provided navigation modes.

| Parameters |
| --- |
| `View view` | Custom navigation view to place in the ActionBar. |

### setCustomView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setCustomView(View view, ActionBar.LayoutParams layoutParams)
```

Set the action bar into custom navigation mode, supplying a view for custom navigation.

Custom navigation views appear between the application icon and any action buttons and may use any space available there. Common use cases for custom navigation views might include an auto-suggesting address bar for a browser or other navigation mechanisms that do not translate well to provided navigation modes.

The display option `DISPLAY_SHOW_CUSTOM` must be set for the custom view to be displayed.

| Parameters |
| --- |
| `View view` | Custom navigation view to place in the ActionBar. |
| `ActionBar.LayoutParams layoutParams` | How this custom view should layout in the bar. |

| See also |
| --- |
| `setDisplayOptions` |  |

### setDisplayHomeAsUpEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setDisplayHomeAsUpEnabled(boolean showHomeAsUp)
```

Set whether home should be displayed as an "up" affordance. Set this to true if selecting "home" returns up by a single level in your UI rather than back to the top level or front page.

To set several display options at once, see the setDisplayOptions methods.

| Parameters |
| --- |
| `boolean showHomeAsUp` | true to show the user that selecting home will return one level up rather than to the top level of the app. |

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### setDisplayOptions

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setDisplayOptions(int options)
```

Set display options. This changes all display option bits at once. To change a limited subset of display options, see `setDisplayOptions`.

| Parameters |
| --- |
| `int options` | A combination of the bits defined by the DISPLAY\_ constants defined in ActionBar. |

### setDisplayOptions

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setDisplayOptions(int options, int mask)
```

Set selected display options. Only the options specified by mask will be changed. To change all display option bits at once, see `setDisplayOptions`.

Example: setDisplayOptions(0, DISPLAY\_SHOW\_HOME) will disable the `DISPLAY_SHOW_HOME` option. setDisplayOptions(DISPLAY\_SHOW\_HOME, DISPLAY\_SHOW\_HOME | DISPLAY\_USE\_LOGO) will enable `DISPLAY_SHOW_HOME` and disable `DISPLAY_USE_LOGO`.

| Parameters |
| --- |
| `int options` | A combination of the bits defined by the DISPLAY\_ constants defined in ActionBar. |
| `int mask` | A bit mask declaring which display options should be changed. |

### setDisplayShowCustomEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setDisplayShowCustomEnabled(boolean showCustom)
```

Set whether a custom view should be displayed, if set.

To set several display options at once, see the setDisplayOptions methods.

| Parameters |
| --- |
| `boolean showCustom` | true if the currently set custom view should be displayed, false otherwise. |

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### setDisplayShowHomeEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setDisplayShowHomeEnabled(boolean showHome)
```

Set whether to include the application home affordance in the action bar. Home is presented as either an activity icon or logo.

To set several display options at once, see the setDisplayOptions methods.

| Parameters |
| --- |
| `boolean showHome` | true to show home, false otherwise. |

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### setDisplayShowTitleEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setDisplayShowTitleEnabled(boolean showTitle)
```

Set whether an activity title/subtitle should be displayed.

To set several display options at once, see the setDisplayOptions methods.

| Parameters |
| --- |
| `boolean showTitle` | true to display a title/subtitle if present. |

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### setDisplayUseLogoEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setDisplayUseLogoEnabled(boolean useLogo)
```

Set whether to display the activity logo rather than the activity icon. A logo is often a wider, more detailed image.

To set several display options at once, see the setDisplayOptions methods.

| Parameters |
| --- |
| `boolean useLogo` | true to use the activity logo, false to use the activity icon. |

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayOptions` |  |

### setElevation

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setElevation(float elevation)
```

Set the Z-axis elevation of the action bar in pixels.

The action bar's elevation is the distance it is placed from its parent surface. Higher values are closer to the user.

| Parameters |
| --- |
| `float elevation` | Elevation value in pixels |

### setHideOffset

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHideOffset(int offset)
```

Set the current hide offset of the action bar.

The action bar's current hide offset is the distance that the action bar is currently scrolled offscreen in pixels. The valid range is 0 (fully visible) to the action bar's current measured `height` (fully invisible).

| Parameters |
| --- |
| `int offset` | The action bar's offset toward its fully hidden state in pixels. |

### setHideOnContentScrollEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHideOnContentScrollEnabled(boolean hideOnContentScroll)
```

Enable hiding the action bar on content scroll.

If enabled, the action bar will scroll out of sight along with a `nested scrolling child` view's content. The action bar must be in `overlay mode` to enable hiding on content scroll.

When partially scrolled off screen the action bar is considered `hidden`. A call to `show` will cause it to return to full view.

| Parameters |
| --- |
| `boolean hideOnContentScroll` | true to enable hiding on content scroll. |

### setHomeActionContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHomeActionContentDescription(@Nullable CharSequence description)
```

Set an alternate description for the Home/Up action, when enabled.

This description is commonly used for accessibility/screen readers when the Home action is enabled. (See `setDisplayHomeAsUpEnabled`.) Examples of this are, "Navigate Home" or "Navigate Up" depending on the `DISPLAY_HOME_AS_UP` display option. If you have changed the home-as-up indicator using `setHomeAsUpIndicator` to indicate more specific functionality such as a sliding drawer, you should also set this to accurately describe the action.

Setting this to `null` will use the system default description.

| Parameters |
| --- |
| `@Nullable CharSequence description` | New description for the Home action when enabled |

| See also |
| --- |
| `setHomeAsUpIndicator` |  |
| `setHomeAsUpIndicator` |  |

### setHomeActionContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHomeActionContentDescription(@StringRes int resId)
```

Set an alternate description for the Home/Up action, when enabled.

This description is commonly used for accessibility/screen readers when the Home action is enabled. (See `setDisplayHomeAsUpEnabled`.) Examples of this are, "Navigate Home" or "Navigate Up" depending on the `DISPLAY_HOME_AS_UP` display option. If you have changed the home-as-up indicator using `setHomeAsUpIndicator` to indicate more specific functionality such as a sliding drawer, you should also set this to accurately describe the action.

Setting this to `0` will use the system default description.

| Parameters |
| --- |
| `@StringRes int resId` | Resource ID of a string to use as the new description for the Home action when enabled |

| See also |
| --- |
| `setHomeAsUpIndicator` |  |
| `setHomeAsUpIndicator` |  |

### setHomeAsUpIndicator

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHomeAsUpIndicator(@Nullable Drawable indicator)
```

Set an alternate drawable to display next to the icon/logo/title when `DISPLAY_HOME_AS_UP` is enabled. This can be useful if you are using this mode to display an alternate selection for up navigation, such as a sliding drawer.

If you pass `null` to this method, the default drawable from the theme will be used.

If you implement alternate or intermediate behavior around Up, you should also call `setHomeActionContentDescription()` to provide a correct description of the action for accessibility support.

| Parameters |
| --- |
| `@Nullable Drawable indicator` | A drawable to use for the up indicator, or null to use the theme's default |

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayHomeAsUpEnabled` |  |
| `setHomeActionContentDescription` |  |

### setHomeAsUpIndicator

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHomeAsUpIndicator(@DrawableRes int resId)
```

Set an alternate drawable to display next to the icon/logo/title when `DISPLAY_HOME_AS_UP` is enabled. This can be useful if you are using this mode to display an alternate selection for up navigation, such as a sliding drawer.

If you pass `0` to this method, the default drawable from the theme will be used.

If you implement alternate or intermediate behavior around Up, you should also call `setHomeActionContentDescription()` to provide a correct description of the action for accessibility support.

| Parameters |
| --- |
| `@DrawableRes int resId` | Resource ID of a drawable to use for the up indicator, or null to use the theme's default |

| See also |
| --- |
| `setDisplayOptions` |  |
| `setDisplayHomeAsUpEnabled` |  |
| `setHomeActionContentDescription` |  |

### setHomeButtonEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setHomeButtonEnabled(boolean enabled)
```

Enable or disable the "home" button in the corner of the action bar. (Note that this is the application home/up affordance on the action bar, not the system wide home button.)

The application should call this method to enable interaction with the home/up affordance.

Setting the `DISPLAY_HOME_AS_UP` display option will automatically enable the home button.

| Parameters |
| --- |
| `boolean enabled` | true to enable the home button, false to disable the home button. |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setIcon(Drawable icon)
```

Set the icon to display in the 'home' section of the action bar. The action bar will use an icon specified by its style or the activity icon by default. Whether the home section shows an icon or logo is controlled by the display option `DISPLAY_USE_LOGO`.

| Parameters |
| --- |
| `Drawable icon` | Drawable to show as an icon. |

| See also |
| --- |
| `setDisplayUseLogoEnabled` |  |
| `setDisplayShowHomeEnabled` |  |

### setIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setIcon(@DrawableRes int resId)
```

Set the icon to display in the 'home' section of the action bar. The action bar will use an icon specified by its style or the activity icon by default. Whether the home section shows an icon or logo is controlled by the display option `DISPLAY_USE_LOGO`.

| Parameters |
| --- |
| `@DrawableRes int resId` | Resource ID of a drawable to show as an icon. |

| See also |
| --- |
| `setDisplayUseLogoEnabled` |  |
| `setDisplayShowHomeEnabled` |  |

### setListNavigationCallbacks

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setListNavigationCallbacks(  
    SpinnerAdapter adapter,  
    ActionBar.OnNavigationListener callback  
)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Set the adapter and navigation callback for list navigation mode. The supplied adapter will provide views for the expanded list as well as the currently selected item. (These may be displayed differently.) The supplied OnNavigationListener will alert the application when the user changes the current list selection.

| Parameters |
| --- |
| `SpinnerAdapter adapter` | An adapter that will provide views both to display the current navigation selection and populate views within the dropdown navigation menu. |
| `ActionBar.OnNavigationListener callback` | An OnNavigationListener that will receive events when the user selects a navigation item. |

### setLogo

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setLogo(Drawable logo)
```

Set the logo to display in the 'home' section of the action bar. The action bar will use a logo specified by its style or the activity logo by default. Whether the home section shows an icon or logo is controlled by the display option `DISPLAY_USE_LOGO`.

| Parameters |
| --- |
| `Drawable logo` | Drawable to show as a logo. |

| See also |
| --- |
| `setDisplayUseLogoEnabled` |  |
| `setDisplayShowHomeEnabled` |  |

### setLogo

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setLogo(@DrawableRes int resId)
```

Set the logo to display in the 'home' section of the action bar. The action bar will use a logo specified by its style or the activity logo by default. Whether the home section shows an icon or logo is controlled by the display option `DISPLAY_USE_LOGO`.

| Parameters |
| --- |
| `@DrawableRes int resId` | Resource ID of a drawable to show as a logo. |

| See also |
| --- |
| `setDisplayUseLogoEnabled` |  |
| `setDisplayShowHomeEnabled` |  |

### setNavigationMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setNavigationMode(int mode)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Set the current navigation mode.

| Parameters |
| --- |
| `int mode` | The new mode to set. |

| See also |
| --- |
| `NAVIGATION_MODE_STANDARD` |  |
| `NAVIGATION_MODE_LIST` |  |
| `NAVIGATION_MODE_TABS` |  |

### setSelectedNavigationItem

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

Deprecated in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setSelectedNavigationItem(int position)
```

**This method is deprecated.**  

Action bar navigation modes are deprecated and not supported by inline toolbar action bars. Consider using other [common navigation patterns](http://developer.android.com/design/patterns/navigation.html) instead.

Set the selected navigation item in list or tabbed navigation modes.

| Parameters |
| --- |
| `int position` | Position of the item to select. |

### setSplitBackgroundDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSplitBackgroundDrawable(Drawable d)
```

Set the ActionBar's split background. This will appear in the split action bar containing menu-provided action buttons on some devices and configurations.

You can enable split action bar with `uiOptions`

| Parameters |
| --- |
| `Drawable d` | Background drawable for the split bar |

### setStackedBackgroundDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setStackedBackgroundDrawable(Drawable d)
```

Set the ActionBar's stacked background. This will appear in the second row/stacked bar on some devices and configurations.

| Parameters |
| --- |
| `Drawable d` | Background drawable for the stacked row |

### setSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setSubtitle(int resId)
```

Set the action bar's subtitle. This will only be displayed if `DISPLAY_SHOW_TITLE` is set.

| Parameters |
| --- |
| `int resId` | Resource ID of subtitle string to set |

| See also |
| --- |
| `setSubtitle` |  |
| `setDisplayOptions` |  |

### setSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setSubtitle(CharSequence subtitle)
```

Set the action bar's subtitle. This will only be displayed if `DISPLAY_SHOW_TITLE` is set. Set to null to disable the subtitle entirely.

| Parameters |
| --- |
| `CharSequence subtitle` | Subtitle to set |

| See also |
| --- |
| `setSubtitle` |  |
| `setDisplayOptions` |  |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setTitle(@StringRes int resId)
```

Set the action bar's title. This will only be displayed if `DISPLAY_SHOW_TITLE` is set.

| Parameters |
| --- |
| `@StringRes int resId` | Resource ID of title string to set |

| See also |
| --- |
| `setTitle` |  |
| `setDisplayOptions` |  |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void setTitle(CharSequence title)
```

Set the action bar's title. This will only be displayed if `DISPLAY_SHOW_TITLE` is set.

| Parameters |
| --- |
| `CharSequence title` | Title to set |

| See also |
| --- |
| `setTitle` |  |
| `setDisplayOptions` |  |

### show

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public abstract void show()
```

Show the ActionBar if it is not currently showing. If the window hosting the ActionBar does not have the feature `FEATURE_ACTION_BAR_OVERLAY` it will resize application content to fit the new space available.

If you are hiding the ActionBar through `View.SYSTEM_UI_FLAG_FULLSCREEN`, you should not call this function directly.