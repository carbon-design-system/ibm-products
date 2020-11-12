//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { TagSet } from './TagSet';
import { Tag } from 'carbon-components-react';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.

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

export default {
  title: 'Experimental/TagSet',
  component: TagSet,
  parameters: { styles },
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 50, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => <div className="tag-set-story__viewport">{story()}</div>,
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
