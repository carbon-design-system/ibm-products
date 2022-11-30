/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ButtonMenu, ButtonMenuItem } from '.';
import mdx from './ButtonMenu.mdx';

import styles from './_storybook-styles.scss';

import { ChevronDown16 } from '@carbon/icons-react';

export default {
  title: getStoryTitle(ButtonMenu.displayName),
  component: ButtonMenu,
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const renderItems = (setIsOpen, args) => {
  return (
    <ButtonMenu label="Primary button" renderIcon={ChevronDown16} {...args}>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 1`);
          setIsOpen(false);
        }}
        size={args.size}
      >
        Option 1
      </ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 2`);
          setIsOpen(false);
        }}
        size={args.size}
      >
        Option 2
      </ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 3`);
          setIsOpen(false);
        }}
        disabled={args.isDisabled ? true : false}
        size={args.size}
      >
        Option 3
      </ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 4`);
          setIsOpen(false);
        }}
        kind={args.isDanger ? 'danger' : null}
        size={args.size}
      >
        Option 4
      </ButtonMenuItem>
    </ButtonMenu>
  );
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ButtonMenu
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onMenuButtonClick={() => {
        setIsOpen((prev) => !prev);
      }}
      label="Button menu"
      {...args}
    >
      {renderItems(setIsOpen, args)}
    </ButtonMenu>
  );
};

export const buttonMenu = prepareStory(Template, {
  storyName: 'Button menu',
  args: {
    isDanger: false,
    isDisabled: false,
    size: 'md',
  },
});
