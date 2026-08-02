# Installing litert-lm CLI Stay organized with collections Save and categorize content based on your preferences.

[//]: # (source: [ai.google.dev](https://ai.google.dev/edge/litert-lm/cli/installation))

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

**Warning:** The CLI requires Python 3.10 or higher.

You can install the CLI with standard `pip` or
[`uv`](https://docs.astral.sh/uv/).

## Installation

### pip

```
# Install to a Python (virtual) environment.
# Ensure using Python 3.10 or above.
pip install --upgrade litert-lm
```

### uvx

```
# Run without installing permanently.
export UV_PYTHON=3.14   # Optional, set the uv python version.
uvx litert-lm
```

### uv

```
# Install to a persistent environment, with the supported python version.
export UV_PYTHON=3.14   # Optional, set the uv python version.
uv tool install litert-lm
```

## Upgrading

### pip

```
pip install --upgrade litert-lm
```

### uvx

```
uvx --refresh litert-lm
```

### uv

```
uv tool upgrade litert-lm
```

## Uninstalling

### pip

```
pip uninstall litert-lm
```

### uvx

```
# No action required. `uvx` runs from a temporary cache.
```

### uv

```
uv tool uninstall litert-lm
```

## Deleting Models and Caches

### Linux/MacOS

```
rm -r ~/.litert-lm
```

### Windows

```
rm -Recurse ~\.litert-lm
```

Send feedback
