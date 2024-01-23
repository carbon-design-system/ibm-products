/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ListItem } from '@carbon/react';
// TODO: import action to handle events if required.
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { TruncatedList } from '.';

import styles from './_storybook-styles.scss';
import DocsPage from './TruncatedList';

const storyClass = 'truncated-list-stories';

export default {
  title: getStoryTitle(TruncatedList.displayName),
  component: TruncatedList,
  tags: ['autodocs'],
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    layout: 'centered',
    docs: {
      page: DocsPage,
    },
  },
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <TruncatedList
        onClick={(isCollapsed) => {
          action(`clicked, is ${isCollapsed ? 'collapsed' : 'expanded'}`)();
        }}
        {...args}
      >
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
        <ListItem>Item 5</ListItem>
        <ListItem>Item 6</ListItem>
        <ListItem>Item 7</ListItem>
        <ListItem>Item 8</ListItem>
        <ListItem>Item 9</ListItem>
        <ListItem>Item 10</ListItem>
        <ListItem>Item 11</ListItem>
        <ListItem>Item 12</ListItem>
        <ListItem>Item 13</ListItem>
        <ListItem>Item 14</ListItem>
        <ListItem>Item 15</ListItem>
        <ListItem>Item 16</ListItem>
      </TruncatedList>
    </div>
  );
};

export const truncatedList = prepareStory(Template, {
  args: {
    as: 'ul',
    collapsedItemsLimit: 3,
    expandedItemsLimit: 9,
  },
});
