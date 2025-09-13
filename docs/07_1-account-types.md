---
title: Account Types
slug: /accounts/account-types
description: Roles and segmentation of accounts in Resultity.
---

# Account Types

Resultity distinguishes between different types of user interaction, which are reflected in the account architecture. Accounts may serve one or more roles depending on usage patterns.

## Roles and Uses

- **Inference Consumers**  
  Users who access the API to run model inference. They operate with API keys and consume credits.

- **Node Operators**  
  Users who run compute nodes and contribute inference capacity to the network. Nodes are linked to an EVM wallet address and an account.

- **Account Holders**  
  All users with access to the platform dashboard. The account stores information about API keys, nodes, credits, referrals, and activity history.

- **Referrers**  
  Accounts that participate in the referral program and receive Resultity Contribution Points (RCP) or other rewards for bringing in new users or operators.

## Identity and Binding

- Each node is associated with a wallet address and bound to an account.
- The wallet is used to sign node activity (e.g., heartbeat, job completion).
- API keys are managed at the account level and used for cloud access.
- One account may include multiple roles simultaneously.

## Notes

- There is no distinction between individual and team accounts at the current stage.
- Node operation and API consumption may happen under the same account.
- Account creation is available via email or wallet.

