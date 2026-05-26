/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-nocheck
import React, { useMemo, useState } from 'react';
import { Button, Dropdown, Tag, Toggle } from '@carbon/react';
import { AddSelect } from '.';
import type { AddSelectItem } from '@carbon/ibm-products-primitives';
import styles from './_storybook-styles.scss?inline';
import mdx from './AddSelect.mdx';
import { Document } from '@carbon/react/icons';

const storyClass = 'add-select-next-stories';

type FilterOption = {
  id: string;
  text: string;
};

const filterOptions: FilterOption[] = [
  { id: 'all', text: 'All items' },
  { id: 'folder', text: 'Folders' },
  { id: 'file', text: 'Files' },
];

const sampleItems: AddSelectItem[] = [
  {
    id: '1',
    value: '1',
    title: 'item 1',
    subtitle: 'item 1 subtitle',
    itemDetails: (
      <div>
        <p style={{ fontWeight: 600 }}>HTML support</p>
        <p>Also supports nodes in the itemDetails attribute</p>
      </div>
    ),
  },
  {
    id: '2',
    value: '2',
    title: 'item 2',
    itemDetails: [
      {
        id: 'description',
        title: 'Description',
        value: 'Description text for item 2',
      },
      {
        id: 'secondary_category',
        title: 'Secondary category',
        value: 'Knowledge accelerator',
      },
    ],
  },
  {
    id: '3',
    value: '3',
    title: 'item 3',
    subtitle: 'item 3 subtitle',
  },
];

const hierarchicalItems: AddSelectItem[] = [
  {
    id: '1',
    value: 'folder 1',
    title: 'folder 1',
    children: {
      entries: [
        {
          id: '1-1',
          value: 'file1.pdf',
          title: 'file1.pdf',
          fileType: 'pdf',
          size: '100',
          icon: (props) => <Document size={16} {...props} />,
          tag: 'business',
          children: {
            entries: [
              {
                id: '9000',
                value: '9000.html',
                title: '9000.html',
                fileType: 'html',
                size: '9000',
                icon: (props) => <Document size={16} {...props} />,
              },
            ],
          },
        },
        {
          id: '1-2',
          value: 'index.js',
          title: 'index.js',
          fileType: 'js',
          size: '200',
          icon: (props) => <Document size={16} {...props} />,
        },
        {
          id: '1-3',
          value: 'sitemap.xml',
          title: 'sitemap.xml',
          fileType: 'xml',
          size: '10',
          icon: (props) => <Document size={16} {...props} />,
        },
      ],
    },
  },
  {
    id: '2',
    value: 'folder 2',
    title: 'folder 2',
    children: {
      entries: [
        {
          id: '7000',
          value: '7000.html',
          title: '7000.html',
          fileType: 'html',
          size: '7000',
          icon: (props) => <Document size={16} {...props} />,
        },
      ],
    },
  },
];

const summaryItems: AddSelectItem[] = sampleItems.slice(1, 4);

const PlaceholderShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        border: '1px dashed var(--cds-border-subtle)',
        padding: '1rem',
        background: 'var(--cds-layer)',
      }}
    >
      {children}
    </div>
  );
};

const PlaceholderRows = () => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '0.25rem',
      }}
    >
      {sampleItems.slice(0, 3).map((item) => (
        <div
          key={item.id}
          style={{
            padding: '0.25rem',
            background: 'var(--cds-layer-accent)',
          }}
        >
          <p style={{ margin: 0 }}>AddSelect.Row</p>
        </div>
      ))}
    </div>
  );
};

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

const AddSelectBodyStory = (args) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredItems = useMemo(() => {
    return sampleItems.filter((item) => {
      const matchesSearch = item.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || item.type === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType]);

  const actionsSlot = args.showActionsSlot ? (
    <Dropdown
      id="add-select-body-filter"
      titleText=""
      label="Filter items"
      items={filterOptions}
      itemToString={(item) => (item ? item.text : '')}
      onChange={({ selectedItem }) => setFilterType(selectedItem?.id || 'all')}
      size="lg"
    />
  ) : undefined;

  const subHeaderActions = args.showSubHeaderActions ? (
    <Toggle
      id="body-subheader-toggle"
      labelA="Off"
      labelB="On"
      labelText="Placeholder action"
      size="sm"
    />
  ) : undefined;

  return (
    <AddSelect selectedItems={new Set()} onItemSelect={() => {}}>
      <PlaceholderShell>
        <AddSelect.Body
          itemsLabel={args.itemsLabel}
          globalSearchLabel={args.globalSearchLabel}
          globalSearchPlaceholder={args.globalSearchPlaceholder}
          searchResultsTitle={args.searchResultsTitle}
          itemCount={filteredItems.length}
          path={args.showPath ? args.path : []}
          onSearch={setSearchTerm}
          onBreadcrumbClick={() => {}}
          actionsSlot={actionsSlot}
          subHeaderActions={subHeaderActions}
        >
          <PlaceholderRows />
        </AddSelect.Body>
      </PlaceholderShell>
    </AddSelect>
  );
};

export const AddSelectBody = {
  name: 'AddSelect.Body',
  render: AddSelectBodyStory,
  args: {
    itemsLabel: 'All items',
    globalSearchLabel: 'Search items',
    globalSearchPlaceholder: 'Search by name',
    searchResultsTitle: 'Search results',
    itemCount: 3,
    showActionsSlot: true,
    showSubHeaderActions: false,
    showPath: true,
    path: [
      { id: 'root', title: 'Category' },
      { id: 'folders', title: 'Folders' },
      { id: 'files', title: 'Files' },
    ],
  },
  argTypes: {
    itemsLabel: {
      control: 'text',
      description: 'Label shown when breadcrumbs are not used',
    },
    globalSearchLabel: {
      control: 'text',
      description: 'Accessible label for the global search input',
    },
    globalSearchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the global search input',
    },
    searchResultsTitle: {
      control: 'text',
      description: 'Title shown when search returns filtered results',
    },
    itemCount: {
      control: 'number',
      description: 'Item count for display in tag badge',
    },
    showActionsSlot: {
      control: 'boolean',
      description: 'Toggle example content for the actionsSlot prop',
      table: { category: 'Story controls' },
    },
    showSubHeaderActions: {
      control: 'boolean',
      description: 'Toggle example content for the subHeaderActions prop',
      table: { category: 'Story controls' },
    },
    showPath: {
      control: 'boolean',
      description: 'Toggle breadcrumb path usage',
      table: { category: 'Story controls' },
    },
    path: {
      control: 'object',
      description:
        'Breadcrumb entries used for hierarchical navigation. Array of objects with id and title properties.',
    },
    children: {
      control: false,
      description: 'Child components (typically AddSelect.Content)',
      table: { disable: true },
    },
    headerContent: {
      control: false,
      description: 'Custom header content (slot) - replaces entire header',
      table: { disable: true },
    },
    actionsSlot: {
      control: false,
      description:
        'Actions slot - adds custom actions (filter/sort) next to default search',
      table: { disable: true },
    },
    subHeaderActions: {
      control: false,
      description:
        'Sub-header actions - custom content/actions rendered after breadcrumbs and item count',
      table: { disable: true },
    },
    onSearch: {
      control: false,
      description:
        'Callback when search term changes. Signature: (searchTerm: string) => void',
      table: { disable: true },
    },
    onBreadcrumbClick: {
      control: false,
      description:
        'Callback when breadcrumb is clicked. Signature: (index: number) => void',
      table: { disable: true },
    },
    searchProps: {
      control: false,
      description: 'Additional props to pass to the Search component',
      table: { disable: true },
    },
    tagProps: {
      control: false,
      description:
        'Additional props to pass to the Tag component (for item count)',
      table: { disable: true },
    },
    breadcrumbProps: {
      control: false,
      description: 'Additional props to pass to the Breadcrumb component',
      table: { disable: true },
    },
    breadcrumbItemProps: {
      control: false,
      description: 'Additional props to pass to BreadcrumbItem components',
      table: { disable: true },
    },
    linkProps: {
      control: false,
      description: 'Additional props to pass to Link components in breadcrumbs',
      table: { disable: true },
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name',
      table: { disable: true },
    },
  },
};

const AddSelectColumnStory = (args) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    new Set(['1', '4'])
  );

  const filteredItems = useMemo(() => {
    return sampleItems.filter((item) => {
      const matchesSearch = item.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'all' || item.type === filterType;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType]);

  const handleItemSelect = (itemId, selected) => {
    const nextSelection = args.multi
      ? new Set(selectedItems)
      : new Set<string>();

    if (selected) {
      nextSelection.add(itemId);
    } else {
      nextSelection.delete(itemId);
    }

    setSelectedItems(nextSelection);
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(new Set(filteredItems.map((item) => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const allSelected =
    filteredItems.length > 0 &&
    filteredItems.every((item) => selectedItems.has(item.id));

  const actionsSlot = args.showActionsSlot ? (
    <Dropdown
      id="add-select-column-filter"
      titleText=""
      label="Filter items"
      items={filterOptions}
      itemToString={(item) => (item ? item.text : '')}
      onChange={({ selectedItem }) => setFilterType(selectedItem?.id || 'all')}
      size="md"
    />
  ) : undefined;

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <div
        style={{
          width: '360px',
          border: '1px dashed var(--cds-border-subtle)',
          padding: '1rem',
          background: 'var(--cds-layer)',
        }}
      >
        <AddSelect.Content>
          <AddSelect.Column
            title={args.title}
            searchLabel={args.searchLabel}
            searchPlaceholder={args.searchPlaceholder}
            onSearch={setSearchTerm}
            hideSearch={!args.showSearch}
            actionsSlot={actionsSlot}
            multi={args.multi}
            showSelectAll={args.showSelectAll}
            itemCount={filteredItems.length}
            allSelected={allSelected}
            onSelectAll={handleSelectAll}
            onNavigate={args.enableNavigation ? () => {} : undefined}
          >
            {filteredItems.map((item) => (
              <AddSelect.Row
                key={item.id}
                itemId={item.id}
                title={item.title || ''}
                subtitle={item.subtitle}
                value={item.value || ''}
                hasChildren={args.enableNavigation && item.id === '1'}
              />
            ))}
          </AddSelect.Column>
        </AddSelect.Content>
      </div>
    </AddSelect>
  );
};

export const AddSelectColumn = {
  name: 'AddSelect.Column',
  render: AddSelectColumnStory,
  args: {
    title: 'Available items',
    searchLabel: 'Search within column',
    searchPlaceholder: 'Search items',
    showSearch: true,
    showActionsSlot: false,
    multi: true,
    showSelectAll: true,
    enableNavigation: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Header title for the column',
    },
    searchLabel: {
      control: 'text',
      description: 'Accessible label for the column search input',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Placeholder text for the column search input',
    },
    showSearch: {
      control: 'boolean',
      description: 'Toggle the hideSearch behavior',
      table: { category: 'Story controls' },
    },
    showActionsSlot: {
      control: 'boolean',
      description: 'Toggle example content for the actionsSlot prop',
      table: { category: 'Story controls' },
    },
    multi: {
      control: 'boolean',
      description: 'Switch between checkbox and radio row selection',
    },
    showSelectAll: {
      control: 'boolean',
      description: 'Show the Select all checkbox when multi is enabled',
    },
    enableNavigation: {
      control: 'boolean',
      description: 'Show how the column can pass navigation callbacks to rows',
      table: { category: 'Story controls' },
    },
    children: { table: { disable: true } },
    onSearch: { table: { disable: true } },
    actionsSlot: { table: { disable: true } },
    hideSearch: { table: { disable: true } },
    itemCount: { table: { disable: true } },
    allSelected: { table: { disable: true } },
    onSelectAll: { table: { disable: true } },
    onNavigate: { table: { disable: true } },
    className: { table: { disable: true } },
    searchProps: { table: { disable: true } },
    tagProps: { table: { disable: true } },
    selectAllCheckboxProps: { table: { disable: true } },
  },
};

const AddSelectRowStory = (args) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(
    args.selected ? new Set(['1']) : new Set()
  );
  const [itemPanelOpen, setItemPanelOpen] = useState(args.itemPanelOpen);

  const handleItemSelect = (itemId, selected) => {
    const nextSelection = args.multi
      ? new Set(selectedItems)
      : new Set<string>();

    if (selected) {
      nextSelection.add(itemId);
    } else {
      nextSelection.delete(itemId);
    }

    setSelectedItems(nextSelection);
  };

  return (
    <AddSelect selectedItems={selectedItems} onItemSelect={handleItemSelect}>
      <AddSelect.Content>
        <AddSelect.Row
          itemId="1"
          title="folder 1"
          subtitle={args.showSubtitle ? '3 files' : undefined}
          value="folder 1"
          selected={args.selected}
          disabled={args.disabled}
          hasChildren={args.hasChildren}
          hasItemPanel={args.hasItemPanel}
          onItemPanelClick={() => setItemPanelOpen(true)}
          itemPanelOpen={args.hasItemPanel && itemPanelOpen}
        >
          {args.showTag ? (
            <Tag type="blue" size="sm">
              Folder
            </Tag>
          ) : null}
        </AddSelect.Row>
      </AddSelect.Content>
    </AddSelect>
  );
};

export const AddSelectRow = {
  name: 'AddSelect.Row',
  render: AddSelectRowStory,
  args: {
    multi: true,
    selected: true,
    showSubtitle: true,
    showTag: true,
    hasChildren: false,
    hasItemPanel: false,
    itemPanelOpen: false,
    disabled: false,
  },
  argTypes: {
    multi: {
      control: 'boolean',
      description:
        'Toggle row rendering between checkbox and radio button mode',
      table: { category: 'Story controls' },
    },
    showSubtitle: {
      control: 'boolean',
      description: 'Demonstrate the optional subtitle prop',
      table: { category: 'Story controls' },
    },
    showTag: {
      control: 'boolean',
      description: 'Render custom row children content',
      table: { category: 'Story controls' },
    },
    hasChildren: {
      control: 'boolean',
      description: 'Show the navigation indicator for hierarchical lists',
    },
    hasItemPanel: {
      control: 'boolean',
      description: 'Show the item details icon button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the example row',
    },
    itemId: {
      control: 'text',
      description: 'Unique identifier for the item (required)',
      table: { disable: true },
    },
    title: {
      control: 'text',
      description: 'Item title (required)',
      table: { disable: true },
    },
    subtitle: {
      control: 'text',
      description: 'Item subtitle (optional)',
      table: { disable: true },
    },
    value: {
      control: 'text',
      description: 'Item value (required)',
      table: { disable: true },
    },
    selected: {
      control: 'boolean',
      description: 'Set the row selection state',
      table: { category: 'Story controls' },
    },
    parentId: {
      control: 'text',
      description: 'Parent ID for hierarchical navigation',
      table: { disable: true },
    },
    icon: {
      control: false,
      description: 'Optional icon slot (ReactNode)',
      table: { disable: true },
    },
    children: {
      control: false,
      description:
        'Custom content to render after the title/subtitle section (badges, tags, metadata)',
      table: { disable: true },
    },
    onItemPanelClick: {
      control: false,
      description:
        'Callback when item panel view icon is clicked. Signature: (itemId: string) => void',
      table: { disable: true },
    },
    itemPanelIconDescription: {
      control: 'text',
      description: 'Description for the item panel icon button',
      table: { disable: true },
    },
    itemPanelOpen: {
      control: 'boolean',
      description: 'Whether the item panel is currently open for this item',
      table: { category: 'Story controls' },
    },
    className: { table: { disable: true } },
    checkboxProps: { table: { disable: true } },
    radioButtonProps: { table: { disable: true } },
    itemPanelIconButtonProps: { table: { disable: true } },
  },
};

const AddSelectSelectionSummaryStory = (args) => {
  const selectedItemsArray = summaryItems;

  return (
    <div
      style={{
        width: '256px',
        border: '1px dashed var(--cds-border-subtle)',
        padding: '1rem',
        background: 'var(--cds-layer)',
      }}
    >
      <AddSelect.SelectionSummary
        title={args.title}
        selectedItems={selectedItemsArray}
        showCount={args.showCount}
        showEditIcon={args.showEditIcon}
        onEdit={args.showEditIcon ? () => {} : undefined}
        emptyState={args.showEmptyState ? <p>No selected items</p> : undefined}
        headerActions={
          args.showHeaderActions ? (
            <Button kind="ghost" size="sm">
              Placeholder action
            </Button>
          ) : undefined
        }
      />
    </div>
  );
};

export const AddSelectSelectionSummary = {
  name: 'AddSelect.SelectionSummary',
  render: AddSelectSelectionSummaryStory,
  args: {
    title: 'Selected items',
    showCount: true,
    showEditIcon: true,
    showHeaderActions: false,
    showEmptyState: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Heading displayed above the selection summary list',
    },
    showCount: {
      control: 'boolean',
      description: 'Display a count badge for selected items',
    },
    showEditIcon: {
      control: 'boolean',
      description: 'Show the edit icon button when onEdit is provided',
    },
    showHeaderActions: {
      control: 'boolean',
      description: 'Toggle example content for the headerActions prop',
      table: { category: 'Story controls' },
    },
    showEmptyState: {
      control: 'boolean',
      description: 'Show the emptyState slot usage',
      table: { category: 'Story controls' },
    },
    selectedItems: {
      control: false,
      description: 'Array of selected items (AddSelectItem[])',
      table: { disable: true },
    },
    children: {
      control: false,
      description: 'Custom content or SelectionSummaryItem components',
      table: { disable: true },
    },
    emptyState: {
      control: false,
      description: 'Custom empty state component',
      table: { disable: true },
    },
    onEdit: {
      control: false,
      description: 'Edit icon click handler. Signature: () => void',
      table: { disable: true },
    },
    editIconDescription: {
      control: 'text',
      description: 'Edit icon aria-label',
      table: { disable: true },
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name',
      table: { disable: true },
    },
    renderItem: {
      control: false,
      description:
        'Custom item renderer. Signature: (item: AddSelectItem) => ReactNode',
      table: { disable: true },
    },
    headerContent: {
      control: false,
      description:
        'Custom header content (slot) - replaces entire header section',
      table: { disable: true },
    },
    headerActions: {
      control: false,
      description:
        'Header actions slot - adds custom actions alongside the edit icon',
      table: { disable: true },
    },
    tagProps: {
      control: false,
      description: 'Additional props to pass to the Tag component',
      table: { disable: true },
    },
    editIconButtonProps: {
      control: false,
      description: 'Additional props to pass to the edit IconButton',
      table: { disable: true },
    },
  },
};

const AddSelectSelectionSummaryItemStory = (args) => {
  const [visible, setVisible] = useState(true);

  const item = {
    ...summaryItems[0],
    subtitle: args.showSubtitle ? summaryItems[0].subtitle : undefined,
  };

  return (
    <div
      style={{
        width: '256px',
        display: 'grid',
        gap: '0.75rem',
        border: '1px dashed var(--cds-border-subtle)',
        padding: '1rem',
        background: 'var(--cds-layer)',
      }}
    >
      {visible ? (
        <AddSelect.SelectionSummaryItem
          item={item}
          useAccordion={args.useAccordion}
          onRemove={args.showRemoveButton ? () => setVisible(false) : undefined}
          removeButtonLabel={args.removeButtonLabel}
          renderTitle={
            args.useCustomTitle
              ? (currentItem) => (
                  <div>
                    <p style={{ margin: 0, fontWeight: 600 }}>
                      {currentItem.title}
                    </p>
                    <p style={{ margin: '0.25rem 0 0' }}>
                      Custom title renderer
                    </p>
                  </div>
                )
              : undefined
          }
          renderContent={
            args.useCustomContent
              ? (currentItem) => (
                  <div>
                    <p style={{ margin: 0 }}>
                      Custom content for {currentItem.title}
                    </p>
                  </div>
                )
              : undefined
          }
        />
      ) : (
        <p style={{ margin: 0 }}>Item removed in story preview.</p>
      )}
    </div>
  );
};

export const AddSelectSelectionSummaryItem = {
  name: 'AddSelect.SelectionSummaryItem',
  render: AddSelectSelectionSummaryItemStory,
  args: {
    useAccordion: false,
    showSubtitle: true,
    showRemoveButton: true,
    removeButtonLabel: 'Remove item',
    useCustomTitle: false,
    useCustomContent: false,
  },
  argTypes: {
    useAccordion: {
      control: 'boolean',
      description: 'Render the item with Carbon Accordion markup',
    },
    showSubtitle: {
      control: 'boolean',
      description: 'Toggle the item subtitle content',
      table: { category: 'Story controls' },
    },
    showRemoveButton: {
      control: 'boolean',
      description: 'Toggle the remove action button',
      table: { category: 'Story controls' },
    },
    removeButtonLabel: {
      control: 'text',
      description: 'Accessible label for the remove icon button',
    },
    useCustomTitle: {
      control: 'boolean',
      description: 'Demonstrate renderTitle in accordion mode',
      table: { category: 'Story controls' },
    },
    useCustomContent: {
      control: 'boolean',
      description: 'Demonstrate renderContent in accordion mode',
      table: { category: 'Story controls' },
    },
    item: { table: { disable: true } },
    renderTitle: { table: { disable: true } },
    renderContent: { table: { disable: true } },
    renderTemplate: { table: { disable: true } },
    onRemove: { table: { disable: true } },
    className: { table: { disable: true } },
    accordionProps: { table: { disable: true } },
    accordionItemProps: { table: { disable: true } },
    removeIconButtonProps: { table: { disable: true } },
  },
};

const AddSelectItemPanelStory = (args) => {
  const panelItem = sampleItems[0];

  return (
    <div
      style={{
        width: '256px',
        border: '1px dashed var(--cds-border-subtle)',
        padding: '1rem',
        background: 'var(--cds-layer)',
      }}
    >
      <AddSelect.ItemPanel
        title={args.title}
        item={
          args.useArrayData
            ? [
                { id: 'title', title: 'Title', value: panelItem.title || '' },
                {
                  id: 'subtitle',
                  title: 'Subtitle',
                  value: panelItem.subtitle || '',
                },
                {
                  id: 'region',
                  title: 'Region',
                  value: panelItem.region || '',
                },
              ]
            : panelItem
        }
        onClose={args.showCloseButton ? () => {} : undefined}
        closeIconDescription={args.closeIconDescription}
        renderContent={
          args.useCustomRender
            ? (item) => (
                <div>
                  <p style={{ margin: 0, fontWeight: 600 }}>{item.title}</p>
                  <p style={{ margin: '0.25rem 0 0' }}>
                    Custom rendered details for {item.value}
                  </p>
                </div>
              )
            : undefined
        }
      />
    </div>
  );
};

export const AddSelectItemPanel = {
  name: 'AddSelect.ItemPanel',
  render: AddSelectItemPanelStory,
  args: {
    title: 'Item details',
    showCloseButton: true,
    closeIconDescription: 'Close item details',
    useArrayData: false,
    useCustomRender: false,
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title',
    },
    item: {
      control: false,
      description:
        'Item data, array of entries, or custom content (AddSelectItem | ItemDetailEntry[] | ReactNode)',
      table: { disable: true },
    },
    onClose: {
      control: false,
      description: 'Close button handler. Signature: () => void',
      table: { disable: true },
    },
    closeIconDescription: {
      control: 'text',
      description: 'Close button aria-label',
    },
    children: {
      control: false,
      description: 'Custom content (alternative to item prop)',
      table: { disable: true },
    },
    renderContent: {
      control: false,
      description:
        'Custom content renderer. Signature: (item: AddSelectItem) => ReactNode',
      table: { disable: true },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Toggle the close button by passing onClose',
      table: { category: 'Story controls' },
    },
    useArrayData: {
      control: 'boolean',
      description: 'Use ItemDetailEntry[] as the item prop',
      table: { category: 'Story controls' },
    },
    useCustomRender: {
      control: 'boolean',
      description:
        'Demonstrate custom content rendering for AddSelectItem data',
      table: { category: 'Story controls' },
    },
    className: {
      control: 'text',
      description: 'Optional CSS class name',
      table: { disable: true },
    },
    closeIconButtonProps: {
      control: false,
      description: 'Additional props to pass to the close IconButton',
      table: { disable: true },
    },
  },
};

// Made with Bob
