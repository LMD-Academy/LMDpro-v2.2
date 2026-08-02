--- source: https://developer.android.com/reference/androidx/appcompat/widget/SwitchCompat ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# SwitchCompat

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/SwitchCompat.java+class:androidx.appcompat.widget.SwitchCompat)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/SwitchCompat "View this page in Kotlin")
|Java

```
public class SwitchCompat extends CompoundButton implements EmojiCompatConfigurationView
```

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | | |
| ↳ | [android.view.View](https://developer.android.com/reference/android/view/View.html) | | | | |
|  | ↳ | [android.widget.TextView](https://developer.android.com/reference/android/widget/TextView.html) | | | |
|  |  | ↳ | [android.widget.Button](https://developer.android.com/reference/android/widget/Button.html) | | |
|  |  |  | ↳ | [android.widget.CompoundButton](https://developer.android.com/reference/android/widget/CompoundButton.html) | |
|  |  |  |  | ↳ | [androidx.appcompat.widget.SwitchCompat](/reference/androidx/appcompat/widget/SwitchCompat) |

---

SwitchCompat is a complete backport of the core `Switch` widget that brings the visuals and functionality of the toggle widget to older versions of the Android platform. Unlike other widgets in this package, SwitchCompat is not automatically used in layouts that include the `<Switch>` element. Instead, you need to explicitly use `<androidx.appcompat.widget.SwitchCompat>` and the matching attributes in your layouts.

The thumb can be tinted with `setThumbTintList` and `setThumbTintMode` APIs as well as with the matching XML attributes. The track can be tinted with `setTrackTintList` and `setTrackTintMode` APIs as well as with the matching XML attributes.

Supported attributes include:

* `textOn`
* `textOff`
* `switchMinWidth`
* `switchPadding`
* `switchTextAppearance`
* `thumb`
* `thumbTextPadding`
* `track`
* `thumbTint`
* `thumbTintMode`
* `trackTint`
* `trackTintMode`

For more information, see the  [Toggle Buttons](/guide/topics/ui/controls/togglebutton) guide.

## Summary

| Public constructors |
| --- |
| `SwitchCompat(@NonNull Context context)`  Construct a new Switch with default styling. |
| `SwitchCompat(@NonNull Context context, @Nullable AttributeSet attrs)`  Construct a new Switch with default styling, overriding specific style attributes as requested. |
| `SwitchCompat(     @NonNull Context context,     @Nullable AttributeSet attrs,     int defStyleAttr )`  Construct a new Switch with a default style determined by the given theme attribute, overriding specific style attributes as requested. |

| Public methods |
| --- |
| `void` | `draw(@NonNull Canvas c)` |
| `void` | `drawableHotspotChanged(float x, float y)` |
| `int` | `getCompoundPaddingLeft()` |
| `int` | `getCompoundPaddingRight()` |
| `@Nullable ActionMode.Callback` | `getCustomSelectionActionModeCallback()` |
| `boolean` | `@Attribute(value = "androidx.appcompat:showText") getShowText()`  Indicates whether the on/off text should be displayed. |
| `boolean` | `@Attribute(value = "androidx.appcompat:splitTrack") getSplitTrack()`  Returns whether the track should be split by the thumb. |
| `int` | `@Attribute(value = "androidx.appcompat:switchMinWidth") getSwitchMinWidth()`  Get the minimum width of the switch in pixels. |
| `int` | `@Attribute(value = "androidx.appcompat:switchPadding") getSwitchPadding()`  Get the amount of horizontal padding between the switch and the associated text. |
| `CharSequence` | `@Attribute(value = "android:textOff") getTextOff()`  Returns the text displayed when the button is not in the checked state. |
| `CharSequence` | `@Attribute(value = "android:textOn") getTextOn()`  Returns the text displayed when the button is in the checked state. |
| `Drawable` | `@Attribute(value = "android:thumb") getThumbDrawable()`  Get the drawable used for the switch "thumb" - the piece that the user can physically touch and drag along the track. |
| `int` | `@Attribute(value = "androidx.appcompat:thumbTextPadding") getThumbTextPadding()`  Get the horizontal padding around the text drawn on the switch itself. |
| `@Nullable ColorStateList` | `@Attribute(value = "androidx.appcompat:thumbTint") getThumbTintList()` |
| `@Nullable PorterDuff.Mode` | `@Attribute(value = "androidx.appcompat:thumbTintMode") getThumbTintMode()` |
| `Drawable` | `@Attribute(value = "androidx.appcompat:track") getTrackDrawable()`  Get the drawable used for the track that the switch slides within. |
| `@Nullable ColorStateList` | `@Attribute(value = "androidx.appcompat:trackTint") getTrackTintList()` |
| `@Nullable PorterDuff.Mode` | `@Attribute(value = "androidx.appcompat:trackTintMode") getTrackTintMode()` |
| `boolean` | `isEmojiCompatEnabled()` |
| `void` | `jumpDrawablesToCurrentState()` |
| `void` | `onInitializeAccessibilityEvent(AccessibilityEvent event)` |
| `void` | `onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info)` |
| `void` | `onMeasure(int widthMeasureSpec, int heightMeasureSpec)` |
| `void` | `onPopulateAccessibilityEvent(AccessibilityEvent event)` |
| `boolean` | `onTouchEvent(MotionEvent ev)` |
| `void` | `setAllCaps(boolean allCaps)` |
| `void` | `setChecked(boolean checked)` |
| `void` | `setCustomSelectionActionModeCallback(     @Nullable ActionMode.Callback actionModeCallback )`  See `setCustomSelectionActionModeCallback` |
| `void` | `setEmojiCompatEnabled(boolean enabled)`  Configure emoji fallback behavior using EmojiCompat. |
| `void` | `setFilters(@NonNull InputFilter[] filters)` |
| `void` | `setShowText(boolean showText)`  Sets whether the on/off text should be displayed. |
| `void` | `setSplitTrack(boolean splitTrack)`  Specifies whether the track should be split by the thumb. |
| `void` | `setSwitchMinWidth(int pixels)`  Set the minimum width of the switch in pixels. |
| `void` | `setSwitchPadding(int pixels)`  Set the amount of horizontal padding between the switch and the associated text. |
| `void` | `setSwitchTextAppearance(Context context, int resid)`  Sets the switch text color, size, style, hint color, and highlight color from the specified TextAppearance resource. |
| `void` | `setSwitchTypeface(Typeface typeface)`  Sets the typeface in which the text should be displayed on the switch. |
| `void` | `setSwitchTypeface(Typeface tf, int style)`  Sets the typeface and style in which the text should be displayed on the switch, and turns on the fake bold and italic bits in the Paint if the Typeface that you provided does not have all the bits in the style that you specified. |
| `void` | `setTextOff(CharSequence textOff)`  Sets the text displayed when the button is not in the checked state. |
| `void` | `setTextOn(CharSequence textOn)`  Sets the text displayed when the button is in the checked state. |
| `void` | `setThumbDrawable(Drawable thumb)`  Set the drawable used for the switch "thumb" - the piece that the user can physically touch and drag along the track. |
| `void` | `setThumbResource(int resId)`  Set the drawable used for the switch "thumb" - the piece that the user can physically touch and drag along the track. |
| `void` | `setThumbTextPadding(int pixels)`  Set the horizontal padding around the text drawn on the switch itself. |
| `void` | `setThumbTintList(@Nullable ColorStateList tint)`  Applies a tint to the thumb drawable. |
| `void` | `setThumbTintMode(@Nullable PorterDuff.Mode tintMode)`  Specifies the blending mode used to apply the tint specified by `setThumbTintList`} to the thumb drawable. |
| `void` | `setTrackDrawable(Drawable track)`  Set the drawable used for the track that the switch slides within. |
| `void` | `setTrackResource(int resId)`  Set the drawable used for the track that the switch slides within. |
| `void` | `setTrackTintList(@Nullable ColorStateList tint)`  Applies a tint to the track drawable. |
| `void` | `setTrackTintMode(@Nullable PorterDuff.Mode tintMode)`  Specifies the blending mode used to apply the tint specified by `setTrackTintList` to the track drawable. |
| `void` | `toggle()` |

| Protected methods |
| --- |
| `void` | `drawableStateChanged()` |
| `final @FloatRange(from = 0.0, to = 1.0) float` | `getThumbPosition()` |
| `int[]` | `onCreateDrawableState(int extraSpace)` |
| `void` | `onDraw(Canvas canvas)` |
| `void` | `onLayout(boolean changed, int left, int top, int right, int bottom)` |
| `final void` | `setEnforceSwitchWidth(boolean enforceSwitchWidth)`  Sets `true` to enforce the switch width being at least twice of the thumb width. |
| `boolean` | `verifyDrawable(@NonNull Drawable who)` |

| Inherited Constants |
| --- |
| From [android.widget.TextView](https://developer.android.com/reference/android/widget/TextView.html) |  |  | | --- | --- | | `static final int` | `AUTO_SIZE_TEXT_TYPE_NONE = 0` | | `static final int` | `AUTO_SIZE_TEXT_TYPE_UNIFORM = 1` | | `static final int` | `FOCUSED_SEARCH_RESULT_INDEX_NONE = -1` | |
| From [android.view.View](https://developer.android.com/reference/android/view/View.html) |  |  | | --- | --- | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_AUTO = 0` | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_NO = 2` | | `static final int` | `ACCESSIBILITY_DATA_SENSITIVE_YES = 1` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_ASSERTIVE = 2` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_NONE = 0` | | `static final int` | `ACCESSIBILITY_LIVE_REGION_POLITE = 1` | | `static final Property<View, Float>` | `ALPHA` | | `static final int` | `AUTOFILL_FLAG_INCLUDE_NOT_IMPORTANT_VIEWS = 1` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DATE = "creditCardExpirationDate"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DAY = "creditCardExpirationDay"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_MONTH = "creditCardExpirationMonth"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_YEAR = "creditCardExpirationYear"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_NUMBER = "creditCardNumber"` | | `static final String` | `AUTOFILL_HINT_CREDIT_CARD_SECURITY_CODE = "creditCardSecurityCode"` | | `static final String` | `AUTOFILL_HINT_EMAIL_ADDRESS = "emailAddress"` | | `static final String` | `AUTOFILL_HINT_NAME = "name"` | | `static final String` | `AUTOFILL_HINT_PASSWORD = "password"` | | `static final String` | `AUTOFILL_HINT_PHONE = "phone"` | | `static final String` | `AUTOFILL_HINT_POSTAL_ADDRESS = "postalAddress"` | | `static final String` | `AUTOFILL_HINT_POSTAL_CODE = "postalCode"` | | `static final String` | `AUTOFILL_HINT_USERNAME = "username"` | | `static final int` | `AUTOFILL_TYPE_DATE = 4` | | `static final int` | `AUTOFILL_TYPE_LIST = 3` | | `static final int` | `AUTOFILL_TYPE_NONE = 0` | | `static final int` | `AUTOFILL_TYPE_TEXT = 1` | | `static final int` | `AUTOFILL_TYPE_TOGGLE = 2` | | `static final int` | `CONTENT_SENSITIVITY_AUTO = 0` | | `static final int` | `CONTENT_SENSITIVITY_NOT_SENSITIVE = 2` | | `static final int` | `CONTENT_SENSITIVITY_SENSITIVE = 1` | | `static final int` | `DRAG_FLAG_ACCESSIBILITY_ACTION = 1024` | | `static final int` | `DRAG_FLAG_GLOBAL = 256` | | `static final int` | `DRAG_FLAG_GLOBAL_PERSISTABLE_URI_PERMISSION = 64` | | `static final int` | `DRAG_FLAG_GLOBAL_PREFIX_URI_PERMISSION = 128` | | `static final int` | `DRAG_FLAG_GLOBAL_SAME_APPLICATION = 4096` | | `static final int` | `DRAG_FLAG_GLOBAL_URI_READ = 1` | | `static final int` | `DRAG_FLAG_GLOBAL_URI_WRITE = 2` | | `static final int` | `DRAG_FLAG_HIDE_CALLING_TASK_ON_DRAG_START = 16384` | | `static final int` | `DRAG_FLAG_OPAQUE = 512` | | `static final int` | `DRAG_FLAG_START_INTENT_SENDER_ON_UNHANDLED_DRAG = 8192` | | `static final int` | `DRAWING_CACHE_QUALITY_AUTO = 0`  **This field is deprecated.** | | `static final int` | `DRAWING_CACHE_QUALITY_HIGH = 1048576`  **This field is deprecated.** | | `static final int` | `DRAWING_CACHE_QUALITY_LOW = 524288`  **This field is deprecated.** | | `static final int[]` | `EMPTY_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_SELECTED_STATE_SET` | | `static final int[]` | `ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `ENABLED_STATE_SET` | | `static final int[]` | `ENABLED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `FIND_VIEWS_WITH_CONTENT_DESCRIPTION = 2` | | `static final int` | `FIND_VIEWS_WITH_TEXT = 1` | | `static final int` | `FOCUSABLE = 1` | | `static final int` | `FOCUSABLES_ALL = 0` | | `static final int` | `FOCUSABLES_TOUCH_MODE = 1` | | `static final int` | `FOCUSABLE_AUTO = 16` | | `static final int[]` | `FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `FOCUSED_STATE_SET` | | `static final int[]` | `FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `FOCUS_BACKWARD = 1` | | `static final int` | `FOCUS_DOWN = 130` | | `static final int` | `FOCUS_FORWARD = 2` | | `static final int` | `FOCUS_LEFT = 17` | | `static final int` | `FOCUS_RIGHT = 66` | | `static final int` | `FOCUS_UP = 33` | | `static final int` | `GONE = 8` | | `static final int` | `HAPTIC_FEEDBACK_ENABLED = 268435456` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_NO = 2` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_NO_HIDE_DESCENDANTS = 4` | | `static final int` | `IMPORTANT_FOR_ACCESSIBILITY_YES = 1` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_NO = 2` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_NO_EXCLUDE_DESCENDANTS = 8` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_YES = 1` | | `static final int` | `IMPORTANT_FOR_AUTOFILL_YES_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_AUTO = 0` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_NO = 2` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_NO_EXCLUDE_DESCENDANTS = 8` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_YES = 1` | | `static final int` | `IMPORTANT_FOR_CONTENT_CAPTURE_YES_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `INVISIBLE = 4` | | `static final int` | `KEEP_SCREEN_ON = 67108864` | | `static final int` | `LAYER_TYPE_HARDWARE = 2` | | `static final int` | `LAYER_TYPE_NONE = 0` | | `static final int` | `LAYER_TYPE_SOFTWARE = 1` | | `static final int` | `LAYOUT_DIRECTION_INHERIT = 2` | | `static final int` | `LAYOUT_DIRECTION_LOCALE = 3` | | `static final int` | `LAYOUT_DIRECTION_LTR = 0` | | `static final int` | `LAYOUT_DIRECTION_RTL = 1` | | `static final int` | `MEASURED_HEIGHT_STATE_SHIFT = 16` | | `static final int` | `MEASURED_SIZE_MASK = 16777215` | | `static final int` | `MEASURED_STATE_MASK = -16777216` | | `static final int` | `MEASURED_STATE_TOO_SMALL = 16777216` | | `static final int` | `NOT_FOCUSABLE = 0` | | `static final int` | `NO_ID = -1` | | `static final int` | `OVER_SCROLL_ALWAYS = 0` | | `static final int` | `OVER_SCROLL_IF_CONTENT_SCROLLS = 1` | | `static final int` | `OVER_SCROLL_NEVER = 2` | | `static final int` | `POINTER_CAPTURE_MODE_ABSOLUTE = 1` | | `static final int` | `POINTER_CAPTURE_MODE_RELATIVE = 2` | | `static final int` | `POINTER_CAPTURE_MODE_UNCAPTURED = 0` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_STATE_SET` | | `static final int[]` | `PRESSED_ENABLED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_FOCUSED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_SELECTED_STATE_SET` | | `static final int[]` | `PRESSED_SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int[]` | `PRESSED_STATE_SET` | | `static final int[]` | `PRESSED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_INPUT_FOCUS = 3` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_SCROLL_ONLY = 1` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_TEXT_CURSOR = 2` | | `static final int` | `RECTANGLE_ON_SCREEN_REQUEST_SOURCE_UNDEFINED = 0` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_DEFAULT` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_HIGH = -4.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_LOW = -2.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_NORMAL = -3.0f` | | `static final float` | `REQUESTED_FRAME_RATE_CATEGORY_NO_PREFERENCE = -1.0f` | | `static final Property<View, Float>` | `ROTATION` | | `static final Property<View, Float>` | `ROTATION_X` | | `static final Property<View, Float>` | `ROTATION_Y` | | `static final Property<View, Float>` | `SCALE_X` | | `static final Property<View, Float>` | `SCALE_Y` | | `static final int` | `SCREEN_STATE_OFF = 0` | | `static final int` | `SCREEN_STATE_ON = 1` | | `static final int` | `SCROLLBARS_INSIDE_INSET = 16777216` | | `static final int` | `SCROLLBARS_INSIDE_OVERLAY = 0` | | `static final int` | `SCROLLBARS_OUTSIDE_INSET = 50331648` | | `static final int` | `SCROLLBARS_OUTSIDE_OVERLAY = 33554432` | | `static final int` | `SCROLLBAR_POSITION_DEFAULT = 0` | | `static final int` | `SCROLLBAR_POSITION_LEFT = 1` | | `static final int` | `SCROLLBAR_POSITION_RIGHT = 2` | | `static final int` | `SCROLL_AXIS_HORIZONTAL = 1` | | `static final int` | `SCROLL_AXIS_NONE = 0` | | `static final int` | `SCROLL_AXIS_VERTICAL = 2` | | `static final int` | `SCROLL_CAPTURE_HINT_AUTO = 0` | | `static final int` | `SCROLL_CAPTURE_HINT_EXCLUDE = 1` | | `static final int` | `SCROLL_CAPTURE_HINT_EXCLUDE_DESCENDANTS = 4` | | `static final int` | `SCROLL_CAPTURE_HINT_INCLUDE = 2` | | `static final int` | `SCROLL_INDICATOR_BOTTOM = 2` | | `static final int` | `SCROLL_INDICATOR_END = 32` | | `static final int` | `SCROLL_INDICATOR_LEFT = 4` | | `static final int` | `SCROLL_INDICATOR_RIGHT = 8` | | `static final int` | `SCROLL_INDICATOR_START = 16` | | `static final int` | `SCROLL_INDICATOR_TOP = 1` | | `static final int[]` | `SELECTED_STATE_SET` | | `static final int[]` | `SELECTED_WINDOW_FOCUSED_STATE_SET` | | `static final int` | `SOUND_EFFECTS_ENABLED = 134217728` | | `static final int` | `STATUS_BAR_HIDDEN = 1`  **This field is deprecated.** | | `static final int` | `STATUS_BAR_VISIBLE = 0`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_FULLSCREEN = 4`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_HIDE_NAVIGATION = 2`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_IMMERSIVE = 2048`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_IMMERSIVE_STICKY = 4096`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN = 1024`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION = 512`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LAYOUT_STABLE = 256`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR = 16`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LIGHT_STATUS_BAR = 8192`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_LOW_PROFILE = 1`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_FLAG_VISIBLE = 0`  **This field is deprecated.** | | `static final int` | `SYSTEM_UI_LAYOUT_FLAGS = 1536`  **This field is deprecated.** | | `static final int` | `TEXT_ALIGNMENT_CENTER = 4` | | `static final int` | `TEXT_ALIGNMENT_GRAVITY = 1` | | `static final int` | `TEXT_ALIGNMENT_INHERIT = 0` | | `static final int` | `TEXT_ALIGNMENT_TEXT_END = 3` | | `static final int` | `TEXT_ALIGNMENT_TEXT_START = 2` | | `static final int` | `TEXT_ALIGNMENT_VIEW_END = 6` | | `static final int` | `TEXT_ALIGNMENT_VIEW_START = 5` | | `static final int` | `TEXT_DIRECTION_ANY_RTL = 2` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG = 1` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG_LTR = 6` | | `static final int` | `TEXT_DIRECTION_FIRST_STRONG_RTL = 7` | | `static final int` | `TEXT_DIRECTION_INHERIT = 0` | | `static final int` | `TEXT_DIRECTION_LOCALE = 5` | | `static final int` | `TEXT_DIRECTION_LTR = 3` | | `static final int` | `TEXT_DIRECTION_RTL = 4` | | `static final Property<View, Float>` | `TRANSLATION_X` | | `static final Property<View, Float>` | `TRANSLATION_Y` | | `static final Property<View, Float>` | `TRANSLATION_Z` | | `static final String` | `VIEW_LOG_TAG = "View"` | | `static final int` | `VISIBLE = 0` | | `static final int[]` | `WINDOW_FOCUSED_STATE_SET` | | `static final Property<View, Float>` | `X` | | `static final Property<View, Float>` | `Y` | | `static final Property<View, Float>` | `Z` | |

| Inherited methods |
| --- |
| From [android.widget.Button](https://developer.android.com/reference/android/widget/Button.html) |  |  | | --- | --- | | `PointerIcon` | `onResolvePointerIcon(MotionEvent event, int pointerIndex)` | |
| From [android.widget.CompoundButton](https://developer.android.com/reference/android/widget/CompoundButton.html) |  |  | | --- | --- | | `void` | `autofill(AutofillValue value)` | | `CharSequence` | `getAccessibilityClassName()` | | `int` | `getAutofillType()` | | `AutofillValue` | `getAutofillValue()` | | `Drawable` | `getButtonDrawable()` | | `BlendMode` | `getButtonTintBlendMode()` | | `ColorStateList` | `getButtonTintList()` | | `PorterDuff.Mode` | `getButtonTintMode()` | | `boolean` | `isChecked()` | | `void` | `onRestoreInstanceState(Parcelable state)` | | `Parcelable` | `onSaveInstanceState()` | | `boolean` | `performClick()` | | `void` | `setButtonDrawable(Drawable drawable)` | | `void` | `setButtonIcon(Icon icon)` | | `void` | `setButtonTintBlendMode(BlendMode tintMode)` | | `void` | `setButtonTintList(ColorStateList tint)` | | `void` | `setButtonTintMode(PorterDuff.Mode tintMode)` | | `void` | `setOnCheckedChangeListener(     CompoundButton.OnCheckedChangeListener listener )` | | `void` | `setStateDescription(CharSequence stateDescription)` | |
| From [android.widget.TextView](https://developer.android.com/reference/android/widget/TextView.html) |  |  | | --- | --- | | `void` | `addExtraDataToAccessibilityNodeInfo(     AccessibilityNodeInfo info,     String extraDataKey,     Bundle arguments )` | | `void` | `addTextChangedListener(TextWatcher watcher)` | | `final void` | `append(CharSequence text)` | | `void` | `beginBatchEdit()` | | `boolean` | `bringPointIntoView(int offset)` | | `void` | `cancelLongPress()` | | `void` | `clearComposingText()` | | `int` | `computeHorizontalScrollRange()` | | `void` | `computeScroll()` | | `int` | `computeVerticalScrollExtent()` | | `int` | `computeVerticalScrollRange()` | | `void` | `debug(int depth)` | | `boolean` | `didTouchFocusSelect()` | | `void` | `endBatchEdit()` | | `boolean` | `extractText(ExtractedTextRequest request, ExtractedText outText)` | | `void` | `findViewsWithText(     ArrayList<View> outViews,     CharSequence searched,     int flags )` | | `final int` | `getAutoLinkMask()` | | `int` | `getAutoSizeMaxTextSize()` | | `int` | `getAutoSizeMinTextSize()` | | `int` | `getAutoSizeStepGranularity()` | | `int[]` | `getAutoSizeTextAvailableSizes()` | | `int` | `getAutoSizeTextType()` | | `String[]` | `getAutofillHints()` | | `int` | `getBaseline()` | | `int` | `getBottomPaddingOffset()` | | `int` | `getBreakStrategy()` | | `int` | `getCompoundDrawablePadding()` | | `BlendMode` | `getCompoundDrawableTintBlendMode()` | | `ColorStateList` | `getCompoundDrawableTintList()` | | `PorterDuff.Mode` | `getCompoundDrawableTintMode()` | | `Drawable[]` | `getCompoundDrawables()` | | `Drawable[]` | `getCompoundDrawablesRelative()` | | `int` | `getCompoundPaddingBottom()` | | `int` | `getCompoundPaddingEnd()` | | `int` | `getCompoundPaddingStart()` | | `int` | `getCompoundPaddingTop()` | | `final int` | `getCurrentHintTextColor()` | | `final int` | `getCurrentTextColor()` | | `ActionMode.Callback` | `getCustomInsertionActionModeCallback()` | | `boolean` | `getDefaultEditable()` | | `MovementMethod` | `getDefaultMovementMethod()` | | `Editable` | `getEditableText()` | | `TextUtils.TruncateAt` | `getEllipsize()` | | `CharSequence` | `getError()` | | `int` | `getExtendedPaddingBottom()` | | `int` | `getExtendedPaddingTop()` | | `InputFilter[]` | `getFilters()` | | `int` | `getFirstBaselineToTopHeight()` | | `void` | `getFocusedRect(Rect r)` | | `int` | `getFocusedSearchResultHighlightColor()` | | `int` | `getFocusedSearchResultIndex()` | | `String` | `getFontFeatureSettings()` | | `String` | `getFontVariationSettings()` | | `boolean` | `getFreezesText()` | | `int` | `getGravity()` | | `int` | `getHighlightColor()` | | `Highlights` | `getHighlights()` | | `CharSequence` | `getHint()` | | `final ColorStateList` | `getHintTextColors()` | | `int` | `getHyphenationFrequency()` | | `int` | `getImeActionId()` | | `CharSequence` | `getImeActionLabel()` | | `LocaleList` | `getImeHintLocales()` | | `int` | `getImeOptions()` | | `boolean` | `getIncludeFontPadding()` | | `Bundle` | `getInputExtras(boolean create)` | | `int` | `getInputType()` | | `int` | `getJustificationMode()` | | `final KeyListener` | `getKeyListener()` | | `int` | `getLastBaselineToBottomHeight()` | | `final Layout` | `getLayout()` | | `float` | `getLeftFadingEdgeStrength()` | | `int` | `getLeftPaddingOffset()` | | `float` | `getLetterSpacing()` | | `int` | `getLineBounds(int line, Rect bounds)` | | `int` | `getLineBreakStyle()` | | `int` | `getLineBreakWordStyle()` | | `int` | `getLineCount()` | | `int` | `getLineHeight()` | | `float` | `getLineSpacingExtra()` | | `float` | `getLineSpacingMultiplier()` | | `final ColorStateList` | `getLinkTextColors()` | | `final boolean` | `getLinksClickable()` | | `int` | `getMarqueeRepeatLimit()` | | `int` | `getMaxEms()` | | `int` | `getMaxHeight()` | | `int` | `getMaxLines()` | | `int` | `getMaxWidth()` | | `int` | `getMinEms()` | | `int` | `getMinHeight()` | | `int` | `getMinLines()` | | `int` | `getMinWidth()` | | `Paint.FontMetrics` | `getMinimumFontMetrics()` | | `final MovementMethod` | `getMovementMethod()` | | `int` | `getOffsetForPosition(float x, float y)` | | `TextPaint` | `getPaint()` | | `int` | `getPaintFlags()` | | `String` | `getPrivateImeOptions()` | | `float` | `getRightFadingEdgeStrength()` | | `int` | `getRightPaddingOffset()` | | `int` | `getSearchResultHighlightColor()` | | `int[]` | `getSearchResultHighlights()` | | `int` | `getSelectionEnd()` | | `int` | `getSelectionStart()` | | `int` | `getShadowColor()` | | `float` | `getShadowDx()` | | `float` | `getShadowDy()` | | `float` | `getShadowRadius()` | | `boolean` | `getShiftDrawingOffsetForStartOverhang()` | | `final boolean` | `getShowSoftInputOnFocus()` | | `CharSequence` | `getText()` | | `TextClassifier` | `getTextClassifier()` | | `final ColorStateList` | `getTextColors()` | | `Drawable` | `getTextCursorDrawable()` | | `TextDirectionHeuristic` | `getTextDirectionHeuristic()` | | `Locale` | `getTextLocale()` | | `LocaleList` | `getTextLocales()` | | `PrecomputedText.Params` | `getTextMetricsParams()` | | `float` | `getTextScaleX()` | | `Drawable` | `getTextSelectHandle()` | | `Drawable` | `getTextSelectHandleLeft()` | | `Drawable` | `getTextSelectHandleRight()` | | `float` | `getTextSize()` | | `int` | `getTextSizeUnit()` | | `int` | `getTopPaddingOffset()` | | `int` | `getTotalPaddingBottom()` | | `int` | `getTotalPaddingEnd()` | | `int` | `getTotalPaddingLeft()` | | `int` | `getTotalPaddingRight()` | | `int` | `getTotalPaddingStart()` | | `int` | `getTotalPaddingTop()` | | `final TransformationMethod` | `getTransformationMethod()` | | `Typeface` | `getTypeface()` | | `URLSpan[]` | `getUrls()` | | `boolean` | `getUseBoundsForWidth()` | | `boolean` | `hasOverlappingRendering()` | | `boolean` | `hasSelection()` | | `void` | `invalidateDrawable(Drawable drawable)` | | `boolean` | `isAllCaps()` | | `boolean` | `isAutoHandwritingEnabled()` | | `boolean` | `isCursorVisible()` | | `boolean` | `isElegantTextHeight()` | | `boolean` | `isFallbackLineSpacing()` | | `final boolean` | `isHorizontallyScrollable()` | | `boolean` | `isInputMethodTarget()` | | `boolean` | `isLocalePreferredLineHeightForMinimumUsed()` | | `boolean` | `isPaddingOffsetRequired()` | | `boolean` | `isSingleLine()` | | `boolean` | `isSuggestionsEnabled()` | | `boolean` | `isTextSelectable()` | | `int` | `length()` | | `boolean` | `moveCursorToVisibleOffset()` | | `void` | `onAttachedToWindow()` | | `void` | `onBeginBatchEdit()` | | `boolean` | `onCheckIsTextEditor()` | | `void` | `onCommitCompletion(CompletionInfo text)` | | `void` | `onCommitCorrection(CorrectionInfo info)` | | `void` | `onConfigurationChanged(Configuration newConfig)` | | `void` | `onCreateContextMenu(ContextMenu menu)` | | `InputConnection` | `onCreateInputConnection(EditorInfo outAttrs)` | | `void` | `onCreateViewTranslationRequest(     int[] supportedFormats,     Consumer<ViewTranslationRequest> requestsCollector )` | | `boolean` | `onDragEvent(DragEvent event)` | | `void` | `onEditorAction(int actionCode)` | | `void` | `onEndBatchEdit()` | | `void` | `onFocusChanged(     boolean focused,     int direction,     Rect previouslyFocusedRect )` | | `boolean` | `onGenericMotionEvent(MotionEvent event)` | | `boolean` | `onKeyDown(int keyCode, KeyEvent event)` | | `boolean` | `onKeyMultiple(int keyCode, int repeatCount, KeyEvent event)` | | `boolean` | `onKeyPreIme(int keyCode, KeyEvent event)` | | `boolean` | `onKeyShortcut(int keyCode, KeyEvent event)` | | `boolean` | `onKeyUp(int keyCode, KeyEvent event)` | | `boolean` | `onPreDraw()` | | `boolean` | `onPrivateIMECommand(String action, Bundle data)` | | `ContentInfo` | `onReceiveContent(ContentInfo payload)` | | `void` | `onRtlPropertiesChanged(int layoutDirection)` | | `void` | `onScreenStateChanged(int screenState)` | | `void` | `onScrollChanged(int horiz, int vert, int oldHoriz, int oldVert)` | | `void` | `onSelectionChanged(int selStart, int selEnd)` | | `void` | `onTextChanged(     CharSequence text,     int start,     int lengthBefore,     int lengthAfter )` | | `boolean` | `onTextContextMenuItem(int id)` | | `boolean` | `onTrackballEvent(MotionEvent event)` | | `void` | `onVisibilityAggregated(boolean isVisible)` | | `void` | `onVisibilityChanged(View changedView, int visibility)` | | `void` | `onWindowFocusChanged(boolean hasWindowFocus)` | | `boolean` | `performLongClick()` | | `void` | `removeTextChangedListener(TextWatcher watcher)` | | `void` | `sendAccessibilityEventUnchecked(AccessibilityEvent event)` | | `final void` | `setAutoLinkMask(int mask)` | | `void` | `setAutoSizeTextTypeUniformWithConfiguration(     int autoSizeMinTextSize,     int autoSizeMaxTextSize,     int autoSizeStepGranularity,     int unit )` | | `void` | `setAutoSizeTextTypeUniformWithPresetSizes(int[] presetSizes, int unit)` | | `void` | `setAutoSizeTextTypeWithDefaults(int autoSizeTextType)` | | `void` | `setBreakStrategy(int breakStrategy)` | | `void` | `setCompoundDrawablePadding(int pad)` | | `void` | `setCompoundDrawableTintBlendMode(BlendMode blendMode)` | | `void` | `setCompoundDrawableTintList(ColorStateList tint)` | | `void` | `setCompoundDrawableTintMode(PorterDuff.Mode tintMode)` | | `void` | `setCompoundDrawables(     Drawable left,     Drawable top,     Drawable right,     Drawable bottom )` | | `void` | `setCompoundDrawablesRelative(     Drawable start,     Drawable top,     Drawable end,     Drawable bottom )` | | `void` | `setCompoundDrawablesRelativeWithIntrinsicBounds(     Drawable start,     Drawable top,     Drawable end,     Drawable bottom )` | | `void` | `setCompoundDrawablesWithIntrinsicBounds(     Drawable left,     Drawable top,     Drawable right,     Drawable bottom )` | | `void` | `setCursorVisible(boolean visible)` | | `void` | `setCustomInsertionActionModeCallback(     ActionMode.Callback actionModeCallback )` | | `final void` | `setEditableFactory(Editable.Factory factory)` | | `void` | `setElegantTextHeight(boolean elegant)` | | `void` | `setEllipsize(TextUtils.TruncateAt where)` | | `void` | `setEms(int ems)` | | `void` | `setEnabled(boolean enabled)` | | `void` | `setError(CharSequence error)` | | `void` | `setExtractedText(ExtractedText text)` | | `void` | `setFallbackLineSpacing(boolean enabled)` | | `void` | `setFirstBaselineToTopHeight(int firstBaselineToTopHeight)` | | `void` | `setFocusedSearchResultHighlightColor(int color)` | | `void` | `setFocusedSearchResultIndex(int index)` | | `void` | `setFontFeatureSettings(String fontFeatureSettings)` | | `boolean` | `setFontVariationSettings(String fontVariationSettings)` | | `boolean` | `setFrame(int l, int t, int r, int b)` | | `void` | `setFreezesText(boolean freezesText)` | | `void` | `setGravity(int gravity)` | | `void` | `setHeight(int pixels)` | | `void` | `setHighlightColor(int color)` | | `void` | `setHighlights(Highlights highlights)` | | `final void` | `setHint(int resid)` | | `final void` | `setHintTextColor(ColorStateList colors)` | | `void` | `setHorizontallyScrolling(boolean whether)` | | `void` | `setHyphenationFrequency(int hyphenationFrequency)` | | `void` | `setImeActionLabel(CharSequence label, int actionId)` | | `void` | `setImeHintLocales(LocaleList hintLocales)` | | `void` | `setImeOptions(int imeOptions)` | | `void` | `setIncludeFontPadding(boolean includepad)` | | `void` | `setInputExtras(int xmlResId)` | | `void` | `setInputType(int type)` | | `void` | `setJustificationMode(int justificationMode)` | | `void` | `setKeyListener(KeyListener input)` | | `void` | `setLastBaselineToBottomHeight(int lastBaselineToBottomHeight)` | | `void` | `setLetterSpacing(float letterSpacing)` | | `void` | `setLineBreakStyle(int lineBreakStyle)` | | `void` | `setLineBreakWordStyle(int lineBreakWordStyle)` | | `void` | `setLineHeight(int lineHeight)` | | `void` | `setLineSpacing(float add, float mult)` | | `void` | `setLines(int lines)` | | `final void` | `setLinkTextColor(ColorStateList colors)` | | `final void` | `setLinksClickable(boolean whether)` | | `void` | `setLocalePreferredLineHeightForMinimumUsed(boolean flag)` | | `void` | `setMarqueeRepeatLimit(int marqueeLimit)` | | `void` | `setMaxEms(int maxEms)` | | `void` | `setMaxHeight(int maxPixels)` | | `void` | `setMaxLines(int maxLines)` | | `void` | `setMaxWidth(int maxPixels)` | | `void` | `setMinEms(int minEms)` | | `void` | `setMinHeight(int minPixels)` | | `void` | `setMinLines(int minLines)` | | `void` | `setMinWidth(int minPixels)` | | `void` | `setMinimumFontMetrics(Paint.FontMetrics minimumFontMetrics)` | | `final void` | `setMovementMethod(MovementMethod movement)` | | `void` | `setOnEditorActionListener(TextView.OnEditorActionListener l)` | | `void` | `setPadding(int left, int top, int right, int bottom)` | | `void` | `setPaddingRelative(int start, int top, int end, int bottom)` | | `void` | `setPaintFlags(int flags)` | | `void` | `setPrivateImeOptions(String type)` | | `void` | `setRawInputType(int type)` | | `void` | `setScroller(Scroller s)` | | `void` | `setSearchResultHighlightColor(int color)` | | `void` | `setSearchResultHighlights(int[] ranges)` | | `void` | `setSelectAllOnFocus(boolean selectAllOnFocus)` | | `void` | `setSelected(boolean selected)` | | `void` | `setShadowLayer(float radius, float dx, float dy, int color)` | | `void` | `setShiftDrawingOffsetForStartOverhang(     boolean shiftDrawingOffsetForStartOverhang )` | | `final void` | `setShowSoftInputOnFocus(boolean show)` | | `void` | `setSingleLine()` | | `final void` | `setSpannableFactory(Spannable.Factory factory)` | | `final void` | `setText(char[] text, int start, int len)` | | `void` | `setTextAppearance(Context context, int resId)`  **This method is deprecated.** | | `void` | `setTextClassifier(TextClassifier textClassifier)` | | `void` | `setTextColor(ColorStateList colors)` | | `void` | `setTextCursorDrawable(Drawable textCursorDrawable)` | | `void` | `setTextIsSelectable(boolean selectable)` | | `final void` | `setTextKeepState(CharSequence text)` | | `void` | `setTextLocale(Locale locale)` | | `void` | `setTextLocales(LocaleList locales)` | | `void` | `setTextMetricsParams(PrecomputedText.Params params)` | | `void` | `setTextScaleX(float size)` | | `void` | `setTextSelectHandle(Drawable textSelectHandle)` | | `void` | `setTextSelectHandleLeft(Drawable textSelectHandleLeft)` | | `void` | `setTextSelectHandleRight(Drawable textSelectHandleRight)` | | `void` | `setTextSize(float size)` | | `final void` | `setTransformationMethod(TransformationMethod method)` | | `void` | `setTypeface(Typeface tf)` | | `void` | `setUseBoundsForWidth(boolean useBoundsForWidth)` | | `void` | `setWidth(int pixels)` | | `boolean` | `showContextMenu()` | |
| From [android.view.View](https://developer.android.com/reference/android/view/View.html) |  |  | | --- | --- | | `void` | `addChildrenForAccessibility(ArrayList<View> outChildren)` | | `void` | `addFocusables(ArrayList<View> views, int direction)` | | `void` | `addKeyboardNavigationClusters(Collection<View> views, int direction)` | | `void` | `addOnAttachStateChangeListener(     View.OnAttachStateChangeListener listener )` | | `void` | `addOnLayoutChangeListener(View.OnLayoutChangeListener listener)` | | `void` | `addOnUnhandledKeyEventListener(     View.OnUnhandledKeyEventListener listener )` | | `void` | `addTouchables(ArrayList<View> views)` | | `ViewPropertyAnimator` | `animate()` | | `void` | `announceForAccessibility(CharSequence text)`  **This method is deprecated.** | | `boolean` | `awakenScrollBars()` | | `void` | `bringToFront()` | | `void` | `buildDrawingCache()`  **This method is deprecated.** | | `void` | `buildLayer()` | | `boolean` | `callOnClick()` | | `boolean` | `canResolveLayoutDirection()` | | `boolean` | `canResolveTextAlignment()` | | `boolean` | `canResolveTextDirection()` | | `boolean` | `canScrollHorizontally(int direction)` | | `boolean` | `canScrollVertically(int direction)` | | `final void` | `cancelDragAndDrop()` | | `final void` | `cancelPendingInputEvents()` | | `boolean` | `checkInputConnectionProxy(View view)` | | `void` | `clearAnimation()` | | `void` | `clearFocus()` | | `void` | `clearPendingCredentialRequest()` | | `void` | `clearViewTranslationCallback()` | | `static int` | `combineMeasuredStates(int curState, int newState)` | | `int` | `computeHorizontalScrollExtent()` | | `int` | `computeHorizontalScrollOffset()` | | `WindowInsets` | `computeSystemWindowInsets(WindowInsets in, Rect outLocalInsets)` | | `int` | `computeVerticalScrollOffset()` | | `AccessibilityNodeInfo` | `createAccessibilityNodeInfo()` | | `void` | `createContextMenu(ContextMenu menu)` | | `void` | `destroyDrawingCache()`  **This method is deprecated.** | | `WindowInsets` | `dispatchApplyWindowInsets(WindowInsets insets)` | | `boolean` | `dispatchCapturedPointerEvent(MotionEvent event)` | | `void` | `dispatchConfigurationChanged(Configuration newConfig)` | | `void` | `dispatchCreateViewTranslationRequest(     Map<AutofillId, long[]> viewIds,     int[] supportedFormats,     TranslationCapability capability,     List<ViewTranslationRequest> requests )` | | `void` | `dispatchDisplayHint(int hint)` | | `boolean` | `dispatchDragEvent(DragEvent event)` | | `void` | `dispatchDraw(Canvas canvas)` | | `void` | `dispatchDrawableHotspotChanged(float x, float y)` | | `void` | `dispatchFinishTemporaryDetach()` | | `boolean` | `dispatchGenericFocusedEvent(MotionEvent event)` | | `boolean` | `dispatchGenericMotionEvent(MotionEvent event)` | | `boolean` | `dispatchGenericPointerEvent(MotionEvent event)` | | `boolean` | `dispatchHoverEvent(MotionEvent event)` | | `boolean` | `dispatchKeyEvent(KeyEvent event)` | | `boolean` | `dispatchKeyEventPreIme(KeyEvent event)` | | `boolean` | `dispatchKeyShortcutEvent(KeyEvent event)` | | `boolean` | `dispatchNestedFling(float velocityX, float velocityY, boolean consumed)` | | `boolean` | `dispatchNestedPreFling(float velocityX, float velocityY)` | | `boolean` | `dispatchNestedPrePerformAccessibilityAction(     int action,     Bundle arguments )` | | `boolean` | `dispatchNestedPreScroll(     int dx,     int dy,     int[] consumed,     int[] offsetInWindow )` | | `boolean` | `dispatchNestedScroll(     int dxConsumed,     int dyConsumed,     int dxUnconsumed,     int dyUnconsumed,     int[] offsetInWindow )` | | `void` | `dispatchPointerCaptureChanged(boolean hasCapture)` | | `boolean` | `dispatchPopulateAccessibilityEvent(AccessibilityEvent event)` | | `void` | `dispatchProvideAutofillStructure(ViewStructure structure, int flags)` | | `void` | `dispatchProvideStructure(ViewStructure structure)` | | `void` | `dispatchRestoreInstanceState(SparseArray<Parcelable> container)` | | `void` | `dispatchSaveInstanceState(SparseArray<Parcelable> container)` | | `void` | `dispatchScrollCaptureSearch(     Rect localVisibleRect,     Point windowOffset,     Consumer<ScrollCaptureTarget> targets )` | | `void` | `dispatchSetActivated(boolean activated)` | | `void` | `dispatchSetPressed(boolean pressed)` | | `void` | `dispatchSetSelected(boolean selected)` | | `void` | `dispatchStartTemporaryDetach()` | | `void` | `dispatchSystemUiVisibilityChanged(int visibility)`  **This method is deprecated.** | | `boolean` | `dispatchTouchEvent(MotionEvent event)` | | `boolean` | `dispatchTrackballEvent(MotionEvent event)` | | `boolean` | `dispatchUnhandledMove(View focused, int direction)` | | `void` | `dispatchVisibilityChanged(View changedView, int visibility)` | | `void` | `dispatchWindowFocusChanged(boolean hasFocus)` | | `void` | `dispatchWindowInsetsAnimationEnd(WindowInsetsAnimation animation)` | | `void` | `dispatchWindowInsetsAnimationPrepare(WindowInsetsAnimation animation)` | | `WindowInsets` | `dispatchWindowInsetsAnimationProgress(     WindowInsets insets,     List<WindowInsetsAnimation> runningAnimations )` | | `WindowInsetsAnimation.Bounds` | `dispatchWindowInsetsAnimationStart(     WindowInsetsAnimation animation,     WindowInsetsAnimation.Bounds bounds )` | | `void` | `dispatchWindowSystemUiVisiblityChanged(int visible)`  **This method is deprecated.** | | `void` | `dispatchWindowVisibilityChanged(int visibility)` | | `View` | `findFocus()` | | `final OnBackInvokedDispatcher` | `findOnBackInvokedDispatcher()` | | `final T` | `<T extends View> findViewById(int id)` | | `final T` | `<T extends View> findViewWithTag(Object tag)` | | `boolean` | `fitSystemWindows(Rect insets)`  **This method is deprecated.** | | `View` | `focusSearch(int direction)` | | `void` | `forceHasOverlappingRendering(boolean hasOverlappingRendering)` | | `void` | `forceLayout()` | | `boolean` | `gatherTransparentRegion(Region region)` | | `void` | `generateDisplayHash(     String hashAlgorithm,     Rect bounds,     Executor executor,     DisplayHashResultCallback callback )` | | `static int` | `generateViewId()` | | `View.AccessibilityDelegate` | `getAccessibilityDelegate()` | | `int` | `getAccessibilityLiveRegion()` | | `AccessibilityNodeProvider` | `getAccessibilityNodeProvider()` | | `CharSequence` | `getAccessibilityPaneTitle()` | | `int` | `getAccessibilityTraversalAfter()` | | `int` | `getAccessibilityTraversalBefore()` | | `String` | `getAllowedHandwritingDelegatePackageName()` | | `String` | `getAllowedHandwritingDelegatorPackageName()` | | `float` | `getAlpha()` | | `Animation` | `getAnimation()` | | `Matrix` | `getAnimationMatrix()` | | `IBinder` | `getApplicationWindowToken()` | | `int[]` | `getAttributeResolutionStack(int attribute)` | | `Map<Integer, Integer>` | `getAttributeSourceResourceMap()` | | `final AutofillId` | `getAutofillId()` | | `Drawable` | `getBackground()` | | `BlendMode` | `getBackgroundTintBlendMode()` | | `ColorStateList` | `getBackgroundTintList()` | | `PorterDuff.Mode` | `getBackgroundTintMode()` | | `final int` | `getBottom()` | | `float` | `getBottomFadingEdgeStrength()` | | `float` | `getCameraDistance()` | | `Rect` | `getClipBounds()` | | `boolean` | `getClipBounds(Rect outRect)` | | `final boolean` | `getClipToOutline()` | | `final ContentCaptureSession` | `getContentCaptureSession()` | | `CharSequence` | `getContentDescription()` | | `final int` | `getContentSensitivity()` | | `final Context` | `getContext()` | | `ContextMenu.ContextMenuInfo` | `getContextMenuInfo()` | | `final boolean` | `getDefaultFocusHighlightEnabled()` | | `static int` | `getDefaultSize(int size, int measureSpec)` | | `Display` | `getDisplay()` | | `final int[]` | `getDrawableState()` | | `Bitmap` | `getDrawingCache()`  **This method is deprecated.** | | `int` | `getDrawingCacheBackgroundColor()`  **This method is deprecated.** | | `int` | `getDrawingCacheQuality()`  **This method is deprecated.** | | `void` | `getDrawingRect(Rect outRect)` | | `long` | `getDrawingTime()` | | `float` | `getElevation()` | | `int` | `getExplicitStyle()` | | `boolean` | `getFilterTouchesWhenObscured()` | | `boolean` | `getFitsSystemWindows()` | | `int` | `getFocusable()` | | `ArrayList<View>` | `getFocusables(int direction)` | | `Drawable` | `getForeground()` | | `int` | `getForegroundGravity()` | | `BlendMode` | `getForegroundTintBlendMode()` | | `ColorStateList` | `getForegroundTintList()` | | `PorterDuff.Mode` | `getForegroundTintMode()` | | `float` | `getFrameContentVelocity()` | | `final boolean` | `getGlobalVisibleRect(Rect r)` | | `Handler` | `getHandler()` | | `float` | `getHandwritingBoundsOffsetBottom()` | | `float` | `getHandwritingBoundsOffsetLeft()` | | `float` | `getHandwritingBoundsOffsetRight()` | | `float` | `getHandwritingBoundsOffsetTop()` | | `int` | `getHandwritingDelegateFlags()` | | `Runnable` | `getHandwritingDelegatorCallback()` | | `final boolean` | `getHasOverlappingRendering()` | | `final int` | `getHeight()` | | `void` | `getHitRect(Rect outRect)` | | `int` | `getHorizontalFadingEdgeLength()` | | `int` | `getHorizontalScrollbarHeight()` | | `Drawable` | `getHorizontalScrollbarThumbDrawable()` | | `Drawable` | `getHorizontalScrollbarTrackDrawable()` | | `int` | `getId()` | | `int` | `getImportantForAccessibility()` | | `int` | `getImportantForAutofill()` | | `int` | `getImportantForContentCapture()` | | `boolean` | `getKeepScreenOn()` | | `KeyEvent.DispatcherState` | `getKeyDispatcherState()` | | `int` | `getLabelFor()` | | `int` | `getLayerType()` | | `int` | `getLayoutDirection()` | | `ViewGroup.LayoutParams` | `getLayoutParams()` | | `final int` | `getLeft()` | | `final boolean` | `getLocalVisibleRect(Rect r)` | | `void` | `getLocationInSurface(int[] location)` | | `void` | `getLocationInWindow(int[] outLocation)` | | `void` | `getLocationOnScreen(int[] outLocation)` | | `Matrix` | `getMatrix()` | | `final int` | `getMeasuredHeight()` | | `final int` | `getMeasuredHeightAndState()` | | `final int` | `getMeasuredState()` | | `final int` | `getMeasuredWidth()` | | `final int` | `getMeasuredWidthAndState()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `int` | `getNextClusterForwardId()` | | `int` | `getNextFocusDownId()` | | `int` | `getNextFocusForwardId()` | | `int` | `getNextFocusLeftId()` | | `int` | `getNextFocusRightId()` | | `int` | `getNextFocusUpId()` | | `View.OnFocusChangeListener` | `getOnFocusChangeListener()` | | `int` | `getOutlineAmbientShadowColor()` | | `ViewOutlineProvider` | `getOutlineProvider()` | | `int` | `getOutlineSpotShadowColor()` | | `int` | `getOverScrollMode()` | | `ViewOverlay` | `getOverlay()` | | `int` | `getPaddingBottom()` | | `int` | `getPaddingEnd()` | | `int` | `getPaddingLeft()` | | `int` | `getPaddingRight()` | | `int` | `getPaddingStart()` | | `int` | `getPaddingTop()` | | `final ViewParent` | `getParent()` | | `ViewParent` | `getParentForAccessibility()` | | `final OutcomeReceiver<GetCredentialResponse, GetCredentialException>` | `getPendingCredentialCallback()` | | `final GetCredentialRequest` | `getPendingCredentialRequest()` | | `float` | `getPivotX()` | | `float` | `getPivotY()` | | `PointerIcon` | `getPointerIcon()` | | `final List<Rect>` | `getPreferKeepClearRects()` | | `String[]` | `getReceiveContentMimeTypes()` | | `float` | `getRequestedFrameRate()` | | `Resources` | `getResources()` | | `final boolean` | `getRevealOnFocusHint()` | | `final int` | `getRight()` | | `AttachedSurfaceControl` | `getRootSurfaceControl()` | | `View` | `getRootView()` | | `WindowInsets` | `getRootWindowInsets()` | | `float` | `getRotation()` | | `float` | `getRotationX()` | | `float` | `getRotationY()` | | `float` | `getScaleX()` | | `float` | `getScaleY()` | | `int` | `getScrollBarDefaultDelayBeforeFade()` | | `int` | `getScrollBarFadeDuration()` | | `int` | `getScrollBarSize()` | | `int` | `getScrollBarStyle()` | | `int` | `getScrollCaptureHint()` | | `int` | `getScrollIndicators()` | | `final int` | `getScrollX()` | | `final int` | `getScrollY()` | | `int` | `getSolidColor()` | | `int` | `getSourceLayoutResId()` | | `final CharSequence` | `getStateDescription()` | | `StateListAnimator` | `getStateListAnimator()` | | `int` | `getSuggestedMinimumHeight()` | | `int` | `getSuggestedMinimumWidth()` | | `CharSequence` | `getSupplementalDescription()` | | `List<Rect>` | `getSystemGestureExclusionRects()` | | `int` | `getSystemUiVisibility()`  **This method is deprecated.** | | `Object` | `getTag()` | | `int` | `getTextAlignment()` | | `int` | `getTextDirection()` | | `CharSequence` | `getTooltipText()` | | `final int` | `getTop()` | | `float` | `getTopFadingEdgeStrength()` | | `TouchDelegate` | `getTouchDelegate()` | | `ArrayList<View>` | `getTouchables()` | | `float` | `getTransitionAlpha()` | | `String` | `getTransitionName()` | | `float` | `getTranslationX()` | | `float` | `getTranslationY()` | | `float` | `getTranslationZ()` | | `long` | `getUniqueDrawingId()` | | `int` | `getVerticalFadingEdgeLength()` | | `int` | `getVerticalScrollbarPosition()` | | `Drawable` | `getVerticalScrollbarThumbDrawable()` | | `Drawable` | `getVerticalScrollbarTrackDrawable()` | | `int` | `getVerticalScrollbarWidth()` | | `ViewTranslationResponse` | `getViewTranslationResponse()` | | `ViewTreeObserver` | `getViewTreeObserver()` | | `int` | `getVisibility()` | | `final int` | `getWidth()` | | `int` | `getWindowAttachCount()` | | `WindowId` | `getWindowId()` | | `WindowInsetsController` | `getWindowInsetsController()` | | `int` | `getWindowSystemUiVisibility()`  **This method is deprecated.** | | `IBinder` | `getWindowToken()` | | `int` | `getWindowVisibility()` | | `void` | `getWindowVisibleDisplayFrame(Rect outRect)` | | `float` | `getX()` | | `float` | `getY()` | | `float` | `getZ()` | | `boolean` | `hasExplicitFocusable()` | | `boolean` | `hasFocus()` | | `boolean` | `hasFocusable()` | | `boolean` | `hasNestedScrollingParent()` | | `boolean` | `hasOnClickListeners()` | | `boolean` | `hasOnLongClickListeners()` | | `boolean` | `hasPointerCapture()` | | `boolean` | `hasTransientState()` | | `boolean` | `hasWindowFocus()` | | `static View` | `inflate(Context context, int resource, ViewGroup root)` | | `void` | `invalidate()` | | `void` | `invalidateOutline()` | | `boolean` | `isAccessibilityDataSensitive()` | | `boolean` | `isAccessibilityFocused()` | | `boolean` | `isAccessibilityHeading()` | | `boolean` | `isActivated()` | | `boolean` | `isAttachedToWindow()` | | `boolean` | `isClickable()` | | `final boolean` | `isContentSensitive()` | | `boolean` | `isContextClickable()` | | `boolean` | `isCredential()`  **This method is deprecated.** | | `boolean` | `isDirty()` | | `boolean` | `isDrawingCacheEnabled()`  **This method is deprecated.** | | `boolean` | `isDuplicateParentStateEnabled()` | | `boolean` | `isEnabled()` | | `final boolean` | `isFocusable()` | | `final boolean` | `isFocusableInTouchMode()` | | `boolean` | `isFocused()` | | `final boolean` | `isFocusedByDefault()` | | `boolean` | `isForceDarkAllowed()` | | `boolean` | `isHandwritingDelegate()` | | `boolean` | `isHapticFeedbackEnabled()` | | `boolean` | `isHardwareAccelerated()` | | `boolean` | `isHorizontalFadingEdgeEnabled()` | | `boolean` | `isHorizontalScrollBarEnabled()` | | `boolean` | `isHovered()` | | `boolean` | `isImportantForAccessibility()` | | `final boolean` | `isImportantForAutofill()` | | `final boolean` | `isImportantForContentCapture()` | | `boolean` | `isInEditMode()` | | `boolean` | `isInLayout()` | | `boolean` | `isInTouchMode()` | | `final boolean` | `isKeyboardNavigationCluster()` | | `boolean` | `isLaidOut()` | | `boolean` | `isLayoutDirectionResolved()` | | `boolean` | `isLayoutRequested()` | | `boolean` | `isLongClickable()` | | `boolean` | `isNestedScrollingEnabled()` | | `boolean` | `isOpaque()` | | `boolean` | `isPaddingRelative()` | | `boolean` | `isPivotSet()` | | `final boolean` | `isPreferKeepClear()` | | `boolean` | `isPressed()` | | `boolean` | `isSaveEnabled()` | | `boolean` | `isSaveFromParentEnabled()` | | `boolean` | `isScreenReaderFocusable()` | | `boolean` | `isScrollContainer()` | | `boolean` | `isScrollbarFadingEnabled()` | | `boolean` | `isSelected()` | | `final boolean` | `isShowingLayoutBounds()` | | `boolean` | `isShown()` | | `boolean` | `isSoundEffectsEnabled()` | | `final boolean` | `isTemporarilyDetached()` | | `boolean` | `isTextAlignmentResolved()` | | `boolean` | `isTextDirectionResolved()` | | `boolean` | `isVerticalFadingEdgeEnabled()` | | `boolean` | `isVerticalScrollBarEnabled()` | | `boolean` | `isVisibleToUserForAutofill(int virtualId)` | | `View` | `keyboardNavigationClusterSearch(View currentCluster, int direction)` | | `void` | `layout(int l, int t, int r, int b)` | | `final void` | `measure(int widthMeasureSpec, int heightMeasureSpec)` | | `static int[]` | `mergeDrawableStates(int[] baseState, int[] additionalState)` | | `void` | `offsetLeftAndRight(int offset)` | | `void` | `offsetTopAndBottom(int offset)` | | `void` | `onAnimationEnd()` | | `void` | `onAnimationStart()` | | `WindowInsets` | `onApplyWindowInsets(WindowInsets insets)` | | `void` | `onCancelPendingInputEvents()` | | `boolean` | `onCapturedPointerEvent(MotionEvent event)` | | `void` | `onCreateVirtualViewTranslationRequests(     long[] virtualIds,     int[] supportedFormats,     Consumer<ViewTranslationRequest> requestsCollector )` | | `void` | `onDetachedFromWindow()` | | `void` | `onDisplayHint(int hint)` | | `void` | `onDrawForeground(Canvas canvas)` | | `final void` | `onDrawScrollBars(Canvas canvas)` | | `boolean` | `onFilterTouchEventForSecurity(MotionEvent event)` | | `void` | `onFinishInflate()` | | `void` | `onFinishTemporaryDetach()` | | `void` | `onHoverChanged(boolean hovered)` | | `boolean` | `onHoverEvent(MotionEvent event)` | | `boolean` | `onKeyLongPress(int keyCode, KeyEvent event)` | | `void` | `onOverScrolled(     int scrollX,     int scrollY,     boolean clampedX,     boolean clampedY )` | | `void` | `onPointerCaptureChange(boolean hasCapture)` | | `void` | `onProvideAutofillStructure(ViewStructure structure, int flags)` | | `void` | `onProvideAutofillVirtualStructure(ViewStructure structure, int flags)` | | `void` | `onProvideContentCaptureStructure(ViewStructure structure, int flags)` | | `void` | `onProvideStructure(ViewStructure structure)` | | `void` | `onProvideVirtualStructure(ViewStructure structure)` | | `void` | `onScrollCaptureSearch(     Rect localVisibleRect,     Point windowOffset,     Consumer<ScrollCaptureTarget> targets )` | | `boolean` | `onSetAlpha(int alpha)` | | `void` | `onSizeChanged(int w, int h, int oldw, int oldh)` | | `void` | `onStartTemporaryDetach()` | | `void` | `onViewTranslationResponse(ViewTranslationResponse response)` | | `void` | `onVirtualViewTranslationResponses(     LongSparseArray<ViewTranslationResponse> response )` | | `void` | `onWindowSystemUiVisibilityChanged(int visible)`  **This method is deprecated.** | | `void` | `onWindowVisibilityChanged(int visibility)` | | `boolean` | `overScrollBy(     int deltaX,     int deltaY,     int scrollX,     int scrollY,     int scrollRangeX,     int scrollRangeY,     int maxOverScrollX,     int maxOverScrollY,     boolean isTouchEvent )` | | `boolean` | `performAccessibilityAction(int action, Bundle arguments)` | | `boolean` | `performContextClick()` | | `boolean` | `performHapticFeedback(HapticFeedbackRequest request)` | | `ContentInfo` | `performReceiveContent(ContentInfo payload)` | | `void` | `playSoundEffect(int soundConstant)` | | `boolean` | `post(Runnable action)` | | `boolean` | `postDelayed(Runnable action, long delayMillis)` | | `void` | `postInvalidate()` | | `void` | `postInvalidateDelayed(long delayMilliseconds)` | | `void` | `postInvalidateOnAnimation()` | | `void` | `postOnAnimation(Runnable action)` | | `void` | `postOnAnimationDelayed(Runnable action, long delayMillis)` | | `void` | `refreshDrawableState()` | | `static void` | `registerCalledFromWrongThreadListener(     View.CalledFromWrongThreadListener listener )` | | `void` | `releasePointerCapture()` | | `boolean` | `removeCallbacks(Runnable action)` | | `void` | `removeOnAttachStateChangeListener(     View.OnAttachStateChangeListener listener )` | | `void` | `removeOnLayoutChangeListener(View.OnLayoutChangeListener listener)` | | `void` | `removeOnUnhandledKeyEventListener(     View.OnUnhandledKeyEventListener listener )` | | `void` | `reportAppJankStats(AppJankStats appJankStats)` | | `void` | `requestApplyInsets()` | | `void` | `requestFitSystemWindows()`  **This method is deprecated.** | | `final boolean` | `requestFocus()` | | `final boolean` | `requestFocusFromTouch()` | | `void` | `requestLayout()` | | `void` | `requestPointerCapture()` | | `boolean` | `requestRectangleOnScreen(Rect rectangle)` | | `final void` | `requestUnbufferedDispatch(MotionEvent event)` | | `final T` | `<T extends View> requireViewById(int id)` | | `void` | `resetPivot()` | | `static int` | `resolveSize(int size, int measureSpec)` | | `static int` | `resolveSizeAndState(int size, int measureSpec, int childMeasuredState)` | | `boolean` | `restoreDefaultFocus()` | | `void` | `restoreHierarchyState(SparseArray<Parcelable> container)` | | `final void` | `saveAttributeDataForStyleable(     Context context,     int[] styleable,     AttributeSet attrs,     TypedArray t,     int defStyleAttr,     int defStyleRes )` | | `void` | `saveHierarchyState(SparseArray<Parcelable> container)` | | `void` | `scheduleDrawable(Drawable who, Runnable what, long when)` | | `void` | `scrollBy(int x, int y)` | | `void` | `scrollTo(int x, int y)` | | `void` | `sendAccessibilityEvent(int eventType)` | | `void` | `setAccessibilityDataSensitive(int accessibilityDataSensitive)` | | `void` | `setAccessibilityDelegate(View.AccessibilityDelegate delegate)` | | `void` | `setAccessibilityHeading(boolean isHeading)` | | `void` | `setAccessibilityLiveRegion(int mode)` | | `void` | `setAccessibilityPaneTitle(CharSequence accessibilityPaneTitle)` | | `void` | `setAccessibilityTraversalAfter(int afterId)` | | `void` | `setAccessibilityTraversalBefore(int beforeId)` | | `void` | `setActivated(boolean activated)` | | `void` | `setAllowClickWhenDisabled(boolean clickableWhenDisabled)` | | `void` | `setAllowedHandwritingDelegatePackage(String allowedPackageName)` | | `void` | `setAllowedHandwritingDelegatorPackage(String allowedPackageName)` | | `void` | `setAlpha(float alpha)` | | `void` | `setAnimation(Animation animation)` | | `void` | `setAnimationMatrix(Matrix matrix)` | | `void` | `setAutoHandwritingEnabled(boolean enabled)` | | `void` | `setAutofillHints(String[] autofillHints)` | | `void` | `setAutofillId(AutofillId id)` | | `void` | `setBackground(Drawable background)` | | `void` | `setBackgroundColor(int color)` | | `void` | `setBackgroundDrawable(Drawable background)`  **This method is deprecated.** | | `void` | `setBackgroundResource(int resid)` | | `void` | `setBackgroundTintBlendMode(BlendMode blendMode)` | | `void` | `setBackgroundTintList(ColorStateList tint)` | | `void` | `setBackgroundTintMode(PorterDuff.Mode tintMode)` | | `final void` | `setBottom(int bottom)` | | `void` | `setCameraDistance(float distance)` | | `void` | `setClickable(boolean clickable)` | | `void` | `setClipBounds(Rect clipBounds)` | | `void` | `setClipToOutline(boolean clipToOutline)` | | `void` | `setContentCaptureSession(ContentCaptureSession contentCaptureSession)` | | `void` | `setContentDescription(CharSequence contentDescription)` | | `final void` | `setContentSensitivity(int mode)` | | `void` | `setContextClickable(boolean contextClickable)` | | `void` | `setDefaultFocusHighlightEnabled(boolean defaultFocusHighlightEnabled)` | | `void` | `setDrawingCacheBackgroundColor(int color)`  **This method is deprecated.** | | `void` | `setDrawingCacheEnabled(boolean enabled)`  **This method is deprecated.** | | `void` | `setDrawingCacheQuality(int quality)`  **This method is deprecated.** | | `void` | `setDuplicateParentStateEnabled(boolean enabled)` | | `void` | `setElevation(float elevation)` | | `void` | `setFadingEdgeLength(int length)` | | `void` | `setFilterTouchesWhenObscured(boolean enabled)` | | `void` | `setFitsSystemWindows(boolean fitSystemWindows)` | | `void` | `setFocusable(boolean focusable)` | | `void` | `setFocusableInTouchMode(boolean focusableInTouchMode)` | | `void` | `setFocusedByDefault(boolean isFocusedByDefault)` | | `void` | `setForceDarkAllowed(boolean allow)` | | `void` | `setForeground(Drawable foreground)` | | `void` | `setForegroundGravity(int gravity)` | | `void` | `setForegroundTintBlendMode(BlendMode blendMode)` | | `void` | `setForegroundTintList(ColorStateList tint)` | | `void` | `setForegroundTintMode(PorterDuff.Mode tintMode)` | | `void` | `setFrameContentVelocity(float pixelsPerSecond)` | | `void` | `setHandwritingBoundsOffsets(     float offsetLeft,     float offsetTop,     float offsetRight,     float offsetBottom )` | | `void` | `setHandwritingDelegateFlags(int flags)` | | `void` | `setHandwritingDelegatorCallback(Runnable callback)` | | `void` | `setHapticFeedbackEnabled(boolean hapticFeedbackEnabled)` | | `void` | `setHasTransientState(boolean hasTransientState)` | | `void` | `setHorizontalFadingEdgeEnabled(boolean horizontalFadingEdgeEnabled)` | | `void` | `setHorizontalScrollBarEnabled(boolean horizontalScrollBarEnabled)` | | `void` | `setHorizontalScrollbarThumbDrawable(Drawable drawable)` | | `void` | `setHorizontalScrollbarTrackDrawable(Drawable drawable)` | | `void` | `setHovered(boolean hovered)` | | `void` | `setId(int id)` | | `void` | `setImportantForAccessibility(int mode)` | | `void` | `setImportantForAutofill(int mode)` | | `void` | `setImportantForContentCapture(int mode)` | | `void` | `setIsCredential(boolean isCredential)`  **This method is deprecated.** | | `void` | `setIsHandwritingDelegate(boolean isHandwritingDelegate)` | | `void` | `setKeepScreenOn(boolean keepScreenOn)` | | `void` | `setKeyboardNavigationCluster(boolean isCluster)` | | `void` | `setLabelFor(int id)` | | `void` | `setLayerPaint(Paint paint)` | | `void` | `setLayerType(int layerType, Paint paint)` | | `void` | `setLayoutDirection(int layoutDirection)` | | `void` | `setLayoutParams(ViewGroup.LayoutParams params)` | | `final void` | `setLeft(int left)` | | `final void` | `setLeftTopRightBottom(int left, int top, int right, int bottom)` | | `void` | `setLongClickable(boolean longClickable)` | | `final void` | `setMeasuredDimension(int measuredWidth, int measuredHeight)` | | `void` | `setMinimumHeight(int minHeight)` | | `void` | `setMinimumWidth(int minWidth)` | | `void` | `setNestedScrollingEnabled(boolean enabled)` | | `void` | `setNextClusterForwardId(int nextClusterForwardId)` | | `void` | `setNextFocusDownId(int nextFocusDownId)` | | `void` | `setNextFocusForwardId(int nextFocusForwardId)` | | `void` | `setNextFocusLeftId(int nextFocusLeftId)` | | `void` | `setNextFocusRightId(int nextFocusRightId)` | | `void` | `setNextFocusUpId(int nextFocusUpId)` | | `void` | `setOnApplyWindowInsetsListener(     View.OnApplyWindowInsetsListener listener )` | | `void` | `setOnCapturedPointerListener(View.OnCapturedPointerListener l)` | | `void` | `setOnClickListener(View.OnClickListener l)` | | `void` | `setOnContextClickListener(View.OnContextClickListener l)` | | `void` | `setOnCreateContextMenuListener(View.OnCreateContextMenuListener l)` | | `void` | `setOnDragListener(View.OnDragListener l)` | | `void` | `setOnFocusChangeListener(View.OnFocusChangeListener l)` | | `void` | `setOnGenericMotionListener(View.OnGenericMotionListener l)` | | `void` | `setOnHoverListener(View.OnHoverListener l)` | | `void` | `setOnKeyListener(View.OnKeyListener l)` | | `void` | `setOnLongClickListener(View.OnLongClickListener l)` | | `void` | `setOnReceiveContentListener(     String[] mimeTypes,     OnReceiveContentListener listener )` | | `void` | `setOnScrollChangeListener(View.OnScrollChangeListener l)` | | `void` | `setOnSystemUiVisibilityChangeListener(     View.OnSystemUiVisibilityChangeListener l )`  **This method is deprecated.** | | `void` | `setOnTouchListener(View.OnTouchListener l)` | | `void` | `setOutlineAmbientShadowColor(int color)` | | `void` | `setOutlineProvider(ViewOutlineProvider provider)` | | `void` | `setOutlineSpotShadowColor(int color)` | | `void` | `setOverScrollMode(int overScrollMode)` | | `void` | `setPendingCredentialRequest(     GetCredentialRequest request,     OutcomeReceiver<GetCredentialResponse, GetCredentialException> callback )` | | `void` | `setPivotX(float pivotX)` | | `void` | `setPivotY(float pivotY)` | | `void` | `setPointerIcon(PointerIcon pointerIcon)` | | `final void` | `setPreferKeepClear(boolean preferKeepClear)` | | `final void` | `setPreferKeepClearRects(List<Rect> rects)` | | `void` | `setPressed(boolean pressed)` | | `void` | `setRenderEffect(RenderEffect renderEffect)` | | `void` | `setRequestedFrameRate(float frameRate)` | | `final void` | `setRevealOnFocusHint(boolean revealOnFocus)` | | `final void` | `setRight(int right)` | | `void` | `setRotation(float rotation)` | | `void` | `setRotationX(float rotationX)` | | `void` | `setRotationY(float rotationY)` | | `void` | `setSaveEnabled(boolean enabled)` | | `void` | `setSaveFromParentEnabled(boolean enabled)` | | `void` | `setScaleX(float scaleX)` | | `void` | `setScaleY(float scaleY)` | | `void` | `setScreenReaderFocusable(boolean screenReaderFocusable)` | | `void` | `setScrollBarDefaultDelayBeforeFade(     int scrollBarDefaultDelayBeforeFade )` | | `void` | `setScrollBarFadeDuration(int scrollBarFadeDuration)` | | `void` | `setScrollBarSize(int scrollBarSize)` | | `void` | `setScrollBarStyle(int style)` | | `final void` | `setScrollCaptureCallback(ScrollCaptureCallback callback)` | | `void` | `setScrollCaptureHint(int hint)` | | `void` | `setScrollContainer(boolean isScrollContainer)` | | `void` | `setScrollIndicators(int indicators)` | | `void` | `setScrollX(int value)` | | `void` | `setScrollY(int value)` | | `void` | `setScrollbarFadingEnabled(boolean fadeScrollbars)` | | `void` | `setSoundEffectsEnabled(boolean soundEffectsEnabled)` | | `void` | `setStateListAnimator(StateListAnimator stateListAnimator)` | | `void` | `setSupplementalDescription(CharSequence supplementalDescription)` | | `void` | `setSystemGestureExclusionRects(List<Rect> rects)` | | `void` | `setSystemUiVisibility(int visibility)`  **This method is deprecated.** | | `void` | `setTag(int key, Object tag)` | | `void` | `setTextAlignment(int textAlignment)` | | `void` | `setTextDirection(int textDirection)` | | `void` | `setTooltipText(CharSequence tooltipText)` | | `final void` | `setTop(int top)` | | `void` | `setTouchDelegate(TouchDelegate delegate)` | | `void` | `setTransitionAlpha(float alpha)` | | `final void` | `setTransitionName(String transitionName)` | | `void` | `setTransitionVisibility(int visibility)` | | `void` | `setTranslationX(float translationX)` | | `void` | `setTranslationY(float translationY)` | | `void` | `setTranslationZ(float translationZ)` | | `void` | `setVerticalFadingEdgeEnabled(boolean verticalFadingEdgeEnabled)` | | `void` | `setVerticalScrollBarEnabled(boolean verticalScrollBarEnabled)` | | `void` | `setVerticalScrollbarPosition(int position)` | | `void` | `setVerticalScrollbarThumbDrawable(Drawable drawable)` | | `void` | `setVerticalScrollbarTrackDrawable(Drawable drawable)` | | `void` | `setViewTranslationCallback(ViewTranslationCallback callback)` | | `void` | `setVisibility(int visibility)` | | `void` | `setWillNotCacheDrawing(boolean willNotCacheDrawing)`  **This method is deprecated.** | | `void` | `setWillNotDraw(boolean willNotDraw)` | | `void` | `setWindowInsetsAnimationCallback(     WindowInsetsAnimation.Callback callback )` | | `void` | `setX(float x)` | | `void` | `setY(float y)` | | `void` | `setZ(float z)` | | `ActionMode` | `startActionMode(ActionMode.Callback callback)` | | `void` | `startAnimation(Animation animation)` | | `final boolean` | `startDrag(     ClipData data,     View.DragShadowBuilder shadowBuilder,     Object myLocalState,     int flags )`  **This method is deprecated.** | | `final boolean` | `startDragAndDrop(     ClipData data,     View.DragShadowBuilder shadowBuilder,     Object myLocalState,     int flags )` | | `boolean` | `startNestedScroll(int axes)` | | `void` | `stopNestedScroll()` | | `String` | `toString()` | | `void` | `transformMatrixToGlobal(Matrix matrix)` | | `void` | `transformMatrixToLocal(Matrix matrix)` | | `static void` | `unregisterCalledFromWrongThreadListener(     View.CalledFromWrongThreadListener listener )` | | `void` | `unscheduleDrawable(Drawable who)` | | `final void` | `updateDragShadow(View.DragShadowBuilder shadowBuilder)` | | `boolean` | `willNotCacheDrawing()`  **This method is deprecated.** | | `boolean` | `willNotDraw()` | |

## Public constructors

### SwitchCompat

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public SwitchCompat(@NonNull Context context)
```

Construct a new Switch with default styling.

| Parameters |
| --- |
| `@NonNull Context context` | The Context that will determine this widget's theming. |

### SwitchCompat

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public SwitchCompat(@NonNull Context context, @Nullable AttributeSet attrs)
```

Construct a new Switch with default styling, overriding specific style attributes as requested.

| Parameters |
| --- |
| `@NonNull Context context` | The Context that will determine this widget's theming. |
| `@Nullable AttributeSet attrs` | Specification of attributes that should deviate from default styling. |

### SwitchCompat

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public SwitchCompat(  
    @NonNull Context context,  
    @Nullable AttributeSet attrs,  
    int defStyleAttr  
)
```

Construct a new Switch with a default style determined by the given theme attribute, overriding specific style attributes as requested.

| Parameters |
| --- |
| `@NonNull Context context` | The Context that will determine this widget's theming. |
| `@Nullable AttributeSet attrs` | Specification of attributes that should deviate from the default styling. |
| `int defStyleAttr` | An attribute in the current theme that contains a reference to a style resource that supplies default values for the view. Can be 0 to not look for defaults. |

## Public methods

### draw

```
public void draw(@NonNull Canvas c)
```

### drawableHotspotChanged

```
public void drawableHotspotChanged(float x, float y)
```

### getCompoundPaddingLeft

```
public int getCompoundPaddingLeft()
```

### getCompoundPaddingRight

```
public int getCompoundPaddingRight()
```

### getCustomSelectionActionModeCallback

```
public @Nullable ActionMode.Callback getCustomSelectionActionModeCallback()
```

### getShowText

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:showText")  
public boolean getShowText()
```

Indicates whether the on/off text should be displayed.

| Returns |
| --- |
| `boolean` | `true` if the on/off text should be displayed, otherwise `false` |

| See also |
| --- |
| `showText` |  |

### getSplitTrack

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:splitTrack")  
public boolean getSplitTrack()
```

Returns whether the track should be split by the thumb.

| See also |
| --- |
| `splitTrack` |  |

### getSwitchMinWidth

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:switchMinWidth")  
public int getSwitchMinWidth()
```

Get the minimum width of the switch in pixels. The switch's width will be the maximum of this value and its measured width as determined by the switch drawables and text used.

| Returns |
| --- |
| `int` | Minimum width of the switch in pixels |

| See also |
| --- |
| `switchMinWidth` |  |

### getSwitchPadding

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:switchPadding")  
public int getSwitchPadding()
```

Get the amount of horizontal padding between the switch and the associated text.

| Returns |
| --- |
| `int` | Amount of padding in pixels |

| See also |
| --- |
| `switchPadding` |  |

### getTextOff

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "android:textOff")  
public CharSequence getTextOff()
```

Returns the text displayed when the button is not in the checked state.

| See also |
| --- |
| `textOff` |  |

### getTextOn

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "android:textOn")  
public CharSequence getTextOn()
```

Returns the text displayed when the button is in the checked state.

| See also |
| --- |
| `textOn` |  |

### getThumbDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "android:thumb")  
public Drawable getThumbDrawable()
```

Get the drawable used for the switch "thumb" - the piece that the user can physically touch and drag along the track.

| Returns |
| --- |
| `Drawable` | Thumb drawable |

| See also |
| --- |
| `thumb` |  |

### getThumbTextPadding

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:thumbTextPadding")  
public int getThumbTextPadding()
```

Get the horizontal padding around the text drawn on the switch itself.

| Returns |
| --- |
| `int` | Horizontal padding for switch thumb text in pixels |

| See also |
| --- |
| `thumbTextPadding` |  |

### getThumbTintList

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:thumbTint")  
public @Nullable ColorStateList getThumbTintList()
```

| Returns |
| --- |
| `@Nullable ColorStateList` | the tint applied to the thumb drawable |

| See also |
| --- |
| `setThumbTintList` |  |
| `thumbTint` |  |

### getThumbTintMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:thumbTintMode")  
public @Nullable PorterDuff.Mode getThumbTintMode()
```

| Returns |
| --- |
| `@Nullable PorterDuff.Mode` | the blending mode used to apply the tint to the thumb drawable |

| See also |
| --- |
| `setThumbTintMode` |  |
| `thumbTintMode` |  |

### getTrackDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:track")  
public Drawable getTrackDrawable()
```

Get the drawable used for the track that the switch slides within.

| Returns |
| --- |
| `Drawable` | Track drawable |

| See also |
| --- |
| `track` |  |

### getTrackTintList

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:trackTint")  
public @Nullable ColorStateList getTrackTintList()
```

| Returns |
| --- |
| `@Nullable ColorStateList` | the tint applied to the track drawable |

| See also |
| --- |
| `setTrackTintList` |  |
| `trackTint` |  |

### getTrackTintMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@Attribute(value = "androidx.appcompat:trackTintMode")  
public @Nullable PorterDuff.Mode getTrackTintMode()
```

| Returns |
| --- |
| `@Nullable PorterDuff.Mode` | the blending mode used to apply the tint to the track drawable |

| See also |
| --- |
| `setTrackTintMode` |  |
| `trackTintMode` |  |

### isEmojiCompatEnabled

```
public boolean isEmojiCompatEnabled()
```

| Returns |
| --- |
| `boolean` | the current enabled state, set via `setEmojiCompatEnabled` |

### jumpDrawablesToCurrentState

```
public void jumpDrawablesToCurrentState()
```

### onInitializeAccessibilityEvent

```
public void onInitializeAccessibilityEvent(AccessibilityEvent event)
```

### onInitializeAccessibilityNodeInfo

```
public void onInitializeAccessibilityNodeInfo(AccessibilityNodeInfo info)
```

### onMeasure

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void onMeasure(int widthMeasureSpec, int heightMeasureSpec)
```

### onPopulateAccessibilityEvent

```
public void onPopulateAccessibilityEvent(AccessibilityEvent event)
```

### onTouchEvent

```
public boolean onTouchEvent(MotionEvent ev)
```

### setAllCaps

```
public void setAllCaps(boolean allCaps)
```

### setChecked

```
public void setChecked(boolean checked)
```

### setCustomSelectionActionModeCallback

```
public void setCustomSelectionActionModeCallback(  
    @Nullable ActionMode.Callback actionModeCallback  
)
```

See `setCustomSelectionActionModeCallback`

### setEmojiCompatEnabled

```
public void setEmojiCompatEnabled(boolean enabled)
```

Configure emoji fallback behavior using EmojiCompat. When enabled, this View will attempt to use EmojiCompat to enabled missing emojis. When disabled, this View will not display missing emojis using EmojiCompat. EmojiCompat must be correctly configured on a device for this to have an effect, which will happen by default if a correct downloadable fonts provider is installed on the device. If you manually configure EmojiCompat by calling EmojiCompat init after this View is constructed, you may call this method again to enable EmojiCompat on this text view. For more information about EmojiCompat configuration see the emoji2 module.

| Parameters |
| --- |
| `boolean enabled` | if true, display missing emoji using EmojiCompat, otherwise display missing emoji using a fallback glyph "□" (known as tofu) |

### setFilters

```
public void setFilters(@NonNull InputFilter[] filters)
```

### setShowText

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setShowText(boolean showText)
```

Sets whether the on/off text should be displayed.

| Parameters |
| --- |
| `boolean showText` | `true` to display on/off text |

| See also |
| --- |
| `showText` |  |

### setSplitTrack

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSplitTrack(boolean splitTrack)
```

Specifies whether the track should be split by the thumb. When true, the thumb's optical bounds will be clipped out of the track drawable, then the thumb will be drawn into the resulting gap.

| Parameters |
| --- |
| `boolean splitTrack` | Whether the track should be split by the thumb |

| See also |
| --- |
| `splitTrack` |  |

### setSwitchMinWidth

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSwitchMinWidth(int pixels)
```

Set the minimum width of the switch in pixels. The switch's width will be the maximum of this value and its measured width as determined by the switch drawables and text used.

| Parameters |
| --- |
| `int pixels` | Minimum width of the switch in pixels |

| See also |
| --- |
| `switchMinWidth` |  |

### setSwitchPadding

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSwitchPadding(int pixels)
```

Set the amount of horizontal padding between the switch and the associated text.

| Parameters |
| --- |
| `int pixels` | Amount of padding in pixels |

| See also |
| --- |
| `switchPadding` |  |

### setSwitchTextAppearance

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSwitchTextAppearance(Context context, int resid)
```

Sets the switch text color, size, style, hint color, and highlight color from the specified TextAppearance resource.

| See also |
| --- |
| `switchTextAppearance` |  |

### setSwitchTypeface

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSwitchTypeface(Typeface typeface)
```

Sets the typeface in which the text should be displayed on the switch. Note that not all Typeface families actually have bold and italic variants, so you may need to use `setSwitchTypeface` to get the appearance that you actually want.

### setSwitchTypeface

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSwitchTypeface(Typeface tf, int style)
```

Sets the typeface and style in which the text should be displayed on the switch, and turns on the fake bold and italic bits in the Paint if the Typeface that you provided does not have all the bits in the style that you specified.

### setTextOff

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTextOff(CharSequence textOff)
```

Sets the text displayed when the button is not in the checked state.

| See also |
| --- |
| `textOff` |  |

### setTextOn

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTextOn(CharSequence textOn)
```

Sets the text displayed when the button is in the checked state.

| See also |
| --- |
| `textOn` |  |

### setThumbDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setThumbDrawable(Drawable thumb)
```

Set the drawable used for the switch "thumb" - the piece that the user can physically touch and drag along the track.

| Parameters |
| --- |
| `Drawable thumb` | Thumb drawable |

| See also |
| --- |
| `thumb` |  |

### setThumbResource

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setThumbResource(int resId)
```

Set the drawable used for the switch "thumb" - the piece that the user can physically touch and drag along the track.

| Parameters |
| --- |
| `int resId` | Resource ID of a thumb drawable |

| See also |
| --- |
| `thumb` |  |

### setThumbTextPadding

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setThumbTextPadding(int pixels)
```

Set the horizontal padding around the text drawn on the switch itself.

| Parameters |
| --- |
| `int pixels` | Horizontal padding for switch thumb text in pixels |

| See also |
| --- |
| `thumbTextPadding` |  |

### setThumbTintList

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setThumbTintList(@Nullable ColorStateList tint)
```

Applies a tint to the thumb drawable. Does not modify the current tint mode, which is `SRC_IN` by default.

Subsequent calls to `setThumbDrawable` will automatically mutate the drawable and apply the specified tint and tint mode using `setTintList`.

| Parameters |
| --- |
| `@Nullable ColorStateList tint` | the tint to apply, may be `null` to clear tint |

| See also |
| --- |
| `getThumbTintList` |  |
| `thumbTint` |  |
| `setTintList` |  |

### setThumbTintMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setThumbTintMode(@Nullable PorterDuff.Mode tintMode)
```

Specifies the blending mode used to apply the tint specified by `setThumbTintList`} to the thumb drawable. The default mode is `SRC_IN`.

| Parameters |
| --- |
| `@Nullable PorterDuff.Mode tintMode` | the blending mode used to apply the tint, may be `null` to clear tint |

| See also |
| --- |
| `getThumbTintMode` |  |
| `thumbTintMode` |  |
| `setTintMode` |  |

### setTrackDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTrackDrawable(Drawable track)
```

Set the drawable used for the track that the switch slides within.

| Parameters |
| --- |
| `Drawable track` | Track drawable |

| See also |
| --- |
| `track` |  |

### setTrackResource

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTrackResource(int resId)
```

Set the drawable used for the track that the switch slides within.

| Parameters |
| --- |
| `int resId` | Resource ID of a track drawable |

| See also |
| --- |
| `track` |  |

### setTrackTintList

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTrackTintList(@Nullable ColorStateList tint)
```

Applies a tint to the track drawable. Does not modify the current tint mode, which is `SRC_IN` by default.

Subsequent calls to `setTrackDrawable` will automatically mutate the drawable and apply the specified tint and tint mode using `setTintList`.

| Parameters |
| --- |
| `@Nullable ColorStateList tint` | the tint to apply, may be `null` to clear tint |

| See also |
| --- |
| `getTrackTintList` |  |
| `trackTint` |  |

### setTrackTintMode

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setTrackTintMode(@Nullable PorterDuff.Mode tintMode)
```

Specifies the blending mode used to apply the tint specified by `setTrackTintList` to the track drawable. The default mode is `SRC_IN`.

| Parameters |
| --- |
| `@Nullable PorterDuff.Mode tintMode` | the blending mode used to apply the tint, may be `null` to clear tint |

| See also |
| --- |
| `getTrackTintMode` |  |
| `trackTintMode` |  |

### toggle

```
public void toggle()
```

## Protected methods

### drawableStateChanged

```
protected void drawableStateChanged()
```

### getThumbPosition

Added in [1.5.0](/jetpack/androidx/releases/appcompat#1.5.0)

```
protected final @FloatRange(from = 0.0, to = 1.0) float getThumbPosition()
```

| Returns |
| --- |
| `@FloatRange(from = 0.0, to = 1.0) float` | the current thumb position as a decimal value between 0 (off) and 1 (on). |

### onCreateDrawableState

```
protected int[] onCreateDrawableState(int extraSpace)
```

### onDraw

```
protected void onDraw(Canvas canvas)
```

### onLayout

```
protected void onLayout(boolean changed, int left, int top, int right, int bottom)
```

### setEnforceSwitchWidth

Added in [1.5.0](/jetpack/androidx/releases/appcompat#1.5.0)

```
protected final void setEnforceSwitchWidth(boolean enforceSwitchWidth)
```

Sets `true` to enforce the switch width being at least twice of the thumb width. Otherwise the switch width will be the value set by `setSwitchMinWidth`. The default value is `true`.

### verifyDrawable

```
protected boolean verifyDrawable(@NonNull Drawable who)
```