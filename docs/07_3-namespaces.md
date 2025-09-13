---
title: Namespaces
slug: /accounts/namespaces
description: Logical isolation of usage, billing, and job context under an account.
---

# Namespaces

A **namespace** in Resultity is a logical boundary within a user account that isolates API keys, usage statistics, credit spending, and job metadata.

## Purpose and Origin

Namespaces were introduced to support multiple parallel use cases under a single account — such as running different projects, environments, or teams — without requiring multiple logins. This structure:

- Simplifies credential management;
- Enables billing separation per unit of work;
- Keeps audit logs and statistics cleanly segmented.

Every API key is tied to a namespace. Each job executed via that key is tracked under the same namespace, with isolated accounting and logs.

## Characteristics

- **Scoped billing**: Credits are deducted from the namespace balance, not a global account pool.
- **Key grouping**: Multiple keys can exist within the same namespace.
- **Job context**: Metadata, logs, and results are grouped per namespace.
- **Non-shared**: Namespaces cannot be shared between accounts.

## Management

- Users can create, rename, or delete namespaces through the dashboard.
- API keys are issued per-namespace, and cannot be reassigned.
- Statistics and credit reports are shown per-namespace for transparency.

## Use Cases

Namespaces allow:
- Organizing usage by environment (e.g., `dev`, `prod`);
- Isolating customer projects for agencies;
- Tracking experiments separately from production loads.

## Notes

Namespaces are fully internal to an account — they are not exposed externally and have no global identifiers. Future features may include role-based access within a namespace or namespace-level webhooks.

