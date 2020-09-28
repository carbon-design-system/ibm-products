/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { withInfo } from '@storybook/addon-info';
import addons from '@storybook/addons';
import React, { useEffect } from 'react';

import {
  CARBON_CURRENT_THEME,
  // CARBON_TYPE_TOKEN,
} from './addon-carbon-theme/shared';

import index from './index.scss';

const Style = ({ children, styles }) => {
  const { unuse, use } = styles;

  useEffect(() => {
    use();

    return () => unuse();
  }, []);

  return children;
};

const decorators = [
  withInfo,
  (storyFn, { parameters: { styles } }) => {
    const story = storyFn();

    return (
      <Style styles={index}>
        {styles ? <Style styles={styles}>{story}</Style> : story}
      </Style>
    );
  },
];

const parameters = {
  layout: 'centered',
};

addons.getChannel().on(CARBON_CURRENT_THEME, (theme) => {
  document.documentElement.setAttribute('storybook-carbon-theme', theme);
});

// addons.getChannel().on(CARBON_TYPE_TOKEN, ({ tokenName, tokenValue }) => {
//   const root = document.documentElement;
//   const [fontSize, lineHeight] = tokenValue.split('-');
//   const rem = (px) =>
//     `${
//       px / parseFloat(getComputedStyle(document.documentElement).fontSize)
//     }rem`;
//   root.style.setProperty(
//     `--${customPropertyPrefix}-${tokenName}-font-size`,
//     rem(fontSize)
//   );
//   root.style.setProperty(
//     `--${customPropertyPrefix}-${tokenName}-line-height`,
//     rem(lineHeight)
//   );
// });

export { decorators, parameters };
