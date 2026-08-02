--- source: https://developer.android.com/reference/androidx/appcompat/graphics/drawable/StateListDrawableCompat ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# StateListDrawableCompat

Artifact: [androidx.appcompat:appcompat-resources](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/graphics/drawable/StateListDrawableCompat.java+class:androidx.appcompat.graphics.drawable.StateListDrawableCompat)

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/graphics/drawable/StateListDrawableCompat "View this page in Kotlin")
|Java

```
public class StateListDrawableCompat extends DrawableContainerCompat
```

|  |  |  |  |
| --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | |
| ↳ | [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) | | |
|  | ↳ | [androidx.appcompat.graphics.drawable.DrawableContainerCompat](/reference/androidx/appcompat/graphics/drawable/DrawableContainerCompat) | |
|  |  | ↳ | [androidx.appcompat.graphics.drawable.StateListDrawableCompat](/reference/androidx/appcompat/graphics/drawable/StateListDrawableCompat) |

Known direct subclasses

[AnimatedStateListDrawableCompat](/reference/androidx/appcompat/graphics/drawable/AnimatedStateListDrawableCompat)

|  |  |
| --- | --- |
| `AnimatedStateListDrawableCompat` | A `Drawable` providing animated transitions between states. |

---

Lets you assign a number of graphic images to a single Drawable and swap out the visible item by a string ID value.

It can be defined in an XML file with the `<selector>` element. Each state Drawable is defined in a nested `<item>` element. For more information, see the guide to [Drawable Resources](/guide/topics/resources/drawable-resource). `visible``variablePadding``constantSize``state_focused``state_window_focused``state_enabled``state_checkable``state_checked``state_selected``state_activated``state_active``state_single``state_first``state_middle``state_last``state_pressed`

Adapted from platform class; altered with API level checks as necessary &uses `ResourceManagerInternal` for `Drawable` inflation.

## Summary

| Public constructors |
| --- |
| `StateListDrawableCompat()`  Creates an empty state list drawable. |

| Public methods |
| --- |
| `void` | `addState(int[] stateSet, Drawable drawable)`  Add a new image/string ID to the set of images. |
| `void` | `applyTheme(@NonNull Resources.Theme theme)` |
| `void` | `inflate(     @NonNull Context context,     @NonNull Resources r,     @NonNull XmlPullParser parser,     @NonNull AttributeSet attrs,     @Nullable Resources.Theme theme )`  Inflate this Drawable from an XML resource optionally styled by a theme. |
| `boolean` | `isStateful()` |
| `@NonNull Drawable` | `mutate()` |

| Protected methods |
| --- |
| `boolean` | `onStateChange(@NonNull int[] stateSet)` |

| Inherited methods |
| --- |
| From [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) |  |  | | --- | --- | | `void` | `applyTheme(Resources.Theme t)` | | `boolean` | `canApplyTheme()` | | `void` | `clearColorFilter()` | | `final Rect` | `copyBounds()` | | `final void` | `copyBounds(Rect bounds)` | | `static Drawable` | `createFromPath(String pathName)` | | `static Drawable` | `createFromResourceStream(     Resources res,     TypedValue value,     InputStream is,     String srcName )` | | `static Drawable` | `createFromStream(InputStream is, String srcName)` | | `static Drawable` | `createFromXml(Resources r, XmlPullParser parser)` | | `static Drawable` | `createFromXmlInner(     Resources r,     XmlPullParser parser,     AttributeSet attrs )` | | `abstract void` | `draw(Canvas p)` | | `int` | `getAlpha()` | | `final Rect` | `getBounds()` | | `Drawable.Callback` | `getCallback()` | | `int` | `getChangingConfigurations()` | | `ColorFilter` | `getColorFilter()` | | `Drawable.ConstantState` | `getConstantState()` | | `Drawable` | `getCurrent()` | | `Rect` | `getDirtyBounds()` | | `void` | `getHotspotBounds(Rect outRect)` | | `int` | `getIntrinsicHeight()` | | `int` | `getIntrinsicWidth()` | | `int` | `getLayoutDirection()` | | `final int` | `getLevel()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `abstract int` | `getOpacity()`  **This method is deprecated.** | | `Insets` | `getOpticalInsets()` | | `void` | `getOutline(Outline outline)` | | `boolean` | `getPadding(Rect padding)` | | `int[]` | `getState()` | | `Region` | `getTransparentRegion()` | | `boolean` | `hasFocusStateSpecified()` | | `void` | `inflate(Resources r, XmlPullParser parser, AttributeSet attrs)` | | `void` | `invalidateSelf()` | | `boolean` | `isAutoMirrored()` | | `boolean` | `isFilterBitmap()` | | `boolean` | `isProjected()` | | `boolean` | `isStateful()` | | `final boolean` | `isVisible()` | | `void` | `jumpToCurrentState()` | | `Drawable` | `mutate()` | | `void` | `onBoundsChange(Rect bounds)` | | `boolean` | `onLayoutDirectionChanged(int layoutDirection)` | | `boolean` | `onLevelChange(int level)` | | `boolean` | `onStateChange(int[] state)` | | `static int` | `resolveOpacity(int op1, int op2)` | | `void` | `scheduleSelf(Runnable what, long when)` | | `abstract void` | `setAlpha(int p)` | | `void` | `setAutoMirrored(boolean mirrored)` | | `void` | `setBounds(Rect bounds)` | | `final void` | `setCallback(Drawable.Callback cb)` | | `void` | `setChangingConfigurations(int configs)` | | `abstract void` | `setColorFilter(ColorFilter p)` | | `void` | `setDither(boolean dither)`  **This method is deprecated.** | | `void` | `setFilterBitmap(boolean filter)` | | `void` | `setHotspot(float x, float y)` | | `void` | `setHotspotBounds(int left, int top, int right, int bottom)` | | `final boolean` | `setLayoutDirection(int layoutDirection)` | | `final boolean` | `setLevel(int level)` | | `boolean` | `setState(int[] stateSet)` | | `void` | `setTint(int tintColor)` | | `void` | `setTintBlendMode(BlendMode blendMode)` | | `void` | `setTintList(ColorStateList tint)` | | `void` | `setTintMode(PorterDuff.Mode tintMode)` | | `boolean` | `setVisible(boolean visible, boolean restart)` | | `void` | `unscheduleSelf(Runnable what)` | |
| From [android.graphics.drawable.Drawable.Callback](https://developer.android.com/reference/android/graphics/drawable/Drawable.Callback.html) |  |  | | --- | --- | | `abstract void` | `invalidateDrawable(Drawable p)` | | `abstract void` | `scheduleDrawable(Drawable p, Runnable p1, long p2)` | | `abstract void` | `unscheduleDrawable(Drawable p, Runnable p1)` | |
| From [androidx.appcompat.graphics.drawable.DrawableContainerCompat](/reference/androidx/appcompat/graphics/drawable/DrawableContainerCompat) |  |  | | --- | --- | | `boolean` | `canApplyTheme()` | | `void` | `draw(@NonNull Canvas canvas)` | | `int` | `getAlpha()` | | `int` | `getChangingConfigurations()` | | `final Drawable.ConstantState` | `getConstantState()` | | `@NonNull Drawable` | `getCurrent()` | | `void` | `getHotspotBounds(@NonNull Rect outRect)` | | `int` | `getIntrinsicHeight()` | | `int` | `getIntrinsicWidth()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `int` | `getOpacity()`  **This method is deprecated.** | | `void` | `getOutline(@NonNull Outline outline)` | | `boolean` | `getPadding(@NonNull Rect padding)` | | `void` | `invalidateDrawable(@NonNull Drawable who)` | | `boolean` | `isAutoMirrored()` | | `void` | `jumpToCurrentState()` | | `void` | `onBoundsChange(Rect bounds)` | | `boolean` | `onLayoutDirectionChanged(int layoutDirection)` | | `boolean` | `onLevelChange(int level)` | | `void` | `scheduleDrawable(@NonNull Drawable who, @NonNull Runnable what, long when)` | | `void` | `setAlpha(int alpha)` | | `void` | `setAutoMirrored(boolean mirrored)` | | `void` | `setColorFilter(ColorFilter colorFilter)` | | `void` | `setDither(boolean dither)`  **This method is deprecated.** | | `void` | `setEnterFadeDuration(int ms)`  Change the global fade duration when a new drawable is entering the scene. | | `void` | `setExitFadeDuration(int ms)`  Change the global fade duration when a new drawable is leaving the scene. | | `void` | `setHotspot(float x, float y)` | | `void` | `setHotspotBounds(int left, int top, int right, int bottom)` | | `void` | `setTint(@ColorInt int tintColor)` | | `void` | `setTintList(ColorStateList tint)` | | `void` | `setTintMode(@NonNull PorterDuff.Mode tintMode)` | | `boolean` | `setVisible(boolean visible, boolean restart)` | | `void` | `unscheduleDrawable(@NonNull Drawable who, @NonNull Runnable what)` | |

## Public constructors

### StateListDrawableCompat

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public StateListDrawableCompat()
```

Creates an empty state list drawable.

## Public methods

### addState

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void addState(int[] stateSet, Drawable drawable)
```

Add a new image/string ID to the set of images.

| Parameters |
| --- |
| `int[] stateSet` | - An array of resource Ids to associate with the image. Switch to this image by calling setState(). |
| `Drawable drawable` | -The image to show. |

### applyTheme

```
public void applyTheme(@NonNull Resources.Theme theme)
```

### inflate

Added in [1.6.0](/jetpack/androidx/releases/appcompat#1.6.0)

```
public void inflate(  
    @NonNull Context context,  
    @NonNull Resources r,  
    @NonNull XmlPullParser parser,  
    @NonNull AttributeSet attrs,  
    @Nullable Resources.Theme theme  
)
```

Inflate this Drawable from an XML resource optionally styled by a theme. This can't be called more than once for each Drawable.

| Parameters |
| --- |
| `@NonNull Context context` | The context in which the inflation takes place |
| `@NonNull Resources r` | Resources used to resolve attribute values |
| `@NonNull XmlPullParser parser` | XML parser from which to inflate this Drawable |
| `@NonNull AttributeSet attrs` | Base set of attribute values |
| `@Nullable Resources.Theme theme` | Theme to apply, may be null |

| Throws |
| --- |
| `org.xmlpull.v1.XmlPullParserException` |  |
| `java.io.IOException` |  |

### isStateful

```
public boolean isStateful()
```

### mutate

```
public @NonNull Drawable mutate()
```

## Protected methods

### onStateChange

```
protected boolean onStateChange(@NonNull int[] stateSet)
```