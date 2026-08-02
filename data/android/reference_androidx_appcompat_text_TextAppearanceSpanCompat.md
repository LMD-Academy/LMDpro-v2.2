# TextAppearanceSpanCompat

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/appcompat/text/TextAppearanceSpanCompat))

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/text/TextAppearanceSpanCompat.kt+class:androidx.appcompat.text.TextAppearanceSpanCompat)

Added in [1.8.0-alpha01](/jetpack/androidx/releases/appcompat#1.8.0-alpha01)

---

[Kotlin](/reference/kotlin/androidx/appcompat/text/TextAppearanceSpanCompat "View this page in Kotlin")
|Java

```
public final class TextAppearanceSpanCompat extends MetricAffectingSpan
```

|  |  |  |  |
| --- | --- | --- | --- |
| [java.lang.Object](https://developer.android.com/reference/java/lang/Object.html) | | | |
| ↳ | [android.text.style.CharacterStyle](https://developer.android.com/reference/android/text/style/CharacterStyle.html) | | |
|  | ↳ | [android.text.style.MetricAffectingSpan](https://developer.android.com/reference/android/text/style/MetricAffectingSpan.html) | |
|  |  | ↳ | [androidx.appcompat.text.TextAppearanceSpanCompat](/reference/androidx/appcompat/text/TextAppearanceSpanCompat) |

---

A TextAppearanceSpan works with Android X Downloadable Font

## Summary

| Public methods |
| --- |
| `static final @NonNull TextAppearanceSpanCompat` | `create(     @NonNull Context context,     int appearance,     int colorList,     @NonNull Executor executor,     @NonNull Runnable onComplete )`  Creates a TextAppearanceSpanCompat. |
| `void` | `updateDrawState(TextPaint ds)` |
| `void` | `updateMeasureState(@NonNull TextPaint ds)` |

| Inherited methods |
| --- |
| From [android.text.style.MetricAffectingSpan](https://developer.android.com/reference/android/text/style/MetricAffectingSpan.html) |  |  | | --- | --- | | `@NonNull MetricAffectingSpan` | `getUnderlying()` | |

## Public methods

### create

Added in [1.8.0-alpha01](/jetpack/androidx/releases/appcompat#1.8.0-alpha01)

```
public static final @NonNull TextAppearanceSpanCompat create(  
    @NonNull Context context,  
    int appearance,  
    int colorList,  
    @NonNull Executor executor,  
    @NonNull Runnable onComplete  
)
```

Creates a TextAppearanceSpanCompat.

The android:fontFamily may need to fetched asynchronously. The returned TextAppearanceSpanCompat may not immediately reflect the custom font, but it will be updated once the font is fetched. The provided callback will not be executed if the asynchronous fetch is not needed.

| Parameters |
| --- |
| `@NonNull Context context` | The context to use. |
| `int appearance` | The resource ID of a TextAppearance style. |
| `int colorList` | The resource ID of a ColorStateList. |
| `@NonNull Executor executor` | The executor to use for fetching the font. |
| `@NonNull Runnable onComplete` | A runnable to be executed when the font fetching is complete. This runnable will be executed on the executor's thread. The client is responsible for invalidating the text layout if necessary. |

| Returns |
| --- |
| `@NonNull TextAppearanceSpanCompat` | A TextAppearanceSpanCompat. |

### updateDrawState

Added in [1.8.0-alpha01](/jetpack/androidx/releases/appcompat#1.8.0-alpha01)

```
public void updateDrawState(TextPaint ds)
```

### updateMeasureState

Added in [1.8.0-alpha01](/jetpack/androidx/releases/appcompat#1.8.0-alpha01)

```
public void updateMeasureState(@NonNull TextPaint ds)
```
