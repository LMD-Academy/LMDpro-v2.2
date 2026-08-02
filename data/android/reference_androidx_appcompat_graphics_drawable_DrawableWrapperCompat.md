# DrawableWrapperCompat

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/graphics/drawable/DrawableWrapperCompat))

Artifact: [androidx.appcompat:appcompat-resources](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/graphics/drawable/DrawableWrapperCompat.java+class:androidx.appcompat.graphics.drawable.DrawableWrapperCompat)

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/graphics/drawable/DrawableWrapperCompat "View this page in Kotlin")
|Java

```
public class DrawableWrapperCompat extends Drawable implements Drawable.Callback
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) | |
|  | ↳ | [androidx.appcompat.graphics.drawable.DrawableWrapperCompat](/reference/androidx/appcompat/graphics/drawable/DrawableWrapperCompat) |

---

Drawable which delegates all calls to its wrapped `Drawable`.

The wrapped `Drawable`*must* be fully released from any `View` before wrapping, otherwise internal `Callback` may be dropped.

Adapted from platform class, altered with API level checks as necessary.

## Summary

| Public constructors |
| --- |
| `DrawableWrapperCompat(Drawable drawable)`  Creates a new wrapper around the specified drawable. |

| Public methods |
| --- |
| `void` | `draw(@NonNull Canvas canvas)` |
| `int` | `getChangingConfigurations()` |
| `Drawable` | `getCurrent()` |
| `@Nullable Drawable` | `getDrawable()` |
| `int` | `getIntrinsicHeight()` |
| `int` | `getIntrinsicWidth()` |
| `int` | `getMinimumHeight()` |
| `int` | `getMinimumWidth()` |
| `int` | `getOpacity()`  **This method is deprecated.** |
| `boolean` | `getPadding(Rect padding)` |
| `int[]` | `getState()` |
| `Region` | `getTransparentRegion()` |
| `void` | `invalidateDrawable(Drawable who)` |
| `boolean` | `isAutoMirrored()` |
| `boolean` | `isStateful()` |
| `void` | `jumpToCurrentState()` |
| `void` | `scheduleDrawable(Drawable who, Runnable what, long when)` |
| `void` | `setAlpha(int alpha)` |
| `void` | `setAutoMirrored(boolean mirrored)` |
| `void` | `setChangingConfigurations(int configs)` |
| `void` | `setColorFilter(ColorFilter cf)` |
| `void` | `setDither(boolean dither)`  **This method is deprecated.** |
| `void` | `setDrawable(@Nullable Drawable drawable)`  Sets the wrapped drawable. |
| `void` | `setFilterBitmap(boolean filter)` |
| `void` | `setHotspot(float x, float y)` |
| `void` | `setHotspotBounds(int left, int top, int right, int bottom)` |
| `boolean` | `setState(int[] stateSet)` |
| `void` | `setTint(int tint)` |
| `void` | `setTintList(ColorStateList tint)` |
| `void` | `setTintMode(PorterDuff.Mode tintMode)` |
| `boolean` | `setVisible(boolean visible, boolean restart)` |
| `void` | `unscheduleDrawable(Drawable who, Runnable what)` |

| Protected methods |
| --- |
| `void` | `onBoundsChange(Rect bounds)` |
| `boolean` | `onLevelChange(int level)` |

| Inherited methods |
| --- |
| From [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) |  |  | | --- | --- | | `void` | `applyTheme(Resources.Theme t)` | | `boolean` | `canApplyTheme()` | | `void` | `clearColorFilter()` | | `final Rect` | `copyBounds()` | | `final void` | `copyBounds(Rect bounds)` | | `static Drawable` | `createFromPath(String pathName)` | | `static Drawable` | `createFromResourceStream(     Resources res,     TypedValue value,     InputStream is,     String srcName )` | | `static Drawable` | `createFromStream(InputStream is, String srcName)` | | `static Drawable` | `createFromXml(Resources r, XmlPullParser parser)` | | `static Drawable` | `createFromXmlInner(     Resources r,     XmlPullParser parser,     AttributeSet attrs )` | | `int` | `getAlpha()` | | `final Rect` | `getBounds()` | | `Drawable.Callback` | `getCallback()` | | `ColorFilter` | `getColorFilter()` | | `Drawable.ConstantState` | `getConstantState()` | | `Rect` | `getDirtyBounds()` | | `void` | `getHotspotBounds(Rect outRect)` | | `int` | `getLayoutDirection()` | | `final int` | `getLevel()` | | `Insets` | `getOpticalInsets()` | | `void` | `getOutline(Outline outline)` | | `boolean` | `hasFocusStateSpecified()` | | `void` | `inflate(Resources r, XmlPullParser parser, AttributeSet attrs)` | | `void` | `invalidateSelf()` | | `boolean` | `isFilterBitmap()` | | `boolean` | `isProjected()` | | `final boolean` | `isVisible()` | | `Drawable` | `mutate()` | | `boolean` | `onLayoutDirectionChanged(int layoutDirection)` | | `boolean` | `onStateChange(int[] state)` | | `static int` | `resolveOpacity(int op1, int op2)` | | `void` | `scheduleSelf(Runnable what, long when)` | | `void` | `setBounds(Rect bounds)` | | `final void` | `setCallback(Drawable.Callback cb)` | | `final boolean` | `setLayoutDirection(int layoutDirection)` | | `final boolean` | `setLevel(int level)` | | `void` | `setTintBlendMode(BlendMode blendMode)` | | `void` | `unscheduleSelf(Runnable what)` | |

## Public constructors

### DrawableWrapperCompat

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public DrawableWrapperCompat(Drawable drawable)
```

Creates a new wrapper around the specified drawable.

## Public methods

### draw

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void draw(@NonNull Canvas canvas)
```

### getChangingConfigurations

```
public int getChangingConfigurations()
```

### getCurrent

```
public Drawable getCurrent()
```

### getDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public @Nullable Drawable getDrawable()
```

| Returns |
| --- |
| `@Nullable Drawable` | the wrapped drawable |

### getIntrinsicHeight

```
public int getIntrinsicHeight()
```

### getIntrinsicWidth

```
public int getIntrinsicWidth()
```

### getMinimumHeight

```
public int getMinimumHeight()
```

### getMinimumWidth

```
public int getMinimumWidth()
```

### getOpacity

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public int getOpacity()
```

**This method is deprecated.**

### getPadding

```
public boolean getPadding(Rect padding)
```

### getState

```
public int[] getState()
```

### getTransparentRegion

```
public Region getTransparentRegion()
```

### invalidateDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void invalidateDrawable(Drawable who)
```

### isAutoMirrored

```
public boolean isAutoMirrored()
```

### isStateful

```
public boolean isStateful()
```

### jumpToCurrentState

```
public void jumpToCurrentState()
```

### scheduleDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void scheduleDrawable(Drawable who, Runnable what, long when)
```

### setAlpha

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setAlpha(int alpha)
```

### setAutoMirrored

```
public void setAutoMirrored(boolean mirrored)
```

### setChangingConfigurations

```
public void setChangingConfigurations(int configs)
```

### setColorFilter

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setColorFilter(ColorFilter cf)
```

### setDither

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setDither(boolean dither)
```

**This method is deprecated.**

### setDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setDrawable(@Nullable Drawable drawable)
```

Sets the wrapped drawable.

| Parameters |
| --- |
| `@Nullable Drawable drawable` | the wrapped drawable |

### setFilterBitmap

```
public void setFilterBitmap(boolean filter)
```

### setHotspot

```
public void setHotspot(float x, float y)
```

### setHotspotBounds

```
public void setHotspotBounds(int left, int top, int right, int bottom)
```

### setState

```
public boolean setState(int[] stateSet)
```

### setTint

```
public void setTint(int tint)
```

### setTintList

```
public void setTintList(ColorStateList tint)
```

### setTintMode

```
public void setTintMode(PorterDuff.Mode tintMode)
```

### setVisible

```
public boolean setVisible(boolean visible, boolean restart)
```

### unscheduleDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void unscheduleDrawable(Drawable who, Runnable what)
```

## Protected methods

### onBoundsChange

```
protected void onBoundsChange(Rect bounds)
```

### onLevelChange

```
protected boolean onLevelChange(int level)
```
