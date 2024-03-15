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
import uuidv4 from '../../global/js/utils/uuidv4';

import { FilterPanel, FilterPanelCheckbox } from '.';
import mdx from './FilterPanel.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'filter-panel-stories';

export default {
  title: getStoryTitle(FilterPanel.displayName),
  component: FilterPanel,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    children: { control: { type: {} } },
    className: { control: { type: {} } },
    title: {
      control: {
        type: 'select',
        labels: {
          0: 'No title',
          1: 'Plain text',
          2: 'Formatted text',
        },
      },
      mapping: {
        0: null,
        1: 'Filter panel title',
        2: (
          <>
            <strong>Filter</strong> <em>panel</em> title
          </>
        ),
      },
      options: [0, 1, 2],
    },
  },
  args: {
    title: 1,
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <FilterPanel {...args}>
        <FilterPanelCheckbox
          count={6}
          labelText="Filter 1"
          // "id" and "onChange" are pass-through props to Carbon's Checkbox.
          id={uuidv4()}
          onChange={(event, { checked, id }) =>
            action('FilterPanelCheckbox onChange')(checked, id, event)
          }
        />
        <FilterPanelCheckbox
          count={10}
          labelText="Filter 2"
          id={uuidv4()}
          onChange={(event, { checked, id }) =>
            action('FilterPanelCheckbox onChange')(checked, id, event)
          }
        />
        <FilterPanelCheckbox
          count={'1,500'}
          labelText="Really long filter name"
          id={uuidv4()}
          onChange={(event, { checked, id }) =>
            action('FilterPanelCheckbox onChange')(checked, id, event)
          }
        />
      </FilterPanel>
    </div>
  );
};

export const Default = prepareStory(Template);
