---
title: Job Queue and Routing
slug: /network/job-queue-and-routing
description: How inference jobs are queued, assigned to nodes, and executed in the Resultity network.
---

# Job Queue and Routing

Inference jobs submitted by users are placed into an internal queue and routed to eligible nodes via the network’s coordination logic. The routing system ensures fairness, task validity, resource alignment, and execution traceability.

All queue operations and job assignments are performed server-side by the Network component and coordinated through internal messaging and caching layers.

## Job Submission

Jobs are created when:

- A user submits an inference request through the Cloud API (`cloud.resultity.com`);
- A Subcloud schedules a batch or priority task;
- An internal test, validation, or blind job is generated.

Each job is serialized with:

- Request metadata (model, prompt, parameters);
- Target model and version;
- Expected maximum output tokens;
- Inference mode (sync, polling, batch, etc.);
- TTL and priority tier;
- Optional constraints (e.g. required GPU, region, Subcloud).

Jobs are stored temporarily in the internal queue (RabbitMQ), along with a status and reservation state.

## Scheduling Logic

The Job Scheduler evaluates pending jobs and searches for eligible nodes using criteria from Redis and configuration snapshots:

- Node must be online and not frozen or paused;
- Node must support the requested model and runtime;
- Node’s reported GPU must meet job requirements;
- Node must have sufficient availability (e.g., not overloaded);
- Subcloud participation (if required) must match.

Nodes are selected using a scoring and reservation mechanism. The best-matching node is marked as **reserved**, and the job is dispatched via WebSocket.

## Execution and Response

Once dispatched:

1. The Agent receives the job;
2. The job is validated against local configuration and model availability;
3. Runtime performs inference and returns result;
4. Agent signs and submits result to the Network;
5. Network validates the signature and finalizes the job;
6. Credits are deducted, and the node is marked ready for the next task.

If a node fails to respond within a defined timeout, the job is marked as “failed” or “timed out” and re-queued for reassignment.

## Fallback and Retry

To ensure resilience:

- Each job has a retry policy and fallback threshold;
- Nodes with repeated failures are **penalized** or **temporarily excluded** from rotation;
- Jobs may be reassigned up to a configurable retry limit.

## Testnet/Mainnet Segregation

Jobs are routed only to nodes in the same environment:

- **Testnet** jobs go only to Testnet-registered nodes;
- **Mainnet** jobs go only to Mainnet-registered nodes;
- Each node can opt into one or both modes based on configuration.

---

The job queue and routing system ensures efficient, fair, and policy-driven task distribution across the Resultity network — with isolation, recovery, and validation built into every step.
