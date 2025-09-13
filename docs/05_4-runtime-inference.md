---
title: Runtime (LLM Inference)
slug: /nodes/runtime-inference
description: The Runtime component of a Resultity node responsible for executing model inference tasks.
---

# Runtime (LLM Inference)

The **Runtime** is the execution-layer component of a Resultity node. It runs language model inference jobs using a validated model, isolated from external access and controlled entirely by the Agent.

Each Runtime is deployed as a containerized environment optimized for fast initialization, deterministic execution, and model integrity.

## Purpose

The Runtime performs the following key functions:

- Loads a specified language model (e.g., Mistral, vLLM, or other engines);
- Receives tokenized input and job metadata from the Agent;
- Executes inference using GPU or CPU resources;
- Returns the output back to the Agent for signing and submission.

Runtime containers are lightweight and stateless — they are rebuilt or restarted as needed depending on job parameters and version requirements.

## Model Control

All models available in the Runtime must be:

- Pre-approved by the central configuration;
- Identified by a content hash and version string;
- Downloaded and verified before first use;
- Periodically retested via a validation task.

Models not present in the approved list are rejected and removed. Runtime does not support arbitrary local model loading.

## Execution Flow

The Runtime participates in the following steps of job execution:

1. **Receive input**: The Agent delivers a job payload containing model ID and request parameters;
2. **Validate model**: Runtime ensures the requested model is loaded and available;
3. **Perform inference**: The job is executed using the model engine;
4. **Return output**: A response object is passed back to the Agent.

If execution fails or the output is malformed, the Agent logs the error and notifies the network.

## Runtime Container Selection

The type of Runtime (e.g., vLLM, Ollama) is **not hardcoded into the node**. Instead:

- The **network provides a configuration snapshot** that includes the name and version of the Runtime container to use;
- The Agent downloads and starts the specified container according to the config;
- Only **one container per node** is active at a time, ensuring deterministic behavior.

This design allows the platform to dynamically switch or upgrade inference backends without requiring manual changes on the node.

## Security and Isolation

Runtime containers:

- Do not have network access by default;
- Do not persist state between runs;
- Are monitored by the Agent for health and output integrity;
- Are replaced immediately after configuration updates or failures.

---

The Runtime executes tasks deterministically and securely, forming the computational core of each node in the Resultity network.
