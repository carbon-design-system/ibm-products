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

import { ComboButton, ComboButtonItem } from '..';

import styles from './_combo-button.scss';

const modifiers = {
  'Is Delete': { isDelete: true },
  'No Delete': { isDelete: false },
  'Has Divider': { hasDivider: true },
  'No Divider': { hasDivider: false },
  'Item Disabled': { itemDisabled: true },
  'Item Active': { itemDisabled: false },
};
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
    // }
    modifiers: {
      control: {
        type: 'select',
        labels: Object.keys(modifiers),
      },
      options: Object.values(modifiers).map((_k, i) => i),
      mapping: Object.values(modifiers),
    },
  },
  subcomponents: {
    ComboButtonItem,
  },
  parameters: { styles },
};

const Template = (args) => {
  console.log(args);
  return (
    <ComboButton disabled={args.buttonDisabled} size={args.size}>
      <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
      <ComboButtonItem renderIcon={args.icon && args.icon}>
        ComboButtonItem 2
      </ComboButtonItem>
      <ComboButtonItem disabled={args?.modifiers?.itemDisabled}>
        ComboButtonItem 3
      </ComboButtonItem>
      <ComboButtonItem hasDivider={args?.modifiers?.hasDivider}>
        ComboButtonItem 4
      </ComboButtonItem>
      <ComboButtonItem isDelete={args?.modifiers?.isDelete}>
        ComboButtonItem 5
      </ComboButtonItem>
    </ComboButton>
  );
};

// const DividerTemplate = (args) => (
//   <ComboButton>
//     <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
//     <ComboButtonItem renderIcon={args.icon && args.icon}>
//       ComboButtonItem 2
//     </ComboButtonItem>
//     <ComboButtonItem disabled={args.disabled}>
//       ComboButtonItem 3
//     </ComboButtonItem>
//     <ComboButtonItem>ComboButtonItem 4</ComboButtonItem>
//     <ComboButtonItemDivider />
//     <ComboButtonItem danger={args.danger}>ComboButtonItem 5</ComboButtonItem>
//   </ComboButton>
// );

// const DisabledTemplate = (args) => (
//   <ComboButton disabled={args.disabled}>
//     <ComboButtonItem>ComboButtonItem 1</ComboButtonItem>
//     <ComboButtonItem renderIcon={args.icon && args.icon}>
//       ComboButtonItem 2
//     </ComboButtonItem>
//     <ComboButtonItem>ComboButtonItem 3</ComboButtonItem>
//     <ComboButtonItem>ComboButtonItem 4</ComboButtonItem>
//     <ComboButtonItemDivider />
//     <ComboButtonItem danger={args.danger}>ComboButtonItem 5</ComboButtonItem>
//   </ComboButton>
// );

export const Default = prepareStory(Template, {
  args: {
    //hasDivider: false,
    //isDelete: false,
    buttonDisabled: false,
    size: 'md',
    //itemDisabled: false,
  },
});

// export const WithDivider = prepareStory(DividerTemplate, {
//   args: {},
// });

// export const WithDanger = prepareStory(Template, {
//   args: {
//     danger: true,
//     disabled: true,
//   },
// });

// export const WithDisabled = prepareStory(DisabledTemplate, {
//   args: {
//     disabled: true,
//   },
// });
