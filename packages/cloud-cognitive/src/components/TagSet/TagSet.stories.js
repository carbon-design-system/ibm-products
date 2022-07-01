//
// Copyright IBM Corp. 2020, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useRef } from 'react';

import { TYPES as tagTypes } from '../TagSet/constants';
import { pkg } from '../../settings';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { DisplayBox } from '../../global/js/utils/DisplayBox';
import { TagSet } from '.';
import mdx from './TagSet.mdx';
import styles from './_storybook-styles.scss';

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
  const values = Object.keys(tagTypes);
  const typeValue = values[Math.floor(Math.random() * values.length)];

  hundredsOfTags.push({ type: typeValue, label });
}

const overflowAndModalStrings = {
  allTagsModalTitle: 'All tags',
  allTagsModalSearchLabel: 'Search all tags',
  allTagsModalSearchPlaceholderText: 'Search all tags',
  showAllTagsLabel: 'View all tags',
};

export default {
  title: getStoryTitle(TagSet.displayName),
  component: TagSet,
  parameters: {
    docs: { page: mdx },
    styles,
  },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
    allTagsModalTargetCustomDomNode: {
      control: { type: 'boolean' },
      description: 'Optional DOM node: Modal target defaults to document.body',
    },
  },
  decorators: [
    (story) => (
      <>
        <style>
          {`.${blockClassModal} { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`}
          ;
        </style>
        <DisplayBox>{story()}</DisplayBox>
      </>
    ),
  ],
};

const Template = (argsIn) => {
  const { containerWidth, allTagsModalTargetCustomDomNode, ...args } = {
    ...argsIn,
  };
  const ref = useRef();
  return (
    <div style={{ width: containerWidth }} ref={ref}>
      <TagSet
        {...args}
        allTagsModalTarget={
          allTagsModalTargetCustomDomNode ? ref.current : undefined
        }
      />
    </div>
  );
};

export const FiveTags = prepareStory(Template, {
  args: {
    tags: tags,
    containerWidth: 500,
  },
});

export const ManyTags = prepareStory(Template, {
  args: {
    tags: manyTags,
    containerWidth: 500,
    ...overflowAndModalStrings,
  },
});

export const HundredsOfTags = prepareStory(Template, {
  args: {
    tags: hundredsOfTags,
    containerWidth: 500,
    ...overflowAndModalStrings,
  },
});
