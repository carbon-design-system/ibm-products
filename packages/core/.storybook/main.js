/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { resolve } = require('path');
const merge = require('webpack-merge');

module.exports = {
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              resolve(__dirname, '..', '..', '..', 'node_modules'),
            ],
          },
        },

        // https://webpack.js.org/loaders/style-loader/#lazystyletag
        styleLoaderOptions: {
          injectType: 'lazyStyleTag',
        },
      },
    },
  ],

  stories: ['../docs/**/*.stories.*', '../../**/*.stories.*'],
  webpackFinal: async (configuration) =>
    merge(configuration, {
      module: {
        rules: [
          {
            test: /\.stories\.js$/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        ],
      },
    }),
};
