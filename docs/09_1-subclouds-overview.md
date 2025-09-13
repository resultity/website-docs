---
title: Subclouds
slug: /subclouds
description: Logical isolation units within the Resultity network that define custom node groups, model access, and SLAs.
---

# Subclouds

A **Subcloud** is a logically isolated subnetwork within the Resultity infrastructure. It includes only nodes that match specific criteria and policies set by the Subcloud owner.  
Subclouds are used to implement **custom model groups**, **geographic segmentation**, **private compute clusters**, and **SLA enforcement**.

Each Subcloud acts as a virtual "subnetwork" where inference traffic is routed only through eligible nodes. Nodes can belong to both the global network and one or more Subclouds, unless explicitly isolated.

---

## Purpose and Benefits

Subclouds offer:

- **Custom Model Isolation** — Run only selected models within a dedicated environment;
- **Jurisdictional Routing** — Group nodes by country, region, or regulatory domain;
- **Private Clusters** — Host internal models or APIs for teams or enterprises;
- **Quality Control** — Enforce minimum latency, hardware specs, or availability;
- **Access Policies** — Restrict usage via token, whitelist, or binding.

They enable users to define secure and performant compute environments on top of the Resultity mesh.

---

## Governance and Participation

- Subclouds are created by individual users, teams, or organizations;
- Each Subcloud defines its own participation rules — open, semi-open, or private;
- Nodes may auto-join compatible Subclouds if permitted;
- A Subcloud may isolate its nodes from the global routing table (`isolate` mode);
- Creation may require verification, staking, or approval (planned).

---

## Examples

- A team deploying a fine-tuned model for internal use;
- A compliance-focused Subcloud with EU-only nodes;
- A healthcare Subcloud limited to specific audited models;
- A high-SLA Subcloud with only verified GPUs and latency caps;
- A thematic Subcloud with only multimodal models.

Subclouds are key to Resultity’s modularity — allowing users to shape compute topology to their use case.

