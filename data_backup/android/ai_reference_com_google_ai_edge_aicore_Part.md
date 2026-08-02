--- source: https://developer.android.com/ai/reference/com/google/ai/edge/aicore/Part ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [AI](https://developer.android.com/ai)
* [Reference](https://developer.android.com/ai/reference)

Send feedback



Stay organized with collections

Save and categorize content based on your preferences.





# Part

---

[Kotlin](/ai/reference/kotlin/com/google/ai/edge/aicore/Part "View this page in Kotlin")
|Java

```
public interface Part
```

Known direct subclasses

[TextPart](/ai/reference/com/google/ai/edge/aicore/TextPart)

|  |  |
| --- | --- |
| `TextPart` | Represents text or string based data sent to and received from requests. |

---

Interface representing data sent to and received from requests.

`TextPart` representing text or string based data.

## Summary

| Extension functions |
| --- |
| `default final String` | `PartKt.asTextOrNull(@NonNull Part receiver)` |

## Extension functions

### PartKt.asTextOrNull

```
default final String PartKt.asTextOrNull(@NonNull Part receiver)
```

| Returns |
| --- |
| `String` | The part as a `String` if it represents text, and null otherwise |






Send feedback