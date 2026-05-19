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
  useContext,
  MouseEvent,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Search, Tag, Breadcrumb, BreadcrumbItem, Link } from '@carbon/react';
import { blockClass, AddSelectContext } from './context';

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
   * Callback when search term changes
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
}

const AddSelectBody = forwardRef<HTMLDivElement, AddSelectBodyProps>(
  (
    {
      children,
      className,
      itemsLabel = '',
      globalSearchLabel = 'Search',
      globalSearchPlaceholder = 'Search',
      searchResultsTitle = 'Search results',
      itemCount = 0,
      path = [],
      onSearch,
      onBreadcrumbClick,
      headerContent,
      actionsSlot,
      subHeaderActions,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { multi } = useContext(AddSelectContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchTerm(value);
      onSearch?.(value);
    };

    const bodyClasses = cx(`${blockClass}__body`, className, {
      [`${blockClass}__body--single`]: !multi,
      [`${blockClass}__body--multi`]: multi,
    });

    return (
      <div className={bodyClasses} ref={ref} {...rest}>
        {/* Header Section */}
        <div className={`${blockClass}__header`}>
          {headerContent || (
            <>
              {/* Search with optional actions */}
              <div
                className={cx(`${blockClass}__search`, {
                  [`${blockClass}__search--with-actions`]: actionsSlot,
                })}
              >
                <div
                  className={
                    actionsSlot ? `${blockClass}__search-input` : undefined
                  }
                >
                  <Search
                    labelText={globalSearchLabel}
                    placeholder={globalSearchPlaceholder}
                    size="lg"
                    onChange={handleSearch}
                    value={searchTerm}
                  />
                </div>
                {actionsSlot && (
                  <div className={`${blockClass}__global-actions`}>
                    {actionsSlot}
                  </div>
                )}
              </div>

              {/* Sub-header with breadcrumbs or item label */}
              <div className={`${blockClass}__sub-header`}>
                <div className={`${blockClass}__tags`}>
                  {searchTerm ? (
                    <p className={`${blockClass}__tags-label`}>
                      {searchResultsTitle}
                    </p>
                  ) : path && path.length > 0 ? (
                    <Breadcrumb
                      noTrailingSlash
                      className={cx(`${blockClass}__breadcrumbs`, {
                        [`${blockClass}__breadcrumbs--multi`]: multi,
                      })}
                    >
                      {path.map((entry, idx) => {
                        const isCurrentPage = idx === path.length - 1;
                        return (
                          <BreadcrumbItem
                            key={entry.id}
                            isCurrentPage={isCurrentPage}
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
                  <Tag type="gray" size="sm">
                    {itemCount}
                  </Tag>
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
        <div className={`${blockClass}__content`}>{children}</div>
      </div>
    );
  }
);

AddSelectBody.propTypes = {
  actionsSlot: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  headerContent: PropTypes.node,
  itemCount: PropTypes.number,
  itemsLabel: PropTypes.string,
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
  searchResultsTitle: PropTypes.string,
  subHeaderActions: PropTypes.node,
};

AddSelectBody.displayName = 'AddSelectBody';

export default AddSelectBody;
