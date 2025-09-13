---
title: Telegram Assistant
id: 14_telegram-assistant
slug: /tools/telegram-assistant
description: Planned Telegram interface for Resultity accounts and network interaction.
---

# 14. Telegram Assistant

The Telegram Assistant is a planned companion tool for interacting with the Resultity network through a familiar messaging interface.

It is being designed to support account management, reward tracking, and integration with network features — all via secure Telegram conversations.

---

## Core Use Cases

- **Account overview**  
  View balance, RCP points, active roles (node, client), and testnet progress;

- **Notifications**  
  Alerts for job completions, node status, snapshots, and new reward epochs;

- **Referral tracking**  
  Monitor referral links, invited users, and associated RCP earnings;

- **Testnet support**  
  Provide honesty checks flows, challenge confirmations, and structured feedback collection.

---

## Design Principles

- **Non-custodial** — no private key exposure, only session tokens or signature-based auth;
- **Cross-linked** — user identity tied to dashboard and Subcloud profile;
- **Lightweight** — no inference or node operations in Telegram, only control plane actions;
- **Security-aware** — only whitelisted actions permitted, with confirmation for sensitive operations.

---

## Integration

- Works alongside the Web Dashboard;
- Access controlled by linking Telegram to Resultity account via verification flow;
- Will be deployed on the official Resultity channel and bot identity.

Telegram integration enhances UX for mobile users and provides a bridge for alerts, feedback, and minimal task participation without requiring browser or CLI access.
