/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: process.env.BABEL_ENV === 'cjs' && 'commonjs',
        targets: {
          browsers: ['extends browserslist-config-carbon'],
          node: '12',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
