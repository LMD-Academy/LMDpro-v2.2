--- source: https://ai.google.dev/edge/ai-edge-portal ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [AI Edge Portal](https://developers.google.com/edge/ai-edge-portal)

Send feedback

# Google AI Edge Portal Stay organized with collections Save and categorize content based on your preferences.



**Note:** Google AI Edge Portal is in Private Preview and now supports NPU
(Qualcomm & MediaTek), GPU ([ML Drift](https://developers.googleblog.com/en/litert-maximum-performance-simplified/#:%7E:text=MLDrift%3A%20Best%20GPU%20Acceleration%20Yet)), and CPU acceleration for .litert models.
Complete our [sign-up form](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform?usp=header) to request access.

**AI Edge's Google Cloud solution for testing and benchmarking on-device machine
learning (ML) at scale.**

[Sign Up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform?usp=header)

Optimizing ML model performance across diverse mobile devices can be challenging.
Manual testing is slow, costly, and often inaccessible to most developers,
leading to uncertainties in real-world model performance. Google AI Edge
Portal solves this by **enabling LiteRT model benchmarking across a wide-range
of mobile devices**, helping developers find the best configurations for
large-scale ML model deployment.

## Optimizing mobile ML deployment

* **Simplify & accelerate testing cycles across the diverse hardware landscape**:
  Effortlessly assess model performance across hundreds of
  representative mobile devices in minutes.
* **Proactively assure model quality & identify issues early**: Pinpoint
  hardware-specific performance variations or regressions (like on particular
  chipsets or memory-constrained devices) before deployment.
* **Lower device testing cost & access latest hardware**: Test on diverse and
  continually growing fleet of physical devices (currently 100+ device models
  from various Android OEMs) without the expense and complexity of maintaining
  your own lab.
* **Unlock powerful, data-driven decisions & business intelligence**: Google AI
  Edge Portal delivers rich performance data and comparisons, providing the
  crucial business intelligence needed to confidently guide model optimization
  and validate deployment readiness.

Example benchmark:

![](https://developers.google.com/edge/images/example-benchmark.png)

## How Google AI Edge Portal helps you benchmark your LiteRT models

1. **Select devices**: Select your target devices from our extensive pool using specific hardware filters—including NPU support, device tier, brand, chipset, and RAM. Alternatively, use our curated shortcuts for instant access to popular device lists.
2. **Create Configurations**: Choose between CPU, GPU, or NPU accelerators for your benchmarking tasks.

   * **Advanced Customization**: Adjust hardware-specific settings for your selected accelerator or proceed with default values.
   * **NPU Support**: Hardware acceleration capabilities now include NPUs, featuring a fleet of 30+ Qualcomm devices.

     + **Ahead-Of-Time (AOT) compilation**: Recommended for production-level
       performance, providing significantly faster initialization and a lower
       memory footprint. This mode requires providing compiled models for each
       unique SoC in your device selection.
     + **Just-In-Time (JIT) compilation**: Supports a single model for compilation across selected devices.
   * **Upload Models**: Upload your model file using the UI or point to it in your Google Cloud Storage bucket.

![](https://developers.google.com/edge/images/benchmark-creation-v2.gif)  
*Create a New Benchmark Job on 100+ Devices. (Note: GIF is accelerated and edited for brevity)*

From there, submit your job and await completion. Once ready, explore the
results in the Interactive Dashboard:

* **Compare configurations**: Quickly visualize how performance metrics (e.g.,
  average latency, peak memory) differ when using different accelerators across
  all tested devices.
* **Analyze device impact**: See how a specific model configuration performs across
  the range of selected devices. Use histograms and scatter plots to quickly
  identify performance variations tied to device characteristics.
* **Detailed metrics**: Access a detailed, sortable table showing specific metrics
  (initialization time, inference latency, memory usage) for each individual
  device, alongside its hardware specifications. Verify hardware utilization with
  the Accelerator Allocation table, which shows how model operations are
  distributed across kernels (available for CPU and GPU, with NPU support coming
  soon).

![](https://developers.google.com/edge/images/benchmark-report-v2.gif)   
*View Benchmark Results on the interactive Dashboard. (Note: GIF is accelerated and edited for brevity)*

## Join the Google AI Edge Portal private preview

Google AI Edge Portal is available in private preview for allowlisted Google
Cloud customers. During this private preview period, access is provided at no
charge, subject to the preview terms.

This preview is ideal for developers and teams building mobile ML applications
with LiteRT who need reliable benchmarking data across diverse Android hardware
and are willing to provide feedback to help shape the product's future. To
request access, complete our [sign-up form here](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform?usp=header)
to express interest. Access is granted via allowlisting.




Send feedback