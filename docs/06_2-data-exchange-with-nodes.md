---
title: Data Exchange with Nodes
slug: /network/data-exchange
description: Communication protocols between nodes and the Resultity network, including WebSocket and HTTP.
---

# Data Exchange with Nodes

Each Resultity node maintains an active connection with the network to receive jobs, report health status, and apply configuration updates. Communication occurs via persistent WebSocket and occasional HTTP calls, all routed through the IO service.

## Communication Channels

Nodes use the following protocols:

- **WebSocket** (`io.network.resultity.com`):
  - Receives inference jobs and control instructions;
  - Sends back results and execution confirmations;
  - Maintains an active session during node uptime.

- **HTTP** (occasional, same domain):
  - Used during registration, ping requests, and heartbeat exchange;
  - May also serve one-time sync operations (e.g., requesting the latest config digest).

All communication is signed by the node’s private key and validated by the network.

## Job Handling Flow

1. The Agent opens a persistent WebSocket connection to `io.network.resultity.com`;
2. The network pushes jobs to the node when eligible;
3. The Agent dispatches the job to Runtime and waits for a response;
4. The result is signed and sent back through the WebSocket channel;
5. Upon confirmation, the job is marked complete, and the node is returned to the queue.

If a node is unresponsive or slow, the job is reassigned and the node may be deprioritized temporarily.

## Heartbeat Protocol

The Agent periodically sends heartbeat data to the network over HTTP or lightweight socket messages. This includes:

- Node ID and software versions;
- Hardware status (e.g., GPU, memory);
- Current configuration hash;
- Installed and active model list;
- Runtime health indicators.

This allows the network to monitor node readiness and route jobs accordingly.

## Configuration Sync

If the configuration hash (`config_digest`) is outdated, the Agent requests the updated configuration via HTTP from `io.network.resultity.com`. The configuration includes:

- Model approvals;
- Runtime and container versions;
- Participation flags (e.g. Testnet/Mainnet);
- Subcloud policy info.

Updates are signed by the network and applied automatically by the Agent.

## Message Validation

All node-originated messages include:

- The node’s public ID (`node_id`);
- A cryptographic signature of the payload;
- A timestamp or nonce to prevent replay.

The network validates each message before accepting job results or applying state changes.

---

All data exchange between nodes and the network is cryptographically secure, minimal by design, and routed exclusively through the IO service — ensuring low-latency coordination with maximum isolation and integrity.
