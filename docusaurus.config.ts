import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AQNT Developer Portal',
  tagline: 'AI-Powered Accounting Platform APIs - Build with POS, Invoicing, Estimates, Payroll, and Personal Finance',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aqnt.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aqnt', // Usually your GitHub org/user name.
  projectName: 'developer-portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [
    './src/client-modules/navbar-scroll.ts',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aqnt/developer-portal/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/aqnt-social-card.jpg',
    navbar: {
      title: 'AQNT Developer Portal',
      logo: {
        alt: 'AQNT Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'APIs',
          position: 'left',
          items: [
            {
              label: 'POS API',
              to: '/pos/overview',
            },
            {
              label: 'Payments API',
              to: '/payments/overview',
            },
            {
              label: 'Invoicing API',
              to: '/invoicing/overview',
            },
            {
              label: 'Estimates API',
              to: '/estimates/overview',
            },
            {
              label: 'Expenses API',
              to: '/expenses/overview',
            },
            {
              label: 'Purchase Orders API',
              to: '/purchase-orders/overview',
            },
            {
              label: 'Bills API',
              to: '/bills/overview',
            },
            {
              label: 'Payroll API',
              to: '/payroll/overview',
            },
            {
              label: 'Personal Finance API',
              to: '/personal-finance/overview',
            },
            {
              label: 'Bank Reconciliation API',
              to: '/bank-reconciliation/overview',
            },
            {
              label: 'Financial Reporting API',
              to: '/reporting/overview',
            },
            {
              label: 'Integrations API',
              to: '/integrations/overview',
            },
          ],
        },
        {
          href: 'https://aqnt.net',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://github.com/aqnt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
            {
              label: 'Authentication',
              to: '/authentication',
            },
            {
              label: 'API Reference',
              to: '/api-reference',
            },
          ],
        },
        {
          title: 'APIs',
          items: [
            {
              label: 'POS API',
              to: '/pos/overview',
            },
            {
              label: 'Payments API',
              to: '/payments/overview',
            },
            {
              label: 'Invoicing API',
              to: '/invoicing/overview',
            },
            {
              label: 'Estimates API',
              to: '/estimates/overview',
            },
            {
              label: 'Expenses API',
              to: '/expenses/overview',
            },
            {
              label: 'Purchase Orders API',
              to: '/purchase-orders/overview',
            },
            {
              label: 'Bills API',
              to: '/bills/overview',
            },
            {
              label: 'Payroll API',
              to: '/payroll/overview',
            },
            {
              label: 'Personal Finance API',
              to: '/personal-finance/overview',
            },
            {
              label: 'Bank Reconciliation API',
              to: '/bank-reconciliation/overview',
            },
            {
              label: 'Financial Reporting API',
              to: '/reporting/overview',
            },
            {
              label: 'Integrations API',
              to: '/integrations/overview',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Main Website',
              href: 'https://aqnt.net',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/aqnt',
            },
            {
              label: 'Support',
              href: 'https://aqnt.net/support',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AQNT. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: [
        'json',
        'bash',
        'javascript',
        'typescript',
        'python',
        'java',
        'go',
        'php',
        'ruby',
        'csharp',
        'swift',
        'kotlin',
        'rust',
        'sql',
        'yaml',
        'markdown',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
