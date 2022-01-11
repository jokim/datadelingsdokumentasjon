const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Datadeling Test',
  tagline: 'Test av dokumentasjonen til prosjekt Datadeling',
  url: 'https://jokim.github.io/',
  baseUrl: '/datadeling-docs-tmp/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jokim', // Usually your GitHub org/user name.
  projectName: 'datadeling-docs-tmp', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Datadeling',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Dokumentasjon',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HK-dir, Unit, Uninett AS`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            // TODO: feil URL, lenk heller til repoet med rådata, og ikkje den
            // ferdigbygde frå build, som ser ut itl å innehalde ferdige
            // html-sider...
            'https://github.com/jokim/datadelingsdokumentasjon',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
