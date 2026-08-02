--- source: https://developer.android.com/reference/androidx/appcompat/widget/Toolbar ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# Toolbar

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/Toolbar.java+class:androidx.appcompat.widget.Toolbar)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/Toolbar "View this page in Kotlin")
|Java

```
public class Toolbar extends ViewGroup implements MenuHost
```

|  |  |  |  |
| --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | |
| ↳ | [android.view.View](https://developer.android.com/reference/android/view/View.html) | | |
|  | ↳ | [android.view.ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) | |
|  |  | ↳ | [androidx.appcompat.widget.Toolbar](/reference/androidx/appcompat/widget/Toolbar) |

---

A standard toolbar for use within application content.

A Toolbar is a generalization of `action bars` for use within application layouts. While an action bar is traditionally part of an `Activity's` opaque window decor controlled by the framework, a Toolbar may be placed at any arbitrary level of nesting within a view hierarchy. An application may choose to designate a Toolbar as the action bar for an Activity using the `setSupportActionBar()` method.

Toolbar supports a more focused feature set than ActionBar. From start to end, a toolbar may contain a combination of the following optional elements:

* *A navigation button.* This may be an Up arrow, navigation menu toggle, close, collapse, done or another glyph of the app's choosing. This button should always be used to access other navigational destinations within the container of the Toolbar and its signified content or otherwise leave the current context signified by the Toolbar. The navigation button is vertically aligned within the Toolbar's minimum height, if set.
* *A branded logo image.* This may extend to the height of the bar and can be arbitrarily wide.
* *A title and subtitle.* The title should be a signpost for the Toolbar's current position in the navigation hierarchy and the content contained there. The subtitle, if present should indicate any extended information about the current content. If an app uses a logo image it should strongly consider omitting a title and subtitle.
* *One or more custom views.* The application may add arbitrary child views to the Toolbar. They will appear at this position within the layout. If a child view's `LayoutParams` indicates a `Gravity` value of `CENTER_HORIZONTAL` the view will attempt to center within the available space remaining in the Toolbar after all other elements have been measured.
* *An `action menu`.* The menu of actions will pin to the end of the Toolbar offering a few  [frequent, important or typical](http://developer.android.com/design/patterns/actionbar.html#ActionButtons) actions along with an optional overflow menu for additional actions. Action buttons are vertically aligned within the Toolbar's minimum height, if set.

In modern Android UIs developers should lean more on a visually distinct color scheme for toolbars than on their application icon. The use of application icon plus title as a standard layout is discouraged on API 21 devices and newer.

`buttonGravity``collapseContentDescription``collapseIcon``contentInsetEnd``contentInsetLeft``contentInsetRight``contentInsetStart``contentInsetStartWithNavigation``contentInsetEndWithActions``gravity``logo``logoDescription``maxButtonHeight``navigationContentDescription``navigationIcon``popupTheme``subtitle``subtitleTextAppearance``subtitleTextColor``title``titleMargin``titleMarginBottom``titleMarginEnd``titleMarginStart``titleMarginTop``titleTextAppearance``titleTextColor`menu

## Summary

| Nested types |
| --- |
| `public class Toolbar.LayoutParams extends ActionBar.LayoutParams`  Layout information for child views of Toolbars. |
| `public interface Toolbar.OnMenuItemClickListener`  Interface responsible for receiving menu item click events if the items themselves do not have individual item click listeners. |
| `public class Toolbar.SavedState extends AbsSavedState` |

| Public constructors |
| --- |
| `Toolbar(@NonNull Context context)` |
| `Toolbar(@NonNull Context context, @Nullable AttributeSet attrs)` |
| `Toolbar(     @NonNull Context context,     @Nullable AttributeSet attrs,     int defStyleAttr )` |

| Public methods |
| --- |
| `void` | `@MainThread addMenuProvider(@NonNull MenuProvider provider)`  Adds the given `MenuProvider` to this `MenuHost`. |
| `void` | `@MainThread addMenuProvider(     @NonNull MenuProvider provider,     @NonNull LifecycleOwner owner )`  Adds the given `MenuProvider` to this `MenuHost`. |
| `void` | `@MainThread addMenuProvider(     @NonNull MenuProvider provider,     @NonNull LifecycleOwner owner,     @NonNull Lifecycle.State state )`  Adds the given `MenuProvider` to this `MenuHost` once the given `LifecycleOwner` reaches the given `Lifecycle.State`. |
| `void` | `collapseActionView()`  Collapse a currently expanded action view. |
| `void` | `dismissPopupMenus()`  Dismiss all currently showing popup menus, including overflow or submenus. |
| `Toolbar.LayoutParams` | `generateLayoutParams(AttributeSet attrs)` |
| `@Nullable CharSequence` | `@Attribute(value = "androidx.appcompat:collapseContentDescription") getCollapseContentDescription()`  Retrieve the currently configured content description for the collapse button view. |
| `@Nullable Drawable` | `@Attribute(value = "androidx.appcompat:collapseIcon") getCollapseIcon()`  Return the current drawable used as the collapse icon. |
| `int` | `@Attribute(value = "androidx.appcompat:contentInsetEnd") getContentInsetEnd()`  Gets the ending content inset for this toolbar. |
| `int` | `@Attribute(value = "androidx.appcompat:contentInsetEndWithActions") getContentInsetEndWithActions()`  Gets the end content inset to use when action buttons are present. |
| `int` | `@Attribute(value = "androidx.appcompat:contentInsetLeft") getContentInsetLeft()`  Gets the left content inset for this toolbar. |
| `int` | `@Attribute(value = "androidx.appcompat:contentInsetRight") getContentInsetRight()`  Gets the right content inset for this toolbar. |
| `int` | `@Attribute(value = "androidx.appcompat:contentInsetStart") getContentInsetStart()`  Gets the starting content inset for this toolbar. |
| `int` | `@Attribute(value = "androidx.appcompat:contentInsetStartWithNavigation") getContentInsetStartWithNavigation()`  Gets the start content inset to use when a navigation button is present. |
| `int` | `getCurrentContentInsetEnd()`  Gets the content inset that will be used on the ending side of the bar in the current toolbar configuration. |
| `int` | `getCurrentContentInsetLeft()`  Gets the content inset that will be used on the left side of the bar in the current toolbar configuration. |
| `int` | `getCurrentContentInsetRight()`  Gets the content inset that will be used on the right side of the bar in the current toolbar configuration. |
| `int` | `getCurrentContentInsetStart()`  Gets the content inset that will be used on the starting side of the bar in the current toolbar configuration. |
| `Drawable` | `@Attribute(value = "androidx.appcompat:logo") getLogo()`  Return the current logo drawable. |
| `CharSequence` | `@Attribute(value = "androidx.appcompat:logoDescription") getLogoDescription()`  Return the description of the toolbar's logo. |
| `Menu` | `@Attribute(value = "androidx.appcompat:menu") getMenu()`  Return the Menu shown in the toolbar. |
| `@Nullable CharSequence` | `@Attribute(value = "androidx.appcompat:navigationContentDescription") getNavigationContentDescription()`  Retrieve the currently configured content description for the navigation button view. |
| `@Nullable Drawable` | `@Attribute(value = "androidx.appcompat:navigationIcon") getNavigationIcon()`  Return the current drawable used as the navigation icon. |
| `@Nullable Drawable` | `getOverflowIcon()`  Return the current drawable used as the overflow icon. |
| `@StyleRes int` | `@Attribute(value = "androidx.appcompat:popupTheme") getPopupTheme()` |
| `CharSequence` | `@Attribute(value = "androidx.appcompat:subtitle") getSubtitle()`  Return the subtitle of this toolbar. |
| `CharSequence` | `@Attribute(value = "androidx.appcompat:title") getTitle()`  Returns the title of this toolbar. |
| `int` | `@Attribute(value = "androidx.appcompat:titleMarginBottom") getTitleMarginBottom()` |
| `int` | `@Attribute(value = "androidx.appcompat:titleMarginEnd") getTitleMarginEnd()` |
| `int` | `@Attribute(value = "androidx.appcompat:titleMarginStart") getTitleMarginStart()` |
| `int` | `@Attribute(value = "androidx.appcompat:titleMarginTop") getTitleMarginTop()` |
| `boolean` | `hasExpandedActionView()`  Check whether this Toolbar is currently hosting an expanded action view. |
| `boolean` | `hideOverflowMenu()`  Hide the overflow items from the associated menu. |
| `void` | `inflateMenu(@MenuRes int resId)`  Inflate a menu resource into this toolbar. |
| `void` | `@MainThread invalidateMenu()`  Invalidates the to ensure that what is displayed matches the current internal state of the menu. |
| `boolean` | `isBackInvokedCallbackEnabled()`  Returns whether the toolbar will attempt to register its own `OnBackInvokedCallback` in supported configurations to handle collapsing expanded action items when a back invocation occurs. |
| `boolean` | `isOverflowMenuShowing()`  Check whether the overflow menu is currently showing. |
| `boolean` | `onHoverEvent(MotionEvent ev)` |
| `void` | `onRtlPropertiesChanged(int layoutDirection)` |
| `boolean` | `onTouchEvent(MotionEvent ev)` |
| `void` | `@MainThread removeMenuProvider(@NonNull MenuProvider provider)`  Removes the given `MenuProvider` from this `MenuHost`. |
| `void` | `setBackInvokedCallbackEnabled(boolean enabled)`  Sets whether the toolbar will attempt to register its own `OnBackInvokedCallback` in supported configurations to handle collapsing expanded action items when a back invocation occurs. |
| `void` | `setCollapseContentDescription(@Nullable CharSequence description)`  Set a content description for the collapse button if one is present. |
| `void` | `setCollapseContentDescription(@StringRes int resId)`  Set a content description for the collapse button if one is present. |
| `void` | `setCollapseIcon(@Nullable Drawable icon)`  Set the icon to use for the toolbar's collapse button. |
| `void` | `setCollapseIcon(@DrawableRes int resId)`  Set the icon to use for the toolbar's collapse button. |
| `void` | `setContentInsetEndWithActions(int insetEndWithActions)`  Sets the start content inset to use when action buttons are present. |
| `void` | `setContentInsetStartWithNavigation(int insetStartWithNavigation)`  Sets the start content inset to use when a navigation button is present. |
| `void` | `setContentInsetsAbsolute(int contentInsetLeft, int contentInsetRight)`  Sets the content insets for this toolbar. |
| `void` | `setContentInsetsRelative(int contentInsetStart, int contentInsetEnd)`  Sets the content insets for this toolbar relative to layout direction. |
| `void` | `setLogo(Drawable drawable)`  Set a logo drawable. |
| `void` | `setLogo(@DrawableRes int resId)`  Set a logo drawable from a resource id. |
| `void` | `setLogoDescription(CharSequence description)`  Set a description of the toolbar's logo. |
| `void` | `setLogoDescription(@StringRes int resId)`  Set a description of the toolbar's logo. |
| `void` | `setNavigationContentDescription(@Nullable CharSequence description)`  Set a content description for the navigation button if one is present. |
| `void` | `setNavigationContentDescription(@StringRes int resId)`  Set a content description for the navigation button if one is present. |
| `void` | `setNavigationIcon(@Nullable Drawable icon)`  Set the icon to use for the toolbar's navigation button. |
| `void` | `setNavigationIcon(@DrawableRes int resId)`  Set the icon to use for the toolbar's navigation button. |
| `void` | `setNavigationOnClickListener(View.OnClickListener listener)`  Set a listener to respond to navigation events. |
| `void` | `setOnMenuItemClickListener(Toolbar.OnMenuItemClickListener listener)`  Set a listener to respond to menu item click events. |
| `void` | `setOverflowIcon(@Nullable Drawable icon)`  Set the icon to use for the overflow button. |
| `void` | `setPopupTheme(@StyleRes int resId)`  Specifies the theme to use when inflating popup menus. |
| `void` | `setSubtitle(@StringRes int resId)`  Set the subtitle of this toolbar. |
| `void` | `setSubtitle(CharSequence subtitle)`  Set the subtitle of this toolbar. |
| `void` | `setSubtitleTextAppearance(Context context, @StyleRes int resId)`  Sets the text color, size, style, hint color, and highlight color from the specified TextAppearance resource. |
| `void` | `setSubtitleTextColor(@NonNull ColorStateList color)`  Sets the text color of the subtitle, if present. |
| `void` | `setSubtitleTextColor(@ColorInt int color)`  Sets the text color of the subtitle, if present. |
| `void` | `setTitle(@StringRes int resId)`  Set the title of this toolbar. |
| `void` | `setTitle(CharSequence title)`  Set the title of this toolbar. |
| `void` | `setTitleMargin(int start, int top, int end, int bottom)`  Sets the title margin. |
| `void` | `setTitleMarginBottom(int margin)`  Sets the bottom title margin in pixels. |
| `void` | `setTitleMarginEnd(int margin)`  Sets the ending title margin in pixels. |
| `void` | `setTitleMarginStart(int margin)`  Sets the starting title margin in pixels. |
| `void` | `setTitleMarginTop(int margin)`  Sets the top title margin in pixels. |
| `void` | `setTitleTextAppearance(Context context, @StyleRes int resId)`  Sets the text color, size, style, hint color, and highlight color from the specified TextAppearance resource. |
| `void` | `setTitleTextColor(@NonNull ColorStateList color)`  Sets the text color of the title, if present. |
| `void` | `setTitleTextColor(@ColorInt int color)`  Sets the text color of the title, if present. |
| `boolean` | `showOverflowMenu()`  Show the overflow items from the associated menu. |

| Protected methods |
| --- |
| `boolean` | `checkLayoutParams(ViewGroup.LayoutParams p)` |
| `Toolbar.LayoutParams` | `generateDefaultLayoutParams()` |
| `Toolbar.LayoutParams` | `generateLayoutParams(ViewGroup.LayoutParams p)` |
| `void` | `onAttachedToWindow()` |
| `void` | `onDetachedFromWindow()` |
| `void` | `onLayout(boolean changed, int l, int t, int r, int b)` |
| `void` | `onMeasure(int widthMeasureSpec, int heightMeasureSpec)` |
| `void` | `onRestoreInstanceState(Parcelable state)` |
| `Parcelable` | `onSaveInstanceState()` |

| Extension functions |
| --- |
| `final void` | `ToolbarKt.setupWithNavController(     @NonNull Toolbar receiver,     @NonNull NavController navController,     @NonNull AppBarConfiguration configuration )`  Sets up a `Toolbar` for use with a `NavController`. |
| `final void` | `ToolbarKt.setupWithNavController(     @NonNull Toolbar receiver,     @NonNull NavController navController,     DrawerLayout drawerLayout )`  Sets up a `Toolbar` for use with a `NavController`. |

| Inherited Constants |
| --- |
| From [android.view.View](https://developer.android.com/reference/android/view/View.html) |  |  | | --- | --- | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_AUTO = 0` | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_NO = 2` | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_YES = 1` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_ASSERTIVE = 2` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_NONE = 0` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_POLITE = 1` | | `static final Property<View, Float>` | `ALPHA` | | `static final int` | `AUTOFILL_FLAG_INCLUDE_NOT_IMPORTANT_VIEWS = 1` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DATE = "creditCardExpirationDate"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DAY = "creditCardExpirationDay"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_MONTH = "creditCardExpirationMonth"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_YEAR = "creditCardExpirationYear"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_NUMBER = "creditCardNumber"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_SECURITY_CODE = "creditCardSecurityCode"` | | `static final String` | `AUTOFILL_HINT_EMAIL_ADDRESS = "emailAddress"` | | `static final String` | `AUTOFILL_HINT_NAME = "name"` | | `static final String` | `AUTOFILL_HINT_PASSWORD = "password"` | | `static final String` | `AUTOFILL_HINT_PHONE = "phone"` | | `static final String` | `AUTOFILL_HINT_POSTAL_ADDRESS = "postalAddress"` | | `static final String` | `AUTOFILL_HINT_POSTAL_CODE = "postalCode"` | | `static final String` | `AUTOFILL_HINT_USERNAME = "username"` | | `static final int` | `AUTOFILL_TYPE_DATE = 4` | | `static final int` | `AUTOFILL_TYPE_LIST = 3` | | `static final int` | `AUTOFILL_TYPE_NONE = 0` | | `static final int` | `AUTOFILL_TYPE_TEXT = 1` | | `static final int` | `AUTOFILL_TYPE_TOGGLE = 2` | | `static final int` | `CONTENT_SENSITIVITY_AUTO = 0` | | `static final int` | `CONTENT_SENSITIVITY_NOT_SENSITIVE = 2` | | `static final int` | `CONTENT_SENSITIVITY_SENSITIVE = 1` | | `static final int` | `DRAG_FLAG_ACCESSIBILITY_ACTION = 1024` | | `static final int` | `DRAG_FLAG_GLOBAL = 256` | | `static final int` | `DRAG_FLAG_GLOBAL_PERSISTABLE_URI_PERMISSION = 64` | | `static final int` | `DRAG_FLAG_GLOBAL_PREFIX_URI_PERMISSION = 128` | | `static final int` | `DRAG_FLAG_GLOBAL_SAME_APPLICATION = 4096` | | `static final int` | `DRAG_FLAG_GLOBAL_URI_READ = 1` | | `static final int` | `DRAG_FLAG_GLOBAL_URI_WRITE = 2` | | `static final int` | `DRAG_FLAG_HIDE_CALLING_TASK_ON_DRAG_START = 16384` | | `static final int` | `DRAG_FLAG_OPAQUE = 512` | | `static final int` | `DRAG_FLAG_START_INTENT_SENDER_ON_UNHANDLED_DRAG = 8192` | | `static final int` | `DRAWING_CACHE_QUALITY_AUTO = 0`  **This field is deprecated.** | | `static final int` | `DRAWING_CACHE_QUALITY_HIGH = 1048576`  **This field is deprecated.** | | `static final int` | `DRAWING_CACHE_QUALITY_LOW = 524288`  **This field is deprecated.** | | `static final int[]` | `EMPTY_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_SELECTED_STATE_SET` | | `static final int[]` | `ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_STATE_SET` | | `static final int[]` | `ENABLED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `FIND_VIEWS_WITH_CONTENT_DESCRIPTION = 2` | | `static final int` | `FIND_VIEWS_WITH_TEXT = 1` | | `static final int` | `FOCUSABLE = 1` | | `static final int` | `FOCUSABLES_ALL = 0` | | `static final int` | `FOCUSABLES_TOUCH_MODE = 1` | | `static final int` | `FOCUSABLE_AUTO = 16` | | `static final int[]` | `FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `FOCUSED_STATE_SET` | | `static final int[]` | `FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `FOCUS_BACKWARD = 1` | | `static final int` | `FOCUS_DOWN = 130` | | `static final int` | `FOCUS_FORWARD = 2` | | `static final int` | `FOCUS_LEFT = 17` | | `static final int` | `FOCUS_RIGHT = 66` | | `static final int` | `FOCUS_UP = 33` | | `static final int` | `GONE = 8` | | `static final int` | `HAPTIC_FEEDBACK_ENABLED = 268435456` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_NO = 2` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS = 4` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_YES = 1` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_NO = 2` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_NO_EXCLUDE_DESCENDANTS = 8` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_YES = 1` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_YES_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_NO = 2` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_NO_EXCLUDE_DESCENDANTS = 8` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_YES = 1` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_YES_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `INVISIBLE = 4` | | `static final int` | `KEEP_SCREEN_ON = 67108864` | | `static final int` | `LAYER_TYPE_HARDWARE = 2` | | `static final int` | `LAYER_TYPE_NONE = 0` | | `static final int` | `LAYER_TYPE_SOFTWARE = 1` | | `static final int` | `LAYOUT_DIRECTION_INHERIT = 2` | | `static final int` | `LAYOUT_DIRECTION_LOCALE = 3` | | `static final int` | `LAYOUT_DIRECTION_LTR = 0` | | `static final int` | `LAYOUT_DIRECTION_RTL = 1` | | `static final int` | `MEASURED_HEIGHT_STATE_SHIFT = 16` | | `static final int` | `MEASURED_SIZE_MASK = 16777215` | | `static final int` | `MEASURED_STATE_MASK = -16777216` | | `static final int` | `MEASURED_STATE_TOO_SMALL = 16777216` | | `static final int` | `NOT_FOCUSABLE = 0` | | `static final int` | `NO_ID = -1` | | `static final int` | `OVER_SCROLL_ALWAYS = 0` | | `static final int` | `OVER_SCROLL_IF_CONTENT_SCROLLS = 1` | | `static final int` | `OVER_SCROLL_NEVER = 2` | | `static final int` | `POINTER_CAPTURE_MODE_ABSOLUTE = 1` | | `static final int` | `POINTER_CAPTURE_MODE_RELATIVE = 2` | | `static final int` | `POINTER_CAPTURE_MODE_UNCAPTURED = 0` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_STATE_SET` | | `static final int[]` | `PRESSED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_INPUT_FOCUS = 3` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_SCROLL_ONLY = 1` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_TEXT_CURSOR = 2` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_UNDEFINED = 0` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_DEFAULT` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_HIGH = -4.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_LOW = -2.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_NORMAL = -3.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_NO_PREFERENCE = -1.0f` | | `static final Property<View, Float>` | `ROTATION` | | `static final Property<View, Float>` | `ROTATION_X` | | `static final Property<View, Float>` | `ROTATION_Y` | | `static final Property<View, Float>` | `SCALE_X` | | `static final Property<View, Float>` | `SCALE_Y` | | `static final int` | `SCREEN_STATE_OFF = 0` | | `static final int` | `SCREEN_STATE_ON = 1` | | `static final int` | `SCROLLBARS_INSIDE_INSET = 16777216` | | `static final int` | `SCROLLBARS_INSIDE_OVERLAY = 0` | | `static final int` | `SCROLLBARS_OUTSIDE_INSET = 50331648` | | `static final int` | `SCROLLBARS_OUTSIDE_OVERLAY = 33554432` | | `static final int` | `SCROLLBAR_POSITION_DEFAULT = 0` | | `static final int` | `SCROLLBAR_POSITION_LEFT = 1` | | `static final int` | `SCROLLBAR_POSITION_RIGHT = 2` | | `static final int` | `SCROLL_AXIS_HORIZONTAL = 1` | | `static final int` | `SCROLL_AXIS_NONE = 0` | | `static final int` | `SCROLL_AXIS_VERTICAL = 2` | | `static final int` | `SCROLL_CAPTURE_HINT_AUTO = 0` | | `static final int` | `SCROLL_CAPTURE_HINT_EXCLUDE = 1` | | `static final int` | `SCROLL_CAPTURE_HINT_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `SCROLL_CAPTURE_HINT_INCLUDE = 2` | | `static final int` | `SCROLL_INDICATOR_BOTTOM = 2` | | `static final int` | `SCROLL_INDICATOR_END = 32` | | `static final int` | `SCROLL_INDICATOR_LEFT = 4` | | `static final int` | `SCROLL_INDICATOR_RIGHT = 8` | | `static final int` | `SCROLL_INDICATOR_START = 16` | | `static final int` | `SCROLL_INDICATOR_TOP = 1` | | `static final int[]` | `SELECTED_STATE_SET` | | `static final int[]` | `SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `SOUND_EFFECTS_ENABLED = 134217728` | | `static final int` | `STATUS_BAR_HIDDEN = 1`  **This field is deprecated.** | | `static final int` | `STATUS_BAR_VISIBLE = 0`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_FULLSCREEN = 4`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_HIDE_NAVIGATION = 2`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_IMMERSIVE = 2048`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_IMMERSIVE_STICKY = 4096`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN = 1024`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION = 512`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_STABLE = 256`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR = 16`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LIGHT_STATUS_BAR = 8192`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LOW_PROFILE = 1`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_VISIBLE = 0`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_LAYOUT_FLAGS = 1536`  **This field is deprecated.** | | `static final int` | `TEXT_ALIGNMENT_CENTER = 4` | | `static final int` | `TEXT_ALIGNMENT_GRAVITY = 1` | | `static final int` | `TEXT_ALIGNMENT_INHERIT = 0` | | `static final int` | `TEXT_ALIGNMENT_TEXT_END = 3` | | `static final int` | `TEXT_ALIGNMENT_TEXT_START = 2` | | `static final int` | `TEXT_ALIGNMENT_VIEW_END = 6` | | `static final int` | `TEXT_ALIGNMENT_VIEW_START = 5` | | `static final int` | `TEXT_DIRECTION_ANY_RTL = 2` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG = 1` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG_LTR = 6` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG_RTL = 7` | | `static final int` | `TEXT_DIRECTION_INHERIT = 0` | | `static final int` | `TEXT_DIRECTION_LOCALE = 5` | | `static final int` | `TEXT_DIRECTION_LTR = 3` | | `static final int` | `TEXT_DIRECTION_RTL = 4` | | `static final Property<View, Float>` | `TRANSLATION_X` | | `static final Property<View, Float>` | `TRANSLATION_Y` | | `static final Property<View, Float>` | `TRANSLATION_Z` | | `static final String` | `VIEW_LOG_TAG = "View"` | | `static final int` | `VISIBLE = 0` | | `static final int[]` | `WINDOW_FOCUSED_STATE_SET` | | `static final Property<View, Float>` | `X` | | `static final Property<View, Float>` | `Y` | | `static final Property<View, Float>` | `Z` | |
| From [android.view.ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) |  |  | | --- | --- | | `static final int` | `CLIP_TO_PADDING_MASK = 34` | | `static final int` | `FOCUS_AFTER_DESCENDANTS = 262144` | | `static final int` | `FOCUS_BEFORE_DESCENDANTS = 131072` | | `static final int` | `FOCUS_BLOCK_DESCENDANTS = 393216` | | `static final int` | `LAYOUT_MODE_CLIP_BOUNDS = 0` | | `static final int` | `LAYOUT_MODE_OPTICAL_BOUNDS = 1` | | `static final int` | `PERSISTENT_ALL_CACHES = 3`  **This field is deprecated.** | | `static final int` | `PERSISTENT_ANIMATION_CACHE = 1`  **This field is deprecated.** | | `static final int` | `PERSISTENT_NO_CACHE = 0`  **This field is deprecated.** | | `static final int` | `PERSISTENT_SCROLLING_CACHE = 2`  **This field is deprecated.** | |

| Inherited methods |
| --- |
| From [android.view.View](https://developer.android.com/reference/android/view/View.html) |  |  | | --- | --- | | `void` | `addOnAttachStateChangeListener(     View.OnAttachStateChangeListener listener )` | | `void` | `addOnLayoutChangeListener(View.OnLayoutChangeListener listener)` | | `void` | `addOnUnhandledKeyEventListener(     View.OnUnhandledKeyEventListener listener )` | | `ViewPropertyAnimator` | `animate()` | | `void` | `announceForAccessibility(CharSequence text)`  **This method is deprecated.** | | `void` | `autofill(SparseArray<AutofillValue> values)` | | `boolean` | `awakenScrollBars()` | | `void` | `bringToFront()` | | `void` | `buildDrawingCache()`  **This method is deprecated.** | | `void` | `buildLayer()` | | `boolean` | `callOnClick()` | | `boolean` | `canResolveLayoutDirection()` | | `boolean` | `canResolveTextAlignment()` | | `boolean` | `canResolveTextDirection()` | | `boolean` | `canScrollHorizontally(int direction)` | | `boolean` | `canScrollVertically(int direction)` | | `final void` | `cancelDragAndDrop()` | | `void` | `cancelLongPress()` | | `final void` | `cancelPendingInputEvents()` | | `boolean` | `checkInputConnectionProxy(View view)` | | `void` | `clearAnimation()` | | `void` | `clearPendingCredentialRequest()` | | `void` | `clearViewTranslationCallback()` | | `static int` | `combineMeasuredStates(int curState, int newState)` | | `int` | `computeHorizontalScrollExtent()` | | `int` | `computeHorizontalScrollOffset()` | | `int` | `computeHorizontalScrollRange()` | | `void` | `computeScroll()` | | `WindowInsets` | `computeSystemWindowInsets(WindowInsets in, Rect outLocalInsets)` | | `int` | `computeVerticalScrollExtent()` | | `int` | `computeVerticalScrollOffset()` | | `int` | `computeVerticalScrollRange()` | | `AccessibilityNodeInfo` | `createAccessibilityNodeInfo()` | | `void` | `createContextMenu(ContextMenu menu)` | | `void` | `destroyDrawingCache()`  **This method is deprecated.** | | `boolean` | `dispatchGenericMotionEvent(MotionEvent event)` | | `boolean` | `dispatchNestedFling(float velocityX, float velocityY, boolean consumed)` | | `boolean` | `dispatchNestedPreFling(float velocityX, float velocityY)` | | `boolean` | `dispatchNestedPrePerformAccessibilityAction(     int action,     Bundle arguments )` | | `boolean` | `dispatchNestedPreScroll(     int dx,     int dy,     int[] consumed,     int[] offsetInWindow )` | | `boolean` | `dispatchNestedScroll(     int dxConsumed,     int dyConsumed,     int dxUnconsumed,     int dyUnconsumed,     int[] offsetInWindow )` | | `boolean` | `dispatchPopulateAccessibilityEvent(AccessibilityEvent event)` | | `void` | `draw(Canvas canvas)` | | `void` | `drawableHotspotChanged(float x, float y)` | | `final OnBackInvokedDispatcher` | `findOnBackInvokedDispatcher()` | | `final T` | `<T extends View> findViewById(int id)` | | `final T` | `<T extends View> findViewWithTag(Object tag)` | | `boolean` | `fitSystemWindows(Rect insets)`  **This method is deprecated.** | | `void` | `forceHasOverlappingRendering(boolean hasOverlappingRendering)` | | `void` | `forceLayout()` | | `void` | `generateDisplayHash(     String hashAlgorithm,     Rect bounds,     Executor executor,     DisplayHashResultCallback callback )` | | `static int` | `generateViewId()` | | `View.AccessibilityDelegate` | `getAccessibilityDelegate()` | | `int` | `getAccessibilityLiveRegion()` | | `AccessibilityNodeProvider` | `getAccessibilityNodeProvider()` | | `CharSequence` | `getAccessibilityPaneTitle()` | | `int` | `getAccessibilityTraversalAfter()` | | `int` | `getAccessibilityTraversalBefore()` | | `String` | `getAllowedHandwritingDelegatePackageName()` | | `String` | `getAllowedHandwritingDelegatorPackageName()` | | `float` | `getAlpha()` | | `Animation` | `getAnimation()` | | `Matrix` | `getAnimationMatrix()` | | `IBinder` | `getApplicationWindowToken()` | | `int[]` | `getAttributeResolutionStack(int attribute)` | | `Map<Integer, Integer>` | `getAttributeSourceResourceMap()` | | `String[]` | `getAutofillHints()` | | `final AutofillId` | `getAutofillId()` | | `int` | `getAutofillType()` | | `AutofillValue` | `getAutofillValue()` | | `Drawable` | `getBackground()` | | `BlendMode` | `getBackgroundTintBlendMode()` | | `ColorStateList` | `getBackgroundTintList()` | | `PorterDuff.Mode` | `getBackgroundTintMode()` | | `int` | `getBaseline()` | | `final int` | `getBottom()` | | `float` | `getBottomFadingEdgeStrength()` | | `int` | `getBottomPaddingOffset()` | | `float` | `getCameraDistance()` | | `Rect` | `getClipBounds()` | | `boolean` | `getClipBounds(Rect outRect)` | | `final boolean` | `getClipToOutline()` | | `final ContentCaptureSession` | `getContentCaptureSession()` | | `CharSequence` | `getContentDescription()` | | `final int` | `getContentSensitivity()` | | `final Context` | `getContext()` | | `ContextMenu.ContextMenuInfo` | `getContextMenuInfo()` | | `final boolean` | `getDefaultFocusHighlightEnabled()` | | `static int` | `getDefaultSize(int size, int measureSpec)` | | `Display` | `getDisplay()` | | `final int[]` | `getDrawableState()` | | `Bitmap` | `getDrawingCache()`  **This method is deprecated.** | | `int` | `getDrawingCacheBackgroundColor()`  **This method is deprecated.** | | `int` | `getDrawingCacheQuality()`  **This method is deprecated.** | | `void` | `getDrawingRect(Rect outRect)` | | `long` | `getDrawingTime()` | | `float` | `getElevation()` | | `int` | `getExplicitStyle()` | | `boolean` | `getFilterTouchesWhenObscured()` | | `boolean` | `getFitsSystemWindows()` | | `int` | `getFocusable()` | | `ArrayList<View>` | `getFocusables(int direction)` | | `void` | `getFocusedRect(Rect r)` | | `Drawable` | `getForeground()` | | `int` | `getForegroundGravity()` | | `BlendMode` | `getForegroundTintBlendMode()` | | `ColorStateList` | `getForegroundTintList()` | | `PorterDuff.Mode` | `getForegroundTintMode()` | | `float` | `getFrameContentVelocity()` | | `final boolean` | `getGlobalVisibleRect(Rect r)` | | `Handler` | `getHandler()` | | `float` | `getHandwritingBoundsOffsetBottom()` | | `float` | `getHandwritingBoundsOffsetLeft()` | | `float` | `getHandwritingBoundsOffsetRight()` | | `float` | `getHandwritingBoundsOffsetTop()` | | `int` | `getHandwritingDelegateFlags()` | | `Runnable` | `getHandwritingDelegatorCallback()` | | `final boolean` | `getHasOverlappingRendering()` | | `final int` | `getHeight()` | | `void` | `getHitRect(Rect outRect)` | | `int` | `getHorizontalFadingEdgeLength()` | | `int` | `getHorizontalScrollbarHeight()` | | `Drawable` | `getHorizontalScrollbarThumbDrawable()` | | `Drawable` | `getHorizontalScrollbarTrackDrawable()` | | `int` | `getId()` | | `int` | `getImportantForAccessibility()` | | `int` | `getImportantForAutofill()` | | `int` | `getImportantForContentCapture()` | | `boolean` | `getKeepScreenOn()` | | `KeyEvent.DispatcherState` | `getKeyDispatcherState()` | | `int` | `getLabelFor()` | | `int` | `getLayerType()` | | `int` | `getLayoutDirection()` | | `ViewGroup.LayoutParams` | `getLayoutParams()` | | `final int` | `getLeft()` | | `float` | `getLeftFadingEdgeStrength()` | | `int` | `getLeftPaddingOffset()` | | `final boolean` | `getLocalVisibleRect(Rect r)` | | `void` | `getLocationInSurface(int[] location)` | | `void` | `getLocationInWindow(int[] outLocation)` | | `void` | `getLocationOnScreen(int[] outLocation)` | | `Matrix` | `getMatrix()` | | `final int` | `getMeasuredHeight()` | | `final int` | `getMeasuredHeightAndState()` | | `final int` | `getMeasuredState()` | | `final int` | `getMeasuredWidth()` | | `final int` | `getMeasuredWidthAndState()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `int` | `getNextClusterForwardId()` | | `int` | `getNextFocusDownId()` | | `int` | `getNextFocusForwardId()` | | `int` | `getNextFocusLeftId()` | | `int` | `getNextFocusRightId()` | | `int` | `getNextFocusUpId()` | | `View.OnFocusChangeListener` | `getOnFocusChangeListener()` | | `int` | `getOutlineAmbientShadowColor()` | | `ViewOutlineProvider` | `getOutlineProvider()` | | `int` | `getOutlineSpotShadowColor()` | | `int` | `getOverScrollMode()` | | `ViewOverlay` | `getOverlay()` | | `int` | `getPaddingBottom()` | | `int` | `getPaddingEnd()` | | `int` | `getPaddingLeft()` | | `int` | `getPaddingRight()` | | `int` | `getPaddingStart()` | | `int` | `getPaddingTop()` | | `final ViewParent` | `getParent()` | | `ViewParent` | `getParentForAccessibility()` | | `final OutcomeReceiver<GetCredentialResponse, GetCredentialException>` | `getPendingCredentialCallback()` | | `final GetCredentialRequest` | `getPendingCredentialRequest()` | | `float` | `getPivotX()` | | `float` | `getPivotY()` | | `PointerIcon` | `getPointerIcon()` | | `final List<Rect>` | `getPreferKeepClearRects()` | | `String[]` | `getReceiveContentMimeTypes()` | | `float` | `getRequestedFrameRate()` | | `Resources` | `getResources()` | | `final boolean` | `getRevealOnFocusHint()` | | `final int` | `getRight()` | | `float` | `getRightFadingEdgeStrength()` | | `int` | `getRightPaddingOffset()` | | `AttachedSurfaceControl` | `getRootSurfaceControl()` | | `View` | `getRootView()` | | `WindowInsets` | `getRootWindowInsets()` | | `float` | `getRotation()` | | `float` | `getRotationX()` | | `float` | `getRotationY()` | | `float` | `getScaleX()` | | `float` | `getScaleY()` | | `int` | `getScrollBarDefaultDelayBeforeFade()` | | `int` | `getScrollBarFadeDuration()` | | `int` | `getScrollBarSize()` | | `int` | `getScrollBarStyle()` | | `int` | `getScrollCaptureHint()` | | `int` | `getScrollIndicators()` | | `final int` | `getScrollX()` | | `final int` | `getScrollY()` | | `int` | `getSolidColor()` | | `int` | `getSourceLayoutResId()` | | `final CharSequence` | `getStateDescription()` | | `StateListAnimator` | `getStateListAnimator()` | | `int` | `getSuggestedMinimumHeight()` | | `int` | `getSuggestedMinimumWidth()` | | `CharSequence` | `getSupplementalDescription()` | | `List<Rect>` | `getSystemGestureExclusionRects()` | | `int` | `getSystemUiVisibility()`  **This method is deprecated.** | | `Object` | `getTag()` | | `int` | `getTextAlignment()` | | `int` | `getTextDirection()` | | `CharSequence` | `getTooltipText()` | | `final int` | `getTop()` | | `float` | `getTopFadingEdgeStrength()` | | `int` | `getTopPaddingOffset()` | | `TouchDelegate` | `getTouchDelegate()` | | `ArrayList<View>` | `getTouchables()` | | `float` | `getTransitionAlpha()` | | `String` | `getTransitionName()` | | `float` | `getTranslationX()` | | `float` | `getTranslationY()` | | `float` | `getTranslationZ()` | | `long` | `getUniqueDrawingId()` | | `int` | `getVerticalFadingEdgeLength()` | | `int` | `getVerticalScrollbarPosition()` | | `Drawable` | `getVerticalScrollbarThumbDrawable()` | | `Drawable` | `getVerticalScrollbarTrackDrawable()` | | `int` | `getVerticalScrollbarWidth()` | | `ViewTranslationResponse` | `getViewTranslationResponse()` | | `ViewTreeObserver` | `getViewTreeObserver()` | | `int` | `getVisibility()` | | `final int` | `getWidth()` | | `int` | `getWindowAttachCount()` | | `WindowId` | `getWindowId()` | | `WindowInsetsController` | `getWindowInsetsController()` | | `int` | `getWindowSystemUiVisibility()`  **This method is deprecated.** | | `IBinder` | `getWindowToken()` | | `int` | `getWindowVisibility()` | | `void` | `getWindowVisibleDisplayFrame(Rect outRect)` | | `float` | `getX()` | | `float` | `getY()` | | `float` | `getZ()` | | `boolean` | `hasExplicitFocusable()` | | `boolean` | `hasFocusable()` | | `boolean` | `hasNestedScrollingParent()` | | `boolean` | `hasOnClickListeners()` | | `boolean` | `hasOnLongClickListeners()` | | `boolean` | `hasOverlappingRendering()` | | `boolean` | `hasPointerCapture()` | | `boolean` | `hasWindowFocus()` | | `static View` | `inflate(Context context, int resource, ViewGroup root)` | | `void` | `invalidate()` | | `void` | `invalidateDrawable(Drawable drawable)` | | `void` | `invalidateOutline()` | | `boolean` | `isAccessibilityDataSensitive()` | | `boolean` | `isAccessibilityFocused()` | | `boolean` | `isAccessibilityHeading()` | | `boolean` | `isActivated()` | | `boolean` | `isAttachedToWindow()` | | `boolean` | `isAutoHandwritingEnabled()` | | `boolean` | `isClickable()` | | `final boolean` | `isContentSensitive()` | | `boolean` | `isContextClickable()` | | `boolean` | `isCredential()`  **This method is deprecated.** | | `boolean` | `isDirty()` | | `boolean` | `isDrawingCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isDuplicateParentStateEnabled()` | | `boolean` | `isEnabled()` | | `final boolean` | `isFocusable()` | | `final boolean` | `isFocusableInTouchMode()` | | `boolean` | `isFocused()` | | `final boolean` | `isFocusedByDefault()` | | `boolean` | `isForceDarkAllowed()` | | `boolean` | `isHandwritingDelegate()` | | `boolean` | `isHapticFeedbackEnabled()` | | `boolean` | `isHardwareAccelerated()` | | `boolean` | `isHorizontalFadingEdgeEnabled()` | | `boolean` | `isHorizontalScrollBarEnabled()` | | `boolean` | `isHovered()` | | `boolean` | `isImportantForAccessibility()` | | `final boolean` | `isImportantForAutofill()` | | `final boolean` | `isImportantForContentCapture()` | | `boolean` | `isInEditMode()` | | `boolean` | `isInLayout()` | | `boolean` | `isInTouchMode()` | | `final boolean` | `isKeyboardNavigationCluster()` | | `boolean` | `isLaidOut()` | | `boolean` | `isLayoutDirectionResolved()` | | `boolean` | `isLayoutRequested()` | | `boolean` | `isLongClickable()` | | `boolean` | `isNestedScrollingEnabled()` | | `boolean` | `isOpaque()` | | `boolean` | `isPaddingOffsetRequired()` | | `boolean` | `isPaddingRelative()` | | `boolean` | `isPivotSet()` | | `final boolean` | `isPreferKeepClear()` | | `boolean` | `isPressed()` | | `boolean` | `isSaveEnabled()` | | `boolean` | `isSaveFromParentEnabled()` | | `boolean` | `isScreenReaderFocusable()` | | `boolean` | `isScrollContainer()` | | `boolean` | `isScrollbarFadingEnabled()` | | `boolean` | `isSelected()` | | `final boolean` | `isShowingLayoutBounds()` | | `boolean` | `isShown()` | | `boolean` | `isSoundEffectsEnabled()` | | `final boolean` | `isTemporarilyDetached()` | | `boolean` | `isTextAlignmentResolved()` | | `boolean` | `isTextDirectionResolved()` | | `boolean` | `isVerticalFadingEdgeEnabled()` | | `boolean` | `isVerticalScrollBarEnabled()` | | `boolean` | `isVisibleToUserForAutofill(int virtualId)` | | `View` | `keyboardNavigationClusterSearch(View currentCluster, int direction)` | | `final void` | `measure(int widthMeasureSpec, int heightMeasureSpec)` | | `static int[]` | `mergeDrawableStates(int[] baseState, int[] additionalState)` | | `void` | `offsetLeftAndRight(int offset)` | | `void` | `offsetTopAndBottom(int offset)` | | `void` | `onAnimationEnd()` | | `void` | `onAnimationStart()` | | `WindowInsets` | `onApplyWindowInsets(WindowInsets insets)` | | `void` | `onCancelPendingInputEvents()` | | `boolean` | `onCapturedPointerEvent(MotionEvent event)` | | `boolean` | `onCheckIsTextEditor()` | | `void` | `onConfigurationChanged(Configuration newConfig)` | | `void` | `onCreateContextMenu(ContextMenu menu)` | | `InputConnection` | `onCreateInputConnection(EditorInfo outAttrs)` | | `void` | `onCreateViewTranslationRequest(     int[] supportedFormats,     Consumer<ViewTranslationRequest> requestsCollector )` | | `void` | `onCreateVirtualViewTranslationRequests(     long[] virtualIds,     int[] supportedFormats,     Consumer<ViewTranslationRequest> requestsCollector )` | | `void` | `onDisplayHint(int hint)` | | `boolean` | `onDragEvent(DragEvent event)` | | `void` | `onDraw(Canvas canvas)` | | `void` | `onDrawForeground(Canvas canvas)` | | `final void` | `onDrawScrollBars(Canvas canvas)` | | `boolean` | `onFilterTouchEventForSecurity(MotionEvent event)` | | `void` | `onFinishInflate()` | | `void` | `onFinishTemporaryDetach()` | | `void` | `onFocusChanged(     boolean gainFocus,     int direction,     Rect previouslyFocusedRect )` | | `boolean` | `onGenericMotionEvent(MotionEvent event)` | | `void` | `onHoverChanged(boolean hovered)` | | `void` | `onInitializeAccessibilityEvent(AccessibilityEvent event)` | | `void` | `onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info)` | | `boolean` | `onKeyDown(int keyCode, KeyEvent event)` | | `boolean` | `onKeyLongPress(int keyCode, KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, KeyEvent event)` | | `boolean` | `onKeyPreIme(int keyCode, KeyEvent event)` | | `boolean` | `onKeyShortcut(int keyCode, KeyEvent event)` | | `boolean` | `onKeyUp(int keyCode, KeyEvent event)` | | `void` | `onOverScrolled(     int scrollX,     int scrollY,     boolean clampedX,     boolean clampedY )` | | `void` | `onPointerCaptureChange(boolean hasCapture)` | | `void` | `onPopulateAccessibilityEvent(AccessibilityEvent event)` | | `void` | `onProvideAutofillStructure(ViewStructure structure, int flags)` | | `void` | `onProvideAutofillVirtualStructure(ViewStructure structure, int flags)` | | `void` | `onProvideContentCaptureStructure(ViewStructure structure, int flags)` | | `void` | `onProvideStructure(ViewStructure structure)` | | `void` | `onProvideVirtualStructure(ViewStructure structure)` | | `ContentInfo` | `onReceiveContent(ContentInfo payload)` | | `void` | `onScreenStateChanged(int screenState)` | | `void` | `onScrollCaptureSearch(     Rect localVisibleRect,     Point windowOffset,     Consumer<ScrollCaptureTarget> targets )` | | `void` | `onScrollChanged(int l, int t, int oldl, int oldt)` | | `boolean` | `onSetAlpha(int alpha)` | | `void` | `onSizeChanged(int w, int h, int oldw, int oldh)` | | `void` | `onStartTemporaryDetach()` | | `boolean` | `onTrackballEvent(MotionEvent event)` | | `void` | `onViewTranslationResponse(ViewTranslationResponse response)` | | `void` | `onVirtualViewTranslationResponses(     LongSparseArray<ViewTranslationResponse> response )` | | `void` | `onVisibilityAggregated(boolean isVisible)` | | `void` | `onVisibilityChanged(View changedView, int visibility)` | | `void` | `onWindowFocusChanged(boolean hasWindowFocus)` | | `void` | `onWindowSystemUiVisibilityChanged(int visible)`  **This method is deprecated.** | | `void` | `onWindowVisibilityChanged(int visibility)` | | `boolean` | `overScrollBy(     int deltaX,     int deltaY,     int scrollX,     int scrollY,     int scrollRangeX,     int scrollRangeY,     int maxOverScrollX,     int maxOverScrollY,     boolean isTouchEvent )` | | `boolean` | `performAccessibilityAction(int action, Bundle arguments)` | | `boolean` | `performClick()` | | `boolean` | `performContextClick()` | | `boolean` | `performHapticFeedback(HapticFeedbackRequest request)` | | `boolean` | `performLongClick()` | | `ContentInfo` | `performReceiveContent(ContentInfo payload)` | | `void` | `playSoundEffect(int soundConstant)` | | `boolean` | `post(Runnable action)` | | `boolean` | `postDelayed(Runnable action, long delayMillis)` | | `void` | `postInvalidate()` | | `void` | `postInvalidateDelayed(long delayMilliseconds)` | | `void` | `postInvalidateOnAnimation()` | | `void` | `postOnAnimation(Runnable action)` | | `void` | `postOnAnimationDelayed(Runnable action, long delayMillis)` | | `void` | `refreshDrawableState()` | | `static void` | `registerCalledFromWrongThreadListener(     View.CalledFromWrongThreadListener listener )` | | `void` | `releasePointerCapture()` | | `boolean` | `removeCallbacks(Runnable action)` | | `void` | `removeOnAttachStateChangeListener(     View.OnAttachStateChangeListener listener )` | | `void` | `removeOnLayoutChangeListener(View.OnLayoutChangeListener listener)` | | `void` | `removeOnUnhandledKeyEventListener(     View.OnUnhandledKeyEventListener listener )` | | `void` | `reportAppJankStats(AppJankStats appJankStats)` | | `void` | `requestApplyInsets()` | | `void` | `requestFitSystemWindows()`  **This method is deprecated.** | | `final boolean` | `requestFocusFromTouch()` | | `void` | `requestLayout()` | | `void` | `requestPointerCapture()` | | `boolean` | `requestRectangleOnScreen(Rect rectangle)` | | `final void` | `requestUnbufferedDispatch(MotionEvent event)` | | `final T` | `<T extends View> requireViewById(int id)` | | `void` | `resetPivot()` | | `static int` | `resolveSize(int size, int measureSpec)` | | `static int` | `resolveSizeAndState(int size, int measureSpec, int childMeasuredState)` | | `void` | `restoreHierarchyState(SparseArray<Parcelable> container)` | | `final void` | `saveAttributeDataForStyleable(     Context context,     int[] styleable,     AttributeSet attrs,     TypedArray t,     int defStyleAttr,     int defStyleRes )` | | `void` | `saveHierarchyState(SparseArray<Parcelable> container)` | | `void` | `scheduleDrawable(Drawable who, Runnable what, long when)` | | `void` | `scrollBy(int x, int y)` | | `void` | `scrollTo(int x, int y)` | | `void` | `sendAccessibilityEvent(int eventType)` | | `void` | `sendAccessibilityEventUnchecked(AccessibilityEvent event)` | | `void` | `setAccessibilityDataSensitive(int accessibilityDataSensitive)` | | `void` | `setAccessibilityDelegate(View.AccessibilityDelegate delegate)` | | `void` | `setAccessibilityHeading(boolean isHeading)` | | `void` | `setAccessibilityLiveRegion(int mode)` | | `void` | `setAccessibilityPaneTitle(CharSequence accessibilityPaneTitle)` | | `void` | `setAccessibilityTraversalAfter(int afterId)` | | `void` | `setAccessibilityTraversalBefore(int beforeId)` | | `void` | `setActivated(boolean activated)` | | `void` | `setAllowClickWhenDisabled(boolean clickableWhenDisabled)` | | `void` | `setAllowedHandwritingDelegatePackage(String allowedPackageName)` | | `void` | `setAllowedHandwritingDelegatorPackage(String allowedPackageName)` | | `void` | `setAlpha(float alpha)` | | `void` | `setAnimation(Animation animation)` | | `void` | `setAnimationMatrix(Matrix matrix)` | | `void` | `setAutoHandwritingEnabled(boolean enabled)` | | `void` | `setAutofillHints(String[] autofillHints)` | | `void` | `setAutofillId(AutofillId id)` | | `void` | `setBackground(Drawable background)` | | `void` | `setBackgroundColor(int color)` | | `void` | `setBackgroundDrawable(Drawable background)`  **This method is deprecated.** | | `void` | `setBackgroundResource(int resid)` | | `void` | `setBackgroundTintBlendMode(BlendMode blendMode)` | | `void` | `setBackgroundTintList(ColorStateList tint)` | | `void` | `setBackgroundTintMode(PorterDuff.Mode tintMode)` | | `final void` | `setBottom(int bottom)` | | `void` | `setCameraDistance(float distance)` | | `void` | `setClickable(boolean clickable)` | | `void` | `setClipBounds(Rect clipBounds)` | | `void` | `setClipToOutline(boolean clipToOutline)` | | `void` | `setContentCaptureSession(ContentCaptureSession contentCaptureSession)` | | `void` | `setContentDescription(CharSequence contentDescription)` | | `final void` | `setContentSensitivity(int mode)` | | `void` | `setContextClickable(boolean contextClickable)` | | `void` | `setDefaultFocusHighlightEnabled(boolean defaultFocusHighlightEnabled)` | | `void` | `setDrawingCacheBackgroundColor(int color)`  **This method is deprecated.** | | `void` | `setDrawingCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setDrawingCacheQuality(int quality)`  **This method is deprecated.** | | `void` | `setDuplicateParentStateEnabled(boolean enabled)` | | `void` | `setElevation(float elevation)` | | `void` | `setEnabled(boolean enabled)` | | `void` | `setFadingEdgeLength(int length)` | | `void` | `setFilterTouchesWhenObscured(boolean enabled)` | | `void` | `setFitsSystemWindows(boolean fitSystemWindows)` | | `void` | `setFocusable(boolean focusable)` | | `void` | `setFocusableInTouchMode(boolean focusableInTouchMode)` | | `void` | `setFocusedByDefault(boolean isFocusedByDefault)` | | `void` | `setForceDarkAllowed(boolean allow)` | | `void` | `setForeground(Drawable foreground)` | | `void` | `setForegroundGravity(int gravity)` | | `void` | `setForegroundTintBlendMode(BlendMode blendMode)` | | `void` | `setForegroundTintList(ColorStateList tint)` | | `void` | `setForegroundTintMode(PorterDuff.Mode tintMode)` | | `void` | `setFrameContentVelocity(float pixelsPerSecond)` | | `void` | `setHandwritingBoundsOffsets(     float offsetLeft,     float offsetTop,     float offsetRight,     float offsetBottom )` | | `void` | `setHandwritingDelegateFlags(int flags)` | | `void` | `setHandwritingDelegatorCallback(Runnable callback)` | | `void` | `setHapticFeedbackEnabled(boolean hapticFeedbackEnabled)` | | `void` | `setHasTransientState(boolean hasTransientState)` | | `void` | `setHorizontalFadingEdgeEnabled(boolean horizontalFadingEdgeEnabled)` | | `void` | `setHorizontalScrollBarEnabled(boolean horizontalScrollBarEnabled)` | | `void` | `setHorizontalScrollbarThumbDrawable(Drawable drawable)` | | `void` | `setHorizontalScrollbarTrackDrawable(Drawable drawable)` | | `void` | `setHovered(boolean hovered)` | | `void` | `setId(int id)` | | `void` | `setImportantForAccessibility(int mode)` | | `void` | `setImportantForAutofill(int mode)` | | `void` | `setImportantForContentCapture(int mode)` | | `void` | `setIsCredential(boolean isCredential)`  **This method is deprecated.** | | `void` | `setIsHandwritingDelegate(boolean isHandwritingDelegate)` | | `void` | `setKeepScreenOn(boolean keepScreenOn)` | | `void` | `setKeyboardNavigationCluster(boolean isCluster)` | | `void` | `setLabelFor(int id)` | | `void` | `setLayerPaint(Paint paint)` | | `void` | `setLayerType(int layerType, Paint paint)` | | `void` | `setLayoutDirection(int layoutDirection)` | | `void` | `setLayoutParams(ViewGroup.LayoutParams params)` | | `final void` | `setLeft(int left)` | | `final void` | `setLeftTopRightBottom(int left, int top, int right, int bottom)` | | `void` | `setLongClickable(boolean longClickable)` | | `final void` | `setMeasuredDimension(int measuredWidth, int measuredHeight)` | | `void` | `setMinimumHeight(int minHeight)` | | `void` | `setMinimumWidth(int minWidth)` | | `void` | `setNestedScrollingEnabled(boolean enabled)` | | `void` | `setNextClusterForwardId(int nextClusterForwardId)` | | `void` | `setNextFocusDownId(int nextFocusDownId)` | | `void` | `setNextFocusForwardId(int nextFocusForwardId)` | | `void` | `setNextFocusLeftId(int nextFocusLeftId)` | | `void` | `setNextFocusRightId(int nextFocusRightId)` | | `void` | `setNextFocusUpId(int nextFocusUpId)` | | `void` | `setOnApplyWindowInsetsListener(     View.OnApplyWindowInsetsListener listener )` | | `void` | `setOnCapturedPointerListener(View.OnCapturedPointerListener l)` | | `void` | `setOnClickListener(View.OnClickListener l)` | | `void` | `setOnContextClickListener(View.OnContextClickListener l)` | | `void` | `setOnCreateContextMenuListener(View.OnCreateContextMenuListener l)` | | `void` | `setOnDragListener(View.OnDragListener l)` | | `void` | `setOnFocusChangeListener(View.OnFocusChangeListener l)` | | `void` | `setOnGenericMotionListener(View.OnGenericMotionListener l)` | | `void` | `setOnHoverListener(View.OnHoverListener l)` | | `void` | `setOnKeyListener(View.OnKeyListener l)` | | `void` | `setOnLongClickListener(View.OnLongClickListener l)` | | `void` | `setOnReceiveContentListener(     String[] mimeTypes,     OnReceiveContentListener listener )` | | `void` | `setOnScrollChangeListener(View.OnScrollChangeListener l)` | | `void` | `setOnSystemUiVisibilityChangeListener(     View.OnSystemUiVisibilityChangeListener l )`  **This method is deprecated.** | | `void` | `setOnTouchListener(View.OnTouchListener l)` | | `void` | `setOutlineAmbientShadowColor(int color)` | | `void` | `setOutlineProvider(ViewOutlineProvider provider)` | | `void` | `setOutlineSpotShadowColor(int color)` | | `void` | `setOverScrollMode(int overScrollMode)` | | `void` | `setPadding(int left, int top, int right, int bottom)` | | `void` | `setPaddingRelative(int start, int top, int end, int bottom)` | | `void` | `setPendingCredentialRequest(     GetCredentialRequest request,     OutcomeReceiver<GetCredentialResponse, GetCredentialException> callback )` | | `void` | `setPivotX(float pivotX)` | | `void` | `setPivotY(float pivotY)` | | `void` | `setPointerIcon(PointerIcon pointerIcon)` | | `final void` | `setPreferKeepClear(boolean preferKeepClear)` | | `final void` | `setPreferKeepClearRects(List<Rect> rects)` | | `void` | `setPressed(boolean pressed)` | | `void` | `setRenderEffect(RenderEffect renderEffect)` | | `final void` | `setRevealOnFocusHint(boolean revealOnFocus)` | | `final void` | `setRight(int right)` | | `void` | `setRotation(float rotation)` | | `void` | `setRotationX(float rotationX)` | | `void` | `setRotationY(float rotationY)` | | `void` | `setSaveEnabled(boolean enabled)` | | `void` | `setSaveFromParentEnabled(boolean enabled)` | | `void` | `setScaleX(float scaleX)` | | `void` | `setScaleY(float scaleY)` | | `void` | `setScreenReaderFocusable(boolean screenReaderFocusable)` | | `void` | `setScrollBarDefaultDelayBeforeFade(     int scrollBarDefaultDelayBeforeFade )` | | `void` | `setScrollBarFadeDuration(int scrollBarFadeDuration)` | | `void` | `setScrollBarSize(int scrollBarSize)` | | `void` | `setScrollBarStyle(int style)` | | `final void` | `setScrollCaptureCallback(ScrollCaptureCallback callback)` | | `void` | `setScrollCaptureHint(int hint)` | | `void` | `setScrollContainer(boolean isScrollContainer)` | | `void` | `setScrollIndicators(int indicators)` | | `void` | `setScrollX(int value)` | | `void` | `setScrollY(int value)` | | `void` | `setScrollbarFadingEnabled(boolean fadeScrollbars)` | | `void` | `setSelected(boolean selected)` | | `void` | `setSoundEffectsEnabled(boolean soundEffectsEnabled)` | | `void` | `setStateDescription(CharSequence stateDescription)` | | `void` | `setStateListAnimator(StateListAnimator stateListAnimator)` | | `void` | `setSupplementalDescription(CharSequence supplementalDescription)` | | `void` | `setSystemGestureExclusionRects(List<Rect> rects)` | | `void` | `setSystemUiVisibility(int visibility)`  **This method is deprecated.** | | `void` | `setTag(int key, Object tag)` | | `void` | `setTextAlignment(int textAlignment)` | | `void` | `setTextDirection(int textDirection)` | | `void` | `setTooltipText(CharSequence tooltipText)` | | `final void` | `setTop(int top)` | | `void` | `setTouchDelegate(TouchDelegate delegate)` | | `void` | `setTransitionAlpha(float alpha)` | | `final void` | `setTransitionName(String transitionName)` | | `void` | `setTransitionVisibility(int visibility)` | | `void` | `setTranslationX(float translationX)` | | `void` | `setTranslationY(float translationY)` | | `void` | `setTranslationZ(float translationZ)` | | `void` | `setVerticalFadingEdgeEnabled(boolean verticalFadingEdgeEnabled)` | | `void` | `setVerticalScrollBarEnabled(boolean verticalScrollBarEnabled)` | | `void` | `setVerticalScrollbarPosition(int position)` | | `void` | `setVerticalScrollbarThumbDrawable(Drawable drawable)` | | `void` | `setVerticalScrollbarTrackDrawable(Drawable drawable)` | | `void` | `setViewTranslationCallback(ViewTranslationCallback callback)` | | `void` | `setVisibility(int visibility)` | | `void` | `setWillNotCacheDrawing(boolean willNotCacheDrawing)`  **This method is deprecated.** | | `void` | `setWillNotDraw(boolean willNotDraw)` | | `void` | `setX(float x)` | | `void` | `setY(float y)` | | `void` | `setZ(float z)` | | `boolean` | `showContextMenu()` | | `ActionMode` | `startActionMode(ActionMode.Callback callback)` | | `void` | `startAnimation(Animation animation)` | | `final boolean` | `startDrag(     ClipData data,     View.DragShadowBuilder shadowBuilder,     Object myLocalState,     int flags )`  **This method is deprecated.** | | `final boolean` | `startDragAndDrop(     ClipData data,     View.DragShadowBuilder shadowBuilder,     Object myLocalState,     int flags )` | | `boolean` | `startNestedScroll(int axes)` | | `void` | `stopNestedScroll()` | | `String` | `toString()` | | `void` | `transformMatrixToGlobal(Matrix matrix)` | | `void` | `transformMatrixToLocal(Matrix matrix)` | | `static void` | `unregisterCalledFromWrongThreadListener(     View.CalledFromWrongThreadListener listener )` | | `void` | `unscheduleDrawable(Drawable who)` | | `final void` | `updateDragShadow(View.DragShadowBuilder shadowBuilder)` | | `boolean` | `verifyDrawable(Drawable who)` | | `boolean` | `willNotCacheDrawing()`  **This method is deprecated.** | | `boolean` | `willNotDraw()` | |
| From [android.view.ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) |  |  | | --- | --- | | `void` | `addChildrenForAccessibility(ArrayList<View> outChildren)` | | `void` | `addExtraDataToAccessibilityNodeInfo(     AccessibilityNodeInfo info,     String extraDataKey,     Bundle arguments )` | | `void` | `addFocusables(ArrayList<View> views, int direction, int focusableMode)` | | `void` | `addKeyboardNavigationClusters(Collection<View> views, int direction)` | | `boolean` | `addStatesFromChildren()` | | `void` | `addTouchables(ArrayList<View> views)` | | `void` | `addView(View child)` | | `boolean` | `addViewInLayout(View child, int index, ViewGroup.LayoutParams params)` | | `void` | `attachLayoutAnimationParameters(     View child,     ViewGroup.LayoutParams params,     int index,     int count )` | | `void` | `attachViewToParent(View child, int index, ViewGroup.LayoutParams params)` | | `void` | `bringChildToFront(View child)` | | `boolean` | `canAnimate()` | | `void` | `childDrawableStateChanged(View child)` | | `void` | `childHasTransientStateChanged(     View child,     boolean childHasTransientState )` | | `void` | `cleanupLayoutState(View child)` | | `void` | `clearChildFocus(View child)` | | `void` | `clearDisappearingChildren()` | | `void` | `clearFocus()` | | `void` | `debug(int depth)` | | `void` | `detachAllViewsFromParent()` | | `void` | `detachViewFromParent(View child)` | | `void` | `detachViewsFromParent(int start, int count)` | | `WindowInsets` | `dispatchApplyWindowInsets(WindowInsets insets)` | | `boolean` | `dispatchCapturedPointerEvent(MotionEvent event)` | | `void` | `dispatchConfigurationChanged(Configuration newConfig)` | | `void` | `dispatchCreateViewTranslationRequest(     Map<AutofillId, long[]> viewIds,     int[] supportedFormats,     TranslationCapability capability,     List<ViewTranslationRequest> requests )` | | `void` | `dispatchDisplayHint(int hint)` | | `boolean` | `dispatchDragEvent(DragEvent event)` | | `void` | `dispatchDraw(Canvas canvas)` | | `void` | `dispatchDrawableHotspotChanged(float x, float y)` | | `void` | `dispatchFinishTemporaryDetach()` | | `void` | `dispatchFreezeSelfOnly(SparseArray<Parcelable> container)` | | `boolean` | `dispatchGenericFocusedEvent(MotionEvent event)` | | `boolean` | `dispatchGenericPointerEvent(MotionEvent event)` | | `boolean` | `dispatchHoverEvent(MotionEvent event)` | | `boolean` | `dispatchKeyEvent(KeyEvent event)` | | `boolean` | `dispatchKeyEventPreIme(KeyEvent event)` | | `boolean` | `dispatchKeyShortcutEvent(KeyEvent event)` | | `void` | `dispatchPointerCaptureChanged(boolean hasCapture)` | | `void` | `dispatchProvideAutofillStructure(ViewStructure structure, int flags)` | | `void` | `dispatchProvideStructure(ViewStructure structure)` | | `void` | `dispatchRestoreInstanceState(SparseArray<Parcelable> container)` | | `void` | `dispatchSaveInstanceState(SparseArray<Parcelable> container)` | | `void` | `dispatchScrollCaptureSearch(     Rect localVisibleRect,     Point windowOffset,     Consumer<ScrollCaptureTarget> targets )` | | `void` | `dispatchSetActivated(boolean activated)` | | `void` | `dispatchSetPressed(boolean pressed)` | | `void` | `dispatchSetSelected(boolean selected)` | | `void` | `dispatchStartTemporaryDetach()` | | `void` | `dispatchSystemUiVisibilityChanged(int visible)`  **This method is deprecated.** | | `void` | `dispatchThawSelfOnly(SparseArray<Parcelable> container)` | | `boolean` | `dispatchTouchEvent(MotionEvent ev)` | | `boolean` | `dispatchTrackballEvent(MotionEvent event)` | | `boolean` | `dispatchUnhandledMove(View focused, int direction)` | | `void` | `dispatchVisibilityChanged(View changedView, int visibility)` | | `void` | `dispatchWindowFocusChanged(boolean hasFocus)` | | `void` | `dispatchWindowInsetsAnimationEnd(WindowInsetsAnimation animation)` | | `void` | `dispatchWindowInsetsAnimationPrepare(WindowInsetsAnimation animation)` | | `WindowInsets` | `dispatchWindowInsetsAnimationProgress(     WindowInsets insets,     List<WindowInsetsAnimation> runningAnimations )` | | `WindowInsetsAnimation.Bounds` | `dispatchWindowInsetsAnimationStart(     WindowInsetsAnimation animation,     WindowInsetsAnimation.Bounds bounds )` | | `void` | `dispatchWindowSystemUiVisiblityChanged(int visible)`  **This method is deprecated.** | | `void` | `dispatchWindowVisibilityChanged(int visibility)` | | `boolean` | `drawChild(Canvas canvas, View child, long drawingTime)` | | `void` | `drawableStateChanged()` | | `void` | `endViewTransition(View view)` | | `View` | `findFocus()` | | `OnBackInvokedDispatcher` | `findOnBackInvokedDispatcherForChild(View child, View requester)` | | `void` | `findViewsWithText(     ArrayList<View> outViews,     CharSequence text,     int flags )` | | `View` | `focusSearch(View focused, int direction)` | | `void` | `focusableViewAvailable(View v)` | | `boolean` | `gatherTransparentRegion(Region region)` | | `CharSequence` | `getAccessibilityClassName()` | | `View` | `getChildAt(int index)` | | `int` | `getChildCount()` | | `final int` | `getChildDrawingOrder(int drawingPosition)` | | `static int` | `getChildMeasureSpec(int spec, int padding, int childDimension)` | | `boolean` | `getChildStaticTransformation(View child, Transformation t)` | | `boolean` | `getChildVisibleRect(View child, Rect r, Point offset)` | | `boolean` | `getClipChildren()` | | `boolean` | `getClipToPadding()` | | `int` | `getDescendantFocusability()` | | `View` | `getFocusedChild()` | | `LayoutAnimationController` | `getLayoutAnimation()` | | `Animation.AnimationListener` | `getLayoutAnimationListener()` | | `int` | `getLayoutMode()` | | `LayoutTransition` | `getLayoutTransition()` | | `int` | `getNestedScrollAxes()` | | `ViewGroupOverlay` | `getOverlay()` | | `int` | `getPersistentDrawingCache()`  **This method is deprecated.** | | `boolean` | `getTouchscreenBlocksFocus()` | | `boolean` | `hasFocus()` | | `boolean` | `hasTransientState()` | | `int` | `indexOfChild(View child)` | | `final void` | `invalidateChild(View child, Rect dirty)`  **This method is deprecated.** | | `ViewParent` | `invalidateChildInParent(int[] location, Rect dirty)`  **This method is deprecated.** | | `boolean` | `isAlwaysDrawnWithCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isAnimationCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isChildrenDrawingOrderEnabled()` | | `boolean` | `isChildrenDrawnWithCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isLayoutSuppressed()` | | `boolean` | `isMotionEventSplittingEnabled()` | | `boolean` | `isTransitionGroup()` | | `void` | `jumpDrawablesToCurrentState()` | | `final void` | `layout(int l, int t, int r, int b)` | | `void` | `measureChild(     View child,     int parentWidthMeasureSpec,     int parentHeightMeasureSpec )` | | `void` | `measureChildWithMargins(     View child,     int parentWidthMeasureSpec,     int widthUsed,     int parentHeightMeasureSpec,     int heightUsed )` | | `void` | `measureChildren(int widthMeasureSpec, int heightMeasureSpec)` | | `void` | `notifySubtreeAccessibilityStateChanged(     View child,     View source,     int changeType )` | | `final void` | `offsetDescendantRectToMyCoords(View descendant, Rect rect)` | | `final void` | `offsetRectIntoDescendantCoords(View descendant, Rect rect)` | | `int[]` | `onCreateDrawableState(int extraSpace)` | | `void` | `onDescendantInvalidated(View child, View target)` | | `boolean` | `onInterceptHoverEvent(MotionEvent event)` | | `boolean` | `onInterceptTouchEvent(MotionEvent ev)` | | `boolean` | `onNestedFling(     View target,     float velocityX,     float velocityY,     boolean consumed )` | | `boolean` | `onNestedPreFling(View target, float velocityX, float velocityY)` | | `boolean` | `onNestedPrePerformAccessibilityAction(     View target,     int action,     Bundle args )` | | `void` | `onNestedPreScroll(View target, int dx, int dy, int[] consumed)` | | `void` | `onNestedScroll(     View target,     int dxConsumed,     int dyConsumed,     int dxUnconsumed,     int dyUnconsumed )` | | `void` | `onNestedScrollAccepted(View child, View target, int axes)` | | `boolean` | `onRequestFocusInDescendants(int direction, Rect previouslyFocusedRect)` | | `boolean` | `onRequestSendAccessibilityEvent(View child, AccessibilityEvent event)` | | `PointerIcon` | `onResolvePointerIcon(MotionEvent event, int pointerIndex)` | | `boolean` | `onStartNestedScroll(View child, View target, int nestedScrollAxes)` | | `void` | `onStopNestedScroll(View child)` | | `void` | `onViewAdded(View child)` | | `void` | `onViewRemoved(View child)` | | `void` | `propagateRequestedFrameRate(float frameRate, boolean forceOverride)` | | `void` | `recomputeViewAttributes(View child)` | | `void` | `removeAllViews()` | | `void` | `removeAllViewsInLayout()` | | `void` | `removeDetachedView(View child, boolean animate)` | | `void` | `removeView(View view)` | | `void` | `removeViewAt(int index)` | | `void` | `removeViewInLayout(View view)` | | `void` | `removeViews(int start, int count)` | | `void` | `removeViewsInLayout(int start, int count)` | | `void` | `requestChildFocus(View child, View focused)` | | `boolean` | `requestChildRectangleOnScreen(     View child,     Rect rectangle,     boolean immediate )` | | `void` | `requestDisallowInterceptTouchEvent(boolean disallowIntercept)` | | `boolean` | `requestFocus(int direction, Rect previouslyFocusedRect)` | | `boolean` | `requestSendAccessibilityEvent(View child, AccessibilityEvent event)` | | `void` | `requestTransparentRegion(View child)` | | `boolean` | `restoreDefaultFocus()` | | `void` | `scheduleLayoutAnimation()` | | `void` | `setAddStatesFromChildren(boolean addsStates)` | | `void` | `setAlwaysDrawnWithCacheEnabled(boolean always)`  **This method is deprecated.** | | `void` | `setAnimationCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setChildrenDrawingCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setChildrenDrawingOrderEnabled(boolean enabled)` | | `void` | `setChildrenDrawnWithCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setClipChildren(boolean clipChildren)` | | `void` | `setClipToPadding(boolean clipToPadding)` | | `void` | `setDescendantFocusability(int focusability)` | | `void` | `setLayoutAnimation(LayoutAnimationController controller)` | | `void` | `setLayoutAnimationListener(     Animation.AnimationListener animationListener )` | | `void` | `setLayoutMode(int layoutMode)` | | `void` | `setLayoutTransition(LayoutTransition transition)` | | `void` | `setMotionEventSplittingEnabled(boolean split)` | | `void` | `setOnHierarchyChangeListener(     ViewGroup.OnHierarchyChangeListener listener )` | | `void` | `setPersistentDrawingCache(int drawingCacheToKeep)`  **This method is deprecated.** | | `void` | `setRequestedFrameRate(float frameRate)` | | `void` | `setStaticTransformationsEnabled(boolean enabled)` | | `void` | `setTouchscreenBlocksFocus(boolean touchscreenBlocksFocus)` | | `void` | `setTransitionGroup(boolean isTransitionGroup)` | | `void` | `setWindowInsetsAnimationCallback(     WindowInsetsAnimation.Callback callback )` | | `boolean` | `shouldDelayChildPressedState()` | | `boolean` | `showContextMenuForChild(View originalView)` | | `ActionMode` | `startActionModeForChild(     View originalView,     ActionMode.Callback callback )` | | `void` | `startLayoutAnimation()` | | `void` | `startViewTransition(View view)` | | `void` | `suppressLayout(boolean suppress)` | | `void` | `updateViewLayout(View view, ViewGroup.LayoutParams params)` | |

## Public constructors

### Toolbar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Toolbar(@NonNull Context context)
```

### Toolbar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Toolbar(@NonNull Context context, @Nullable AttributeSet attrs)
```

### Toolbar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Toolbar(  
    @NonNull Context context,  
    @Nullable AttributeSet attrs,  
    int defStyleAttr  
)
```

## Public methods

### addMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
@MainThread  
public void addMenuProvider(@NonNull MenuProvider provider)
```

Adds the given `MenuProvider` to this `MenuHost`. If using this method, you must manually remove the provider when necessary.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be added |

| See also |
| --- |
| `removeMenuProvider` |  |

### addMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
@MainThread  
public void addMenuProvider(  
    @NonNull MenuProvider provider,  
    @NonNull LifecycleOwner owner  
)
```

Adds the given `MenuProvider` to this `MenuHost`. This `MenuProvider` will be removed once the given `LifecycleOwner` receives an Lifecycle.Event.ON\_DESTROY event.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be added |
| `@NonNull LifecycleOwner owner` | the Lifecycle owner whose state will determine the removal of the provider |

### addMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
@MainThread  
public void addMenuProvider(  
    @NonNull MenuProvider provider,  
    @NonNull LifecycleOwner owner,  
    @NonNull Lifecycle.State state  
)
```

Adds the given `MenuProvider` to this `MenuHost` once the given `LifecycleOwner` reaches the given `Lifecycle.State`. This `MenuProvider` will be removed once the given `LifecycleOwner` goes down from the given `Lifecycle.State`.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be added |
| `@NonNull LifecycleOwner owner` | the Lifecycle owner whose state will be used for automated addition/removal |
| `@NonNull Lifecycle.State state` | the Lifecycle.State to check for automated addition/removal |

### collapseActionView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void collapseActionView()
```

Collapse a currently expanded action view. If this Toolbar does not have an expanded action view this method has no effect.

An action view may be expanded either directly from the `MenuItem` it belongs to or by user action.

| See also |
| --- |
| `hasExpandedActionView` |  |

### dismissPopupMenus

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void dismissPopupMenus()
```

Dismiss all currently showing popup menus, including overflow or submenus.

### generateLayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public Toolbar.LayoutParams generateLayoutParams(AttributeSet attrs)
```

### getCollapseContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:collapseContentDescription")  
public @Nullable CharSequence getCollapseContentDescription()
```

Retrieve the currently configured content description for the collapse button view. This will be used to describe the collapse action to users through mechanisms such as screen readers or tooltips.

| Returns |
| --- |
| `@Nullable CharSequence` | The collapse button's content description `collapseContentDescription` |

### getCollapseIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:collapseIcon")  
public @Nullable Drawable getCollapseIcon()
```

Return the current drawable used as the collapse icon.

| Returns |
| --- |
| `@Nullable Drawable` | The collapse icon drawable `collapseIcon` |

### getContentInsetEnd

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:contentInsetEnd")  
public int getContentInsetEnd()
```

Gets the ending content inset for this toolbar.

The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.

| Returns |
| --- |
| `int` | The ending content inset for this toolbar |

| See also |
| --- |
| `setContentInsetsRelative` |  |
| `setContentInsetsAbsolute` |  |
| `getContentInsetStart` |  |
| `getContentInsetLeft` |  |
| `getContentInsetRight` | `contentInsetEnd` |

### getContentInsetEndWithActions

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:contentInsetEndWithActions")  
public int getContentInsetEndWithActions()
```

Gets the end content inset to use when action buttons are present.

Different content insets are often called for when additional buttons are present in the toolbar, as well as at different toolbar sizes. The larger value of `getContentInsetEnd` and this value will be used during layout.

| Returns |
| --- |
| `int` | the end content inset used when a menu has been set in pixels |

| See also |
| --- |
| `setContentInsetEndWithActions` | `contentInsetEndWithActions` |

### getContentInsetLeft

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:contentInsetLeft")  
public int getContentInsetLeft()
```

Gets the left content inset for this toolbar.

The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.

| Returns |
| --- |
| `int` | The left content inset for this toolbar |

| See also |
| --- |
| `setContentInsetsRelative` |  |
| `setContentInsetsAbsolute` |  |
| `getContentInsetStart` |  |
| `getContentInsetEnd` |  |
| `getContentInsetRight` | `contentInsetLeft` |

### getContentInsetRight

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:contentInsetRight")  
public int getContentInsetRight()
```

Gets the right content inset for this toolbar.

The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.

| Returns |
| --- |
| `int` | The right content inset for this toolbar |

| See also |
| --- |
| `setContentInsetsRelative` |  |
| `setContentInsetsAbsolute` |  |
| `getContentInsetStart` |  |
| `getContentInsetEnd` |  |
| `getContentInsetLeft` | `contentInsetRight` |

### getContentInsetStart

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:contentInsetStart")  
public int getContentInsetStart()
```

Gets the starting content inset for this toolbar.

The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.

| Returns |
| --- |
| `int` | The starting content inset for this toolbar |

| See also |
| --- |
| `setContentInsetsRelative` |  |
| `setContentInsetsAbsolute` |  |
| `getContentInsetEnd` |  |
| `getContentInsetLeft` |  |
| `getContentInsetRight` | `contentInsetStart` |

### getContentInsetStartWithNavigation

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:contentInsetStartWithNavigation")  
public int getContentInsetStartWithNavigation()
```

Gets the start content inset to use when a navigation button is present.

Different content insets are often called for when additional buttons are present in the toolbar, as well as at different toolbar sizes. The larger value of `getContentInsetStart` and this value will be used during layout.

| Returns |
| --- |
| `int` | the start content inset used when a navigation icon has been set in pixels |

| See also |
| --- |
| `setContentInsetStartWithNavigation` | `contentInsetStartWithNavigation` |

### getCurrentContentInsetEnd

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getCurrentContentInsetEnd()
```

Gets the content inset that will be used on the ending side of the bar in the current toolbar configuration.

| Returns |
| --- |
| `int` | the current content inset end in pixels |

| See also |
| --- |
| `getContentInsetEndWithActions` |  |

### getCurrentContentInsetLeft

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getCurrentContentInsetLeft()
```

Gets the content inset that will be used on the left side of the bar in the current toolbar configuration.

| Returns |
| --- |
| `int` | the current content inset left in pixels |

| See also |
| --- |
| `getContentInsetStartWithNavigation` |  |
| `getContentInsetEndWithActions` |  |

### getCurrentContentInsetRight

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getCurrentContentInsetRight()
```

Gets the content inset that will be used on the right side of the bar in the current toolbar configuration.

| Returns |
| --- |
| `int` | the current content inset right in pixels |

| See also |
| --- |
| `getContentInsetStartWithNavigation` |  |
| `getContentInsetEndWithActions` |  |

### getCurrentContentInsetStart

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getCurrentContentInsetStart()
```

Gets the content inset that will be used on the starting side of the bar in the current toolbar configuration.

| Returns |
| --- |
| `int` | the current content inset start in pixels |

| See also |
| --- |
| `getContentInsetStartWithNavigation` |  |

### getLogo

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:logo")  
public Drawable getLogo()
```

Return the current logo drawable.

| Returns |
| --- |
| `Drawable` | The current logo drawable |

| See also |
| --- |
| `setLogo` |  |
| `setLogo` |  |

### getLogoDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:logoDescription")  
public CharSequence getLogoDescription()
```

Return the description of the toolbar's logo.

| Returns |
| --- |
| `CharSequence` | A description of the logo |

### getMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:menu")  
public Menu getMenu()
```

Return the Menu shown in the toolbar.

Applications that wish to populate the toolbar's menu can do so from here. To use an XML menu resource, use `inflateMenu`.

| Returns |
| --- |
| `Menu` | The toolbar's Menu menu |

### getNavigationContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:navigationContentDescription")  
public @Nullable CharSequence getNavigationContentDescription()
```

Retrieve the currently configured content description for the navigation button view. This will be used to describe the navigation action to users through mechanisms such as screen readers or tooltips.

| Returns |
| --- |
| `@Nullable CharSequence` | The navigation button's content description `navigationContentDescription` |

### getNavigationIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:navigationIcon")  
public @Nullable Drawable getNavigationIcon()
```

Return the current drawable used as the navigation icon.

| Returns |
| --- |
| `@Nullable Drawable` | The navigation icon drawable `navigationIcon` |

### getOverflowIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @Nullable Drawable getOverflowIcon()
```

Return the current drawable used as the overflow icon.

| Returns |
| --- |
| `@Nullable Drawable` | The overflow icon drawable |

### getPopupTheme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:popupTheme")  
public @StyleRes int getPopupTheme()
```

| Returns |
| --- |
| `@StyleRes int` | resource identifier of the theme used to inflate popup menus, or 0 if menus are inflated against the toolbar theme |

| See also |
| --- |
| `setPopupTheme` |  |

### getSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:subtitle")  
public CharSequence getSubtitle()
```

Return the subtitle of this toolbar.

| Returns |
| --- |
| `CharSequence` | The current subtitle |

### getTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:title")  
public CharSequence getTitle()
```

Returns the title of this toolbar.

| Returns |
| --- |
| `CharSequence` | The current title. |

### getTitleMarginBottom

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:titleMarginBottom")  
public int getTitleMarginBottom()
```

| Returns |
| --- |
| `int` | the bottom title margin in pixels |

| See also |
| --- |
| `setTitleMarginBottom` | `titleMarginBottom` |

### getTitleMarginEnd

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:titleMarginEnd")  
public int getTitleMarginEnd()
```

| Returns |
| --- |
| `int` | the ending title margin in pixels |

| See also |
| --- |
| `setTitleMarginEnd` | `titleMarginEnd` |

### getTitleMarginStart

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:titleMarginStart")  
public int getTitleMarginStart()
```

| Returns |
| --- |
| `int` | the starting title margin in pixels |

| See also |
| --- |
| `setTitleMarginStart` | `titleMarginStart` |

### getTitleMarginTop

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:titleMarginTop")  
public int getTitleMarginTop()
```

| Returns |
| --- |
| `int` | the top title margin in pixels |

| See also |
| --- |
| `setTitleMarginTop` | `titleMarginTop` |

### hasExpandedActionView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean hasExpandedActionView()
```

Check whether this Toolbar is currently hosting an expanded action view.

An action view may be expanded either directly from the `MenuItem` it belongs to or by user action. If the Toolbar has an expanded action view it can be collapsed using the `collapseActionView` method.

| Returns |
| --- |
| `boolean` | true if the Toolbar has an expanded action view |

### hideOverflowMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean hideOverflowMenu()
```

Hide the overflow items from the associated menu.

| Returns |
| --- |
| `boolean` | true if the menu was able to be hidden, false otherwise |

### inflateMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void inflateMenu(@MenuRes int resId)
```

Inflate a menu resource into this toolbar.

Inflate an XML menu resource into this toolbar. Existing items in the menu will not be modified or removed.

| Parameters |
| --- |
| `@MenuRes int resId` | ID of a menu resource to inflate menu |

### invalidateMenu

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
@MainThread  
public void invalidateMenu()
```

Invalidates the to ensure that what is displayed matches the current internal state of the menu. This should be called whenever the state of the menu is changed, such as items being removed or disabled based on some user event. Only the `items` in the `Menu` that were provided by `MenuProvider`s should be removed and repopulated, leaving all manually inflated menu items untouched, as they should continue to be managed manually.

### isBackInvokedCallbackEnabled

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public boolean isBackInvokedCallbackEnabled()
```

Returns whether the toolbar will attempt to register its own `OnBackInvokedCallback` in supported configurations to handle collapsing expanded action items when a back invocation occurs.

| See also |
| --- |
| `setBackInvokedCallbackEnabled` |  |

### isOverflowMenuShowing

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isOverflowMenuShowing()
```

Check whether the overflow menu is currently showing. This may not reflect a pending show operation in progress.

| Returns |
| --- |
| `boolean` | true if the overflow menu is currently showing |

### onHoverEvent

```
public boolean onHoverEvent(MotionEvent ev)
```

### onRtlPropertiesChanged

```
public void onRtlPropertiesChanged(int layoutDirection)
```

### onTouchEvent

```
public boolean onTouchEvent(MotionEvent ev)
```

### removeMenuProvider

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
@MainThread  
public void removeMenuProvider(@NonNull MenuProvider provider)
```

Removes the given `MenuProvider` from this `MenuHost`.

| Parameters |
| --- |
| `@NonNull MenuProvider provider` | the MenuProvider to be removed |

### setBackInvokedCallbackEnabled

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setBackInvokedCallbackEnabled(boolean enabled)
```

Sets whether the toolbar will attempt to register its own `OnBackInvokedCallback` in supported configurations to handle collapsing expanded action items when a back invocation occurs.

This feature is only supported on SDK 33 and above for applications that have enabled back invocation callback handling.

| Parameters |
| --- |
| `boolean enabled` | `true` to attempt to register a back invocation callback in supported configurations or `false` to not automatically handle back invocations |

| See also |
| --- |
| `isBackInvokedCallbackEnabled` |  |

### setCollapseContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setCollapseContentDescription(@Nullable CharSequence description)
```

Set a content description for the collapse button if one is present. The content description will be read via screen readers or other accessibility systems to explain the action of the navigation button.

| Parameters |
| --- |
| `@Nullable CharSequence description` | Content description to set, or `null` to clear the content description `collapseContentDescription` |

### setCollapseContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setCollapseContentDescription(@StringRes int resId)
```

Set a content description for the collapse button if one is present. The content description will be read via screen readers or other accessibility systems to explain the action of the collapse button.

| Parameters |
| --- |
| `@StringRes int resId` | Resource ID of a content description string to set, or 0 to clear the description `collapseContentDescription` |

### setCollapseIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setCollapseIcon(@Nullable Drawable icon)
```

Set the icon to use for the toolbar's collapse button.

The collapse button appears at the start of the toolbar when an action view is present .

| Parameters |
| --- |
| `@Nullable Drawable icon` | Drawable to set, may be null to use the default icon `collapseIcon` |

### setCollapseIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setCollapseIcon(@DrawableRes int resId)
```

Set the icon to use for the toolbar's collapse button.

The collapse button appears at the start of the toolbar when an action view is present .

| Parameters |
| --- |
| `@DrawableRes int resId` | Resource ID of a drawable to set `collapseIcon` |

### setContentInsetEndWithActions

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setContentInsetEndWithActions(int insetEndWithActions)
```

Sets the start content inset to use when action buttons are present.

Different content insets are often called for when additional buttons are present in the toolbar, as well as at different toolbar sizes. The larger value of `getContentInsetEnd` and this value will be used during layout.

| Parameters |
| --- |
| `int insetEndWithActions` | the inset to use when a menu has been set in pixels |

| See also |
| --- |
| `getContentInsetEndWithActions` | `contentInsetEndWithActions` |

### setContentInsetStartWithNavigation

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setContentInsetStartWithNavigation(int insetStartWithNavigation)
```

Sets the start content inset to use when a navigation button is present.

Different content insets are often called for when additional buttons are present in the toolbar, as well as at different toolbar sizes. The larger value of `getContentInsetStart` and this value will be used during layout.

| Parameters |
| --- |
| `int insetStartWithNavigation` | the inset to use when a navigation icon has been set in pixels |

| See also |
| --- |
| `getContentInsetStartWithNavigation` | `contentInsetStartWithNavigation` |

### setContentInsetsAbsolute

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setContentInsetsAbsolute(int contentInsetLeft, int contentInsetRight)
```

Sets the content insets for this toolbar.

The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.

| Parameters |
| --- |
| `int contentInsetLeft` | Content inset for the toolbar's left edge |
| `int contentInsetRight` | Content inset for the toolbar's right edge |

| See also |
| --- |
| `setContentInsetsAbsolute` |  |
| `getContentInsetStart` |  |
| `getContentInsetEnd` |  |
| `getContentInsetLeft` |  |
| `getContentInsetRight` | `contentInsetLeft``contentInsetRight` |

### setContentInsetsRelative

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setContentInsetsRelative(int contentInsetStart, int contentInsetEnd)
```

Sets the content insets for this toolbar relative to layout direction.

The content inset affects the valid area for Toolbar content other than the navigation button and menu. Insets define the minimum margin for these components and can be used to effectively align Toolbar content along well-known gridlines.

| Parameters |
| --- |
| `int contentInsetStart` | Content inset for the toolbar starting edge |
| `int contentInsetEnd` | Content inset for the toolbar ending edge |

| See also |
| --- |
| `setContentInsetsAbsolute` |  |
| `getContentInsetStart` |  |
| `getContentInsetEnd` |  |
| `getContentInsetLeft` |  |
| `getContentInsetRight` | `contentInsetEnd``contentInsetStart` |

### setLogo

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setLogo(Drawable drawable)
```

Set a logo drawable.

This drawable should generally take the place of title text. The logo cannot be clicked. Apps using a logo should also supply a description using `setLogoDescription`.

| Parameters |
| --- |
| `Drawable drawable` | Drawable to use as a logo |

### setLogo

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setLogo(@DrawableRes int resId)
```

Set a logo drawable from a resource id.

This drawable should generally take the place of title text. The logo cannot be clicked. Apps using a logo should also supply a description using `setLogoDescription`.

| Parameters |
| --- |
| `@DrawableRes int resId` | ID of a drawable resource |

### setLogoDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setLogoDescription(CharSequence description)
```

Set a description of the toolbar's logo.

This description will be used for accessibility or other similar descriptions of the UI.

| Parameters |
| --- |
| `CharSequence description` | Description to set |

### setLogoDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setLogoDescription(@StringRes int resId)
```

Set a description of the toolbar's logo.

This description will be used for accessibility or other similar descriptions of the UI.

| Parameters |
| --- |
| `@StringRes int resId` | String resource id |

### setNavigationContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setNavigationContentDescription(@Nullable CharSequence description)
```

Set a content description for the navigation button if one is present. The content description will be read via screen readers or other accessibility systems to explain the action of the navigation button.

| Parameters |
| --- |
| `@Nullable CharSequence description` | Content description to set, or `null` to clear the content description `navigationContentDescription` |

### setNavigationContentDescription

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setNavigationContentDescription(@StringRes int resId)
```

Set a content description for the navigation button if one is present. The content description will be read via screen readers or other accessibility systems to explain the action of the navigation button.

| Parameters |
| --- |
| `@StringRes int resId` | Resource ID of a content description string to set, or 0 to clear the description `navigationContentDescription` |

### setNavigationIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setNavigationIcon(@Nullable Drawable icon)
```

Set the icon to use for the toolbar's navigation button.

The navigation button appears at the start of the toolbar if present. Setting an icon will make the navigation button visible.

If you use a navigation icon you should also set a description for its action using `setNavigationContentDescription`. This is used for accessibility and tooltips.

| Parameters |
| --- |
| `@Nullable Drawable icon` | Drawable to set, may be null to clear the icon `navigationIcon` |

### setNavigationIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setNavigationIcon(@DrawableRes int resId)
```

Set the icon to use for the toolbar's navigation button.

The navigation button appears at the start of the toolbar if present. Setting an icon will make the navigation button visible.

If you use a navigation icon you should also set a description for its action using `setNavigationContentDescription`. This is used for accessibility and tooltips.

| Parameters |
| --- |
| `@DrawableRes int resId` | Resource ID of a drawable to set `navigationIcon` |

### setNavigationOnClickListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setNavigationOnClickListener(View.OnClickListener listener)
```

Set a listener to respond to navigation events.

This listener will be called whenever the user clicks the navigation button at the start of the toolbar. An icon must be set for the navigation button to appear.

| Parameters |
| --- |
| `View.OnClickListener listener` | Listener to set |

| See also |
| --- |
| `setNavigationIcon` |  |

### setOnMenuItemClickListener

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setOnMenuItemClickListener(Toolbar.OnMenuItemClickListener listener)
```

Set a listener to respond to menu item click events.

This listener will be invoked whenever a user selects a menu item from the action buttons presented at the end of the toolbar or the associated overflow.

| Parameters |
| --- |
| `Toolbar.OnMenuItemClickListener listener` | Listener to set |

### setOverflowIcon

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setOverflowIcon(@Nullable Drawable icon)
```

Set the icon to use for the overflow button.

| Parameters |
| --- |
| `@Nullable Drawable icon` | Drawable to set, may be null to clear the icon |

### setPopupTheme

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setPopupTheme(@StyleRes int resId)
```

Specifies the theme to use when inflating popup menus. By default, uses the same theme as the toolbar itself.

| Parameters |
| --- |
| `@StyleRes int resId` | theme used to inflate popup menus |

| See also |
| --- |
| `getPopupTheme` |  |

### setSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSubtitle(@StringRes int resId)
```

Set the subtitle of this toolbar.

Subtitles should express extended information about the current content.

| Parameters |
| --- |
| `@StringRes int resId` | String resource ID |

### setSubtitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSubtitle(CharSequence subtitle)
```

Set the subtitle of this toolbar.

Subtitles should express extended information about the current content.

| Parameters |
| --- |
| `CharSequence subtitle` | Subtitle to set |

### setSubtitleTextAppearance

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSubtitleTextAppearance(Context context, @StyleRes int resId)
```

Sets the text color, size, style, hint color, and highlight color from the specified TextAppearance resource.

### setSubtitleTextColor

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSubtitleTextColor(@NonNull ColorStateList color)
```

Sets the text color of the subtitle, if present.

| Parameters |
| --- |
| `@NonNull ColorStateList color` | The new text color |

### setSubtitleTextColor

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSubtitleTextColor(@ColorInt int color)
```

Sets the text color of the subtitle, if present.

| Parameters |
| --- |
| `@ColorInt int color` | The new text color in 0xAARRGGBB format |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitle(@StringRes int resId)
```

Set the title of this toolbar.

A title should be used as the anchor for a section of content. It should describe or name the content being viewed.

| Parameters |
| --- |
| `@StringRes int resId` | Resource ID of a string to set as the title |

### setTitle

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitle(CharSequence title)
```

Set the title of this toolbar.

A title should be used as the anchor for a section of content. It should describe or name the content being viewed.

| Parameters |
| --- |
| `CharSequence title` | Title to set |

### setTitleMargin

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleMargin(int start, int top, int end, int bottom)
```

Sets the title margin.

| Parameters |
| --- |
| `int start` | the starting title margin in pixels |
| `int top` | the top title margin in pixels |
| `int end` | the ending title margin in pixels |
| `int bottom` | the bottom title margin in pixels |

| See also |
| --- |
| `getTitleMarginStart` |  |
| `getTitleMarginTop` |  |
| `getTitleMarginEnd` |  |
| `getTitleMarginBottom` | `titleMargin` |

### setTitleMarginBottom

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleMarginBottom(int margin)
```

Sets the bottom title margin in pixels.

| Parameters |
| --- |
| `int margin` | the bottom title margin in pixels |

| See also |
| --- |
| `getTitleMarginBottom` | `titleMarginBottom` |

### setTitleMarginEnd

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleMarginEnd(int margin)
```

Sets the ending title margin in pixels.

| Parameters |
| --- |
| `int margin` | the ending title margin in pixels |

| See also |
| --- |
| `getTitleMarginEnd` | `titleMarginEnd` |

### setTitleMarginStart

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleMarginStart(int margin)
```

Sets the starting title margin in pixels.

| Parameters |
| --- |
| `int margin` | the starting title margin in pixels |

| See also |
| --- |
| `getTitleMarginStart` | `titleMarginStart` |

### setTitleMarginTop

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleMarginTop(int margin)
```

Sets the top title margin in pixels.

| Parameters |
| --- |
| `int margin` | the top title margin in pixels |

| See also |
| --- |
| `getTitleMarginTop` | `titleMarginTop` |

### setTitleTextAppearance

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleTextAppearance(Context context, @StyleRes int resId)
```

Sets the text color, size, style, hint color, and highlight color from the specified TextAppearance resource.

### setTitleTextColor

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleTextColor(@NonNull ColorStateList color)
```

Sets the text color of the title, if present.

| Parameters |
| --- |
| `@NonNull ColorStateList color` | The new text color |

### setTitleTextColor

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTitleTextColor(@ColorInt int color)
```

Sets the text color of the title, if present.

| Parameters |
| --- |
| `@ColorInt int color` | The new text color in 0xAARRGGBB format |

### showOverflowMenu

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean showOverflowMenu()
```

Show the overflow items from the associated menu.

| Returns |
| --- |
| `boolean` | true if the menu was able to be shown, false otherwise |

## Protected methods

### checkLayoutParams

```
protected boolean checkLayoutParams(ViewGroup.LayoutParams p)
```

### generateDefaultLayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected Toolbar.LayoutParams generateDefaultLayoutParams()
```

### generateLayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected Toolbar.LayoutParams generateLayoutParams(ViewGroup.LayoutParams p)
```

### onAttachedToWindow

```
protected void onAttachedToWindow()
```

### onDetachedFromWindow

```
protected void onDetachedFromWindow()
```

### onLayout

```
protected void onLayout(boolean changed, int l, int t, int r, int b)
```

### onMeasure

```
protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec)
```

### onRestoreInstanceState

```
protected void onRestoreInstanceState(Parcelable state)
```

### onSaveInstanceState

```
protected Parcelable onSaveInstanceState()
```

## Extension functions

### ToolbarKt.setupWithNavController

Artifact: [androidx.navigation:navigation-ui](/jetpack/androidx/releases/navigation)

[View Source](https://cs.android.com/search?q=file:androidx/navigation/ui/Toolbar.kt+function:setupWithNavController)

```
public final void ToolbarKt.setupWithNavController(  
    @NonNull Toolbar receiver,  
    @NonNull NavController navController,  
    @NonNull AppBarConfiguration configuration  
)
```

Sets up a `Toolbar` for use with a `NavController`.

By calling this method, the title in the Toolbar will automatically be updated when the destination changes (assuming there is a valid `label`).

The `AppBarConfiguration` you provide controls how the Navigation button is displayed and what action is triggered when the Navigation button is tapped.

This method will call `NavController.navigateUp` when the navigation icon is clicked.

| Parameters |
| --- |
| `@NonNull NavController navController` | The NavController whose navigation actions will be reflected in the title of the Toolbar. |
| `@NonNull AppBarConfiguration configuration` | Additional configuration options for customizing the behavior of the Toolbar |

### ToolbarKt.setupWithNavController

Artifact: [androidx.navigation:navigation-ui](/jetpack/androidx/releases/navigation)

[View Source](https://cs.android.com/search?q=file:androidx/navigation/ui/Toolbar.kt+function:setupWithNavController)

```
public final void ToolbarKt.setupWithNavController(  
    @NonNull Toolbar receiver,  
    @NonNull NavController navController,  
    DrawerLayout drawerLayout  
)
```

Sets up a `Toolbar` for use with a `NavController`.

By calling this method, the title in the Toolbar will automatically be updated when the destination changes (assuming there is a valid `label`).

The start destination of your navigation graph is considered the only top level destination. On the start destination of your navigation graph, the Toolbar will show the drawer icon if the given `drawerLayout` is non null. On all other destinations, the Toolbar will show the Up button.

This method will call `NavController.navigateUp` when the navigation icon is clicked.

| Parameters |
| --- |
| `@NonNull NavController navController` | The NavController whose navigation actions will be reflected in the title of the Toolbar. |
| `DrawerLayout drawerLayout` | The DrawerLayout that should be toggled from the Navigation button |