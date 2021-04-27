//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { Tag } from 'carbon-components-react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { TagSet } from '.';
const storybookPrefix = getStorybookPrefix(pkg, TagSet.displayName);
const blockClass = `${pkg.prefix}--tag-set`;

const TagItems = [
  <Tag key="tag1" type="blue">
    Tag 1
  </Tag>,
  <Tag key="tag12">Tag 12</Tag>,
  <Tag key="tag123" type="high-contrast">
    Tag 123
  </Tag>,
  <Tag key="tag1234" type="cyan">
    Tag 1234
  </Tag>,
  <Tag key="tag12345" type="red">
    Tag 12345
  </Tag>,
];

const ManyTagItems = [
  {
    label: 'One',
    type: 'blue',
    dataSearch: 'one',
  },
  {
    label: 'Two',
    type: 'red',
    filter: true,
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
    filter: true,
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
    filter: true,
  },
  {
    label: 'Eleven',
    type: 'cyan',
  },
  {
    label: 'Twelve',
    type: 'high-contrast',
    dataSearch: 'twelve',
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
    filter: true,
  },
  {
    label: 'Sixteen',
    type: 'high-contrast',
    filter: true,
  },
  {
    label: 'Seventeen',
    type: 'red',
  },
  {
    label: 'Eighteen',
    type: 'cyan',
    filter: true,
  },
  {
    label: 'Nineteen',
    type: 'red',
  },
  {
    label: 'Twenty',
    type: 'high-contrast',
  },
].map(({ label, type, filter, dataSearch }) => (
  <Tag key={label} data-search={dataSearch} {...{ filter, type }}>
    {label}
  </Tag>
));

export default {
  title: `${storybookPrefix}/${TagSet.displayName}`,
  component: TagSet,
  parameters: { styles },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => (
      <>
        <style>
          {`.${blockClass}__show-all-modal { opacity: 0; visibility: hidden; /* prevents glitch storybook modal css load */ }`}
          ;
        </style>
        <div className={`${blockClass}__story-viewport`}>{story()}</div>
      </>
    ),
  ],
};

const Template = (argsIn) => {
  const { children, containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <TagSet {...args}>{children}</TagSet>
    </div>
  );
};

export const TagArray = Template.bind({});
TagArray.args = {
  children: TagItems,
  containerWidth: 500,
};

export const ManyTags = Template.bind({});
ManyTags.args = {
  children: ManyTagItems,
  containerWidth: 500,
};

const Template2 = (argsIn) => {
  const { containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <TagSet {...args}>
        <Tag key="tag1" type="blue">
          Tag 1
        </Tag>
        <Tag key="tag12">Tag 12</Tag>
        <Tag key="tag123" type="high-contrast">
          Tag 123
        </Tag>
        <Tag key="tag1234" type="cyan">
          Tag 1234
        </Tag>
        <Tag key="tag12345" type="red">
          Tag 12345
        </Tag>
      </TagSet>
    </div>
  );
};

export const AsDom = Template2.bind({});
AsDom.args = {
  containerWidth: 500,
};

const TemplateMin = (argsIn) => {
  const { children, containerWidth } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <TagSet>{children}</TagSet>
    </div>
  );
};

export const Minimal = TemplateMin.bind({});
Minimal.args = {
  children: TagItems,
  containerWidth: 500,
};
