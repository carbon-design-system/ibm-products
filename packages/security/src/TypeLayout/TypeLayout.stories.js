/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';

import { sectionTitle } from '../../config';
import { TypeLayout, TypeLayoutBody, TypeLayoutCell, TypeLayoutRow } from '..';

import styles from './_index.scss';

const {
  defaultProps: { border, size },
} = TypeLayout;

const sizes = ['xs', 'sm', size, 'lg'];

const array = (arrayLength) => new Array(arrayLength).fill();

const prop = (rowIndex, cellIndex) => {
  const value = `TypeLayoutRow[${rowIndex}] TypeLayoutCell[${cellIndex}].children`;

  return text(`Cell text (${value})`, value);
};

export const Default = () => (
  <TypeLayout
    size={select('Size (size)', sizes, size)}
    border={boolean('Border (border)', border)}>
    <TypeLayoutBody>
      {array(3).map((item, rowIndex) => (
        <TypeLayoutRow>
          {array(2).map((item, cellIndex) => (
            <TypeLayoutCell>{prop(rowIndex, cellIndex)}</TypeLayoutCell>
          ))}
        </TypeLayoutRow>
      ))}
    </TypeLayoutBody>
  </TypeLayout>
);

export default {
  title: `${sectionTitle}/TypeLayout`,
  component: TypeLayout,
  parameters: { styles },
};
