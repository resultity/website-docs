---
title: API Keys
slug: /accounts/api-keys
description: API key structure and usage within Resultity Cloud.
---

# API Keys

Resultity uses API keys to authorize client access to the cloud inference interface. Each key is associated with an account and tied to credit-based billing and namespace isolation.

## Key Structure

- Keys are generated in the dashboard under the user’s account.
- Each key is tied to a namespace, which scopes usage and access.
- Keys are bearer credentials: possession implies access.

## Use and Scope

- API keys are required to call Cloud endpoints (OpenAI-compatible or native).
- Usage is measured in credits, deducted per request.
- Different keys under the same account may serve different projects or environments.
- Keys may be rotated or deleted from the dashboard.

## Security Notes

- API keys should be stored securely and not exposed in public code.
- Abuse of a key may lead to rate limiting or revocation.
- Requests include the key in an `Authorization` header:
  
```Authorization: Bearer <api-key>```

## Planned Features

- Per-key usage metrics;
- Key-specific limits and expiration;
- IP and endpoint restriction;
- Audit logs per namespace.