/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';

import { prepareStory } from '../../../global/js/utils/story-helper';
import uuidv4 from '../../../global/js/utils/uuidv4';

import { FilterPanel, FilterPanelCheckbox } from '..';
import mdx from './FilterPanelCheckbox.mdx';

import styles from '../_storybook-styles.scss';

const storyClass = 'filter-panel-stories';

export default {
  title: 'IBM Products/Components/Filter panel/Filter Panel Checkbox',
  component: FilterPanelCheckbox,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: {} } },
    id: { table: { disable: true } },
    onChange: { table: { disable: true } },
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
    labelText: {
      control: {
        type: 'select',
        labels: {
          0: 'Plain text',
          1: 'Very long text',
          2: 'Formatted text',
        },
      },
      mapping: {
        0: 'Label',
        1: 'Really, really long label name',
        2: (
          <>
            <strong>Formatted</strong> <em>label</em>
          </>
        ),
      },
      options: [0, 1, 2],
    },
  },
  args: {
    count: 0,
    labelText: 0,
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
  storyName: 'Filter Panel Checkbox',
  args: {
    id: uuidv4(),
    title: '',
  },
});
