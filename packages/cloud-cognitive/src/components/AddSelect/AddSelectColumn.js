//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  Tag,
  OverflowMenu,
  OverflowMenuItem,
  Checkbox,
} from 'carbon-components-react';
import {
  Filter32,
  ArrowsVertical32,
  ArrowUp16,
  ArrowDown16,
} from '@carbon/icons-react';
import { pkg, carbon } from '../../settings';
import { AddSelectList } from './AddSelectList';
import uuidv4 from '../../global/js/utils/uuidv4';
const componentName = 'AddSelect';

export let AddSelectColumn = ({
  columnInputPlaceholder,
  filteredItems,
  header,
  multiSelection,
  setMultiSelection,
  ...props
}) => {
  const [allSelected, setAllSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('');
  const [sortAttribute, setSortAttribute] = useState('');
  const [filters, setFilters] = useState([]);
  const blockClass = `${pkg.prefix}--add-select`;
  const colClass = `${blockClass}__column`;

  useEffect(() => {
    const isAllSelected = filteredItems.every((item) =>
      multiSelection.includes(item.id)
    );
    setAllSelected(isAllSelected);
  }, [filteredItems, multiSelection]);

  // sorting
  const colSortBy = filteredItems.find((item) => item.sortBy)?.sortBy;
  const sortByOpts = colSortBy
    ? colSortBy.reduce((acc, cur) => {
        const opts = [
          {
            id: `${cur}-asc`,
            itemText: (
              <>
                <ArrowUp16 />
                {cur}
              </>
            ),
            direction: 'asc',
            attribute: cur,
          },
          {
            id: `${cur}-desc`,
            itemText: (
              <>
                <ArrowDown16 />
                {cur}
              </>
            ),
            direction: 'desc',
            attribute: cur,
          },
        ];
        return [...acc, ...opts];
      }, [])
    : [];

  // filtering
  const colFilterBy = filteredItems.find((item) => item.filterBy)?.filterBy;
  const filterByOpts = colFilterBy
    ? filteredItems.map((item) => item[colFilterBy])
    : [];

  // handlers
  const sortHandler = ({ direction, attribute }) => {
    setSortAttribute(attribute);
    setSortDirection(direction);
  };

  const selectAllHandler = (checked) => {
    const itemIds = filteredItems.map((item) => item.id);
    if (checked) {
      setMultiSelection([...multiSelection, ...itemIds]);
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

  const sortItems = (a, b) => {
    const valueA = a[sortAttribute]?.split(' ').join('');
    const valueB = b[sortAttribute]?.split(' ').join('');
    if (sortDirection === 'desc') {
      return valueA > valueB ? -1 : 1;
    }

    return valueA < valueB ? -1 : 1;
  };

  const colItems = filteredItems
    .filter(filterBySearch) // first check if the item meets the search
    .filter(filterByAttribute) // then check if the item is included in the filter
    .sort(sortItems); // then sort the items by whatever criteria

  return (
    <div className={colClass}>
      <div className={`${colClass}-search-bar`}>
        <TextInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          light
          placeholder={columnInputPlaceholder}
          className={`${colClass}-input`}
          id={uuidv4()}
          labelText={columnInputPlaceholder}
        />
        <div className={`${colClass}-sort-filter`}>
          {sortByOpts.length > 0 && (
            <OverflowMenu
              renderIcon={ArrowsVertical32}
              className={`${colClass}-overflow`}
              flipped
            >
              {sortByOpts.map((opt) => (
                <OverflowMenuItem
                  key={opt.id}
                  itemText={opt.itemText}
                  onClick={() => sortHandler(opt)}
                />
              ))}
            </OverflowMenu>
          )}
          {filterByOpts.length > 0 && (
            <OverflowMenu
              renderIcon={Filter32}
              className={`${colClass}-overflow`}
              flipped
            >
              {filterByOpts.map((opt) => (
                <div
                  key={opt}
                  className={`${carbon.prefix}--overflow-menu-options__option`}
                >
                  <div
                    className={`${carbon.prefix}--overflow-menu-options__btn`}
                  >
                    <Checkbox
                      id={opt}
                      labelText={opt}
                      onChange={(checked) => filterHandler(checked, opt)}
                      checked={filters.find((o) => o === opt) ? true : false}
                    />
                  </div>
                </div>
              ))}
            </OverflowMenu>
          )}
        </div>
      </div>
      <div className={`${blockClass}__tag-container`}>
        <Checkbox
          id={`${uuidv4()}-select-all`}
          checked={allSelected}
          onChange={selectAllHandler}
          labelText={
            <>
              <span className={`${blockClass}__tag-container-label`}>
                {header}
              </span>
              <Tag type="gray" size="sm">
                {colItems.length}
              </Tag>
            </>
          }
        />
      </div>
      <AddSelectList
        {...props}
        inColumn
        filteredItems={colItems}
        setMultiSelection={setMultiSelection}
        multiSelection={multiSelection}
      />
    </div>
  );
};

AddSelectColumn.propTypes = {
  columnInputPlaceholder: PropTypes.string,
  filteredItems: PropTypes.array,
  header: PropTypes.string,
  multiSelection: PropTypes.array,
  setMultiSelection: PropTypes.func,
};

AddSelectColumn.displayName = componentName;
