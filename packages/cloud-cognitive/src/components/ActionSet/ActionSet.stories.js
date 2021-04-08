/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';

import { ActionSet } from '.';

import styles from './_storybook-styles.scss';

const storybookPrefix = getStorybookPrefix(pkg, ActionSet.displayName);

export default {
  title: `${storybookPrefix}/${ActionSet.displayName}`,
  component: ActionSet,
  parameters: {
    styles,
  },
  argTypes: {
    actions: {
      control: {
        type: 'select',
        options: {
          'One button': 0,
          'One button (ghost)': 1,
          'Two buttons': 2,
          'Three buttons with ghost': 3,
          'Three buttons': 4,
          None: 5,
        },
        default: 0,
      },
    },
    slideIn: {
      table: {
        disable: true,
      },
    },
  },
};

const actions_1 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
];

const actions_2 = [
  {
    label: 'Ghost button',
    onPrimaryActionClick: () => {},
    kind: 'ghost',
  },
];

const actions_3 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
];

const actions_4 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
  {
    label: 'Ghost button',
    onPrimaryActionClick: () => {},
    kind: 'ghost',
  },
];

const actions_5 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
  {
    label: 'Secondary button',
    onPrimaryActionClick: () => {},
    kind: 'secondary',
  },
];

const actionSets = [actions_1, actions_2, actions_3, actions_4, actions_5, []];

// eslint-disable-next-line react/prop-types
const Template = ({ actions, ...args }) => {
  return <ActionSet {...args} actions={actionSets[actions]} />;
};

export const actionSet = Template.bind({});
actionSet.args = { actions: 0 };
