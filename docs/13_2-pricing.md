---
title: API Pricing and Deductions
slug: /economy/pricing
description: How inference jobs are priced and how credits are deducted in Resultity.
---

# API Pricing and Deductions

The Resultity platform uses a transparent, credit-based billing system to ensure fair access to inference workloads and to prevent abuse.

---

## Request Cost Parameters

Each API request is priced based on multiple factors:

- **Model type** — different models have varying computational requirements;
- **Payload size** — longer prompts or outputs increase the cost;
- **Task type** — synchronous, streamed, or distributed;
- **Network load** — under high load, priority pricing may apply.

---

## Credit Deduction Timing

Credits are **deducted at job start**, not after execution.  
This guarantees:

- Reservation of payment for node operators;
- Consistent pricing visibility for the client;
- Predictable accounting in high-throughput environments.

---

## Supported Billing Schemes

The system supports:

- **Pay-per-request** — credits are deducted per job;
- **Subscription tiers** — optional credit auto-top-up plans;
- **RCP-based discounts** — contributors may receive reduced pricing as a reward.

---

## Economic Principles

- Prevent overuse by unverified accounts;
- Encourage regular usage via credit batching;
- Offer predictable cost models for business users;
- Align infrastructure incentives with demand.

By maintaining a simple and auditable billing flow, Resultity ensures both **usability for inference consumers** and **sustainability for node operators**.
