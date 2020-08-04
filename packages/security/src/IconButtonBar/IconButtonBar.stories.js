/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Add16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { number, select } from '@storybook/addon-knobs';
import React from 'react';

import { sectionTitle } from '../../config';
import { IconButtonBar } from '..';

import styles from './_index.scss';

const {
  defaultProps: { length, size },
  name,
} = IconButtonBar;

const actions = new Array(length).fill().map((item = 'Action', index) => ({
  label: `${item} ${index}`,
  onClick: action('onClick'),
  renderIcon: Add16,
}));

const sizes = ['sm', 'md', size, 'xl'];

export const Default = () => (
  <IconButtonBar
    actions={actions}
    length={number('Length (length)', length)}
    size={select('Size (size)', sizes, size)}
  />
);

export default {
  title: `${sectionTitle}/${name}`,
  component: IconButtonBar,
  parameters: { styles },
};
