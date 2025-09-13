---
title: Storage and Local Data
slug: /nodes/storage-and-local-data
description: Overview of what data is stored locally on a Resultity node and how it supports stable operation.
---

# Storage and Local Data

Each Resultity node maintains a minimal local storage layer to support offline stability, reduce network dependency, and ensure execution traceability. This storage is scoped to operational needs and is not used for long-term history or reward tracking — those functions are handled server-side.

## Purpose

Local storage allows the node to:

- Operate temporarily without an active connection;
- Resume execution after restart;
- Verify model integrity and configuration versions;
- Persist operational state across container reloads.

The storage is structured to separate short-lived data (e.g., job queue) from semi-persistent data (e.g., configuration snapshot).

## Main Data Types

| Category                  | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Jobs**                  | Incomplete jobs not yet acknowledged by the network; stored with TTL        |
| **Configuration Snapshot**| Latest applied `node_config`, with model list, policies, and digest         |
| **Hashes and Versions**   | Recorded hashes of containers and models to detect drift                    |
| **Logs and Status**       | Runtime metrics, errors, and diagnostic messages                            |
| **Account Binding**       | Node's EVM key, node ID, account link metadata                              |

All data is stored in a local volume attached to the Agent container. Runtime containers are stateless.

## Snapshot Rotation

Some data is periodically rotated based on:

- TTL defined in the configuration;
- Network-issued snapshot version changes;
- Manual node restart or container update.

For example, job traces from the previous configuration snapshot are deleted upon applying a new snapshot.

## Logging Behavior

Logs are recorded locally and may include:

- Inference execution durations;
- Model loading results;
- Runtime error messages;
- Configuration application status.

These logs are periodically flushed to the network (or cloud) and removed from local storage to avoid unbounded growth.

## Security and Scope

- Local data does **not** include credit balances, reward records, or token state;
- Sensitive keys (EVM private key) are stored securely and never exposed to containers;
- All local records are tied to a single network (Testnet or Mainnet), and are maintained separately.

---

Resultity nodes maintain just enough local state to remain robust and auditable — while deferring all critical coordination, validation, and billing logic to the network.
