// @ts-check
// Docusaurus config for Resultity Docs

const config = {
  title: 'Resultity Docs',
  tagline: 'Decentralized Inference Network',
  url: 'https://docs.resultity.com',
  baseUrl: '/',
  favicon: 'img/logo.svg',

  organizationName: 'resultity',
  projectName: 'docs',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Project Docs',
      logo: {
        alt: 'Resultity Logo',
        src: 'img/logo.svg',
        href: 'https://docs.resultity.com',
      },
      items: [
        {
          href: 'https://medium.com/@resultity',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://t.me/resultity',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://github.com/resultity',
          label: 'GitHub',
          position: 'left',
        },
        {
          href: 'https://x.com/resultity_ai',
          label: 'X',
          position: 'left',
        },
        {
          href: 'https://resultity.com',
          label: 'Main Site',
          position: 'right',
        },
      ],
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/resultity',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/resultity_ai',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog (Medium)',
              href: 'https://medium.com/@resultity',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/resultity',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'Main Site',
              href: 'https://resultity.com',
            },
            {
              label: 'Docs',
              to: '/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Resultity. All rights reserved.`,
    },
  },
};

module.exports = config;
