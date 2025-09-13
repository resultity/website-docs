---
title: Agent (Core)
slug: /nodes/agent-core
description: Description of the Agent component responsible for control logic and network communication in a Resultity node.
---

# Agent (Core)

The **Agent** is the control-layer component of a Resultity node. It manages the node’s lifecycle, handles job assignment, maintains communication with the network, and coordinates local execution via the Runtime.

The Agent is designed to run as a containerized service and is isolated from direct user access. It acts as the trusted interface between the node and the broader Resultity infrastructure.

## Responsibilities

The Agent is responsible for:

- **Network communication**:
  - Establishing persistent WebSocket connections to `io.network.resultity.com`;
  - Handling heartbeat pings and receiving job assignments;
  - Performing status checks and reporting node metadata.

- **Cryptographic operations**:
  - Signing job results, heartbeat reports, and control messages using the node’s EVM private key;
  - Verifying configuration updates issued by the network.

- **Job coordination**:
  - Accepting job instructions from the network;
  - Validating job parameters and compatibility with installed models;
  - Dispatching input to the Runtime and collecting outputs.

- **Runtime orchestration**:
  - Launching the Runtime container with required parameters;
  - Monitoring the health of the Runtime and restarting it if needed;
  - Triggering test runs after model updates.

- **Configuration and updates**:
  - Comparing local and remote configuration hashes;
  - Fetching and applying updated snapshots;
  - Automatically updating containers and model images.

## Security and Integrity

The Agent ensures trust and traceability via:

- **EVM-based signatures**: every outbound message is signed using the node’s private key;
- **Message structure**: signed messages include nonce or timestamp to prevent replay attacks;
- **Hash validation**: updates and models are verified by SHA-based or Merkle-based checksums;
- **Connection hygiene**: connections are dropped and re-established if invalid behavior is detected.

## Interaction Summary

| Action                         | Triggered by      | Destination                   |
|-------------------------------|-------------------|--------------------------------|
| Heartbeat                     | Timer             | `io.network.resultity.com`     |
| Job request handling          | Server push       | `io.network.resultity.com`     |
| Config fetch and sync         | Local checksum    | `io.network.resultity.com`     |
| Model test run                | New install       | Runtime container              |
| Signature verification        | All messages      | Network services               |

---

The Agent is the operational brain of the node — enforcing policy, mediating execution, and securely relaying all network communication.
