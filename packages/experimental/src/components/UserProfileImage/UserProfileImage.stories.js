//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { UserProfileImage } from '.';
import mdx from './UserProfileImage.mdx';
import image from './charlie_64.jpg';

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
    />
  );
};


export const Default = Template.bind({});
Default.args = {};

export const WithUserIcon = Template.bind({});
WithUserIcon.args = {
  size: 'small',
  backgroundColor: 'light-gray',
  icon: 'user',
  theme: 'light'
};

export const WithGroupIcon = Template.bind({});
WithGroupIcon.args = {
  size: 'x-large',
  backgroundColor: 'light-purple',
  icon: 'group',
  theme: 'light'
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  size: 'x-large',
  backgroundColor: 'light-green',
  initials: "eva cochet weinand",
  theme: 'dark'
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: 'x-large',
  image,
};
