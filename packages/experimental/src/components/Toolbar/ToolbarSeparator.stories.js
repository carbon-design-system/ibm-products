//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { ToolbarSeparator } from './index';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/Toolbar/ToolbarSeparator',
  component: ToolbarSeparator,
  parameters: { styles },
};

const Template = (argsIn) => {
  const { children, ...args } = { ...argsIn };
  return <ToolbarSeparator {...args}>{children}</ToolbarSeparator>;
};

export const Minimal = Template.bind({});
Minimal.args = {};
