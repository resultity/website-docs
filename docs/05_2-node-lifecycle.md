---
title: Node Lifecycle
slug: /nodes/node-lifecycle
description: Step-by-step overview of how a node is initialized, registered, maintained, and updated in the Resultity network.
---

# Node Lifecycle

The lifecycle of a Resultity node defines how it is initialized, connected, updated, and retired. Each stage is designed for automation, reliability, and minimal user intervention.

## 1. Installation and Initialization

To become part of the Resultity network, a user installs the Node software on a compatible device. The installer:

- Downloads the latest Agent and Runtime container images;
- Generates a new EVM-compatible key pair (if not provided);
- Prepares a local configuration and data directory;
- Assigns a permanent node ID based on the generated key.

The node is now locally initialized but not yet connected to the network.

## 2. Registration and First Contact

Upon first launch, the Agent:

- Connects to the network endpoint (`io.network.resultity.com`);
- Sends a registration request with node metadata and public key;
- Receives an initial configuration snapshot;
- Performs a test inference task to validate its readiness.

Once the test task is completed successfully, the node is marked as active and enters the scheduling pool.

## 3. Heartbeat and Monitoring

To remain eligible for job assignment, a node must:

- Send regular heartbeat pings with hardware status and model availability;
- Respond to configuration checksums to ensure version alignment;
- Accept administrative pings or soft shutdown commands from the network.

If a node misses a heartbeat window, it is temporarily excluded from job rotation until restored.

## 4. Configuration Sync

Nodes periodically check the network for configuration changes. Each configuration bundle includes:

- Approved models and required hashes;
- Job execution parameters;
- Runtime version mappings;
- Participation rules for testnet and mainnet.

If a checksum mismatch is detected, the node automatically downloads and applies the updated configuration.

## 5. Updates and Maintenance

The Agent handles self-updates for all core containers (Agent, Runtime, and approved models). Triggers for update include:

- New configuration snapshots;
- Expired model versions;
- Runtime engine patches.

All updates are authenticated using network public keys and applied without manual intervention.

## 6. Shutdown and Restart

When shut down, the node:

- Closes all active WebSocket and HTTP sessions;
- Caches incomplete job states (if applicable);
- On restart, reconnects and re-validates the environment.

If the node was previously registered, no re-initialization is required.

---

The Resultity node lifecycle ensures stable, automated operation with minimal user management — while preserving traceability, integrity, and version consistency across the network.
