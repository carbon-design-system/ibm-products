/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

/**
 * @param {string} input
 * @param {object} packageJson
 */
function create(input, packageJson) {
  const {
    dependencies = {},
    devDependencies = {},
    peerDependencies = {},
  } = packageJson;

  const baseConfig = {
    input,
    external: [
      ...Object.keys(dependencies),
      ...Object.keys(devDependencies),
      ...Object.keys(peerDependencies),
    ],
    plugins: [
      babel({
        exclude: /node_modules/,
        babelrc: false,
        presets: [require.resolve('babel-preset-ibm-cloud-paks')],
        babelHelpers: 'bundled',
      }),
      nodeResolve(),
      commonjs({
        include: /node_modules/,
      }),
    ],
  };

  return [
    {
      ...baseConfig,
      output: {
        file: 'es/index.js',
        format: 'esm',
      },
    },
    {
      ...baseConfig,
      output: {
        file: 'lib/index.js',
        format: 'commonjs',
      },
    },
  ];
}

module.exports = {
  create,
};
