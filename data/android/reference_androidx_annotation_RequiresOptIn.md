# RequiresOptIn

[//]: # (source: [developer.android.com](https://developer.android.com/reference/androidx/annotation/RequiresOptIn))

Artifact: [androidx.annotation:annotation-experimental](/jetpack/androidx/releases/annotation)

[View Source](https://cs.android.com/search?q=file:androidx/annotation/RequiresOptIn.kt+class:androidx.annotation.RequiresOptIn)

Added in [1.1.0](/jetpack/androidx/releases/annotation#1.1.0)

---

[Kotlin](/reference/kotlin/androidx/annotation/RequiresOptIn "View this page in Kotlin")
|Java

```
@Retention(value = AnnotationRetention.BINARY)  
@Target(allowedTargets = [AnnotationTarget.ANNOTATION_CLASS])  
public annotation RequiresOptIn
```

---

Denotes that the annotated element is a marker of an opt-in API.

Any declaration annotated with this marker is considered part of an unstable or otherwise non-standard API surface and its call sites should accept the opt-in aspect of it either by using `OptIn` or by being annotated with that marker themselves, effectively causing further propagation of that opt-in aspect.

```
// Marker definition  
  
@Retention(CLASS)  
@Target({TYPE, METHOD, CONSTRUCTOR, FIELD, PACKAGE})  
@RequiresOptIn(level = Level.ERROR)  
public @interface ExperimentalDateTime {}  
  
@ExperimentalDateTime  
public class DateProvider {  
  // ...  
}  
  
// Client code  
  
int getYear() {  
  DateProvider provider; // Error: DateProvider is experimental  
  // ...  
}  
  
@ExperimentalDateTime  
Date getDate() {  
  DateProvider provider; // OK: the function is marked as experimental  
  // ...  
}  
  
void displayDate() {  
  System.out.println(getDate()); // Error: getDate() is experimental, acceptance is required  
}
```

To configure project-wide opt-in, specify the `opt-in` option value in `lint.xml` as a comma-delimited list of opted-in annotations:

```
<lint>  
  <issue id="$issueId">  
    <option name="opt-in" value="com.foo.ExperimentalBarAnnotation" />  
  </issue>  
</lint>
```

## Summary

| Nested types |
| --- |
| `public enum RequiresOptIn.Level extends Enum`  Severity of the diagnostic that should be reported on usages of opt-in API which did not explicitly accept the opt-in aspect of that API either by: |

| Public constructors |
| --- |
| `RequiresOptIn(@NonNull RequiresOptIn.Level level, @NonNull String message)` |

| Public methods |
| --- |
| `final @NonNull RequiresOptIn.Level` | `getLevel()`  Defines the reporting level for incorrect usages of this opt-in API. |
| `final @NonNull String` | `getMessage()`  Message to be reported on usages of API without an explicit opt-in, or empty string for the default message. |

## Public constructors

### RequiresOptIn

Added in [1.6.0](/jetpack/androidx/releases/annotation#1.6.0)

```
public RequiresOptIn(@NonNull RequiresOptIn.Level level, @NonNull String message)
```

## Public methods

### getLevel

```
public final @NonNull RequiresOptIn.Level getLevel()
```

Defines the reporting level for incorrect usages of this opt-in API.

### getMessage

```
public final @NonNull String getMessage()
```

Message to be reported on usages of API without an explicit opt-in, or empty string for the default message. The default message is: "This declaration is experimental and its usage should be marked with 'Marker' or '@OptIn(Marker::class)'", where Marker is the opt-in requirement marker.
