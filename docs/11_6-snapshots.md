---
title: Snapshots
slug: /storage/snapshots
description: Planned support for network state, job snapshots, and configuration history.
---

# Snapshots

Resultity introduces a planned mechanism for long-term versioning and snapshotting to improve auditability, reproducibility, and fault recovery across the platform.

These features are designed to support consistent rollbacks, track configuration changes, and enable reliable re-deployment of network states.  
Snapshots serve as historical anchors that reflect the state of the system at a given point in time.

---

## Planned Capabilities

- **Versioned job snapshots**  
  Periodic export of job metadata and execution state for rollback or auditing;

- **Hashed config copies**  
  Cryptographically verifiable versions of key configuration files used by nodes;

- **Temporary network state freezing**  
  Captures a consistent view of the live network (active jobs, nodes, balances) for inspection or export;

- **History of config and admin changes**  
  Records changes to system structure, role permissions, and infrastructure parameters;

- **Launch from snapshot**  
  Enables bootstrapping a new network version based on a preserved snapshot (e.g., for testnet forks or disaster recovery).

---

Snapshots are stored in PostgreSQL or exported to external storage systems as needed.  
They are primarily used for centralized validation, not for full I/O replay (handled separately).
