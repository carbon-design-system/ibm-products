module.exports = {
  root: true,
  extends: ['stylelint-config-ibm-products'],
  rules: {
    // set failing rules (not fixed by --fix) to warning
    'max-nesting-depth': [2, { severity: 'warning' }],
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
      },
    ],
    'no-descending-specificity': [true, { severity: 'warning' }],
    'declaration-property-value-disallowed-list': [
      { '/.*/': ['unset'] },
      { severity: 'warning' },
    ],
    // ADDED TO TEST CARBON USE
    'carbon/layout-token-use': [
      true,
      {
        severity: 'warning',
        acceptCarbonMiniUnitsFunction: true,
      },
    ],
    'carbon/motion-token-use': [true, { severity: 'warning' }],
    'carbon/theme-token-use': [true, { severity: 'warning' }],
    'carbon/type-token-use': [
      true,
      {
        severity: 'warning',
        acceptCarbonTypeScaleFunction: true,
        acceptCarbonFontWeightFunction: true,
      },
    ],
  },
};
