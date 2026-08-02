# GuardedBy

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/GuardedBy))

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/GuardedBy.kt+class:androidx.annotation.GuardedBy)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/GuardedBy "View this page in Kotlin")
|Java

```
@Target(allowedTargets = [AnnotationTarget.FIELD, AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER])  
@Retention(value = AnnotationRetention.BINARY)  
public annotation GuardedBy
```

---

Denotes that the annotated method or field can only be accessed when holding the referenced lock.

Example:

```
final Object objectLock = new Object();  
  
@GuardedBy("objectLock")  
volatile Object object;  
  
Object getObject() {  
    synchronized (objectLock) {  
        if (object == null) {  
            object = new Object();  
        }  
    }  
    return object;  
}
```

## Summary

| Public constructors |
| --- |
| `GuardedBy(@NonNull String value)` |

| Public methods |
| --- |
| `final @NonNull String` | `getValue()` |

## Public constructors

### GuardedBy

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public GuardedBy(@NonNull String value)
```

## Public methods

### getValue

```
public final @NonNull String getValue()
```
