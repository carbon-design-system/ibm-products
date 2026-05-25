/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { Dropdown, Tag } from '@carbon/react';
import { AddSelect } from '.';
import type { AddSelectItem } from '@carbon/ibm-products-primitives';
import styles from './_storybook-styles.scss?inline';
import mdx from './AddSelect.mdx';

const storyClass = 'add-select-next-stories';

interface SampleItem extends AddSelectItem {
  type: string;
}

export default {
  title: 'Preview/Add and select',
  component: AddSelect,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <div className={`${storyClass}__viewport`}>{Story()}</div>;
    },
  ],
  subcomponents: {
    'AddSelect.Body': AddSelect.Body,
    'AddSelect.Content': AddSelect.Content,
    'AddSelect.Column': AddSelect.Column,
    'AddSelect.Row': AddSelect.Row,
    'AddSelect.SelectionSummary': AddSelect.SelectionSummary,
    'AddSelect.SelectionSummaryItem': AddSelect.SelectionSummaryItem,
    'AddSelect.ItemPanel': AddSelect.ItemPanel,
  },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

// Sample data
const sampleItems: SampleItem[] = [
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
 * AddSelect.Body Story
 */
const BodyTemplate = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleItemSelect = (itemId, selected) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const filteredItems = useMemo(() => {
    let result = sampleItems;
    if (searchTerm && args.showSearch) {
      result = result.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterType !== 'all' && args.showFilter) {
      result = result.filter((item) => item.type === filterType);
    }
    return result;
  }, [searchTerm, filterType, args.showSearch, args.showFilter]);

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Body
        itemsLabel={args.itemsLabel}
        globalSearchLabel={args.globalSearchLabel}
        globalSearchPlaceholder={args.globalSearchPlaceholder}
        itemCount={filteredItems.length}
        onSearch={args.showSearch ? setSearchTerm : undefined}
        actionsSlot={
          args.showFilter ? (
            <Dropdown
              id="filter-dropdown"
              titleText=""
              label="Filter"
              items={[
                { id: 'all', text: 'All types' },
                { id: 'Fruit', text: 'Fruits' },
                { id: 'Vegetable', text: 'Vegetables' },
              ]}
              itemToString={(item) => (item ? item.text : '')}
              onChange={({ selectedItem }) =>
                setFilterType(selectedItem?.id || 'all')
              }
              size="sm"
            />
          ) : undefined
        }
      >
        <AddSelect.Content>
          {filteredItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title || ''}
              subtitle={item.subtitle}
              value={item.value || ''}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

export const AddSelectBody = {
  render: BodyTemplate,
  args: {
    itemsLabel: 'All items',
    globalSearchLabel: 'Search',
    globalSearchPlaceholder: 'Search items',
    showSearch: true,
    showFilter: false,
  },
  argTypes: {
    itemsLabel: {
      control: 'text',
      description: 'Label for the items section',
    },
    globalSearchLabel: {
      control: 'text',
      description: 'Label for the global search input',
    },
    globalSearchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for global search',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show global search input',
    },
    showFilter: {
      control: 'boolean',
      description: 'Show filter dropdown in actions slot',
    },
  },
};

/**
 * AddSelect.Content Story
 */
const ContentTemplate = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleItemSelect = (itemId, selected) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Body itemsLabel="Items" itemCount={sampleItems.length}>
        <AddSelect.Content layout={args.layout}>
          {sampleItems.slice(0, 4).map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title || ''}
              subtitle={item.subtitle}
              value={item.value || ''}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

export const AddSelectContent = {
  render: ContentTemplate,
  args: {
    layout: 'vertical',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction for content',
    },
  },
};

/**
 * AddSelect.Column Story
 */
const ColumnTemplate = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemSelect = (itemId, selected) => {
    const newSelected = new Set(selectedItems);
    if (args.multi) {
      if (selected) {
        newSelected.add(itemId);
      } else {
        newSelected.delete(itemId);
      }
    } else {
      newSelected.clear();
      if (selected) {
        newSelected.add(itemId);
      }
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(new Set(filteredItems.map((item) => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const filteredItems = useMemo(() => {
    if (!searchTerm) {
      return sampleItems;
    }
    return sampleItems.filter((item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const allSelected =
    filteredItems.length > 0 &&
    filteredItems.every((item) => selectedItems.has(item.id));

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Body itemsLabel="Items" itemCount={filteredItems.length}>
        <AddSelect.Content>
          <AddSelect.Column
            title={args.title}
            searchLabel={args.searchLabel}
            searchPlaceholder={args.searchPlaceholder}
            onSearch={args.showSearch ? setSearchTerm : undefined}
            hideSearch={!args.showSearch}
            showSelectAll={args.showSelectAll && args.multi}
            itemCount={filteredItems.length}
            allSelected={allSelected}
            onSelectAll={handleSelectAll}
            multi={args.multi}
          >
            {filteredItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title || ''}
                subtitle={item.subtitle}
                value={item.value || ''}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.Content>
      </AddSelect.Body>
    </AddSelect>
  );
};

export const AddSelectColumn = {
  render: ColumnTemplate,
  args: {
    title: 'Available items',
    searchLabel: 'Search',
    searchPlaceholder: 'Search items',
    showSearch: true,
    showSelectAll: true,
    multi: true,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Column title',
    },
    searchLabel: {
      control: 'text',
      description: 'Label for column search input',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder for column search',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input in column',
    },
    showSelectAll: {
      control: 'boolean',
      description: 'Show "Select All" checkbox (multi-select only)',
    },
    multi: {
      control: 'boolean',
      description: 'Enable multi-select mode',
    },
  },
};

/**
 * AddSelect.Row Story
 */
const RowTemplate = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [itemPanelOpen, setItemPanelOpen] = useState(false);
  const [selectedItemForPanel, setSelectedItemForPanel] =
    useState<SampleItem | null>(null);

  const handleItemSelect = (itemId, selected) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleItemPanelClick = (itemId) => {
    const item = sampleItems.find((i) => i.id === itemId);
    setSelectedItemForPanel(item || null);
    setItemPanelOpen(true);
  };

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Body itemsLabel="Items" itemCount={sampleItems.length}>
        <AddSelect.Content>
          {sampleItems.slice(0, 3).map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title || ''}
              subtitle={args.showSubtitle ? item.subtitle : undefined}
              value={item.value || ''}
              disabled={args.disabled && item.id === '2'}
              hasItemPanel={args.hasItemPanel}
              onItemPanelClick={handleItemPanelClick}
              itemPanelOpen={
                itemPanelOpen && selectedItemForPanel?.id === item.id
              }
            >
              {args.showTag && (
                <Tag type="blue" size="sm">
                  {item.type}
                </Tag>
              )}
            </AddSelect.Row>
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
      {itemPanelOpen && selectedItemForPanel && (
        <AddSelect.ItemPanel
          title="Item details"
          item={selectedItemForPanel}
          onClose={() => {
            setItemPanelOpen(false);
            setSelectedItemForPanel(null);
          }}
        />
      )}
    </AddSelect>
  );
};

export const AddSelectRow = {
  render: RowTemplate,
  args: {
    showSubtitle: true,
    showTag: false,
    hasItemPanel: false,
    disabled: false,
  },
  argTypes: {
    showSubtitle: {
      control: 'boolean',
      description: 'Show item subtitles',
    },
    showTag: {
      control: 'boolean',
      description: 'Show type tags on items',
    },
    hasItemPanel: {
      control: 'boolean',
      description: 'Show item panel view icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable second item (demo)',
    },
  },
};

/**
 * AddSelect.SelectionSummary Story
 */
const SelectionSummaryTemplate = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(['1', '3', '5'])
  );

  const handleItemSelect = (itemId, selected) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const selectedItemsArray = useMemo(() => {
    return Array.from(selectedItems)
      .map((id) => sampleItems.find((item) => item.id === id))
      .filter((item): item is SampleItem => item !== undefined);
  }, [selectedItems]);

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Body itemsLabel="Items" itemCount={sampleItems.length}>
        <AddSelect.Content>
          {sampleItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title || ''}
              subtitle={item.subtitle}
              value={item.value || ''}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
      <AddSelect.SelectionSummary
        title={args.title}
        selectedItems={selectedItemsArray}
        showCount={args.showCount}
        showEditIcon={args.showEditIcon}
        onEdit={() => console.log('Edit clicked')}
      />
    </AddSelect>
  );
};

export const AddSelectSelectionSummary = {
  render: SelectionSummaryTemplate,
  args: {
    title: 'Selected items',
    showCount: true,
    showEditIcon: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for selection summary',
    },
    showCount: {
      control: 'boolean',
      description: 'Show count badge in selection summary',
    },
    showEditIcon: {
      control: 'boolean',
      description: 'Show edit icon in selection summary',
    },
  },
};

/**
 * AddSelect.SelectionSummaryItem Story
 */
const SelectionSummaryItemTemplate = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(['1', '3'])
  );

  const handleItemSelect = (itemId, selected) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleRemove = (itemId: string) => {
    const newSelected = new Set(selectedItems);
    newSelected.delete(itemId);
    setSelectedItems(newSelected);
  };

  const selectedItemsArray = useMemo(() => {
    return Array.from(selectedItems)
      .map((id) => sampleItems.find((item) => item.id === id))
      .filter((item): item is SampleItem => item !== undefined);
  }, [selectedItems]);

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Body itemsLabel="Items" itemCount={sampleItems.length}>
        <AddSelect.Content>
          {sampleItems.map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title || ''}
              subtitle={item.subtitle}
              value={item.value || ''}
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
      <AddSelect.SelectionSummary
        title="Selected items"
        selectedItems={selectedItemsArray}
        showCount
      >
        {selectedItemsArray.map((item) => (
          <AddSelect.SelectionSummaryItem
            key={item.id}
            item={item}
            useAccordion={args.useAccordion}
            onRemove={args.showRemoveButton ? handleRemove : undefined}
            removeButtonLabel="Remove item"
          />
        ))}
      </AddSelect.SelectionSummary>
    </AddSelect>
  );
};

export const AddSelectSelectionSummaryItem = {
  render: SelectionSummaryItemTemplate,
  args: {
    useAccordion: false,
    showRemoveButton: true,
  },
  argTypes: {
    useAccordion: {
      control: 'boolean',
      description: 'Use accordion pattern for items',
    },
    showRemoveButton: {
      control: 'boolean',
      description: 'Show remove button on items',
    },
  },
};

/**
 * AddSelect.ItemPanel Story
 */
const ItemPanelTemplate = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [itemPanelOpen, setItemPanelOpen] = useState(true);
  const [selectedItemForPanel, setSelectedItemForPanel] = useState<SampleItem>(
    sampleItems[0]
  );

  const handleItemSelect = (itemId, selected) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleItemPanelClick = (itemId) => {
    const item = sampleItems.find((i) => i.id === itemId);
    setSelectedItemForPanel(item || sampleItems[0]);
    setItemPanelOpen(true);
  };

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Body itemsLabel="Items" itemCount={sampleItems.length}>
        <AddSelect.Content>
          {sampleItems.slice(0, 4).map((item) => (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title || ''}
              subtitle={item.subtitle}
              value={item.value || ''}
              hasItemPanel
              onItemPanelClick={handleItemPanelClick}
              itemPanelOpen={
                itemPanelOpen && selectedItemForPanel?.id === item.id
              }
            />
          ))}
        </AddSelect.Content>
      </AddSelect.Body>
      {itemPanelOpen && (
        <AddSelect.ItemPanel
          title={args.title}
          item={selectedItemForPanel}
          onClose={
            args.showCloseButton ? () => setItemPanelOpen(false) : undefined
          }
          closeIconDescription={args.closeIconDescription}
        />
      )}
    </AddSelect>
  );
};

export const AddSelectItemPanel = {
  render: ItemPanelTemplate,
  args: {
    title: 'Item details',
    showCloseButton: true,
    closeIconDescription: 'Close',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title for item details panel',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    closeIconDescription: {
      control: 'text',
      description: 'Close button aria-label',
    },
  },
};
