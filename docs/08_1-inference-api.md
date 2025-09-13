---
title: Inference API
slug: /inference
description: OpenAI-compatible API for executing inference on Resultity’s decentralized network.
---

# Inference API

The Resultity network provides an **OpenAI-compatible API** for executing inference requests on decentralized infrastructure.  
Users can integrate the service into their existing applications with minimal changes — simply replace the base URL and provide an API key.

This API is available via `cloud.resultity.com` and uses standard HTTPS requests.  
Each request consumes internal **credits**, and usage is tracked per API key and namespace.

## OpenAI Compatibility

Resultity aims for **maximum compatibility** with the OpenAI API, making it easy to switch without changing client-side code.

Supported endpoints:

- `/v1/chat/completions` — for chat-based models;
- `/v1/completions` — for traditional text completion;
- `/v1/embeddings` — vector embedding of input texts;
- `/v1/images/generations` — image generation (planned);
- `/v1/audio/transcriptions` — audio-to-text (planned);
- `/v1/audio/speech` — text-to-speech (planned);
- `/v1/moderations` — content safety and classification (planned).

### Supported Parameters

Requests use standard OpenAI-style payloads, with parameters including:

- `model`: model name;
- `messages` or `prompt`: input content;
- `temperature`, `top_p`: sampling controls;
- `max_tokens`, `stop`: generation limits;
- `stream`, `logprobs`, `n`: advanced options (partially supported).

Resultity Cloud may not support all OpenAI models.  
The list of available models is dynamically retrieved via the `/v1/models` endpoint and may differ depending on the active node fleet and region.

### Compatibility Notes

- Most SDKs and wrappers designed for OpenAI can be reused with Resultity;
- Some advanced parameters (e.g. `function_call`, `tool_choice`) may have limited support at launch;
- Model names may differ slightly (e.g. `rtity-chat-7b`, `rtity-embed-base`), but aliases are available for compatibility;
- Future versions may introduce Resultity-specific extensions to the standard.

---

This compatibility layer allows developers to quickly adopt decentralized inference while retaining the ecosystem benefits of OpenAI's API format.
