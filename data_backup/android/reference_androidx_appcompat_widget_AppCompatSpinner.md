--- source: https://developer.android.com/reference/androidx/appcompat/widget/AppCompatSpinner ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppCompatSpinner

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/AppCompatSpinner.java+class:androidx.appcompat.widget.AppCompatSpinner)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/AppCompatSpinner "View this page in Kotlin")
|Java

```
public class AppCompatSpinner extends Spinner implements TintableBackgroundView
```

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | | | |
| ↳ | [android.view.View](https://developer.android.com/reference/android/view/View.html) | | | | | |
|  | ↳ | [android.view.ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) | | | | |
|  |  | ↳ | [android.widget.AdapterView](https://developer.android.com/reference/android/widget/AdapterView.html) | | | |
|  |  |  | ↳ | [android.widget.AbsSpinner](https://developer.android.com/reference/android/widget/AbsSpinner.html) | | |
|  |  |  |  | ↳ | [android.widget.Spinner](https://developer.android.com/reference/android/widget/Spinner.html) | |
|  |  |  |  |  | ↳ | [androidx.appcompat.widget.AppCompatSpinner](/reference/androidx/appcompat/widget/AppCompatSpinner) |

---

A `Spinner` which supports compatible features on older versions of the platform, including:

* Allows dynamic tint of its background via the background tint methods in `androidx.core.view.ViewCompat`.
* Allows setting of the background tint using `buttonTint` and `buttonTintMode`.
* Setting the popup theme using `popupTheme`.

This will automatically be used when you use `Spinner` in your layouts. You should only need to manually use this class when writing custom views.

## Summary

| Public constructors |
| --- |
| `AppCompatSpinner(@NonNull Context context)`  Construct a new spinner with the given context's theme. |
| `AppCompatSpinner(@NonNull Context context, @Nullable AttributeSet attrs)`  Construct a new spinner with the given context's theme and the supplied attribute set. |
| `AppCompatSpinner(@NonNull Context context, int mode)`  Construct a new spinner with the given context's theme and the supplied mode of displaying choices. |
| `AppCompatSpinner(     @NonNull Context context,     @Nullable AttributeSet attrs,     int defStyleAttr )`  Construct a new spinner with the given context's theme, the supplied attribute set, and default style attribute. |
| `AppCompatSpinner(     @NonNull Context context,     @Nullable AttributeSet attrs,     int defStyleAttr,     int mode )`  Construct a new spinner with the given context's theme, the supplied attribute set, and default style. |
| `AppCompatSpinner(     @NonNull Context context,     @Nullable AttributeSet attrs,     int defStyleAttr,     int mode,     Resources.Theme popupTheme )`  Constructs a new spinner with the given context's theme, the supplied attribute set, default styles, popup mode (one of `MODE_DIALOG` or `MODE_DROPDOWN`), and the context against which the popup should be inflated. |

| Public methods |
| --- |
| `int` | `getDropDownHorizontalOffset()`  Get the configured horizontal offset in pixels for the spinner's popup window of choices. |
| `int` | `getDropDownVerticalOffset()` |
| `int` | `getDropDownWidth()` |
| `Drawable` | `getPopupBackground()` |
| `Context` | `getPopupContext()` |
| `CharSequence` | `getPrompt()` |
| `void` | `onRestoreInstanceState(Parcelable state)` |
| `Parcelable` | `onSaveInstanceState()` |
| `boolean` | `onTouchEvent(MotionEvent event)` |
| `boolean` | `performClick()` |
| `void` | `setAdapter(SpinnerAdapter adapter)` |
| `void` | `setBackgroundDrawable(@Nullable Drawable background)`  **This method is deprecated.** |
| `void` | `setBackgroundResource(@DrawableRes int resId)` |
| `void` | `setDropDownHorizontalOffset(int pixels)` |
| `void` | `setDropDownVerticalOffset(int pixels)` |
| `void` | `setDropDownWidth(int pixels)` |
| `void` | `setPopupBackgroundDrawable(Drawable background)` |
| `void` | `setPopupBackgroundResource(@DrawableRes int resId)` |
| `void` | `setPrompt(CharSequence prompt)` |

| Protected methods |
| --- |
| `void` | `drawableStateChanged()` |
| `void` | `onDetachedFromWindow()` |
| `void` | `onMeasure(int widthMeasureSpec, int heightMeasureSpec)` |

| Inherited Constants |
| --- |
| From [android.widget.AdapterView](https://developer.android.com/reference/android/widget/AdapterView.html) |  |  | | --- | --- | | `static final int` | `INVALID_POSITION = -1` | | `static final long` | `INVALID_ROW_ID = -9223372036854775808` | | `static final int` | `ITEM_VIEW_TYPE_HEADER_OR_FOOTER = -2` | | `static final int` | `ITEM_VIEW_TYPE_IGNORE = -1` | |
| From [android.widget.Spinner](https://developer.android.com/reference/android/widget/Spinner.html) |  |  | | --- | --- | | `static final int` | `MODE_DIALOG = 0` | | `static final int` | `MODE_DROPDOWN = 1` | |
| From [android.view.View](https://developer.android.com/reference/android/view/View.html) |  |  | | --- | --- | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_AUTO = 0` | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_NO = 2` | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_YES = 1` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_ASSERTIVE = 2` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_NONE = 0` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_POLITE = 1` | | `static final Property<View, Float>` | `ALPHA` | | `static final int` | `AUTOFILL_FLAG_INCLUDE_NOT_IMPORTANT_VIEWS = 1` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DATE = "creditCardExpirationDate"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DAY = "creditCardExpirationDay"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_MONTH = "creditCardExpirationMonth"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_YEAR = "creditCardExpirationYear"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_NUMBER = "creditCardNumber"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_SECURITY_CODE = "creditCardSecurityCode"` | | `static final String` | `AUTOFILL_HINT_EMAIL_ADDRESS = "emailAddress"` | | `static final String` | `AUTOFILL_HINT_NAME = "name"` | | `static final String` | `AUTOFILL_HINT_PASSWORD = "password"` | | `static final String` | `AUTOFILL_HINT_PHONE = "phone"` | | `static final String` | `AUTOFILL_HINT_POSTAL_ADDRESS = "postalAddress"` | | `static final String` | `AUTOFILL_HINT_POSTAL_CODE = "postalCode"` | | `static final String` | `AUTOFILL_HINT_USERNAME = "username"` | | `static final int` | `AUTOFILL_TYPE_DATE = 4` | | `static final int` | `AUTOFILL_TYPE_LIST = 3` | | `static final int` | `AUTOFILL_TYPE_NONE = 0` | | `static final int` | `AUTOFILL_TYPE_TEXT = 1` | | `static final int` | `AUTOFILL_TYPE_TOGGLE = 2` | | `static final int` | `CONTENT_SENSITIVITY_AUTO = 0` | | `static final int` | `CONTENT_SENSITIVITY_NOT_SENSITIVE = 2` | | `static final int` | `CONTENT_SENSITIVITY_SENSITIVE = 1` | | `static final int` | `DRAG_FLAG_ACCESSIBILITY_ACTION = 1024` | | `static final int` | `DRAG_FLAG_GLOBAL = 256` | | `static final int` | `DRAG_FLAG_GLOBAL_PERSISTABLE_URI_PERMISSION = 64` | | `static final int` | `DRAG_FLAG_GLOBAL_PREFIX_URI_PERMISSION = 128` | | `static final int` | `DRAG_FLAG_GLOBAL_SAME_APPLICATION = 4096` | | `static final int` | `DRAG_FLAG_GLOBAL_URI_READ = 1` | | `static final int` | `DRAG_FLAG_GLOBAL_URI_WRITE = 2` | | `static final int` | `DRAG_FLAG_HIDE_CALLING_TASK_ON_DRAG_START = 16384` | | `static final int` | `DRAG_FLAG_OPAQUE = 512` | | `static final int` | `DRAG_FLAG_START_INTENT_SENDER_ON_UNHANDLED_DRAG = 8192` | | `static final int` | `DRAWING_CACHE_QUALITY_AUTO = 0`  **This field is deprecated.** | | `static final int` | `DRAWING_CACHE_QUALITY_HIGH = 1048576`  **This field is deprecated.** | | `static final int` | `DRAWING_CACHE_QUALITY_LOW = 524288`  **This field is deprecated.** | | `static final int[]` | `EMPTY_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_SELECTED_STATE_SET` | | `static final int[]` | `ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_STATE_SET` | | `static final int[]` | `ENABLED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `FIND_VIEWS_WITH_CONTENT_DESCRIPTION = 2` | | `static final int` | `FIND_VIEWS_WITH_TEXT = 1` | | `static final int` | `FOCUSABLE = 1` | | `static final int` | `FOCUSABLES_ALL = 0` | | `static final int` | `FOCUSABLES_TOUCH_MODE = 1` | | `static final int` | `FOCUSABLE_AUTO = 16` | | `static final int[]` | `FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `FOCUSED_STATE_SET` | | `static final int[]` | `FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `FOCUS_BACKWARD = 1` | | `static final int` | `FOCUS_DOWN = 130` | | `static final int` | `FOCUS_FORWARD = 2` | | `static final int` | `FOCUS_LEFT = 17` | | `static final int` | `FOCUS_RIGHT = 66` | | `static final int` | `FOCUS_UP = 33` | | `static final int` | `GONE = 8` | | `static final int` | `HAPTIC_FEEDBACK_ENABLED = 268435456` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_NO = 2` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS = 4` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_YES = 1` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_NO = 2` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_NO_EXCLUDE_DESCENDANTS = 8` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_YES = 1` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_YES_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_NO = 2` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_NO_EXCLUDE_DESCENDANTS = 8` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_YES = 1` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_YES_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `INVISIBLE = 4` | | `static final int` | `KEEP_SCREEN_ON = 67108864` | | `static final int` | `LAYER_TYPE_HARDWARE = 2` | | `static final int` | `LAYER_TYPE_NONE = 0` | | `static final int` | `LAYER_TYPE_SOFTWARE = 1` | | `static final int` | `LAYOUT_DIRECTION_INHERIT = 2` | | `static final int` | `LAYOUT_DIRECTION_LOCALE = 3` | | `static final int` | `LAYOUT_DIRECTION_LTR = 0` | | `static final int` | `LAYOUT_DIRECTION_RTL = 1` | | `static final int` | `MEASURED_HEIGHT_STATE_SHIFT = 16` | | `static final int` | `MEASURED_SIZE_MASK = 16777215` | | `static final int` | `MEASURED_STATE_MASK = -16777216` | | `static final int` | `MEASURED_STATE_TOO_SMALL = 16777216` | | `static final int` | `NOT_FOCUSABLE = 0` | | `static final int` | `NO_ID = -1` | | `static final int` | `OVER_SCROLL_ALWAYS = 0` | | `static final int` | `OVER_SCROLL_IF_CONTENT_SCROLLS = 1` | | `static final int` | `OVER_SCROLL_NEVER = 2` | | `static final int` | `POINTER_CAPTURE_MODE_ABSOLUTE = 1` | | `static final int` | `POINTER_CAPTURE_MODE_RELATIVE = 2` | | `static final int` | `POINTER_CAPTURE_MODE_UNCAPTURED = 0` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_STATE_SET` | | `static final int[]` | `PRESSED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_INPUT_FOCUS = 3` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_SCROLL_ONLY = 1` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_TEXT_CURSOR = 2` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_UNDEFINED = 0` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_DEFAULT` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_HIGH = -4.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_LOW = -2.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_NORMAL = -3.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_NO_PREFERENCE = -1.0f` | | `static final Property<View, Float>` | `ROTATION` | | `static final Property<View, Float>` | `ROTATION_X` | | `static final Property<View, Float>` | `ROTATION_Y` | | `static final Property<View, Float>` | `SCALE_X` | | `static final Property<View, Float>` | `SCALE_Y` | | `static final int` | `SCREEN_STATE_OFF = 0` | | `static final int` | `SCREEN_STATE_ON = 1` | | `static final int` | `SCROLLBARS_INSIDE_INSET = 16777216` | | `static final int` | `SCROLLBARS_INSIDE_OVERLAY = 0` | | `static final int` | `SCROLLBARS_OUTSIDE_INSET = 50331648` | | `static final int` | `SCROLLBARS_OUTSIDE_OVERLAY = 33554432` | | `static final int` | `SCROLLBAR_POSITION_DEFAULT = 0` | | `static final int` | `SCROLLBAR_POSITION_LEFT = 1` | | `static final int` | `SCROLLBAR_POSITION_RIGHT = 2` | | `static final int` | `SCROLL_AXIS_HORIZONTAL = 1` | | `static final int` | `SCROLL_AXIS_NONE = 0` | | `static final int` | `SCROLL_AXIS_VERTICAL = 2` | | `static final int` | `SCROLL_CAPTURE_HINT_AUTO = 0` | | `static final int` | `SCROLL_CAPTURE_HINT_EXCLUDE = 1` | | `static final int` | `SCROLL_CAPTURE_HINT_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `SCROLL_CAPTURE_HINT_INCLUDE = 2` | | `static final int` | `SCROLL_INDICATOR_BOTTOM = 2` | | `static final int` | `SCROLL_INDICATOR_END = 32` | | `static final int` | `SCROLL_INDICATOR_LEFT = 4` | | `static final int` | `SCROLL_INDICATOR_RIGHT = 8` | | `static final int` | `SCROLL_INDICATOR_START = 16` | | `static final int` | `SCROLL_INDICATOR_TOP = 1` | | `static final int[]` | `SELECTED_STATE_SET` | | `static final int[]` | `SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `SOUND_EFFECTS_ENABLED = 134217728` | | `static final int` | `STATUS_BAR_HIDDEN = 1`  **This field is deprecated.** | | `static final int` | `STATUS_BAR_VISIBLE = 0`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_FULLSCREEN = 4`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_HIDE_NAVIGATION = 2`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_IMMERSIVE = 2048`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_IMMERSIVE_STICKY = 4096`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN = 1024`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION = 512`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_STABLE = 256`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR = 16`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LIGHT_STATUS_BAR = 8192`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LOW_PROFILE = 1`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_VISIBLE = 0`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_LAYOUT_FLAGS = 1536`  **This field is deprecated.** | | `static final int` | `TEXT_ALIGNMENT_CENTER = 4` | | `static final int` | `TEXT_ALIGNMENT_GRAVITY = 1` | | `static final int` | `TEXT_ALIGNMENT_INHERIT = 0` | | `static final int` | `TEXT_ALIGNMENT_TEXT_END = 3` | | `static final int` | `TEXT_ALIGNMENT_TEXT_START = 2` | | `static final int` | `TEXT_ALIGNMENT_VIEW_END = 6` | | `static final int` | `TEXT_ALIGNMENT_VIEW_START = 5` | | `static final int` | `TEXT_DIRECTION_ANY_RTL = 2` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG = 1` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG_LTR = 6` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG_RTL = 7` | | `static final int` | `TEXT_DIRECTION_INHERIT = 0` | | `static final int` | `TEXT_DIRECTION_LOCALE = 5` | | `static final int` | `TEXT_DIRECTION_LTR = 3` | | `static final int` | `TEXT_DIRECTION_RTL = 4` | | `static final Property<View, Float>` | `TRANSLATION_X` | | `static final Property<View, Float>` | `TRANSLATION_Y` | | `static final Property<View, Float>` | `TRANSLATION_Z` | | `static final String` | `VIEW_LOG_TAG = "View"` | | `static final int` | `VISIBLE = 0` | | `static final int[]` | `WINDOW_FOCUSED_STATE_SET` | | `static final Property<View, Float>` | `X` | | `static final Property<View, Float>` | `Y` | | `static final Property<View, Float>` | `Z` | |
| From [android.view.ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) |  |  | | --- | --- | | `static final int` | `CLIP_TO_PADDING_MASK = 34` | | `static final int` | `FOCUS_AFTER_DESCENDANTS = 262144` | | `static final int` | `FOCUS_BEFORE_DESCENDANTS = 131072` | | `static final int` | `FOCUS_BLOCK_DESCENDANTS = 393216` | | `static final int` | `LAYOUT_MODE_CLIP_BOUNDS = 0` | | `static final int` | `LAYOUT_MODE_OPTICAL_BOUNDS = 1` | | `static final int` | `PERSISTENT_ALL_CACHES = 3`  **This field is deprecated.** | | `static final int` | `PERSISTENT_ANIMATION_CACHE = 1`  **This field is deprecated.** | | `static final int` | `PERSISTENT_NO_CACHE = 0`  **This field is deprecated.** | | `static final int` | `PERSISTENT_SCROLLING_CACHE = 2`  **This field is deprecated.** | |

| Inherited methods |
| --- |
| From [android.widget.AbsSpinner](https://developer.android.com/reference/android/widget/AbsSpinner.html) |  |  | | --- | --- | | `void` | `autofill(AutofillValue value)` | | `void` | `dispatchRestoreInstanceState(SparseArray<Parcelable> container)` | | `ViewGroup.LayoutParams` | `generateDefaultLayoutParams()` | | `SpinnerAdapter` | `getAdapter()` | | `int` | `getAutofillType()` | | `AutofillValue` | `getAutofillValue()` | | `int` | `getCount()` | | `View` | `getSelectedView()` | | `int` | `pointToPosition(int x, int y)` | | `void` | `requestLayout()` | | `void` | `setSelection(int position)` | |
| From [android.widget.AdapterView](https://developer.android.com/reference/android/widget/AdapterView.html) |  |  | | --- | --- | | `void` | `addView(View child)` | | `boolean` | `canAnimate()` | | `void` | `dispatchSaveInstanceState(SparseArray<Parcelable> container)` | | `abstract T` | `getAdapter()` | | `View` | `getEmptyView()` | | `int` | `getFirstVisiblePosition()` | | `Object` | `getItemAtPosition(int position)` | | `long` | `getItemIdAtPosition(int position)` | | `int` | `getLastVisiblePosition()` | | `final AdapterView.OnItemClickListener` | `getOnItemClickListener()` | | `final AdapterView.OnItemLongClickListener` | `getOnItemLongClickListener()` | | `final AdapterView.OnItemSelectedListener` | `getOnItemSelectedListener()` | | `int` | `getPositionForView(View view)` | | `Object` | `getSelectedItem()` | | `long` | `getSelectedItemId()` | | `int` | `getSelectedItemPosition()` | | `void` | `onProvideAutofillStructure(ViewStructure structure, int flags)` | | `boolean` | `performItemClick(View view, int position, long id)` | | `void` | `removeAllViews()` | | `void` | `removeView(View child)` | | `void` | `removeViewAt(int index)` | | `void` | `setEmptyView(View emptyView)` | | `void` | `setFocusable(int focusable)` | | `void` | `setFocusableInTouchMode(boolean focusable)` | | `void` | `setOnClickListener(View.OnClickListener l)` | | `void` | `setOnItemLongClickListener(     AdapterView.OnItemLongClickListener listener )` | | `void` | `setOnItemSelectedListener(AdapterView.OnItemSelectedListener listener)` | |
| From [android.widget.Spinner](https://developer.android.com/reference/android/widget/Spinner.html) |  |  | | --- | --- | | `CharSequence` | `getAccessibilityClassName()` | | `int` | `getBaseline()` | | `int` | `getGravity()` | | `void` | `onClick(DialogInterface dialog, int which)` | | `void` | `onLayout(boolean changed, int l, int t, int r, int b)` | | `PointerIcon` | `onResolvePointerIcon(MotionEvent event, int pointerIndex)` | | `void` | `setEnabled(boolean enabled)` | | `void` | `setGravity(int gravity)` | | `void` | `setOnItemClickListener(AdapterView.OnItemClickListener l)` | | `void` | `setPromptId(int promptId)` | |
| From [android.view.View](https://developer.android.com/reference/android/view/View.html) |  |  | | --- | --- | | `void` | `addOnAttachStateChangeListener(     View.OnAttachStateChangeListener listener )` | | `void` | `addOnLayoutChangeListener(View.OnLayoutChangeListener listener)` | | `void` | `addOnUnhandledKeyEventListener(     View.OnUnhandledKeyEventListener listener )` | | `ViewPropertyAnimator` | `animate()` | | `void` | `announceForAccessibility(CharSequence text)`  **This method is deprecated.** | | `boolean` | `awakenScrollBars()` | | `void` | `bringToFront()` | | `void` | `buildDrawingCache()`  **This method is deprecated.** | | `void` | `buildLayer()` | | `boolean` | `callOnClick()` | | `boolean` | `canResolveLayoutDirection()` | | `boolean` | `canResolveTextAlignment()` | | `boolean` | `canResolveTextDirection()` | | `boolean` | `canScrollHorizontally(int direction)` | | `boolean` | `canScrollVertically(int direction)` | | `final void` | `cancelDragAndDrop()` | | `void` | `cancelLongPress()` | | `final void` | `cancelPendingInputEvents()` | | `boolean` | `checkInputConnectionProxy(View view)` | | `void` | `clearAnimation()` | | `void` | `clearPendingCredentialRequest()` | | `void` | `clearViewTranslationCallback()` | | `static int` | `combineMeasuredStates(int curState, int newState)` | | `int` | `computeHorizontalScrollExtent()` | | `int` | `computeHorizontalScrollOffset()` | | `int` | `computeHorizontalScrollRange()` | | `void` | `computeScroll()` | | `WindowInsets` | `computeSystemWindowInsets(WindowInsets in, Rect outLocalInsets)` | | `int` | `computeVerticalScrollExtent()` | | `int` | `computeVerticalScrollOffset()` | | `int` | `computeVerticalScrollRange()` | | `AccessibilityNodeInfo` | `createAccessibilityNodeInfo()` | | `void` | `createContextMenu(ContextMenu menu)` | | `void` | `destroyDrawingCache()`  **This method is deprecated.** | | `boolean` | `dispatchGenericMotionEvent(MotionEvent event)` | | `boolean` | `dispatchNestedFling(float velocityX, float velocityY, boolean consumed)` | | `boolean` | `dispatchNestedPreFling(float velocityX, float velocityY)` | | `boolean` | `dispatchNestedPrePerformAccessibilityAction(     int action,     Bundle arguments )` | | `boolean` | `dispatchNestedPreScroll(     int dx,     int dy,     int[] consumed,     int[] offsetInWindow )` | | `boolean` | `dispatchNestedScroll(     int dxConsumed,     int dyConsumed,     int dxUnconsumed,     int dyUnconsumed,     int[] offsetInWindow )` | | `boolean` | `dispatchPopulateAccessibilityEvent(AccessibilityEvent event)` | | `void` | `draw(Canvas canvas)` | | `void` | `drawableHotspotChanged(float x, float y)` | | `final OnBackInvokedDispatcher` | `findOnBackInvokedDispatcher()` | | `final T` | `<T extends View> findViewById(int id)` | | `final T` | `<T extends View> findViewWithTag(Object tag)` | | `boolean` | `fitSystemWindows(Rect insets)`  **This method is deprecated.** | | `void` | `forceHasOverlappingRendering(boolean hasOverlappingRendering)` | | `void` | `forceLayout()` | | `void` | `generateDisplayHash(     String hashAlgorithm,     Rect bounds,     Executor executor,     DisplayHashResultCallback callback )` | | `static int` | `generateViewId()` | | `View.AccessibilityDelegate` | `getAccessibilityDelegate()` | | `int` | `getAccessibilityLiveRegion()` | | `AccessibilityNodeProvider` | `getAccessibilityNodeProvider()` | | `CharSequence` | `getAccessibilityPaneTitle()` | | `int` | `getAccessibilityTraversalAfter()` | | `int` | `getAccessibilityTraversalBefore()` | | `String` | `getAllowedHandwritingDelegatePackageName()` | | `String` | `getAllowedHandwritingDelegatorPackageName()` | | `float` | `getAlpha()` | | `Animation` | `getAnimation()` | | `Matrix` | `getAnimationMatrix()` | | `IBinder` | `getApplicationWindowToken()` | | `int[]` | `getAttributeResolutionStack(int attribute)` | | `Map<Integer, Integer>` | `getAttributeSourceResourceMap()` | | `String[]` | `getAutofillHints()` | | `final AutofillId` | `getAutofillId()` | | `Drawable` | `getBackground()` | | `BlendMode` | `getBackgroundTintBlendMode()` | | `ColorStateList` | `getBackgroundTintList()` | | `PorterDuff.Mode` | `getBackgroundTintMode()` | | `final int` | `getBottom()` | | `float` | `getBottomFadingEdgeStrength()` | | `int` | `getBottomPaddingOffset()` | | `float` | `getCameraDistance()` | | `Rect` | `getClipBounds()` | | `boolean` | `getClipBounds(Rect outRect)` | | `final boolean` | `getClipToOutline()` | | `final ContentCaptureSession` | `getContentCaptureSession()` | | `CharSequence` | `getContentDescription()` | | `final int` | `getContentSensitivity()` | | `final Context` | `getContext()` | | `ContextMenu.ContextMenuInfo` | `getContextMenuInfo()` | | `final boolean` | `getDefaultFocusHighlightEnabled()` | | `static int` | `getDefaultSize(int size, int measureSpec)` | | `Display` | `getDisplay()` | | `final int[]` | `getDrawableState()` | | `Bitmap` | `getDrawingCache()`  **This method is deprecated.** | | `int` | `getDrawingCacheBackgroundColor()`  **This method is deprecated.** | | `int` | `getDrawingCacheQuality()`  **This method is deprecated.** | | `void` | `getDrawingRect(Rect outRect)` | | `long` | `getDrawingTime()` | | `float` | `getElevation()` | | `int` | `getExplicitStyle()` | | `boolean` | `getFilterTouchesWhenObscured()` | | `boolean` | `getFitsSystemWindows()` | | `int` | `getFocusable()` | | `ArrayList<View>` | `getFocusables(int direction)` | | `void` | `getFocusedRect(Rect r)` | | `Drawable` | `getForeground()` | | `int` | `getForegroundGravity()` | | `BlendMode` | `getForegroundTintBlendMode()` | | `ColorStateList` | `getForegroundTintList()` | | `PorterDuff.Mode` | `getForegroundTintMode()` | | `float` | `getFrameContentVelocity()` | | `final boolean` | `getGlobalVisibleRect(Rect r)` | | `Handler` | `getHandler()` | | `float` | `getHandwritingBoundsOffsetBottom()` | | `float` | `getHandwritingBoundsOffsetLeft()` | | `float` | `getHandwritingBoundsOffsetRight()` | | `float` | `getHandwritingBoundsOffsetTop()` | | `int` | `getHandwritingDelegateFlags()` | | `Runnable` | `getHandwritingDelegatorCallback()` | | `final boolean` | `getHasOverlappingRendering()` | | `final int` | `getHeight()` | | `void` | `getHitRect(Rect outRect)` | | `int` | `getHorizontalFadingEdgeLength()` | | `int` | `getHorizontalScrollbarHeight()` | | `Drawable` | `getHorizontalScrollbarThumbDrawable()` | | `Drawable` | `getHorizontalScrollbarTrackDrawable()` | | `int` | `getId()` | | `int` | `getImportantForAccessibility()` | | `int` | `getImportantForAutofill()` | | `int` | `getImportantForContentCapture()` | | `boolean` | `getKeepScreenOn()` | | `KeyEvent.DispatcherState` | `getKeyDispatcherState()` | | `int` | `getLabelFor()` | | `int` | `getLayerType()` | | `int` | `getLayoutDirection()` | | `ViewGroup.LayoutParams` | `getLayoutParams()` | | `final int` | `getLeft()` | | `float` | `getLeftFadingEdgeStrength()` | | `int` | `getLeftPaddingOffset()` | | `final boolean` | `getLocalVisibleRect(Rect r)` | | `void` | `getLocationInSurface(int[] location)` | | `void` | `getLocationInWindow(int[] outLocation)` | | `void` | `getLocationOnScreen(int[] outLocation)` | | `Matrix` | `getMatrix()` | | `final int` | `getMeasuredHeight()` | | `final int` | `getMeasuredHeightAndState()` | | `final int` | `getMeasuredState()` | | `final int` | `getMeasuredWidth()` | | `final int` | `getMeasuredWidthAndState()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `int` | `getNextClusterForwardId()` | | `int` | `getNextFocusDownId()` | | `int` | `getNextFocusForwardId()` | | `int` | `getNextFocusLeftId()` | | `int` | `getNextFocusRightId()` | | `int` | `getNextFocusUpId()` | | `View.OnFocusChangeListener` | `getOnFocusChangeListener()` | | `int` | `getOutlineAmbientShadowColor()` | | `ViewOutlineProvider` | `getOutlineProvider()` | | `int` | `getOutlineSpotShadowColor()` | | `int` | `getOverScrollMode()` | | `ViewOverlay` | `getOverlay()` | | `int` | `getPaddingBottom()` | | `int` | `getPaddingEnd()` | | `int` | `getPaddingLeft()` | | `int` | `getPaddingRight()` | | `int` | `getPaddingStart()` | | `int` | `getPaddingTop()` | | `final ViewParent` | `getParent()` | | `ViewParent` | `getParentForAccessibility()` | | `final OutcomeReceiver<GetCredentialResponse, GetCredentialException>` | `getPendingCredentialCallback()` | | `final GetCredentialRequest` | `getPendingCredentialRequest()` | | `float` | `getPivotX()` | | `float` | `getPivotY()` | | `PointerIcon` | `getPointerIcon()` | | `final List<Rect>` | `getPreferKeepClearRects()` | | `String[]` | `getReceiveContentMimeTypes()` | | `float` | `getRequestedFrameRate()` | | `Resources` | `getResources()` | | `final boolean` | `getRevealOnFocusHint()` | | `final int` | `getRight()` | | `float` | `getRightFadingEdgeStrength()` | | `int` | `getRightPaddingOffset()` | | `AttachedSurfaceControl` | `getRootSurfaceControl()` | | `View` | `getRootView()` | | `WindowInsets` | `getRootWindowInsets()` | | `float` | `getRotation()` | | `float` | `getRotationX()` | | `float` | `getRotationY()` | | `float` | `getScaleX()` | | `float` | `getScaleY()` | | `int` | `getScrollBarDefaultDelayBeforeFade()` | | `int` | `getScrollBarFadeDuration()` | | `int` | `getScrollBarSize()` | | `int` | `getScrollBarStyle()` | | `int` | `getScrollCaptureHint()` | | `int` | `getScrollIndicators()` | | `final int` | `getScrollX()` | | `final int` | `getScrollY()` | | `int` | `getSolidColor()` | | `int` | `getSourceLayoutResId()` | | `final CharSequence` | `getStateDescription()` | | `StateListAnimator` | `getStateListAnimator()` | | `int` | `getSuggestedMinimumHeight()` | | `int` | `getSuggestedMinimumWidth()` | | `CharSequence` | `getSupplementalDescription()` | | `List<Rect>` | `getSystemGestureExclusionRects()` | | `int` | `getSystemUiVisibility()`  **This method is deprecated.** | | `Object` | `getTag()` | | `int` | `getTextAlignment()` | | `int` | `getTextDirection()` | | `CharSequence` | `getTooltipText()` | | `final int` | `getTop()` | | `float` | `getTopFadingEdgeStrength()` | | `int` | `getTopPaddingOffset()` | | `TouchDelegate` | `getTouchDelegate()` | | `ArrayList<View>` | `getTouchables()` | | `float` | `getTransitionAlpha()` | | `String` | `getTransitionName()` | | `float` | `getTranslationX()` | | `float` | `getTranslationY()` | | `float` | `getTranslationZ()` | | `long` | `getUniqueDrawingId()` | | `int` | `getVerticalFadingEdgeLength()` | | `int` | `getVerticalScrollbarPosition()` | | `Drawable` | `getVerticalScrollbarThumbDrawable()` | | `Drawable` | `getVerticalScrollbarTrackDrawable()` | | `int` | `getVerticalScrollbarWidth()` | | `ViewTranslationResponse` | `getViewTranslationResponse()` | | `ViewTreeObserver` | `getViewTreeObserver()` | | `int` | `getVisibility()` | | `final int` | `getWidth()` | | `int` | `getWindowAttachCount()` | | `WindowId` | `getWindowId()` | | `WindowInsetsController` | `getWindowInsetsController()` | | `int` | `getWindowSystemUiVisibility()`  **This method is deprecated.** | | `IBinder` | `getWindowToken()` | | `int` | `getWindowVisibility()` | | `void` | `getWindowVisibleDisplayFrame(Rect outRect)` | | `float` | `getX()` | | `float` | `getY()` | | `float` | `getZ()` | | `boolean` | `hasExplicitFocusable()` | | `boolean` | `hasFocusable()` | | `boolean` | `hasNestedScrollingParent()` | | `boolean` | `hasOnClickListeners()` | | `boolean` | `hasOnLongClickListeners()` | | `boolean` | `hasOverlappingRendering()` | | `boolean` | `hasPointerCapture()` | | `boolean` | `hasWindowFocus()` | | `static View` | `inflate(Context context, int resource, ViewGroup root)` | | `void` | `invalidate()` | | `void` | `invalidateDrawable(Drawable drawable)` | | `void` | `invalidateOutline()` | | `boolean` | `isAccessibilityDataSensitive()` | | `boolean` | `isAccessibilityFocused()` | | `boolean` | `isAccessibilityHeading()` | | `boolean` | `isActivated()` | | `boolean` | `isAttachedToWindow()` | | `boolean` | `isAutoHandwritingEnabled()` | | `boolean` | `isClickable()` | | `final boolean` | `isContentSensitive()` | | `boolean` | `isContextClickable()` | | `boolean` | `isCredential()`  **This method is deprecated.** | | `boolean` | `isDirty()` | | `boolean` | `isDrawingCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isDuplicateParentStateEnabled()` | | `boolean` | `isEnabled()` | | `final boolean` | `isFocusable()` | | `final boolean` | `isFocusableInTouchMode()` | | `boolean` | `isFocused()` | | `final boolean` | `isFocusedByDefault()` | | `boolean` | `isForceDarkAllowed()` | | `boolean` | `isHandwritingDelegate()` | | `boolean` | `isHapticFeedbackEnabled()` | | `boolean` | `isHardwareAccelerated()` | | `boolean` | `isHorizontalFadingEdgeEnabled()` | | `boolean` | `isHorizontalScrollBarEnabled()` | | `boolean` | `isHovered()` | | `boolean` | `isImportantForAccessibility()` | | `final boolean` | `isImportantForAutofill()` | | `final boolean` | `isImportantForContentCapture()` | | `boolean` | `isInEditMode()` | | `boolean` | `isInLayout()` | | `boolean` | `isInTouchMode()` | | `final boolean` | `isKeyboardNavigationCluster()` | | `boolean` | `isLaidOut()` | | `boolean` | `isLayoutDirectionResolved()` | | `boolean` | `isLayoutRequested()` | | `boolean` | `isLongClickable()` | | `boolean` | `isNestedScrollingEnabled()` | | `boolean` | `isOpaque()` | | `boolean` | `isPaddingOffsetRequired()` | | `boolean` | `isPaddingRelative()` | | `boolean` | `isPivotSet()` | | `final boolean` | `isPreferKeepClear()` | | `boolean` | `isPressed()` | | `boolean` | `isSaveEnabled()` | | `boolean` | `isSaveFromParentEnabled()` | | `boolean` | `isScreenReaderFocusable()` | | `boolean` | `isScrollContainer()` | | `boolean` | `isScrollbarFadingEnabled()` | | `boolean` | `isSelected()` | | `final boolean` | `isShowingLayoutBounds()` | | `boolean` | `isShown()` | | `boolean` | `isSoundEffectsEnabled()` | | `final boolean` | `isTemporarilyDetached()` | | `boolean` | `isTextAlignmentResolved()` | | `boolean` | `isTextDirectionResolved()` | | `boolean` | `isVerticalFadingEdgeEnabled()` | | `boolean` | `isVerticalScrollBarEnabled()` | | `boolean` | `isVisibleToUserForAutofill(int virtualId)` | | `View` | `keyboardNavigationClusterSearch(View currentCluster, int direction)` | | `final void` | `measure(int widthMeasureSpec, int heightMeasureSpec)` | | `static int[]` | `mergeDrawableStates(int[] baseState, int[] additionalState)` | | `void` | `offsetLeftAndRight(int offset)` | | `void` | `offsetTopAndBottom(int offset)` | | `void` | `onAnimationEnd()` | | `void` | `onAnimationStart()` | | `WindowInsets` | `onApplyWindowInsets(WindowInsets insets)` | | `void` | `onCancelPendingInputEvents()` | | `boolean` | `onCapturedPointerEvent(MotionEvent event)` | | `boolean` | `onCheckIsTextEditor()` | | `void` | `onConfigurationChanged(Configuration newConfig)` | | `void` | `onCreateContextMenu(ContextMenu menu)` | | `InputConnection` | `onCreateInputConnection(EditorInfo outAttrs)` | | `void` | `onCreateViewTranslationRequest(     int[] supportedFormats,     Consumer<ViewTranslationRequest> requestsCollector )` | | `void` | `onCreateVirtualViewTranslationRequests(     long[] virtualIds,     int[] supportedFormats,     Consumer<ViewTranslationRequest> requestsCollector )` | | `void` | `onDisplayHint(int hint)` | | `boolean` | `onDragEvent(DragEvent event)` | | `void` | `onDraw(Canvas canvas)` | | `void` | `onDrawForeground(Canvas canvas)` | | `final void` | `onDrawScrollBars(Canvas canvas)` | | `boolean` | `onFilterTouchEventForSecurity(MotionEvent event)` | | `void` | `onFinishInflate()` | | `void` | `onFinishTemporaryDetach()` | | `void` | `onFocusChanged(     boolean gainFocus,     int direction,     Rect previouslyFocusedRect )` | | `boolean` | `onGenericMotionEvent(MotionEvent event)` | | `void` | `onHoverChanged(boolean hovered)` | | `boolean` | `onHoverEvent(MotionEvent event)` | | `void` | `onInitializeAccessibilityEvent(AccessibilityEvent event)` | | `void` | `onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info)` | | `boolean` | `onKeyDown(int keyCode, KeyEvent event)` | | `boolean` | `onKeyLongPress(int keyCode, KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, KeyEvent event)` | | `boolean` | `onKeyPreIme(int keyCode, KeyEvent event)` | | `boolean` | `onKeyShortcut(int keyCode, KeyEvent event)` | | `boolean` | `onKeyUp(int keyCode, KeyEvent event)` | | `void` | `onOverScrolled(     int scrollX,     int scrollY,     boolean clampedX,     boolean clampedY )` | | `void` | `onPointerCaptureChange(boolean hasCapture)` | | `void` | `onPopulateAccessibilityEvent(AccessibilityEvent event)` | | `void` | `onProvideAutofillVirtualStructure(ViewStructure structure, int flags)` | | `void` | `onProvideContentCaptureStructure(ViewStructure structure, int flags)` | | `void` | `onProvideStructure(ViewStructure structure)` | | `void` | `onProvideVirtualStructure(ViewStructure structure)` | | `ContentInfo` | `onReceiveContent(ContentInfo payload)` | | `void` | `onRtlPropertiesChanged(int layoutDirection)` | | `void` | `onScreenStateChanged(int screenState)` | | `void` | `onScrollCaptureSearch(     Rect localVisibleRect,     Point windowOffset,     Consumer<ScrollCaptureTarget> targets )` | | `void` | `onScrollChanged(int l, int t, int oldl, int oldt)` | | `boolean` | `onSetAlpha(int alpha)` | | `void` | `onSizeChanged(int w, int h, int oldw, int oldh)` | | `void` | `onStartTemporaryDetach()` | | `boolean` | `onTrackballEvent(MotionEvent event)` | | `void` | `onViewTranslationResponse(ViewTranslationResponse response)` | | `void` | `onVirtualViewTranslationResponses(     LongSparseArray<ViewTranslationResponse> response )` | | `void` | `onVisibilityAggregated(boolean isVisible)` | | `void` | `onVisibilityChanged(View changedView, int visibility)` | | `void` | `onWindowFocusChanged(boolean hasWindowFocus)` | | `void` | `onWindowSystemUiVisibilityChanged(int visible)`  **This method is deprecated.** | | `void` | `onWindowVisibilityChanged(int visibility)` | | `boolean` | `overScrollBy(     int deltaX,     int deltaY,     int scrollX,     int scrollY,     int scrollRangeX,     int scrollRangeY,     int maxOverScrollX,     int maxOverScrollY,     boolean isTouchEvent )` | | `boolean` | `performAccessibilityAction(int action, Bundle arguments)` | | `boolean` | `performContextClick()` | | `boolean` | `performHapticFeedback(HapticFeedbackRequest request)` | | `boolean` | `performLongClick()` | | `ContentInfo` | `performReceiveContent(ContentInfo payload)` | | `void` | `playSoundEffect(int soundConstant)` | | `boolean` | `post(Runnable action)` | | `boolean` | `postDelayed(Runnable action, long delayMillis)` | | `void` | `postInvalidate()` | | `void` | `postInvalidateDelayed(long delayMilliseconds)` | | `void` | `postInvalidateOnAnimation()` | | `void` | `postOnAnimation(Runnable action)` | | `void` | `postOnAnimationDelayed(Runnable action, long delayMillis)` | | `void` | `refreshDrawableState()` | | `static void` | `registerCalledFromWrongThreadListener(     View.CalledFromWrongThreadListener listener )` | | `void` | `releasePointerCapture()` | | `boolean` | `removeCallbacks(Runnable action)` | | `void` | `removeOnAttachStateChangeListener(     View.OnAttachStateChangeListener listener )` | | `void` | `removeOnLayoutChangeListener(View.OnLayoutChangeListener listener)` | | `void` | `removeOnUnhandledKeyEventListener(     View.OnUnhandledKeyEventListener listener )` | | `void` | `reportAppJankStats(AppJankStats appJankStats)` | | `void` | `requestApplyInsets()` | | `void` | `requestFitSystemWindows()`  **This method is deprecated.** | | `final boolean` | `requestFocusFromTouch()` | | `void` | `requestPointerCapture()` | | `boolean` | `requestRectangleOnScreen(Rect rectangle)` | | `final void` | `requestUnbufferedDispatch(MotionEvent event)` | | `final T` | `<T extends View> requireViewById(int id)` | | `void` | `resetPivot()` | | `static int` | `resolveSize(int size, int measureSpec)` | | `static int` | `resolveSizeAndState(int size, int measureSpec, int childMeasuredState)` | | `void` | `restoreHierarchyState(SparseArray<Parcelable> container)` | | `final void` | `saveAttributeDataForStyleable(     Context context,     int[] styleable,     AttributeSet attrs,     TypedArray t,     int defStyleAttr,     int defStyleRes )` | | `void` | `saveHierarchyState(SparseArray<Parcelable> container)` | | `void` | `scheduleDrawable(Drawable who, Runnable what, long when)` | | `void` | `scrollBy(int x, int y)` | | `void` | `scrollTo(int x, int y)` | | `void` | `sendAccessibilityEvent(int eventType)` | | `void` | `sendAccessibilityEventUnchecked(AccessibilityEvent event)` | | `void` | `setAccessibilityDataSensitive(int accessibilityDataSensitive)` | | `void` | `setAccessibilityDelegate(View.AccessibilityDelegate delegate)` | | `void` | `setAccessibilityHeading(boolean isHeading)` | | `void` | `setAccessibilityLiveRegion(int mode)` | | `void` | `setAccessibilityPaneTitle(CharSequence accessibilityPaneTitle)` | | `void` | `setAccessibilityTraversalAfter(int afterId)` | | `void` | `setAccessibilityTraversalBefore(int beforeId)` | | `void` | `setActivated(boolean activated)` | | `void` | `setAllowClickWhenDisabled(boolean clickableWhenDisabled)` | | `void` | `setAllowedHandwritingDelegatePackage(String allowedPackageName)` | | `void` | `setAllowedHandwritingDelegatorPackage(String allowedPackageName)` | | `void` | `setAlpha(float alpha)` | | `void` | `setAnimation(Animation animation)` | | `void` | `setAnimationMatrix(Matrix matrix)` | | `void` | `setAutoHandwritingEnabled(boolean enabled)` | | `void` | `setAutofillHints(String[] autofillHints)` | | `void` | `setAutofillId(AutofillId id)` | | `void` | `setBackground(Drawable background)` | | `void` | `setBackgroundColor(int color)` | | `void` | `setBackgroundTintBlendMode(BlendMode blendMode)` | | `void` | `setBackgroundTintList(ColorStateList tint)` | | `void` | `setBackgroundTintMode(PorterDuff.Mode tintMode)` | | `final void` | `setBottom(int bottom)` | | `void` | `setCameraDistance(float distance)` | | `void` | `setClickable(boolean clickable)` | | `void` | `setClipBounds(Rect clipBounds)` | | `void` | `setClipToOutline(boolean clipToOutline)` | | `void` | `setContentCaptureSession(ContentCaptureSession contentCaptureSession)` | | `void` | `setContentDescription(CharSequence contentDescription)` | | `final void` | `setContentSensitivity(int mode)` | | `void` | `setContextClickable(boolean contextClickable)` | | `void` | `setDefaultFocusHighlightEnabled(boolean defaultFocusHighlightEnabled)` | | `void` | `setDrawingCacheBackgroundColor(int color)`  **This method is deprecated.** | | `void` | `setDrawingCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setDrawingCacheQuality(int quality)`  **This method is deprecated.** | | `void` | `setDuplicateParentStateEnabled(boolean enabled)` | | `void` | `setElevation(float elevation)` | | `void` | `setFadingEdgeLength(int length)` | | `void` | `setFilterTouchesWhenObscured(boolean enabled)` | | `void` | `setFitsSystemWindows(boolean fitSystemWindows)` | | `void` | `setFocusedByDefault(boolean isFocusedByDefault)` | | `void` | `setForceDarkAllowed(boolean allow)` | | `void` | `setForeground(Drawable foreground)` | | `void` | `setForegroundGravity(int gravity)` | | `void` | `setForegroundTintBlendMode(BlendMode blendMode)` | | `void` | `setForegroundTintList(ColorStateList tint)` | | `void` | `setForegroundTintMode(PorterDuff.Mode tintMode)` | | `void` | `setFrameContentVelocity(float pixelsPerSecond)` | | `void` | `setHandwritingBoundsOffsets(     float offsetLeft,     float offsetTop,     float offsetRight,     float offsetBottom )` | | `void` | `setHandwritingDelegateFlags(int flags)` | | `void` | `setHandwritingDelegatorCallback(Runnable callback)` | | `void` | `setHapticFeedbackEnabled(boolean hapticFeedbackEnabled)` | | `void` | `setHasTransientState(boolean hasTransientState)` | | `void` | `setHorizontalFadingEdgeEnabled(boolean horizontalFadingEdgeEnabled)` | | `void` | `setHorizontalScrollBarEnabled(boolean horizontalScrollBarEnabled)` | | `void` | `setHorizontalScrollbarThumbDrawable(Drawable drawable)` | | `void` | `setHorizontalScrollbarTrackDrawable(Drawable drawable)` | | `void` | `setHovered(boolean hovered)` | | `void` | `setId(int id)` | | `void` | `setImportantForAccessibility(int mode)` | | `void` | `setImportantForAutofill(int mode)` | | `void` | `setImportantForContentCapture(int mode)` | | `void` | `setIsCredential(boolean isCredential)`  **This method is deprecated.** | | `void` | `setIsHandwritingDelegate(boolean isHandwritingDelegate)` | | `void` | `setKeepScreenOn(boolean keepScreenOn)` | | `void` | `setKeyboardNavigationCluster(boolean isCluster)` | | `void` | `setLabelFor(int id)` | | `void` | `setLayerPaint(Paint paint)` | | `void` | `setLayerType(int layerType, Paint paint)` | | `void` | `setLayoutDirection(int layoutDirection)` | | `void` | `setLayoutParams(ViewGroup.LayoutParams params)` | | `final void` | `setLeft(int left)` | | `final void` | `setLeftTopRightBottom(int left, int top, int right, int bottom)` | | `void` | `setLongClickable(boolean longClickable)` | | `final void` | `setMeasuredDimension(int measuredWidth, int measuredHeight)` | | `void` | `setMinimumHeight(int minHeight)` | | `void` | `setMinimumWidth(int minWidth)` | | `void` | `setNestedScrollingEnabled(boolean enabled)` | | `void` | `setNextClusterForwardId(int nextClusterForwardId)` | | `void` | `setNextFocusDownId(int nextFocusDownId)` | | `void` | `setNextFocusForwardId(int nextFocusForwardId)` | | `void` | `setNextFocusLeftId(int nextFocusLeftId)` | | `void` | `setNextFocusRightId(int nextFocusRightId)` | | `void` | `setNextFocusUpId(int nextFocusUpId)` | | `void` | `setOnApplyWindowInsetsListener(     View.OnApplyWindowInsetsListener listener )` | | `void` | `setOnCapturedPointerListener(View.OnCapturedPointerListener l)` | | `void` | `setOnContextClickListener(View.OnContextClickListener l)` | | `void` | `setOnCreateContextMenuListener(View.OnCreateContextMenuListener l)` | | `void` | `setOnDragListener(View.OnDragListener l)` | | `void` | `setOnFocusChangeListener(View.OnFocusChangeListener l)` | | `void` | `setOnGenericMotionListener(View.OnGenericMotionListener l)` | | `void` | `setOnHoverListener(View.OnHoverListener l)` | | `void` | `setOnKeyListener(View.OnKeyListener l)` | | `void` | `setOnLongClickListener(View.OnLongClickListener l)` | | `void` | `setOnReceiveContentListener(     String[] mimeTypes,     OnReceiveContentListener listener )` | | `void` | `setOnScrollChangeListener(View.OnScrollChangeListener l)` | | `void` | `setOnSystemUiVisibilityChangeListener(     View.OnSystemUiVisibilityChangeListener l )`  **This method is deprecated.** | | `void` | `setOnTouchListener(View.OnTouchListener l)` | | `void` | `setOutlineAmbientShadowColor(int color)` | | `void` | `setOutlineProvider(ViewOutlineProvider provider)` | | `void` | `setOutlineSpotShadowColor(int color)` | | `void` | `setOverScrollMode(int overScrollMode)` | | `void` | `setPadding(int left, int top, int right, int bottom)` | | `void` | `setPaddingRelative(int start, int top, int end, int bottom)` | | `void` | `setPendingCredentialRequest(     GetCredentialRequest request,     OutcomeReceiver<GetCredentialResponse, GetCredentialException> callback )` | | `void` | `setPivotX(float pivotX)` | | `void` | `setPivotY(float pivotY)` | | `void` | `setPointerIcon(PointerIcon pointerIcon)` | | `final void` | `setPreferKeepClear(boolean preferKeepClear)` | | `final void` | `setPreferKeepClearRects(List<Rect> rects)` | | `void` | `setPressed(boolean pressed)` | | `void` | `setRenderEffect(RenderEffect renderEffect)` | | `final void` | `setRevealOnFocusHint(boolean revealOnFocus)` | | `final void` | `setRight(int right)` | | `void` | `setRotation(float rotation)` | | `void` | `setRotationX(float rotationX)` | | `void` | `setRotationY(float rotationY)` | | `void` | `setSaveEnabled(boolean enabled)` | | `void` | `setSaveFromParentEnabled(boolean enabled)` | | `void` | `setScaleX(float scaleX)` | | `void` | `setScaleY(float scaleY)` | | `void` | `setScreenReaderFocusable(boolean screenReaderFocusable)` | | `void` | `setScrollBarDefaultDelayBeforeFade(     int scrollBarDefaultDelayBeforeFade )` | | `void` | `setScrollBarFadeDuration(int scrollBarFadeDuration)` | | `void` | `setScrollBarSize(int scrollBarSize)` | | `void` | `setScrollBarStyle(int style)` | | `final void` | `setScrollCaptureCallback(ScrollCaptureCallback callback)` | | `void` | `setScrollCaptureHint(int hint)` | | `void` | `setScrollContainer(boolean isScrollContainer)` | | `void` | `setScrollIndicators(int indicators)` | | `void` | `setScrollX(int value)` | | `void` | `setScrollY(int value)` | | `void` | `setScrollbarFadingEnabled(boolean fadeScrollbars)` | | `void` | `setSelected(boolean selected)` | | `void` | `setSoundEffectsEnabled(boolean soundEffectsEnabled)` | | `void` | `setStateDescription(CharSequence stateDescription)` | | `void` | `setStateListAnimator(StateListAnimator stateListAnimator)` | | `void` | `setSupplementalDescription(CharSequence supplementalDescription)` | | `void` | `setSystemGestureExclusionRects(List<Rect> rects)` | | `void` | `setSystemUiVisibility(int visibility)`  **This method is deprecated.** | | `void` | `setTag(int key, Object tag)` | | `void` | `setTextAlignment(int textAlignment)` | | `void` | `setTextDirection(int textDirection)` | | `void` | `setTooltipText(CharSequence tooltipText)` | | `final void` | `setTop(int top)` | | `void` | `setTouchDelegate(TouchDelegate delegate)` | | `void` | `setTransitionAlpha(float alpha)` | | `final void` | `setTransitionName(String transitionName)` | | `void` | `setTransitionVisibility(int visibility)` | | `void` | `setTranslationX(float translationX)` | | `void` | `setTranslationY(float translationY)` | | `void` | `setTranslationZ(float translationZ)` | | `void` | `setVerticalFadingEdgeEnabled(boolean verticalFadingEdgeEnabled)` | | `void` | `setVerticalScrollBarEnabled(boolean verticalScrollBarEnabled)` | | `void` | `setVerticalScrollbarPosition(int position)` | | `void` | `setVerticalScrollbarThumbDrawable(Drawable drawable)` | | `void` | `setVerticalScrollbarTrackDrawable(Drawable drawable)` | | `void` | `setViewTranslationCallback(ViewTranslationCallback callback)` | | `void` | `setVisibility(int visibility)` | | `void` | `setWillNotCacheDrawing(boolean willNotCacheDrawing)`  **This method is deprecated.** | | `void` | `setWillNotDraw(boolean willNotDraw)` | | `void` | `setX(float x)` | | `void` | `setY(float y)` | | `void` | `setZ(float z)` | | `boolean` | `showContextMenu()` | | `ActionMode` | `startActionMode(ActionMode.Callback callback)` | | `void` | `startAnimation(Animation animation)` | | `final boolean` | `startDrag(     ClipData data,     View.DragShadowBuilder shadowBuilder,     Object myLocalState,     int flags )`  **This method is deprecated.** | | `final boolean` | `startDragAndDrop(     ClipData data,     View.DragShadowBuilder shadowBuilder,     Object myLocalState,     int flags )` | | `boolean` | `startNestedScroll(int axes)` | | `void` | `stopNestedScroll()` | | `String` | `toString()` | | `void` | `transformMatrixToGlobal(Matrix matrix)` | | `void` | `transformMatrixToLocal(Matrix matrix)` | | `static void` | `unregisterCalledFromWrongThreadListener(     View.CalledFromWrongThreadListener listener )` | | `void` | `unscheduleDrawable(Drawable who)` | | `final void` | `updateDragShadow(View.DragShadowBuilder shadowBuilder)` | | `boolean` | `verifyDrawable(Drawable who)` | | `boolean` | `willNotCacheDrawing()`  **This method is deprecated.** | | `boolean` | `willNotDraw()` | |
| From [android.view.ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) |  |  | | --- | --- | | `void` | `addChildrenForAccessibility(ArrayList<View> outChildren)` | | `void` | `addExtraDataToAccessibilityNodeInfo(     AccessibilityNodeInfo info,     String extraDataKey,     Bundle arguments )` | | `void` | `addFocusables(ArrayList<View> views, int direction, int focusableMode)` | | `void` | `addKeyboardNavigationClusters(Collection<View> views, int direction)` | | `boolean` | `addStatesFromChildren()` | | `void` | `addTouchables(ArrayList<View> views)` | | `boolean` | `addViewInLayout(View child, int index, ViewGroup.LayoutParams params)` | | `void` | `attachLayoutAnimationParameters(     View child,     ViewGroup.LayoutParams params,     int index,     int count )` | | `void` | `attachViewToParent(View child, int index, ViewGroup.LayoutParams params)` | | `void` | `bringChildToFront(View child)` | | `boolean` | `checkLayoutParams(ViewGroup.LayoutParams p)` | | `void` | `childDrawableStateChanged(View child)` | | `void` | `childHasTransientStateChanged(     View child,     boolean childHasTransientState )` | | `void` | `cleanupLayoutState(View child)` | | `void` | `clearChildFocus(View child)` | | `void` | `clearDisappearingChildren()` | | `void` | `clearFocus()` | | `void` | `debug(int depth)` | | `void` | `detachAllViewsFromParent()` | | `void` | `detachViewFromParent(View child)` | | `void` | `detachViewsFromParent(int start, int count)` | | `WindowInsets` | `dispatchApplyWindowInsets(WindowInsets insets)` | | `boolean` | `dispatchCapturedPointerEvent(MotionEvent event)` | | `void` | `dispatchConfigurationChanged(Configuration newConfig)` | | `void` | `dispatchCreateViewTranslationRequest(     Map<AutofillId, long[]> viewIds,     int[] supportedFormats,     TranslationCapability capability,     List<ViewTranslationRequest> requests )` | | `void` | `dispatchDisplayHint(int hint)` | | `boolean` | `dispatchDragEvent(DragEvent event)` | | `void` | `dispatchDraw(Canvas canvas)` | | `void` | `dispatchDrawableHotspotChanged(float x, float y)` | | `void` | `dispatchFinishTemporaryDetach()` | | `void` | `dispatchFreezeSelfOnly(SparseArray<Parcelable> container)` | | `boolean` | `dispatchGenericFocusedEvent(MotionEvent event)` | | `boolean` | `dispatchGenericPointerEvent(MotionEvent event)` | | `boolean` | `dispatchHoverEvent(MotionEvent event)` | | `boolean` | `dispatchKeyEvent(KeyEvent event)` | | `boolean` | `dispatchKeyEventPreIme(KeyEvent event)` | | `boolean` | `dispatchKeyShortcutEvent(KeyEvent event)` | | `void` | `dispatchPointerCaptureChanged(boolean hasCapture)` | | `void` | `dispatchProvideAutofillStructure(ViewStructure structure, int flags)` | | `void` | `dispatchProvideStructure(ViewStructure structure)` | | `void` | `dispatchScrollCaptureSearch(     Rect localVisibleRect,     Point windowOffset,     Consumer<ScrollCaptureTarget> targets )` | | `void` | `dispatchSetActivated(boolean activated)` | | `void` | `dispatchSetPressed(boolean pressed)` | | `void` | `dispatchSetSelected(boolean selected)` | | `void` | `dispatchStartTemporaryDetach()` | | `void` | `dispatchSystemUiVisibilityChanged(int visible)`  **This method is deprecated.** | | `void` | `dispatchThawSelfOnly(SparseArray<Parcelable> container)` | | `boolean` | `dispatchTouchEvent(MotionEvent ev)` | | `boolean` | `dispatchTrackballEvent(MotionEvent event)` | | `boolean` | `dispatchUnhandledMove(View focused, int direction)` | | `void` | `dispatchVisibilityChanged(View changedView, int visibility)` | | `void` | `dispatchWindowFocusChanged(boolean hasFocus)` | | `void` | `dispatchWindowInsetsAnimationEnd(WindowInsetsAnimation animation)` | | `void` | `dispatchWindowInsetsAnimationPrepare(WindowInsetsAnimation animation)` | | `WindowInsets` | `dispatchWindowInsetsAnimationProgress(     WindowInsets insets,     List<WindowInsetsAnimation> runningAnimations )` | | `WindowInsetsAnimation.Bounds` | `dispatchWindowInsetsAnimationStart(     WindowInsetsAnimation animation,     WindowInsetsAnimation.Bounds bounds )` | | `void` | `dispatchWindowSystemUiVisiblityChanged(int visible)`  **This method is deprecated.** | | `void` | `dispatchWindowVisibilityChanged(int visibility)` | | `boolean` | `drawChild(Canvas canvas, View child, long drawingTime)` | | `void` | `endViewTransition(View view)` | | `View` | `findFocus()` | | `OnBackInvokedDispatcher` | `findOnBackInvokedDispatcherForChild(View child, View requester)` | | `void` | `findViewsWithText(     ArrayList<View> outViews,     CharSequence text,     int flags )` | | `View` | `focusSearch(View focused, int direction)` | | `void` | `focusableViewAvailable(View v)` | | `boolean` | `gatherTransparentRegion(Region region)` | | `ViewGroup.LayoutParams` | `generateLayoutParams(AttributeSet attrs)` | | `View` | `getChildAt(int index)` | | `int` | `getChildCount()` | | `final int` | `getChildDrawingOrder(int drawingPosition)` | | `static int` | `getChildMeasureSpec(int spec, int padding, int childDimension)` | | `boolean` | `getChildStaticTransformation(View child, Transformation t)` | | `boolean` | `getChildVisibleRect(View child, Rect r, Point offset)` | | `boolean` | `getClipChildren()` | | `boolean` | `getClipToPadding()` | | `int` | `getDescendantFocusability()` | | `View` | `getFocusedChild()` | | `LayoutAnimationController` | `getLayoutAnimation()` | | `Animation.AnimationListener` | `getLayoutAnimationListener()` | | `int` | `getLayoutMode()` | | `LayoutTransition` | `getLayoutTransition()` | | `int` | `getNestedScrollAxes()` | | `ViewGroupOverlay` | `getOverlay()` | | `int` | `getPersistentDrawingCache()`  **This method is deprecated.** | | `boolean` | `getTouchscreenBlocksFocus()` | | `boolean` | `hasFocus()` | | `boolean` | `hasTransientState()` | | `int` | `indexOfChild(View child)` | | `final void` | `invalidateChild(View child, Rect dirty)`  **This method is deprecated.** | | `ViewParent` | `invalidateChildInParent(int[] location, Rect dirty)`  **This method is deprecated.** | | `boolean` | `isAlwaysDrawnWithCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isAnimationCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isChildrenDrawingOrderEnabled()` | | `boolean` | `isChildrenDrawnWithCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isLayoutSuppressed()` | | `boolean` | `isMotionEventSplittingEnabled()` | | `boolean` | `isTransitionGroup()` | | `void` | `jumpDrawablesToCurrentState()` | | `final void` | `layout(int l, int t, int r, int b)` | | `void` | `measureChild(     View child,     int parentWidthMeasureSpec,     int parentHeightMeasureSpec )` | | `void` | `measureChildWithMargins(     View child,     int parentWidthMeasureSpec,     int widthUsed,     int parentHeightMeasureSpec,     int heightUsed )` | | `void` | `measureChildren(int widthMeasureSpec, int heightMeasureSpec)` | | `void` | `notifySubtreeAccessibilityStateChanged(     View child,     View source,     int changeType )` | | `final void` | `offsetDescendantRectToMyCoords(View descendant, Rect rect)` | | `final void` | `offsetRectIntoDescendantCoords(View descendant, Rect rect)` | | `void` | `onAttachedToWindow()` | | `int[]` | `onCreateDrawableState(int extraSpace)` | | `void` | `onDescendantInvalidated(View child, View target)` | | `boolean` | `onInterceptHoverEvent(MotionEvent event)` | | `boolean` | `onInterceptTouchEvent(MotionEvent ev)` | | `boolean` | `onNestedFling(     View target,     float velocityX,     float velocityY,     boolean consumed )` | | `boolean` | `onNestedPreFling(View target, float velocityX, float velocityY)` | | `boolean` | `onNestedPrePerformAccessibilityAction(     View target,     int action,     Bundle args )` | | `void` | `onNestedPreScroll(View target, int dx, int dy, int[] consumed)` | | `void` | `onNestedScroll(     View target,     int dxConsumed,     int dyConsumed,     int dxUnconsumed,     int dyUnconsumed )` | | `void` | `onNestedScrollAccepted(View child, View target, int axes)` | | `boolean` | `onRequestFocusInDescendants(int direction, Rect previouslyFocusedRect)` | | `boolean` | `onRequestSendAccessibilityEvent(View child, AccessibilityEvent event)` | | `boolean` | `onStartNestedScroll(View child, View target, int nestedScrollAxes)` | | `void` | `onStopNestedScroll(View child)` | | `void` | `onViewAdded(View child)` | | `void` | `onViewRemoved(View child)` | | `void` | `propagateRequestedFrameRate(float frameRate, boolean forceOverride)` | | `void` | `recomputeViewAttributes(View child)` | | `void` | `removeAllViewsInLayout()` | | `void` | `removeDetachedView(View child, boolean animate)` | | `void` | `removeViewInLayout(View view)` | | `void` | `removeViews(int start, int count)` | | `void` | `removeViewsInLayout(int start, int count)` | | `void` | `requestChildFocus(View child, View focused)` | | `boolean` | `requestChildRectangleOnScreen(     View child,     Rect rectangle,     boolean immediate )` | | `void` | `requestDisallowInterceptTouchEvent(boolean disallowIntercept)` | | `boolean` | `requestFocus(int direction, Rect previouslyFocusedRect)` | | `boolean` | `requestSendAccessibilityEvent(View child, AccessibilityEvent event)` | | `void` | `requestTransparentRegion(View child)` | | `boolean` | `restoreDefaultFocus()` | | `void` | `scheduleLayoutAnimation()` | | `void` | `setAddStatesFromChildren(boolean addsStates)` | | `void` | `setAlwaysDrawnWithCacheEnabled(boolean always)`  **This method is deprecated.** | | `void` | `setAnimationCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setChildrenDrawingCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setChildrenDrawingOrderEnabled(boolean enabled)` | | `void` | `setChildrenDrawnWithCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setClipChildren(boolean clipChildren)` | | `void` | `setClipToPadding(boolean clipToPadding)` | | `void` | `setDescendantFocusability(int focusability)` | | `void` | `setLayoutAnimation(LayoutAnimationController controller)` | | `void` | `setLayoutAnimationListener(     Animation.AnimationListener animationListener )` | | `void` | `setLayoutMode(int layoutMode)` | | `void` | `setLayoutTransition(LayoutTransition transition)` | | `void` | `setMotionEventSplittingEnabled(boolean split)` | | `void` | `setOnHierarchyChangeListener(     ViewGroup.OnHierarchyChangeListener listener )` | | `void` | `setPersistentDrawingCache(int drawingCacheToKeep)`  **This method is deprecated.** | | `void` | `setRequestedFrameRate(float frameRate)` | | `void` | `setStaticTransformationsEnabled(boolean enabled)` | | `void` | `setTouchscreenBlocksFocus(boolean touchscreenBlocksFocus)` | | `void` | `setTransitionGroup(boolean isTransitionGroup)` | | `void` | `setWindowInsetsAnimationCallback(     WindowInsetsAnimation.Callback callback )` | | `boolean` | `shouldDelayChildPressedState()` | | `boolean` | `showContextMenuForChild(View originalView)` | | `ActionMode` | `startActionModeForChild(     View originalView,     ActionMode.Callback callback )` | | `void` | `startLayoutAnimation()` | | `void` | `startViewTransition(View view)` | | `void` | `suppressLayout(boolean suppress)` | | `void` | `updateViewLayout(View view, ViewGroup.LayoutParams params)` | |

## Public constructors

### AppCompatSpinner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatSpinner(@NonNull Context context)
```

Construct a new spinner with the given context's theme.

| Parameters |
| --- |
| `@NonNull Context context` | The Context the view is running in, through which it can access the current theme, resources, etc. |

### AppCompatSpinner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatSpinner(@NonNull Context context, @Nullable AttributeSet attrs)
```

Construct a new spinner with the given context's theme and the supplied attribute set.

| Parameters |
| --- |
| `@NonNull Context context` | The Context the view is running in, through which it can access the current theme, resources, etc. |
| `@Nullable AttributeSet attrs` | The attributes of the XML tag that is inflating the view. |

### AppCompatSpinner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatSpinner(@NonNull Context context, int mode)
```

Construct a new spinner with the given context's theme and the supplied mode of displaying choices. `mode` may be one of `MODE_DIALOG` or `MODE_DROPDOWN`.

| Parameters |
| --- |
| `@NonNull Context context` | The Context the view is running in, through which it can access the current theme, resources, etc. |
| `int mode` | Constant describing how the user will select choices from the spinner. |

| See also |
| --- |
| `MODE_DIALOG` |  |
| `MODE_DROPDOWN` |  |

### AppCompatSpinner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatSpinner(  
    @NonNull Context context,  
    @Nullable AttributeSet attrs,  
    int defStyleAttr  
)
```

Construct a new spinner with the given context's theme, the supplied attribute set, and default style attribute.

| Parameters |
| --- |
| `@NonNull Context context` | The Context the view is running in, through which it can access the current theme, resources, etc. |
| `@Nullable AttributeSet attrs` | The attributes of the XML tag that is inflating the view. |
| `int defStyleAttr` | An attribute in the current theme that contains a reference to a style resource that supplies default values for the view. Can be 0 to not look for defaults. |

### AppCompatSpinner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatSpinner(  
    @NonNull Context context,  
    @Nullable AttributeSet attrs,  
    int defStyleAttr,  
    int mode  
)
```

Construct a new spinner with the given context's theme, the supplied attribute set, and default style. `mode` may be one of `MODE_DIALOG` or `MODE_DROPDOWN` and determines how the user will select choices from the spinner.

| Parameters |
| --- |
| `@NonNull Context context` | The Context the view is running in, through which it can access the current theme, resources, etc. |
| `@Nullable AttributeSet attrs` | The attributes of the XML tag that is inflating the view. |
| `int defStyleAttr` | An attribute in the current theme that contains a reference to a style resource that supplies default values for the view. Can be 0 to not look for defaults. |
| `int mode` | Constant describing how the user will select choices from the spinner. |

| See also |
| --- |
| `MODE_DIALOG` |  |
| `MODE_DROPDOWN` |  |

### AppCompatSpinner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AppCompatSpinner(  
    @NonNull Context context,  
    @Nullable AttributeSet attrs,  
    int defStyleAttr,  
    int mode,  
    Resources.Theme popupTheme  
)
```

Constructs a new spinner with the given context's theme, the supplied attribute set, default styles, popup mode (one of `MODE_DIALOG` or `MODE_DROPDOWN`), and the context against which the popup should be inflated.

| Parameters |
| --- |
| `@NonNull Context context` | The context against which the view is inflated, which provides access to the current theme, resources, etc. |
| `@Nullable AttributeSet attrs` | The attributes of the XML tag that is inflating the view. |
| `int defStyleAttr` | An attribute in the current theme that contains a reference to a style resource that supplies default values for the view. Can be 0 to not look for defaults. |
| `int mode` | Constant describing how the user will select choices from the spinner. |
| `Resources.Theme popupTheme` | The theme against which the dialog or dropdown popup should be inflated. May be `null` to use the view theme. If set, this will override any value specified by Spinner\_popupTheme. |

| See also |
| --- |
| `MODE_DIALOG` |  |
| `MODE_DROPDOWN` |  |

## Public methods

### getDropDownHorizontalOffset

```
public int getDropDownHorizontalOffset()
```

Get the configured horizontal offset in pixels for the spinner's popup window of choices. Only valid in `MODE_DROPDOWN`; other modes will return 0.

| Returns |
| --- |
| `int` | Horizontal offset in pixels |

### getDropDownVerticalOffset

```
public int getDropDownVerticalOffset()
```

### getDropDownWidth

```
public int getDropDownWidth()
```

### getPopupBackground

```
public Drawable getPopupBackground()
```

### getPopupContext

```
public Context getPopupContext()
```

| Returns |
| --- |
| `Context` | the context used to inflate the Spinner's popup or dialog window |

### getPrompt

```
public CharSequence getPrompt()
```

### onRestoreInstanceState

```
public void onRestoreInstanceState(Parcelable state)
```

### onSaveInstanceState

```
public Parcelable onSaveInstanceState()
```

### onTouchEvent

```
public boolean onTouchEvent(MotionEvent event)
```

### performClick

```
public boolean performClick()
```

### setAdapter

```
public void setAdapter(SpinnerAdapter adapter)
```

### setBackgroundDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setBackgroundDrawable(@Nullable Drawable background)
```

**This method is deprecated.**

### setBackgroundResource

```
public void setBackgroundResource(@DrawableRes int resId)
```

### setDropDownHorizontalOffset

```
public void setDropDownHorizontalOffset(int pixels)
```

### setDropDownVerticalOffset

```
public void setDropDownVerticalOffset(int pixels)
```

### setDropDownWidth

```
public void setDropDownWidth(int pixels)
```

### setPopupBackgroundDrawable

```
public void setPopupBackgroundDrawable(Drawable background)
```

### setPopupBackgroundResource

```
public void setPopupBackgroundResource(@DrawableRes int resId)
```

### setPrompt

```
public void setPrompt(CharSequence prompt)
```

## Protected methods

### drawableStateChanged

```
protected void drawableStateChanged()
```

### onDetachedFromWindow

```
protected void onDetachedFromWindow()
```

### onMeasure

```
protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec)
```