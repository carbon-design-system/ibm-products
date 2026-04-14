/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  ForwardedRef,
  useState,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddSelect } from '../../../../components/AddSelect/next';
import {
  AddSelectData,
  HierarchicalItem,
} from '@carbon/ibm-products-utilities';

const blockClass = `single-add-select-pattern`;

/**
 * SingleAddSelect Pattern - A pre-configured pattern for single selection with hierarchical navigation
 */

export interface SingleAddSelectProps {
  /**
   * Array of hierarchical items to display
   */
  items: HierarchicalItem[];
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
   * Currently selected item ID
   */
  selectedItemId?: string;
  /**
   * Callback when an item is selected
   */
  onItemSelect?: (itemId: string, value: string) => void;
  /**
   * Callback when navigating to children
   */
  onNavigate?: (itemId: string, title: string, parentId: string) => void;
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
   * Root breadcrumb title
   */
  rootBreadcrumbTitle?: string;
}

interface NavigationStackItem {
  items: HierarchicalItem[];
  parentId: string;
  parentTitle: string;
}

export const SingleAddSelect = forwardRef<HTMLDivElement, SingleAddSelectProps>(
  (
    {
      items,
      itemsLabel = 'Items',
      globalSearchLabel = 'Search',
      globalSearchPlaceholder = 'Search items',
      searchResultsTitle = 'Search results',
      selectedItemId,
      onItemSelect,
      onNavigate,
      className,
      noResultsTitle = 'No results found',
      noResultsDescription = 'Try adjusting your search',
      rootBreadcrumbTitle = 'Categories',
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    // Initialize data manager
    const dataManager = useMemo(() => new AddSelectData(), []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedId, setSelectedId] = useState(selectedItemId);
    const [filteredItems, setFilteredItems] = useState<HierarchicalItem[]>([]);
    const [currentItems, setCurrentItems] = useState<HierarchicalItem[]>([]);
    const [navigationStack, setNavigationStack] = useState<
      NavigationStackItem[]
    >([]);

    // Initialize data manager with items
    useEffect(() => {
      dataManager.setItems(items);
      const rootItems = dataManager.getItems();
      setFilteredItems(rootItems);
      setCurrentItems(rootItems);
    }, [items, dataManager]);

    // Update selected item when prop changes
    useEffect(() => {
      setSelectedId(selectedItemId);
      if (selectedItemId) {
        dataManager.setSelectedItems(selectedItemId, true);
      }
    }, [selectedItemId, dataManager]);

    // Handle item selection
    const handleItemSelect = (
      itemId: string,
      selected: boolean,
      value: string
    ) => {
      if (selected) {
        setSelectedId(itemId);
        // Use exclusive selection for single select
        dataManager.setSelectedItems(itemId, true);
        onItemSelect?.(itemId, value);
      } else {
        setSelectedId(undefined);
        dataManager.clearSelections();
      }
    };

    // Handle search
    const handleSearch = (term: string) => {
      setSearchTerm(term);

      if (term) {
        // Use the data manager's search functionality
        const results = dataManager.search(term, {
          caseSensitive: false,
          searchFields: ['title', 'value'],
        });
        setFilteredItems(results);
      } else {
        setFilteredItems(currentItems);
      }
    };

    // Handle navigation to children
    const handleNavigate = (
      itemId: string,
      title: string,
      parentId: string
    ) => {
      // Use the data manager to get children
      const children = dataManager.getItemChildren(itemId);

      if (children.length > 0) {
        // Save current state to navigation stack
        setNavigationStack((prev) => [
          ...prev,
          {
            items: currentItems,
            parentId: parentId || '',
            parentTitle: title,
          },
        ]);

        // Update current items to show children
        setCurrentItems(children);
        setFilteredItems(children);
        setSearchTerm('');
        setSelectedId(undefined);

        onNavigate?.(itemId, title, parentId);
      }
    };

    // Handle breadcrumb click
    const handleBreadcrumbClick = (index: number) => {
      // Navigate back to the clicked breadcrumb level
      const levelsToGoBack = navigationStack.length - index;

      if (levelsToGoBack > 0) {
        const newStack = navigationStack.slice(0, index);
        setNavigationStack(newStack);

        if (index === 0) {
          // Back to root
          const rootItems = dataManager.getItems();
          setCurrentItems(rootItems);
          setFilteredItems(rootItems);
        } else {
          // Back to a specific level
          const targetLevel = navigationStack[index - 1];
          setCurrentItems(targetLevel.items);
          setFilteredItems(targetLevel.items);
        }

        setSearchTerm('');
        setSelectedId(undefined);
      }
    };

    // Build breadcrumb path
    const breadcrumbPath = useMemo(() => {
      const path = [{ id: 'root', title: rootBreadcrumbTitle }];

      navigationStack.forEach((item) => {
        path.push({ id: item.parentId, title: item.parentTitle });
      });

      return path;
    }, [navigationStack, rootBreadcrumbTitle]);

    // Create selected items set
    const selectedItems = useMemo(() => {
      const set = new Set<string>();
      if (selectedId) {
        set.add(selectedId);
      }
      return set;
    }, [selectedId]);

    return (
      <AddSelect
        ref={ref}
        className={cx(blockClass, className)}
        multi={false}
        onItemSelect={handleItemSelect}
        onNavigate={handleNavigate}
        selectedItems={selectedItems}
        {...rest}
      >
        <AddSelect.Body
          itemsLabel={itemsLabel}
          globalSearchLabel={globalSearchLabel}
          globalSearchPlaceholder={globalSearchPlaceholder}
          searchResultsTitle={searchResultsTitle}
          itemCount={filteredItems.length}
          onSearch={handleSearch}
          path={breadcrumbPath}
          onBreadcrumbClick={handleBreadcrumbClick}
        >
          <AddSelect.List>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                // Use the data manager to check if item has children
                const hasChildren = dataManager.hasChildren(item.id);

                return (
                  <AddSelect.Row
                    key={item.id}
                    itemId={item.id}
                    title={item.title || ''}
                    subtitle={item.subtitle}
                    value={item.value || ''}
                    icon={item.icon}
                    meta={item.meta}
                    disabled={item.disabled}
                    hasChildren={hasChildren}
                  />
                );
              })
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

SingleAddSelect.propTypes = {
  className: PropTypes.string,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  /**@ts-ignore */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.shape({
        entries: PropTypes.array,
      }),
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
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  /**@ts-ignore */
  onItemSelect: PropTypes.func,
  /**@ts-ignore */
  onNavigate: PropTypes.func,
  rootBreadcrumbTitle: PropTypes.string,
  searchResultsTitle: PropTypes.string,
  selectedItemId: PropTypes.string,
};

SingleAddSelect.displayName = 'SingleAddSelect';
