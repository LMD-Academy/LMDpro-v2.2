--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/Content.Builder ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# Content.Builder

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/Content.Builder "View this page in Kotlin")
|Java

```
public final class Content.Builder
```

---

## Summary

| Public constructors |
| --- |
| `Builder()` |

| Public methods |
| --- |
| `final @NonNull <Error class: unknown class>` | `@CanIgnoreReturnValue <T extends Part> addPart(@NonNull T data)` |
| `final @NonNull <Error class: unknown class>` | `@CanIgnoreReturnValue addText(@NonNull String text)` |
| `final @NonNull Content` | `build()` |
| `final @NonNull List<@NonNull Part>` | `getParts()` |
| `final int` | `getRole()` |
| `final void` | `setParts(@NonNull List<@NonNull Part> parts)` |
| `final void` | `setRole(@Content.Role int role)` |

## Public constructors

### Builder

```
public Builder()
```

## Public methods

### addPart

```
@CanIgnoreReturnValue  
public final @NonNull <Error class: unknown class> <T extends Part> addPart(@NonNull T data)
```

### addText

```
@CanIgnoreReturnValue  
public final @NonNull <Error class: unknown class> addText(@NonNull String text)
```

### build

```
public final @NonNull Content build()
```

### getParts

```
public final @NonNull List<@NonNull Part> getParts()
```

### getRole

```
public final int getRole()
```

### setParts

```
public final void setParts(@NonNull List<@NonNull Part> parts)
```

### setRole

```
public final void setRole(@Content.Role int role)
```






Send feedback