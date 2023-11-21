// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '编程笔记',
  tagline: '软件开发是一门技术，更是一门艺术！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://antic.dev',
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
        id: 'minecraft',
        path: 'minecraft',
        routeBasePath: 'minecraft',
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
        id: 'javascript',
        path: 'javascript',
        routeBasePath: 'javascript',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'react',
        path: 'react',
        routeBasePath: 'react',
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
        id: 'php',
        path: 'php',
        routeBasePath: 'php',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'laravel',
        path: 'laravel',
        routeBasePath: 'laravel',
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'python',
        path: 'python',
        routeBasePath: 'python',
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
            to: '/laravel/Intro',
            label: 'Laravel',
            position: 'left',
            activeBaseRegex: `/laravel/`,
          },
          {
            to: '/javascript/Intro',
            label: 'JavaScript',
            position: 'left',
            activeBaseRegex: `/javascript/`,
          },
          {
            to: '/react/Intro',
            label: 'React',
            position: 'left',
            activeBaseRegex: `/reat/`,
          },
          {
              to: '/linux/Intro',
              label: 'Linux',
              position: 'left',
              activeBaseRegex: `/linux/`,
          },
          {
            to: '/python/Intro',
            label: 'Python',
            position: 'left',
            activeBaseRegex: `/python/`,
          },
          {
            to: '/live/Intro',
            label: 'Live',
            position: 'left',
            activeBaseRegex: `/live/`,
          },
          {
            to: '/minecraft/Intro',
            label: 'Minecraft',
            position: 'left',
            activeBaseRegex: `/minecraft/`,
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
    }),
};

export default config;
