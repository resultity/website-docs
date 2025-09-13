---
title: Token, Credits, and Payments
slug: /blockchain/token
description: Token utility, credits, rewards, and payment structure in Resultity.
---

# Token, Credits, and Payments

Resultity operates a dual-layer economic model that separates the **$RTITY token** from internal **credits** and **RCP (Resultity Contribution Points)**.  
This design ensures price stability for clients and fair reward distribution for infrastructure contributors, while progressively transitioning the ecosystem to token-based operations.

---

## Credits

- **Credits** are the internal accounting unit used to pay for API calls and inference;
- Users acquire credits using $RTITY tokens;
- Pricing depends on:
  - Model type;
  - Token length;
  - SLA guarantees (e.g., latency, replication);
- Credits are deducted per request and are **non-transferable**;
- Top-ups can be manual or subscription-based;
- During complex or long-running jobs, credits may be **locked in escrow** to guarantee availability of funds for node operators.

Credits offer stable pricing for users and decouple external token volatility from service-level experience.

---

## $RTITY Token

The native token $RTITY serves multiple roles:

- Purchase of inference credits;
- Participation in governance (voting, staking);
- Access to privileged roles (e.g., Subcloud creation, node verification);
- Protocol alignment through deflationary mechanics (e.g., burning, reserve allocation).

After the **Token Generation Event (TGE)**, $RTITY becomes the **primary value and reward layer** of the Resultity platform.

---

## RCP: Resultity Contribution Points

RCP tracks and quantifies contribution across the network:

- Earned by:
  - Inference execution;
  - Uptime and SLA performance;
  - Participation in Testnet verification jobs;
  - Active Subcloud contributions;
  - Referral activity (new node operators or API users);
  - Inference usage by the account itself (especially in Testnet).

- RCP is recorded offchain but:
  - **Auditable** through snapshots;
  - **Epoch-based**, with balances fixed per period;
  - **Convertible** to $RTITY based on tokenomics rules and governance.

This ensures contribution-based rewards even before token issuance.

---

## Transition After TGE

Post-TGE changes include:

- $RTITY replaces stablecoin payments;
- API usage flows through token buybacks;
- Rewards are paid in or derived from $RTITY;
- RCP can be converted to $RTITY via snapshot checkpoints;
- Optional burn or redistribution mechanics support long-term token utility.

---

## Incentive Alignment

The Resultity economy is designed to balance:

- **Predictability for clients** — through prepaid credits;
- **Fairness for contributors** — via RCP accumulation;
- **Growth for token holders** — through staking, governance, and aligned value accrual.

This structure enables Resultity to serve both enterprise needs and the decentralized infrastructure community.

