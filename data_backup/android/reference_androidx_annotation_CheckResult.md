--- source: https://developer.android.com/reference/androidx/annotation/CheckResult ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# CheckResult

Artifact: [androidx.annotation:annotation](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/CheckResult.kt+class:androidx.annotation.CheckResult)

Added in [1.0.0](/jetpack/androidx/releases/annotation#1.0.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/CheckResult "View this page in Kotlin")
|Java

```
@MustBeDocumented  
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER])  
public annotation CheckResult
```

---

Denotes that the annotated method returns a result that it typically is an error to ignore. This is usually used for methods that have no side effect, so calling it without actually looking at the result usually means the developer has misunderstood what the method does.

Example:

```
public @CheckResult String trim(String s) { return s.trim(); }  
...  
trim(s); // this is probably an error  
s = trim(s); // ok
```

## Summary

| Public constructors |
| --- |
| `CheckResult(@NonNull String suggest)` |

| Public methods |
| --- |
| `final @NonNull String` | `getSuggest()`  Defines the name of the suggested method to use instead, if applicable (using the same signature format as javadoc.) If there is more than one possibility, list them all separated by commas. |

## Public constructors

### CheckResult

Added in [1.10.0](/jetpack/androidx/releases/annotation#1.10.0)

```
public CheckResult(@NonNull String suggest)
```

## Public methods

### getSuggest

```
public final @NonNull String getSuggest()
```

Defines the name of the suggested method to use instead, if applicable (using the same signature format as javadoc.) If there is more than one possibility, list them all separated by commas.

For example, ProcessBuilder has a method named `redirectErrorStream()` which sounds like it might redirect the error stream. It does not. It's just a getter which returns whether the process builder will redirect the error stream, and to actually set it, you must call `redirectErrorStream(boolean)`. In that case, the method should be defined like this:

```
@CheckResult(suggest="#redirectErrorStream(boolean)")  
public boolean redirectErrorStream() { ... }
```