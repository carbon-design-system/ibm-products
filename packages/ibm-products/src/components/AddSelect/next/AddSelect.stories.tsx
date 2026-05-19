/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo } from 'react';
import {
  Search,
  Dropdown,
  Button,
  OverflowMenu,
  OverflowMenuItem,
} from '@carbon/react';
import { ArrowsVertical } from '@carbon/react/icons';
import { AddSelect } from '.';
import styles from './_storybook-styles.scss?inline';
import mdx from './AddSelect.mdx';

const storyClass = 'add-select-next-stories';

export default {
  title: 'Preview/Add and select/AddSelect',
  component: AddSelect,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <div className={`${storyClass}__viewport`}>{Story()}</div>;
    },
  ],
  subcomponents: {
    Body: AddSelect.Body,
    Content: AddSelect.Content,
    Column: AddSelect.Column,
    Row: AddSelect.Row,
    SelectionSummary: AddSelect.SelectionSummary,
    SelectionSummaryItem: AddSelect.SelectionSummaryItem,
    ItemSummaryPanel: AddSelect.ItemSummaryPanel,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

// Sample data
const simpleItems = [
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

// Extended sample data with types for filter examples
const itemsWithTypes = [
  {
    id: '1',
    title: 'Apple',
    subtitle: 'A delicious fruit',
    value: 'apple',
    type: 'Fruit',
  },
  {
    id: '2',
    title: 'Banana',
    subtitle: 'Yellow and sweet',
    value: 'banana',
    type: 'Fruit',
  },
  {
    id: '3',
    title: 'Carrot',
    subtitle: 'Orange vegetable',
    value: 'carrot',
    type: 'Vegetable',
  },
  {
    id: '4',
    title: 'Dates',
    subtitle: 'Sweet dried fruit',
    value: 'dates',
    type: 'Fruit',
  },
  {
    id: '5',
    title: 'Eggplant',
    subtitle: 'Purple vegetable',
    value: 'eggplant',
    type: 'Vegetable',
  },
  {
    id: '6',
    title: 'Fig',
    subtitle: 'Soft sweet fruit',
    value: 'fig',
    type: 'Fruit',
  },
  {
    id: '7',
    title: 'Grape',
    subtitle: 'Small round fruit',
    value: 'grape',
    type: 'Fruit',
  },
  {
    id: '8',
    title: 'Herbs',
    subtitle: 'Aromatic plants',
    value: 'herbs',
    type: 'Vegetable',
  },
];

/**
 * Default story - Basic multi-select with AddSelect.Body and AddSelect.Content
 */
export const Default = () => {
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
        itemCount={simpleItems.length}
      >
        <AddSelect.Content>
          {simpleItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * Single select story - Radio button selection
 */
export const SingleSelect = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set<string>();
    if (selected) {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  return (
    <AddSelect
      multi={false}
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="Select one item"
        globalSearchLabel="Search"
        itemCount={simpleItems.length}
      >
        <AddSelect.Content>
          {simpleItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * With columns - Using AddSelect.Column for organized layout
 */
export const WithColumns = () => {
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

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="Items"
        globalSearchLabel="Search"
        itemCount={simpleItems.length}
      >
        <AddSelect.Content>
          <AddSelect.Column
            title="Available items"
            showSelectAll
            itemCount={simpleItems.length}
          >
            {simpleItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * With search and filters - Column with search, sort, and filter capabilities
 */
export const WithSearchAndFilters = () => {
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

  const filteredItems = simpleItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body itemsLabel="Items" itemCount={filteredItems.length}>
        <AddSelect.Content>
          <AddSelect.Column
            title="Available items"
            searchPlaceholder="Search items"
            onSearch={setSearchTerm}
            itemCount={filteredItems.length}
            actionsSlot={
              <Button
                kind="ghost"
                size="md"
                hasIconOnly
                iconDescription="Sort"
                tooltipPosition="bottom"
              >
                <ArrowsVertical />
              </Button>
            }
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
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * With selection summary
 */
export const WithSelectionSummary = () => {
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

  const selectedItemsArray = simpleItems.filter((item) =>
    selectedItems.has(item.id)
  );

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="All items"
        globalSearchLabel="Search"
        itemCount={simpleItems.length}
      >
        <AddSelect.Content layout="horizontal">
          <AddSelect.Column
            title="Available items"
            itemCount={simpleItems.length}
          >
            {simpleItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.Content>
      </AddSelect.Body>
      <AddSelect.SelectionSummary
        title="Selected items"
        selectedItems={selectedItemsArray}
        showCount
      />
    </AddSelect>
  );
};

/**
 * With item summary panel - Detailed item information
 */
export const WithItemSummaryPanel = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [infoPanelItemId, setInfoPanelItemId] = useState<string | null>(null);

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const infoPanelItem = simpleItems.find((item) => item.id === infoPanelItemId);

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="All items"
        globalSearchLabel="Search"
        itemCount={simpleItems.length}
      >
        <AddSelect.Content layout="horizontal">
          <AddSelect.Column
            title="Available items"
            itemCount={simpleItems.length}
          >
            {simpleItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
                hasInfoPanel
                onInfoPanelClick={setInfoPanelItemId}
                infoPanelOpen={infoPanelItemId === item.id}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.Content>
      </AddSelect.Body>
      {infoPanelItem && (
        <AddSelect.ItemSummaryPanel
          title="Item details"
          item={infoPanelItem}
          onClose={() => setInfoPanelItemId(null)}
        />
      )}
    </AddSelect>
  );
};

/**
 * With custom search using headerContent
 *
 * This example demonstrates how to use the `headerContent` prop to add custom search functionality.
 * The user manages the search state and filtering logic.
 */
export const WithCustomSearch = () => {
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

  // User handles filtering logic
  const filteredItems = useMemo(() => {
    if (!searchTerm) {
      return itemsWithTypes;
    }
    return itemsWithTypes.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="Items"
        itemCount={filteredItems.length}
        headerContent={
          <div style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
            <Search
              size="lg"
              placeholder="Search items..."
              labelText="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm('')}
            />
          </div>
        }
      >
        <AddSelect.Content>
          {filteredItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * With search and sort
 *
 * This example shows how to combine search and sort functionality using `headerContent`.
 * Users can search items and sort them by different attributes.
 */
export const WithSearchAndSort = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'title' | 'id'>('title');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  // User handles all data processing
  const processedItems = useMemo(() => {
    let result = itemsWithTypes;

    // Apply search filter
    if (searchTerm) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sort
    result = [...result].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      const comparison = aVal.localeCompare(bVal);
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchTerm, sortBy, sortDirection]);

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="Items"
        itemCount={processedItems.length}
        headerContent={
          <div
            style={{
              padding: '1rem',
              borderBottom: '1px solid #e0e0e0',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ flex: 1 }}>
              <Search
                size="lg"
                placeholder="Search items..."
                labelText="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClear={() => setSearchTerm('')}
              />
            </div>
            <OverflowMenu
              renderIcon={ArrowsVertical}
              iconDescription="Sort options"
              aria-label="Sort options"
            >
              <OverflowMenuItem
                itemText="Title (A-Z)"
                onClick={() => {
                  setSortBy('title');
                  setSortDirection('asc');
                }}
              />
              <OverflowMenuItem
                itemText="Title (Z-A)"
                onClick={() => {
                  setSortBy('title');
                  setSortDirection('desc');
                }}
              />
              <OverflowMenuItem
                itemText="ID (Low-High)"
                onClick={() => {
                  setSortBy('id');
                  setSortDirection('asc');
                }}
              />
              <OverflowMenuItem
                itemText="ID (High-Low)"
                onClick={() => {
                  setSortBy('id');
                  setSortDirection('desc');
                }}
              />
            </OverflowMenu>
          </div>
        }
      >
        <AddSelect.Content>
          {processedItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * With search, filter and sort
 *
 * Complete example demonstrating search, filter, and sort functionality.
 * This shows the full power of the composable approach where users have complete control.
 */
export const WithSearchFilterAndSort = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'title' | 'id'>('title');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  // User handles all data processing
  const processedItems = useMemo(() => {
    let result = itemsWithTypes;

    // Apply search filter
    if (searchTerm) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (filterType !== 'all') {
      result = result.filter((item) => item.type === filterType);
    }

    // Apply sort
    result = [...result].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      const comparison = aVal.localeCompare(bVal);
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [searchTerm, filterType, sortBy, sortDirection]);

  const filterOptions = [
    { id: 'all', text: 'All types' },
    { id: 'Fruit', text: 'Fruits' },
    { id: 'Vegetable', text: 'Vegetables' },
  ];

  const hasActiveFilters = searchTerm || filterType !== 'all';

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="Items"
        itemCount={processedItems.length}
        headerContent={
          <div
            style={{
              padding: '1rem',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-end',
                marginBottom: hasActiveFilters ? '1rem' : 0,
              }}
            >
              <div style={{ flex: 1 }}>
                <Search
                  size="lg"
                  placeholder="Search items..."
                  labelText="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClear={() => setSearchTerm('')}
                />
              </div>
              <Dropdown
                id="filter-dropdown"
                titleText="Filter by type"
                label="Select type"
                items={filterOptions}
                itemToString={(item) => (item ? item.text : '')}
                selectedItem={
                  filterOptions.find((opt) => opt.id === filterType) ||
                  filterOptions[0]
                }
                onChange={({ selectedItem }) =>
                  setFilterType(selectedItem?.id || 'all')
                }
              />
              <OverflowMenu
                renderIcon={ArrowsVertical}
                iconDescription="Sort options"
                aria-label="Sort options"
              >
                <OverflowMenuItem
                  itemText="Title (A-Z)"
                  onClick={() => {
                    setSortBy('title');
                    setSortDirection('asc');
                  }}
                />
                <OverflowMenuItem
                  itemText="Title (Z-A)"
                  onClick={() => {
                    setSortBy('title');
                    setSortDirection('desc');
                  }}
                />
                <OverflowMenuItem
                  itemText="ID (Low-High)"
                  onClick={() => {
                    setSortBy('id');
                    setSortDirection('asc');
                  }}
                />
                <OverflowMenuItem
                  itemText="ID (High-Low)"
                  onClick={() => {
                    setSortBy('id');
                    setSortDirection('desc');
                  }}
                />
              </OverflowMenu>
            </div>
            {hasActiveFilters && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {searchTerm && (
                  <Button
                    kind="ghost"
                    size="sm"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear search: &quot;{searchTerm}&quot;
                  </Button>
                )}
                {filterType !== 'all' && (
                  <Button
                    kind="ghost"
                    size="sm"
                    onClick={() => setFilterType('all')}
                  >
                    Clear filter: {filterType}
                  </Button>
                )}
              </div>
            )}
          </div>
        }
      >
        <AddSelect.Content>
          {processedItems.length > 0 ? (
            processedItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={`${item.subtitle} • ${item.type}`}
                value={item.value}
              />
            ))
          ) : (
            <div
              style={{ padding: '2rem', textAlign: 'center', color: '#525252' }}
            >
              No items match your search and filter criteria
            </div>
          )}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * With default search and custom actions
 *
 * This example shows how to use the default search with custom filter/sort actions
 * using the `actionsSlot` prop. This is the simplest way to add filter/sort while
 * keeping the built-in search functionality.
 */
export const WithDefaultSearchAndActions = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'title' | 'id'>('title');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  // User handles filtering and sorting
  const processedItems = useMemo(() => {
    let result = itemsWithTypes;

    // Apply type filter
    if (filterType !== 'all') {
      result = result.filter((item) => item.type === filterType);
    }

    // Apply sort
    result = [...result].sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      const comparison = aVal.localeCompare(bVal);
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [filterType, sortBy, sortDirection]);

  const filterOptions = [
    { id: 'all', text: 'All types' },
    { id: 'Fruit', text: 'Fruits' },
    { id: 'Vegetable', text: 'Vegetables' },
  ];

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="Items"
        globalSearchLabel="Search"
        globalSearchPlaceholder="Search items..."
        itemCount={processedItems.length}
        actionsSlot={
          <>
            <Dropdown
              id="filter-dropdown-actions"
              titleText="Filter by type"
              label="Select type"
              items={filterOptions}
              itemToString={(item) => (item ? item.text : '')}
              selectedItem={
                filterOptions.find((opt) => opt.id === filterType) ||
                filterOptions[0]
              }
              onChange={({ selectedItem }) =>
                setFilterType(selectedItem?.id || 'all')
              }
            />
            <OverflowMenu
              renderIcon={ArrowsVertical}
              iconDescription="Sort options"
              aria-label="Sort options"
            >
              <OverflowMenuItem
                itemText="Title (A-Z)"
                onClick={() => {
                  setSortBy('title');
                  setSortDirection('asc');
                }}
              />
              <OverflowMenuItem
                itemText="Title (Z-A)"
                onClick={() => {
                  setSortBy('title');
                  setSortDirection('desc');
                }}
              />
            </OverflowMenu>
          </>
        }
      >
        <AddSelect.Content>
          {processedItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title}
              subtitle={`${item.subtitle} • ${item.type}`}
              value={item.value}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * With sub-header actions
 *
 * This example demonstrates the `subHeaderActions` prop which allows you to add
 * custom content or actions in the sub-header area after the breadcrumbs and item count.
 * This is useful for adding contextual actions like "Clear all", "Refresh", or status indicators.
 */
export const WithSubHeaderActions = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [items, setItems] = useState(simpleItems);

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleRefresh = () => {
    // Simulate refresh - in real app, this would fetch new data
    setItems([...simpleItems]);
  };

  const handleClearAll = () => {
    setSelectedItems(new Set());
  };

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="All items"
        itemCount={items.length}
        subHeaderActions={
          <>
            <Button kind="ghost" size="sm" onClick={handleRefresh}>
              Refresh
            </Button>
            <Button
              kind="ghost"
              size="sm"
              onClick={handleClearAll}
              disabled={selectedItems.size === 0}
            >
              Clear all ({selectedItems.size})
            </Button>
          </>
        }
      >
        <AddSelect.Content>
          {items.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

/**
 * Selection Summary with Header Actions
 *
 * This example demonstrates the `headerActions` prop which allows you to add
 * custom actions alongside the edit icon in the SelectionSummary header.
 */
export const SelectionSummaryWithHeaderActions = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'title' | 'id'>('title');

  const handleItemSelect = (itemId: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const selectedItemsArray = simpleItems.filter((item) =>
    selectedItems.has(item.id)
  );

  // Sort selected items
  const sortedSelectedItems = [...selectedItemsArray].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <AddSelect
      multi
      selectedItems={selectedItems}
      onItemSelect={handleItemSelect}
    >
      <AddSelect.Body
        itemsLabel="All items"
        globalSearchLabel="Search"
        itemCount={simpleItems.length}
      >
        <AddSelect.Content layout="horizontal">
          <AddSelect.Column
            title="Available items"
            itemCount={simpleItems.length}
          >
            {simpleItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.Content>
      </AddSelect.Body>
      <AddSelect.SelectionSummary
        title="Selected items"
        selectedItems={sortedSelectedItems}
        showCount
        showEditIcon
        onEdit={() => console.log('Edit clicked')}
        headerActions={
          <>
            <Button
              kind="ghost"
              size="sm"
              hasIconOnly
              iconDescription="Sort"
              tooltipPosition="bottom"
              onClick={() => setSortBy(sortBy === 'title' ? 'id' : 'title')}
            >
              <ArrowsVertical />
            </Button>
            <Button
              kind="ghost"
              size="sm"
              onClick={() => setSelectedItems(new Set())}
              disabled={selectedItems.size === 0}
            >
              Clear all
            </Button>
          </>
        }
      />
    </AddSelect>
  );
};

/**
 * Selection Summary with Custom Header
 *
 * This example demonstrates the `headerContent` prop which allows you to
 * completely replace the default header with custom content.
 */
export const SelectionSummaryWithCustomHeader = () => {
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

  const selectedItemsArray = simpleItems.filter((item) =>
    selectedItems.has(item.id)
  );

  const handleExport = () => {
    console.log('Exporting:', selectedItemsArray);
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
        itemCount={simpleItems.length}
      >
        <AddSelect.Content layout="horizontal">
          <AddSelect.Column
            title="Available items"
            itemCount={simpleItems.length}
          >
            {simpleItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.Content>
      </AddSelect.Body>
      <AddSelect.SelectionSummary
        selectedItems={selectedItemsArray}
        headerContent={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>
                My Custom Selection Header
              </h3>
              <p
                style={{
                  margin: '0.25rem 0 0',
                  fontSize: '0.875rem',
                  color: '#525252',
                }}
              >
                {selectedItems.size} item{selectedItems.size !== 1 ? 's' : ''}{' '}
                selected
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                size="sm"
                kind="tertiary"
                onClick={handleExport}
                disabled={selectedItems.size === 0}
              >
                Export
              </Button>
              <Button
                size="sm"
                kind="ghost"
                onClick={() => setSelectedItems(new Set())}
                disabled={selectedItems.size === 0}
              >
                Clear
              </Button>
            </div>
          </div>
        }
      />
    </AddSelect>
  );
};
