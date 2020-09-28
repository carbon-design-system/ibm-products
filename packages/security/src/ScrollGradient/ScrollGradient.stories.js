/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { miniUnits } from '@carbon/layout';
import { uiBackground } from '@carbon/themes';

import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';

import { sectionTitle } from '../../config';
import { ScrollGradient } from '..';

import styles from './_index.scss';

const {
  defaultProps: { hideStartGradient },
  ScrollDirection: { X },
} = ScrollGradient;

const dimension = 40;
const dimensions = miniUnits(dimension);

const props = () => ({
  style: { height: dimensions, width: dimensions },
});

const children = new LoremIpsum().generateParagraphs(dimension / 10);

export default {
  title: `${sectionTitle}/ScrollGradient`,
  component: ScrollGradient,
  parameters: {
    knobs: {
      disabled: true,
    },
    styles,
  },
  args: { color: uiBackground, hideStartGradient },
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
};

export const Default = (args) => (
  <ScrollGradient {...args} {...props()}>
    {children}
  </ScrollGradient>
);

export const horizontal = (args) => (
  <ScrollGradient {...args} {...props()} direction={X}>
    <div style={{ width: miniUnits(dimension * 2) }}>{children}</div>
  </ScrollGradient>
);
