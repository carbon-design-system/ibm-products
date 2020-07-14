/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';

import { sectionTitle } from '../../config';
import { ICA } from '..';

import styles from './_index.scss';

const {
  defaultProps: { forceShowTotal, percentage, total },
} = ICA;

export const Default = () => (
  <ICA
    label={text('Label (label)', 'Label')}
    value={number('Value (value)', total)}
    total={number('Total (total)', total)}
    percentage={boolean('Percentage (percentage)', percentage)}
    forceShowTotal={boolean('Show total (forceShowTotal)', forceShowTotal)}
  />
);

export default {
  title: `${sectionTitle}/ICA`,
  component: ICA,
  parameters: { styles },
};
