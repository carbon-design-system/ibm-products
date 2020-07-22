/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { boolean, select, text } from '@storybook/addon-knobs';

import { LoremIpsum } from 'lorem-ipsum';

import React from 'react';

import { sectionTitle } from '../../config';
import { TypeLayout, TypeLayoutBody, TypeLayoutCell, TypeLayoutRow } from '..';

import styles from './_index.scss';

const {
  defaultProps: { border, size },
} = TypeLayout;

const sizes = ['xs', 'sm', size, 'lg'];
const lorem = new LoremIpsum();

export const Default = () => (
  <TypeLayout
    size={select('Size (size)', sizes, size)}
    border={boolean('Border (border)', border)}>
    <TypeLayoutBody>
      <TypeLayoutRow>
        <TypeLayoutCell>{lorem.generateWords(1)}</TypeLayoutCell>
        <TypeLayoutCell>{lorem.generateSentences(1)}</TypeLayoutCell>
      </TypeLayoutRow>
      <TypeLayoutRow>
        <TypeLayoutCell>{lorem.generateWords(2)}</TypeLayoutCell>
        <TypeLayoutCell>{lorem.generateSentences(2)}</TypeLayoutCell>
      </TypeLayoutRow>
      <TypeLayoutRow>
        <TypeLayoutCell>{lorem.generateWords(3)}</TypeLayoutCell>
        <TypeLayoutCell>{lorem.generateSentences(3)}</TypeLayoutCell>
      </TypeLayoutRow>
    </TypeLayoutBody>
  </TypeLayout>
);

export default {
  title: `${sectionTitle}/TypeLayout`,
  component: TypeLayout,
  parameters: { styles },
};
