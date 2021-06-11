/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Tokens come in an an array not split into type
// here we split based on the name excluding the numeric part.
// This is to maintain the ability to separate out sizes not called out
// on the carbon designs system website.
import { unstable_tokens as tokens } from '@carbon/layout';
import { formatTokenName } from '@carbon/themes';

const carbonPrefix = '$carbon--';

const containerTokens = [];
const fluidSpacingTokens = [];
const iconSizeTokens = [];
const layoutTokens = [];
const spacingTokens = [];
const layoutFunctions = ['carbon--mini-units', 'mini-units'];

for (const key in tokens) {
  const token = formatTokenName(tokens[key]);

  const tokenWithoutNumber = token.substr(0, token.lastIndexOf('-'));
  let tokenArray = undefined;

  switch (tokenWithoutNumber) {
    case 'container':
      tokenArray = containerTokens;
      break;
    case 'fluid-spacing':
      tokenArray = fluidSpacingTokens;
      break;
    case 'icon-size':
      tokenArray = iconSizeTokens;
      break;
    case 'layout':
      tokenArray = layoutTokens;
      break;
    case 'spacing':
      tokenArray = spacingTokens;
      break;
    default:
      // eslint-disable-next-line no-console
      console.warn(
        `Unexpected token "${token}" found in @carbon/layout - please raise an issue`
      );
  }

  if (tokenArray) {
    tokenArray.push(`$${token}`);
    tokenArray.push(`${carbonPrefix}${token}`);
  }
}

export {
  containerTokens,
  fluidSpacingTokens,
  iconSizeTokens,
  layoutFunctions,
  layoutTokens,
  spacingTokens,
};
