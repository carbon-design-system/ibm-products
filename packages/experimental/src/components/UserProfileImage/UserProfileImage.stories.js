//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { UserProfileImage } from '.';
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import mdx from './UserProfileImage.mdx';
import image from './headshot.png';
import styles from './_storybook.scss'; // import storybook which includes component and additional storybook styles

const storybookPrefix = getStorybookPrefix(pkg, 'UserProfileImage');
export default {
  title: `${storybookPrefix}/UserProfileImage`,
  component: UserProfileImage,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: ['light-blue', 'dark-blue'],
      },
    },
    theme: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    icon: {
      control: {
        type: 'radio',
        options: ['user', 'group'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['x-large', 'large', 'medium', 'small', 'x-small'],
      },
    },
  },
  parameters: {
    styles,
    docs: { page: mdx },
  },
};

const Template = (args) => {
  return <UserProfileImage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'light-blue',
  theme: 'light',
};

export const WithGroupIcon = Template.bind({});
WithGroupIcon.args = {
  backgroundColor: 'light-blue',
  theme: 'light',
  icon: 'group',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  backgroundColor: 'light-blue',
  theme: 'light',
  initials: 'thomas j. watson',
};

export const WithImage = Template.bind({});
WithImage.args = {
  backgroundColor: 'light-blue',
  theme: 'light',
  image,
};
