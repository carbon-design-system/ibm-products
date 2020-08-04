/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';

import { sectionTitle } from '../../config';
import { Decorator } from '..';

import styles from './_index.scss';

const {
  active,
  inline,
  noIcon,
  onClick,
  scoreThresholds,
} = Decorator.defaultProps;

const score = scoreThresholds[0];

export const Default = () => (
  <Decorator
    type={text('Type (type)', 'IP')}
    value={text('Value (value)', '0.0.0.0')}
    score={number('Score (score)', score, {
      max: scoreThresholds[scoreThresholds.length - 1],
      min: score,
      range: true,
    })}
    inline={boolean('Inline (inline)', inline)}
    noIcon={boolean('No icon (noIcon)', noIcon)}
    active={boolean('Active (active)', active)}
    onClick={boolean('onClick (onClick)', true) ? action('onClick') : onClick}
  />
);

export default {
  title: `${sectionTitle}/Decorator`,
  component: Decorator,
  parameters: { styles },
};
