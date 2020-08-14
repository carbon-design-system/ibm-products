/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { sectionTitle } from '../../config';
import { Decorator } from '..';
import styles from './_index.scss';

export const Default = (props) => <Decorator {...props} />;

const {
  defaultProps: { onClick, scoreThresholds, ...defaultProps },
} = Decorator;

const score = scoreThresholds[0];

export default {
  title: `${sectionTitle}/Decorator`,
  component: Decorator,
  parameters: { styles },
  args: {
    ...defaultProps,
    type: 'IP',
    value: '0.0.0.0',
    score,
  },
  argTypes: {
    onClick: { action: 'onClick' },
    href: {
      control: {
        type: 'text',
      },
    },
    score: {
      control: {
        type: 'range',
        min: score,
        max: scoreThresholds[scoreThresholds.length - 1],
      },
    },
  },
};
