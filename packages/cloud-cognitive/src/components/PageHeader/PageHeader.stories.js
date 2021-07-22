/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

//import { action } from '@storybook/addon-actions';

import { pkg, carbon } from '../../settings';

import {
  BreadcrumbItem,
  Column,
  Grid,
  // Header,
  // HeaderName,
  Row,
  Tab,
  Tabs,
  // Table,
  // TableHead,
  // TableHeader,
  // TableBody,
  // TableRow,
  // TableCell,
} from 'carbon-components-react';
import {
  CheckmarkFilled16,
  Lightning16,
  Bee24,
  // Printer16,
  // Security24,
  // Settings16,
  // VolumeMute16,
} from '@carbon/icons-react';

import { ActionBarItem } from '../ActionBar';
import { PageHeader, deprecatedProps } from './PageHeader';

import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, PageHeader.displayName);
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';

import styles from './_storybook-styles.scss';

import mdx from './PageHeader.mdx';

const storyClass = 'page-header-stories';

export default {
  title: `${storybookPrefix}/${PageHeader.displayName}`,
  component: PageHeader,
  subcomponents: { ActionBarItem },
  parameters: { styles, layout: 'fullscreen', docs: { page: mdx } },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    //description: { control: { type: 'text' } },
    /*headerActions: {
      control: {
        type: 'select',
        labels: {
          0: 'none',
          1: 'drop-down',
          2: 'buttons',
        },
      },
      options: [0, 1, 2],
      mapping: {
        0: null,
        1: (
          <Dropdown
            id="tss-had"
            label="Choose an option"
            items={['option 1', 'option 2', 'option 3', 'option 4']}
          />
        ),
        2: (
          <ButtonSet>
            <Button kind="secondary" size="sm" style={{ width: 'initial' }}>
              Secondary
            </Button>
            <Button kind="primary" size="sm" style={{ width: 'initial' }}>
              Primary
            </Button>
          </ButtonSet>
        ),
      },
    },*/
    //influencer: { control: { disable: true } },
  },
};

// Test values for props.

const actionBarItems = [1, 2, 3, 4].map((item) => ({
  key: `a-key-${item}`,
  renderIcon: Lightning16,
  iconDescription: `Action ${item}`,
}));
const manyActionBarItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => ({
  key: `a-key-${item}`,
  renderIcon: Lightning16,
  iconDescription: `Action ${item}`,
}));

const actionBarOverflowAriaLabel = 'Show further action bar items';

const allTagsModalSearchLabel = 'Search all tags';
const allTagsModalSearchPlaceholderText = 'Enter search string';
const allTagsModalTitle = 'All tags';
const showAllTagsLabel = 'View all tags';

const breadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Home page</BreadcrumbItem>
    <BreadcrumbItem href="#">Secondary page</BreadcrumbItem>
  </>
);
const manyBreadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Home page</BreadcrumbItem>
    <BreadcrumbItem href="#">Secondary page</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 4</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 6</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 7</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 8</BreadcrumbItem>
  </>
);

const breadcrumbOverflowAriaLabel =
  'Open and close additional breadcrumb item list.';

const childrenStatusIndicator = (
  <>
    <CheckmarkFilled16 className={`${storyClass}__status-icon`} /> Running
  </>
);
// cspell: disable
const childrenSummaryDetails = (
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
// cspell: enable

const navigationTabs = (
  <Tabs>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
  </Tabs>
);
const navigationManyTabs = (
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

const pageActions = [
  {
    key: 'secondary',
    kind: 'secondary',
    label: 'Secondary button',
    onClick: () => {},
  },
  {
    key: 'primary',
    kind: 'primary',
    label: 'Primary button',
    onClick: () => {},
  },
];
const manyPageActions = [
  {
    key: '1',
    kind: 'danger',
    label: 'Secondary 1',
    onClick: () => {},
  },
  {
    key: '2',
    kind: 'secondary',
    label: 'Secondary 2',
    onClick: () => {},
  },
  {
    key: '3',
    kind: 'primary',
    label: 'Primary',
    onClick: () => {},
  },
];

const pageActionsOverflowLabel = 'Page actions...';

const subtitle = 'Optional subtitle if necessary';
const longSubtitle =
  'Optional subtitle if necessary, which is very long in this case, but will need to be handled somehow. It just keeps going on and on and on and on and on.';

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
  text: 'A very long page title which will almost certainly have to be truncated at some point',
  loading: false,
  icon: Bee24,
};

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

// Template.
// eslint-disable-next-line react/prop-types
const Template = ({ children, ...props }) => (
  <>
    <style>{`.${carbon.prefix}--modal { opacity: 0; }`};</style>
    <div style={{ minHeight: '100px' }}></div>
    <PageHeader {...props}>{children}</PageHeader>
    {dummyPageContent}
  </>
);

// Stories
export const withTitle = Template.bind({});
withTitle.storyName = 'Simple page header with page title';
withTitle.args = {
  title,
  hasBackgroundAlways: false,
};

export const withBreadcrumbs = Template.bind({});
withBreadcrumbs.storyName = 'Simple page header with breadcrumb';
withBreadcrumbs.args = {
  ...withTitle.args,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
};

export const withButtons = Template.bind({});
withButtons.storyName = 'Simple page header with status and actions';
withButtons.args = {
  ...withBreadcrumbs.args,
  pageActions,
  pageActionsOverflowLabel,
  children: childrenStatusIndicator,
};

export const withTabs = Template.bind({});
withTabs.storyName = 'Page header with navigation tabs';
withTabs.args = {
  title,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  pageActions,
  pageActionsOverflowLabel,
  navigation: navigationTabs,
};

export const withTags = Template.bind({});
withTags.storyName = 'Page header with tags';
withTags.args = {
  title,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  pageActions,
  pageActionsOverflowLabel,
  tags,
};

export const withTabsAndTags = Template.bind({});
withTabsAndTags.storyName = 'Page header with tags and navigation tabs';
withTabsAndTags.args = {
  title,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  pageActions,
  pageActionsOverflowLabel,
  navigation: navigationTabs,
  tags,
};

export const withSubtitle = Template.bind({});
withSubtitle.storyName = 'Page header with title and subtitle';
withSubtitle.args = {
  title,
  subtitle,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  navigation: navigationTabs,
};

export const withSummaryDetails = Template.bind({});
withSummaryDetails.storyName = 'Page header with summary details';
withSummaryDetails.args = {
  title,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  navigation: navigationTabs,
  children: childrenSummaryDetails,
};

export const withActionsToolbar = Template.bind({});
withActionsToolbar.storyName = 'Page header with actions toolbar';
withActionsToolbar.args = {
  title,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  navigation: navigationTabs,
  actionBarItems,
  actionBarOverflowAriaLabel,
};

export const fullyLoaded = Template.bind({});
fullyLoaded.storyName = 'Page header with all items, pre-collapsed';
fullyLoaded.args = {
  title,
  subtitle,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  pageActions,
  pageActionsOverflowLabel,
  navigation: navigationTabs,
  tags,
  actionBarItems,
  actionBarOverflowAriaLabel,
  collapseHeader: true,
};

export const fullyLoadedAndSome = Template.bind({});
fullyLoadedAndSome.storyName = 'Page header with long values and many items';
fullyLoadedAndSome.args = {
  title: longTitle,
  subtitle: longSubtitle,
  breadcrumbItems: manyBreadcrumbItems,
  breadcrumbOverflowAriaLabel,
  pageActions: manyPageActions,
  pageActionsOverflowLabel,
  navigation: navigationManyTabs,
  tags: manyTags,
  allTagsModalSearchLabel,
  allTagsModalSearchPlaceholderText,
  allTagsModalTitle,
  showAllTagsLabel,
  actionBarItems: manyActionBarItems,
  actionBarOverflowAriaLabel,
  collapseHeader: true,
};

export const demo = Template.bind({});
demo.storyName = 'Page header in context';
demo.args = {
  title,
  breadcrumbItems,
  breadcrumbOverflowAriaLabel,
  pageActions,
  pageActionsOverflowLabel,
  navigation: navigationTabs,
  tags,
};
