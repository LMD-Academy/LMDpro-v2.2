# BackEventCompat

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/activity/BackEventCompat))

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/BackEventCompat.kt+class:androidx.activity.BackEventCompat)

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

---

[Kotlin](/reference/kotlin/androidx/activity/BackEventCompat "View this page in Kotlin")
|Java

```
public final class BackEventCompat
```

---

Compat around the `BackEvent` class

## Summary

| Constants |
| --- |
| `static final int` | `EDGE_LEFT = 0`  Indicates that the edge swipe starts from the left edge of the screen |
| `static final int` | `EDGE_NONE = 2`  Indicates that the back event was not triggered by an edge swipe back gesture. |
| `static final int` | `EDGE_RIGHT = 1`  Indicates that the edge swipe starts from the right edge of the screen |

| Public constructors |
| --- |
| `@RequiresApi(value = 34) BackEventCompat(@NonNull BackEvent backEvent)`  Constructs a `BackEventCompat` from a `BackEvent` object. |
| `BackEventCompat(@NonNull NavigationEvent navigationEvent)`  Constructs a `BackEventCompat` from a `NavigationEvent` object. |
| `@VisibleForTesting BackEventCompat(     float touchX,     float touchY,     @FloatRange(from = 0.0, to = 1.0) float progress,     int swipeEdge,     long frameTimeMillis )` |

| Public methods |
| --- |
| `final long` | `getFrameTimeMillis()`  Frame time of the back event. |
| `final float` | `getProgress()`  Value between 0 and 1 on how far along the back gesture is. |
| `final int` | `getSwipeEdge()`  Indicates which edge the swipe starts from. |
| `final float` | `getTouchX()`  Absolute X location of the touch point of this event in the coordinate space of the view that |
| `final float` | `getTouchY()`  Absolute Y location of the touch point of this event in the coordinate space of the view that received this back event. |
| `final @NonNull BackEvent` | `@RequiresApi(value = 34) toBackEvent()`  Convert this `BackEventCompat` object to a `BackEvent` object. |
| `final @NonNull NavigationEvent` | `toNavigationEvent()`  Convert this `BackEventCompat` object to a `NavigationEvent` object. |
| `@NonNull String` | `toString()` |

## Constants

### EDGE\_LEFT

```
public static final int EDGE_LEFT = 0
```

Indicates that the edge swipe starts from the left edge of the screen

### EDGE\_NONE

```
public static final int EDGE_NONE = 2
```

Indicates that the back event was not triggered by an edge swipe back gesture. This applies to cases like using the back button in 3-button navigation or pressing a hardware back button.

### EDGE\_RIGHT

```
public static final int EDGE_RIGHT = 1
```

Indicates that the edge swipe starts from the right edge of the screen

## Public constructors

### BackEventCompat

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@RequiresApi(value = 34)  
public BackEventCompat(@NonNull BackEvent backEvent)
```

Constructs a `BackEventCompat` from a `BackEvent` object.

This constructor is used for API level 34 and above, mapping the `BackEvent`'s properties to the corresponding values in `BackEventCompat`.

| Parameters |
| --- |
| `@NonNull BackEvent backEvent` | The `BackEvent` instance to convert. |

### BackEventCompat

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

```
public BackEventCompat(@NonNull NavigationEvent navigationEvent)
```

Constructs a `BackEventCompat` from a `NavigationEvent` object.

This constructor is used for compatibility with `NavigationEvent` and maps its properties to the corresponding values in `BackEventCompat`.

| Parameters |
| --- |
| `@NonNull NavigationEvent navigationEvent` | The `NavigationEvent` instance to convert. |

### BackEventCompat

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
@VisibleForTesting  
public BackEventCompat(  
    float touchX,  
    float touchY,  
    @FloatRange(from = 0.0, to = 1.0) float progress,  
    int swipeEdge,  
    long frameTimeMillis  
)
```

## Public methods

### getFrameTimeMillis

Added in [1.11.0](/jetpack/androidx/releases/activity#1.11.0)

```
public final long getFrameTimeMillis()
```

Frame time of the back event.

### getProgress

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public final float getProgress()
```

Value between 0 and 1 on how far along the back gesture is.

### getSwipeEdge

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public final int getSwipeEdge()
```

Indicates which edge the swipe starts from.

### getTouchX

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public final float getTouchX()
```

Absolute X location of the touch point of this event in the coordinate space of the view that

* received this back event.

### getTouchY

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
public final float getTouchY()
```

Absolute Y location of the touch point of this event in the coordinate space of the view that received this back event.

### toBackEvent

Added in [1.8.0](/jetpack/androidx/releases/activity#1.8.0)

```
@RequiresApi(value = 34)  
public final @NonNull BackEvent toBackEvent()
```

Convert this `BackEventCompat` object to a `BackEvent` object.

| Returns |
| --- |
| `@NonNull BackEvent` | A new `BackEvent` object populated with this `BackEventCompat` data. |

| Throws |
| --- |
| `UnsupportedOperationException` | if this API is called on an API prior to 34. |

### toNavigationEvent

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

```
public final @NonNull NavigationEvent toNavigationEvent()
```

Convert this `BackEventCompat` object to a `NavigationEvent` object.

| Returns |
| --- |
| `@NonNull NavigationEvent` | A new `NavigationEvent` object populated with this `BackEventCompat` data. |

### toString

```
public @NonNull String toString()
```
