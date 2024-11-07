//
// Copyright IBM Corp. 2022, 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Search,
  Tag,
  OverflowMenu,
  Checkbox,
  usePrefix,
  unstable_FeatureFlags as FeatureFlags,
} from '@carbon/react';
import { Filter } from '@carbon/react/icons';
import { pkg } from '../../settings';
import { AddSelectList } from './AddSelectList';
import { AddSelectSort } from './AddSelectSort';
import { sortItems } from './add-select-utils';
import { useItemSort } from './hooks/useItemSort';
import uuidv4 from '../../global/js/utils/uuidv4';
import useParentSelect from './hooks/useParentSelect';

const blockClass = `${pkg.prefix}--add-select`;
const colClass = `${blockClass}__column`;
const componentName = 'AddSelectColumn';

export let AddSelectColumn = ({
  columnInputPlaceholder,
  filterByLabel,
  header,
  items,
  multiSelection,
  parentId,
  path,
  setMultiSelection,
  setPath,
  sortByLabel,
  ...props
}) => {
  const carbonPrefix = usePrefix();
  const { parentSelected, setParentSelected } = useParentSelect();
  const [searchTerm, setSearchTerm] = useState('');
  const { sortDirection, setSortDirection, sortAttribute, setSortAttribute } =
    useItemSort();
  const [filters, setFilters] = useState([]);
  const { entries, filterBy, sortBy } = items;
  const getSelectedItem = () => {
    const parentInPath = path.find((entry) => entry.parentId === parentId);
    /**
     * this check helps ensure that when the state of the open columns is cleared by global search
     * that the columns are rebuilt from the data in the path array
     */
    if (parentInPath && !parentSelected) {
      return entries.find((item) => item.id === parentInPath.id);
    }
    return entries.find((item) => item.id === parentSelected) ?? null;
  };

  const selectedItem = getSelectedItem();
  /**
   * this check helps prevent children from already being open when you switch from parents
   * on the same level. for example- using the storybook example, if you click on folder 1,
   * file 1, folder 2, and then folder 1 again file 1 children shouldn't be expanded. this
   * check ensures that when a user navigates to parents on the same level that the open state
   * of their children is cleared by referencing the path array.
   */
  const itemInPath =
    selectedItem && path.find((entry) => entry.id === selectedItem.id);

  const allSelected = entries.every((item) => multiSelection.includes(item.id));

  // filtering
  const filterByOpts = filterBy ? entries.map((item) => item[filterBy]) : [];

  const selectAllHandler = (event, { checked }) => {
    const itemIds = entries.map((item) => item.id);
    if (checked) {
      const newSelections = [...new Set([...multiSelection, ...itemIds])];
      setMultiSelection(newSelections);
    } else {
      const newItems = multiSelection.filter((i) => !itemIds.includes(i));
      setMultiSelection(newItems);
    }
  };

  const filterHandler = (checked, opt) => {
    if (checked) {
      const newFilters = [...filters, opt];
      setFilters(newFilters);
    } else {
      const newFilters = filters.filter((o) => o !== opt);
      setFilters(newFilters);
    }
  };

  // filter and sort array functions
  const filterBySearch = (item) =>
    item.title.toLowerCase().includes(searchTerm);

  const filterByAttribute = (item) => {
    if (filters.length === 0) {
      return true;
    }
    const { filterBy } = item;
    const filterByValue = item[filterBy];
    return filters.some((filter) => filter === filterByValue);
  };

  const sortFn = sortItems(sortAttribute, sortDirection);

  const colItems = entries
    .filter(filterBySearch) // first check if the item meets the search
    .filter(filterByAttribute) // then check if the item is included in the filter
    .sort(sortFn); // then sort the items by whatever criteria

  const parentSelectionHandler = (id, title) => {
    setParentSelected(id);
    setPath(id, title, parentId);
  };

  return (
    <>
      <div className={colClass}>
        <div className={`${colClass}-search-bar`}>
          <Search
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={columnInputPlaceholder}
            className={`${colClass}-input`}
            id={uuidv4()}
            labelText={columnInputPlaceholder}
            size="md"
          />
          <div className={`${colClass}-sort-filter`}>
            <AddSelectSort
              items={entries}
              setSortAttribute={setSortAttribute}
              setSortDirection={setSortDirection}
              sortAttribute={sortAttribute}
              sortDirection={sortDirection}
              sortBy={sortBy}
              sortByLabel={sortByLabel}
            />
            {filterByOpts.length > 0 && (
              <FeatureFlags enableV12DynamicFloatingStyles>
                <OverflowMenu
                  autoAlign
                  renderIcon={(props) => <Filter size={32} {...props} />}
                  className={`${colClass}-overflow`}
                  flipped
                  aria-label={filterByLabel}
                  iconDescription={filterByLabel}
                >
                  {filterByOpts.map((opt) => (
                    <div
                      key={opt}
                      className={`${carbonPrefix}--overflow-menu-options__option`}
                    >
                      <div
                        className={`${carbonPrefix}--overflow-menu-options__btn`}
                      >
                        <Checkbox
                          id={opt}
                          labelText={opt}
                          onChange={(event, { checked }) =>
                            filterHandler(checked, opt)
                          }
                          checked={
                            filters.find((o) => o === opt) ? true : false
                          }
                        />
                      </div>
                    </div>
                  ))}
                </OverflowMenu>
              </FeatureFlags>
            )}
          </div>
        </div>
        <div className={`${blockClass}__tags`}>
          <Checkbox
            id={`${uuidv4()}-select-all`}
            className={`${colClass}__select-all`}
            checked={allSelected}
            onChange={selectAllHandler}
            labelText={
              <>
                <span className={`${blockClass}__tag-label`}>{header}</span>
                <Tag type="gray" size="sm">
                  {colItems.length}
                </Tag>
              </>
            }
          />
        </div>
        <AddSelectList
          {...props}
          filteredItems={colItems}
          setMultiSelection={setMultiSelection}
          multiSelection={multiSelection}
          setParentSelected={parentSelectionHandler}
          parentSelected={parentSelected}
        />
      </div>
      {selectedItem && itemInPath && (
        <AddSelectColumn
          columnInputPlaceholder={columnInputPlaceholder}
          header={selectedItem.title}
          items={selectedItem.children}
          multiSelection={multiSelection}
          setMultiSelection={setMultiSelection}
          parentId={selectedItem.id}
          setPath={setPath}
          path={path}
          sortByLabel={sortByLabel}
          filterByLabel={filterByLabel}
          {...props}
        />
      )}
    </>
  );
};

AddSelectColumn.propTypes = {
  columnInputPlaceholder: PropTypes.string,
  filterByLabel: PropTypes.string,
  header: PropTypes.string,
  items: PropTypes.object,
  multiSelection: PropTypes.array,
  parentId: PropTypes.string,
  path: PropTypes.array,
  setMultiSelection: PropTypes.func,
  setPath: PropTypes.func,
  sortByLabel: PropTypes.string,
};

AddSelectColumn.displayName = componentName;
