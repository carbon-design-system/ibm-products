/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { merge } = require('webpack-merge');
const { dirname, join, resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const maxAssetSize = 1024 * 1024;

module.exports = {
  staticDirs: ['../public'],
  addons: [
    getAbsolutePath('@storybook/addon-actions'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-controls'),
    getAbsolutePath('@storybook/addon-links'),
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /(-story|.stories).js$/,
        },
      },
    },
    getAbsolutePath('@storybook/addon-viewport'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    '@carbon/storybook-addon-theme/preset.js',
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
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
    '../../**!(node_modules)/**!(node_modules)/*.mdx',
    '../../**!(node_modules)/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    // '../../ibm-products/+(docs|src)/**/*+(-story|.stories).*',
    // '../../ibm-products-community/+(docs|src)/**/*+(-story|.stories).*',
    // '../+(docs|src)/**/*+(-story|.stories).*',
    // '../../../examples/**/*+(-story|.stories).*',
  ],

  typescript: {
    reactDocgen: 'react-docgen', // Favor docgen from prop-types instead of TS interfaces
  },

  // v11 will only show stories for C4P components (or at least until CDAI/Security move from v10 to v11)
  webpackFinal: async (configuration, { configType }) =>
    merge(configuration, {
      optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30 * 1024,
          maxSize: maxAssetSize,
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            minify: TerserPlugin.esbuildMinify,
            terserOptions: {
              minify: true,
            },
          }),
        ],
      },
      performance: {
        maxAssetSize: maxAssetSize,
      },
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
          ALIAS_STORY_STYLE_CONFIG$: resolve(
            configType === 'DEVELOPMENT'
              ? '../ibm-products-styles/src/config-dev.scss'
              : '../ibm-products-styles/src/config.scss'
          ),
        },
      },
    }),
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
