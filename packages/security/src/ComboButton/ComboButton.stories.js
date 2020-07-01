/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import React from 'react';

import { security } from '../../../core/.storybook';
import { ComboButton, ComboButtonItem } from '..';

import './_index.scss';

export const Default = () => (
  <ComboButton>
    <ComboButtonItem onClick={action('onClick')}>
      ComboButtonItem 1
    </ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 2</ComboButtonItem>
  </ComboButton>
);

export default {
  title: security('ComboButton'),
  component: ComboButton,
};
