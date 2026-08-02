--- source: https://developer.android.com/reference/androidx/appcompat/widget/EmojiCompatConfigurationView ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# EmojiCompatConfigurationView

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/EmojiCompatConfigurationView.java+class:androidx.appcompat.widget.EmojiCompatConfigurationView)

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/EmojiCompatConfigurationView "View this page in Kotlin")
|Java

```
public interface EmojiCompatConfigurationView
```

Known direct subclasses

[AppCompatAutoCompleteTextView](/reference/androidx/appcompat/widget/AppCompatAutoCompleteTextView), [AppCompatButton](/reference/androidx/appcompat/widget/AppCompatButton), [AppCompatCheckBox](/reference/androidx/appcompat/widget/AppCompatCheckBox), [AppCompatCheckedTextView](/reference/androidx/appcompat/widget/AppCompatCheckedTextView), [AppCompatEditText](/reference/androidx/appcompat/widget/AppCompatEditText), [AppCompatMultiAutoCompleteTextView](/reference/androidx/appcompat/widget/AppCompatMultiAutoCompleteTextView), [AppCompatRadioButton](/reference/androidx/appcompat/widget/AppCompatRadioButton), [AppCompatTextView](/reference/androidx/appcompat/widget/AppCompatTextView), [AppCompatToggleButton](/reference/androidx/appcompat/widget/AppCompatToggleButton), [SwitchCompat](/reference/androidx/appcompat/widget/SwitchCompat)

|  |  |
| --- | --- |
| `AppCompatAutoCompleteTextView` | A `AutoCompleteTextView` which supports compatible features on older versions of the platform, including: |
| `AppCompatButton` | A `Button` which supports compatible features on older versions of the platform, including: |
| `AppCompatCheckBox` | A `CheckBox` which supports compatible features on older versions of the platform, including: |
| `AppCompatCheckedTextView` | A `CheckedTextView` which supports compatible features on older versions of the platform, including: |
| `AppCompatEditText` | A `EditText` which supports compatible features on older versions of the platform, including: |
| `AppCompatMultiAutoCompleteTextView` | A `MultiAutoCompleteTextView` which supports compatible features on older version of the platform, including: |
| `AppCompatRadioButton` | A `RadioButton` which supports compatible features on older versions of the platform, including: |
| `AppCompatTextView` | A `TextView` which supports compatible features on older versions of the platform, including: |
| `AppCompatToggleButton` | A `ToggleButton` which supports compatible features on older versions of the platform, including: |
| `SwitchCompat` | SwitchCompat is a complete backport of the core `Switch` widget that brings the visuals and functionality of the toggle widget to older versions of the Android platform. |

Known indirect subclasses

[EmojiAppCompatButton](/reference/androidx/emoji/widget/EmojiAppCompatButton), [EmojiAppCompatEditText](/reference/androidx/emoji/widget/EmojiAppCompatEditText), [EmojiAppCompatTextView](/reference/androidx/emoji/widget/EmojiAppCompatTextView), [GuidedActionAppCompatEditText](/reference/androidx/leanback/widget/GuidedActionAppCompatEditText), [MotionButton](/reference/androidx/constraintlayout/utils/widget/MotionButton)

|  |  |
| --- | --- |
| `EmojiAppCompatButton` | AppCompatButton widget enhanced with emoji capability by using `EmojiTextViewHelper`. |
| `EmojiAppCompatEditText` | AppCompatEditText widget enhanced with emoji capability by using `EmojiEditTextHelper`. |
| `EmojiAppCompatTextView` | AppCompatTextView widget enhanced with emoji capability by using `EmojiTextViewHelper`. |
| `GuidedActionAppCompatEditText` | A custom EditText that satisfies the IME key monitoring requirements of GuidedStepFragment. |
| `MotionButton` | A MotionButton is an AppCompatButton that can round its edges. |

---

Interface for Views that expose EmojiCompat configuration.

## Summary

| Public methods |
| --- |
| `abstract boolean` | `isEmojiCompatEnabled()` |
| `abstract void` | `setEmojiCompatEnabled(boolean enabled)`  Configure emoji fallback behavior using EmojiCompat. |

## Public methods

### isEmojiCompatEnabled

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
abstract boolean isEmojiCompatEnabled()
```

| Returns |
| --- |
| `boolean` | the current enabled state, set via `setEmojiCompatEnabled` |

### setEmojiCompatEnabled

Added in [1.4.0](/jetpack/androidx/releases/appcompat#1.4.0)

```
abstract void setEmojiCompatEnabled(boolean enabled)
```

Configure emoji fallback behavior using EmojiCompat. When enabled, this View will attempt to use EmojiCompat to enabled missing emojis. When disabled, this View will not display missing emojis using EmojiCompat. EmojiCompat must be correctly configured on a device for this to have an effect, which will happen by default if a correct downloadable fonts provider is installed on the device. If you manually configure EmojiCompat by calling EmojiCompat init after this View is constructed, you may call this method again to enable EmojiCompat on this text view. For more information about EmojiCompat configuration see the emoji2 module.

| Parameters |
| --- |
| `boolean enabled` | if true, display missing emoji using EmojiCompat, otherwise display missing emoji using a fallback glyph "□" (known as tofu) |