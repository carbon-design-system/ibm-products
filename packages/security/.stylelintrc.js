/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  extends: ['stylelint-config-ibm-products'],
  ignoreFiles: ['**/css-gridish/**'],
  rules: {
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
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          ...require('../../config/stylelint-config-ibm-products/index').rules[
            'function-no-unknown'
          ][1].ignoreFunctions,
          '/^security-/',
          'get-component-namespace',
          'deprecate',
        ],
      },
    ],
    'carbon/layout-token-use': [
      true,
      { severity: 'error', acceptUndefinedVariables: true, carbonPath: 'packages/security/node_modules/@carbon' },
    ],
    'carbon/motion-duration-use': [
      true,
      { severity: 'error', acceptUndefinedVariables: true, carbonPath: 'packages/security/node_modules/@carbon'  },
    ],
    'carbon/motion-easing-use': [
      true,
      { severity: 'error', acceptUndefinedVariables: true, carbonPath: 'packages/security/node_modules/@carbon'  },
    ],
    'carbon/theme-token-use': [
      true,
      { severity: 'error', acceptUndefinedVariables: true, carbonPath: 'packages/security/node_modules/@carbon'  },
    ],
    'carbon/type-token-use': [
      true,
      {
        severity: 'error',
        acceptCarbonTypeScaleFunction: true,
        acceptCarbonFontWeightFunction: true,
        acceptUndefinedVariables: true,
        carbonPath: 'packages/security/node_modules/@carbon'
      },
    ],
  },
};
