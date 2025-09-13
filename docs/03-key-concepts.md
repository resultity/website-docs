---
title: Key Concepts
id: 03-key-concepts
slug: /key-concepts
description: Core entities and abstractions used throughout the Resultity platform.
---

# Key Concepts

This section defines the primary components and abstractions that form the foundation of the Resultity platform. These concepts are referenced throughout the system and represent the key elements that enable coordination, execution, and reward distribution across a decentralized inference network.

## Node

A **Node** is a user-operated device that performs inference tasks. Each node contains two internal components:

- **Agent**: A control process responsible for communicating with the Resultity Network, managing configuration, receiving jobs, and coordinating the Runtime.
- **Runtime**: An execution environment (e.g., vLLM) that loads the required language model and runs the actual inference task.

Nodes are identified by a cryptographic EVM key pair and are bound to a user account. A single account may operate multiple nodes.

## Agent

The **Agent** handles all control-layer responsibilities on a node:

- Establishes a persistent connection to the Network (e.g., via WebSocket);
- Reports heartbeat, health, and status;
- Signs job results and service messages;
- Handles model installation, test validation, and runtime restarts.

The Agent is designed to be self-updating and minimal in footprint.

## Runtime

The **Runtime** is a dedicated container or process that executes model inference. It uses a model from the approved network configuration and is isolated from direct user access.

The Runtime reports its execution results back to the Agent, which in turn signs and returns them to the Network.

## Subcloud

A **Subcloud** is a logically isolated subset of the Resultity network. It may define custom policies for:

- Allowed models and node specifications;
- Geographic or jurisdictional constraints;
- SLA requirements (e.g., uptime, latency);
- Participation rules (e.g., invite-only, staking-based access).

Subclouds are optional and are used to implement specialized inference clusters, including corporate workloads and fine-tuned models.

## Credit

A **Credit** is the unit of compute cost in Resultity. Credits are deducted when a user submits an inference request. The platform supports:

- On-demand purchases using tokens or stablecoins;
- Rewards converted into credits;
- Reserved credits for long-running tasks or subscription-based access.

Credit logic is implemented at the Cloud Layer and enforced during request validation.

## RCP (Resultity Contribution Points)

**RCP** is a non-transferable score that measures user and node participation. It is awarded based on:

- Completed inference jobs;
- Uptime and heartbeat reliability;
- Participation in blind validation tasks;
- Referral activity and network contribution.

RCP may be converted into tokens in the future, based on epoch-based reward snapshots.

## Mainnet / Testnet

Resultity operates in two parallel environments:

- **Testnet**: For onboarding, testing, and earning early contribution rewards;
- **Mainnet**: The production environment, with stable incentives and billing.

Node logic remains identical between networks, but reward multipliers, participation requirements, and job policies may differ.

Each node may participate in one or both environments, and configuration snapshots are maintained separately per network.
