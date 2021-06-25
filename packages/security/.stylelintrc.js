/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  extends: '../../.stylelintrc',
  rules: {
    'carbon/layout-token-use': null,
    'carbon/theme-token-use': null,
    'declaration-property-value-disallowed-list': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['/^spacing-/'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
  },
};
