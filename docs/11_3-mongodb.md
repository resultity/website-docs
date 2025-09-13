---
title: MongoDB
slug: /storage/mongodb
description: Storage of inference input/output data, logs, and statistics for audit and analysis.
---

# MongoDB

MongoDB is the primary storage for unstructured and high-volume data in the Resultity platform.  
It is used across **Network**, **Cloud**, and **Space** services to retain job payloads, logs, execution traces, and quality control data.

---

## Purpose and Role

MongoDB is designed to store:

- Full inference requests and responses (including token-by-token traces if available);
- Detailed job logs (e.g., node ID, latency, timeouts, fallbacks, retries);
- Quality testing data, including blind jobs and evaluation prompts;
- Structured anomalies, rejections, and warnings;
- Auxiliary metadata for agent workflows and vector database syncs (in Space).

This enables **tracing**, **debugging**, and **statistical analysis** for each job, without polluting the structured PostgreSQL layer.

---

## Job Lifecycle Coverage

Each inference job results in a structured document:

- Input (e.g., prompt, model, user namespace);
- Routing (assigned node, time of assignment, fallback history);
- Output (text/image/audio, latency, token count);
- Evaluation flags (failures, low confidence, moderation triggers);
- System-level metrics (queue time, GPU stats, retry counts).

Logs are segmented by type and stored per namespace for access control.

---

## Observability and Analysis

MongoDB supports:

- Job-based filtering and search (by model, type, time, user);
- Log aggregation for dashboards and SLA enforcement;
- Export of logs to analytics systems or CSV;
- Detection of abuse, error spikes, and performance regressions.

Only jobs from the recent period (e.g., weeks/months) are retained live. Older data is archived via batch export.

---

## Archival Strategy

MongoDB is not designed for long-term storage. Archival is handled in one of two ways:

1. **Batch export** into cold storage or third-party systems (for analysis or compliance);
2. **Paid archival** (planned) via Resultity Space — long-term storage as a service.

In either case, the live database only contains active and recently completed jobs.

---

## Notes

- MongoDB is read-heavy and sharded in high-throughput zones.
- Job results are decoupled from PostgreSQL to allow scale-out without relational overhead.
- Large files (e.g., image generations, audio transcriptions) may be stored via GridFS or linked object storage.
