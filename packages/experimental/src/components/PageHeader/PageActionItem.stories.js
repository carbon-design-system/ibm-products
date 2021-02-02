//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { PageActionItem } from './PageActionItem';
import { Bee24 } from '@carbon/icons-react';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/PageHeader/PageActionItem',
  component: PageActionItem,
  parameters: { styles },
  argTypes: {
    kind: {
      control: {
        type: 'select',
        options: {
          'Primary button (primary)': 'primary',
          'Secondary button (secondary)': 'secondary',
          'Tertiary button (tertiary)': 'tertiary',
          'Danger button (danger)': 'danger',
          'Ghost button (ghost)': 'ghost',
        },
      },
    },
  },
};

const Template = (argsIn) => {
  const { children, ...args } = { ...argsIn };
  return <PageActionItem {...args}>{children}</PageActionItem>;
};

export const Minimal = Template.bind({});
Minimal.args = {
  children: 'Button label',
  renderIcon: Bee24,
};
