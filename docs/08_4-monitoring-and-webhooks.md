---
title: Monitoring and Webhooks
slug: /inference/monitoring
description: Tools for tracking usage, detecting anomalies, and integrating webhooks for job completion.
---

# Monitoring and Webhooks

Resultity provides tools for tracking API usage, debugging issues, and integrating with external systems. These tools are especially useful for teams managing multiple keys, projects, or Subclouds.

## Monitoring Tools

### Usage Statistics

- Detailed usage reports per namespace, key, or model;
- Includes token count, request duration, cost per request, and latency metrics;
- Exportable in CSV and accessible via API.

### Anomaly Detection

- Built-in alerts for abnormal behavior:
  - Unusual usage spikes;
  - Unexpected latency or error rates;
  - Model unavailability or job failures;
- Helps detect misuse, overload, or model-specific issues.

### Audit Logs

- Tracks job history, success/failure state, and metadata;
- Useful for billing reconciliation, debugging, and compliance;
- Visibility depends on user permissions and namespace ownership.

## Webhooks (Planned)

Webhooks enable asynchronous delivery of job results:

- Configure one or more webhook URLs per namespace;
- Each completed job triggers a POST request with job data and result;
- Webhooks support retries and HMAC verification for security.

### Use Cases

- Send results to internal dashboards or workflows;
- Integrate with no-code tools (e.g., n8n, Zapier);
- Automate post-processing (e.g., storing responses, triggering downstream actions).

### Configuration

- Webhooks can be configured via the account dashboard or API;
- Optional filtering by model, request type, or status.

---

These tools give developers insight into how their credits are being used, how performant their requests are, and how to scale usage safely and effectively.
