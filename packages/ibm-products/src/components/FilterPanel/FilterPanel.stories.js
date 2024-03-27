/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { OverflowMenuItem } from '@carbon/react';

import uuidv4 from '../../global/js/utils/uuidv4';

import {
  FilterPanel,
  FilterPanelCheckbox,
  FilterPanelCheckboxWithOverflow,
} from '.';
import mdx from './FilterPanel.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'filter-panel-stories';

export default {
  title: 'IBM Products/Components/Filter panel/Filter Panel',
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
          2: 'Using markup',
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
          labelText="Label"
          // "id" and "onChange" are pass-through props to Carbon's Checkbox.
          id={uuidv4()}
          onChange={(event, { checked, id }) =>
            action('onChange Checkbox')(checked, id, event)
          }
        />
        <FilterPanelCheckbox
          count={'1,500'}
          labelText={
            <>
              <strong>Formatted</strong> <em>label</em>
            </>
          }
          id={uuidv4()}
          onChange={(event, { checked, id }) =>
            action('onChange Checkbox')(checked, id, event)
          }
        />
        <FilterPanelCheckbox
          count={10}
          labelText="Really, really long label name"
          id={uuidv4()}
          onChange={(event, { checked, id }) =>
            action('onChange Checkbox')(checked, id, event)
          }
        />
        <FilterPanelCheckboxWithOverflow
          {...args}
          count={6}
          id={uuidv4()}
          labelText="With menu"
          onChange={(event, { checked, id }) =>
            action('onChange Checkbox')(checked, id, event)
          }
          overflowMenuProps={{
            selectorPrimaryFocus: '[data-storybook-example-primary-focus]',
          }}
        >
          <OverflowMenuItem
            itemText="Option 1"
            onClick={(event) => {
              action('onClick Option 1')(event);
            }}
          />
          <OverflowMenuItem
            itemText="Option 2, preselected"
            onClick={(event) => {
              action('onClick Option 2')(event);
            }}
            data-storybook-example-primary-focus
          />
          <OverflowMenuItem
            itemText="Option 3"
            onClick={(event) => {
              action('onClick Option 3')(event);
            }}
          />
          <OverflowMenuItem
            itemText="Option 4"
            onClick={(event) => {
              action('onClick Option 4')(event);
            }}
          />
        </FilterPanelCheckboxWithOverflow>
      </FilterPanel>
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Filter Panel';
