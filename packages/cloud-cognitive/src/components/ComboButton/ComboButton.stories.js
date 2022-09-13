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
  const myRef = useRef()
  console.log('my ref', myRef)
  return (
    <ComboButton {...args} ref={myRef}>
      <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
      <ComboButtonItem renderIcon={args.icon && args.icon}>
        ComboButtonItem 2
      </ComboButtonItem>
      <ComboButtonItem disabled={args.disabled}>ComboButtonItem 3</ComboButtonItem>
      <ComboButtonItem>
        ComboButtonItem 4
      </ComboButtonItem>
      {
        args.hasDivider ? <ComboButtonItemDivider /> : null
      }      
      <ComboButtonItem danger={args.danger}>ComboButtonItem 5</ComboButtonItem>
      
      
      
    </ComboButton>
  );
};

export const Default = prepareStory(Template, {
  args: {
    ...defaultArgs,
    size: "md"
  },
});

export const WithDivider = prepareStory(Template, {
  args: {
    ...defaultArgs,
    hasDivider: true,
    size: "md"
  },
});

export const WithDanger = prepareStory(Template, {
  args: {
    ...defaultArgs,
    danger: true,
    size: "md"
  },
});

export const WithDisabled = prepareStory(Template, {
  args: {
    ...defaultArgs,
    disabled: true,
    size: "default"
  },
});
