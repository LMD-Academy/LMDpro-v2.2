--- source: https://developer.android.com/reference/androidx/activity/ExperimentalActivityApi ---

* [Android Developers](https://developer.android.com/)
* [Develop](https://developer.android.com/develop)
* [API reference](https://developer.android.com/reference)

Stay organized with collections

Save and categorize content based on your preferences.





# ExperimentalActivityApi

Artifact: [androidx.activity:activity](/jetpack/androidx/releases/activity)

[View Source](https://cs.android.com/search?q=file:androidx/activity/ExperimentalActivityApi.kt+class:androidx.activity.ExperimentalActivityApi)

Added in [1.12.0](/jetpack/androidx/releases/activity#1.12.0)

---

[Kotlin](/reference/kotlin/androidx/activity/ExperimentalActivityApi "View this page in Kotlin")
|Java

```
@RequiresOptIn(message = "This API is experimental and may change or be removed in the future.")  
@Retention(value = AnnotationRetention.BINARY)  
public annotation ExperimentalActivityApi
```

---

Marks declarations that are **experimental** in the Activity APIs. This means the design and behavior of the annotated elements are not yet finalized and may change in future releases.

Experimental APIs are provided to gather feedback and validate new functionality before stabilizing. Use of these APIs requires explicit opt-in.

Roughly speaking, these declarations may be deprecated, removed, or have their semantics changed in a way that could break existing code.

## Summary

| Public constructors |
| --- |
| `ExperimentalActivityApi()` |

## Public constructors

### ExperimentalActivityApi

```
public ExperimentalActivityApi()
```