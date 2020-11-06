//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { ToolbarGroup, ToolbarButton, ToolbarSeparator } from './index';
import { Bee24 } from '@carbon/icons-react';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/Toolbar/ToolbarGroup',
  component: ToolbarGroup,
  parameters: { styles },
};

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
  <ToolbarSeparator key="ToolbarSeparator" />,
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
  <ToolbarButton
    key="ToolbarButton5"
    iconDescription="Toolbar button 5"
    renderIcon={Bee24}
  />,
];

const Template = (argsIn) => {
  const { children, ...args } = { ...argsIn };
  return <ToolbarGroup {...args}>{children}</ToolbarGroup>;
};

export const Minimal = Template.bind({});
Minimal.args = {
  children: groupItems,
};
