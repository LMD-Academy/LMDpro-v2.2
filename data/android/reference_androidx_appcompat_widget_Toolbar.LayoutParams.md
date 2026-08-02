# Toolbar.LayoutParams

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/widget/Toolbar.LayoutParams))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/Toolbar.java+class:androidx.appcompat.widget.Toolbar.LayoutParams)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/Toolbar.LayoutParams "View this page in Kotlin")
|Java

```
public class Toolbar.LayoutParams extends ActionBar.LayoutParams
```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | |
| ↳ | [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) | | | |
|  | ↳ | [android.view.ViewGroup.MarginLayoutParams](https://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html) | | |
|  |  | ↳ | [androidx.appcompat.app.ActionBar.LayoutParams](/reference/androidx/appcompat/app/ActionBar.LayoutParams) | |
|  |  |  | ↳ | [androidx.appcompat.widget.Toolbar.LayoutParams](/reference/androidx/appcompat/widget/Toolbar.LayoutParams) |

---

Layout information for child views of Toolbars.

Toolbar.LayoutParams extends ActionBar.LayoutParams for compatibility with existing ActionBar API. See `AppCompatActivity.setSupportActionBar` for more info on how to use a Toolbar as your Activity's ActionBar.

## Summary

| Public constructors |
| --- |
| `LayoutParams(int gravity)` |
| `LayoutParams(ActionBar.LayoutParams source)` |
| `LayoutParams(Toolbar.LayoutParams source)` |
| `LayoutParams(ViewGroup.LayoutParams source)` |
| `LayoutParams(ViewGroup.MarginLayoutParams source)` |
| `LayoutParams(@NonNull Context c, AttributeSet attrs)` |
| `LayoutParams(int width, int height)` |
| `LayoutParams(int width, int height, int gravity)` |

| Inherited Constants |
| --- |
| From [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) |  |  | | --- | --- | | `static final int` | `FILL_PARENT = -1`  **This field is deprecated.** | | `static final int` | `MATCH_PARENT = -1` | | `static final int` | `WRAP_CONTENT = -2` | |

| Inherited fields |
| --- |
| From [androidx.appcompat.app.ActionBar.LayoutParams](/reference/androidx/appcompat/app/ActionBar.LayoutParams) |  |  | | --- | --- | | `int` | `gravity`  Gravity for the view associated with these LayoutParams. | |
| From [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) |  |  | | --- | --- | | `int` | `height` | | `LayoutAnimationController.AnimationParameters` | `layoutAnimationParameters` | | `int` | `width` | |
| From [android.view.ViewGroup.MarginLayoutParams](https://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html) |  |  | | --- | --- | | `int` | `bottomMargin` | | `int` | `leftMargin` | | `int` | `rightMargin` | | `int` | `topMargin` | |

| Inherited methods |
| --- |
| From [android.view.ViewGroup.LayoutParams](https://developer.android.com/reference/android/view/ViewGroup.LayoutParams.html) |  |  | | --- | --- | | `void` | `setBaseAttributes(TypedArray a, int widthAttr, int heightAttr)` | |
| From [android.view.ViewGroup.MarginLayoutParams](https://developer.android.com/reference/android/view/ViewGroup.MarginLayoutParams.html) |  |  | | --- | --- | | `int` | `getLayoutDirection()` | | `int` | `getMarginEnd()` | | `int` | `getMarginStart()` | | `boolean` | `isMarginRelative()` | | `void` | `resolveLayoutDirection(int layoutDirection)` | | `void` | `setLayoutDirection(int layoutDirection)` | | `void` | `setMarginEnd(int end)` | | `void` | `setMarginStart(int start)` | | `void` | `setMargins(int left, int top, int right, int bottom)` | |

## Public constructors

### LayoutParams

```
public LayoutParams(int gravity)
```

### LayoutParams

```
public LayoutParams(ActionBar.LayoutParams source)
```

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(Toolbar.LayoutParams source)
```

### LayoutParams

```
public LayoutParams(ViewGroup.LayoutParams source)
```

### LayoutParams

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public LayoutParams(ViewGroup.MarginLayoutParams source)
```

### LayoutParams

```
public LayoutParams(@NonNull Context c, AttributeSet attrs)
```

### LayoutParams

```
public LayoutParams(int width, int height)
```

### LayoutParams

```
public LayoutParams(int width, int height, int gravity)
```
