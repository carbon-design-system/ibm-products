module.exports = {
  extends: ['stylelint-config-carbon'],
  plugins: ['stylelint-plugin-carbon-tokens', 'stylelint-use-logical'],
  rules: {
    'max-nesting-depth': null,
    'scss/no-global-function-names': null,
    'csstools/use-logical': null,
    'scss/load-no-partial-leading-underscore': null,
    'scss/double-slash-comment-inline': null,
    'no-duplicate-selectors': null,

    'carbon/layout-use': true,
    'carbon/motion-duration-use': [true, { severity: 'warning' }],
    'carbon/motion-easing-use': true,
    'carbon/theme-use': true,
    'carbon/type-use': true,

    // CSS Logical properties
    'csstools/use-logical': 'ignore',
  },
};
