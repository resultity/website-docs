---
title: Geo-Clustering (Planned)
slug: /network/geo-clustering
description: Planned geolocation-aware job routing and regional node prioritization in the Resultity network.
---

# Geo-Clustering (Planned)

Geo-clustering is a planned enhancement to the Resultity network that introduces region-aware routing for inference jobs. The goal is to improve performance, reduce latency, and optimize resource usage by favoring nodes that are geographically closer to the requester.

This mechanism will become available only after sufficient decentralization of the Cloud and Network layers is achieved.

## Purpose

- **Lower latency**: reduce round-trip time for API responses;
- **Load balancing**: avoid overloading global nodes by utilizing local capacity;
- **Regional compliance**: allow region-based job isolation (e.g. for jurisdictional or regulatory reasons);
- **Infrastructure optimization**: promote usage of edge GPUs or region-specific clusters.

## Basic Flow (Planned)

1. A client submits an inference request via the Cloud API;
2. The originating IP address or region metadata is detected;
3. The job is labeled with a preferred geo-zone (e.g., `EU`, `SEA`, `NA`);
4. The network attempts to route the job to an available node within that zone;
5. If no eligible node is found, the scheduler falls back to the global pool.

Geo-matching may apply to both general jobs and Subcloud-specific execution.

## Geo Zones

Initial geo-zones may be based on IP geolocation or user-declared preferences. Examples:

- `NA` – North America  
- `EU` – Europe  
- `SEA` – Southeast Asia  
- `ME` – Middle East  
- `SA` – South America

Zones can be adjusted as the network grows and more fine-grained routing is justified.

## Requirements for Activation

Geo-clustering will not be active until:

- Cloud and Network endpoints are replicated in multiple regions;
- Nodes report accurate geo metadata (IP, region tags, optional GPS);
- Trust and verification logic for geo-data is introduced;
- There are enough active nodes in each region to ensure coverage and fallback.

Until then, routing remains geo-agnostic and purely based on capability and availability.

## Subcloud Integration

Subclouds may eventually define region-specific participation criteria or restrict job execution to certain zones. Geo-clustering logic will assist in managing such pools more efficiently.

---

Geo-clustering in Resultity will enhance performance and compliance for global inference consumers, but its rollout is deferred until decentralized infrastructure can safely support region-aware routing.
