/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import styles from '../_storybook-styles.scss?inline';
import mdx from './AddSelectColumn.mdx';

export default {
  title: 'Preview/Add and select/AddSelectColumn',
  component: AddSelect.Column,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultItems = [
  { id: '1', title: 'Item 1', value: 'item1', subtitle: 'Description 1' },
  { id: '2', title: 'Item 2', value: 'item2', subtitle: 'Description 2' },
  { id: '3', title: 'Item 3', value: 'item3', subtitle: 'Description 3' },
  { id: '4', title: 'Item 4', value: 'item4', subtitle: 'Description 4' },
  { id: '5', title: 'Item 5', value: 'item5', subtitle: 'Description 5' },
];

const DefaultStory = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = new Set(defaultItems.map((item) => item.id));
      setSelectedItems(allIds);
    } else {
      setSelectedItems(new Set());
    }
  };

  const allSelected = defaultItems.every((item) => selectedItems.has(item.id));

  return (
    <div style={{ height: '500px', width: '400px' }}>
      <AddSelect
        multi
        onItemSelect={handleItemSelect}
        selectedItems={selectedItems}
      >
        <AddSelect.List>
          <AddSelect.Column
            title="Items"
            multi={true}
            itemCount={defaultItems.length}
          >
            {defaultItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.List>
      </AddSelect>
    </div>
  );
};

export const Default = {
  render: () => <DefaultStory />,
};

const WithSelectAllStory = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const filteredItems = defaultItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '500px', width: '400px' }}>
      <AddSelect
        multi
        onItemSelect={handleItemSelect}
        selectedItems={selectedItems}
      >
        <AddSelect.List>
          <AddSelect.Column
            title="Items"
            multi={true}
            showSelectAll={true}
            itemCount={filteredItems.length}
          >
            {filteredItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.List>
      </AddSelect>
    </div>
  );
};

export const WithSelectAll = {
  render: () => <WithSelectAllStory />,
};

const WithSearchStory = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const filteredItems = defaultItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '500px', width: '400px' }}>
      <AddSelect
        multi
        onItemSelect={handleItemSelect}
        selectedItems={selectedItems}
      >
        <AddSelect.List>
          <AddSelect.Column
            title="Items"
            multi={true}
            showSearch={true}
            searchPlaceholder="Search items..."
            showSelectAll={true}
            itemCount={filteredItems.length}
            onSearchChange={setSearchTerm}
          >
            {filteredItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.List>
      </AddSelect>
    </div>
  );
};

export const WithSearch = {
  render: () => <WithSearchStory />,
};

const WithAllFeaturesStory = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<string[]>([]);

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const filteredItems = defaultItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '500px', width: '400px' }}>
      <AddSelect
        multi
        onItemSelect={handleItemSelect}
        selectedItems={selectedItems}
      >
        <AddSelect.List>
          <AddSelect.Column
            title="Items"
            multi={true}
            showSearch={true}
            searchPlaceholder="Search items..."
            showSort={true}
            sortOptions={[
              { id: 'title', label: 'Title' },
              { id: 'value', label: 'Value' },
            ]}
            sortLabel="Sort by"
            showFilter={true}
            filterOptions={['Active', 'Inactive', 'Pending']}
            filterLabel="Filter by status"
            showSelectAll={true}
            itemCount={filteredItems.length}
            onSearchChange={setSearchTerm}
            onFilterChange={setFilters}
          >
            {filteredItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.List>
      </AddSelect>
    </div>
  );
};

export const WithAllFeatures = {
  render: () => <WithAllFeaturesStory />,
};

const SingleSelectionStory = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemSelect = (itemId: string, selected: boolean) => {
    // For single selection, clear previous selection
    const newSelected = new Set<string>();
    if (selected) {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const filteredItems = defaultItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '500px', width: '400px' }}>
      <AddSelect
        multi={false}
        onItemSelect={handleItemSelect}
        selectedItems={selectedItems}
      >
        <AddSelect.List>
          <AddSelect.Column
            title="Items"
            multi={false}
            showSearch={true}
            searchPlaceholder="Search items..."
            itemCount={filteredItems.length}
            onSearchChange={setSearchTerm}
          >
            {filteredItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.List>
      </AddSelect>
    </div>
  );
};

export const SingleSelection = {
  render: () => <SingleSelectionStory />,
};
