--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/ContentKt ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# ContentKt

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/package-summary "View this page in Kotlin")
|Java

```
public final class ContentKt
```

---

## Summary

| Public methods |
| --- |
| `static final @NonNull Content` | `content(     @Content.Role int role,     @ExtensionFunctionType @NonNull Function1<@NonNull Content.Builder, Unit> init )`  Function to construct content sent to and received in a DSL-like manner. |

## Public methods

### content

```
public static final @NonNull Content content(  
    @Content.Role int role,  
    @ExtensionFunctionType @NonNull Function1<@NonNull Content.Builder, Unit> init  
)
```

Function to construct content sent to and received in a DSL-like manner.

Contains a collection of text, image, and binary parts.

Example usage:

```
content(Role.MODEL) {  
  text("Example string")  
)
```






Send feedback