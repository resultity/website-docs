module.exports = {
  sidebar: [
    // Flat top-level entries
    'intro',
    '01-what-is-resultity',
    '02-platform-architecture',
    '03-key-concepts',
    '04-architectural-principles',

    {
      type: 'category',
      label: 'Nodes',
      collapsed: true,
      items: [
        '05_1-what-is-a-node',
        '05_2-node-lifecycle',
        '05_3-agent-core',
        '05_4-runtime-inference',
        '05_5-role-separation',
        '05_6-configuration-synchronization',
        '05_7-storage-and-local-data',
        '05_8-model-management',
      ],
    },
    {
      type: 'category',
      label: 'Network and Protocols',
      collapsed: true,
      items: [
        '06_1-architecture-of-network-services',
        '06_2-data-exchange-with-nodes',
        '06_3-job-queue-and-routing',
        '06_4-fairness-mechanisms',
        '06_5-geo-clustering',
        '06_6-api-roles',
      ],
    },
    {
      type: 'category',
      label: 'Accounts and Access',
      collapsed: true,
      items: [
        '07_1-account-types',
        '07_2-api-keys',
        '07_3-namespaces',
        '07_4-credits',
        '07_5-referrals',
      ],
    },
    {
      type: 'category',
      label: 'Inference API',
      collapsed: true,
      items: [
        '08_1-inference-api',
        '08_2-validation-and-limits',
        '08_3-request-types',
        '08_4-monitoring-and-webhooks',
        '08_5-model-launch-stages',
      ],
    },
    {
      type: 'category',
      label: 'Subclouds',
      collapsed: true,
      items: [
        '09_1-subclouds-overview',
        '09_2-subcloud-creation',
        '09_3-auto-joining',
        '09_4-use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Web Interfaces',
      collapsed: true,
      items: [
        '10_1-web-overview',
        '10_2-cloud-dashboard',
        '10_3-network-dashboard',
        '10_4-account-portal',
        '10_5-space-portal',
        '10_6-status-explorer',
      ],
    },
    {
      type: 'category',
      label: 'Storage',
      collapsed: true,
      items: [
        '11_1-storage-overview',
        '11_2-postgresql',
        '11_3-mongodb',
        '11_4-redis',
        '11_5-rabbitmq',
        '11_6-snapshots',
      ],
    },
    {
      type: 'category',
      label: 'Token and Blockchain',
      collapsed: true,
      items: [
        '12_1-blockchain-overview',
        '12_2-token-credits-payments',
        '12_3-governance-and-updates',
      ],
    },
    {
      type: 'category',
      label: 'Economy',
      collapsed: true,
      items: [
        '13_1-rcp',
        '13_2-pricing',
      ],
    },

   
    '14_telegram-assistant',
    '15_sdk',
  ],
};
