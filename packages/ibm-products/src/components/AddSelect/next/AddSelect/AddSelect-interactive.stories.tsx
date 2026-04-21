/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import { AddSelect } from './AddSelect';
import {
  AddSelectData,
  HierarchicalItem,
} from '@carbon/ibm-products-primitives';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelect-interactive.mdx';

// Sample hierarchical data
const hierarchicalData: HierarchicalItem[] = [
  {
    id: '1',
    title: 'United States',
    value: 'us',
    children: {
      entries: [
        {
          id: '1-1',
          title: 'California',
          value: 'ca',
          children: {
            entries: [
              { id: '1-1-1', title: 'Los Angeles', value: 'la' },
              { id: '1-1-2', title: 'San Francisco', value: 'sf' },
              { id: '1-1-3', title: 'San Diego', value: 'sd' },
            ],
          },
        },
        {
          id: '1-2',
          title: 'Texas',
          value: 'tx',
          children: {
            entries: [
              { id: '1-2-1', title: 'Houston', value: 'houston' },
              { id: '1-2-2', title: 'Dallas', value: 'dallas' },
              { id: '1-2-3', title: 'Austin', value: 'austin' },
            ],
          },
        },
        {
          id: '1-3',
          title: 'New York',
          value: 'ny',
          children: {
            entries: [
              { id: '1-3-1', title: 'New York City', value: 'nyc' },
              { id: '1-3-2', title: 'Buffalo', value: 'buffalo' },
            ],
          },
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Canada',
    value: 'ca',
    children: {
      entries: [
        {
          id: '2-1',
          title: 'Ontario',
          value: 'on',
          children: {
            entries: [
              { id: '2-1-1', title: 'Toronto', value: 'toronto' },
              { id: '2-1-2', title: 'Ottawa', value: 'ottawa' },
            ],
          },
        },
        {
          id: '2-2',
          title: 'British Columbia',
          value: 'bc',
          children: {
            entries: [
              { id: '2-2-1', title: 'Vancouver', value: 'vancouver' },
              { id: '2-2-2', title: 'Victoria', value: 'victoria' },
            ],
          },
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Mexico',
    value: 'mx',
    children: {
      entries: [
        { id: '3-1', title: 'Mexico City', value: 'mexico-city' },
        { id: '3-2', title: 'Guadalajara', value: 'guadalajara' },
        { id: '3-3', title: 'Monterrey', value: 'monterrey' },
      ],
    },
  },
];

const InteractiveStory = () => {
  const [dataManager] = useState(() => new AddSelectData());
  const [currentItems, setCurrentItems] = useState<HierarchicalItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [path, setPath] = useState<Array<{ id: string; title: string }>>([]);
  const [currentParentId, setCurrentParentId] = useState<string>('');

  // Initialize data
  useEffect(() => {
    dataManager.setItems(hierarchicalData);
    setCurrentItems(hierarchicalData);
  }, [dataManager]);

  // Handle item selection (single-select mode)
  const handleItemSelect = (itemId: string, selected: boolean) => {
    if (selected) {
      // Use exclusive mode for single-select
      dataManager.setSelectedItems(itemId, true);
      setSelectedItems(new Set([itemId]));

      const selectedItem = dataManager.getItem(itemId);
      console.log('Selected item:', {
        id: selectedItem?.id,
        title: selectedItem?.title,
        value: selectedItem?.value,
      });
    } else {
      dataManager.clearSelections();
      setSelectedItems(new Set());
      console.log('Selection cleared');
    }
  };

  // Handle navigation to children
  const handleNavigate = (itemId: string, title: string) => {
    const children = dataManager.getItemChildren(itemId);
    if (children.length > 0) {
      setCurrentItems(children);
      setCurrentParentId(itemId);

      // Build breadcrumb path
      const parents = dataManager.getItemParents(itemId);
      const newPath = [
        { id: 'root', title: 'All Locations' },
        ...parents.reverse().map((p) => ({ id: p.id, title: p.title || '' })),
        { id: itemId, title },
      ];
      setPath(newPath);
    }
  };

  // Handle breadcrumb navigation
  const handleBreadcrumbClick = (index: number) => {
    if (index === 0) {
      // Navigate to root
      setCurrentItems(hierarchicalData);
      setCurrentParentId('');
      setPath([]);
    } else {
      const targetId = path[index].id;
      const children = dataManager.getItemChildren(targetId);
      setCurrentItems(children);
      setCurrentParentId(targetId);
      setPath(path.slice(0, index + 1));
    }
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchTerm(query);

    if (query) {
      const results = dataManager.search(query);
      setCurrentItems(results);
      setPath([]);
    } else {
      // Reset to current level or root
      if (currentParentId) {
        const children = dataManager.getItemChildren(currentParentId);
        setCurrentItems(children);
      } else {
        setCurrentItems(hierarchicalData);
      }
    }
  };

  // Render items with proper hasChildren flag
  const renderItems = () => {
    return currentItems.map((item) => {
      const hasChildren = dataManager.hasChildren(item.id);
      return (
        <AddSelect.Row
          key={item.id}
          itemId={item.id}
          title={item.title || ''}
          subtitle={item.value}
          value={item.value || ''}
          hasChildren={hasChildren}
        />
      );
    });
  };

  return (
    <div className="add-select-variant-container">
      <h4>Interactive AddSelect with AddSelectData utility</h4>
      <AddSelect
        selectedItems={selectedItems}
        onItemSelect={handleItemSelect}
        onNavigate={handleNavigate}
      >
        <AddSelect.Body
          itemsLabel="All Locations"
          globalSearchLabel="Search"
          globalSearchPlaceholder="Search locations..."
          searchResultsTitle="Search results"
          itemCount={currentItems.length}
          path={path}
          onSearch={handleSearch}
          onBreadcrumbClick={handleBreadcrumbClick}
        >
          <AddSelect.List>{renderItems()}</AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    </div>
  );
};

/**
 * Story: Interactive
 * Shows complete implementation using AddSelectData utility
 */
export const Interactive = {
  render: () => <InteractiveStory />,
};

export default {
  title: 'Preview/Add and select/Interactive',
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
