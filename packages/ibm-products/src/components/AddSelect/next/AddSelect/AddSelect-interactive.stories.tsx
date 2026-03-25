/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo } from 'react';
import { AddSelect } from './AddSelect';
import { filterItems, flattenItems, NormalizedItem } from '../utils';

// Sample hierarchical data
const sampleHierarchicalData: NormalizedItem[] = [
  {
    id: '1',
    title: 'United States',
    value: 'us',
    children: [
      {
        id: '1-1',
        title: 'California',
        value: 'ca',
        parentId: '1',
        children: [
          { id: '1-1-1', title: 'Los Angeles', value: 'la', parentId: '1-1' },
          { id: '1-1-2', title: 'San Francisco', value: 'sf', parentId: '1-1' },
          { id: '1-1-3', title: 'San Diego', value: 'sd', parentId: '1-1' },
        ],
      },
      {
        id: '1-2',
        title: 'Texas',
        value: 'tx',
        parentId: '1',
        children: [
          { id: '1-2-1', title: 'Houston', value: 'houston', parentId: '1-2' },
          { id: '1-2-2', title: 'Dallas', value: 'dallas', parentId: '1-2' },
          { id: '1-2-3', title: 'Austin', value: 'austin', parentId: '1-2' },
        ],
      },
      {
        id: '1-3',
        title: 'New York',
        value: 'ny',
        parentId: '1',
        children: [
          {
            id: '1-3-1',
            title: 'New York City',
            value: 'nyc',
            parentId: '1-3',
          },
          { id: '1-3-2', title: 'Buffalo', value: 'buffalo', parentId: '1-3' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Canada',
    value: 'ca',
    children: [
      {
        id: '2-1',
        title: 'Ontario',
        value: 'on',
        parentId: '2',
        children: [
          { id: '2-1-1', title: 'Toronto', value: 'toronto', parentId: '2-1' },
          { id: '2-1-2', title: 'Ottawa', value: 'ottawa', parentId: '2-1' },
        ],
      },
      {
        id: '2-2',
        title: 'British Columbia',
        value: 'bc',
        parentId: '2',
        children: [
          {
            id: '2-2-1',
            title: 'Vancouver',
            value: 'vancouver',
            parentId: '2-2',
          },
          {
            id: '2-2-2',
            title: 'Victoria',
            value: 'victoria',
            parentId: '2-2',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: 'Mexico',
    value: 'mx',
    children: [
      { id: '3-1', title: 'Mexico City', value: 'mexico-city', parentId: '3' },
      { id: '3-2', title: 'Guadalajara', value: 'guadalajara', parentId: '3' },
      { id: '3-3', title: 'Monterrey', value: 'monterrey', parentId: '3' },
    ],
  },
];

/**
 * Interactive example demonstrating hierarchical navigation and search
 */
const AddSelectInteractiveExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentItems, setCurrentItems] = useState<NormalizedItem[]>(
    sampleHierarchicalData
  );
  const [selectedItem, setSelectedItem] = useState('');
  const [navigationStack, setNavigationStack] = useState<
    Array<{
      items: NormalizedItem[];
      parentId: string;
      parentTitle: string;
    }>
  >([]);

  // Get all items for searching
  const allItems = useMemo(() => flattenItems(sampleHierarchicalData), []);

  // Filter items based on search term
  const filteredItems = useMemo(() => {
    if (searchTerm) {
      return filterItems(allItems, searchTerm);
    }
    return currentItems;
  }, [searchTerm, currentItems, allItems]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleItemSelect = (
    itemId: string,
    selected: boolean,
    value: string
  ) => {
    if (selected) {
      setSelectedItem(itemId);
    } else {
      setSelectedItem('');
    }
  };

  const handleNavigate = (itemId: string, title: string, parentId: string) => {
    // Find the item and get its children
    const item = allItems.find((i) => i.id === itemId);
    if (item && item.children && item.children.length > 0) {
      // Save current state to navigation stack
      setNavigationStack([
        ...navigationStack,
        {
          items: currentItems,
          parentId: itemId,
          parentTitle: title,
        },
      ]);

      // Update current items to show children
      setCurrentItems(item.children);
      setSearchTerm('');
      setSelectedItem('');
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    // Navigate back to the clicked breadcrumb level
    const levelsToGoBack = navigationStack.length - index;

    if (levelsToGoBack > 0) {
      const newStack = navigationStack.slice(0, index);
      const targetLevel =
        index === 0 ? sampleHierarchicalData : navigationStack[index - 1].items;

      setNavigationStack(newStack);
      setCurrentItems(targetLevel);
      setSearchTerm('');
      setSelectedItem('');
    }
  };

  const getBreadcrumbPath = () => {
    const path = [{ id: 'root', title: 'Locations' }];

    navigationStack.forEach((item) => {
      path.push({ id: item.parentId, title: item.parentTitle });
    });

    return path;
  };

  const selectedItems = useMemo(() => {
    const set = new Set<string>();
    if (selectedItem) {
      set.add(selectedItem);
    }
    return set;
  }, [selectedItem]);

  return (
    <AddSelect
      onItemSelect={handleItemSelect}
      onNavigate={handleNavigate}
      selectedItems={selectedItems}
    >
      <AddSelect.Body
        itemsLabel="Locations"
        globalSearchLabel="Search locations"
        globalSearchPlaceholder="Search..."
        searchResultsTitle="Search results"
        itemCount={filteredItems.length}
        path={getBreadcrumbPath()}
        onSearch={handleSearch}
        onBreadcrumbClick={handleBreadcrumbClick}
      >
        <AddSelect.List>
          {filteredItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <AddSelect.Item
                key={item.id}
                itemId={item.id}
                title={item.title}
                value={item.value}
                hasChildren={hasChildren}
              />
            );
          })}
        </AddSelect.List>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * Interactive story demonstrating hierarchical navigation and search
 * This example shows:
 * - Hierarchical navigation through nested data
 * - Search functionality across all levels
 * - Selection management
 * - Breadcrumb navigation
 */
export const InteractiveWithDataUtility = {
  render: () => <AddSelectInteractiveExample />,
  parameters: {
    docs: {
      description: {
        story: `
This interactive example demonstrates how to manage hierarchical data in Add Select components.

## Key Features Demonstrated:

- **Hierarchical Navigation**: Navigate through nested data structures
- **Search Functionality**: Search across all levels of the hierarchy
- **Selection Management**: Handle single-select scenarios
- **Breadcrumb Navigation**: Navigate back through the hierarchy
- **Data Utility Integration**: Uses utility functions for data management

## Utility Functions Used:

- \`flattenItems()\` - Flatten hierarchical data for searching
- \`filterItems()\` - Filter items by search term
- \`normalizeItems()\` - Normalize item structure

See the source code for implementation details.
        `,
      },
    },
  },
};

const meta = {
  title: 'Preview/AddSelect/Interactive Examples',
  component: AddSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
This interactive example demonstrates how to use the AddSelect component for managing hierarchical data.

## Key Features:

- **Hierarchical Navigation**: Navigate through nested data structures
- **Search Functionality**: Search across all levels of the hierarchy
- **Selection Management**: Handle single-select scenarios
- **Breadcrumb Navigation**: Navigate back through the hierarchy
- **Data Utility Integration**: All data operations use utility functions

## Utility Functions:

The component provides several utility functions for data management:

- \`flattenItems()\` - Flatten hierarchical data for searching
- \`filterItems()\` - Filter items by search term
- \`normalizeItems()\` - Normalize item structure
- \`getItemById()\` - Find item by ID
- \`buildPath()\` - Build navigation path

See the source code for implementation details.
        `,
      },
    },
  },
};

export default meta;

// Made with Bob
