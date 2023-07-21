/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';
import { Button } from '@carbon/react';
import { ArrowUp, ArrowDown, ArrowsVertical } from '@carbon/react/icons';

const blockClass = `${pkg.prefix}--datagrid`;

const ordering = {
  ASC: 'ASC',
  DESC: 'DESC',
  NONE: 'NONE',
};

const getAriaSortValue = (
  col,
  {
    ascendingSortableLabelText,
    descendingSortableLabelText,
    defaultSortableLabelText,
  }
) => {
  const { isSorted, isSortedDesc } = col;
  if (!isSorted) {
    return defaultSortableLabelText || 'none';
  }
  if (isSorted && !isSortedDesc) {
    return ascendingSortableLabelText || 'ascending';
  }
  if (isSorted && isSortedDesc) {
    return descendingSortableLabelText || 'descending';
  }
};

const getAriaPressedValue = (col) => {
  const { isSorted } = col;
  if (isSorted) {
    return 'true';
  }
  return 'false';
};

const useSortableColumns = (hooks) => {
  const sortableVisibleColumns = (visibleColumns, { instance }) => {
    const {
      onSort,
      ascendingSortableLabelText,
      descendingSortableLabelText,
      defaultSortableLabelText,
    } = instance;
    const onSortClick = (column) => {
      const key = column.id;
      const sortDesc = column.isSortedDesc;
      const { newSortDesc, newOrder } = getNewSortOrder(sortDesc);
      if (onSort) {
        onSort(key, newOrder);
      }
      instance.toggleSortBy(key, newSortDesc, false);
    };
    const sortableColumns = visibleColumns.map((column) => {
      const icon = (col, props) => {
        if (col?.isSorted) {
          switch (col.isSortedDesc) {
            case false:
              return (
                <ArrowUp
                  size={16}
                  {...props}
                  className={`${blockClass}__sortable-icon ${carbon.prefix}--btn__icon`}
                />
              );
            case true:
              return (
                <ArrowDown
                  size={16}
                  {...props}
                  className={`${blockClass}__sortable-icon ${carbon.prefix}--btn__icon`}
                />
              );
            default:
              return (
                <ArrowsVertical
                  size={16}
                  {...props}
                  className={`${blockClass}__sortable-icon ${carbon.prefix}--btn__icon`}
                />
              );
          }
        }
        return (
          <ArrowsVertical
            size={16}
            {...props}
            className={`${blockClass}__sortable-icon ${carbon.prefix}--btn__icon`}
          />
        );
      };
      const Header = (headerProp) =>
        column.disableSortBy === true ? (
          column.Header
        ) : (
          <Button
            aria-sort={getAriaSortValue(headerProp?.column, {
              ascendingSortableLabelText,
              descendingSortableLabelText,
              defaultSortableLabelText,
            })}
            aria-pressed={getAriaPressedValue(headerProp?.column)}
            onClick={() => onSortClick(headerProp?.column)}
            kind="ghost"
            renderIcon={(props) => icon(headerProp?.column, props)}
            className={cx(
              `${carbon.prefix}--table-sort ${blockClass}--table-sort`,
              {
                [`${blockClass}--table-sort--desc`]:
                  headerProp?.column.isSortedDesc,
                [`${blockClass}--table-sort--asc`]:
                  headerProp?.column.isSortedDesc === false,
              }
            )}
          >
            {column.Header}
          </Button>
        );
      return {
        ...column,
        Header,
        minWidth: column.disableSortBy === true ? 0 : 90,
      };
    });
    return instance.customizeColumnsProps?.isTearsheetOpen
      ? visibleColumns
      : [...sortableColumns];
  };

  const sortInstanceProps = (instance) => {
    const { onSort } = instance;
    Object.assign(instance, { manualSortBy: !!onSort, isTableSortable: true });
  };

  const getNewSortOrder = (sortOrder) => {
    const order = {
      newSortDesc: undefined,
      newOrder: ordering.NONE,
    };
    if (sortOrder === false) {
      order.newOrder = ordering.DESC;
      order.newSortDesc = true;
    }
    if (sortOrder === undefined) {
      order.newOrder = ordering.ASC;
      order.newSortDesc = false;
    }
    return order;
  };
  hooks.visibleColumns.push(sortableVisibleColumns);
  hooks.useInstance.push(sortInstanceProps);
};

export default useSortableColumns;
