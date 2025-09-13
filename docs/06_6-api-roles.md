---
title: API Roles
slug: /network/api-roles
description: Access boundaries and function of Resultity network APIs.
---

# API Roles

The Resultity platform defines several API surfaces and web interfaces, each with a specific function and access level. These interfaces are organized by subdomain and reflect the layered responsibilities of the system.

## Categorization by Role

| API / UI         | Purpose                                             | Used By               |
|------------------|------------------------------------------------------|------------------------|
| **Cloud API**     | OpenAI-compatible endpoint for submitting inference requests. Handles key-based authorization, credit deduction, and returns results. | API clients, apps, Subclouds |
| **Gate API**      | Manages user accounts, node configurations, bindings, subscriptions, and token generation. | Web dashboard, CLI     |
| **IO API**        | Node entrypoint via WebSocket. Handles job delivery, heartbeat, job submission, and logs. | Node Agent             |
| **Status API**    | Returns public and cached data about network state, available models, node load, and version requirements. | CLI tools, node heartbeat, dashboards |
| **Account UI**    | Web interface for user profile management, including API keys, referral tracking, and credit purchases. | Users and teams        |
| **Network UI**    | Node management dashboard. Shows job history, logs, config hash, and Runtime status. | Node operators         |
| **Space UI**      | Interface for managing agents, templates, prompt chains, vector projects, and automation flows. | Advanced users, builders |

## Access Model

Each interface is authenticated and scoped:

- **Cloud API**: requires an active API key with credit balance.
- **Gate API**: used by authenticated users via access token (session or CLI).
- **IO API**: authenticated using node identity and signature (bound to account).
- **Status API**: publicly accessible, no authentication needed.
- **Web UIs**: session-based access with scoped permissions.

## Deployment and Routing

These interfaces are served from the following subdomains:

- `cloud.resultity.com` — Cloud API
- `gate.network.resultity.com` — Gate API
- `io.network.resultity.com` — IO API
- `status.network.resultity.com` — Status API
- `account.resultity.com` — Account UI
- `network.resultity.com` — Network UI
- `space.resultity.com` — Space UI

## Notes

- APIs are versioned internally but remain backward-compatible within each major rollout.
- IO API requires persistent WebSocket connection initiated by the node’s Agent component.
- Cloud API supports synchronous and asynchronous modes (including streaming and polling).
- Space UI and Admin API may be unavailable or limited during early testnet phases.

