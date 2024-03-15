/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getStoryTitle,
  prepareStory,
} from '../../../global/js/utils/story-helper';

import { FilterPanel, FilterPanelLabel } from '..';
import mdx from './FilterPanelLabel.mdx';

import styles from '../_storybook-styles.scss';

const storyClass = 'filter-panel-stories';

export default {
  title: getStoryTitle(FilterPanelLabel.displayName),
  component: FilterPanelLabel,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    className: { control: { type: {} } },
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
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <FilterPanel>
        <FilterPanelLabel {...args} />
      </FilterPanel>
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    children: 'Label',
    labelTitle: 'Alternate label `title` attribute',
  },
});
