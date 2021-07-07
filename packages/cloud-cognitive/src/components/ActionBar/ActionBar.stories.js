//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';

import { Bee16, Lightning16 } from '@carbon/icons-react';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { ActionBar, ActionBarItem } from '.';
const storybookPrefix = getStorybookPrefix(pkg, ActionBar.displayName);

export default {
  title: `${storybookPrefix}/${ActionBar.displayName}`,
  component: ActionBar,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [
    (story) => <div className={`ccs-sb__display-box`}>{story()}</div>,
  ],
};

const actions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
  key: `a-key-${num}`,
  renderIcon: num % 2 ? Lightning16 : Bee16,
  iconDescription: `Action ${num}`,
  onClick: action(`Action ${num}`),
}));

const actionBarItems = (
  <>
    <ActionBarItem
      key="key-1"
      renderIcon={Lightning16}
      iconDescription="Action 1"
      onClick={action('Action 1')}
    />
    <ActionBarItem
      key="key-2"
      renderIcon={Lightning16}
      iconDescription="Action 2"
      onClick={action('Action 2')}
    />
    <ActionBarItem
      key="key-3"
      renderIcon={Lightning16}
      iconDescription="Action 3"
      onClick={action('Action 3')}
    />
    <ActionBarItem
      key="key-4"
      renderIcon={Lightning16}
      iconDescription="Action 4"
      onClick={action('Action 4')}
    />
    <ActionBarItem
      key="key-5"
      renderIcon={Lightning16}
      iconDescription="Action 5"
      onClick={action('Action 5')}
    />
    <ActionBarItem
      key="key-6"
      renderIcon={Lightning16}
      iconDescription="Action 6"
      onClick={action('Action 6')}
    />
    <ActionBarItem
      key="key-7"
      renderIcon={Lightning16}
      iconDescription="Action 7"
      onClick={action('Action 7')}
    />
    <ActionBarItem
      key="key-8"
      renderIcon={Lightning16}
      iconDescription="Action 8"
      onClick={action('Action 8')}
    />
    <ActionBarItem
      key="key-9"
      renderIcon={Lightning16}
      iconDescription="Action 9"
      onClick={action('Action 9')}
    />
    <ActionBarItem
      key="key-10"
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

export const Default = Template.bind({});
Default.args = {
  actions: actions,
  containerWidth: 500,
};

export const WithChildrenDEPRECATED = Template.bind({});
WithChildrenDEPRECATED.args = {
  children: actionBarItems,
  containerWidth: 500,
};
