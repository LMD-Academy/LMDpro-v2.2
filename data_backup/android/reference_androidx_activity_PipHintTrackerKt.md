--- source: https://developer.android.com/reference/androidx/activity/PipHintTrackerKt ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# PipHintTrackerKt

Added in 1.9.0

---

[Kotlin](/reference/kotlin/androidx/activity/package-summary "View this page in Kotlin")
|Java

```
public final class PipHintTrackerKt
```

---

## Summary

| Public methods |
| --- |
| `static final void` | `@RequiresApi(value = 26) trackPipAnimationHintView(@NonNull Activity receiver, @NonNull View view)`  Sets the `View` that will be used as reference to set the `PictureInPictureParams.Builder.setSourceRectHint`. |

## Public methods

### trackPipAnimationHintView

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/PipHintTracker.kt+function:trackPipAnimationHintView)

Added in [1.9.0](/jetpack/androidx/releases/activity#1.9.0)

```
@RequiresApi(value = 26)  
public static final void trackPipAnimationHintView(@NonNull Activity receiver, @NonNull View view)
```

Sets the `View` that will be used as reference to set the `PictureInPictureParams.Builder.setSourceRectHint`.

Anytime the view position changes, `Activity.setPictureInPictureParams` will be called with the updated view's position in window coordinates as the `PictureInPictureParams.Builder.setSourceRectHint`.

| Parameters |
| --- |
| `@NonNull View view` | the view to use as the reference for the source rect hint |