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

    useEffect(() => {
      const normalize = (arr, parentId, sortBy, filterBy) => {
        return arr.reduce((acc, cur) => {
          const { children, ...entry } = cur;
          acc[cur.id] = { ...entry };
          if (parentId) {
            acc[cur.id].parent = parentId;
          }
          if (sortBy?.length) {
            acc[cur.id].sortBy = sortBy;
          }
          if (filterBy) {
            acc[cur.id].filterBy = filterBy;
          }
          if (children) {
            acc[cur.id].children = children.entries.map((child) => child.id);
            const child = normalize(
              children.entries,
              cur.id,
              children.sortBy,
              children.filterBy
            );
            return { ...acc, ...child };
          }
          return acc;
        }, {});
      };

      // multi select with nested data needs to be normalized
      if (multi && items.entries.find((entry) => entry.children)) {
        const newItems = normalize(
          items.entries,
          null,
          items.sortBy,
          items.filterBy
        );
        setNormalizedItems(newItems);
        setUsedNormalizedItems(true);
      }
    }, [items, multi]);

    const getPages = () => {
      const results = [];
      const itemIds = Object.keys(normalizedItems);
      const topLevelItems = [];
      itemIds.forEach((itemId) => {
        if (!normalizedItems[itemId].parent) {
          topLevelItems.push(normalizedItems[itemId]);
        }
      });
      results.push(topLevelItems);
      if (path.length) {
        const pathIds = path.map((p) => p.id);
        pathIds.forEach((pathId) => {
          const childItems = [];
          itemIds.forEach((itemId) => {
            if (normalizedItems[itemId].parent === pathId) {
              childItems.push(normalizedItems[itemId]);
            }
          });
          results.push(childItems);
        });
      }
      return results;
    };

    // handlers
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
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
          onClick: onSubmit,
          disabled: multi ? multiSelection.length === 0 : !singleSelection,
        },
      ],
    };

    const sidebarProps = {
      influencerTitle,
      items: items.entries,
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
