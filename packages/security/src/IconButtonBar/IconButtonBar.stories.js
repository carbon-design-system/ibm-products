/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IconButton } from '@carbon/ibm-security';
import { Add16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import React from 'react';

import { sectionTitle } from '../../config';
import { IconButtonBar } from '..';

import styles from './_index.scss';

const {
  defaultProps: {
    iconTooltipDirection,
    length,
    overflowMenuDirection,
    size,
    tooltip,
  },
  name,
} = IconButtonBar;

const {
  TooltipDirection: { BOTTOM, TOP },
} = IconButton;

const direction = [BOTTOM, TOP];
const sizes = ['sm', 'md', size, 'xl'];

export const Default = () => (
  <IconButtonBar
    actions={new Array(length).fill().map((item = 'Action', index) => ({
      label: `${item} ${index}`,
      onClick: action('onClick'),
      renderIcon: Add16,
    }))}
    length={number('Length (length)', length - 1, { min: 0, max: length })}
    size={select('Size (size)', sizes, size)}
    tooltip={boolean('Tooltip (tooltip)', tooltip)}
    iconTooltipDirection={select(
      'Icon tooltip direction (iconTooltipDirection)',
      direction,
      iconTooltipDirection
    )}
    overflowMenuDirection={select(
      'Overflow menu direction (overflowMenuDirection)',
      direction,
      overflowMenuDirection
    )}
  />
);

export default {
  title: `${sectionTitle}/${name}`,
  component: IconButtonBar,
  parameters: { styles },
};
