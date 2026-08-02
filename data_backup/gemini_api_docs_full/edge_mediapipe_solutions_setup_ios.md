--- source: https://ai.google.dev/edge/mediapipe/solutions/setup_ios ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [MediaPipe](https://developers.google.com/edge/mediapipe/solutions/guide)

Send feedback

# Setup guide for iOS Stay organized with collections Save and categorize content based on your preferences.



This page shows you how to set up your development environment to use MediaPipe
Tasks in your iOS applications.

## Supported devices and platforms

To create iOS applications with MediaPipe Tasks, your development environment
requires the following:

* macOS Mojave 10.14.3 or greater.
* [Xcode](https://developer.apple.com/support/xcode/) 10.3 or greater.
* iOS device with at least iOS 12.0. Alternatively, an iOS simulator can
  handle applications that don't require the device camera.

**Note:** MediaPipe Tasks only supports 64 bit iOS simulators (arm64 and x86\_64) and
devices (arm64). 32 bit architectures (i386 and armv7) are not supported.

## Developer environment setup

Before running a MediaPipe task on an iOS application, you must either have an
existing Xcode project or create a new one on your local machine.

MediaPipe Tasks can only be installed using [CocoaPods](https://cocoapods.org/).
You must install CocoaPods 1.12.1 or greater before getting started. For
instructions to install CocoaPods on macOS, refer to the [CocoaPods installation
guide](https://guides.cocoapods.org/using/getting-started.html).

## Example code setup

The [MediaPipe
Examples](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples)
repository contains example iOS applications for MediaPipe tasks.

You can create a project from the example code, build the project, and run the
task. The following steps builds the [Text
Classifier](https://github.com/google-ai-edge/mediapipe-samples/tree/main/examples/text_classification/ios)
task.

To import and build the example code project:

1. Open the terminal, clone the MediaPipe Examples repository, and navigate to
   the directory containing the `TextClassifier.xcodeproj` and `Podfile`.

   ```
   git clone https://github.com/google-ai-edge/mediapipe-samples
   cd mediapipe-samples/examples/text_classification/ios
   ```
2. Install MediaPipe Tasks using CocoaPods:

   ```
   pod install
   ```

   This command creates a `TextClassifier.xcworkspace` file in the example
   project directory.
3. Double-click the `TextClassifier.xcworkspace` file to open the project in
   Xcode. If the `TextClassifier.xcodeproj` file is already open, close it
   before opening the `TextClassifier.xcworkspace` file.
4. Select the `TextClassifier` scheme and choose a physical iOS device or
   simulator from the toolbar of your project window. When using a physical iOS
   device, ensure that it is connected to your Mac.
5. Click the `Run` button in your project's toolbar.

For more instructions on running an app on Xcode, refer to [Building and running
an
app](https://developer.apple.com/documentation/xcode/building-and-running-an-app).

## MediaPipe Tasks dependencies

MediaPipe Tasks provides two prebuilt libraries for vision and text. The
`.tflite` model file must be located in the bundle of the iOS application that
uses the model. Depending on the MediaPipe Tas, add either the vision or text
library to the list of pods within the CocoaPods `Podfile`. For instructions on
creating a `Podfile` with the required pods for your app, refer to [Using
CocoaPods](https://guides.cocoapods.org/using/using-cocoapods.html).

**Attention:** This MediaPipe Solutions Preview is an early release.
[Learn more](/edge/mediapipe/solutions/about#notice).

### Generative AI tasks

The MediaPipe Tasks Generative AI libraries contain tasks that handle image or
text generation. To install the MediaPipe Tasks Generative AI library, add the
`MediaPipeTasksGenAI` and `MediaPipeTasksGenAIC` pods to your app's target in
the `Podfile`.

#### LLM Inference API

The MediaPipe LLM Inference task is contained within the `MediaPipeTasksGenAI`
and `MediaPipeTasksGenAIC` pods.

```
target 'MyLlmInferenceApp' do
  use_frameworks!
  pod 'MediaPipeTasksGenAI'
  pod 'MediaPipeTasksGenAIC'
end
```

### Vision tasks

The MediaPipe Tasks vision library contains tasks that handle image or video
inputs. To install the MediaPipe Tasks vision library, add the
`MediaPipeTasksVision` pod to your app's target in the `Podfile`.

```
target 'MyAppWithMediaPipeTasksVision' do
  use_frameworks!
  pod 'MediaPipeTasksVision'
end
```

### Text tasks

The MediaPipe Tasks text library contains tasks that handle language data in
text format. To install the MediaPipe Tasks text library, add the
`MediaPipeTasksText` pod to your app's target in the `Podfile`

```
target 'MyAppWithMediaPipeTasksText' do
  use_frameworks!
  pod 'MediaPipeTasksText'
end
```

### Configure test targets

If your app has a test target, ensure that your Podfile adheres to either of the
following implementations to avoid any undesirable behaviour when using a
MediaPipe task library.

The simplest implementation is to ensure that the test target is not nested
within the main app target that adds the MediaPipe task pod.

```
target 'MyAppWithMediaPipeTasks' do
  pod 'MediaPipeTasksVision'
end

target 'MyAppWithMediaPipeTasksTests' do

end
```

If the test target must be nested within the main app target, the Podfile must
conform to the following implementation:

```
target 'MyAppWithMediaPipeTasks' do
  pod 'MediaPipeTasksVision'

    target 'MyAppWithMediaPipeTasksTests' do
      inherit! :none

    end
end
```

## BaseOptions configuration

The BaseOptions allow for general configuration of MediaPipe Task APIs.

| Option name | Description | Accepted values |
| --- | --- | --- |
| `modelAssetPath` | The model path to a model file in the iOS application bundle. | Path as a string. |

**Note:** The `modelAssetPath` path string must be be created using the iOS `Bundle`
class.

## Hardware acceleration

On iOS, MediaPipe Tasks only supports running models on standard CPU processors.

## Troubleshooting

For help with technical questions related to MediaPipe, visit the [discussion
group](https://groups.google.com/forum/#!forum/mediapipe) or [Stack
Overflow](https://stackoverflow.com/questions/tagged/mediapipe) for support from
the community. To report bugs or make feature requests, [file an issue on
GitHub](https://github.com/google/mediapipe/issues).

For help setting up your iOS development environment, visit the [Apple Developer
Documentation](https://developer.apple.com/tutorials/app-dev-training).






Send feedback