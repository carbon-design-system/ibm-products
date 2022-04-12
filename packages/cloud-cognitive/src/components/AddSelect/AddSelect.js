//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tag } from 'carbon-components-react';
import { Tearsheet, TearsheetNarrow } from '../../components/Tearsheet';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
import { AddSelectSidebar } from './AddSelectSidebar';
import { AddSelectBreadcrumbs } from './AddSelectBreadcrumbs';
import { AddSelectList } from './AddSelectList';
import { AddSelectColumn } from './AddSelectColumn';
import { normalize, flatten, getGlobalFilterValues } from './add-select-utils';
import { AddSelectFilter } from './AddSelectFilter';
const componentName = 'AddSelect';

export let AddSelect = forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      columnInputPlaceholder,
      description,
      globalFilters,
      globalFiltersIconDescription,
      globalFiltersPlaceholderText,
      globalFiltersPrimaryButtonText,
      globalFiltersSecondaryButtonText,
      globalSearchLabel,
      globalSearchPlaceholder,
      influencerTitle,
      items,
      itemsLabel,
      multi,
      noResultsDescription,
      noResultsTitle,
      noSelectionDescription,
      noSelectionTitle,
      onClose,
      onCloseButtonText,
      onSubmit,
      onSubmitButtonText,
      open,
      removeIconDescription,
      searchResultsLabel,
      title,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const blockClass = `${pkg.prefix}--add-select`;

    // hooks
    const [path, setPath] = useState([]);
    const [singleSelection, setSingleSelection] = useState('');
    const [multiSelection, setMultiSelection] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [normalizedItems, setNormalizedItems] = useState({});
    const [useNormalizedItems, setUsedNormalizedItems] = useState(false);
    const [flatItems, setFlatItems] = useState([]);
    const [globalFilterOpts, setGlobalFilterOpts] = useState([]);
    const [appliedGlobalFilters, setAppliedGlobalFilters] = useState({});

    useEffect(() => {
      const { entries } = items;
      // flatItems is just a single array of all entries including children
      const flattenedItems = flatten(entries);
      if (multi) {
        if (globalFilters?.length) {
          const globalFilterValues = getGlobalFilterValues(
            globalFilters,
            flattenedItems
          );
          setGlobalFilterOpts(globalFilterValues);
        }
        // multi select with nested data needs to be normalized
        if (entries.find((entry) => entry.children)) {
          const newItems = normalize(items);
          setNormalizedItems(newItems);
          setUsedNormalizedItems(true);
        }
      }
      setFlatItems(flattenedItems);
    }, [items, multi, globalFilters]);

    // used to generate columns of results for multi select with hierarchy
    const getPages = () => {
      const pages = [];
      const itemIds = Object.keys(normalizedItems);
      // top level items are just items with no parents so they're the top results
      const topLevelItems = [];
      itemIds.forEach((itemId) => {
        if (!normalizedItems[itemId].parent) {
          topLevelItems.push(normalizedItems[itemId]);
        }
      });
      pages.push(topLevelItems);
      if (path.length) {
        /**
         * the path is set when you initially traverse the child entries
         * path is an array of item id's
         * when a path is present the normalized items are searched
         * any item who's has a matching parent id is added to the results
         * in the end you have an array of arrays for each column of the hierarchy
         */
        const pathIds = path.map((p) => p.id);
        pathIds.forEach((pathId) => {
          const entries = [];
          itemIds.forEach((itemId) => {
            if (normalizedItems[itemId].parent === pathId) {
              entries.push(normalizedItems[itemId]);
            }
          });
          pages.push(entries);
        });
      }
      return pages;
    };

    // item filtering
    const getFilteredItems = () => {
      const { entries } = items;
      const hasPath = path.length > 0;
      /**
       * how to traverse the levels of items-
       * the path represents the ids of each level / item / breadcrumb
       * using this path we can drill down into the items until we get to the last one the user selected
       */
      const itemsToFilter = hasPath
        ? path.reduce(
            (prev, cur) =>
              prev.find((item) => item.id === cur.id)?.children?.entries,
            entries
          )
        : entries;
      const results = itemsToFilter.filter((item) => {
        if (!searchTerm) {
          return item;
        }
        // otherwise use the default label filter
        return item.title.toLowerCase().includes(searchTerm);
      });
      return results;
    };

    const getDisplayItems = () => {
      if (useNormalizedItems) {
        // when global search or filter is in use the results are not in column format
        const filters = Object.keys(appliedGlobalFilters);
        if (searchTerm || filters.length) {
          const results = flatItems
            .filter((item) => item.title.toLowerCase().includes(searchTerm))
            .filter((item) =>
              filters.every(
                (filter) => item[filter] === appliedGlobalFilters[filter]
              )
            );
          return results;
        }
        return getPages();
      }
      return getFilteredItems();
    };

    // only multi select with hierarchy requires the the normalized items
    const itemsToDisplay = getDisplayItems();

    const commonListProps = {
      multi,
      multiSelection,
      path,
      setMultiSelection,
      setPath,
      setSingleSelection,
      singleSelection,
    };

    // handlers
    const handleSearch = (term) => {
      setSearchTerm(term);
    };

    const handleFilter = (filters) => {
      setAppliedGlobalFilters(filters);
    };

    const submitHandler = () => {
      onSubmit(multi ? multiSelection : singleSelection);
    };

    const commonTearsheetProps = {
      open,
      title,
      description,
      closeIconDescription: 'temp description',
      actions: [
        {
          label: onCloseButtonText,
          kind: 'secondary',
          onClick: onClose,
        },
        {
          label: onSubmitButtonText,
          kind: 'primary',
          onClick: submitHandler,
          disabled: multi ? multiSelection.length === 0 : !singleSelection,
        },
      ],
    };

    const sidebarProps = {
      influencerTitle,
      items: flatItems,
      multiSelection,
      noSelectionDescription,
      noSelectionTitle,
      removeIconDescription,
      setMultiSelection,
    };

    const classNames = cx(className, blockClass, {
      [`${blockClass}__single`]: !multi,
      [`${blockClass}__multi`]: multi,
    });

    const setShowBreadsCrumbs = () => {
      if (searchTerm) {
        return false;
      }
      if (path.length) {
        return true;
      }
      return false;
    };

    const setShowTags = () => {
      if (searchTerm) {
        return true;
      }
      if (useNormalizedItems) {
        return false;
      }
      return true;
    };

    const showBreadsCrumbs = setShowBreadsCrumbs();
    const showTags = setShowTags();
    const globalFiltersApplied = Object.keys(appliedGlobalFilters).length > 0;

    // main content
    const body = (
      <>
        <div className={`${blockClass}__header`}>
          <AddSelectFilter
            inputLabel={globalSearchLabel}
            inputPlaceholder={globalSearchPlaceholder}
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            multi={multi}
            filterOpts={globalFilterOpts}
            handleFilter={handleFilter}
            primaryButtonText={globalFiltersPrimaryButtonText}
            secondaryButtonText={globalFiltersSecondaryButtonText}
            placeholder={globalFiltersPlaceholderText}
            iconDescription={globalFiltersIconDescription}
          />
          <div className={`${blockClass}__tag-container`}>
            {showBreadsCrumbs ? (
              <AddSelectBreadcrumbs
                itemsLabel={itemsLabel}
                path={path}
                setPath={setPath}
              />
            ) : (
              <p className={`${blockClass}__tag-container-label`}>
                {searchTerm ? searchResultsLabel : itemsLabel}
              </p>
            )}
            {showTags && (
              <Tag type="gray" size="sm">
                {itemsToDisplay.length}
              </Tag>
            )}
          </div>
        </div>
        {useNormalizedItems && !searchTerm && !globalFiltersApplied ? (
          <div className={`${blockClass}__columns`}>
            {itemsToDisplay.map((page, idx) => (
              <AddSelectColumn
                {...commonListProps}
                key={idx}
                filteredItems={page}
                header={idx === 0 ? itemsLabel : path[idx - 1]?.title}
                columnInputPlaceholder={columnInputPlaceholder}
              />
            ))}
          </div>
        ) : (
          <div>
            {itemsToDisplay.length > 0 ? (
              <AddSelectList
                {...commonListProps}
                filteredItems={itemsToDisplay}
                modifiers={items?.modifiers}
              />
            ) : (
              <div className={`${blockClass}__body`}>
                <NoDataEmptyState
                  subtitle={noResultsDescription}
                  title={noResultsTitle}
                />
              </div>
            )}
          </div>
        )}
      </>
    );

    return (
      <div ref={ref} className={classNames} {...rest}>
        {multi ? (
          <Tearsheet
            {...commonTearsheetProps}
            influencer={multi && <AddSelectSidebar {...sidebarProps} />}
            influencerPosition="right"
          >
            {body}
          </Tearsheet>
        ) : (
          <TearsheetNarrow {...commonTearsheetProps}>{body}</TearsheetNarrow>
        )}
      </div>
    );
  }
);

AddSelect.propTypes = {
  className: PropTypes.string,
  columnInputPlaceholder: PropTypes.string,
  description: PropTypes.string,
  globalFilters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  globalFiltersIconDescription: PropTypes.string,
  globalFiltersPlaceholderText: PropTypes.string,
  globalFiltersPrimaryButtonText: PropTypes.string,
  globalFiltersSecondaryButtonText: PropTypes.string,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  influencerTitle: PropTypes.string,
  items: PropTypes.shape({
    modifiers: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.array,
    }),
    sortBy: PropTypes.array,
    filterBy: PropTypes.array,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.shape({
          alt: PropTypes.string,
          icon: PropTypes.object,
          src: PropTypes.string,
        }),
        children: PropTypes.object,
        icon: PropTypes.object,
        id: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ),
  }),
  itemsLabel: PropTypes.string,
  multi: PropTypes.bool,
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  onClose: PropTypes.func,
  onCloseButtonText: PropTypes.string,
  onSubmit: PropTypes.func,
  onSubmitButtonText: PropTypes.string,
  open: PropTypes.bool,
  removeIconDescription: PropTypes.string,
  searchResultsLabel: PropTypes.string,
  title: PropTypes.string,
};

AddSelect.defaultProps = {
  items: {
    entries: [],
  },
};

AddSelect.displayName = componentName;
