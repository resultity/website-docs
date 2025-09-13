---
title: Request Types
slug: /inference/request-types
description: Available request modes in the Resultity API, including sync, polling, batch, streaming, and distributed jobs.
---

# Request Types

The Resultity API supports multiple inference request types to accommodate a wide range of use cases — from fast single-turn queries to heavy distributed tasks and multimodal jobs.

## Currently Available

### Synchronous

- Standard request-response cycle.
- The client sends a request and waits for the result in the same HTTP connection.
- Ideal for fast, low-latency jobs (e.g., short completions).

### Polling

- The client sends a job and immediately receives a `request_id`.
- The result must be fetched later using a status endpoint.
- Designed for longer or queued tasks.

## Planned

### Batch

- Submit multiple requests in a single call.
- Suitable for preloading embeddings, generating multiple completions, etc.

### Streaming

- Sends tokens to the client as they are generated.
- Used for chatbots, streaming UIs, and voice assistants.

### Multimodel

- Executes the same prompt on multiple models in parallel.
- Can be used for ensemble approaches or fallback logic.
- Examples: `mistral` + `gemma`, or `openchat` + `zephyr`.

### Multinode

- Executes a single heavy model (e.g., LLaMA2 70B) across several nodes using sharding.
- Enables distributed inference with large context windows.

---

## Media-Oriented Extensions

Planned support for non-text jobs using compatible APIs:

### Vision

- `/v1/images/generations` — generate images from prompts (DALL·E-style);
- `/v1/images/variations` — modify or enhance existing images;
- `/v1/images/description` — describe or caption images;
- Based on models such as **Kandinsky**, **Stable Diffusion**, **Playground v2**.

### Audio

- `/v1/audio/transcriptions` — convert speech to text (e.g., **Whisper**, **SeamlessM4T**);
- `/v1/audio/speech` — text-to-speech (e.g., **Bark**, **xtts**, **tts-zero**);
- `/v1/audio/translation` — audio-based translation.

### Video (experimental)

- Future support for generation and description (e.g., **SVD**, **AnimateDiff**, **Zer0Scope**);
- Initially via Space or custom Subclouds, not main Cloud API.

---

This modular structure allows Resultity to evolve from OpenAI-compatible endpoints to full multimodal capability, leveraging existing open-source and hosted models while maintaining API consistency.
