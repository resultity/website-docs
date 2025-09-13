---
title: What is Resultity
id: 01-what-is-resultity
slug: /what-is-resultity
description: Introduction to Resultity – a decentralized inference network for language models, connecting node operators and API consumers.
---


# What is Resultity

Resultity is a decentralized platform for running language model inference (LLM) on distributed infrastructure. It connects users who contribute computing resources with those who require model outputs, enabling a global, trust-minimized, and verifiable inference network.

The system is designed for multiple user types:

- **Node Operators**: individuals or organizations that connect devices (nodes) to the network and execute inference tasks;
- **Consumers**: developers or services using an OpenAI-compatible API to submit model queries;
- **Builders and Teams**: users deploying agents, workflows, or Subcloud configurations;
- **Contributors**: testnet participants, referrers, and early adopters earning Resultity Contribution Points (RCP);
- **Integrators**: platforms embedding inference into larger flows via API access and automation.

Resultity supports task execution without revealing which specific node handles the request, providing privacy and abstraction for consumers while ensuring transparency and traceability for contributors.

## Platform Composition

Resultity is organized into layered components:

- **Nodes**: user-operated compute units that receive and execute inference jobs;
- **Network Layer**: coordinates routing, health checks, job delivery, and node updates;
- **Cloud Layer**: exposes inference APIs and manages key-based access, billing, and Subclouds;
- **Account Layer**: tracks identity, credit balance, referral history, RCP, and subscriptions;
- **Storage Layer**: manages job state, logs, snapshots, and high-performance caches;
- **Blockchain Layer** (planned): governs tokenization, signatures, and future DAO-controlled parameters.

Each layer operates independently but in sync with others, allowing flexibility in deployment, rollout, and future decentralization.

## Domains and Interfaces

System functionality is exposed through reserved domains:

- `network.resultity.com` — core job routing, node communication, and admin configuration;
- `cloud.resultity.com` — OpenAI-compatible API endpoint with credit enforcement;
- `account.resultity.com` — user dashboard for account and balance management;
- `status.resultity.com` — public network status, active models, and GPU metrics;
- `space.resultity.com` — infrastructure for agents, vector storage, and automation workflows (planned).

These surfaces may be progressively activated depending on platform phase.

## Design Principles

Resultity is built for modularity, verifiability, and progressive decentralization:

- Node execution is isolated and cryptographically signed;
- All API traffic is billed via internal credits, with refundable handling for errors or timeouts;
- Nodes do not trust each other or share state — all coordination happens through the network;
- Components may be centrally coordinated at launch, but all logic is designed to migrate toward user-owned infrastructure.

Inference is offered in multiple modes — synchronous, polling, and streaming — with batching and parallel execution supported in later stages.

Resultity provides a bridge between centralized developer tooling and decentralized execution, enabling scalable, programmable, and reward-aligned AI infrastructure.
