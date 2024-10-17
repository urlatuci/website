import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Undergraduate Research Lab @ UCI',
  url: 'https://urlatuci.org',
  baseUrl: '/',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Undergraduate Research Lab @ UCI',
      items: [
        {
          label: "Proposals",
          to: "/docs/proposals/"
        },
        {
          label: "UROP Resources",
          to: "/docs/urop/"
        },
        {
          label: "Documentation",
          to: "/docs/",
          position: "right",
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: "Undergraduate Research Lab",
          items: [
            {
              label: "Submitting a Proposal",
              to: "/docs/proposals/"
            },
            {
              label: "UROP Resources",
              to: "docs/urop/"
            }
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com/urlatuci/"
            },
            {
              label: "GitHub",
              href: "https://github.com/urlatuci/"
            }
          ]
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
