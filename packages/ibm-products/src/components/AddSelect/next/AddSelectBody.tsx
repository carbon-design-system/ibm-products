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
  MouseEvent,
  useRef,
  useEffect,
  KeyboardEvent,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Search,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  type SearchProps,
  type TagProps,
  type BreadcrumbProps,
  type BreadcrumbItemProps,
  type LinkProps,
} from '@carbon/react';
import { blockClass } from './context';

/**
 * ----------------
 * AddSelectBody
 * ----------------
 */

export interface AddSelectBodyProps {
  children?: ReactNode;
  /**
   * Optional class name
   */
  className?: string;
  /**
   * Layout direction for columns: 'vertical' (default) or 'horizontal' (for hierarchy)
   */
  layout?: 'vertical' | 'horizontal';
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
   * Item count for display
   */
  itemCount?: number;
  /**
   * Navigation path for breadcrumbs
   */
  path?: Array<{ id: string; title: string }>;
  /**
   * Called when the global search input value changes.
   * Intended to filter across ALL columns/rows in the Body.
   * Independent of any per-column search in AddSelectColumn.
   */
  onSearch?: (searchTerm: string) => void;
  /**
   * Callback when breadcrumb is clicked
   */
  onBreadcrumbClick?: (index: number) => void;
  /**
   * Custom header content (slot) - replaces entire header
   */
  headerContent?: ReactNode;
  /**
   * Actions slot - adds custom actions (filter/sort) next to default search
   */
  actionsSlot?: ReactNode;
  /**
   * Sub-header actions - custom content/actions rendered after breadcrumbs and item count
   */
  subHeaderActions?: ReactNode;
  /**
   * Whether to hide the search input
   */
  hideSearch?: boolean;
  /**
   * Additional props to pass to the Search component
   */
  searchProps?: Omit<
    SearchProps,
    'labelText' | 'placeholder' | 'size' | 'onChange' | 'value'
  >;
  /**
   * Additional props to pass to the Tag component (for item count)
   */
  tagProps?: Omit<TagProps<'div'>, 'type' | 'size' | 'children'>;
  /**
   * Additional props to pass to the Breadcrumb component
   */
  breadcrumbProps?: Omit<
    BreadcrumbProps,
    'noTrailingSlash' | 'className' | 'children'
  >;
  /**
   * Additional props to pass to BreadcrumbItem components
   */
  breadcrumbItemProps?: Omit<
    BreadcrumbItemProps,
    'key' | 'isCurrentPage' | 'children'
  >;
  /**
   * Additional props to pass to Link components in breadcrumbs
   */
  linkProps?: Omit<LinkProps<'a'>, 'href' | 'onClick' | 'children'>;
}

const AddSelectBody = forwardRef<HTMLDivElement, AddSelectBodyProps>(
  (
    {
      children,
      className,
      layout = 'vertical',
      itemsLabel = '',
      globalSearchLabel = 'Search',
      globalSearchPlaceholder = 'Search',
      searchResultsTitle = 'Search results',
      itemCount,
      path = [],
      onSearch,
      onBreadcrumbClick,
      headerContent,
      actionsSlot,
      subHeaderActions,
      hideSearch = false,
      searchProps,
      tagProps,
      breadcrumbProps,
      breadcrumbItemProps,
      linkProps,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [globalSearchTerm, setGlobalSearchTerm] = useState('');
    const listRef = useRef<HTMLDivElement>(null);
    const focusedIndexRef = useRef(0);

    // Get all item elements
    const getItems = (): HTMLElement[] => {
      if (!listRef.current) {
        return [];
      }
      return Array.from(
        listRef.current.querySelectorAll('[role="row"]')
      ) as HTMLElement[];
    };

    // Update focus on items - only one item should have tabindex="0"
    const updateItemFocus = (focusIndex: number, shouldFocus = true) => {
      const items = getItems();
      if (items.length === 0) {
        return;
      }

      // Ensure focusIndex is within bounds
      focusedIndexRef.current = Math.max(
        0,
        Math.min(focusIndex, items.length - 1)
      );

      items.forEach((item, index) => {
        if (index === focusedIndexRef.current) {
          item.setAttribute('tabindex', '0');
          if (shouldFocus) {
            item.focus();
          }
        } else {
          item.setAttribute('tabindex', '-1');
        }
      });
    };

    // Handle keyboard navigation
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      const items = getItems();
      if (items.length === 0) {
        return;
      }

      const currentItem = items[focusedIndexRef.current];
      let handled = false;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          updateItemFocus(focusedIndexRef.current + 1);
          handled = true;
          break;

        case 'ArrowUp':
          event.preventDefault();
          updateItemFocus(focusedIndexRef.current - 1);
          handled = true;
          break;

        case 'ArrowRight':
          // Check if current item has children
          if (currentItem && currentItem.hasAttribute('data-has-children')) {
            event.preventDefault();
            // Trigger navigation by clicking the nav indicator
            const navIndicator = currentItem.querySelector(
              `.${blockClass}-row__nav-indicator`
            ) as HTMLElement;
            navIndicator?.click();
            handled = true;
          }
          break;

        case 'Enter':
        case ' ':
          event.preventDefault();
          // Trigger the item's selection by clicking the checkbox/radio
          if (currentItem) {
            const input = currentItem.querySelector(
              'input[type="checkbox"], input[type="radio"]'
            ) as HTMLInputElement;
            input?.click();
          }
          handled = true;
          break;

        case 'Home':
          if (event.ctrlKey) {
            event.preventDefault();
            updateItemFocus(0);
            handled = true;
          }
          break;

        case 'End':
          if (event.ctrlKey) {
            event.preventDefault();
            updateItemFocus(items.length - 1);
            handled = true;
          }
          break;
      }

      if (handled) {
        event.stopPropagation();
      }
    };

    // Initialize focus management after mount
    useEffect(() => {
      updateItemFocus(0, false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setGlobalSearchTerm(value);
      onSearch?.(value);
    };

    const bodyClasses = cx(`${blockClass}__body`, className);

    return (
      <div className={bodyClasses} ref={ref} {...rest}>
        {/* Header Section */}
        <div className={`${blockClass}__header`}>
          {headerContent || (
            <>
              {/* Search with optional actions */}
              {(!hideSearch || actionsSlot) && (
                <div
                  className={cx(`${blockClass}__search`, {
                    [`${blockClass}__search--with-actions`]: actionsSlot,
                  })}
                >
                  {!hideSearch && (
                    <div
                      className={
                        actionsSlot ? `${blockClass}__search-input` : ''
                      }
                    >
                      <Search
                        labelText={globalSearchLabel}
                        placeholder={globalSearchPlaceholder}
                        size="lg"
                        onChange={handleSearch}
                        value={globalSearchTerm}
                        {...searchProps}
                      />
                    </div>
                  )}
                  {actionsSlot && (
                    <div className={`${blockClass}__global-actions`}>
                      {actionsSlot}
                    </div>
                  )}
                </div>
              )}

              {/* Sub-header with breadcrumbs or item label */}
              <div className={`${blockClass}__sub-header`}>
                <div className={`${blockClass}__tags`}>
                  {globalSearchTerm ? (
                    <p className={`${blockClass}__tags-label`}>
                      {searchResultsTitle}
                    </p>
                  ) : path && path.length > 0 ? (
                    <Breadcrumb
                      noTrailingSlash
                      className={`${blockClass}__breadcrumbs`}
                      {...breadcrumbProps}
                    >
                      {path.map((entry, idx) => {
                        const isCurrentPage = idx === path.length - 1;
                        return (
                          <BreadcrumbItem
                            key={entry.id}
                            isCurrentPage={isCurrentPage}
                            {...breadcrumbItemProps}
                          >
                            {isCurrentPage ? (
                              entry.title
                            ) : (
                              <Link
                                href="#"
                                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                  e.preventDefault();
                                  onBreadcrumbClick?.(idx);
                                }}
                                {...linkProps}
                              >
                                {entry.title}
                              </Link>
                            )}
                          </BreadcrumbItem>
                        );
                      })}
                    </Breadcrumb>
                  ) : (
                    <p className={`${blockClass}__tags-label`}>{itemsLabel}</p>
                  )}
                  {itemCount !== undefined && (
                    <Tag type="gray" size="sm" {...tagProps}>
                      {itemCount}
                    </Tag>
                  )}
                </div>
                {subHeaderActions && (
                  <div className={`${blockClass}__sub-header-actions`}>
                    {subHeaderActions}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Body Content */}
        <div
          className={`${blockClass}__content`}
          ref={listRef}
          role="grid"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            className={cx(`${blockClass}-list-body`, {
              [`${blockClass}-list-body--horizontal`]: layout === 'horizontal',
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

AddSelectBody.propTypes = {
  actionsSlot: PropTypes.node,
  /**@ts-ignore */
  breadcrumbItemProps: PropTypes.object,
  /**@ts-ignore */
  breadcrumbProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  headerContent: PropTypes.node,
  hideSearch: PropTypes.bool,
  itemCount: PropTypes.number,
  itemsLabel: PropTypes.string,
  /**@ts-ignore */
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  /**@ts-ignore */
  linkProps: PropTypes.object,
  /**@ts-ignore */
  onBreadcrumbClick: PropTypes.func,
  /**@ts-ignore */
  onSearch: PropTypes.func,
  /**@ts-ignore */
  path: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  /**@ts-ignore */
  searchProps: PropTypes.object,
  searchResultsTitle: PropTypes.string,
  subHeaderActions: PropTypes.node,
  /**@ts-ignore */
  tagProps: PropTypes.object,
};

AddSelectBody.displayName = 'AddSelectBody';

export default AddSelectBody;
