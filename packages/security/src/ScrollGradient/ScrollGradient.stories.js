/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { miniUnits } from '@carbon/layout';
import { uiBackground } from '@carbon/themes';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';

import { LoremIpsum } from 'lorem-ipsum';
import React from 'react';

import { sectionTitle } from '../../config';
import { ScrollGradient } from '..';

import styles from './_index.scss';

const {
  defaultProps: { hideStartGradient },
  ScrollDirection,
} = ScrollGradient;

const dimension = 40;
const dimensions = miniUnits(dimension);

const props = () => ({
  color: color('Color (color)', uiBackground),
  hideStartGradient: boolean(
    'Hide start gradient (hideStartGradient)',
    hideStartGradient
  ),
  style: { height: dimensions, width: dimensions },
});

const children = new LoremIpsum().generateParagraphs(dimension / 10);

const Default = () => <ScrollGradient {...props()}>{children}</ScrollGradient>;

const horizontal = () => (
  <ScrollGradient {...props()} direction={ScrollDirection.X}>
    <div style={{ width: miniUnits(dimension * 2) }}>{children}</div>
  </ScrollGradient>
);

export default {
  title: `${sectionTitle}/ScrollGradient`,
  component: ScrollGradient,
  parameters: { styles },
};

export { Default, horizontal };
