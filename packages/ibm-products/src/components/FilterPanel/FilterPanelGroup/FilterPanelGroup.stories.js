/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { FilterPanel, FilterPanelGroup } from '..';
import mdx from './FilterPanelGroup.mdx';

import styles from '../_storybook-styles.scss';

const storyClass = 'filter-panel-stories';

export default {
  title: 'IBM Products/Components/Filter Panel/FilterPanelGroup',
  component: FilterPanelGroup,
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
    count: {
      control: {
        type: 'select',
        labels: {
          0: 'As number: 10',
          1: 'As string: "1,500"',
        },
      },
      mapping: {
        0: 10,
        1: '1,500',
      },
      options: [0, 1],
    },
    labelText: {
      control: {
        type: 'select',
        labels: {
          0: 'Plain text',
          1: 'Very long text',
          2: 'Using markup',
        },
      },
      mapping: {
        0: 'Group name',
        1: 'Really, really, really long group name',
        2: (
          <>
            Formatted <em>group</em>{' '}
            <span style={{ fontWeight: 'normal' }}>label</span>
          </>
        ),
      },
      options: [0, 1, 2],
    },
  },
  args: {
    count: 0,
    labelText: 0,
  },
};

const Template = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <FilterPanel>
        <FilterPanelGroup {...args}>
          {/* `children` are required. */}
          &nbsp;
        </FilterPanelGroup>
      </FilterPanel>
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  title: '',
};
