/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { Button, Tab, Tabs } from 'carbon-components-react';

import { Tearsheet, TearsheetNarrow } from '.';
import {
  actionsOptions,
  actionsLabels,
  actionsMapping,
} from '../ActionSet/actions.js';

import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, Tearsheet.displayName);

import styles from './_storybook-styles.scss';

import mdx from './Tearsheet.mdx';

export default {
  title: `${storybookPrefix}/Tearsheets/${Tearsheet.displayName}`,
  component: Tearsheet,
  subcomponents: {
    TearsheetNarrow,
  },
  parameters: { styles, docs: { page: mdx } },
  argTypes: {
    actions: {
      control: {
        type: 'select',
        labels: actionsLabels,
      },
      options: actionsOptions,
      mapping: actionsMapping(
        {
          primary: 'Replace',
          secondary: 'Stop',
          secondary2: 'Keep Both',
          ghost: 'Cancel',
        },
        action
      ),
    },
    description: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
    influencer: {
      control: {
        disable: true,
      },
    },
    onClose: {
      control: {
        disable: true,
      },
    },
    navigation: {
      control: {
        disable: true,
      },
    },
    open: {
      control: {
        disable: true,
      },
    },
  },
};

// Test values for props.

const closeIconDescription = 'Close the tearsheet';

const description = (
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </span>
);

const influencer = (
  <div className="tearsheet-stories__dummy-content-block">Influencer</div>
);

const label = 'The label of the tearsheet';

const mainContent = (
  <div className="tearsheet-stories__dummy-content-block">Main content</div>
);

const tabs = (
  <div className="tearsheet-stories__tabs">
    <Tabs onSelectionChange={action('Tab selection changed')}>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
      <Tab label="Tab 4" />
    </Tabs>
  </div>
);

const title = 'Title of the tearsheet';

// Template.
// eslint-disable-next-line react/prop-types
const Template = ({ actions, ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`.${pkg.prefix}-tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <Tearsheet
        {...args}
        {...{ actions, open }}
        onClose={() => setOpen(false)}>
        {mainContent}
      </Tearsheet>
    </>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  closeIconDescription,
  description,
  hasCloseIcon: true,
  influencer,
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  label,
  navigation: tabs,
  onClose: action('onClose called'),
  open: true,
  preventCloseOnClickOutside: true,
  title,
  verticalPosition: 'normal',
  actions: 3,
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {};

export const NoHeaderNavigation = Template.bind({});
NoHeaderNavigation.args = {
  closeIconDescription,
  description,
  hasCloseIcon: true,
  influencer,
  label,
  onClose: action('onClose called'),
  open: true,
  preventCloseOnClickOutside: true,
  title,
  actions: 3,
};

export const NoHeaderNavigationOrInfluencer = Template.bind({});
NoHeaderNavigationOrInfluencer.args = {
  closeIconDescription,
  description,
  hasCloseIcon: true,
  label,
  onClose: action('onClose called'),
  open: true,
  preventCloseOnClickOutside: true,
  title,
  actions: 3,
};
