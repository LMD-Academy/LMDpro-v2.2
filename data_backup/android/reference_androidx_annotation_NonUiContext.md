--- source: https://developer.android.com/reference/androidx/annotation/NonUiContext ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# NonUiContext

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/NonUiContext.jvm.kt+class:androidx.annotation.NonUiContext)

Added in [1.3.0](/jetpack/androidx/releases/annotation#1.3.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/NonUiContext "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.VALUE_PARAMETER, AnnotationTarget.FIELD])  
public annotation NonUiContext
```

---

Denotes a `android.content.Context` that **can not** be used to obtain a `android.view.Display` via `android.content.Context.getDisplay` nor to obtain an instance of a visual service, such a `android.view.WindowManager`, `android.view.LayoutInflater` or `android.app.WallpaperManager` via `android.content.Context.getSystemService`.

This is a marker annotation and has no specific attributes.

| See also |
| --- |
| `getDisplay` |  |
| `getSystemService` |  |
| `getSystemService` |  |
| `UiContext` |  |
| `DisplayContext` |  |

## Summary

| Public constructors |
| --- |
| `NonUiContext()` |

## Public constructors

### NonUiContext

```
public NonUiContext()
```