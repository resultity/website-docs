---
title: Credits
slug: /accounts/credits
description: Internal currency used to pay for inference jobs and platform services.
---

# Credits

**Credits** are the internal billing unit of Resultity. They are required to execute inference jobs and use platform resources such as API endpoints, Subclouds, and storage.

Each account holds a credit balance, which is consumed per job according to pricing rules defined by the Cloud.

## Characteristics

- **Prepaid**: Credits must be topped up in advance using supported payment methods;
- **Granular**: Pricing is calculated per token, request, or compute duration depending on the model and endpoint;
- **Isolated**: Usage is scoped at the **namespace** level, not per-account;
- **Consumable**: Once used, credits are not refundable or transferable.

## Where Credits Apply

Credits are required for:

- Running inference jobs (sync, async, batch, stream);
- Hosting Subclouds with reserved node capacity;
- Accessing advanced agent functionality in Space (planned);
- Unlocking premium models or runtimes with higher cost tiers.

## Mainnet Behavior

- **Before TGE**, users top up credits using **stablecoins** (e.g., USDT, USDC);
- **After TGE**, payments are made in the **$RTITY**; token
- Post-TGE, stablecoin payments may still be accepted, but they will be automatically converted into tokens at market price to preserve token economics.

## Testnet Behavior

On **Testnet**, credits may be distributed freely or earned through participation:

- No payment required;
- Used for validating backend, billing logic, and token pricing hypotheses;
- May use test tokens or internal reward mechanics.

Credits from testnet do not carry over to mainnet.

## Visibility and Management

- Credit balances are visible per namespace in the dashboard;
- Usage reports are available by API key, model, or job type;
- Exportable logs and analytics dashboards are available via API;
- Optional low-balance alerts and auto top-up (planned).

## Earning Credits

During testnet or campaigns, users may receive **bonus credits** for:

- Running nodes;
- Completing test jobs;
- Providing feedback;
- Referring new users.

These credits are **non-transferable** and may expire.

## Notes

Credits are off-chain units and **not a token**. They are not tradable or movable between accounts. Credit logic and pricing models may evolve across epochs and network phases.
