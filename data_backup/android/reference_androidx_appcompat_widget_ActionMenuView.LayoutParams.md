--- source: https://developer.android.com/reference/androidx/appcompat/widget/ActionMenuView.LayoutParams ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ActionMenuView.LayoutParams

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/ActionMenuView.java+class:androidx.appcompat.widget.ActionMenuView.LayoutParams)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/ActionMenuView.LayoutParams "View this page in Kotlin")
|Java

```
public class ActionMenuView.LayoutParams extends LinearLayoutCompat.LayoutParams
```

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | | |
| ↳ | [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) | | | | |
|  | ↳ | [android.view.ViewGroup.MarginLayoutParams](https://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html) | | | |
|  |  | ↳ | [android.widget.LinearLayout.LayoutParams](https://developer.android.com/reference/android/widget/LinearLayout.LayoutParams.html) | | |
|  |  |  | ↳ | [androidx.appcompat.widget.LinearLayoutCompat.LayoutParams](/reference/androidx/appcompat/widget/LinearLayoutCompat.LayoutParams) | |
|  |  |  |  | ↳ | [androidx.appcompat.widget.ActionMenuView.LayoutParams](/reference/androidx/appcompat/widget/ActionMenuView.LayoutParams) |

---

## Summary

| Public fields |
| --- |
| `int` | `@ViewDebug.ExportedProperty cellsUsed` |
| `boolean` | `@ViewDebug.ExportedProperty expandable` |
| `int` | `@ViewDebug.ExportedProperty extraPixels` |
| `boolean` | `@ViewDebug.ExportedProperty isOverflowButton` |
| `boolean` | `@ViewDebug.ExportedProperty preventEdgeOffset` |

| Public constructors |
| --- |
| `LayoutParams(ActionMenuView.LayoutParams other)` |
| `LayoutParams(ViewGroup.LayoutParams other)` |
| `LayoutParams(Context c, AttributeSet attrs)` |
| `LayoutParams(int width, int height)` |

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

## Public fields

### cellsUsed

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@ViewDebug.ExportedProperty  
public int cellsUsed
```

### expandable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@ViewDebug.ExportedProperty  
public boolean expandable
```

### extraPixels

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@ViewDebug.ExportedProperty  
public int extraPixels
```

### isOverflowButton

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@ViewDebug.ExportedProperty  
public boolean isOverflowButton
```

### preventEdgeOffset

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
@ViewDebug.ExportedProperty  
public boolean preventEdgeOffset
```

## Public constructors

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(ActionMenuView.LayoutParams other)
```

### LayoutParams

```
public LayoutParams(ViewGroup.LayoutParams other)
```

### LayoutParams

```
public LayoutParams(Context c, AttributeSet attrs)
```

### LayoutParams

```
public LayoutParams(int width, int height)
```