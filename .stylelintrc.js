module.exports = {
  extends: ['stylelint-config-carbon'],
  plugins: ['stylelint-plugin-carbon-tokens'],
  rules: {
    'max-nesting-depth': null,
    'scss/no-global-function-names': null,
    'csstools/use-logical': null,
    'scss/load-no-partial-leading-underscore': null,
    'scss/double-slash-comment-inline': null,
    'no-duplicate-selectors': null,

    'carbon/layout-use': null,
    'carbon/theme-use': null,
    'carbon/type-use': null,
    'carbon/motion-duration-use': null,
    'carbon/motion-easing-use': null,
  },
};
