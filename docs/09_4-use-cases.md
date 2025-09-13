---
title: Subcloud Use Cases
slug: /subclouds/use-cases
description: Practical applications of Subclouds, from corporate isolation to SLA-based job routing.
---

# Subcloud Use Cases

Subclouds provide flexibility in how inference workloads are routed, hosted, and managed within the Resultity network.  
They enable fine-grained control over privacy, performance, model availability, and regulatory compliance.

---

## Corporate Clusters

- Enterprises can create private Subclouds with selected nodes (e.g., self-hosted or trusted vendors);
- Ensures full control over where and how jobs are processed;
- May include internal models, business logic, or restricted data access.

## Custom or Fine-Tuned Models

- Subclouds allow deployment of fine-tuned or proprietary models separate from the global pool;
- Ideal for specialized domains such as legal, medical, finance, or local languages;
- Jobs targeting these models are routed only to eligible nodes.

## SLA Pools

- Nodes that meet latency, availability, or GPU class guarantees can form SLA-compliant Subclouds;
- Users or organizations requiring stable performance can route requests to these pools;
- SLA enforcement and monitoring is handled by the central layer.

## Regional Compliance

- Subclouds can be created based on node geography (e.g., EU-only, US-only, Indonesia-only);
- Enables jurisdiction-specific compliance (e.g., GDPR, data residency laws);
- May use regional gateways and routing optimizations.

## Thematic or Model-Type Subclouds

- Dedicated clusters for certain types of models or use cases:
  - **Multimodal** Subclouds (e.g., image + audio models);
  - **Open-weights only** (no proprietary models);
  - **Healthcare**-only clusters (subject to enhanced trust levels).

## Partner and Community Subclouds

- Resultity partners (e.g., universities, research groups, cloud providers) can launch branded Subclouds;
- May include community governance, public dashboards, or co-incentives;
- Ideal for growing decentralized capacity with trust anchors.

---

Subclouds offer a modular, extensible way to structure the decentralized network without fragmenting its core.  
They allow specialization, compliance, and performance guarantees — while maintaining interoperability.
