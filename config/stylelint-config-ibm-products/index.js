/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
    /* ----
       Rather than extend 'stylelint-config-carbon' we
       extend the things it extends, so that we can use
       newer versions of the standard configs which avoid
       problems with rules that have been removed. Once
       stylelint-config-carbon updates to newer versions
       this whole section can be removed and replaced with
       just 'stylelint-config-carbon' again! */
    'stylelint-config-standard',
    'stylelint-no-unsupported-browser-features',
    'stylelint-config-idiomatic-order',
    ...require('stylelint-config-carbon').extends.filter((value) =>
      value.match(/stylelint-config-carbon\/(?!node_modules)/)
    ),
    /* ---- */
  ],
  plugins: ['stylelint-plugin-carbon-tokens'],
  rules: {
    'scss/double-slash-comment-inline': null,
    'scss/comment-no-empty': null,

    // the following rule can be reinstated once we migrate
    // to scss modules and no longer support old sass versions
    'scss/no-global-function-names': null,

    'carbon/layout-token-use': [true, { severity: 'error' }],
    'carbon/motion-token-use': [true, { severity: 'error' }],
    'carbon/theme-token-use': [true, { severity: 'error' }],
    'carbon/type-token-use': [
      true,
      {
        severity: 'error',
        acceptCarbonTypeScaleFunction: true,
        acceptCarbonFontWeightFunction: true,
      },
    ],
  },
};
