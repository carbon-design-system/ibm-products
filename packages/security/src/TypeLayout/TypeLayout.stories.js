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

export const Default = () => (
  <TypeLayout
    size={select('Size (size)', sizes, size)}
    border={boolean('Border (border)', border)}>
    <TypeLayoutBody>
      <TypeLayoutRow>
        <TypeLayoutCell>
          {text(
            'Cell text (TypeLayoutRow[0] TypeLayoutCell[0].children)',
            'Title'
          )}
        </TypeLayoutCell>
        <TypeLayoutCell>
          {text(
            'Cell text (TypeLayoutRow[0] TypeLayoutCell[1].children)',
            'Description'
          )}
        </TypeLayoutCell>
      </TypeLayoutRow>
      <TypeLayoutRow>
        <TypeLayoutCell>Title</TypeLayoutCell>
        <TypeLayoutCell>Description</TypeLayoutCell>
      </TypeLayoutRow>
      <TypeLayoutRow>
        <TypeLayoutCell>Title</TypeLayoutCell>
        <TypeLayoutCell>Description</TypeLayoutCell>
      </TypeLayoutRow>
    </TypeLayoutBody>
  </TypeLayout>
);

export default {
  title: `${sectionTitle}/TypeLayout`,
  component: TypeLayout,
  parameters: { styles },
};
