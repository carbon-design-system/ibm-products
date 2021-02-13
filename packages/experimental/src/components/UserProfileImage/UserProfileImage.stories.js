//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';

import { UserProfileImage } from '.';
import mdx from './UserProfileImage.mdx';
import image from './charlie_64.jpg';
import { blue, cyan, gray, green, magenta, purple, teal } from '@carbon/colors';

import styles from './_storybook.scss'; // import storybook which includes component and additional storybook styles

export default {
  title: 'Experimental/UserProfileImage',
  component: UserProfileImage,
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: {
    styles,
    docs: { page: mdx },
  },
};

const Template = (args) => {
  return (
    <UserProfileImage
      {...args}
      onPrimaryClick={action('onPrimaryClick')}
      onSecondaryClick={action('onSecondaryClick')}
    />
  );
};

export const WithUserIcon = Template.bind({});
WithUserIcon.args = {
  size: 'x-large',
  backgroundColor: magenta[60],
  icon: 'user',
};

export const WithGroupIcon = Template.bind({});
WithGroupIcon.args = {
  size: 'x-large',
  backgroundColor: green[80],
  icon: 'group',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  size: 'x-large',
  //backgroundColor: purple[80],
  initials: 'eric',
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: 'x-large',
  image: 'charlie_64.jpg',
};
