---
title: Configuration Synchronization
slug: /nodes/configuration-synchronization
description: How nodes receive and apply configuration snapshots from the Resultity network.
---

# Configuration Synchronization

Configuration synchronization is the mechanism by which Resultity nodes stay aligned with the current network state. Rather than relying on fixed values, each node periodically fetches a signed configuration snapshot from the network and compares it with its local version.

This snapshot-driven design ensures consistency across nodes while preserving flexibility for upgrades and policy changes.

## Configuration Snapshot

The configuration is distributed as a signed object that includes:

- **Model list** — allowed model names, hashes, and versions;
- **Runtime container definitions** — required engine images and tags;
- **Job parameters** — default token limits, max queue size, execution timeout;
- **Participation rules** — Testnet/Mainnet modes, Subcloud policies;
- **TTL settings** — heartbeat intervals, retry timers, cache durations;
- **Update triggers** — hash of latest approved versions for Agent and Runtime.

Each snapshot is identified by a `config_digest` (checksum). This digest is compared to the one stored locally.

## Synchronization Process

1. The Agent periodically queries the network (e.g. `io.network.resultity.com`);
2. If a new digest is detected, it downloads the updated snapshot;
3. The Agent validates the snapshot’s signature using the public key of the network;
4. Upon successful validation, the configuration is applied:
   - Containers may be reloaded;
   - Models may be installed or removed;
   - Participation flags may be updated;
5. The local record of the digest is updated.

If validation fails or the network is unreachable, the node continues operating with the last known configuration.

## Automatic Application

Configuration updates do not require user intervention. The Agent handles all:

- Pulling and verifying updates;
- Restarting containers if necessary;
- Notifying the Runtime of environment changes.

Changes are atomic and logged locally for auditability.

## Use Cases

- Rolling out a new model version;
- Updating performance parameters;
- Enabling or disabling Subcloud participation;
- Requiring updated container images;
- Introducing new job validation rules.

---

Configuration snapshots allow Resultity to coordinate a decentralized fleet of nodes with minimal trust and no manual synchronization — while preserving auditability, rollback capability, and compatibility across environments.
