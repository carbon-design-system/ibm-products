/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, ForwardedRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  AddSelect,
  NormalizedItem,
  filterItems,
  normalizeItems,
} from '../../../../components/AddSelect/next';

const blockClass = `single-add-select-pattern`;

/**
 * SingleAddSelect Pattern - A pre-configured pattern for single selection
 */

export interface SingleAddSelectItem {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  meta?: React.ReactNode;
  disabled?: boolean;
}

export interface SingleAddSelectProps {
  /**
   * Array of items to display
   */
  items: SingleAddSelectItem[];
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
      className,
      noResultsTitle = 'No results found',
      noResultsDescription = 'Try adjusting your search',
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedId, setSelectedId] = useState(selectedItemId);

    // Normalize items
    const normalizedItems = useMemo(
      () => normalizeItems(items as any[]),
      [items]
    );

    // Filter items based on search
    const filteredItems = useMemo(() => {
      if (!searchTerm) {
        return normalizedItems;
      }
      return filterItems(normalizedItems, searchTerm);
    }, [normalizedItems, searchTerm]);

    // Handle item selection
    const handleItemSelect = (
      itemId: string,
      selected: boolean,
      value: string
    ) => {
      if (selected) {
        setSelectedId(itemId);
        onItemSelect?.(itemId, value);
      }
    };

    // Handle search
    const handleSearch = (term: string) => {
      setSearchTerm(term);
    };

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
        >
          <AddSelect.List>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <AddSelect.Item
                  key={item.id}
                  itemId={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  value={item.value}
                  icon={item.icon}
                  meta={item.meta}
                  disabled={item.disabled}
                />
              ))
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
      disabled: PropTypes.bool,
      icon: PropTypes.node,
      id: PropTypes.string.isRequired,
      meta: PropTypes.node,
      subtitle: PropTypes.string,
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  itemsLabel: PropTypes.string,
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  /**@ts-ignore */
  onItemSelect: PropTypes.func,
  searchResultsTitle: PropTypes.string,
  selectedItemId: PropTypes.string,
};

SingleAddSelect.displayName = 'SingleAddSelect';
