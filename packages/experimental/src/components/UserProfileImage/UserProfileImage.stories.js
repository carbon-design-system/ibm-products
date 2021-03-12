//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { UserProfileImage } from '.';
import mdx from './UserProfileImage.mdx';
import image from './headshot.png';

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

export const WithGroupIcon = Template.bind({});
WithGroupIcon.args = {
  icon: 'group'
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: "thomas j. watson",
};

export const WithImage = Template.bind({});
WithImage.args = {
  image,
};
