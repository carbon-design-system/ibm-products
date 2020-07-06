/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { select } from '@storybook/addon-knobs';
import React from 'react';

import { sectionTitle } from '../../config';
import { Decorator } from '..';

const { Critical, Low, High, Medium, Unknown } = Decorator;

const sizes = [Unknown.defaultProps.size, 12];

const props = () => ({
  description: 'Description',
  size: select('Size (size)', sizes, sizes[0]),
});

export const statusIcons = () => (
  <>
    <Critical {...props()} />
    <Low {...props()} />
    <High {...props()} />
    <Medium {...props()} />
    <Unknown {...props()} />
  </>
);

export default {
  title: `${sectionTitle}/Decorator`,
  component: Decorator,
};
