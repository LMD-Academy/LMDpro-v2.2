# Content

[//]: # (source: [developer.android.com](https://developer.android.com/ai/reference/com/google/ai/edge/aicore/Content))

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/Content "View this page in Kotlin")
|Java

```
public final class Content
```

---

Represents content sent to and received from the model.

| See also |
| --- |
| `content` |  |

## Summary

| Nested types |
| --- |
| `public final class Content.Builder` |
| `public static class Content.Companion` |
| `@IntDef(value = [0, 1]) public annotation Content.Role`  Role associated with `Content` |

| Public methods |
| --- |
| `final @NonNull List<@NonNull Part>` | `getParts()` |
| `final int` | `getRole()` |

## Public methods

### getParts

```
public final @NonNull List<@NonNull Part> getParts()
```

### getRole

```
public final int getRole()
```

Send feedback
