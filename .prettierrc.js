/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const {
  jsxBracketSameLine,
  ...prettierConfig
} = require('prettier-config-carbon');

// This setting is deprecated, undo Carbon usage as this appears to cause a conflict between
// `yarn format` and the current version of the VS Code plugin.
//
// https://prettier.io/docs/en/options.html#deprecated-jsx-brackets
//

module.exports = prettierConfig;
