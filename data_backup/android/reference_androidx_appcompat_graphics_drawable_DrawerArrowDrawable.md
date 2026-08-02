--- source: https://developer.android.com/reference/androidx/appcompat/graphics/drawable/DrawerArrowDrawable ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# DrawerArrowDrawable

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/graphics/drawable/DrawerArrowDrawable.java+class:androidx.appcompat.graphics.drawable.DrawerArrowDrawable)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/graphics/drawable/DrawerArrowDrawable "View this page in Kotlin")
|Java

```
public class DrawerArrowDrawable extends Drawable
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) | |
|  | ↳ | [androidx.appcompat.graphics.drawable.DrawerArrowDrawable](/reference/androidx/appcompat/graphics/drawable/DrawerArrowDrawable) |

---

A drawable that can draw a "Drawer hamburger" menu or an arrow and animate between them.

The progress between the two states is controlled via `setProgress`.

## Summary

| Constants |
| --- |
| `static final int` | `ARROW_DIRECTION_END = 3`  Direction to make the arrow point to the end. |
| `static final int` | `ARROW_DIRECTION_LEFT = 0`  Direction to make the arrow point towards the left. |
| `static final int` | `ARROW_DIRECTION_RIGHT = 1`  Direction to make the arrow point towards the right. |
| `static final int` | `ARROW_DIRECTION_START = 2`  Direction to make the arrow point towards the start. |

| Public constructors |
| --- |
| `DrawerArrowDrawable(Context context)` |

| Public methods |
| --- |
| `void` | `draw(@NonNull Canvas canvas)` |
| `float` | `getArrowHeadLength()`  Returns the length of the arrow head (from tip to edge, perpendicular to the shaft), in pixels. |
| `float` | `getArrowShaftLength()`  Returns the arrow shaft length in pixels. |
| `float` | `getBarLength()`  The length of the bars when they are parallel to each other. |
| `float` | `getBarThickness()`  Returns the thickness (stroke width) of the bars. |
| `@ColorInt int` | `getColor()`  Returns the color of the drawable. |
| `int` | `getDirection()`  Returns the arrow direction. |
| `float` | `getGapSize()`  Returns the max gap between the bars when they are parallel to each other. |
| `int` | `getIntrinsicHeight()` |
| `int` | `getIntrinsicWidth()` |
| `int` | `getOpacity()`  **This method is deprecated.** |
| `final Paint` | `getPaint()`  Returns the paint instance used for all drawing. |
| `@FloatRange(from = 0.0, to = 1.0) float` | `getProgress()`  Returns the current progress of the arrow. |
| `boolean` | `isSpinEnabled()`  Returns whether the bars should rotate or not during the transition. |
| `void` | `setAlpha(int alpha)` |
| `void` | `setArrowHeadLength(float length)`  Sets the length of the arrow head (from tip to edge, perpendicular to the shaft). |
| `void` | `setArrowShaftLength(float length)`  Sets the arrow shaft length. |
| `void` | `setBarLength(float length)`  Sets the length of the bars when they are parallel to each other. |
| `void` | `setBarThickness(float width)`  Sets the thickness (stroke size) for the bars. |
| `void` | `setColor(@ColorInt int color)`  Sets the color of the drawable. |
| `void` | `setColorFilter(ColorFilter colorFilter)` |
| `void` | `setDirection(int direction)`  Set the arrow direction. |
| `void` | `setGapSize(float gap)`  Sets the max gap between the bars when they are parallel to each other. |
| `void` | `setProgress(@FloatRange(from = 0.0, to = 1.0) float progress)`  Set the progress of the arrow. |
| `void` | `setSpinEnabled(boolean enabled)`  Returns whether the bars should rotate or not during the transition. |
| `void` | `setVerticalMirror(boolean verticalMirror)`  If set, canvas is flipped when progress reached to end and going back to start. |

| Inherited methods |
| --- |
| From [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) |  |  | | --- | --- | | `void` | `applyTheme(Resources.Theme t)` | | `boolean` | `canApplyTheme()` | | `void` | `clearColorFilter()` | | `final Rect` | `copyBounds()` | | `final void` | `copyBounds(Rect bounds)` | | `static Drawable` | `createFromPath(String pathName)` | | `static Drawable` | `createFromResourceStream(     Resources res,     TypedValue value,     InputStream is,     String srcName )` | | `static Drawable` | `createFromStream(InputStream is, String srcName)` | | `static Drawable` | `createFromXml(Resources r, XmlPullParser parser)` | | `static Drawable` | `createFromXmlInner(     Resources r,     XmlPullParser parser,     AttributeSet attrs )` | | `int` | `getAlpha()` | | `final Rect` | `getBounds()` | | `Drawable.Callback` | `getCallback()` | | `int` | `getChangingConfigurations()` | | `ColorFilter` | `getColorFilter()` | | `Drawable.ConstantState` | `getConstantState()` | | `Drawable` | `getCurrent()` | | `Rect` | `getDirtyBounds()` | | `void` | `getHotspotBounds(Rect outRect)` | | `int` | `getLayoutDirection()` | | `final int` | `getLevel()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `Insets` | `getOpticalInsets()` | | `void` | `getOutline(Outline outline)` | | `boolean` | `getPadding(Rect padding)` | | `int[]` | `getState()` | | `Region` | `getTransparentRegion()` | | `boolean` | `hasFocusStateSpecified()` | | `void` | `inflate(Resources r, XmlPullParser parser, AttributeSet attrs)` | | `void` | `invalidateSelf()` | | `boolean` | `isAutoMirrored()` | | `boolean` | `isFilterBitmap()` | | `boolean` | `isProjected()` | | `boolean` | `isStateful()` | | `final boolean` | `isVisible()` | | `void` | `jumpToCurrentState()` | | `Drawable` | `mutate()` | | `void` | `onBoundsChange(Rect bounds)` | | `boolean` | `onLayoutDirectionChanged(int layoutDirection)` | | `boolean` | `onLevelChange(int level)` | | `boolean` | `onStateChange(int[] state)` | | `static int` | `resolveOpacity(int op1, int op2)` | | `void` | `scheduleSelf(Runnable what, long when)` | | `void` | `setAutoMirrored(boolean mirrored)` | | `void` | `setBounds(Rect bounds)` | | `final void` | `setCallback(Drawable.Callback cb)` | | `void` | `setChangingConfigurations(int configs)` | | `void` | `setDither(boolean dither)`  **This method is deprecated.** | | `void` | `setFilterBitmap(boolean filter)` | | `void` | `setHotspot(float x, float y)` | | `void` | `setHotspotBounds(int left, int top, int right, int bottom)` | | `final boolean` | `setLayoutDirection(int layoutDirection)` | | `final boolean` | `setLevel(int level)` | | `boolean` | `setState(int[] stateSet)` | | `void` | `setTint(int tintColor)` | | `void` | `setTintBlendMode(BlendMode blendMode)` | | `void` | `setTintList(ColorStateList tint)` | | `void` | `setTintMode(PorterDuff.Mode tintMode)` | | `boolean` | `setVisible(boolean visible, boolean restart)` | | `void` | `unscheduleSelf(Runnable what)` | |

## Constants

### ARROW\_DIRECTION\_END

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int ARROW_DIRECTION_END = 3
```

Direction to make the arrow point to the end.

When used in a view with a `RTL` layout direction, this is the same as `ARROW_DIRECTION_LEFT`, otherwise it is the same as `ARROW_DIRECTION_RIGHT`.

| See also |
| --- |
| `setDirection` |  |
| `getDirection` |  |

### ARROW\_DIRECTION\_LEFT

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int ARROW_DIRECTION_LEFT = 0
```

Direction to make the arrow point towards the left.

| See also |
| --- |
| `setDirection` |  |
| `getDirection` |  |

### ARROW\_DIRECTION\_RIGHT

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int ARROW_DIRECTION_RIGHT = 1
```

Direction to make the arrow point towards the right.

| See also |
| --- |
| `setDirection` |  |
| `getDirection` |  |

### ARROW\_DIRECTION\_START

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static final int ARROW_DIRECTION_START = 2
```

Direction to make the arrow point towards the start.

When used in a view with a `RTL` layout direction, this is the same as `ARROW_DIRECTION_RIGHT`, otherwise it is the same as `ARROW_DIRECTION_LEFT`.

| See also |
| --- |
| `setDirection` |  |
| `getDirection` |  |

## Public constructors

### DrawerArrowDrawable

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public DrawerArrowDrawable(Context context)
```

| Parameters |
| --- |
| `Context context` | used to get the configuration for the drawable from |

## Public methods

### draw

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void draw(@NonNull Canvas canvas)
```

### getArrowHeadLength

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public float getArrowHeadLength()
```

Returns the length of the arrow head (from tip to edge, perpendicular to the shaft), in pixels.

### getArrowShaftLength

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public float getArrowShaftLength()
```

Returns the arrow shaft length in pixels.

### getBarLength

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public float getBarLength()
```

The length of the bars when they are parallel to each other.

### getBarThickness

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public float getBarThickness()
```

Returns the thickness (stroke width) of the bars.

### getColor

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @ColorInt int getColor()
```

Returns the color of the drawable.

### getDirection

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getDirection()
```

Returns the arrow direction.

### getGapSize

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public float getGapSize()
```

Returns the max gap between the bars when they are parallel to each other.

| See also |
| --- |
| `getGapSize` |  |

### getIntrinsicHeight

```
public int getIntrinsicHeight()
```

### getIntrinsicWidth

```
public int getIntrinsicWidth()
```

### getOpacity

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public int getOpacity()
```

**This method is deprecated.**

### getPaint

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public final Paint getPaint()
```

Returns the paint instance used for all drawing.

### getProgress

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public @FloatRange(from = 0.0, to = 1.0) float getProgress()
```

Returns the current progress of the arrow.

### isSpinEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public boolean isSpinEnabled()
```

Returns whether the bars should rotate or not during the transition.

| See also |
| --- |
| `setSpinEnabled` |  |

### setAlpha

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setAlpha(int alpha)
```

### setArrowHeadLength

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setArrowHeadLength(float length)
```

Sets the length of the arrow head (from tip to edge, perpendicular to the shaft).

| Parameters |
| --- |
| `float length` | the length in pixels |

### setArrowShaftLength

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setArrowShaftLength(float length)
```

Sets the arrow shaft length.

| Parameters |
| --- |
| `float length` | the length in pixels |

### setBarLength

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setBarLength(float length)
```

Sets the length of the bars when they are parallel to each other.

| Parameters |
| --- |
| `float length` | the length in pixels |

### setBarThickness

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setBarThickness(float width)
```

Sets the thickness (stroke size) for the bars.

| Parameters |
| --- |
| `float width` | stroke width in pixels |

### setColor

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setColor(@ColorInt int color)
```

Sets the color of the drawable.

### setColorFilter

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setColorFilter(ColorFilter colorFilter)
```

### setDirection

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setDirection(int direction)
```

Set the arrow direction.

### setGapSize

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setGapSize(float gap)
```

Sets the max gap between the bars when they are parallel to each other.

| Parameters |
| --- |
| `float gap` | the gap in pixels |

| See also |
| --- |
| `getGapSize` |  |

### setProgress

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setProgress(@FloatRange(from = 0.0, to = 1.0) float progress)
```

Set the progress of the arrow.

A value of `0.0` indicates that the arrow should be drawn in its starting position. A value of `1.0` indicates that the arrow should be drawn in its ending position.

### setSpinEnabled

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setSpinEnabled(boolean enabled)
```

Returns whether the bars should rotate or not during the transition.

| Parameters |
| --- |
| `boolean enabled` | true if the bars should rotate. |

| See also |
| --- |
| `isSpinEnabled` |  |

### setVerticalMirror

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void setVerticalMirror(boolean verticalMirror)
```

If set, canvas is flipped when progress reached to end and going back to start.