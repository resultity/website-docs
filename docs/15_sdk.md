---
title: SDK and CLI Tools
id: 15_sdk
slug: /tools/sdk
description: Developer-facing interfaces for interacting with the Resultity platform and APIs.
---

# 15. SDK and CLI Tools

Resultity is developing a set of tools for developers and infrastructure contributors.  
These tools include a programmatic SDK and a lightweight CLI interface — both designed to interact strictly with the **platform APIs**, not with individual nodes directly.

---

## SDK Overview

The SDK provides a typed and modular interface for:

- **Inference API access** — both OpenAI-compatible and native endpoints;
- **Job submission and status polling** — via Cloud API;
- **Account and balance operations** — including credit top-ups and usage history;
- **Tracking of RCP earnings and testnet participation**;
- **Subcloud configuration and invocation**.

Planned for **Python** and **JavaScript**, with OpenAPI-generated bindings for other environments.

---

## CLI Tool

The CLI interacts with the **platform backend**, not with nodes. It allows users to:

- Authenticate via API key or signature;
- Submit inference jobs and retrieve responses;
- Monitor job status and usage;
- View RCP history and epoch stats;
- Configure Subcloud use or model routing preferences.

**All commands are routed through the centralized platform**, which communicates with the node network as needed.

---

## Design Principles

- **Indirect control path** — commands flow through platform APIs, not local node interfaces;
- **Headless-friendly** — usable on servers and in automation scripts;
- **API-consistent** — mirrors dashboard functionality and authorization flows;
- **Portable and minimal** — cross-platform with few external dependencies.

The SDK and CLI will be published as open-source tools, documented in the onboarding guides, and kept in sync with platform API changes.
