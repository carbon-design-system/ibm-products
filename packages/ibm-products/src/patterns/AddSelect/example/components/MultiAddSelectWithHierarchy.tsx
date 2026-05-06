/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  ForwardedRef,
  ReactNode,
  useState,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddSelect } from '../../../../components/AddSelect/next';
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';
import { AddSelectContext } from '../../../../components/AddSelect/next/context';

const blockClass = `multi-add-select-hierarchy-pattern`;

/**
 * MultiAddSelectWithHierarchy Pattern - A pre-configured pattern for multi-selection with hierarchy
 * Uses recursive column generation to display hierarchy levels side-by-side
 */

export interface MultiAddSelectWithHierarchyProps {
  /**
   * Array of items to display
   */
  items: AddSelectItem[];
  /**
   * Label for items section
   */
  itemsLabel?: string;
  /**
   * Global search label
   */
  globalSearchLabel?: string;
  /**
   * Global search placeholder
   */
  globalSearchPlaceholder?: string;
  /**
   * Search results title
   */
  searchResultsTitle?: string;
  /**
   * Currently selected item IDs
   */
  selectedItemIds?: string[];
  /**
   * Callback when items are selected/deselected
   */
  onItemsSelect?: (itemIds: string[], values: string[]) => void;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * No results title
   */
  noResultsTitle?: string;
  /**
   * No results description
   */
  noResultsDescription?: string;
  /**
   * Callback when info icon is clicked
   */
  onShowInfo?: (itemId: string) => void;
  /**
   * Callback when navigation occurs
   */
  onNavigate?: (itemId: string, title: string) => void;
  /**
   * Callback when breadcrumb is clicked
   */
  onBreadcrumbClick?: (index: number) => void;
  /**
   * Current navigation path
   */
  navigationPath?: Array<{ id: string; title: string }>;
  /**
   * Placeholder for column search
   */
  columnSearchPlaceholder?: string;
  /**
   * Column title
   */
  columnTitle?: string;
}

/**
 * Recursive Column Component
 * Automatically generates columns side-by-side as user navigates hierarchy
 */
interface ColumnProps {
  items: AddSelectItem[];
  onShowInfo?: (itemId: string) => void;
  columnSearchPlaceholder?: string;
  columnTitle?: string;
  level: number;
  dataManager: AddSelectData;
}

const RecursiveColumn: React.FC<ColumnProps> = ({
  items,
  onShowInfo,
  columnSearchPlaceholder = 'Find',
  columnTitle,
  level,
  dataManager,
}) => {
  const [activeParentId, setActiveParentId] = useState<string | null>(null);
  const [columnSearchTerm, setColumnSearchTerm] = useState('');
  const parentContext = useContext(AddSelectContext);

  // Filter items based on column search
  const filteredItems = useMemo(() => {
    if (!columnSearchTerm) {
      return items;
    }
    return items.filter((item) => {
      const titleMatch = item.title
        ?.toLowerCase()
        .includes(columnSearchTerm.toLowerCase());
      const valueMatch = item.value
        ?.toLowerCase()
        .includes(columnSearchTerm.toLowerCase());
      return titleMatch || valueMatch;
    });
  }, [items, columnSearchTerm]);

  // Get children of active parent
  const activeParentChildren = useMemo(() => {
    if (!activeParentId) return null;
    const parent = items.find((item) => item.id === activeParentId);
    return parent?.children?.entries || null;
  }, [activeParentId, items]);

  const handleColumnSearch = (term: string) => {
    setColumnSearchTerm(term);
  };

  // Create a custom navigation handler for this column
  const handleNavigate = (itemId: string, title: string, parentId: string) => {
    setActiveParentId(itemId);
  };

  const title = columnTitle || `Level ${level}`;

  // Provide custom context with this column's navigation handler
  const columnContext = {
    ...parentContext,
    onNavigate: handleNavigate,
  };

  return (
    <AddSelectContext.Provider value={columnContext}>
      <AddSelect.Column
        title={title}
        showSearch={true}
        searchPlaceholder={columnSearchPlaceholder}
        onSearchChange={handleColumnSearch}
        itemCount={filteredItems.length}
        multi={true}
      >
        {filteredItems.map((item) => {
          const hasChildren =
            item.children?.entries && item.children.entries.length > 0;
          return (
            <AddSelect.Row
              key={item.id}
              itemId={item.id}
              title={item.title || ''}
              subtitle={item.subtitle}
              value={item.value || ''}
              icon={item.icon}
              disabled={item.disabled}
              hasChildren={hasChildren}
              hasInfoPanel={!!item.meta}
              onInfoPanelClick={onShowInfo}
            />
          );
        })}
      </AddSelect.Column>

      {/* Recursively render next column if there are children */}
      {activeParentChildren && activeParentChildren.length > 0 && (
        <RecursiveColumn
          key={activeParentId}
          items={activeParentChildren}
          onShowInfo={onShowInfo}
          columnSearchPlaceholder={columnSearchPlaceholder}
          level={level + 1}
          dataManager={dataManager}
        />
      )}
    </AddSelectContext.Provider>
  );
};

export const MultiAddSelectWithHierarchy = forwardRef<
  HTMLDivElement,
  MultiAddSelectWithHierarchyProps
>(
  (
    {
      items,
      itemsLabel = 'Items',
      globalSearchLabel = 'Search',
      globalSearchPlaceholder = 'Search items',
      searchResultsTitle = 'Search results',
      selectedItemIds = [],
      onItemsSelect,
      onShowInfo,
      onNavigate,
      onBreadcrumbClick,
      navigationPath = [],
      className,
      noResultsTitle = 'No results found',
      noResultsDescription = 'Try adjusting your search',
      columnSearchPlaceholder = 'Find',
      columnTitle,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    // Initialize data manager
    const dataManager = useMemo(() => new AddSelectData(), []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIds, setSelectedIds] = useState<Set<string>>(
      new Set(selectedItemIds)
    );
    const [currentItems, setCurrentItems] = useState<AddSelectItem[]>([]);

    // Initialize data manager with items
    useEffect(() => {
      dataManager.setItems(items);
      setCurrentItems(items);
    }, [items, dataManager]);

    // Update selected items when prop changes
    useEffect(() => {
      setSelectedIds(new Set(selectedItemIds));
      selectedItemIds.forEach((id) => {
        dataManager.setSelectedItems(id, true);
      });
    }, [selectedItemIds, dataManager]);

    // Handle item selection
    const handleItemSelect = (
      itemId: string,
      selected: boolean,
      value: string
    ) => {
      const newSelectedIds = new Set(selectedIds);

      if (selected) {
        newSelectedIds.add(itemId);
        dataManager.setSelectedItems(itemId, true);
      } else {
        newSelectedIds.delete(itemId);
        dataManager.setSelectedItems(itemId, false);
      }

      setSelectedIds(newSelectedIds);

      // Get all selected items with their values
      const selectedIdsArray = Array.from(newSelectedIds);
      const selectedValues = selectedIdsArray.map((id) => {
        const item = dataManager.getItem(id);
        return item?.value || '';
      });

      onItemsSelect?.(selectedIdsArray, selectedValues);
    };

    // Handle global search
    const handleGlobalSearch = (term: string) => {
      setSearchTerm(term);

      if (term) {
        // Use the data manager's search functionality
        const results = dataManager.search(term, {
          caseSensitive: false,
          searchFields: ['title', 'value', 'subtitle'],
        });
        setCurrentItems(results);
      } else {
        // Reset to root items
        setCurrentItems(items);
      }
    };

    return (
      <AddSelect
        ref={ref}
        className={cx(blockClass, className)}
        multi={true}
        onItemSelect={handleItemSelect}
        onNavigate={onNavigate}
        selectedItems={selectedIds}
        {...rest}
      >
        <AddSelect.Body
          itemsLabel={itemsLabel}
          globalSearchLabel={globalSearchLabel}
          globalSearchPlaceholder={globalSearchPlaceholder}
          searchResultsTitle={searchResultsTitle}
          itemCount={currentItems.length}
          onSearch={handleGlobalSearch}
        >
          {navigationPath.length > 0 && (
            <AddSelect.Breadcrumbs
              path={navigationPath}
              onBreadcrumbClick={onBreadcrumbClick}
            />
          )}
          <AddSelect.List layout="horizontal">
            {currentItems.length > 0 ? (
              <RecursiveColumn
                items={currentItems}
                onShowInfo={onShowInfo}
                columnSearchPlaceholder={columnSearchPlaceholder}
                columnTitle={columnTitle}
                level={1}
                dataManager={dataManager}
              />
            ) : (
              <div className={`${blockClass}__no-results`}>
                <h4>{noResultsTitle}</h4>
                <p>{noResultsDescription}</p>
              </div>
            )}
          </AddSelect.List>
        </AddSelect.Body>
      </AddSelect>
    );
  }
);

MultiAddSelectWithHierarchy.propTypes = {
  className: PropTypes.string,
  columnSearchPlaceholder: PropTypes.string,
  columnTitle: PropTypes.string,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  /**@ts-ignore */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      icon: PropTypes.node,
      id: PropTypes.string.isRequired,
      meta: PropTypes.node,
      subtitle: PropTypes.string,
      title: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  itemsLabel: PropTypes.string,
  /**@ts-ignore */
  navigationPath: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  /**@ts-ignore */
  onBreadcrumbClick: PropTypes.func,
  /**@ts-ignore */
  onItemsSelect: PropTypes.func,
  /**@ts-ignore */
  onNavigate: PropTypes.func,
  /**@ts-ignore */
  onShowInfo: PropTypes.func,
  searchResultsTitle: PropTypes.string,
  /**@ts-ignore */
  selectedItemIds: PropTypes.arrayOf(PropTypes.string),
};

MultiAddSelectWithHierarchy.displayName = 'MultiAddSelectWithHierarchy';

// Made with Bob
