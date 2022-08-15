/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// this fixes a problem where functions at the start of interpolation
// blocks are mis-parsed, producing stylelint errors. It should be
// possible to drop this once https://github.com/stylelint-scss/stylelint-config-standard-scss/issues/14 is fixed.
const fixInterpolation = (fn) => `/^(?:\\#\\{)?${fn}/`;

// preferably the SASS built-in functions would be known to stylelint
// and this set will be unnecessary. It should be possible to drop this
// once https://github.com/stylelint-scss/stylelint-config-standard-scss/issues/14 is fixed.
const sassBuiltInFunctions = [
  'hsl$',
  'hsla$',
  'if$',
  'rgb$',
  'rgba$',
  'map-',
].map(fixInterpolation);

const carbonFunctions = ['carbon-', 'motion$', 'z$'].map(fixInterpolation);

const ignoreFunctions = [...sassBuiltInFunctions, ...carbonFunctions];

module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
    // -----
    // Rather than extend 'stylelint-config-carbon' we
    // extend the things it extends, so that we can use
    // newer versions of the standard configs which avoid
    // problems with rules that have been removed. Once
    // stylelint-config-carbon updates to newer versions
    // this whole section can be removed and replaced with
    // just 'stylelint-config-carbon' again!
    'stylelint-config-standard',
    'stylelint-no-unsupported-browser-features',
    'stylelint-config-idiomatic-order',
    ...require('stylelint-config-carbon').extends.filter((value) =>
      value.match(/stylelint-config-carbon\/(?!node_modules)/)
    ),
    // -----
  ],
  plugins: ['stylelint-plugin-carbon-tokens'],
  rules: {
    'scss/double-slash-comment-inline': null,
    'scss/comment-no-empty': null,
    'function-no-unknown': [true, { ignoreFunctions }],

    // the following rule can be reinstated once we migrate
    // to scss modules and no longer support old sass versions
    'scss/no-global-function-names': null,

    'carbon/layout-token-use': [true, { severity: 'error' }],
    'carbon/motion-duration-use': [true, { severity: 'error' }],
    'carbon/motion-easing-use': [true, { severity: 'error' }],
    'carbon/theme-token-use': [true, { severity: 'error' }],
    'carbon/type-token-use': [
      true,
      {
        severity: 'error',
        acceptCarbonTypeScaleFunction: true,
        acceptCarbonFontWeightFunction: true,
      },
    ],
    'no-duplicate-selectors': null,
    'annotation-no-unknown': [true, { ignoreAnnotations: ['default'] }],
  },
};
