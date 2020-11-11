/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
    main,
    module,
    peerDependencies = {},
  } = packageJson;

  const baseConfig = {
    input,
    external: [
      ...Object.keys(dependencies),
      ...Object.keys(devDependencies),
      ...Object.keys(peerDependencies),
      'prop-types',
    ],
    plugins: [
      babel({
        exclude: /node_modules/,
        babelrc: false,
        presets: [require.resolve('babel-preset-ibm-cloud-cognitive')],
        babelHelpers: 'bundled',
      }),
      commonjs({
        include: /node_modules/,
      }),
      nodeResolve(),
    ],
  };

  // https://github.com/carbon-design-system/carbon/issues/5442

  return [
    {
      ...baseConfig,
      output: {
        file: module,
        format: 'esm',
      },
    },
    {
      ...baseConfig,
      output: {
        file: main,
        format: 'commonjs',
      },
    },
  ];
}

module.exports = {
  create,
};
