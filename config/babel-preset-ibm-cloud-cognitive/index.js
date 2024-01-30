/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const {
  env: { BABEL_ENV },
} = process;

export default {
  presets: [
    [
      '@babel/preset-env',
      {
        ...(BABEL_ENV && { modules: BABEL_ENV === 'cjs' && 'commonjs' }),
        targets: {
          browsers: ['extends browserslist-config-carbon'],
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'dev-expression',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-transform-react-constant-elements',
  ],
};
