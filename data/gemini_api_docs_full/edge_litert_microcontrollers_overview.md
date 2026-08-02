# LiteRT for Microcontrollers Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/microcontrollers/overview))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

LiteRT for Microcontrollers is designed to run machine learning models
on microcontrollers and other devices with only a few kilobytes of memory. The
core runtime just fits in 16 KB on an Arm Cortex M3 and can run many basic
models. It doesn't require operating system support, any standard C or C++
libraries, or dynamic memory allocation.

**Note:** The
[LiteRT for Microcontrollers Experiments](https://experiments.withgoogle.com/collection/tfliteformicrocontrollers)
features work by developers combining Arduino and TensorFlow to create awesome
experiences and tools. Check out the site for inspiration to create your own
TinyML projects.

## Why microcontrollers are important

Microcontrollers are typically small, low-powered computing devices that are
embedded within hardware that requires basic computation. By bringing machine
learning to tiny microcontrollers, we can boost the intelligence of billions of
devices that we use in our lives, including household appliances and Internet of
Things devices, without relying on expensive hardware or reliable internet
connections, which is often subject to bandwidth and power constraints and
results in high latency. This can also help preserve privacy, since no data
leaves the device. Imagine smart appliances that can adapt to your daily
routine, intelligent industrial sensors that understand the difference between
problems and normal operation, and magical toys that can help kids learn in fun
and delightful ways.

## Supported platforms

LiteRT for Microcontrollers is written in C++ 17 and requires a 32-bit
platform. It has been tested extensively with many processors based on the
[Arm Cortex-M Series](https://developer.arm.com/ip-products/processors/cortex-m)
architecture, and has been ported to other architectures including
[ESP32](https://www.espressif.com/en/products/hardware/esp32/overview). The
framework is available as an Arduino library. It can also generate projects for
development environments such as Mbed. It is open source and can be included in
any C++ 17 project.

The following development boards are supported:

* [Arduino Nano 33 BLE Sense](https://store-usa.arduino.cc/products/arduino-nano-33-ble-sense-with-headers)
* [SparkFun Edge](https://www.sparkfun.com/products/15170)
* [STM32F746 Discovery kit](https://www.st.com/en/evaluation-tools/32f746gdiscovery.html)
* [Adafruit EdgeBadge](https://www.adafruit.com/product/4400)
* [Adafruit LiteRT for Microcontrollers Kit](https://www.adafruit.com/product/4317)
* [Adafruit Circuit Playground Bluefruit](https://learn.adafruit.com/tensorflow-lite-for-circuit-playground-bluefruit-quickstart?view=all)
* [Espressif ESP32-DevKitC](https://www.espressif.com/en/products/hardware/esp32-devkitc/overview)
* [Espressif ESP-EYE](https://www.espressif.com/en/products/hardware/esp-eye/overview)
* [Wio Terminal: ATSAMD51](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [Himax WE-I Plus EVB Endpoint AI Development Board](https://www.sparkfun.com/products/17256)
* [Synopsys DesignWare ARC EM Software Development Platform](https://www.synopsys.com/dw/ipdir.php?ds=arc-em-software-development-platform)
* [Sony Spresense](https://developer.sony.com/develop/spresense/)

## Explore the examples

Each example application is on
[GitHub](https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples)
and has a `README.md` file that explains how it can be deployed to its supported
platforms. Some examples also have end-to-end tutorials using a specific
platform, as given below:

* [Hello World](https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/hello_world) -
  Demonstrates the absolute basics of using LiteRT for
  Microcontrollers
  + [Tutorial using any supported device](https://developers.google.com/edge/litert/microcontrollers/get_started)
* [Micro speech](https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech) -
  Captures audio with a microphone to detect the words "yes" and "no"
  + [Tutorial using SparkFun Edge](https://codelabs.developers.google.com/codelabs/sparkfun-tensorflow/#0)
* [Person detection](https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/person_detection) -
  Captures camera data with an image sensor to detect the presence or absence
  of a person

## Workflow

The following steps are required to deploy and run a TensorFlow model on a
microcontroller:

1. **Train a model**:
   * *Generate a small TensorFlow model* that can fit your target device and
     contains [supported operations](https://developers.google.com/edge/litert/microcontrollers/build_convert#operation_support).
   * *Convert to a LiteRT model* using the
     [LiteRT converter](https://developers.google.com/edge/litert/microcontrollers/build_convert#model_conversion).
   * *Convert to a C byte array* using
     [standard tools](https://developers.google.com/edge/litert/microcontrollers/build_convert#convert_to_a_c_array) to store it in a
     read-only program memory on device.
2. **Run inference** on device using the [C++ library](https://developers.google.com/edge/litert/microcontrollers/library) and process
   the results.

## Limitations

LiteRT for Microcontrollers is designed for the specific constraints of
microcontroller development. If you are working on more powerful devices (for
example, an embedded Linux device like the Raspberry Pi), the standard
LiteRT framework might be easier to integrate.

The following limitations should be considered:

* Support for a [limited subset](https://developers.google.com/edge/litert/microcontrollers/build_convert#operation_support) of
  TensorFlow operations
* Support for a limited set of devices
* Low-level C++ API requiring manual memory management
* On device training is not supported

## Next steps

* [Get started with microcontrollers](https://developers.google.com/edge/litert/microcontrollers/get_started) to try the
  example application and learn how to use the API.
* [Understand the C++ library](https://developers.google.com/edge/litert/microcontrollers/library) to learn how to use the library in
  your own project.
* [Build and convert models](https://developers.google.com/edge/litert/microcontrollers/build_convert) to learn more about training
  and converting models for deployment on microcontrollers.

Send feedback
