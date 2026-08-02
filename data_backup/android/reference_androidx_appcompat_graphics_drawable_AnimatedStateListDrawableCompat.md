--- source: https://developer.android.com/reference/androidx/appcompat/graphics/drawable/AnimatedStateListDrawableCompat ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# AnimatedStateListDrawableCompat

Artifact: [androidx.appcompat:appcompat-resources](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/graphics/drawable/AnimatedStateListDrawableCompat.java+class:androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/graphics/drawable/AnimatedStateListDrawableCompat "View this page in Kotlin")
|Java

```
public class AnimatedStateListDrawableCompat extends StateListDrawableCompat
```

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | | |
| ↳ | [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) | | | |
|  | ↳ | [androidx.appcompat.graphics.drawable.DrawableContainerCompat](/reference/androidx/appcompat/graphics/drawable/DrawableContainerCompat) | | |
|  |  | ↳ | [androidx.appcompat.graphics.drawable.StateListDrawableCompat](/reference/androidx/appcompat/graphics/drawable/StateListDrawableCompat) | |
|  |  |  | ↳ | [androidx.appcompat.graphics.drawable.AnimatedStateListDrawableCompat](/reference/androidx/appcompat/graphics/drawable/AnimatedStateListDrawableCompat) |

---

A `Drawable` providing animated transitions between states.

A port of `android.graphics.drawable.AnimatedStateListDrawable` compatible with older versions of the platform.

This drawable can be defined in an XML file with the `<animated-selector>` element. Each keyframe Drawable is defined in a nested `<item>` element. Transitions are defined in a nested `<transition>` element.

Notable exceptions not supported by this class:

* `drawable`s defined as children of `<item>`s or `<transition>`s (**except** vectors) ignore theme attributes prior to API level 21
* Animated vector transitions do not support reversing prior to API level 24

`state_focused``state_window_focused``state_enabled``state_checkable``state_checked``state_selected``state_activated``state_active``state_single``state_first``state_middle``state_last``state_pressed`

## Summary

| Public constructors |
| --- |
| `AnimatedStateListDrawableCompat()` |

| Public methods |
| --- |
| `void` | `addState(@NonNull int[] stateSet, @NonNull Drawable drawable, int id)`  Add a new drawable to the set of keyframes. |
| `void` | `<T extends Drawable & Animatable> addTransition(     int fromId,     int toId,     @NonNull T transition,     boolean reversible )`  Adds a new transition between keyframes. |
| `static @Nullable AnimatedStateListDrawableCompat` | `create(     @NonNull Context context,     @DrawableRes int resId,     @Nullable Resources.Theme theme )`  Creates an AnimatedStateListDrawableCompat. |
| `static @NonNull AnimatedStateListDrawableCompat` | `createFromXmlInner(     @NonNull Context context,     @NonNull Resources resources,     @NonNull XmlPullParser parser,     @NonNull AttributeSet attrs,     @Nullable Resources.Theme theme )`  Create a AnimatedStateListDrawableCompat from inside an XML document using an optional `Resources.Theme`. |
| `void` | `inflate(     @NonNull Context context,     @NonNull Resources resources,     @NonNull XmlPullParser parser,     @NonNull AttributeSet attrs,     @Nullable Resources.Theme theme )`  Inflate this Drawable from an XML resource optionally styled by a theme. |
| `boolean` | `isStateful()` |
| `void` | `jumpToCurrentState()` |
| `@NonNull Drawable` | `mutate()` |
| `boolean` | `setVisible(boolean visible, boolean restart)` |

| Protected methods |
| --- |
| `boolean` | `onStateChange(@NonNull int[] stateSet)` |

| Inherited methods |
| --- |
| From [android.graphics.drawable.Drawable](https://developer.android.com/reference/android/graphics/drawable/Drawable.html) |  |  | | --- | --- | | `void` | `applyTheme(Resources.Theme t)` | | `boolean` | `canApplyTheme()` | | `void` | `clearColorFilter()` | | `final Rect` | `copyBounds()` | | `final void` | `copyBounds(Rect bounds)` | | `static Drawable` | `createFromPath(String pathName)` | | `static Drawable` | `createFromResourceStream(     Resources res,     TypedValue value,     InputStream is,     String srcName )` | | `static Drawable` | `createFromStream(InputStream is, String srcName)` | | `static Drawable` | `createFromXml(Resources r, XmlPullParser parser)` | | `static Drawable` | `createFromXmlInner(     Resources r,     XmlPullParser parser,     AttributeSet attrs )` | | `abstract void` | `draw(Canvas p)` | | `int` | `getAlpha()` | | `final Rect` | `getBounds()` | | `Drawable.Callback` | `getCallback()` | | `int` | `getChangingConfigurations()` | | `ColorFilter` | `getColorFilter()` | | `Drawable.ConstantState` | `getConstantState()` | | `Drawable` | `getCurrent()` | | `Rect` | `getDirtyBounds()` | | `void` | `getHotspotBounds(Rect outRect)` | | `int` | `getIntrinsicHeight()` | | `int` | `getIntrinsicWidth()` | | `int` | `getLayoutDirection()` | | `final int` | `getLevel()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `abstract int` | `getOpacity()`  **This method is deprecated.** | | `Insets` | `getOpticalInsets()` | | `void` | `getOutline(Outline outline)` | | `boolean` | `getPadding(Rect padding)` | | `int[]` | `getState()` | | `Region` | `getTransparentRegion()` | | `boolean` | `hasFocusStateSpecified()` | | `void` | `inflate(Resources r, XmlPullParser parser, AttributeSet attrs)` | | `void` | `invalidateSelf()` | | `boolean` | `isAutoMirrored()` | | `boolean` | `isFilterBitmap()` | | `boolean` | `isProjected()` | | `boolean` | `isStateful()` | | `final boolean` | `isVisible()` | | `void` | `jumpToCurrentState()` | | `Drawable` | `mutate()` | | `void` | `onBoundsChange(Rect bounds)` | | `boolean` | `onLayoutDirectionChanged(int layoutDirection)` | | `boolean` | `onLevelChange(int level)` | | `boolean` | `onStateChange(int[] state)` | | `static int` | `resolveOpacity(int op1, int op2)` | | `void` | `scheduleSelf(Runnable what, long when)` | | `abstract void` | `setAlpha(int p)` | | `void` | `setAutoMirrored(boolean mirrored)` | | `void` | `setBounds(Rect bounds)` | | `final void` | `setCallback(Drawable.Callback cb)` | | `void` | `setChangingConfigurations(int configs)` | | `abstract void` | `setColorFilter(ColorFilter p)` | | `void` | `setDither(boolean dither)`  **This method is deprecated.** | | `void` | `setFilterBitmap(boolean filter)` | | `void` | `setHotspot(float x, float y)` | | `void` | `setHotspotBounds(int left, int top, int right, int bottom)` | | `final boolean` | `setLayoutDirection(int layoutDirection)` | | `final boolean` | `setLevel(int level)` | | `boolean` | `setState(int[] stateSet)` | | `void` | `setTint(int tintColor)` | | `void` | `setTintBlendMode(BlendMode blendMode)` | | `void` | `setTintList(ColorStateList tint)` | | `void` | `setTintMode(PorterDuff.Mode tintMode)` | | `boolean` | `setVisible(boolean visible, boolean restart)` | | `void` | `unscheduleSelf(Runnable what)` | |
| From [android.graphics.drawable.Drawable.Callback](https://developer.android.com/reference/android/graphics/drawable/Drawable.Callback.html) |  |  | | --- | --- | | `abstract void` | `invalidateDrawable(Drawable p)` | | `abstract void` | `scheduleDrawable(Drawable p, Runnable p1, long p2)` | | `abstract void` | `unscheduleDrawable(Drawable p, Runnable p1)` | |
| From [androidx.appcompat.graphics.drawable.DrawableContainerCompat](/reference/androidx/appcompat/graphics/drawable/DrawableContainerCompat) |  |  | | --- | --- | | `boolean` | `canApplyTheme()` | | `void` | `draw(@NonNull Canvas canvas)` | | `int` | `getAlpha()` | | `int` | `getChangingConfigurations()` | | `final Drawable.ConstantState` | `getConstantState()` | | `@NonNull Drawable` | `getCurrent()` | | `void` | `getHotspotBounds(@NonNull Rect outRect)` | | `int` | `getIntrinsicHeight()` | | `int` | `getIntrinsicWidth()` | | `int` | `getMinimumHeight()` | | `int` | `getMinimumWidth()` | | `int` | `getOpacity()`  **This method is deprecated.** | | `void` | `getOutline(@NonNull Outline outline)` | | `boolean` | `getPadding(@NonNull Rect padding)` | | `void` | `invalidateDrawable(@NonNull Drawable who)` | | `boolean` | `isAutoMirrored()` | | `void` | `onBoundsChange(Rect bounds)` | | `boolean` | `onLayoutDirectionChanged(int layoutDirection)` | | `boolean` | `onLevelChange(int level)` | | `boolean` | `onStateChange(@NonNull int[] state)` | | `void` | `scheduleDrawable(@NonNull Drawable who, @NonNull Runnable what, long when)` | | `void` | `setAlpha(int alpha)` | | `void` | `setAutoMirrored(boolean mirrored)` | | `void` | `setColorFilter(ColorFilter colorFilter)` | | `void` | `setDither(boolean dither)`  **This method is deprecated.** | | `void` | `setEnterFadeDuration(int ms)`  Change the global fade duration when a new drawable is entering the scene. | | `void` | `setExitFadeDuration(int ms)`  Change the global fade duration when a new drawable is leaving the scene. | | `void` | `setHotspot(float x, float y)` | | `void` | `setHotspotBounds(int left, int top, int right, int bottom)` | | `void` | `setTint(@ColorInt int tintColor)` | | `void` | `setTintMode(@NonNull PorterDuff.Mode tintMode)` | | `void` | `unscheduleDrawable(@NonNull Drawable who, @NonNull Runnable what)` | |
| From [androidx.appcompat.graphics.drawable.StateListDrawableCompat](/reference/androidx/appcompat/graphics/drawable/StateListDrawableCompat) |  |  | | --- | --- | | `void` | `addState(int[] stateSet, Drawable drawable)`  Add a new image/string ID to the set of images. | | `void` | `applyTheme(@NonNull Resources.Theme theme)` | |

## Public constructors

### AnimatedStateListDrawableCompat

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public AnimatedStateListDrawableCompat()
```

## Public methods

### addState

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void addState(@NonNull int[] stateSet, @NonNull Drawable drawable, int id)
```

Add a new drawable to the set of keyframes.

| Parameters |
| --- |
| `@NonNull int[] stateSet` | An array of resource IDs to associate with the keyframe |
| `@NonNull Drawable drawable` | The drawable to show when in the specified state, may not be null |
| `int id` | The unique identifier for the keyframe |

### addTransition

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void <T extends Drawable & Animatable> addTransition(  
    int fromId,  
    int toId,  
    @NonNull T transition,  
    boolean reversible  
)
```

Adds a new transition between keyframes.

| Parameters |
| --- |
| `int fromId` | Unique identifier of the starting keyframe |
| `int toId` | Unique identifier of the ending keyframe |
| `@NonNull T transition` | An `Animatable` drawable to use as a transition, may not be null |
| `boolean reversible` | Whether the transition can be reversed |

### create

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static @Nullable AnimatedStateListDrawableCompat create(  
    @NonNull Context context,  
    @DrawableRes int resId,  
    @Nullable Resources.Theme theme  
)
```

Creates an AnimatedStateListDrawableCompat.

| Parameters |
| --- |
| `@NonNull Context context` | context to inflate against |
| `@DrawableRes int resId` | the resource ID for AnimatedStateListDrawable object. |
| `@Nullable Resources.Theme theme` | the theme to apply, may be null. |

| Returns |
| --- |
| `@Nullable AnimatedStateListDrawableCompat` | a new AnimatedStateListDrawableCompat or null if parsing error is found. |

### createFromXmlInner

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static @NonNull AnimatedStateListDrawableCompat createFromXmlInner(  
    @NonNull Context context,  
    @NonNull Resources resources,  
    @NonNull XmlPullParser parser,  
    @NonNull AttributeSet attrs,  
    @Nullable Resources.Theme theme  
)
```

Create a AnimatedStateListDrawableCompat from inside an XML document using an optional `Resources.Theme`. Called on a parser positioned at a tag in an XML document, tries to create an AnimatedStateListDrawableCompat from that tag.

| Throws |
| --- |
| `java.io.IOException` |  |
| `org.xmlpull.v1.XmlPullParserException` |  |

### inflate

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public void inflate(  
    @NonNull Context context,  
    @NonNull Resources resources,  
    @NonNull XmlPullParser parser,  
    @NonNull AttributeSet attrs,  
    @Nullable Resources.Theme theme  
)
```

Inflate this Drawable from an XML resource optionally styled by a theme. This can't be called more than once for each Drawable.

| Parameters |
| --- |
| `@NonNull Context context` | context to inflate against |
| `@NonNull Resources resources` | Resources used to resolve attribute values |
| `@NonNull XmlPullParser parser` | XML parser from which to inflate this Drawable |
| `@NonNull AttributeSet attrs` | Base set of attribute values |
| `@Nullable Resources.Theme theme` | Theme to apply, may be null |

| Throws |
| --- |
| `org.xmlpull.v1.XmlPullParserException` | if the XML is malformed |
| `java.io.IOException` | if the XML could not be read |

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
public @NonNull Drawable mutate()
```

### setVisible

```
public boolean setVisible(boolean visible, boolean restart)
```

## Protected methods

### onStateChange

```
protected boolean onStateChange(@NonNull int[] stateSet)
```