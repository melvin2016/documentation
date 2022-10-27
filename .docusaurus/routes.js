import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b45'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '910'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bd0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '556'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0e1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ee0'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'aa0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c70'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '317'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '984'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'e7c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c94'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '5cc'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '27b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '98e'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', 'f12'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'dfe'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '438'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ede'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', '267'),
    exact: true
  },
  {
    path: '/openapi/',
    component: ComponentCreator('/openapi/', 'a0b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6cd'),
    routes: [
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', 'ee4'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', '786'),
            routes: [
              {
                path: '/docs/next/dev-docs/api/admin-panel-api',
                component: ComponentCreator('/docs/next/dev-docs/api/admin-panel-api', '462'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/next/dev-docs/development/backend-customization/controllers',
                component: ComponentCreator('/docs/next/dev-docs/development/backend-customization/controllers', '5f6'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/next/dev-docs/development/backend-customization/middlewares',
                component: ComponentCreator('/docs/next/dev-docs/development/backend-customization/middlewares', 'f2b'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/next/hello',
                component: ComponentCreator('/docs/next/hello', '944'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/next/user-docs/content-types-builder/configuring-fields-content-type',
                component: ComponentCreator('/docs/next/user-docs/content-types-builder/configuring-fields-content-type', '51d'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/next/user-docs/content-types-builder/creating-new-content-type',
                component: ComponentCreator('/docs/next/user-docs/content-types-builder/creating-new-content-type', 'e10'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/next/user-docs/content-types-builder/introduction-to-content-types-builder',
                component: ComponentCreator('/docs/next/user-docs/content-types-builder/introduction-to-content-types-builder', 'c7f'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/next/user-docs/content-types-builder/managing-content-types',
                component: ComponentCreator('/docs/next/user-docs/content-types-builder/managing-content-types', '0e7'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/next/user-docs/intro',
                component: ComponentCreator('/docs/next/user-docs/intro', 'e38'),
                exact: true,
                sidebar: "userDocsSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '806'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '893'),
            routes: [
              {
                path: '/docs/dev-docs/api/admin-panel-api',
                component: ComponentCreator('/docs/dev-docs/api/admin-panel-api', '480'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/dev-docs/development/backend-customization/controllers',
                component: ComponentCreator('/docs/dev-docs/development/backend-customization/controllers', '95e'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/dev-docs/development/backend-customization/middlewares',
                component: ComponentCreator('/docs/dev-docs/development/backend-customization/middlewares', '8ad'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/hello',
                component: ComponentCreator('/docs/hello', '978'),
                exact: true,
                sidebar: "devDocsSidebar"
              },
              {
                path: '/docs/user-docs/content-types-builder/configuring-fields-content-type',
                component: ComponentCreator('/docs/user-docs/content-types-builder/configuring-fields-content-type', '4d9'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/user-docs/content-types-builder/creating-new-content-type',
                component: ComponentCreator('/docs/user-docs/content-types-builder/creating-new-content-type', 'bcd'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/user-docs/content-types-builder/introduction-to-content-types-builder',
                component: ComponentCreator('/docs/user-docs/content-types-builder/introduction-to-content-types-builder', '294'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/user-docs/content-types-builder/managing-content-types',
                component: ComponentCreator('/docs/user-docs/content-types-builder/managing-content-types', 'bfb'),
                exact: true,
                sidebar: "userDocsSidebar"
              },
              {
                path: '/docs/user-docs/intro',
                component: ComponentCreator('/docs/user-docs/intro', '54e'),
                exact: true,
                sidebar: "userDocsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a4b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
