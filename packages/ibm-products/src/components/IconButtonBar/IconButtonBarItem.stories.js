/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { IconButtonBar, IconButtonBarItem } from '.';
import { Add } from '@carbon/react/icons';
import mdx from './IconButtonBarItem.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(IconButtonBarItem.displayName),
  component: IconButtonBarItem,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    divider: {
      options: ['left', 'right', 'sides'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return (
    <IconButtonBar>
      <IconButtonBarItem {...args} />
    </IconButtonBar>
  );
};

export const iconButtonBarItem = prepareStory(Template, {
  args: {
    children: <Add size={16} />,
    label: 'Add',
    onClick: (event) => action('onClick Add')(event),
  },
});
