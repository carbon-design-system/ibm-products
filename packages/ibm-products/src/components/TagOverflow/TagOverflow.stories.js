/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import * as CarbonIcons from '@carbon/icons-react';
import { Theme } from '@carbon/react';

import { pkg } from '../../settings';
import { UserAvatar } from '../UserAvatar';
import { DisplayBox } from '../../global/js/utils/DisplayBox';
import { TagOverflow } from '.';
import { TYPES } from './constants';
import mdx from './TagOverflow.mdx';

import styles from './_storybook-styles.scss';

const blockClass = `${pkg.prefix}--tag-set`;
const blockClassModal = `${blockClass}-modal`;

const tagLabel = (index) => `Tag ${index + 1}`;

const tags = Array.from({ length: 20 }, (v, k) => ({
  label: tagLabel(k),
  id: `id-${k}`,
}));

const fiveTags = tags.slice(0, 5);

let longTagsArr = [...fiveTags];
longTagsArr.splice(1, 1, { id: 'id-1', label: 'Business performance' });
const tagTypes = Object.keys(TYPES);
const longTags = longTagsArr.map((item, i) => {
  return { ...item, tagType: tagTypes[i % tagTypes.length] };
});

// UserAvatar background colors
const colors = [
  'order-1-cyan',
  'order-2-gray',
  'order-3-green',
  'order-4-magenta',
  'order-5-purple',
  'order-6-teal',
  'order-7-cyan',
  'order-8-gray',
  'order-9-green',
  'order-10-magenta',
  'order-11-purple',
  'order-12-teal',
];

// Lists of  first names and last names
//cspell: disable
const firstNames = [
  'Aarav',
  'Aditi',
  'Akshay',
  'Amit',
  'Ananya',
  'Arjun',
  'Avani',
  'Bhavya',
  'Chetan',
  'Devi',
  'Divya',
  'Gaurav',
  'Isha',
  'Kiran',
  'Manoj',
  'Neha',
  'Preeti',
  'Rajesh',
  'Riya',
  'Shreya',
  'Varun',
  'Saurabh',
  'Ajay',
  'Sandip',
  'Sadan',
  'Jyoti',
  'Sapna',
  'Prem',
];

const lastNames = [
  'Agarwal',
  'Bansal',
  'Chopra',
  'Gupta',
  'Jain',
  'Kapoor',
  'Mehta',
  'Patel',
  'Rao',
  'Sharma',
  'Singh',
  'Trivedi',
  'Verma',
  'Yadav',
];
//cspell: enable

// Method to generate random names
const generateName = () => {
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
};

// Users for UserAvatar stories
const ManyUserAvatarArr = Array.from({ length: 20 }, (v, k) => {
  const name = generateName();
  return {
    id: `id-${k}`,
    label: name,
    backgroundColor: colors[k % colors.length],
    name,
    tooltipText: name,
  };
});

const UserAvatarArr = ManyUserAvatarArr.slice(0, 10);

// Custom component
const IconComponent = forwardRef(({ iconName, iconSize, className }, ref) => {
  const Base = CarbonIcons[iconName];
  return (
    <div className={`custom-icon ${className}`} ref={ref}>
      <Base size={iconSize}></Base>
    </div>
  );
});

// Carbon Icon component names for custom component story
const icons = [
  'Add',
  'Power',
  'Play',
  'SettingsAdjust',
  'SidePanelClose',
  'Stop',
  'VideoPlayer',
  'VolumeUpFilled',
  'ChartBubble',
  'ChartLine',
  'ChartPie',
  'ChartWinLoss',
  'DatabaseMessaging',
  'Playlist',
  'OrderDetails',
];

const IconComponentArr = icons.map((icon, index) => {
  return { id: `id-${index}`, label: icon, iconName: icon, iconSize: 16 };
});

const overflowAndModalStrings = {
  allTagsModalTitle: 'All tags',
  allTagsModalSearchLabel: 'Search all tags',
  allTagsModalSearchPlaceholderText: 'Search all tags',
  showAllTagsLabel: 'View all tags',
};

export default {
  title: 'IBM Products/Components/Tag overflow/TagOverflow',
  component: TagOverflow,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => (
      <>
        <style>
          {`.${blockClassModal} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`}
          ;
        </style>
        <Theme theme="g10">
          <DisplayBox>{story()}</DisplayBox>
        </Theme>
      </>
    ),
  ],
};

const Template = (argsIn) => {
  const { containerWidth, ...args } = {
    ...argsIn,
  };
  return (
    <div style={{ width: containerWidth }}>
      <TagOverflow {...args} />
    </div>
  );
};

// Declaration of stories
export const FiveTags = Template.bind({});
FiveTags.args = {
  containerWidth: 250,
  items: fiveTags,
};

export const TagsWithTruncation = Template.bind({});
TagsWithTruncation.args = {
  containerWidth: 300,
  items: longTags,
};

export const ManyTags = Template.bind({});
ManyTags.args = {
  containerWidth: 500,
  items: tags,
  ...overflowAndModalStrings,
};

export const MultilineTags = Template.bind({});
MultilineTags.args = {
  containerWidth: 500,
  items: tags,
  multiline: true,
  ...overflowAndModalStrings,
};

export const UserAvatars = Template.bind({});
UserAvatars.args = {
  containerWidth: 250,
  items: UserAvatarArr,
  tagComponent: UserAvatar,
};

export const ManyUserAvatars = Template.bind({});
ManyUserAvatars.args = {
  containerWidth: 500,
  items: ManyUserAvatarArr,
  tagComponent: UserAvatar,
  ...overflowAndModalStrings,
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  containerWidth: 500,
  items: IconComponentArr,
  tagComponent: IconComponent,
  ...overflowAndModalStrings,
};
