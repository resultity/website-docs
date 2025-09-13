---
title: Subcloud Creation
slug: /subclouds/creation
description: Parameters and policies for creating Subclouds in the Resultity network.
---

# Subcloud Creation

Creating a Subcloud in Resultity allows users to define their own compute environment, shaped by model support, trust level, and regional compliance.  
Subclouds are configured through the dashboard or API by specifying a set of filtering and policy parameters.

---

## Configuration Parameters

Subcloud creators define the following:

- **Models**  
  A whitelist of models allowed to run within the Subcloud (e.g., `mistral`, `gemma`, `bark`).  
  Helps isolate specific model behavior, licensing scopes, or performance tiers.

- **Geo-filters**  
  Restrict nodes by physical or declared location (e.g., only EU/US nodes).  
  Enables compliance with regional policies, data sovereignty, or latency optimization.

- **Trust Level**  
  Minimum trust requirements for node inclusion:  
  - Verified hardware fingerprint;  
  - Host reputation;  
  - Stake or uptime history.

- **Service Level Agreements (SLAs)**  
  Define performance expectations, such as:  
  - Latency thresholds;  
  - Minimum uptime;  
  - Capacity reservation (e.g., GPU type, VRAM floor).

- **Join Policy**  
  Controls how nodes can join the Subcloud:
  - `open`: any matching node may join;
  - `semi-open`: require approval or staking;
  - `closed`: manually assigned by owner.

---

## Access and Permissions

- Subcloud creation may require:
  - Account verification;
  - Holding or staking $RTITY tokens;
  - Admin-level privileges (for global or critical segments).

- Management interfaces:
  - **Web Dashboard**: Create and manage via UI;
  - **API**: For programmatic control and automation.

---

## Notes

- A Subcloud may be flagged as `isolate`, removing its nodes from the global routing pool;
- Multiple Subclouds can overlap in criteria — nodes may join several if not restricted;
- Model policies and node behavior are re-evaluated on each config sync.

