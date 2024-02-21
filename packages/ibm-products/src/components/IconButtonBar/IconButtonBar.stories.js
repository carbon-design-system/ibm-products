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
import { Add, Edit, Locked, Notification } from '@carbon/react/icons';
import mdx from './IconButtonBar.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(IconButtonBar.displayName),
  component: IconButtonBar,
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
  },
};

const Template = (args) => {
  return (
    <IconButtonBar {...args}>
      <IconButtonBarItem
        divider="right"
        label="Add"
        onClick={(event) => action('onClick Add')(event)}
      >
        <Add size={16} />
      </IconButtonBarItem>

      <IconButtonBarItem
        divider="right"
        label="Edit"
        onClick={(event) => action('onClick Edit')(event)}
      >
        <Edit size={16} />
      </IconButtonBarItem>

      <IconButtonBarItem
        divider="right"
        label="Locked"
        onClick={(event) => action('onClick Locked')(event)}
      >
        <Locked size={16} />
      </IconButtonBarItem>

      <IconButtonBarItem
        label="Notification"
        onClick={(event) => action('onClick Notification')(event)}
      >
        <Notification size={16} />
      </IconButtonBarItem>
    </IconButtonBar>
  );
};

export const iconButtonBar = prepareStory(Template, {
  args: {
    length: 3,
  },
});

export const withOverflowOptions = prepareStory(Template, {
  args: {
    overflowMenuProps: {
      align: 'bottom', // tooltip position
      flipped: true, // menu to the left of the [⋮]
      direction: 'top', // menu above the [⋮]
      iconDescription: 'More', // tooltip text
    },
  },
});
