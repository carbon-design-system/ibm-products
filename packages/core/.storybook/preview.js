/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import React, { useEffect } from 'react';

import index from './index.scss';

const Style = ({ children, styles }) => {
  const { unuse, use } = styles;

  useEffect(() => {
    use();

    return () => unuse();
  });

  return children;
};

const decorators = [
  withInfo,
  withKnobs,
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

export { decorators, parameters };
