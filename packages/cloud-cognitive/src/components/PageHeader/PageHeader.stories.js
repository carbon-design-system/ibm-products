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
  Grid,
  Header,
  HeaderName,
  Row,
  Tab,
  Tabs,
} from 'carbon-components-react';
import { CheckmarkFilled16 } from '@carbon/icons-react';
import { Lightning16, Bee24 } from '@carbon/icons-react';

import { pkg, carbon } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { ActionBarItem } from '../ActionBar';
import { PageHeader } from '.';
const storybookPrefix = getStorybookPrefix(pkg, PageHeader.displayName);

import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './PageHeader.mdx';

const storyClass = 'page-header-stories';

export default {
  title: `${storybookPrefix}/${PageHeader.displayName}`,
  component: PageHeader,
  subcomponents: {
    ActionBarItem,
  },
  parameters: { styles, layout: 'fullscreen', docs: { page: mdx } },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
};

// Test values for props.

const actionBarItems = [1, 2, 3, 4].map((item) => ({
  keuy: `a-key-${item}`,
  renderIcon: Lightning16,
  iconDescription: `Action ${item}`,
}));

const manyActionBarItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
  keuy: `a-key-${item}`,
  renderIcon: Lightning16,
  iconDescription: `Action ${item}`,
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
  <Grid className={`${storyClass}__dummy-content`} narrow={true}>
    <Row>
      <Column
        sm={1}
        md={2}
        lg={4}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #1</div>
      </Column>
      <Column
        sm={1}
        md={2}
        lg={4}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #2</div>
      </Column>
      <Column
        sm={2}
        md={4}
        lg={8}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #3</div>
      </Column>
    </Row>
  </Grid>
);
const pageActions = [
  {
    kind: 'secondary',
    label: 'Secondary button',
    onClick: () => {},
  },
  {
    kind: 'primary',
    label: 'Primary button',
    onClick: () => {},
  },
];

const manyPageActions = [
  {
    kind: 'secondary',
    label: 'Secondary 1',
    onClick: () => {},
  },
  {
    kind: 'secondary',
    label: 'Secondary 2',
    onClick: () => {},
  },
  {
    kind: 'primary',
    label: 'Primary',
    onClick: () => {},
  },
];

const statusIndicator = (
  <>
    <CheckmarkFilled16 className={`${storyClass}__status-icon`} /> Running
  </>
);
const subtitle = 'Optional subtitle if necessary';
const longSubtitle =
  'Optional subtitle if necessary, which is very long in this case, but will need to be handled somehow. It just keeps going on and on and on and on and on.';
const summaryDetails = (
  <div style={{ display: 'flex' }}>
    <p
      style={{
        // stylelint-disable-next-line carbon/layout-token-use
        marginRight: '50px',
        maxWidth: '400px',
      }}>
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
  { type: 'blue', label: 'A tag' },
  { type: 'green', label: 'A tag' },
  { type: 'warm-gray', label: 'A tag' },
  { type: 'purple', label: 'A tag' },
];

const manyTags = [
  { type: 'blue', label: 'Blue' },
  { type: 'green', label: 'Green' },
  { type: 'warm-gray', label: 'Warm gray' },
  { type: 'purple', label: 'Purple' },
  { type: 'red', label: 'Red' },
  { type: 'teal', label: 'Teal' },
  { type: 'red', label: 'Longer ThanAPieceOfString' },
  { type: 'high-contrast', label: 'High contrast' },
  { type: 'magenta', label: 'Magenta' },
  { type: 'blue', label: 'Blue 2' },
  { type: 'green', label: 'Green 2' },
  { type: 'warm-gray', label: 'Warm gray 2' },
  { type: 'purple', label: 'Purple 2' },
  { type: 'red', label: 'Red 2' },
  { type: 'teal', label: 'Teal 2' },
  { type: 'red', label: 'Longer ThanAPieceOfString 2' },
  { type: 'high-contrast', label: 'High contrast 2' },
  { type: 'magenta', label: 'Magenta 2' },
];

const title = { text: 'Page title', loading: false, icon: Bee24 };
const longTitle = {
  text: 'A very long page title that is going to exceed 60% of the stage width and get truncated on large screens',
  loading: false,
  icon: Bee24,
};

// Template.
const Template = (args) => {
  return (
    <>
      <style>{`.${carbon.prefix}--modal { opacity: 0; }`};</style>
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
  pageActions,
  subtitle,
  availableSpace: summaryDetails,
  navigation: tabBar,
  tags,
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  title,
};

export const TitleAndPagections = Template.bind({});
TitleAndPagections.args = {
  title,
  pageActions,
};

export const BreadcrumbItemsAndTitle = Template.bind({});
BreadcrumbItemsAndTitle.args = {
  breadcrumbItems,
  title,
};

export const BreadcrumbItemsTitleAndPageActions = Template.bind({});
BreadcrumbItemsTitleAndPageActions.args = {
  breadcrumbItems,
  title,
  pageActions,
};

export const BreadcrumbItemsTitleAndStatus = Template.bind({});
BreadcrumbItemsTitleAndStatus.args = {
  breadcrumbItems,
  title,
  availableSpace: statusIndicator,
};

export const BreadcrumbItemsTitleTabs = Template.bind({});
BreadcrumbItemsTitleTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  navigation: tabBar,
};

export const BreadcrumbItemsTitleIconTabs = Template.bind({});
BreadcrumbItemsTitleIconTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  titleIcon: Bee24,
  navigation: tabBar,
};

export const BreadcrumbItemsTitlePageActionsTabs = Template.bind({});
BreadcrumbItemsTitlePageActionsTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  navigation: tabBar,
};

export const BreadcrumbItemsTitlePageActionsTags = Template.bind({});
BreadcrumbItemsTitlePageActionsTags.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  tags,
};

export const BreadcrumbItemsTitleTabsTags = Template.bind({});
BreadcrumbItemsTitleTabsTags.args = {
  background: true,
  breadcrumbItems,
  title,
  navigation: tabBar,
  tags,
};

export const BreadcrumbItemsActionBarTitlePageActionsTabsTags = Template.bind(
  {}
);
BreadcrumbItemsActionBarTitlePageActionsTabsTags.args = {
  background: true,
  breadcrumbItems,
  actionBarItems,
  title,
  pageActions,
  navigation: tabBar,
};

export const BreadcrumbItemsActionBar = Template.bind({});
BreadcrumbItemsActionBar.args = {
  background: true,
  breadcrumbItems,
  actionBarItems,
  preCollapseTitleRow: true,
  title,
};

export const BreadcrumbItemsTitlePageActionsSubtitle = Template.bind({});
BreadcrumbItemsTitlePageActionsSubtitle.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  subtitle,
};

export const BreadcrumbItemsTitlePageActionsSummarydetailsTabs = Template.bind(
  {}
);
BreadcrumbItemsTitlePageActionsSummarydetailsTabs.args = {
  background: true,
  breadcrumbItems,
  title,
  pageActions,
  availableSpace: summaryDetails,
  navigation: tabBar,
};

export const AllAttributesSetKeepsBreadcrumbTabs = Template.bind({});
AllAttributesSetKeepsBreadcrumbTabs.args = {
  preventBreadcrumbScroll: true,
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

export const LongValuesManyItems = Template.bind({});
LongValuesManyItems.args = {
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
  preventBreadcrumbScroll: false,
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
    <>
      <style>{`.${carbon.prefix}--modal { opacity: 0; }`};</style>
      <div className={`${storyClass}__app`}>
        <Header aria-label="IBM Platform Name">
          <HeaderName href="#" prefix="IBM">
            [Platform]
          </HeaderName>
        </Header>
        <div
          className={`${storyClass}__content-container`}
          style={{
            // stylelint-disable-next-line carbon/layout-token-use
            marginTop: '48px',
          }}>
          <PageHeader
            className="example-class-name"
            {...includeTheseArgs(args)}
            pageHeaderOffset={48} // 48px is the size of the global header. A more elegant way of passing this could be found.
          />
          <div className={`${storyClass}__inner-content`}>
            {dummyPageContent}
          </div>
        </div>
      </div>
    </>
  );
};

export const PageHeaderWithCarbonHeader =
  TemplatePageHeaderWithCarbonHeader.bind({});
PageHeaderWithCarbonHeader.args = {
  actionBarItems,
  actionBarItemsSwitchedArg: true,
  availableSpace: summaryDetails,
  availableSpaceSwitchedArg: true,
  background: true,
  breadcrumbItems,
  breadcrumbItemsSwitchedArg: true,
  preventBreadcrumbScroll: false,
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
