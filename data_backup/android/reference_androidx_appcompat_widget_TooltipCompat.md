--- source: https://developer.android.com/reference/androidx/appcompat/widget/TooltipCompat ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# TooltipCompat

Artifact: [androidx.appcompat:appcompat](/jetpack/androidx/releases/appcompat)

[View Source](https://cs.android.com/search?q=file:androidx/appcompat/widget/TooltipCompat.java+class:androidx.appcompat.widget.TooltipCompat)

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/appcompat/widget/TooltipCompat "View this page in Kotlin")
|Java

```
public class TooltipCompat
```

---

Helper class used to emulate the behavior of `setTooltipText` prior to API level 26.

## Summary

| Public methods |
| --- |
| `static void` | `setTooltipText(@NonNull View view, @Nullable CharSequence tooltipText)`  Sets the tooltip text for the view. |

## Public methods

### setTooltipText

Added in [1.1.0](/jetpack/androidx/releases/appcompat#1.1.0)

```
public static void setTooltipText(@NonNull View view, @Nullable CharSequence tooltipText)
```

Sets the tooltip text for the view.

On API 26 and later, this method calls through to `setTooltipText`.

Prior to API 26, this method sets or clears (when tooltipText is `null`) the view's `OnLongClickListener` and `OnHoverListener`. A tooltip-like sub-panel will be created on long-click or mouse hover.

| Parameters |
| --- |
| `@NonNull View view` | the view on which to set the tooltip text |
| `@Nullable CharSequence tooltipText` | the tooltip text |