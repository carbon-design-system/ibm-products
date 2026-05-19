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
import { Search, Tag, Checkbox } from '@carbon/react';
import { blockClass, AddSelectContext } from './context';

/**
 * ----------------
 * AddSelectColumn
 * ----------------
 * A composable column component that wraps AddSelectRow items.
 * Provides optional search functionality with custom actions slot.
 * Lives inside AddSelectContent and can have multiple instances.
 */

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
   * Label text for the search input
   */
  searchLabel?: string;
  /**
   * Placeholder text for the search input
   */
  searchPlaceholder?: string;
  /**
   * Callback when search value changes
   */
  onSearch?: (value: string) => void;
  /**
   * Actions slot - adds custom actions (filter/sort) next to search
   */
  actionsSlot?: ReactNode;
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
   * Callback when navigating to children
   */
  onNavigate?: (itemId: string, title: string, parentId: string) => void;
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
      searchLabel = 'Search',
      searchPlaceholder = 'Search',
      onSearch,
      actionsSlot,
      multi = false,
      showSelectAll = false,
      itemCount = 0,
      allSelected = false,
      onSelectAll,
      onNavigate,
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const parentContext = React.useContext(AddSelectContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearch?.(value);
    };

    const handleSelectAll = (
      _event: React.ChangeEvent<HTMLInputElement>,
      { checked }: { checked: boolean }
    ) => {
      onSelectAll?.(checked);
    };

    const columnClasses = cx(`${blockClass}-column`, className);

    // Merge parent context with column-specific onNavigate
    const columnContext = {
      ...parentContext,
      multi,
      onNavigate,
    };

    return (
      <AddSelectContext.Provider value={columnContext}>
        <div className={columnClasses} ref={ref} {...rest}>
          {/* Search with optional actions */}
          <div
            className={cx(`${blockClass}-column__search`, {
              [`${blockClass}-column__search--with-actions`]: actionsSlot,
            })}
          >
            <div
              className={
                actionsSlot ? `${blockClass}-column__search-input` : undefined
              }
            >
              <Search
                labelText={searchLabel}
                placeholder={searchPlaceholder}
                size="md"
                onChange={handleSearch}
                value={searchTerm}
              />
            </div>
            {actionsSlot && (
              <div className={`${blockClass}-column__actions`}>
                {actionsSlot}
              </div>
            )}
          </div>

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
  actionsSlot: PropTypes.node,
  allSelected: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  itemCount: PropTypes.number,
  multi: PropTypes.bool,
  /**@ts-ignore */
  onNavigate: PropTypes.func,
  /**@ts-ignore */
  onSearch: PropTypes.func,
  /**@ts-ignore */
  onSelectAll: PropTypes.func,
  searchLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  showSelectAll: PropTypes.bool,
  title: PropTypes.string,
};

AddSelectColumn.displayName = 'AddSelectColumn';

export default AddSelectColumn;
