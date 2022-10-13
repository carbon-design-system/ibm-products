/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ComboButton, ComboButtonItem, ComboButtonItemDivider } from '..';

import styles from './_combo-button.scss';

export default {
  title: getStoryTitle(ComboButton.displayName),
  component: ComboButton,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
    },
  },
  subcomponents: {
    ComboButtonItem,
  },
  parameters: { styles },
};

const Template = (args) => {
  const myRef = useRef();
  return (
    <ComboButton ref={myRef}>
      <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
      <ComboButtonItem renderIcon={args.icon && args.icon}>
        ComboButtonItem 2
      </ComboButtonItem>
      <ComboButtonItem disabled={args.disabled}>
        ComboButtonItem 3
      </ComboButtonItem>
      <ComboButtonItem>ComboButtonItem 4</ComboButtonItem>
      <ComboButtonItem danger={args.danger}>ComboButtonItem 5</ComboButtonItem>
    </ComboButton>
  );
};

const DividerTemplate = (args) => (
  <ComboButton>
    <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
    <ComboButtonItem renderIcon={args.icon && args.icon}>
      ComboButtonItem 2
    </ComboButtonItem>
    <ComboButtonItem disabled={args.disabled}>
      ComboButtonItem 3
    </ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 4</ComboButtonItem>
    <ComboButtonItemDivider />
    <ComboButtonItem danger={args.danger}>ComboButtonItem 5</ComboButtonItem>
  </ComboButton>
);

const DisabledTemplate = (args) => (
  <ComboButton disabled={args.disabled}>
    <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
    <ComboButtonItem renderIcon={args.icon && args.icon}>
      ComboButtonItem 2
    </ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 3</ComboButtonItem>
    <ComboButtonItem>ComboButtonItem 4</ComboButtonItem>
    <ComboButtonItemDivider />
    <ComboButtonItem danger={args.danger}>ComboButtonItem 5</ComboButtonItem>
  </ComboButton>
);

export const Default = prepareStory(Template, {
  args: {},
});

export const WithDivider = prepareStory(DividerTemplate, {
  args: {},
});

export const WithDanger = prepareStory(Template, {
  args: {
    danger: true,
    disabled: true,
  },
});

export const WithDisabled = prepareStory(DisabledTemplate, {
  args: {
    disabled: true,
  },
});
