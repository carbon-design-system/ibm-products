/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

import React, { useEffect } from 'react';

import index from './index.scss';

addDecorator(withKnobs);

// https://github.com/storybookjs/storybook/issues/8128
addDecorator((...args) =>
  new URL(document.location).searchParams.get('viewMode') === 'docs'
    ? args[0]()
    : centered(...args)
);

const Style = ({ children, styles }) => {
  const { unuse, use } = styles;

  useEffect(() => {
    use();

    return () => unuse();
  });

  return children;
};

addDecorator((storyFn, { parameters: { styles } }) => {
  const story = storyFn();

  return (
    <Style styles={index}>
      {styles ? <Style styles={styles}>{story}</Style> : story}
    </Style>
  );
});
