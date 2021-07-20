//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { types as tagTypes } from 'carbon-components-react/es/components/Tag/Tag';
import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { TagSet } from '.';
import mdx from './TagSet.mdx';

const storybookPrefix = getStorybookPrefix(pkg, TagSet.displayName);
const blockClass = `${pkg.prefix}--tag-set`;
const blockClassModal = `${blockClass}-modal`;

const tags = [
  { type: 'blue', label: 'Tag 1' },
  { type: 'high-contrast', label: 'Tag 123' },
  { type: 'cyan', label: 'Tag 1234' },
  { type: 'red', label: 'Tag 12345' },
];

const manyTags = [
  {
    label: 'One',
    type: 'blue',
    ['data-search']: 'single',
  },
  {
    label: 'Two',
    type: 'red',
  },
  {
    label: 'Three',
    type: 'cyan',
  },
  {
    label: 'Four',
    type: 'high-contrast',
  },
  {
    label: 'Five',
    type: 'blue',
  },
  {
    label: 'Six',
    type: 'red',
  },
  {
    label: 'Seven',
    type: 'cyan',
  },
  {
    label: 'Eight',
    type: 'high-contrast',
  },
  {
    label: 'Nine',
    type: 'red',
  },
  {
    label: 'Ten',
    type: 'blue',
  },
  {
    label: 'Eleven',
    type: 'cyan',
  },
  {
    label: 'Twelve',
    type: 'high-contrast',
    ['data-search']: 'dozen',
  },
  {
    label: 'Thirteen',
    type: 'red',
  },
  {
    label: 'Fourteen',
    type: 'cyan',
  },
  {
    label: 'Fifteen',
    type: 'blue',
  },
  {
    label: 'Sixteen',
    type: 'high-contrast',
  },
  {
    label: 'Seventeen',
    type: 'red',
  },
  {
    label: 'Eighteen',
    type: 'cyan',
  },
  {
    label: 'Nineteen',
    type: 'red',
  },
  {
    label: 'Twenty',
    type: 'high-contrast',
  },
].map((item, index) => ({
  ...item,
  ['data-search']: '' + (index + 1) + ' ' + item?.['data-search'],
}));

const hundredsOfTags = [];
for (let i = 0; i < 200; i++) {
  const label = `Label_${i + 1}`;
  const type = tagTypes[i % tagTypes.length];

  hundredsOfTags.push({ type, label });
}

const overflowAndModalStrings = {
  allTagsModalTitle: 'All tags',
  allTagsModalSearchLabel: 'Search all tags',
  allTagsModalSearchPlaceholderText: 'Search all tags',
  showAllTagsLabel: 'View all tags',
};

export default {
  title: `${storybookPrefix}/${TagSet.displayName}`,
  component: TagSet,
  parameters: {
    docs: { page: mdx },
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
        <div className="ccs-sb__display-box">{story()}</div>
      </>
    ),
  ],
};

const Template = (argsIn) => {
  const { containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <TagSet {...args} />
    </div>
  );
};

export const FiveTags = Template.bind({});
FiveTags.args = {
  tags: tags,
  containerWidth: 500,
};

export const ManyTags = Template.bind({});
ManyTags.args = {
  tags: manyTags,
  containerWidth: 500,
  ...overflowAndModalStrings,
};

export const HundredsOfTags = Template.bind({});
HundredsOfTags.args = {
  tags: hundredsOfTags,
  containerWidth: 500,
  ...overflowAndModalStrings,
};
