/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { getNodeTextContent } from '../../../global/js/utils/getNodeTextContent';
import uuidv4 from '../../../global/js/utils/uuidv4';

// import { FilterPanel, FilterPanelAccordionItem, FilterPanelCheckbox } from '..';
import { FilterPanelSearch } from '.';
import { FilterPanelCheckbox } from '..';
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

const demoItems = [
  'Checkbox',
  <>
    <strong>Formatted</strong> <em>checkbox</em>
  </>,
  'Really, really long checkbox name',
  'Checkbox with menu 1',
  'Checkbox with menu 2',
  'Checkbox 1',
  'Checkbox 2',
  'Checkbox 3',
  'Checkbox 4',
  'Checkbox 5',
  'Checkbox 6',
  'Checkbox 7',
  'Checkbox 8',
  'Checkbox 9',
  'Checkbox 10',
  'Checkbox 11',
  'Checkbox 12',
];

const Template = (args) => {
  const [searchValue, setSearchValue] = useState('');
  let demoSearchResults;

  const filteredItems = demoItems.filter((item) => {
    const t = getNodeTextContent(item).toLowerCase();
    const s = searchValue.toLowerCase();
    return t.indexOf(s) > -1;
  });

  if (searchValue.length === 0) {
    demoSearchResults = null;
  } else if (searchValue.length > 0 && filteredItems.length === 0) {
    demoSearchResults = <p>No search results.</p>;
  } else {
    demoSearchResults = filteredItems.map((item, index) => {
      return <FilterPanelCheckbox key={index} labelText={item} id={uuidv4()} />;
    });
  }

  return (
    <div className={`${storyClass}__viewport`}>
      <FilterPanelSearch
        {...args}
        onChange={(event) => {
          action('onChange "' + event.target.value + '"')(event);
          setSearchValue(event.target.value);
        }}
      >
        {demoSearchResults}
      </FilterPanelSearch>
    </div>
  );
};

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  labelText: 'Search',
};
