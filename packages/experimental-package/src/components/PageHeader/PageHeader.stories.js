//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import { BreadcrumbItem, Button, Tab, Tabs, Tag } from 'carbon-components-react';
import { CheckmarkFilled16 } from '@carbon/icons-react';

import { PageHeader } from '.';

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/PageHeader',
  component: PageHeader,
  parameters: { styles, layout: 'fullscreen' },
};

// Test values for props.
const breadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
  </>
);
const className = 'client-class-1 client-class-2';
const pageActions = (
  <>
    <Button kind="secondary">Secondary button</Button>
    <Button>Primary button</Button>
  </>
);
const statusIndicator = (
  <>
    <CheckmarkFilled16 className='page-header-stories__status-icon' /> Running
  </>
);
const subtitle = 'Optional subtitle if necessary';
const summaryDetails = (
  <div style={{display: 'flex'}}>
    <p style={{marginRight: '50px', maxWidth: '400px'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <p>
      Property: Value
      <br/>
      Property: Value
      <br/>
      Property: Value
    </p>
  </div>
);
const tabBar = (
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
const title = 'Page title';

// Template.
const Template = (args) => {
  return <PageHeader className={className} {...args} />;
};

// Stories
export const Minimal = Template.bind({});
Minimal.args = {};

export const WithoutBackgroundTitleOnly = Template.bind({});
WithoutBackgroundTitleOnly.args = {
  title
};

export const WithoutBackgroundTitlePageactions = Template.bind({});
WithoutBackgroundTitlePageactions.args = {
  title,
  pageActions
};

export const WithoutBackgroundBreadcrumbitemsTitle = Template.bind({});
WithoutBackgroundBreadcrumbitemsTitle.args = {
  breadcrumbItems,
  title
};

export const WithoutBackgroundBreadcrumbitemsTitlePageactions = Template.bind({});
WithoutBackgroundBreadcrumbitemsTitlePageactions.args = {
  breadcrumbItems,
  title,
  pageActions
};

export const WithoutBackgroundBreadcrumbitemsTitleStatus = Template.bind({});
WithoutBackgroundBreadcrumbitemsTitleStatus.args = {
  breadcrumbItems,
  title,
  availableSpace: statusIndicator
};

export const WithBackgroundBreadcrumbitemsTitleTabs = Template.bind({});
WithBackgroundBreadcrumbitemsTitleTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  navigation: tabBar
};

export const WithBackgroundBreadcrumbitemsTitlePageactionsTags = Template.bind({});
WithBackgroundBreadcrumbitemsTitlePageactionsTags.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  tags
};

export const WithBackgroundBreadcrumbitemsTitleTabsTags = Template.bind({});
WithBackgroundBreadcrumbitemsTitleTabsTags.args = {
  background: true,
  breadcrumbItems,
  title,
  navigation: tabBar,
  tags
};

export const WithBackgroundBreadcrumbitemsTitlePageactionsSubtitle = Template.bind({});
WithBackgroundBreadcrumbitemsTitlePageactionsSubtitle.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  subtitle
};

export const WithBackgroundBreadcrumbitemsTitlePageactionsSummarydetailsTabs = Template.bind({});
WithBackgroundBreadcrumbitemsTitlePageactionsSummarydetailsTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  availableSpace: summaryDetails,
  navigation: tabBar
};
