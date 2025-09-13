---
title: Cloud Dashboard
slug: /web/cloud
description: Panel for API consumers and developers to manage keys, credits, and query statistics.
---

# Cloud Dashboard

The **Cloud Dashboard** (`cloud.resultity.com`) is the primary interface for users interacting with the Resultity inference API.  
It is designed for developers, researchers, and integrators who submit jobs, manage billing, and monitor model usage.

This panel serves as the control center for all **API-facing activities**, including access control, request statistics, and Subcloud participation.

---

## Key Features

### API Key Management

- Create and delete API keys;
- Set request rate limits and usage quotas;
- View key-level statistics and history;
- Mark keys as test/dev or production;
- Rotate keys and revoke access.

### Credit Management

- View current credit balance per namespace;
- Top up using supported methods (stablecoins during pre-TGE, $RTITY post-TGE);
- Enable auto top-up (planned);
- View spending logs and invoice history;
- Activate low-balance alerts.

### Request Monitoring

- Real-time charts for request volume, latency, and cost;
- Filter by endpoint, model, and request type;
- Export logs by date range or API key;
- Breakdown by namespace, Subcloud, or client ID.

### Test Mode

- Run test queries in the **Testnet** environment without consuming credits;
- Preview new models, parameters, and request types;
- Useful for debugging or onboarding new team members.

---

## Planned Features

- **Webhook Configuration**  
  Setup delivery of results to a specified endpoint, especially for polling or batch requests.

- **Subcloud Management**  
  View and manage participation in Subclouds where your namespace is authorized.

- **Billing Subscriptions**  
  Subscription-based credit packages for predictable usage.

---

The Cloud Dashboard empowers API consumers with detailed control over usage, spending, and access — enabling them to scale inference operations with full observability.
