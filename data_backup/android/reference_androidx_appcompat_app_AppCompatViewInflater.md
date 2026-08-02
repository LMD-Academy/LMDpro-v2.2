--- source: https://developer.android.com/reference/androidx/appcompat/app/AppCompatViewInflater ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AppCompatViewInflater

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/app/AppCompatViewInflater.java+class:androidx.appcompat.app.AppCompatViewInflater)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/app/AppCompatViewInflater "View this page in Kotlin")
|Java

```
public class AppCompatViewInflater
```

Known direct subclasses

[LeanbackAppCompatViewInflater](/reference/androidx/leanback/widget/LeanbackAppCompatViewInflater)

|  |  |
| --- | --- |
| `LeanbackAppCompatViewInflater` | Inflater that converts leanback non-AppCpmpat views in layout to AppCompat versions. |

---

This class is used by AppCompat to automatically "substitute" all usages of core Android widgets inflated from layout files by the AppCompat extensions of those widgets.

This class two main responsibilities: the first is to 'inject' our tinted views in place of the framework versions in layout inflation; the second is backport the `android:theme` functionality for any inflated widgets. This include theme inheritance from its parent.

In order to provide your own extensions, follow these steps:

* Extend this class, or the relevant subclass if you're using the Material components library
* Override one or more of the `createXYZ` methods
* Add the `viewInflaterClass` attribute on your application theme. The value of the attribute should be the fully-qualified class name of your custom inflater class.

## Summary

| Public constructors |
| --- |
| `AppCompatViewInflater()` |

| Public methods |
| --- |
| `final @Nullable View` | `createView(     @Nullable View parent,     @NonNull String name,     @NonNull Context context,     @NonNull AttributeSet attrs,     boolean inheritContext,     boolean readAndroidTheme,     boolean readAppTheme,     boolean wrapContext )`  Creates an AppCompat-compatible widget by automatically "substituting" all usages of core Android widgets with the AppCompat extensions of those widgets. |

| Protected methods |
| --- |
| `@NonNull AppCompatAutoCompleteTextView` | `createAutoCompleteTextView(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatButton` | `createButton(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatCheckBox` | `createCheckBox(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatCheckedTextView` | `createCheckedTextView(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatEditText` | `createEditText(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatImageButton` | `createImageButton(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatImageView` | `createImageView(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatMultiAutoCompleteTextView` | `createMultiAutoCompleteTextView(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatRadioButton` | `createRadioButton(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatRatingBar` | `createRatingBar(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatSeekBar` | `createSeekBar(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatSpinner` | `createSpinner(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatTextView` | `createTextView(Context context, AttributeSet attrs)` |
| `@NonNull AppCompatToggleButton` | `createToggleButton(Context context, AttributeSet attrs)` |
| `@Nullable View` | `createView(Context context, String name, AttributeSet attrs)` |

## Public constructors

### AppCompatViewInflater

Added in 1.1.0

```
public AppCompatViewInflater()
```

## Public methods

### createView

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public final @Nullable View createView(  
    @Nullable View parent,  
    @NonNull String name,  
    @NonNull Context context,  
    @NonNull AttributeSet attrs,  
    boolean inheritContext,  
    boolean readAndroidTheme,  
    boolean readAppTheme,  
    boolean wrapContext  
)
```

Creates an AppCompat-compatible widget by automatically "substituting" all usages of core Android widgets with the AppCompat extensions of those widgets.

Most developers should not call this method directly. Instead, use the layout inflater provided by `getLayoutInflater` or call `createView`.

| Parameters |
| --- |
| `@Nullable View parent` | the hierarchical parent of the view, if any |
| `@NonNull String name` | class name of the view, must be a simple class name like `TextView` for core Android widgets |
| `@NonNull Context context` | context against which the view should be constructed, may be wrapped for theming purposes or fully replaced if `inheritContext` is `true` |
| `@NonNull AttributeSet attrs` | attribute set to pass to the view constructor |
| `boolean inheritContext` | `true` to construct the view against the `parent` view's context instead of `context`, or `false` to use `context` |
| `boolean readAndroidTheme` | `true` to parse `android:theme` from `attrs` and wrap the view's construction context if necessary |
| `boolean readAppTheme` | `true` to parse `app:theme` from `attrs` and wrap the view's construction context if necessary |
| `boolean wrapContext` | this parameter is ignored |

| Returns |
| --- |
| `@Nullable View` | an AppCompat-compatible widget |

## Protected methods

### createAutoCompleteTextView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatAutoCompleteTextView createAutoCompleteTextView(Context context, AttributeSet attrs)
```

### createButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatButton createButton(Context context, AttributeSet attrs)
```

### createCheckBox

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatCheckBox createCheckBox(Context context, AttributeSet attrs)
```

### createCheckedTextView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatCheckedTextView createCheckedTextView(Context context, AttributeSet attrs)
```

### createEditText

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatEditText createEditText(Context context, AttributeSet attrs)
```

### createImageButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatImageButton createImageButton(Context context, AttributeSet attrs)
```

### createImageView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatImageView createImageView(Context context, AttributeSet attrs)
```

### createMultiAutoCompleteTextView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatMultiAutoCompleteTextView createMultiAutoCompleteTextView(Context context, AttributeSet attrs)
```

### createRadioButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatRadioButton createRadioButton(Context context, AttributeSet attrs)
```

### createRatingBar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatRatingBar createRatingBar(Context context, AttributeSet attrs)
```

### createSeekBar

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatSeekBar createSeekBar(Context context, AttributeSet attrs)
```

### createSpinner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatSpinner createSpinner(Context context, AttributeSet attrs)
```

### createTextView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatTextView createTextView(Context context, AttributeSet attrs)
```

### createToggleButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @NonNull AppCompatToggleButton createToggleButton(Context context, AttributeSet attrs)
```

### createView

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
protected @Nullable View createView(Context context, String name, AttributeSet attrs)
```