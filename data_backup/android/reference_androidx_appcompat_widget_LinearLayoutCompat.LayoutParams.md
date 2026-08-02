--- source: https://developer.android.com/reference/androidx/appcompat/widget/LinearLayoutCompat.LayoutParams ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# LinearLayoutCompat.LayoutParams

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/LinearLayoutCompat.java+class:androidx.appcompat.widget.LinearLayoutCompat.LayoutParams)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/LinearLayoutCompat.LayoutParams "View this page in Kotlin")
|Java

```
public class LinearLayoutCompat.LayoutParams extends LinearLayout.LayoutParams
```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | |
| ↳ | [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) | | | |
|  | ↳ | [android.view.ViewGroup.MarginLayoutParams](https://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html) | | |
|  |  | ↳ | [android.widget.LinearLayout.LayoutParams](https://developer.android.com/reference/android/widget/LinearLayout.LayoutParams.html) | |
|  |  |  | ↳ | [androidx.appcompat.widget.LinearLayoutCompat.LayoutParams](/reference/androidx/appcompat/widget/LinearLayoutCompat.LayoutParams) |

Known direct subclasses

[ActionMenuView.LayoutParams](/reference/androidx/appcompat/widget/ActionMenuView.LayoutParams)

|  |  |
| --- | --- |
| `ActionMenuView.LayoutParams` |  |

---

Per-child layout information associated with ViewLinearLayout.

## Summary

| Public constructors |
| --- |
| `LayoutParams(ViewGroup.LayoutParams p)` |
| `LayoutParams(ViewGroup.MarginLayoutParams source)` |
| `LayoutParams(Context c, AttributeSet attrs)` |
| `LayoutParams(int width, int height)` |
| `LayoutParams(int width, int height, float weight)`  Creates a new set of layout parameters with the specified width, height and weight. |

| Inherited Constants |
| --- |
| From [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) |  |  | | --- | --- | | `static final int` | `FILL_PARENT = -1`  **This field is deprecated.** | | `static final int` | `MATCH_PARENT = -1` | | `static final int` | `WRAP_CONTENT = -2` | |

| Inherited fields |
| --- |
| From [android.widget.LinearLayout.LayoutParams](https://developer.android.com/reference/android/widget/LinearLayout.LayoutParams.html) |  |  | | --- | --- | | `int` | `gravity` | | `float` | `weight` | |
| From [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) |  |  | | --- | --- | | `int` | `height` | | `LayoutAnimationController.AnimationParameters` | `layoutAnimationParameters` | | `int` | `width` | |
| From [android.view.ViewGroup.MarginLayoutParams](https://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html) |  |  | | --- | --- | | `int` | `bottomMargin` | | `int` | `leftMargin` | | `int` | `rightMargin` | | `int` | `topMargin` | |

| Inherited methods |
| --- |
| From [android.widget.LinearLayout.LayoutParams](https://developer.android.com/reference/android/widget/LinearLayout.LayoutParams.html) |  |  | | --- | --- | | `String` | `debug(String output)` | |
| From [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) |  |  | | --- | --- | | `void` | `setBaseAttributes(TypedArray a, int widthAttr, int heightAttr)` | |
| From [android.view.ViewGroup.MarginLayoutParams](https://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html) |  |  | | --- | --- | | `int` | `getLayoutDirection()` | | `int` | `getMarginEnd()` | | `int` | `getMarginStart()` | | `boolean` | `isMarginRelative()` | | `void` | `resolveLayoutDirection(int layoutDirection)` | | `void` | `setLayoutDirection(int layoutDirection)` | | `void` | `setMarginEnd(int end)` | | `void` | `setMarginStart(int start)` | | `void` | `setMargins(int left, int top, int right, int bottom)` | |

## Public constructors

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(ViewGroup.LayoutParams p)
```

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(ViewGroup.MarginLayoutParams source)
```

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(Context c, AttributeSet attrs)
```

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(int width, int height)
```

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(int width, int height, float weight)
```

Creates a new set of layout parameters with the specified width, height and weight.

| Parameters |
| --- |
| `int width` | the width, either `MATCH_PARENT`, `WRAP_CONTENT` or a fixed size in pixels |
| `int height` | the height, either `MATCH_PARENT`, `WRAP_CONTENT` or a fixed size in pixels |
| `float weight` | the weight |