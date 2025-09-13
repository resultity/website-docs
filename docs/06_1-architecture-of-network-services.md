---
title: Architecture of Network Services
slug: /network/architecture
description: Overview of the core server-side services that power the Resultity network and coordinate node activity.
---

# Architecture of Network Services

The Resultity network consists of a set of modular backend services that manage job routing, node coordination, account control, and system observability. These services form the core of the centralized infrastructure — initially operated by the platform team, but designed to be progressively decentralized.

Each service is exposed via a dedicated subdomain and serves a distinct role in the system.

## Core Services

| Service Name | Subdomain                      | Purpose                                                              |
|--------------|--------------------------------|----------------------------------------------------------------------|
| **Cloud**    | `cloud.resultity.com`          | API interface for inference requests (OpenAI-compatible).            |
| **Gate**     | `gate.network.resultity.com`   | Account, node, subscription, and config management.                  |
| **IO**       | `io.network.resultity.com`     | Real-time job delivery to nodes via WebSocket or short HTTP.         |
| **Status**   | `status.network.resultity.com` | Cached metrics: active nodes, GPUs, models, and pricing.             |
| **Admin**    | `admin.network.resultity.com`  | Internal interface for network control and emergency operations.     |
| **Space**    | `space.resultity.com`          | Planned storage for agents, templates, RAG data, and automations.    |
| **Account**  | `account.resultity.com`        | User dashboard for balance, keys, referrals, and account actions.    |

These services communicate with shared storage systems and message queues, and serve both public and internal consumers.

## Separation of Concerns

- **Cloud Layer** exposes public APIs and enforces key-based access and billing;
- **Network Layer** handles job assignment, node monitoring, and configuration updates;
- **Account Layer** manages user identity, node binding, credits, and referrals;
- **Admin Layer** performs diagnostics, emergency overrides, and global policy actions;
- **Status Layer** publishes real-time metrics and pricing data for transparency;
- **Space Layer** (planned) enables persistent user-deployed logic and assets.

## Deployment and Redundancy

While initially centralized, each service is containerized and deployable as part of a horizontally scalable cluster:

- Replication allows traffic splitting and failover;
- Internal APIs (e.g., Gate to IO) are authenticated and rate-limited;
- Network updates are version-controlled and can be rolled back via snapshot triggers.

Future roadmap includes enabling validator-operated mirror services, reducing reliance on centralized endpoints.

## Internal Responsibilities

Each service coordinates with internal queues and data stores:

- Pulling tasks from RabbitMQ;
- Storing and querying job metadata in MongoDB;
- Accessing node state from Redis;
- Calculating metrics and history in PostgreSQL.

These responsibilities are hidden from end users but critical to the system's orchestration logic.

---

The Resultity Network architecture provides the backbone for reliable, verifiable inference coordination — bridging decentralized execution with centralized scheduling, metrics, and billing control.
