/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020, 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React, { useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Checkbox, OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { CaretDown } from '@carbon/react/icons';
import { pkg } from '../../../settings';
// cspell:words columnheader

const blockClass = `${pkg.prefix}--datagrid`;

const SELECT_ALL_PAGE_ROWS = 'pageRows';
const SELECT_ALL_ROWS = 'allRows';

const SelectAllWithToggle = ({
  tableId,
  isFetching,
  isAllRowsSelected,
  selectAllToggle,
  getToggleAllPageRowsSelectedProps,
  getToggleAllRowsSelectedProps,
  allPageRowsLabel = 'Select all on page',
  allRowsLabel = 'Select all',
  columns,
  withStickyColumn,
}) => {
  const [selectAllMode, setSelectAllMode] = useState(SELECT_ALL_PAGE_ROWS);
  useEffect(() => {
    if (onSelectAllRows) {
      onSelectAllRows(isAllRowsSelected && selectAllMode === SELECT_ALL_ROWS);
    }
  }, [isAllRowsSelected, selectAllMode, onSelectAllRows]);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const { onSelectAllRows, labels } = selectAllToggle || {};
  if (labels) {
    allPageRowsLabel = labels.allPageRows || allPageRowsLabel;
    allRowsLabel = labels.allRows || allRowsLabel;
  }
  const getProps =
    selectAllMode === SELECT_ALL_PAGE_ROWS
      ? getToggleAllPageRowsSelectedProps
      : getToggleAllRowsSelectedProps;
  const { onChange, ...selectProps } = getProps();
  const disabled = isFetching || selectProps.disabled;
  const isFirstColumnStickyLeft =
    columns[0]?.sticky === 'left' && withStickyColumn;
  return (
    <th
      role="columnheader"
      scope="col"
      className={cx(`${blockClass}__select-all-toggle-on`, {
        [`${blockClass}__select-all-sticky-left`]:
          isFirstColumnStickyLeft && windowSize > 671,
      })}
    >
      <span>
        <Checkbox
          {...selectProps}
          name={`${tableId}-select-all-checkbox-name`}
          onClick={(e) => {
            onChange(e);
          }}
          disabled={disabled}
          id={`${tableId}-select-all-checkbox-id`}
          labelText={allRowsLabel}
          hideLabel
        />
      </span>
      <OverflowMenu
        renderIcon={(props) => <CaretDown size={16} {...props} />}
        size="sm"
        ariaLabel={allRowsLabel}
      >
        <OverflowMenuItem
          itemText={allPageRowsLabel}
          requireTitle
          disabled={disabled}
          onClick={() => {
            setSelectAllMode(SELECT_ALL_PAGE_ROWS);
            // deselect all rows first
            getToggleAllRowsSelectedProps().onChange({
              target: { checked: false },
            });
            // select all row on current page
            getToggleAllPageRowsSelectedProps().onChange({
              target: { checked: true },
            });
          }}
        />
        <OverflowMenuItem
          itemText={allRowsLabel}
          requireTitle
          disabled={disabled}
          onClick={() => {
            setSelectAllMode(SELECT_ALL_ROWS);
            getToggleAllRowsSelectedProps().onChange({
              target: { checked: true },
            });
          }}
        />
      </OverflowMenu>
    </th>
  );
};

SelectAllWithToggle.propTypes = {
  allPageRowsLabel: PropTypes.string,
  allRowsLabel: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  getToggleAllPageRowsSelectedProps: PropTypes.func.isRequired,
  getToggleAllRowsSelectedProps: PropTypes.func.isRequired,
  isAllRowsSelected: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool,
  selectAllToggle: PropTypes.object,
  tableId: PropTypes.string.isRequired,
  withStickyColumn: PropTypes.bool,
};

export default SelectAllWithToggle;
