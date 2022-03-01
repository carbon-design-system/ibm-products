//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ButtonSetWithOverflow } from '.';
import { DisplayBox } from '../../global/js/utils/DisplayBox';
import styles from './_storybook-styles.scss';

// Carbon and package components we use.

export default {
  title: getStoryTitle(ButtonSetWithOverflow.displayName),
  component: ButtonSetWithOverflow,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  parameters: {
    styles,
  },
  decorators: [(story) => <DisplayBox>{story()}</DisplayBox>],
};

const buttons = [
  {
    key: 'danger-button',
    kind: 'danger',
    onClick: action('Danger'),
    label: 'Danger',
  },
  {
    key: 'secondary-button',
    kind: 'secondary',
    onClick: action('Secondary'),
    label: 'Secondary',
  },
  {
    key: 'primary-button',
    kind: 'primary',
    onClick: action('Primary'),
    label: 'Primary',
  },
];

const buttonSetOverflowLabel = 'Button set overflow';

const Template = (argsIn) => {
  const { containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <ButtonSetWithOverflow {...args} />
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    buttons,
    buttonSetOverflowLabel,
    containerWidth: 600,
    rightAlign: false,
  },
});
