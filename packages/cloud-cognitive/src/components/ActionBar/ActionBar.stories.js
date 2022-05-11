//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { action } from '@storybook/addon-actions';

import { Bee, Lightning } from '@carbon/icons-react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { DisplayBox } from '../../global/js/utils/DisplayBox';

import { ActionBar } from './ActionBar';

import styles from './_storybook-styles.scss';

const getActions = (num) =>
  Array.from({ length: num }, (_, num) => ({
    key: `a-key-${num}`,
    renderIcon:
      num % 2
        ? (props) => <Lightning size={16} {...props} />
        : (props) => <Bee size={16} {...props} />,
    iconDescription: `Action ${num}`,
    onClick: action(`Action ${num}`),
  }));

export default {
  title: getStoryTitle(ActionBar.displayName),
  component: ActionBar,
  argTypes: {
    actions: {
      control: {
        type: 'select',
        labels: ['None', 'A few', 'A lot'],
      },
      options: [0, 1, 2],
      mapping: [[], getActions(10), getActions(20)],
    },
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  parameters: {
    styles,
  },
  decorators: [(story) => <DisplayBox>{story()}</DisplayBox>],
};

const Template = (argsIn) => {
  const { containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <ActionBar {...args} />
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    actions: 1,
    containerWidth: 500,
    overflowAriaLabel: 'Open and close additional action bar items list.',
  },
});
