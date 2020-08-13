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

const {
  defaultProps: { active, inline, noIcon, scoreThresholds },
} = Decorator;

const score = scoreThresholds[0];

export const Default = (props) => <Decorator {...props} />;

export default {
  title: `${sectionTitle}/Decorator`,
  component: Decorator,
  parameters: { styles },
  args: {
    type: 'IP',
    value: '0.0.0.0',
    score,
    inline,
    noIcon,
    active,
  },
  argTypes: {
    onClick: { action: 'onClick' },
    score: {
      control: {
        type: 'range',
        min: score,
        max: scoreThresholds[scoreThresholds.length - 1],
      },
    },
  },
};
