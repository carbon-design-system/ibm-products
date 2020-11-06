//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { ToolbarButton } from './ToolbarButton';
import { Bee24 } from '@carbon/icons-react';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/Toolbar/ToolbarButton',
  component: ToolbarButton,
  parameters: { styles },
};

const Template = ({ ...args }) => {
  return <ToolbarButton {...args} />;
};

export const Minimal = Template.bind({});
Minimal.args = {
  iconDescription: 'Toolbar button',
  renderIcon: Bee24,
};
