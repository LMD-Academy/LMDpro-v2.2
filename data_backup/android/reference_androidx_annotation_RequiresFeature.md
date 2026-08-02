--- source: https://developer.android.com/reference/androidx/annotation/RequiresFeature ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# RequiresFeature

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresFeature.kt+class:androidx.annotation.RequiresFeature)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresFeature "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.SOURCE)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FIELD, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR])  
public annotation RequiresFeature
```

---

Denotes that the annotated element requires one or more features. This is used to auto-generate documentation, and more importantly: to ensure correct usage in application code, where lint and Android Studio can check that calls marked with this annotation is surrounded by has-feature calls, referenced via the `RequiresFeature.enforcement` attribute.

## Summary

| Public constructors |
| --- |
| `RequiresFeature(@NonNull String name, @NonNull String enforcement)` |

| Public methods |
| --- |
| `final @NonNull String` | `getEnforcement()`  Defines the name of the method that should be called to check whether the feature is available, using the same signature format as javadoc. |
| `final @NonNull String` | `getName()`  The name of the feature that is required. |

## Public constructors

### RequiresFeature

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public RequiresFeature(@NonNull String name, @NonNull String enforcement)
```

## Public methods

### getEnforcement

```
public final @NonNull String getEnforcement()
```

Defines the name of the method that should be called to check whether the feature is available, using the same signature format as javadoc. The feature checking method can have multiple parameters, but the feature name parameter must be of type String and must also be the first String-type parameter.

### getName

```
public final @NonNull String getName()
```

The name of the feature that is required.