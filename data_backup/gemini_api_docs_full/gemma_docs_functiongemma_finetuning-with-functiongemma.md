--- source: https://ai.google.dev/gemma/docs/functiongemma/finetuning-with-functiongemma ---

**Gemma 4** released with text, audio and image input and long up to 256K context window! [**Learn more**](/gemma/docs/core)

* [Home](https://ai.google.dev/)
* [Gemma](https://ai.google.dev/gemma)
* [Models](https://deepmind.google/models/gemma)
* [Docs](https://ai.google.dev/gemma/docs)

Send feedback

# Fine-tuning with FunctionGemma



[View on ai.google.dev](https://ai.google.dev/gemma/docs/functiongemma/finetuning-with-functiongemma) | [Run in Google Colab](https://colab.research.google.com/github/google-gemma/cookbook/blob/main/docs/functiongemma/finetuning-with-functiongemma.ipynb) | [Run in Kaggle](https://kaggle.com/kernels/welcome?src=https://github.com/google-gemma/cookbook/blob/main/docs/functiongemma/finetuning-with-functiongemma.ipynb) | [Open in Vertex AI](https://console.cloud.google.com/vertex-ai/colab/import/https%3A%2F%2Fraw.githubusercontent.com%2Fgoogle-gemma%2Fcookbook%2Fmain%2Fdocs%2Ffunctiongemma%2Ffinetuning-with-functiongemma.ipynb) | [View source on GitHub](https://github.com/google-gemma/cookbook/blob/main/docs/functiongemma/finetuning-with-functiongemma.ipynb) |

This guide demonstrates how to fine-tune FunctionGemma for tool calling.

While FunctionGemma is natively capable of calling tools, true capability comes from two distinct skills: the mechanical knowledge of how to use a tool (syntax) and the cognitive ability to interpret *why* and *when* to use it (intent).

Models, especially smaller ones, have fewer parameters available to retain complex intent understanding. This is why we need to fine-tune them.

Common use cases for fine-tuning tool calling include:

* **Model Distillation**: Generating synthetic training data with a larger model and fine-tuning a smaller model to replicate the specific workflow efficiently.
* **Handling Non-Standard Schemas**: Overcoming base model struggles with legacy, highly complex data structures or proprietary format not found in public data, such as handling [domain-specific mobile actions](https://ai.google.dev/gemma/docs/mobile-actions).
* **Optimizing Context Usage**: "Baking" tool definitions into the model's weights. This allows you to use shorthand descriptions in your prompts, freeing up the context window for the actual conversation.
* **Resolving Selection Ambiguity**: Biasing the model toward specific enterprise policies, such as prioritizing an internal knowledge base over an external search engine.

In this example, we will focus specifically on managing tool selection ambiguity.

## Setup development environment

The first step is to install Hugging Face Libraries, including TRL, and datasets to fine-tune open model, including different RLHF and alignment techniques.

```
# Install Pytorch & other libraries
%pip install torch tensorboard

# Install Hugging Face libraries
%pip install transformers datasets accelerate evaluate trl protobuf sentencepiece

# COMMENT IN: if you are running on a GPU that supports BF16 data type and flash attn, such as NVIDIA L4 or NVIDIA A100
#% pip install flash-attn
```

> *Note: If you are using a GPU with Ampere architecture (such as NVIDIA L4) or newer, you can use Flash attention. Flash Attention is a method that significantly speeds computations up and reduces memory usage from quadratic to linear in sequence length, leading to accelerating training up to 3x. Learn more at [FlashAttention](https://github.com/Dao-AILab/flash-attention/tree/main).*

Before you can start training, you have to make sure that you accepted the terms of use for Gemma. You can accept the license on [Hugging Face](http://huggingface.co/google/functiongemma-270m-it) by clicking on the **Agree** and access repository button on the model page at: <http://huggingface.co/google/functiongemma-270m-it>

After you have accepted the license, you need a valid Hugging Face Token to access the model. If you are running inside a Google Colab, you can securely use your Hugging Face Token using the Colab secrets otherwise you can set the token as directly in the `login` method. Make sure your token has write access too, as you push your model to Hugging Face Hub after fine-tuning.

```
# Login into Hugging Face Hub
from huggingface_hub import login
login()
```

You can keep the results on Colab's local virtual machine. However, it is highly recommended saving your intermediate results to your Google Drive. This ensures your training results are safe and allows you to easily compare and select the best model.

Also, adjust the checkpoint directory and the learning rate.

```
from google.colab import drive

mount_google_drive = False
checkpoint_dir = "functiongemma-270m-it-simple-tool-calling"

if mount_google_drive:
    drive.mount('/content/drive')
    checkpoint_dir = f"/content/drive/MyDrive/{checkpoint_dir}"

print(f"Checkpoints will be saved to {checkpoint_dir}")

base_model = "google/functiongemma-270m-it"
learning_rate = 5e-5
```

```
Checkpoints will be saved to functiongemma-270m-it-simple-tool-calling
```

## Prepare the fine-tuning dataset

You will use the following example dataset, which contains sample conversations requiring a choice between two tools: `search_knowledge_base` and `search_google`.

### Simple tool calling dataset

Toggle code

```
simple_tool_calling = [
  {"user_content":"What is the reimbursement limit for travel meals?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"travel meal reimbursement limit policy\"}"},
  {"user_content":"What is the current stock price of Google?","tool_name":"search_google","tool_arguments":"{\"query\": \"current Google stock price\"}"},
  {"user_content":"How do I configure the VPN for the New York office?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"VPN configuration guide New York office\"}"},
  {"user_content":"Explain the difference between REST and GraphQL.","tool_name":"search_google","tool_arguments":"{\"query\": \"difference between REST and GraphQL\"}"},
  {"user_content":"Who is the product owner for Project Chimera?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"Project Chimera product owner\"}"},
  {"user_content":"Find the documentation for the 'requests' library in Python.","tool_name":"search_google","tool_arguments":"{\"query\": \"Python requests library documentation\"}"},
  {"user_content":"What are the core values listed in our employee handbook?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"employee handbook core values\"}"},
  {"user_content":"What is the weather forecast for the company retreat in Bali?","tool_name":"search_google","tool_arguments":"{\"query\": \"weather forecast Bali\"}"},
  {"user_content":"I need to reset my Okta password. How do I do that?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"Okta password reset procedure\"}"},
  {"user_content":"Who won the World Series last year?","tool_name":"search_google","tool_arguments":"{\"query\": \"MLB World Series winner last year\"}"},
  {"user_content":"What is the guest Wi-Fi password for the 4th floor?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"guest wifi password 4th floor\"}"},
  {"user_content":"Comparison of AWS vs GCP pricing.","tool_name":"search_google","tool_arguments":"{\"query\": \"AWS vs GCP pricing comparison\"}"},
  {"user_content":"How do I install our internal 'utils-core' package?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"install utils-core package internal registry\"}"},
  {"user_content":"What are the dates for the upcoming federal holidays?","tool_name":"search_google","tool_arguments":"{\"query\": \"upcoming federal holidays dates\"}"},
  {"user_content":"Does the office insurance cover dental implants?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"dental insurance coverage implants\"}"},
  {"user_content":"What is the latest version of Node.js?","tool_name":"search_google","tool_arguments":"{\"query\": \"latest Node.js version\"}"},
  {"user_content":"Find the meeting minutes from last week's All-Hands.","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"All-Hands meeting minutes last week\"}"},
  {"user_content":"What did our competitor, ABC Corp, announce at CES today?","tool_name":"search_google","tool_arguments":"{\"query\": \"ABC Corp announcements CES today\"}"},
  {"user_content":"Who is the emergency contact for the London data center?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"emergency contact London data center\"}"},
  {"user_content":"Convert 100 USD to JPY.","tool_name":"search_google","tool_arguments":"{\"query\": \"100 USD to JPY exchange rate\"}"},
  {"user_content":"How do I access my paystubs on the ADP portal?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"access paystubs ADP portal guide\"}"},
  {"user_content":"What is the syntax for Python list comprehensions?","tool_name":"search_google","tool_arguments":"{\"query\": \"python list comprehension syntax examples\"}"},
  {"user_content":"Where can I find the floor plan for Building B?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"floor plan Building B conference rooms\"}"},
  {"user_content":"Check the latest stock price for Apple.","tool_name":"search_google","tool_arguments":"{\"query\": \"Apple stock price today\"}"},
  {"user_content":"What is the procedure for reporting a phishing email?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"report phishing email security procedure\"}"},
  {"user_content":"Show me examples of using the useEffect hook in React.","tool_name":"search_google","tool_arguments":"{\"query\": \"React useEffect hook code examples\"}"},
  {"user_content":"Who are the direct reports for the VP of Engineering?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"VP of Engineering org chart direct reports\"}"},
  {"user_content":"How do I list open ports on a Linux server?","tool_name":"search_google","tool_arguments":"{\"query\": \"linux command check open ports\"}"},
  {"user_content":"What is our Slack message retention policy?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"Slack public channel data retention policy\"}"},
  {"user_content":"Compare the features of iPhone 15 vs Samsung S24.","tool_name":"search_google","tool_arguments":"{\"query\": \"iPhone 15 vs Samsung S24 feature comparison\"}"},
  {"user_content":"I need the expense code for team building events.","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"finance expense code team building\"}"},
  {"user_content":"Best practices for writing a Dockerfile for Node.js.","tool_name":"search_google","tool_arguments":"{\"query\": \"Dockerfile best practices Node.js application\"}"},
  {"user_content":"How do I request a new monitor setup?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"IT hardware request monitor setup\"}"},
  {"user_content":"What is the difference between VLOOKUP and XLOOKUP in Google Sheets?","tool_name":"search_google","tool_arguments":"{\"query\": \"Google Sheets VLOOKUP vs XLOOKUP difference\"}"},
  {"user_content":"Find the onboarding checklist for new engineering hires.","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"new hire onboarding checklist engineering\"}"},
  {"user_content":"What are the latest release notes for the OpenAI API?","tool_name":"search_google","tool_arguments":"{\"query\": \"OpenAI API latest release notes\"}"},
  {"user_content":"Do we have preferred hotel partners in Paris?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"corporate travel preferred hotels Paris\"}"},
  {"user_content":"How to undo the last git commit but keep the changes?","tool_name":"search_google","tool_arguments":"{\"query\": \"git reset soft undo last commit\"}"},
  {"user_content":"What is the process for creating a new Jira project?","tool_name":"search_knowledge_base","tool_arguments":"{\"query\": \"create new Jira project process\"}"},
  {"user_content":"Tutorial on SQL window functions.","tool_name":"search_google","tool_arguments":"{\"query\": \"SQL window functions tutorial\"}"},
]
```