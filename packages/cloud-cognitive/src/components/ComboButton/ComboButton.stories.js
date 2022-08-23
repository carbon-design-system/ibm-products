/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ComboButton, ComboButtonItem, ComboButtonItemDivider } from '..';

import styles from './_combo-button.scss';

const defaultArgs = {
  size: 'default',
};

export default {
  title: getStoryTitle(ComboButton.displayName),
  component: ComboButton,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'default'],
    },
  },
  subcomponents: {
    ComboButtonItem,
  },
  parameters: { styles },
};

const Template = (args) => {
  return (
    <ComboButton {...args}>
      <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
      <ComboButtonItem renderIcon={args.icon && args.icon}>
        ComboButtonItem 2
      </ComboButtonItem>
      <ComboButtonItemDivider />
      <ComboButtonItem disabled={args.disabled}>ComboButtonItem 3</ComboButtonItem>
      <ComboButtonItem hasDivider={args.hasDivider}>
        ComboButtonItem 4
      </ComboButtonItem>
      <ComboButtonItem danger={args.danger}>ComboButtonItem 5</ComboButtonItem>
    </ComboButton>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultArgs,
    hasDivider: false,
    size: "default"
  },
});

export const WithDivider = prepareStory(Template, {
  args: {
    ...defaultArgs,
    hasDivider: true,
    size: "default"
  },
});

export const WithDanger = prepareStory(Template, {
  args: {
    ...defaultArgs,
    danger: true,
    size: "default"
  },
});

export const WithDisabled = prepareStory(Template, {
  args: {
    ...defaultArgs,
    disabled: true,
    size: "default"
  },
});
