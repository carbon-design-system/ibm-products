//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import { PageHeader } from '.';

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

import {
  BreadcrumbItem,
  Button,
  Tab,
  Tabs,
  Tag,
} from 'carbon-components-react';

import { Lightning16 } from '@carbon/icons-react';

import { ActionBarItem } from './ActionBarItem';

export default {
  title: 'Experimental/PageHeaderCopy',
  component: PageHeader,
  parameters: { styles, layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="page-header-stories__viewport">
        <Story />
      </div>
    ),
  ],
};

const breadcrumbItems = (
  <>
    <BreadcrumbItem href="/">Homepage</BreadcrumbItem>
    <BreadcrumbItem href="/secondary">Secondary</BreadcrumbItem>
  </>
);

const title = 'A title';

const actionBarItems = (
  <>
    <ActionBarItem icon={Lightning16} label="Action 1" />
    <ActionBarItem icon={Lightning16} label="Action 2" />
    <ActionBarItem icon={Lightning16} label="Action 3" />
    <ActionBarItem icon={Lightning16} label="Action 4" />
  </>
);

const pageActions = <Button size="field">A button</Button>;

const subTitle = 'This is a sub title';

const availableSpace = (
  <div>Something a little bit extra in available space.</div>
);

const navigation = (
  <Tabs>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
  </Tabs>
);

const tags = (
  <>
    <Tag type="blue">A tag</Tag>
    <Tag type="green">A tag</Tag>
    <Tag type="warm-gray">A tag</Tag>
    <Tag type="purple">A tag</Tag>
  </>
);

const Template = (args) => {
  const { tags, tagsIncluded, ..._args } = { ...args };

  return (
    <div className="container">
      <PageHeader
        className="example-class-name"
        {...args}
        tags={tagsIncluded ? tags : undefined}
      />
      <div className="content">Sample content to stretch the page</div>
    </div>
  );
};

export const AllThings = Template.bind({});
AllThings.args = {
  actionBarItems,
  availableSpace,
  background: true,
  breadcrumbItems,
  navigation,
  pageActions,
  subTitle,
  tags,
  tagsIncluded: true,
  title,
};

export const Minimal = Template.bind({});
Minimal.args = {};
