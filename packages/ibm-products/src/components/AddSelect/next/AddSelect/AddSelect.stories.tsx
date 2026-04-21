/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { AddSelect } from './AddSelect';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelect.mdx';

const items = [
  {
    id: '1',
    title: 'Item 1',
    subtitle: 'Description for item 1',
    value: 'item-1',
  },
  {
    id: '2',
    title: 'Item 2',
    subtitle: 'Description for item 2',
    value: 'item-2',
  },
  {
    id: '3',
    title: 'Item 3',
    subtitle: 'Description for item 3',
    value: 'item-3',
  },
  {
    id: '4',
    title: 'Item 4',
    subtitle: 'Description for item 4',
    value: 'item-4',
  },
  {
    id: '5',
    title: 'Item 5',
    subtitle: 'Description for item 5',
    value: 'item-5',
  },
];

const DefaultStory = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set<string>(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
    console.log('Selected items:', Array.from(newSelected));
  };

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="All items"
        globalSearchLabel="Search"
        globalSearchPlaceholder="Search items"
        itemCount={items.length}
      >
        <AddSelect.List>
          {items.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
            />
          ))}
        </AddSelect.List>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * Story 1: Default
 * Shows complete interactive AddSelect with state management
 */
export const Default = {
  render: () => <DefaultStory />,
};

export default {
  title: 'Preview/Add and select/AddSelect',
  component: AddSelect,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="add-select-story-container">
        <Story />
      </div>
    ),
  ],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
