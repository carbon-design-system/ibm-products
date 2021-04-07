//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { Bee24 } from '@carbon/icons-react';

import styles from './_index.scss'; // import index in case more files are added later.
import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { PageActionItem } from '.';

const storybookPrefix = getStorybookPrefix(pkg, PageActionItem.displayName);

export default {
  title: `${storybookPrefix}/PageHeader/${PageActionItem.displayName}`,
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
