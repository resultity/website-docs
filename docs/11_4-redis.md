---
title: Redis
slug: /storage/redis
description: In-memory cache for live state, TTL management, node availability, and fast inference routing.
---

# Redis

Redis is the high-performance in-memory cache used across Resultity's **Network** and **Cloud** infrastructure.  
It enables fast operations that require sub-second access times, such as routing, availability checks, and temporary state management.

---

## Purpose and Role

Redis serves as a **volatile layer** for:

- Real-time TTL and ping state for active nodes;
- Online/offline node status and heartbeat verification;
- Readiness queues (idle/available nodes per model);
- Temporary disconnection flags and maintenance notices;
- GPU/memory model indexing and fast filtering;
- Suspension triggers (e.g., pause, freeze, cooldown).

This layer ensures that **inference routing and scheduling** can operate independently of slower persistent databases.

---

## Key Features

### TTL Control

- Each node’s heartbeat and status is tracked via TTL keys;
- Auto-expiry is used to detect dropped nodes in real time;
- Supports anti-stale logic for tasks, e.g., node lock expiry.

### Model and Geo Indexes

- Nodes are indexed by model, region, and runtime state;
- Used for real-time matchmaking of jobs to eligible nodes;
- Enables localized routing and load balancing.

### Pause and Ban Flags

- Admin actions can mark nodes for:
  - Forced pause (temporary removal);
  - Freeze (hard lock for violations);
  - Shadow-ban (excluded from routing but not visible to user).

### Fast Queues

- Used to manage queues of idle nodes ready to accept jobs;
- Model-specific or priority-specific routing channels.

---

## Use Cases

- Real-time inference job assignment;
- Rapid rebalancing of load after node changes;
- Auto-retry logic for failed jobs;
- Quarantine handling for misbehaving nodes;
- Edge caching for frequently accessed state (e.g., Subcloud lists).

---

## Lifecycle and Expiry

Redis data is ephemeral by design.  
It holds only the **current live state** and is flushed or expired based on TTL or system events.

If the Redis cache is lost or restarted:

- Nodes will re-register on next sync;
- Jobs in queue will be recovered via RabbitMQ;
- No long-term data is lost, as Redis is not a source of truth.

---

## Notes

- Redis is used in conjunction with RabbitMQ to coordinate routing;
- Read/write latency is optimized for less than 10ms under load;
- In multi-region deployments, Redis is replicated regionally with sync fallback to central instances.
