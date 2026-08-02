--- source: https://developer.android.com/blog/posts/upcoming-changes-to-the-nearby-connections-api ---

* [Android Developers](https://developer.android.com/)
* [Android Developers' Blog](https://developer.android.com/)
* [Blog](https://developer.android.com/blog)

Stay organized with collections

Save and categorize content based on your preferences.



[Documentation](/blog/categories/documentation)

# Upcoming Changes to the Nearby Connections API

1-min read

![](/static/blog/assets/Upcoming_Changes_to_the_Nearby_Connections_API_Strapi_11b1de50e2_K0lSy.webp)

20

Jul
2026

[![View Wei Wang's profile](/static/blog/assets/weiwa_web_6a7b6f6114_Z1kCd5W.webp)](/blog/authors/wei-wang)

[Wei Wang](/blog/authors/wei-wang)

Engineering Manager, Android BeTo

User privacy and transparency are core to the Android experience. To better align with these principles, we are updating the default behavior of the Nearby Connections API regarding how it interacts with device radios.

### **What is changing?**

Previously, the Nearby Connections API could automatically toggle Wi-Fi and Bluetooth radios ON to facilitate connections without explicit user intervention. Moving forward, the API will no longer automatically enable these radios for 1P and 3P applications.

### **What this means for developers**

If your app relies on Nearby Connections, you will need to update your implementation to account for these changes:

* **Manual Radio Management:**You must ensure that the necessary radios (Wi-Fi or Bluetooth) are enabled before initiating Nearby Connections tasks.
* **User Notification:**If the required radios are disabled, your app must now inform the user and request that they enable them manually. The API will no longer programmatically turn them on for you.

### **Timing**

These changes are scheduled to take effect in late 2026. We recommend reviewing your connection workflows now to ensure a seamless transition for your users.

Written by:

* ## [Wei Wang](/blog/authors/wei-wang)

  ###### Engineering Manager

  [read\_more
  View profile](/blog/authors/wei-wang)

  ![View Wei Wang's profile](/static/blog/assets/weiwa_web_6a7b6f6114_Z1kCd5W.webp)

  ![View Wei Wang's profile](/static/blog/assets/weiwa_web_6a7b6f6114_Z1kCd5W.webp)

Continue reading

* [![View Jonathan Starup's profile](/static/blog/assets/unnamed_10_16ef5ad5c7_Z1s2HD7.webp)](/blog/authors/jonathan-starup)[![View Andrei Shikov's profile](/static/blog/assets/unnamed_9_1eaaffc6a9_EPI3Y.webp)](/blog/authors/andrei-shikov)

  27

  Jul
  2026

  27

  Jul
  2026

  ![](/static/blog/assets/0707_Faster_Kotlin_coroutines_on_Android_with_R8_Strapi_5b162a2623_ZM78f7.webp)

  [Case Studies](/blog/categories/case-studies)

  ## [How R8 made Kotlin Coroutines on Android 2x faster](/blog/posts/how-r8-made-kotlin-coroutines-on-android-2x-faster)

  [arrow\_forward](/blog/posts/how-r8-made-kotlin-coroutines-on-android-2x-faster)

  With the majority of Android apps adopting Kotlin as their main language of choice, kotlinx.coroutines has become a de-facto standard for asynchronous programming. The library offers a well-designed and structured way of managing concurrent flows that is native to Kotlin.

  [Jonathan Starup](/blog/authors/jonathan-starup),
  [Andrei Shikov](/blog/authors/andrei-shikov)
  •
  7 min read
  + [#Compose](/blog/topics/compose)
  + [#R8](/blog/topics/r8)
  + [#coroutines](/blog/topics/coroutines)
  + +1
    ↩
* [![View Fahd Imtiaz's profile](/static/blog/assets/Fahd_Imtiaz_259fcb7c47_Z15U8cx.webp)](/blog/authors/fahd-imtiaz)[![View Miguel Montemayor's profile](/static/blog/assets/miguel_montemayor_552207c1c6_Z1tItyG.webp)](/blog/authors/miguel-montemayor)

  23

  Jul
  2026

  23

  Jul
  2026

  ![](/static/blog/assets/MM_Adaptive_and_device_Meta_18e67bafd8_Z1BKgnT.webp)

  ## [Optimize your apps for the next generation of Samsung Galaxy devices](/blog/posts/optimize-your-apps-for-the-next-generation-of-samsung-galaxy-devices)

  [arrow\_forward](/blog/posts/optimize-your-apps-for-the-next-generation-of-samsung-galaxy-devices)

  Today at Galaxy Unpacked, Samsung unveiled its latest lineup of foldable and wearable devices. For developers, this means that the variety of form factors, screen sizes, and device postures your app needs to support is expanding once again.

  [Fahd Imtiaz](/blog/authors/fahd-imtiaz),
  [Miguel Montemayor](/blog/authors/miguel-montemayor)
  •
  3 min read
* [![View Caren Chang's profile](/static/blog/assets/Caren_Chang_e58d793559_1i40VV.webp)](/blog/authors/caren-chang)

  22

  Jul
  2026

  22

  Jul
  2026

  ![](/static/blog/assets/0625_Building_Jet_Packer_with_Intelligent_On_Device_features_Strapi_v02_3f5a8b17b0_1UrFxh.webp)

  [How-tos](/blog/categories/how-tos)

  ## [Build intelligent Android apps: On-device inference](/blog/posts/build-intelligent-android-apps-on-device-inference)

  [arrow\_forward](/blog/posts/build-intelligent-android-apps-on-device-inference)

  Welcome back to the blog post series "Build intelligent Android apps" where we take a basic Android app and transform it into a personalized, intelligent, and agentic experience. In our previous post we introduced Jetpacker, the demo app we'll use throughout this series.

  [Caren Chang](/blog/authors/caren-chang)
  •
  6 min read
  + [#Intelligent Apps](/blog/topics/intelligent-apps)

Stay in the loop

Get the latest Android development insights delivered to your inbox
weekly.

[mail
Subscribe](/subscribe)

![A 3D illustration of the Android mascot, wearing a jetpack that's emitting a large cloud of bubbles](/static/blog/assets/rocket-android.CVJQZOf1_1PnraM.webp)