# DrawableContainerCompat

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/graphics/drawable/DrawableContainerCompat))

Artifact: [androidx.appcompat:appcompat-resources](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/graphics/drawable/DrawableContainerCompat.java+class:androidx.appcompat.graphics.drawable.DrawableContainerCompat)

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/graphics/drawable/DrawableContainerCompat "View this page in Kotlin")
|Java

```
public class DrawableContainerCompat extends Drawable implements Drawable.Callback
```

|  |  |  |
| --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | |
| ↳ | [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) | |
|  | ↳ | [androidx.appcompat.graphics.drawable.DrawableContainerCompat](/reference/androidx/appcompat/graphics/drawable/DrawableContainerCompat) |

Known direct subclasses

[StateListDrawableCompat](/reference/androidx/appcompat/graphics/drawable/StateListDrawableCompat)

|  |  |
| --- | --- |
| `StateListDrawableCompat` | Lets you assign a number of graphic images to a single Drawable and swap out the visible item by a string ID value. |

Known indirect subclasses

[AnimatedStateListDrawableCompat](/reference/androidx/appcompat/graphics/drawable/AnimatedStateListDrawableCompat)

|  |  |
| --- | --- |
| `AnimatedStateListDrawableCompat` | A `Drawable` providing animated transitions between states. |

---

A helper class that contains several `Drawable`s and selects which one to use.

Adapted from platform class, altered with API level checks as necessary.

## Summary

| Public constructors |
| --- |
| `DrawableContainerCompat()` |

| Public methods |
| --- |
| `void` | `applyTheme(@NonNull Resources.Theme theme)` |
| `boolean` | `canApplyTheme()` |
| `void` | `draw(@NonNull Canvas canvas)` |
| `int` | `getAlpha()` |
| `int` | `getChangingConfigurations()` |
| `final Drawable.ConstantState` | `getConstantState()` |
| `@NonNull Drawable` | `getCurrent()` |
| `void` | `getHotspotBounds(@NonNull Rect outRect)` |
| `int` | `getIntrinsicHeight()` |
| `int` | `getIntrinsicWidth()` |
| `int` | `getMinimumHeight()` |
| `int` | `getMinimumWidth()` |
| `int` | `getOpacity()`  **This method is deprecated.** |
| `void` | `getOutline(@NonNull Outline outline)` |
| `boolean` | `getPadding(@NonNull Rect padding)` |
| `void` | `invalidateDrawable(@NonNull Drawable who)` |
| `boolean` | `isAutoMirrored()` |
| `boolean` | `isStateful()` |
| `void` | `jumpToCurrentState()` |
| `Drawable` | `mutate()` |
| `boolean` | `onLayoutDirectionChanged(int layoutDirection)` |
| `void` | `scheduleDrawable(@NonNull Drawable who, @NonNull Runnable what, long when)` |
| `void` | `setAlpha(int alpha)` |
| `void` | `setAutoMirrored(boolean mirrored)` |
| `void` | `setColorFilter(ColorFilter colorFilter)` |
| `void` | `setDither(boolean dither)`  **This method is deprecated.** |
| `void` | `setEnterFadeDuration(int ms)`  Change the global fade duration when a new drawable is entering the scene. |
| `void` | `setExitFadeDuration(int ms)`  Change the global fade duration when a new drawable is leaving the scene. |
| `void` | `setHotspot(float x, float y)` |
| `void` | `setHotspotBounds(int left, int top, int right, int bottom)` |
| `void` | `setTint(@ColorInt int tintColor)` |
| `void` | `setTintList(ColorStateList tint)` |
| `void` | `setTintMode(@NonNull PorterDuff.Mode tintMode)` |
| `boolean` | `setVisible(boolean visible, boolean restart)` |
| `void` | `unscheduleDrawable(@NonNull Drawable who, @NonNull Runnable what)` |

| Protected methods |
| --- |
| `void` | `onBoundsChange(Rect bounds)` |
| `boolean` | `onLevelChange(int level)` |
| `boolean` | `onStateChange(@NonNull int[] state)` |

| Inherited methods |
| --- |
| From [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) |  |  | | --- | --- | | `void` | `clearColorFilter()` | | `final Rect` | `copyBounds()` | | `final void` | `copyBounds(Rect bounds)` | | `static Drawable` | `createFromPath(String pathName)` | | `static Drawable` | `createFromResourceStream(     Resources res,     TypedValue value,     InputStream is,     String srcName )` | | `static Drawable` | `createFromStream(InputStream is, String srcName)` | | `static Drawable` | `createFromXml(Resources r, XmlPullParser parser)` | | `static Drawable` | `createFromXmlInner(     Resources r,     XmlPullParser parser,     AttributeSet attrs )` | | `final Rect` | `getBounds()` | | `Drawable.Callback` | `getCallback()` | | `ColorFilter` | `getColorFilter()` | | `Rect` | `getDirtyBounds()` | | `int` | `getLayoutDirection()` | | `final int` | `getLevel()` | | `Insets` | `getOpticalInsets()` | | `int[]` | `getState()` | | `Region` | `getTransparentRegion()` | | `boolean` | `hasFocusStateSpecified()` | | `void` | `inflate(Resources r, XmlPullParser parser, AttributeSet attrs)` | | `void` | `invalidateSelf()` | | `boolean` | `isFilterBitmap()` | | `boolean` | `isProjected()` | | `final boolean` | `isVisible()` | | `static int` | `resolveOpacity(int op1, int op2)` | | `void` | `scheduleSelf(Runnable what, long when)` | | `void` | `setBounds(Rect bounds)` | | `final void` | `setCallback(Drawable.Callback cb)` | | `void` | `setChangingConfigurations(int configs)` | | `void` | `setFilterBitmap(boolean filter)` | | `final boolean` | `setLayoutDirection(int layoutDirection)` | | `final boolean` | `setLevel(int level)` | | `boolean` | `setState(int[] stateSet)` | | `void` | `setTintBlendMode(BlendMode blendMode)` | | `void` | `unscheduleSelf(Runnable what)` | |

## Public constructors

### DrawableContainerCompat

Added in 1.6.0

```
public DrawableContainerCompat()
```

## Public methods

### applyTheme

```
public void applyTheme(@NonNull Resources.Theme theme)
```

### canApplyTheme

```
public boolean canApplyTheme()
```

### draw

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void draw(@NonNull Canvas canvas)
```

### getAlpha

```
public int getAlpha()
```

### getChangingConfigurations

```
public int getChangingConfigurations()
```

### getConstantState

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public final Drawable.ConstantState getConstantState()
```

### getCurrent

```
public @NonNull Drawable getCurrent()
```

### getHotspotBounds

```
public void getHotspotBounds(@NonNull Rect outRect)
```

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

### getOutline

```
public void getOutline(@NonNull Outline outline)
```

### getPadding

```
public boolean getPadding(@NonNull Rect padding)
```

### invalidateDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void invalidateDrawable(@NonNull Drawable who)
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

### mutate

```
public Drawable mutate()
```

### onLayoutDirectionChanged

```
public boolean onLayoutDirectionChanged(int layoutDirection)
```

### scheduleDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void scheduleDrawable(@NonNull Drawable who, @NonNull Runnable what, long when)
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

### setColorFilter

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setColorFilter(ColorFilter colorFilter)
```

### setDither

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setDither(boolean dither)
```

**This method is deprecated.**

### setEnterFadeDuration

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setEnterFadeDuration(int ms)
```

Change the global fade duration when a new drawable is entering the scene.

| Parameters |
| --- |
| `int ms` | The amount of time to fade in milliseconds. |

### setExitFadeDuration

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void setExitFadeDuration(int ms)
```

Change the global fade duration when a new drawable is leaving the scene.

| Parameters |
| --- |
| `int ms` | The amount of time to fade in milliseconds. |

### setHotspot

```
public void setHotspot(float x, float y)
```

### setHotspotBounds

```
public void setHotspotBounds(int left, int top, int right, int bottom)
```

### setTint

```
public void setTint(@ColorInt int tintColor)
```

### setTintList

```
public void setTintList(ColorStateList tint)
```

### setTintMode

```
public void setTintMode(@NonNull PorterDuff.Mode tintMode)
```

### setVisible

```
public boolean setVisible(boolean visible, boolean restart)
```

### unscheduleDrawable

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void unscheduleDrawable(@NonNull Drawable who, @NonNull Runnable what)
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

### onStateChange

```
protected boolean onStateChange(@NonNull int[] state)
```
