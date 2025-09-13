---
title: Auto-Joining Nodes
slug: /subclouds/auto-joining
description: How nodes discover and join Subclouds automatically based on their configuration and policies.
---

# Auto-Joining Nodes

Nodes in the Resultity network can automatically discover and join Subclouds if their parameters match the Subcloud's policies.  
This allows scalable formation of specialized clusters without requiring manual assignment for each node.

---

## Auto-Join Logic

When a node connects to the network and fetches its configuration, it receives a list of available Subclouds.  
For each Subcloud, the following conditions are checked:

- The Subcloud is **not restricted** to manual join only;
- The node **meets all filter criteria** (model support, geography, trust level);
- The node is **not explicitly banned** from the Subcloud by its owner or the central registry.

If these conditions are satisfied, the node may join the Subcloud during config sync.

---

## Join Behavior

- **Join Event**: The node marks itself as a member of the Subcloud and begins accepting jobs routed through it;
- **Re-evaluation**: On each config refresh, the node re-evaluates eligibility and may join/leave Subclouds dynamically;
- **Join Cooldown**: Some Subclouds may implement cooldown timers to prevent frequent switching.

---

## Special Cases

- **Isolated Subclouds**  
  If a Subcloud is marked as `isolate`, nodes joining it may be excluded from the global routing pool.  
  This is useful for full isolation, compliance, or dedicated inference clusters.

- **Multi-Subcloud Membership**  
  Nodes can be members of multiple Subclouds simultaneously if allowed by their config and policies.

- **Manual Override**  
  Node owners can manually opt in/out of Subclouds via the dashboard or agent CLI, unless forcibly assigned.

---

## Monitoring and Logs

- Subcloud join/leave events are logged in the node’s local state;
- Aggregated Subcloud membership is visible in the node dashboard and API;
- Subcloud owners can view current membership and node metrics in real time.

