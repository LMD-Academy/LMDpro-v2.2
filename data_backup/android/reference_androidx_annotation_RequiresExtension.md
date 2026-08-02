--- source: https://developer.android.com/reference/androidx/annotation/RequiresExtension ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# RequiresExtension

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresExtension.jvm.kt+class:androidx.annotation.RequiresExtension)

Added in [1.6.0](/jetpack/androidx/releases/annotation#1.6.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresExtension "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS, AnnotationTarget.CLASS, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR, AnnotationTarget.FIELD, AnnotationTarget.FILE])  
@Target(value = [ElementType.ANNOTATION_TYPE, ElementType.TYPE, ElementType.METHOD, ElementType.CONSTRUCTOR, ElementType.FIELD, ElementType.PACKAGE])  
@Repeatable  
public annotation RequiresExtension
```

---

Denotes that the annotated element should only be called if the given extension is at least the given version.

This annotation is repeatable, and if specified multiple times, you are required to have one of (not all of) the specified extension versions.

Example:

```
@RequiresExtension(extension = Build.VERSION_CODES.R, version = 3)  
fun methodUsingApisFromR() { ... }
```

For the special case of `extension` == 0, you can instead use the `RequiresApi` annotation; `@RequiresApi(30)` is equivalent to `@RequiresExtension(extension=0, version=30)`.

## Summary

| Public constructors |
| --- |
| `RequiresExtension(     @IntRange(from = 1) int extension,     @IntRange(from = 1) int version )` |

| Public methods |
| --- |
| `final int` | `getExtension()`  The extension SDK ID. |
| `final int` | `getVersion()`  The minimum version to require |

## Public constructors

### RequiresExtension

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public RequiresExtension(  
    @IntRange(from = 1) int extension,  
    @IntRange(from = 1) int version  
)
```

## Public methods

### getExtension

```
public final int getExtension()
```

The extension SDK ID. This corresponds to the extension id's allowed by `android.os.ext.SdkExtensions.getExtensionVersion`, and for id values less than 1\_000\_000 is one of the `android.os.Build.VERSION_CODES`.

### getVersion

```
public final int getVersion()
```

The minimum version to require