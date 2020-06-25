/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComboButton, ComboButtonItem } from '@carbon/ibm-security';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';

import '@carbon/ibm-security/scss/components/ComboButton/_index.scss';

export const Default = () => (
  <ComboButton>
    <ComboButtonItem onClick={action('onClick')}>
      {text('ComboButtonItem (ComboButtonItem.children)', 'ComboButtonItem 1')}
    </ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 2</ComboButtonItem>
  </ComboButton>
);

export default {
  title: 'Security/ComboButton',
  component: ComboButton,
};
