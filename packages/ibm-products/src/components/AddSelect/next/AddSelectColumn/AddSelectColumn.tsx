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
  ChangeEvent,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Search,
  Tag,
  Checkbox,
  Popover,
  PopoverContent,
  IconButton,
} from '@carbon/react';
import { Filter, ArrowsVertical } from '@carbon/react/icons';
import { blockClass, AddSelectContext } from '../context';

/**
 * ----------------
 * AddSelectColumn
 * ----------------
 * A composable column component that wraps AddSelectRow items.
 * Provides optional search, sort, and filter functionality.
 * Lives inside AddSelectList and can have multiple instances.
 */

export interface SortOption {
  id: string;
  label: string;
}

export interface AddSelectColumnProps {
  /**
   * AddSelectRow children
   */
  children?: ReactNode;
  /**
   * Column title displayed in the header
   */
  title?: string;
  /**
   * Whether to show the search input
   */
  showSearch?: boolean;
  /**
   * Placeholder text for the search input
   */
  searchPlaceholder?: string;
  /**
   * Callback when search value changes
   */
  onSearchChange?: (value: string) => void;
  /**
   * Whether to show the sort button
   */
  showSort?: boolean;
  /**
   * Array of sort options
   */
  sortOptions?: SortOption[];
  /**
   * Callback when sort changes
   */
  onSortChange?: (attribute: string, direction: 'asc' | 'desc') => void;
  /**
   * Label for the sort button
   */
  sortLabel?: string;
  /**
   * Whether to show the filter button
   */
  showFilter?: boolean;
  /**
   * Array of filter options
   */
  filterOptions?: string[];
  /**
   * Callback when filters change
   */
  onFilterChange?: (filters: string[]) => void;
  /**
   * Label for the filter button
   */
  filterLabel?: string;
  /**
   * Whether to enable multi-selection (checkboxes) or single selection (radio buttons)
   */
  multi?: boolean;
  /**
   * Whether to show the "Select All" checkbox (only applicable when multi is true)
   */
  showSelectAll?: boolean;
  /**
   * Total number of items in the column (for display in tag)
   */
  itemCount?: number;
  /**
   * Whether all items are currently selected
   */
  allSelected?: boolean;
  /**
   * Callback when "Select All" is toggled
   */
  onSelectAll?: (checked: boolean) => void;
  /**
   * Optional class name
   */
  className?: string;
}

const AddSelectColumn = forwardRef<HTMLDivElement, AddSelectColumnProps>(
  (
    {
      children,
      title = '',
      showSearch = false,
      searchPlaceholder = 'Search',
      onSearchChange,
      showSort = false,
      sortOptions = [],
      onSortChange,
      sortLabel = 'Sort',
      showFilter = false,
      filterOptions = [],
      onFilterChange,
      filterLabel = 'Filter',
      multi = false,
      showSelectAll = false,
      itemCount = 0,
      allSelected = false,
      onSelectAll,
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [sortAttribute, setSortAttribute] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearchChange?.(value);
    };

    const handleFilterChange = (checked: boolean, option: string) => {
      let newFilters: string[];
      if (checked) {
        newFilters = [...selectedFilters, option];
      } else {
        newFilters = selectedFilters.filter((f) => f !== option);
      }
      setSelectedFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handleSelectAll = (
      _event: React.ChangeEvent<HTMLInputElement>,
      { checked }: { checked: boolean }
    ) => {
      onSelectAll?.(checked);
    };

    const columnClasses = cx(`${blockClass}-column`, className);

    return (
      <AddSelectContext.Provider value={{ multi }}>
        <div className={columnClasses} ref={ref} {...rest}>
          {/* Search and Controls Section */}
          {(showSearch || showSort || showFilter) && (
            <div className={`${blockClass}-column__search-bar`}>
              <div className={`${blockClass}-column__search-wrapper`}>
                {showSearch && (
                  <Search
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder={searchPlaceholder}
                    className={`${blockClass}-column__search-input`}
                    labelText={searchPlaceholder}
                    size="md"
                  />
                )}
                {(showSort || showFilter) && (
                  <div className={`${blockClass}-column__controls`}>
                    {showSort && sortOptions.length > 0 && (
                      <IconButton
                        label={sortLabel}
                        kind="ghost"
                        size="md"
                        align="bottom"
                        onClick={() => {
                          // Toggle sort direction
                          const newDirection =
                            sortDirection === 'asc' ? 'desc' : 'asc';
                          setSortDirection(newDirection);
                          if (sortOptions[0]) {
                            setSortAttribute(sortOptions[0].id);
                            onSortChange?.(sortOptions[0].id, newDirection);
                          }
                        }}
                        className={`${blockClass}-column__sort-button`}
                      >
                        <ArrowsVertical />
                      </IconButton>
                    )}
                    {showFilter && filterOptions.length > 0 && (
                      <Popover
                        align="bottom-right"
                        open={filterOpen}
                        onRequestClose={() => setFilterOpen(false)}
                      >
                        <IconButton
                          label={filterLabel}
                          kind="ghost"
                          size="md"
                          align="bottom"
                          onClick={() => setFilterOpen(!filterOpen)}
                          className={`${blockClass}-column__filter-button`}
                        >
                          <Filter />
                        </IconButton>
                        <PopoverContent
                          className={`${blockClass}-column__filter-popover`}
                        >
                          {filterOptions.map((option) => (
                            <Checkbox
                              key={option}
                              id={`filter-${option}`}
                              labelText={option}
                              checked={selectedFilters.includes(option)}
                              onChange={(_event, { checked }) =>
                                handleFilterChange(checked, option)
                              }
                            />
                          ))}
                        </PopoverContent>
                      </Popover>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Header with Select All */}
          {(showSelectAll || title) && (
            <div className={`${blockClass}-column__header`}>
              {showSelectAll && multi ? (
                <Checkbox
                  id={`select-all-${title}`}
                  className={`${blockClass}-column__select-all`}
                  checked={allSelected}
                  onChange={handleSelectAll}
                  labelText={
                    <>
                      <span className={`${blockClass}-column__title`}>
                        {title}
                      </span>
                      {itemCount > 0 && (
                        <Tag type="gray" size="sm">
                          {itemCount}
                        </Tag>
                      )}
                    </>
                  }
                />
              ) : (
                <div className={`${blockClass}-column__title-wrapper`}>
                  <span className={`${blockClass}-column__title`}>{title}</span>
                  {itemCount > 0 && (
                    <Tag type="gray" size="sm">
                      {itemCount}
                    </Tag>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Rows Container */}
          <div className={`${blockClass}-column__rows`}>{children}</div>
        </div>
      </AddSelectContext.Provider>
    );
  }
);

AddSelectColumn.propTypes = {
  allSelected: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  filterLabel: PropTypes.string,
  filterOptions: PropTypes.arrayOf(PropTypes.string),
  itemCount: PropTypes.number,
  multi: PropTypes.bool,
  /**@ts-ignore */
  onFilterChange: PropTypes.func,
  /**@ts-ignore */
  onSearchChange: PropTypes.func,
  /**@ts-ignore */
  onSelectAll: PropTypes.func,
  /**@ts-ignore */
  onSortChange: PropTypes.func,
  searchPlaceholder: PropTypes.string,
  showFilter: PropTypes.bool,
  showSearch: PropTypes.bool,
  showSelectAll: PropTypes.bool,
  showSort: PropTypes.bool,
  sortLabel: PropTypes.string,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};

AddSelectColumn.displayName = 'AddSelectColumn';

export default AddSelectColumn;

// Made with Bob
