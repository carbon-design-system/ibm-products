/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';
import { Button } from '@carbon/react';
import { ArrowUp, ArrowDown, ArrowsVertical } from '@carbon/react/icons';
import { SelectAll } from './Datagrid/DatagridSelectAll';
import { DatagridAILabel } from './Datagrid/addons/AiLabel/DatagridAiLabel';
import { Hooks, TableInstance } from 'react-table';
import { DataGridState } from './types';

interface Order {
  newOrder: 'ASC' | 'DESC' | 'NONE';
  newSortDesc: undefined | boolean;
}

const blockClass = `${pkg.prefix}--datagrid`;

export const getNewSortOrder = (currentOrder?: boolean | string) => {
  const order: Order = {
    newOrder: 'NONE',
    newSortDesc: undefined,
  };

  // NONE => ASC
  if (currentOrder === undefined) {
    order.newOrder = 'ASC';
    order.newSortDesc = false;
  }

  // ACS => DESC
  if (currentOrder === false || currentOrder === 'DESC') {
    order.newOrder = 'DESC';
    order.newSortDesc = true;
  }

  // DESC => NONE
  if (currentOrder === true || currentOrder === 'ASC') {
    order.newOrder = 'NONE';
    order.newSortDesc = undefined;
  }
  return order;
};

const getAriaSortValue = (
  col,
  {
    ascendingSortableLabelText,
    descendingSortableLabelText,
    defaultSortableLabelText,
  }
) => {
  if (!col) {
    return;
  }
  const { isSorted, isSortedDesc } = col;
  if (!isSorted) {
    return defaultSortableLabelText;
  }
  if (isSorted && !isSortedDesc) {
    return ascendingSortableLabelText;
  }
  if (isSorted && isSortedDesc) {
    return descendingSortableLabelText;
  }
};

const getAriaPressedValue = (col) => {
  if (!col) {
    return;
  }
  const { isSorted } = col;
  if (isSorted) {
    return 'true';
  }
  return 'false';
};

const useSortableColumns = (hooks: Hooks) => {
  const sortableVisibleColumns = (visibleColumns, { instance }) => {
    const {
      onSort,
      ascendingSortableLabelText,
      descendingSortableLabelText,
      defaultSortableLabelText,
    } = instance;
    const onSortClick = (event, column) => {
      const aiLabel =
        event.target.classList.contains(`${carbon.prefix}--slug`) ||
        event.target.closest(`.${carbon.prefix}--slug`);
      // Do not continue with sorting if we find a slug
      if (aiLabel) {
        event.stopPropagation();
        return;
      }
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
        const iconProps = {
          size: 16,
          ...props,
          className: `${blockClass}__sortable-icon ${carbon.prefix}--btn__icon`,
        };
        if (col?.isSorted) {
          switch (col.isSortedDesc) {
            case false:
              return <ArrowUp {...iconProps} />;
            case true:
              return <ArrowDown {...iconProps} />;
            default:
              return <ArrowsVertical {...iconProps} />;
          }
        }
        return <ArrowsVertical {...iconProps} />;
      };

      const handleKey = (e, columnId) => {
        const { key } = e;
        if (key === 'Enter') {
          setTimeout(() => document.getElementById(columnId)?.focus(), 0);
        }
      };

      const Header = (headerProp) =>
        column.disableSortBy === true ||
        column.id === 'datagridSelection' ||
        column.isAction ? (
          column.disableSortBy || column.isAction ? (
            column.Header
          ) : (
            <SelectAll {...instance} />
          )
        ) : (
          <Button
            aria-sort={getAriaSortValue(headerProp?.column, {
              ascendingSortableLabelText,
              descendingSortableLabelText,
              defaultSortableLabelText,
            })}
            aria-pressed={getAriaPressedValue(headerProp?.column)}
            onClick={(event) => onSortClick(event, headerProp?.column)}
            kind="ghost"
            renderIcon={(props) => {
              return (
                <>
                  <DatagridAILabel
                    aiLabel={
                      headerProp?.column?.aiLabel || headerProp?.column?.slug
                    }
                  />
                  {icon(headerProp?.column, props)}
                </>
              );
            }}
            id={column?.id}
            className={cx(
              `${carbon.prefix}--table-sort ${blockClass}--table-sort`,
              {
                [`${blockClass}--table-sort--desc`]:
                  headerProp?.column.isSortedDesc,
                [`${blockClass}--table-sort--asc`]:
                  headerProp?.column.isSortedDesc === false,
              }
            )}
            onKeyDown={(event) => handleKey(event, column.id)}
          >
            {column.Header}
          </Button>
        );
      return {
        ...column,
        Header,
        minWidth: column.disableSortBy
          ? 0
          : column.minWidth ?? (column.isAction ? 50 : 90),
      };
    });
    return instance.customizeColumnsProps?.isTearsheetOpen
      ? visibleColumns
      : [...sortableColumns];
  };

  const sortInstanceProps = (instance: TableInstance) => {
    const { onSort } = instance as DataGridState;
    Object.assign(instance, { manualSortBy: !!onSort, isTableSortable: true });
  };

  hooks.visibleColumns.push(sortableVisibleColumns);
  hooks.useInstance.push(sortInstanceProps);
};

export default useSortableColumns;
