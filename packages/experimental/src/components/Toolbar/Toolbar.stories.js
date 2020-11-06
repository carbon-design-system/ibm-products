//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
// import { action } from '@storybook/addon-actions';

import { Dropdown } from 'carbon-components-react';
import { Toolbar, ToolbarGroup, ToolbarButton, ToolbarSeparator } from '.';
import { Bee24 } from '@carbon/icons-react';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/Toolbar/Toolbar',
  component: Toolbar,
  parameters: { styles },
};

const dropItems = [
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3',
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
  {
    id: 'option-5',
    text: 'Option 5',
  },
];

const groupItems = [
  <ToolbarButton
    key="ToolbarButton1"
    iconDescription="Toolbar button "
    renderIcon={Bee24}
  />,
  <ToolbarButton
    key="ToolbarButton2"
    iconDescription="Toolbar button 2"
    renderIcon={Bee24}
  />,
  <ToolbarButton
    key="ToolbarButton3"
    iconDescription="Toolbar button 3"
    renderIcon={Bee24}
  />,
  <ToolbarButton
    key="ToolbarButton4"
    iconDescription="Toolbar button 4"
    renderIcon={Bee24}
  />,
  <Dropdown
    light
    inline
    key="Drop1"
    ariaLabel="Dropdown"
    id="carbon-dropdown-example"
    items={dropItems}
    label="Dropdown menu options"
    titleText=""
  />,
  <ToolbarButton
    key="ToolbarButton5"
    iconDescription="Toolbar button 5"
    renderIcon={Bee24}
  />,
];

const toolbarGroups = [
  <ToolbarSeparator key="separator 1" />,
  <ToolbarGroup key="group-1" withSpacing>
    {groupItems}
  </ToolbarGroup>,
  <ToolbarSeparator key="separator 2" />,
  <ToolbarGroup key="group-2" withSpacing>
    {groupItems}
  </ToolbarGroup>,
  <ToolbarSeparator key="separator 3" />,
];

const Template = (argsIn) => {
  const { children, ...args } = { ...argsIn };
  return <Toolbar {...args}>{children}</Toolbar>;
};

export const Minimal = Template.bind({});
Minimal.args = {
  children: toolbarGroups,
};
