--- source: https://ai.google.dev/edge/litert/cli/installation ---

[**Introducing Google AI Edge Portal**](https://ai.google.dev/edge/ai-edge-portal): Benchmark Edge AI at scale. [Sign-up](https://docs.google.com/forms/d/e/1FAIpQLSfTcGPycQve8TLAsfH46pBlXBZe9FrgJAClwbF7DeL1LgVn4Q/viewform) to request access during private preview.

* [Home](https://developers.google.com/)
* [Products](https://developers.google.com/products)
* [Google AI Edge](https://developers.google.com/edge)
* [LiteRT](https://developers.google.com/edge/litert)

Send feedback

# Installing LiteRT CLI Stay organized with collections Save and categorize content based on your preferences.



Install `litert-cli-nightly` from PyPI. The LiteRT CLI installs additional
dependencies on-demand based on the commands you run to speed up the initial
installation.

We support installation using either `uv` (recommended for ultra-fast dependency
resolution) or standard `pip` within a Python virtual environment.

## Option 1: Use uv (recommended)

`uv` is an extremely fast Python package manager written in Rust.

```
# 1. Create a virtual environment with Python 3.13.
# TIP: Sometimes setting env var `UV_INDEX_URL=https://pypi.org/simple` helps
# resolve dependency resolution errors.
uv venv --clear --python=3.13 --seed
source .venv/bin/activate

# 2. Install the package into the active virtual environment
uv pip install litert-cli-nightly

# 3. Verify installation
litert --help
```

## Option 2: Use standard pip

```
python3 -m venv .venv
source .venv/bin/activate
pip install -q litert-cli-nightly
litert --help
```

## Option 3: Install from local clone (for development)

```
uv venv --clear --python=3.13 --seed
source .venv/bin/activate
git clone git@github.com:google-ai-edge/LiteRT-CLI.git
cd LiteRT-CLI
uv pip install -e .
```






Send feedback