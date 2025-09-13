---
title: What is a Node
slug: /nodes/what-is-a-node
description: Overview of how nodes operate in the Resultity network and their core responsibilities.
---

# What is a Node

A **Node** in Resultity is a self-contained computing unit that performs inference tasks for the network. It runs on a user-controlled device and is composed of two key components:

- **Agent** — a control-layer container that communicates with the network, manages configuration, and handles execution orchestration;
- **Runtime** — an inference container (e.g., vLLM) that loads and runs language models to process jobs.

Each node is bound to a unique identity and cryptographic key. This identity is registered on first launch and persists throughout the node's lifecycle.

## Node Ownership and Identity

Nodes are owned by user accounts and uniquely identified by:

- A **node ID**, derived from a generated EVM-compatible key pair;
- A **binding** to the account that controls the node (wallet address or email);
- A set of operational attributes (e.g., hardware profile, installed models, configuration version).

One account may operate multiple nodes. Each node behaves independently and can participate in both testnet and mainnet environments, if configured.

## Node Functionality

The node lifecycle includes:

- Initial setup and registration;
- Connection to the network and periodic heartbeats;
- Receiving and executing inference tasks;
- Installing and validating models;
- Syncing configuration updates;
- Returning signed results to the network.

Nodes also store a limited set of local data to enable offline resilience and reduce coordination latency.

## Execution Flow

When assigned a task:

1. The Agent receives a job assignment from the network via WebSocket;
2. The Agent validates the job and ensures that the correct model is available in the Runtime;
3. The Runtime processes the input and produces an output;
4. The Agent signs the result and submits it back to the network for validation and billing.

All steps are logged locally and asynchronously uploaded to the network during snapshot events.

Nodes play a critical role in decentralizing compute across the Resultity ecosystem while maintaining verifiability, modularity, and isolation.
