//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';

import { Lightning16, Bee24 } from '@carbon/icons-react';

import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { ActionBar, ActionBarItem } from '.';
const storybookPrefix = getStorybookPrefix(pkg, ActionBar.displayName);

const blockClass = `${pkg.prefix}--action-bar`;

import styles from './_storybook-styles.scss'; // import index in case more files are added later.

export default {
  title: `${storybookPrefix}/PageHeader/${ActionBarItem.displayName}`,
  component: ActionBar,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 50, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => (
      <div className={`${blockClass}--story__viewport`}>{story()}</div>
    ),
  ],
  parameters: { styles },
};

const actionBarItems = (
  <>
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 1"
      onClick={action('Action 1')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 2"
      onClick={action('Action 2')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 3"
      onClick={action('Action 3')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 4"
      onClick={action('Action 4')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 5"
      onClick={action('Action 5')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 6"
      onClick={action('Action 6')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 7"
      onClick={action('Action 7')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 8"
      onClick={action('Action 8')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 9"
      onClick={action('Action 9')}
    />
    <ActionBarItem
      renderIcon={Lightning16}
      iconDescription="Action 10"
      onClick={action('Action 10')}
    />
  </>
);

const Template = (argsIn) => {
  const { children, containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <ActionBar {...args}>{children}</ActionBar>
    </div>
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  children: actionBarItems,
  containerWidth: 500,
  iconDescription: 'Action',
  renderIcon: Bee24,
};
