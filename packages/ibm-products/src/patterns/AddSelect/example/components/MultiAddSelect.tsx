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
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddSelect } from '../../../../components/AddSelect/next';
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';

const blockClass = `multi-add-select-pattern`;

/**
 * MultiAddSelect Pattern - A pre-configured pattern for multi-selection
 */

export interface MultiAddSelectProps {
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
   * Title for the selection summary panel (influencer)
   */
  influencerTitle?: string;
  /**
   * Title when no items are selected
   */
  noSelectionTitle?: string;
  /**
   * Description when no items are selected
   */
  noSelectionDescription?: string;
  /**
   * Callback when info icon is clicked
   */
  onShowInfo?: (itemId: string) => void;
  /**
   * Render prop to expose selected items for external rendering (e.g., in Tearsheet.Influencer)
   */
  renderSelectionSummary?: (
    items: AddSelectItem[],
    onRemove: (id: string) => void
  ) => ReactNode;
}

export const MultiAddSelect = forwardRef<HTMLDivElement, MultiAddSelectProps>(
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
      className,
      noResultsTitle = 'No results found',
      noResultsDescription = 'Try adjusting your search',
      influencerTitle = 'Selected items',
      noSelectionTitle = 'No items selected',
      noSelectionDescription = 'Select items from the list',
      renderSelectionSummary,
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
    const [filteredItems, setFilteredItems] = useState<AddSelectItem[]>([]);

    // Initialize data manager with items
    useEffect(() => {
      dataManager.setItems(items);
      const rootItems = dataManager.getItems();
      setFilteredItems(rootItems);
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

    // Handle search
    const handleSearch = (term: string) => {
      setSearchTerm(term);

      if (term) {
        // Use the data manager's search functionality
        const results = dataManager.search(term, {
          caseSensitive: false,
          searchFields: ['title', 'value', 'subtitle'],
        });
        setFilteredItems(results);
      } else {
        const rootItems = dataManager.getItems();
        setFilteredItems(rootItems);
      }
    };

    // Handle removing item from selection summary
    const handleRemoveItem = (itemId: string) => {
      const item = dataManager.getItem(itemId);
      if (item) {
        handleItemSelect(itemId, false, item.value || '');
      }
    };

    // Get selected items for display
    const selectedItemsForDisplay = useMemo(() => {
      return Array.from(selectedIds)
        .map((id) => dataManager.getItem(id))
        .filter((item): item is AddSelectItem => item !== undefined);
    }, [selectedIds, dataManager]);

    // Expose selection summary through render prop if provided
    useEffect(() => {
      if (renderSelectionSummary) {
        renderSelectionSummary(selectedItemsForDisplay, handleRemoveItem);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItemsForDisplay, renderSelectionSummary]);

    return (
      <AddSelect
        ref={ref}
        className={cx(blockClass, className)}
        multi={true}
        onItemSelect={handleItemSelect}
        selectedItems={selectedIds}
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
              filteredItems.map((item) => {
                return (
                  <AddSelect.Row
                    key={item.id}
                    itemId={item.id}
                    title={item.title || ''}
                    subtitle={item.subtitle}
                    value={item.value || ''}
                    icon={item.icon}
                    disabled={item.disabled}
                    hasInfoPanel={!!item.meta}
                    onInfoPanelClick={onShowInfo}
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

MultiAddSelect.propTypes = {
  className: PropTypes.string,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  influencerTitle: PropTypes.string,
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
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  /**@ts-ignore */
  onItemsSelect: PropTypes.func,
  searchResultsTitle: PropTypes.string,
  /**@ts-ignore */
  selectedItemIds: PropTypes.arrayOf(PropTypes.string),
};

MultiAddSelect.displayName = 'MultiAddSelect';
