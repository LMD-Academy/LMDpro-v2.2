# Google Play Install Referrer Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [developer.android.com](https://developer.android.com/google/play/installreferrer))

You can use the Google Play Store's Install Referrer API to securely retrieve referral content
from Google Play, such as:

* The referrer URL of the installed package.
* The timestamp, in seconds, of when a referrer click happened (both client- and server-side).
* The timestamp, in seconds, of when an installation began (both client- and server-side).
* The app's version at the time when the app was first installed.
* Whether the user has interacted with your app's
  [instant experience](/topic/google-play-instant/overview) in the
  past 7 days.

## Requirements

The Install Referrer API is exposed by the Google Play Store app on a device. Devices with a
Google Play app version of 8.3.73 or later automatically have access to the API.

You must also have a Google Play Console account to use the Install Referrer API.

## Using the API

The Install Referrer API is implemented as an
[Android Interface Definition Language (AIDL)](/guide/components/aidl) interface.

* If you are using the Kotlin programming language or the Java programming language, use the
  [Play Install Referrer Client Library](/google/play/installreferrer/library)
  to simplify your coding.
* If you are using another programming language, use the
  [Play Install Referrer API](/google/play/installreferrer/igetinstallreferrerservice).
