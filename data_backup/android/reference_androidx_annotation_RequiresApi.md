--- source: https://developer.android.com/reference/androidx/annotation/RequiresApi ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# RequiresApi

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresApi.+class:androidx.annotation.RequiresApi)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresApi "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FIELD, AnnotationTarget.FILE])  
@OptionalExpectation  
public annotation RequiresApi
```

---

Denotes that the annotated element should only be called on the given Android API level or higher.

This is similar in purpose to the older `@TargetApi` annotation, but more clearly expresses that this is a requirement on the caller, rather than being used to "suppress" warnings within the method that exceed the `minSdkVersion`.

For API requirements on SDK extensions, see the androidx.annotation.RequiresExtension annotation.

## Summary

| Public constructors |
| --- |
| `RequiresApi(@IntRange(from = 1) int value, @IntRange(from = 1) int api)` |

| Public methods |
| --- |
| `final int` | `getApi()`  The API level to require |
| `final int` | `getValue()`  The API level to require. |

## Public constructors

### RequiresApi

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public RequiresApi(@IntRange(from = 1) int value, @IntRange(from = 1) int api)
```

## Public methods

### getApi

```
public final int getApi()
```

The API level to require

### getValue

```
public final int getValue()
```

The API level to require. Alias for .api which allows you to leave out the `api=` part.