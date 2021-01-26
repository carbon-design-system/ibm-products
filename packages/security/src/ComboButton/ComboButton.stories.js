/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { sectionTitle } from '../../config';
import { ComboButton, ComboButtonItem } from '..';

import styles from './_combo-button.scss';

export default {
  title: `${sectionTitle}/${ComboButton.name}`,
  component: ComboButton,
  subcomponents: {
    ComboButtonItem,
  },
  parameters: { styles },
};

export const Default = () => (
  <ComboButton>
    <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 2</ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 3</ComboButtonItem>
  </ComboButton>
);
