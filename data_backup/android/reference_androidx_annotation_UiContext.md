--- source: https://developer.android.com/reference/androidx/annotation/UiContext ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# UiContext

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/UiContext.jvm.kt+class:androidx.annotation.UiContext)

Added in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/UiContext "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD])  
public annotation UiContext
```

---

Denotes a `android.content.Context` that can be used to create UI, meaning that it can provide a `android.view.Display` via `android.content.Context.getDisplay` and can be used to obtain an instance of a UI-related service, such as `android.view.WindowManager`, `android.view.LayoutInflater` or `android.app.WallpaperManager` via `android.content.Context.getSystemService`. A `android.content.Context` which is marked as `UiContext` implies that the `android.content.Context` is also a `DisplayContext`.

This kind of `android.content.Context` is usually an `android.app.Activity` or an instance created via `android.content.Context.createWindowContext`. The `android.content.res.Configuration` for these types of Context types is correctly adjusted to the visual bounds of your window so it can be used to get the correct values for {link android.view.WindowMetrics} and other UI related queries.

This is a marker annotation and has no specific attributes.

| See also |
| --- |
| `getDisplay` |  |
| `getSystemService` |  |
| `getSystemService` |  |
| `createWindowContext` |  |
| `DisplayContext` |  |

## Summary

| Public constructors |
| --- |
| `UiContext()` |

## Public constructors

### UiContext

```
public UiContext()
```