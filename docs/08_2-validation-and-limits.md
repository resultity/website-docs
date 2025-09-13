---
title: Validation and Limits
slug: /inference/validation
description: Request validation, limits, and error handling in Resultity API.
---

# Validation and Limits

To ensure security, reliability, and fairness, the Resultity API enforces strict validation and usage limits for all incoming inference requests.

## Request Validation

Each request passes through a validation pipeline:

- **Schema check** — required fields (e.g. `model`, `prompt`, `messages`) and type validation;
- **Model availability** — the requested model must be currently served by at least one node;
- **API key verification** — checked against namespace, usage quota, and credit balance;
- **Limit enforcement** — token, rate, and resource limits;
- **Secure modes** (planned) — for some requests (e.g. in Space), cryptographic signatures may be required.

Invalid requests are rejected with detailed error messages and appropriate HTTP codes.

## Rate Limits

Each API key is subject to rate limiting to ensure fair resource sharing:

- **Requests per second** (e.g. 30–120 RPS depending on plan and network load);
- **Burst limits** — short spikes are allowed within tolerance windows;
- **Global and per-endpoint** thresholds;
- **Namespace-level aggregation** for enterprise setups.

Limits may be relaxed or adjusted for specific keys (e.g. testnet campaigns or high-volume plans).

## Credit Limits

Credits are required to execute jobs.  
Before accepting a job:

- A **credit check** is performed;
- The corresponding amount is **reserved** (pre-charged);
- After successful completion, credits are **deducted**;
- If the job fails or times out, credits are refunded automatically.

---

These limits protect both the platform and its users by preventing abuse, ensuring predictability, and preserving availability.
