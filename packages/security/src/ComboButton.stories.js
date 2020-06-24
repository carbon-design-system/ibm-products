/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComboButton, ComboButtonItem } from '@carbon/ibm-security';
import React from 'react';

import '@carbon/ibm-security/scss/components/ComboButton/_index.scss';

export const Default = () => (
  <ComboButton>
    <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 2</ComboButtonItem>
  </ComboButton>
);

export default {
  title: 'IBM Security/ComboButton',
  component: ComboButton,
};
