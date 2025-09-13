---
title: Platform Architecture
id: 02-platform-architecture
slug: /platform-architecture
description: Overview of the multi-layered Resultity architecture and its modular, decentralized design.
---

# Platform Architecture

The Resultity platform is designed as a modular, distributed system that separates concerns across compute, coordination, user access, and storage. This architectural model enables independent evolution of components, support for various deployment scenarios, and eventual decentralization.

## Layered Structure

Resultity consists of six principal layers:

- **Node Layer**: End-user devices that execute language model inference tasks. Each node consists of a local Agent (control plane) and a Runtime (execution environment).
- **Network Layer**: Responsible for routing jobs to available nodes, monitoring heartbeat signals, validating performance, and managing configuration updates.
- **Cloud Layer**: Exposes inference APIs compatible with OpenAI, handles API key issuance, credit management, and Subcloud definitions.
- **Account Layer**: Manages user profiles, credit balances, referral relationships, contribution records (RCP), and subscriptions.
- **Storage Layer**: Handles job metadata, full inference logs, snapshots, system metrics, and high-throughput caching using PostgreSQL, MongoDB, Redis, and RabbitMQ.
- **Blockchain Layer** *(planned)*: Provides cryptographic guarantees for identity, payment processing, reward distribution, and governance.

Each layer is autonomous in terms of function and storage but integrated through clearly defined protocols and API contracts.

## Separation of Concerns

The architecture separates responsibilities into three operational planes:

- **Execution**: Inference workloads are performed by nodes using models specified by the network configuration;
- **Coordination**: The network determines node availability, assigns jobs, and handles configuration changes;
- **Access**: API clients interact with the Cloud Layer using familiar REST endpoints and receive billed results based on credit availability.

This separation allows for targeted upgrades, resilience to faults, and compatibility with various user roles and access patterns.

## Deployment and Redundancy

The platform is designed for progressive rollout:

- In early phases, core coordination is centralized for operational reliability;
- Over time, key services can be replicated, mirrored, or replaced by community-hosted equivalents (e.g., validator-operated nodes, multi-tenant Cloud mirrors);
- Data availability and routing logic are expected to evolve toward regional replication and Subcloud isolation.

Each interface (Cloud, Network, Account, etc.) is exposed via a reserved domain name. Their operational status depends on the rollout phase and the maturity of the corresponding backend.

## Extensibility and Future Evolution

Resultity’s architecture supports forward compatibility:

- New APIs can be added without affecting node behavior;
- Subclouds enable private inference environments with custom rules;
- Agents and workflows in Space (planned) allow user-defined automation;
- Token and governance logic will be layered on-chain, with optional off-chain coordination.

The platform is built not just to scale, but to **decentralize**—enabling community participation in execution, routing, validation, and governance.
