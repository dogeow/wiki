// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  themes: [
    // ... Your other themes.
  ],
  title: '编程笔记',
  tagline: '软件开发是一门技术，更是一门艺术！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://note.dogeow.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DogeOW', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'others',
        path: 'others',
        routeBasePath: 'others',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nav',
        path: 'nav',
        routeBasePath: 'nav',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'live',
        path: 'live',
        routeBasePath: 'live',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'web',
        path: 'web',
        routeBasePath: 'web',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'programmer',
        path: 'programmer',
        routeBasePath: 'programmer',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ai',
        path: 'ai',
        routeBasePath: 'ai',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'php',
        path: 'php',
        routeBasePath: 'php',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'linux',
        path: 'linux',
        routeBasePath: 'linux',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '编程笔记',
        logo: {
          alt: '编程笔记 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/dogeow/wiki',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/ai/Intro',
            label: 'AI',
            position: 'left',
            activeBaseRegex: `/ai/`,
          },
          {
            to: '/nav/Intro',
            label: '导航',
            position: 'left',
            activeBaseRegex: `/nav/`,
          },
          {
            to: '/programmer/Intro',
            label: '程序员',
            position: 'left',
            activeBaseRegex: `/programmer/`,
          },
          {
            to: '/php/Intro',
            label: 'PHP',
            position: 'left',
            activeBaseRegex: `/php/`,
          },
          {
            to: '/web/Intro',
            label: '网页设计',
            position: 'left',
            activeBaseRegex: `/web/`,
          },
          {
              to: '/linux/Intro',
              label: 'Linux',
              position: 'left',
              activeBaseRegex: `/linux/`,
          },
          {
            to: '/live/Intro',
            label: '生活',
            position: 'left',
            activeBaseRegex: `/live/`,
          },
          {
            to: '/others/Intro',
            label: '杂项',
            position: 'left',
            activeBaseRegex: `/others/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '旗下网站',
            items: [
              {
                label: '2B2T 服务器状态',
                href: 'https://status.mc.dogeow.com',
              },
              {
                label: 'Doge 先锋',
                href: 'https://dogeow.com',
              },
            ],
          },
          {
            title: '本网站',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dogeow/wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DogeOW. 使用 <a href="https://docusaurus.io/zh-CN" target="_blank">Docusaurus</a> 构建。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'P421MXVJ2X',

        // Public API key: it is safe to commit it
        apiKey: '3524d32000b7bf24c753e58e0dcf4444',

        indexName: 'dogeow',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

export default config;
