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
} from '../../../global/js/utils/story-helper';
import uuidv4 from '../../../global/js/utils/uuidv4';

import { FilterPanel, FilterPanelCheckbox } from '..';
import mdx from './FilterPanelCheckbox.mdx';

import styles from '../_storybook-styles.scss';

const storyClass = 'filter-panel-stories';

export default {
  title: getStoryTitle(FilterPanelCheckbox.displayName),
  component: FilterPanelCheckbox,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: {} } },
    id: { table: { disable: true } },
    onChange: { table: { disable: true } },
    setCountAriaLabel: { control: { type: {} } },
    count: {
      control: {
        type: 'select',
        labels: {
          0: 'As number: 5',
          1: 'As string: "5,000"',
        },
      },
      mapping: {
        0: 5,
        1: '5,000',
      },
      options: [0, 1],
    },
  },
  args: {
    count: 0,
    // Pass-through prop: Carbon's Checkbox onChange handler.
    onChange: (event, { checked, id }) =>
      action('FilterPanelCheckbox onChange')(checked, id, event),
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <FilterPanel>
        <FilterPanelCheckbox {...args} />
      </FilterPanel>
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    id: uuidv4(),
    labelText: 'Checkbox label',
    labelTitle: 'Alternate checkbox `title` attribute',
    setCountAriaLabel: (count) => `${count} items`,
  },
});
