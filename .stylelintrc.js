module.exports = {
  root: true,
  extends: ['stylelint-config-carbon'],
  plugins: ['stylelint-plugin-carbon-tokens'],
  rules: {
    // ADDED TO TEST CARBON USE
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
