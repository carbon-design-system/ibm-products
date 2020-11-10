//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { Button, Tab, Tabs } from 'carbon-components-react';

import { Tearsheet } from './Tearsheet';

import styles from './_storybook-styles.scss';

export default {
  title: 'Experimental/Tearsheet',
  component: Tearsheet,
  parameters: { styles },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
  },
};

// Test values for props.

const buttons = (
  <div className="tearsheet-stories__buttons">
    <Button kind="ghost" className="tearsheet-stories__button">
      Ghost
    </Button>
    <div className="tearsheet-stories__button-padding"></div>
    <Button kind="secondary" className="tearsheet-stories__button">
      Secondary
    </Button>
    <Button className="tearsheet-stories__button">Primary</Button>
  </div>
);

const className = 'client-class-1 client-class-2';

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
    <Tabs>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
      <Tab label="Tab 4" />
    </Tabs>
  </div>
);

const title = 'Title of the tearsheet';

// Template.
const Template = (args) => {
  return (
    <Tearsheet className={className} {...args}>
      {mainContent}
    </Tearsheet>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  buttons,
  description,
  height: 'normal',
  influencer,
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  label,
  navigation: tabs,
  // onClose: () => false,
  open: true,
  preventCloseOnClickOutside: true,
  title,
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {};
