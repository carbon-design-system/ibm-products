/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { resolve } = require('path');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /(-story|.stories).js$/,
        },
      },
    },
    '@storybook/addon-viewport',
    '@storybook/addon-mdx-gfm',
    '@carbon/storybook-addon-theme/preset.js',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      //   fastRefresh: true,
      //   strictMode: true,
    },
  },
  features: {
    // setting storyStoryV7 to false allows the storybook to build
    storyStoreV7: false, // 👈 Opt out of on-demand story loading - problems https://github.com/storybookjs/storybook/issues/21696
  },
  stories: [
    '../../ibm-products/+(docs|src)/**/*+(-story|.stories).*',
    '../+(docs|src)/**/*+(-story|.stories).*',
    '../../../examples/**/*+(-story|.stories).*',
  ],
  // v11 will only show stories for C4P components (or at least until CDAI/Security move from v10 to v11)
  webpackFinal: async (configuration, { configType }) =>
    merge(configuration, {
      cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
      },
      module: {
        rules: [
          {
            test: /\.stories\.js$/,
            loader: 'babel-loader',
            options: require('babel-preset-ibm-cloud-cognitive')(),
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  // https://webpack.js.org/loaders/style-loader/#lazystyletag
                  injectType: 'lazyStyleTag',
                },
              },
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: [
                      resolve(__dirname, '..', 'node_modules'),
                      resolve(__dirname, '..', '..', '..', 'node_modules'),
                    ],
                  },
                  warnRuleAsWarning: true,
                  sourceMap: true,
                },
              },
            ],
          },
        ],
      },
      resolve: {
        alias: {
          ALIAS_STORY_STYLE_CONFIG$: path.resolve(
            configType === 'DEVELOPMENT'
              ? '../ibm-products/src/config-dev.scss'
              : '../ibm-products/src/config.scss'
          ),
        },
      },
    }),
};
