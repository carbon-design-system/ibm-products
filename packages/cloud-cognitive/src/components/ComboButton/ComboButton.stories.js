/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CloudApp16 from '@carbon/icons-react/lib/cloud-app/16';
import React from 'react';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { prepareStory } from '../../global/js/utils/story-helper';

import { ComboButton, ComboButtonItem } from '..';

import styles from './_combo-button.scss';

const storybookPrefix = getStorybookPrefix(pkg, ComboButton.displayName);

export default {
  title: `${storybookPrefix}/${ComboButton.displayName}`,
  component: ComboButton,
  subcomponents: {
    ComboButtonItem,
  },
  parameters: { styles },
};

export const Default = prepareStory(() => (
  <ComboButton>
    <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
    <ComboButtonItem renderIcon={CloudApp16}>ComboButtonItem 2</ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 3</ComboButtonItem>
  </ComboButton>
));
