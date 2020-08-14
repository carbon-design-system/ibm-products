/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { sectionTitle } from '../../config';
import { ComboButton, ComboButtonItem } from '..';
import styles from './_index.scss';

export const Default = ({ onClick, ...props }) => (
  <ComboButton {...props}>
    <ComboButtonItem onClick={onClick}>ComboButtonItem 1</ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 2</ComboButtonItem>
  </ComboButton>
);

const {
  defaultProps: { direction, ...defaultProps },
} = ComboButton;

export default {
  title: `${sectionTitle}/ComboButton`,
  component: ComboButton,
  subcomponents: {
    ComboButtonItem,
  },
  parameters: { styles },
  args: { ...defaultProps, direction },
  argTypes: {
    direction: {
      control: { type: 'select', options: [direction, 'bottom'] },
    },
    onClick: { action: 'onClick' },
  },
};
