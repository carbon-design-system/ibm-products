/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';

import Style from '../../../core/.storybook';
import { sectionTitle } from '../../config';

import { ComboButton, ComboButtonItem } from '..';

import styles from './_index.scss';

export const Default = () => (
  <Style styles={styles}>
    <ComboButton>
      <ComboButtonItem onClick={action('onClick')}>
        ComboButtonItem 1
      </ComboButtonItem>
      <ComboButtonItem>ComboButtonItem 2</ComboButtonItem>
    </ComboButton>
  </Style>
);

export default {
  title: `${sectionTitle}/ComboButton`,
  component: ComboButton,
};
