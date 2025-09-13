---
title: PostgreSQL
slug: /storage/postgresql
description: Central structured database for accounts, jobs, credits, and configuration in Resultity.
---

# PostgreSQL

PostgreSQL is the core structured database of the Resultity platform, responsible for maintaining authoritative records across accounts, jobs, rewards, and network configuration.  
It powers key components of the **Network**, **Cloud**, and **Account** services.

---

## Purpose and Role

PostgreSQL is used to store mission-critical metadata:

- User accounts and associated wallets;
- Node ownership and identity;
- Inference job metadata (e.g., model, duration, result status);
- Credit balances, deductions, and locks;
- RCP reward history and epoch tracking;
- Network configuration state, including model versioning;
- Subcloud definitions and memberships.

All authoritative operations — from top-ups to node binding — are backed by PostgreSQL to ensure consistency, traceability, and auditability.

---

## Structure and Queries

The PostgreSQL layer is highly normalized and indexed for optimal performance:

- Tables are structured by domain (e.g., `accounts`, `jobs`, `credits`, `nodes`, `epochs`);
- Operations are mostly append-only, with historical snapshots for sensitive records;
- Queries are optimized for common access patterns: job lookup, credit checks, node filtering, and reward computation.

The database supports cross-service access via role-based APIs and internal RPC bridges.

---

## Snapshots and Rollups

To support long-term integrity and performance:

- **Rollups** are performed periodically, summarizing expired or completed jobs into compact aggregates;
- **Historical states** are hashed and optionally exported;
- These rollups serve as the basis for **network snapshots**, which can be archived or verified by external systems.

Snapshot features are designed for future support of **auditable epochs**, **config diffs**, and **external cold storage**.

---

## Sync and Consistency

PostgreSQL acts as the backbone for state synchronization:

- Node state is validated against the latest records during config sync;
- Cloud billing ensures credit deductions are committed before job dispatch;
- Admin actions (e.g., model deprecation, Subcloud modifications) propagate from here to all services.

Consistency is enforced by central orchestrators via transaction-safe mechanisms.

---

## Notes

- PostgreSQL is not used for storing raw job content — only metadata and accounting.
- Structured logs and unstructured results are stored in MongoDB.
- Caching and ephemeral state are delegated to Redis.
