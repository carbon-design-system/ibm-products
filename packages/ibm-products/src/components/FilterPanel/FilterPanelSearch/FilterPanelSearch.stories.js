/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';

import { FilterPanelSearch } from '.';
import mdx from './FilterPanelSearch.mdx';

import styles from '../_storybook-styles.scss';

const storyClass = 'filter-panel-stories';

export default {
  title: 'IBM Products/Components/Filter Panel/FilterPanelSearch',
  component: FilterPanelSearch,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    children: { table: { disable: true } },
    className: { control: { type: {} } },
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <FilterPanelSearch
        {...args}
        onChange={(event) => {
          action('onChange "' + event.target.value + '"')(event);
        }}
        onClear={() => {
          action()('onClear');
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  labelText: 'Search',
  placeholder: 'Search',
};
