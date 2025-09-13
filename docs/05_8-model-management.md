---
title: Model Management
slug: /nodes/model-management
description: How Resultity nodes install, verify, and update inference models based on network-approved configurations.
---

# Model Management

To ensure consistency, reliability, and security across the decentralized network, Resultity nodes can only use models that are explicitly approved and listed in the configuration snapshot provided by the network.

Model installation, validation, and removal are fully automated and coordinated by the Agent.

## Approval and Verification

Each model in the Resultity network is defined by:

- **Model name and version** (e.g., `mistral-7b-instruct:v1`);
- **Content hash** (e.g., SHA256 or similar);
- **Compatibility metadata** (e.g., required GPU memory, runtime engine, supported tasks).

Before installation, the Agent checks:

- That the model is listed in the active configuration;
- That the hash of the downloaded model matches the expected value;
- That the model is compatible with the current Runtime version.

If any check fails, the model is discarded and the incident is logged.

## Installation Flow

1. The Agent receives an updated configuration snapshot that includes a new model;
2. The model is downloaded from a trusted location (defined in the snapshot or fallback settings);
3. After download, the Agent verifies the model hash and unpacks the files;
4. A **test inference job** is executed via the Runtime to validate operability;
5. If successful, the model is marked as active and becomes eligible for job routing.

If validation fails, the model is quarantined and reinstallation is scheduled on the next sync cycle.

## Model States

Each model on the node can be in one of the following states:

| State         | Description                                                  |
|---------------|--------------------------------------------------------------|
| **Pending**   | Model is downloaded but not yet validated                    |
| **Active**    | Model is verified and available for use                      |
| **Inactive**  | Model is installed but currently disabled by configuration   |
| **Failed**    | Model failed test job or hash check                          |
| **Archived**  | Model is outdated and moved to cold storage (optional)       |

The Agent periodically reviews model status and removes obsolete or unlisted models to free up space.

## Security Considerations

- All models must pass hash verification;
- Models are only fetched from network-defined sources;
- No user-provided or arbitrary models are allowed;
- Models are isolated from other containers and cannot access the network.

---

Model management in Resultity is trust-minimized and self-healing — enabling dynamic rollout of new models, fast validation, and strict consistency across decentralized infrastructure.
