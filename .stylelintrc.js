module.exports = {
  root: true,
  extends: ['stylelint-config-carbon'],
  plugins: ['stylelint-plugin-carbon-tokens'],
  rules: {
    'scss/double-slash-comment-inline': null,
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
