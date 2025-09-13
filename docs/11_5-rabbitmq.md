---
title: RabbitMQ
slug: /storage/rabbitmq
description: Distributed task queue and message broker used to manage inference jobs, routing, retries, and fallback logic.
---

# RabbitMQ

RabbitMQ is the central **job queue and routing backbone** for Resultity’s inference system.  
It handles delivery, retries, load balancing, and fallback logic for requests flowing between the Cloud and the Node network.

This component ensures **job isolation, prioritization, and recovery** without depending on shared state.

---

## Role in Inference Flow

When a user submits a request:

1. The Cloud validates and prepares the job;
2. A job message is pushed to RabbitMQ;
3. Available nodes pull and reserve jobs via the queue;
4. Upon execution, results are returned and acknowledged;
5. Failures are retried or rerouted per policy.

---

## Core Features

### Queueing and Categorization

- Separate queues for job types:
  - Sync, polling, batch, stream;
  - Per-model, per-priority, or Subcloud-specific queues;
- Allows dynamic scaling and prioritization.

### Reservation and Retry

- Once a job is picked by a node, it becomes “reserved”;
- If unacknowledged in time, it returns to the queue;
- Retry logic supports fallback to alternate nodes;
- Limits on retries and cooldown between attempts.

### TTL and Timeouts

- Per-job TTL ensures expired jobs are discarded;
- Message expiration triggers failover or logging;
- Queue policies allow quarantine of dead-letter jobs.

### Priority and Isolation

- Jobs can be assigned priority classes (urgent, bulk, test);
- SLA pools or private Subclouds can isolate queues;
- Helps enforce latency targets and tenant fairness.

---

## Use Cases

- Decoupling inference job creation from execution;
- Preventing overload by buffering requests;
- Ensuring reliability across intermittent node availability;
- Allowing central orchestration with distributed execution.

---

## Monitoring and Control

- Admin dashboard displays queue health, throughput, failure rates;
- Per-job tracking and retry logs are linked to MongoDB;
- Queue metrics are exposed to internal observability tools (planned Grafana dashboards).

---

## Notes

- RabbitMQ operates independently of Redis and PostgreSQL;
- Its decoupled architecture enables robust failure recovery;
- In future, job routing logic may support plugins (e.g., reward-based scheduling).
