const path = require('path');

module.exports = {
    title: 'Qovery',
    tagline: 'Deploy complex application, seamlessly',
    url: 'https://qovery.com',
    baseUrl: '/',
    favicon: 'img/logo-square.svg',
    organizationName: 'Qovery',
    projectName: 'documentation',
    customFields: {
        metadata: require('./metadata'),
    },
    themeConfig: {
        disableDarkMode: false,
        /*announcementBar: {
            id: 'support_us', // Any value that will identify this message
            content: 'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
            backgroundColor: '#fafbfc', // Defaults to `#fff`
            textColor: '#091E42', // Defaults to `#000`
        },*/
        navbar: {
            hideOnScroll: true,
            logo: {
                alt: 'Qovery',
                src: 'img/logo-light.svg',
                srcDark: 'img/logo-dark.svg',
                url: 'https://www.qovery.com'
            },
            links: [
                {href: 'https://www.qovery.com', label: "Home", position: 'left'},
                // {to: 'components/', label: 'Components', position: 'left'},
                {to: 'guides/', label: 'Guides', position: 'left'},
                {to: 'docs/', label: 'Docs', position: 'left'},
                //{to: 'blog/', label: 'Blog', position: 'left'},
                {to: 'community/', label: 'Community', position: 'left'},
                // {to: 'releases/', label: 'Download', position: 'right'},
                {href: 'https://github.com/Qovery', label: "GitHub", position: 'right'},
            ],
        },
        image: 'img/open-graph.png',
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        footer: {
            links: [
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Pricing',
                            to: 'https://www.qovery.com/pricing',
                        },
                        {
                            label: 'Enterprise',
                            to: 'https://www.qovery.com/enterprise',
                        },
                        {
                            label: 'API',
                            to: 'https://api.qovery.io/swagger-ui.html#',
                        },
                        {
                            label: 'Github',
                            to: 'https://github.com/Qovery',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            to: 'https://discord.qovery.com',
                        },
                        {
                            label: 'Roadmap',
                            to: 'https://roadmap.qovery.com',
                        },
                    ],
                },
                {
                    title: 'Company',
                    items: [
                        {
                            label: 'Blog',
                            to: 'https://www.qovery.com/blog',
                        },
                        {
                            label: 'The Team',
                            to: 'https://www.qovery.com/team',
                        },
                        {
                            label: 'Contact Us',
                            to: 'https://www.qovery.com/contact',
                        },
                    ],
                },
            ],
            /* logo: {
                 alt: 'Qovery.com',
                 src: '/img/logo-light.svg',
                 srcDark: '/img/logo-dark.svg',
                 href: 'https://www.qovery.com',
             },*/
            copyright: `© ${new Date().getFullYear()} DESIGNED BY QOVERY | BACKED BY TECHSTARS | QOVERY BY BIRDSIGHT - ALL RIGHTS RESERVED`,
        },
        algolia: {
            appId: '8UWX20JUZ7',
            apiKey: 'd00b02cc517347c75a0b2fd59d4354b1',
            indexName: 'qovery_documentation',
            algoliaOptions: {}, // Optional, if provided by Algolia
        },
    },
    presets: [],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                editUrl: 'https://github.com/Qovery/documentation/edit/master/website/',
                sidebarPath: require.resolve('./sidebars.js')
            }
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                feedOptions: {
                    type: 'all',
                    copyright: `Copyright © ${new Date().getFullYear()} Qovery, Inc.`,
                    baseUrl: ''
                }
            }
        ],
        path.resolve(__dirname, './plugins/guides'),
        ['@docusaurus/plugin-content-pages', {}],
        [path.resolve(__dirname, './plugins/sitemap'), {}]
    ],
    scripts: [],
    stylesheets: [
        'https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro',
        'https://at-ui.github.io/feather-font/css/iconfont.css'
    ],
    themes: [
        [
            '@docusaurus/theme-classic',
            {
                customCss: require.resolve('./src/css/custom.css')
            }
        ],
        '@docusaurus/theme-search-algolia'
    ]
};