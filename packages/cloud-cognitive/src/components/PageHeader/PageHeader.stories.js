//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import {
  BreadcrumbItem,
  Column,
  Content,
  Grid,
  Header,
  HeaderName,
  Row,
  Tab,
  Tabs,
  Tag,
} from 'carbon-components-react';
import { CheckmarkFilled16 } from '@carbon/icons-react';
import { Lightning16, Bee24 } from '@carbon/icons-react';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { ActionBarItem } from '../ActionBar';
import { PageActionItem } from './PageActionItem';
import { PageHeader } from '.';
const storybookPrefix = getStorybookPrefix(pkg, PageHeader.displayName);

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

import mdx from './PageHeader.mdx';

export default {
  title: `${storybookPrefix}/${PageHeader.displayName}`,
  component: PageHeader,
  subcomponents: {
    ActionBarItem,
    PageActionItem,
  },
  parameters: { styles, layout: 'fullscreen', docs: { page: mdx } },
  decorators: [
    (story) => <div className="page-header-stories__viewport">{story()}</div>,
  ],
};

// Test values for props.

const actionBarItems = [1, 2, 3, 4].map((item) => ({
  renderIcon: Lightning16,
  label: `Action ${item}`,
}));

const manyActionBarItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
  renderIcon: Lightning16,
  label: `Action ${item}`,
}));

const breadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
  </>
);
const manyBreadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 4</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 6</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 7</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 8</BreadcrumbItem>
  </>
);
const className = 'client-class-1 client-class-2';
const dummyPageContent = (
  <Grid className="page-header-stories__dummy-content" narrow={true}>
    <Row>
      <Column
        sm={1}
        md={2}
        lg={4}
        className="page-header-stories__dummy-content-block">
        <div className="page-header-stories__dummy-content-text">Column #1</div>
      </Column>
      <Column
        sm={1}
        md={2}
        lg={4}
        className="page-header-stories__dummy-content-block">
        <div className="page-header-stories__dummy-content-text">Column #2</div>
      </Column>
      <Column
        sm={2}
        md={4}
        lg={8}
        className="page-header-stories__dummy-content-block">
        <div className="page-header-stories__dummy-content-text">Column #3</div>
      </Column>
    </Row>
  </Grid>
);
const pageActions = (
  <>
    <PageActionItem kind="secondary">Secondary button</PageActionItem>
    <PageActionItem kind="primary">Primary button</PageActionItem>
  </>
);
const manyPageActions = (
  <>
    <PageActionItem kind="secondary">Secondary button 1</PageActionItem>
    <PageActionItem kind="secondary">Secondary button 2</PageActionItem>
    <PageActionItem kind="primary">Primary button</PageActionItem>
  </>
);
const statusIndicator = (
  <>
    <CheckmarkFilled16 className="page-header-stories__status-icon" /> Running
  </>
);
const subtitle = 'Optional subtitle if necessary';
const longSubtitle =
  'Optional subtitle if necessary, which is very long in this case, but will need to be handled somehow';
const summaryDetails = (
  <div style={{ display: 'flex' }}>
    <p style={{ marginRight: '50px', maxWidth: '400px' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <p>
      Property: Value
      <br />
      Property: Value
      <br />
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
const longTabBar = (
  <Tabs>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
    <Tab label="Tab 5" />
    <Tab label="Tab 6" />
    <Tab label="Tab 7" />
    <Tab label="Tab 8" />
  </Tabs>
);

const tags = [
  <Tag type="blue" key="tag-1">
    A tag
  </Tag>,
  <Tag type="green" key="tag-2">
    A tag
  </Tag>,
  <Tag type="warm-gray" key="tag-3">
    A tag
  </Tag>,
  <Tag type="purple" key="tag-4">
    A tag
  </Tag>,
];

const manyTags = [
  <Tag type="blue" key="blue">
    Blue
  </Tag>,
  <Tag type="green" key="green">
    Green
  </Tag>,
  <Tag type="warm-gray" key="warm-gray">
    Warm gray
  </Tag>,
  <Tag type="purple" key="purple">
    Purple
  </Tag>,
  <Tag type="red" key="red">
    Red
  </Tag>,
  <Tag type="teal" key="teal">
    Teal
  </Tag>,
  <Tag type="red" key="long-one">
    Longer ThanAPieceOfString
  </Tag>,
  <Tag type="high-contrast" key="high-contrast">
    High contrast
  </Tag>,
  <Tag type="magenta" key="magenta">
    Magenta
  </Tag>,
];

const title = 'Page title';
const longTitle =
  'A very long page title that is going to exceed fifty-six characters and get truncated';

// Template.
const Template = (args) => {
  return (
    <>
      <PageHeader className={className} {...args} />
      {dummyPageContent}
    </>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  background: true,
  breadcrumbItems,
  actionBarItems,
  title,
  titleIcon: Bee24,
  pageActions,
  subtitle,
  availableSpace: summaryDetails,
  navigation: tabBar,
  tags,
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {};

export const WithoutBackgroundTitle = Template.bind({});
WithoutBackgroundTitle.args = {
  title,
};

export const WithoutBackgroundTitlePageactions = Template.bind({});
WithoutBackgroundTitlePageactions.args = {
  title,
  pageActions,
};

export const WithoutBackgroundBreadcrumbitemsTitle = Template.bind({});
WithoutBackgroundBreadcrumbitemsTitle.args = {
  breadcrumbItems,
  title,
};

export const WithoutBackgroundBreadcrumbitemsTitlePageactions = Template.bind(
  {}
);
WithoutBackgroundBreadcrumbitemsTitlePageactions.args = {
  breadcrumbItems,
  title,
  pageActions,
};

export const WithoutBackgroundBreadcrumbitemsTitleStatus = Template.bind({});
WithoutBackgroundBreadcrumbitemsTitleStatus.args = {
  breadcrumbItems,
  title,
  availableSpace: statusIndicator,
};

export const WithBackgroundBreadcrumbitemsTitleTabs = Template.bind({});
WithBackgroundBreadcrumbitemsTitleTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  navigation: tabBar,
};

export const WithBackgroundBreadcrumbitemsTitleIconTabs = Template.bind({});
WithBackgroundBreadcrumbitemsTitleIconTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  titleIcon: Bee24,
  navigation: tabBar,
};

export const WithBackgroundBreadcrumbitemsTitlePageactionsTabs = Template.bind(
  {}
);
WithBackgroundBreadcrumbitemsTitlePageactionsTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  navigation: tabBar,
};

export const WithBackgroundBreadcrumbitemsTitlePageactionsTags = Template.bind(
  {}
);
WithBackgroundBreadcrumbitemsTitlePageactionsTags.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  tags,
};

export const WithBackgroundBreadcrumbitemsTitleTabsTags = Template.bind({});
WithBackgroundBreadcrumbitemsTitleTabsTags.args = {
  background: true,
  breadcrumbItems,
  title,
  navigation: tabBar,
  tags,
};

export const WithBackgroundBreadcrumbitemsActionbarTitlePageactionsTabsTags = Template.bind(
  {}
);
WithBackgroundBreadcrumbitemsActionbarTitlePageactionsTabsTags.args = {
  background: true,
  breadcrumbItems,
  actionBarItems,
  title,
  pageActions,
  navigation: tabBar,
};

export const WithBackgroundBreadcrumbitemsActionbar = Template.bind({});
WithBackgroundBreadcrumbitemsActionbar.args = {
  background: true,
  breadcrumbItems,
  actionBarItems,
  preCollapseTitleRow: true,
  title,
};

export const WithBackgroundBreadcrumbitemsTitlePageactionsSubtitle = Template.bind(
  {}
);
WithBackgroundBreadcrumbitemsTitlePageactionsSubtitle.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  subtitle,
};

export const WithBackgroundBreadcrumbitemsTitlePageactionsSummarydetailsTabs = Template.bind(
  {}
);
WithBackgroundBreadcrumbitemsTitlePageactionsSummarydetailsTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  availableSpace: summaryDetails,
  navigation: tabBar,
};

export const AllAttributesSetKeepsBreadcrumbAndTabs = Template.bind({});
AllAttributesSetKeepsBreadcrumbAndTabs.args = {
  keepBreadcrumbAndTabs: true,
  background: true,
  breadcrumbItems,
  actionBarItems,
  title,
  titleIcon: Bee24,
  pageActions,
  subtitle,
  availableSpace: summaryDetails,
  navigation: tabBar,
  tags,
};

export const AllAttributesSetPreCollapseTitle = Template.bind({});
AllAttributesSetPreCollapseTitle.args = {
  preCollapseTitleRow: true,
  background: true,
  breadcrumbItems,
  actionBarItems,
  title,
  titleIcon: Bee24,
  pageActions,
  subtitle,
  availableSpace: summaryDetails,
  navigation: tabBar,
  tags,
};

export const LongValuesAndManyItems = Template.bind({});
LongValuesAndManyItems.args = {
  background: true,
  breadcrumbItems: manyBreadcrumbItems,
  actionBarItems: manyActionBarItems,
  title: longTitle,
  pageActions: manyPageActions,
  subtitle: longSubtitle,
  availableSpace: summaryDetails,
  navigation: longTabBar,
  tags: manyTags,
};

const includeTheseArgs = (args) => {
  const result = {};

  const keys = Object.keys(args);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!key.endsWith('SwitchedArg')) {
      const switchedArg = args[`${key}SwitchedArg`];
      if (switchedArg !== false) {
        result[key] = args[key];
      }
    }
  }
  return result;
};

const TemplateWithSwitchedArgs = (args) => {
  return (
    <>
      <PageHeader className="example-class-name" {...includeTheseArgs(args)} />
      {dummyPageContent}
    </>
  );
};

export const AllAttributesWithSwitches = TemplateWithSwitchedArgs.bind({});
AllAttributesWithSwitches.args = {
  actionBarItems,
  actionBarItemsSwitchedArg: true,
  availableSpace: summaryDetails,
  availableSpaceSwitchedArg: true,
  background: true,
  breadcrumbItems,
  breadcrumbItemsSwitchedArg: true,
  keepBreadcrumbAndTabs: false,
  navigation: tabBar,
  navigationSwitchedArg: true,
  pageActions,
  pageActionsSwitchedArg: true,
  preCollapseTitleRow: false,
  subtitle,
  subtitleSwitchedArg: true,
  tags,
  tagsSwitchedArg: true,
  title,
  titleSwitchedArg: true,
  titleIcon: Bee24,
  titleIconSwitchedArg: true,
};

const TemplatePageHeaderWithCarbonHeader = (args) => {
  return (
    <div className="page-header-stories__app">
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
      </Header>
      <Content className="page-header-stories__content-container">
        <PageHeader
          className="example-class-name"
          {...includeTheseArgs(args)}
          pageHeaderOffset={48} // 48px is the size of the global header. A more elegant way of passing this could be found.
        />
        <div className="page-header-stories__inner-content">
          {dummyPageContent}
        </div>
      </Content>
    </div>
  );
};

export const PageHeaderWithCarbonHeader = TemplatePageHeaderWithCarbonHeader.bind(
  {}
);
PageHeaderWithCarbonHeader.args = {
  actionBarItems,
  actionBarItemsSwitchedArg: true,
  availableSpace: summaryDetails,
  availableSpaceSwitchedArg: true,
  background: true,
  breadcrumbItems,
  breadcrumbItemsSwitchedArg: true,
  keepBreadcrumbAndTabs: false,
  navigation: tabBar,
  navigationSwitchedArg: true,
  pageActions,
  pageActionsSwitchedArg: true,
  preCollapseTitleRow: false,
  subtitle,
  subtitleSwitchedArg: true,
  tags,
  tagsSwitchedArg: true,
  title,
  titleSwitchedArg: true,
  titleIcon: Bee24,
  titleIconSwitchedArg: true,
};
