# LiteRT Dispatch API for NPU Runtime Integration Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert/next/dispatch))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

## When should I implement the Disptach API?

A **LiteRT Dispatch API** is necessary when you need to **integrate a specific
hardware accelerator** runtime into the LiteRT framework. It works with the
[Compiler Plugin](https://developers.google.com/edge/litert/next/compiler_plugin) to execute the compiled sub-graphs emiited
by the compiler plugin.

The dispatch API is a set of vendor implemented functions LiteRT will use to
manage a session with an accelerator's runtime. These functions cover device
sessions, subgraph execution and buffer movement between the host and device.
Implementations of the dispatch API, in conjunction with a compiler plugin,
allow LiteRT to fully utilized an accelerator's capabilities for efficient
inference.

More detail regarding "when" to implement the dispatch API (and compiler plugin)
can be found in the [LiteRT Compiler Plugin](https://developers.google.com/edge/litert/next/compiler_plugin) page.

## How Does the Dispatch API Work?

Dispatch API is used by `CompiledModel` using the `NpuAccelerator`. This
internally creates a `DispatchDelegate` and it is this `DispatchDelegate` that
uses the Dispatch API to engage the NPU embedded in the running hardware.

## Dispatch API Data Types

In the Dispatch API, the following data types are used to execute a model on
NPUs.

* `DispatchDeviceContext`

  It is used to manage buffers to used by NPU inference.
* `DispatchInvocationContext`

  This is the data structure used to execute the model. It works by
  associating the actual input and output memory registered in
  `DispatchDeviceContext` with the generated `DispatchGraph`.

## Dispatch APIs

For the full definition of the Dispatch API, please refer to the
[`vendors/c/litert_dispatch.h`](https://github.com/google-ai-edge/LiteRT/blob/main/litert/vendors/c/litert_dispatch.h)
file.

Send feedback
