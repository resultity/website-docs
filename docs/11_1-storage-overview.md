---
title: Storage and Data
slug: /storage/overview
description: Overview of the storage system in Resultity, including structured and unstructured data layers, cache, and messaging.
---

# Storage and Data

The storage architecture powers the **server-side backbone** of the Resultity platform, supporting the **Network**, **Cloud**, and **Space** components.  
It is designed to manage all essential state, inference job flows, and real-time orchestration across the decentralized infrastructure.

Data is retained **only when relevant**:

- Structured state in PostgreSQL is rolled up periodically;
- Logs and inference data in MongoDB are stored temporarily by default;
- Extended retention in MongoDB may become available via **Space** as a paid feature;
- Old data is offloaded to decentralized storage when applicable.

---

## Storage Layers

Resultity uses **four active components** and one planned archival layer:

1. **PostgreSQL** — structured, relational data;
2. **MongoDB** — unstructured job data and logs;
3. **Redis** — high-speed in-memory cache;
4. **RabbitMQ** — task routing and coordination;
5. **Versioning and Snapshots** (planned) — long-term archival.

---

## Goals of the Design

- **Separation of concerns**  
  Each component handles a distinct responsibility: configs, logs, cache, or routing.

- **Scalability and performance**  
  Redis and RabbitMQ decouple I/O and routing from persistent layers.

- **Real-time orchestration**  
  Redis manages ephemeral state and node availability, RabbitMQ drives task dispatch.

- **Auditability**  
  PostgreSQL stores canonical data with periodic rollups for credits, job history, and account state.

- **Optional persistence**  
  MongoDB stores job inputs/outputs temporarily; extended storage may be provided via **Space**.

- **Decentralized backups**  
  Historical PostgreSQL rollups may be archived to cold, decentralized storage.

---

## Layered Architecture

- **Authoritative state and configs** → PostgreSQL  
- **Job payloads, logs, stats (ephemeral)** → MongoDB  
- **Live state and task control** → Redis  
- **Job queueing and routing** → RabbitMQ  
- **Versioned snapshots (future)** → decentralized cold storage

This modular and selective storage system balances performance, observability, and user privacy — enabling Resultity to operate efficiently at global scale.
