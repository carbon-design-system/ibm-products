//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TextInput, Tag } from 'carbon-components-react';
import { Tearsheet, TearsheetNarrow } from '../../components/Tearsheet';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
import { AddSelectSidebar } from './AddSelectSidebar';
import { AddSelectBreadcrumbs } from './AddSelectBreadcrumbs';
import { AddSelectList } from './AddSelectList';
import { AddSelectColumn } from './AddSelectColumn';
import { normalize, flatten } from './add-select-utils';
const componentName = 'AddSelect';

export let AddSelect = forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      columnInputPlaceholder,
      description,
      influencerTitle,
      inputPlaceholder,
      items,
      itemsLabel,
      multi,
      noResultsDescription,
      noResultsTitle,
      noSelectionDescription,
      noSelectionTitle,
      onClose,
      onCloseButtonText,
      onSearchFilter,
      onSubmit,
      onSubmitButtonText,
      open,
      removeIconDescription,
      textInputLabel,
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
    const [sidebarItems, setSidebarItems] = useState([]);

    useEffect(() => {
      const { entries } = items;
      setSidebarItems(flatten(entries));
      // multi select with nested data needs to be normalized
      if (multi && entries.find((entry) => entry.children)) {
        const newItems = normalize(items);
        setNormalizedItems(newItems);
        setUsedNormalizedItems(true);
      }
    }, [items, multi]);

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
        // if user provides their own filter function use that
        if (onSearchFilter) {
          return onSearchFilter(item, searchTerm);
        }
        // otherwise use the default label filter
        return item.title.toLowerCase().includes(searchTerm);
      });
      return results;
    };

    // only multi select with hierarchy requires the the normalized items
    const itemsToDisplay = useNormalizedItems ? getPages() : getFilteredItems();

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
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
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
      items: sidebarItems,
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

    // main content
    const body = (
      <>
        <div className={`${blockClass}__header`}>
          <TextInput
            id="temp-id"
            labelText={textInputLabel}
            placeholder={inputPlaceholder}
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className={`${blockClass}__tag-container`}>
            {path.length ? (
              <AddSelectBreadcrumbs
                itemsLabel={itemsLabel}
                path={path}
                setPath={setPath}
              />
            ) : (
              <p className={`${blockClass}__tag-container-label`}>
                {itemsLabel}
              </p>
            )}
            {!useNormalizedItems && (
              <Tag type="gray" size="sm">
                {itemsToDisplay.length}
              </Tag>
            )}
          </div>
        </div>
        {useNormalizedItems ? (
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
  influencerTitle: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  items: PropTypes.shape({
    modifiers: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.array,
      property: PropTypes.string,
    }),
    sortBy: PropTypes.array,
    filterBy: PropTypes.array,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        children: PropTypes.object,
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
  onSearchFilter: PropTypes.func,
  onSubmit: PropTypes.func,
  onSubmitButtonText: PropTypes.string,
  open: PropTypes.bool,
  removeIconDescription: PropTypes.string,
  textInputLabel: PropTypes.string,
  title: PropTypes.string,
};

AddSelect.defaultProps = {
  items: {
    entries: [],
  },
};

AddSelect.displayName = componentName;
