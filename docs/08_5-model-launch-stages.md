---
title: Model Launch Stages
slug: /inference/model-launch
description: Phased rollout plan for supported model types across the Resultity network.
---

# Model Launch Stages

To ensure scalability and maintain compatibility, Resultity introduces models in multiple phases. Each stage reflects increasing complexity in model size, modality, and execution strategy.

## Stage 1: Lightweight Text Models

- **Deployment**: Single-node
- **Models**: Mistral, Phi-2, TinyLlama, Gemma 2B
- **Use cases**: Chatbots, assistants, basic completions
- **API**: Chat, Completion, Embedding
- **Engines**: vLLM, Ollama
- **Compatibility**: OpenAI-compatible

## Stage 2: Lightweight Multimodal Models

- **Deployment**: Single-node
- **Media types**: Image, audio, OCR, classification
- **Models**: Whisper Tiny, Bark, Moondream, Llava 7B, BakLLaVA
- **Use cases**: Audio transcription, image captioning, OCR, speech
- **API**: Audio, Image (planned), Vision (custom)
- **Limitations**: Real-time may be limited by device and network

## Stage 3: Heavy Text Models

- **Deployment**: Multi-node via model sharding
- **Models**: Mixtral, Yi-34B, Falcon 40B, LLaMA 3 70B (planned)
- **Requirements**: GPU reservation, scheduling, load balancing
- **Use cases**: Long-context generation, advanced agents, RAG
- **API**: Chat, Completion (no change for clients)
- **Status**: Under testing for testnet integration

## Stage 4: Heavy Multimodal Models

- **Deployment**: Multi-node or specialized hardware
- **Models**: OpenVLA, GPT-4V-compatible open models (TBD)
- **Use cases**: Audio-visual generation, RAG with image, advanced perception
- **API**: Vision, Audio, Multimodal routes (custom or OpenAI-compatible)
- **Limitations**: Depends on GPU availability, performance optimizations required

---

Each stage unlocks new use cases and participation opportunities for both node operators and clients. The Resultity roadmap aligns infrastructure scaling with model rollout to ensure network stability and API reliability.
