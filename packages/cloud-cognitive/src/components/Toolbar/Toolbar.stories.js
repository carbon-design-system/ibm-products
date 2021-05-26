/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';

import { Toolbar } from '.';
import mdx from './Toolbar.mdx';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, Toolbar.displayName);

export default {
  title: `${storybookPrefix}/${Toolbar.displayName}`,
  component: Toolbar,
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <Toolbar
      primaryButtonLabel="Primary"
      secondaryButtonLabel="Secondary"
      onPrimaryClick={action('onPrimaryClick')}
      onSecondaryClick={action('onSecondaryClick')}
      {...args}
    />
  );
};

export const Toolbar = Template.bind({});
Toolbar.args = {};

export const boxedSet = Template.bind({});
boxedSet.args = {
  ...Toolbar.args,
  borderColor: '#141414',
  boxedBorder: true,
};
