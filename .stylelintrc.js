module.exports = {
  root: true,
  extends: ['stylelint-config-carbon'],
  plugins: ['stylelint-carbon-use'],
  rules: {
    // ADDED TO TEST CARBON USE
    'carbon/layout-token-use': [true, { severity: 'warning' }],
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
