//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';
import mdx from './ExampleComponent.mdx';
import { pkg } from '../../global/js/settings';
import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, 'ExampleComponent');

import { ExampleComponent } from '.';

import styles from './_storybook.scss'; // import storybook which includes component and additional storybook styles

export default {
  title: `${storybookPrefix}/ExampleComponent`,
  component: ExampleComponent,
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: { styles },
  docs: {
    page: mdx,
  },
};

const Template = (args) => {
  return (
    <ExampleComponent
      {...args}
      onPrimaryClick={action('onPrimaryClick')}
      onSecondaryClick={action('onSecondaryClick')}
    />
  );
};

export const BoxedSet = Template.bind({});
BoxedSet.args = {
  borderColor: '#141414',
  boxedBorder: true,
  disabled: false,
};

export const ShadowSet = Template.bind({});
ShadowSet.args = {
  borderColor: '#141414',
  boxedBorder: false,
  disabled: false,
};

export const Minimal = Template.bind({});
Minimal.args = {};
