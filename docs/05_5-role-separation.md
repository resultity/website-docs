---
title: Role Separation
slug: /nodes/role-separation
description: Distinct roles of accounts, agents, and runtimes in the Resultity node architecture.
---

# Role Separation

Resultity separates the responsibilities of ownership, control, and execution across distinct components to ensure clarity, modularity, and auditability. This separation of roles is essential for secure operation, delegated management, and future multi-user or organizational participation.

## Account (User Role)

A **Resultity account** represents the human (or organization) that owns one or more nodes. Accounts are responsible for:

- Managing node registration and identity;
- Holding the private key used for binding nodes;
- Accessing the dashboard, credit balance, and rewards;
- Defining participation preferences (e.g. Testnet/Mainnet, Subclouds).

An account can authenticate via EVM wallet or email. Over time, additional features like team management and delegated control will be introduced.

## Agent (Control Role)

The **Agent** is a software component running on the node. It acts as the control layer and is responsible for:

- Communicating with the network;
- Signing and sending all node-originated messages;
- Receiving job assignments and managing execution;
- Applying updates, installing models, and syncing configuration.

The Agent operates autonomously after installation and uses the node’s EVM key to authenticate its actions.

## Runtime (Execution Role)

The **Runtime** is an isolated container that performs inference using a pre-approved model. It is launched and managed by the Agent.

Runtime responsibilities include:

- Executing the model on input payloads;
- Ensuring resource availability (e.g., GPU);
- Returning raw inference results to the Agent.

Runtime does not communicate directly with the network and cannot affect other parts of the system.

## Why Role Separation Matters

This design pattern supports:

- **Security**: Limits the blast radius of compromised components;
- **Scalability**: Enables clear upgrade and monitoring paths;
- **Multi-tenancy**: Allows future delegation of control or billing without breaking node logic;
- **Transparency**: Each action is traceable to its actor — account, Agent, or Runtime.

---

In Resultity, clean separation of control, execution, and ownership enables modular development, secure operations, and user-focused governance.
