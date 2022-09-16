/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
// @flow
import React from 'react';
import { DataTable, SkeletonText } from 'carbon-components-react';
import { selectionColumnId } from '../common-column-ids';
import cx from 'classnames';
import { pkg, carbon } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableRow, TableCell } = DataTable;

// eslint-disable-next-line react/prop-types
const DatagridRow = (datagridState) => {
  const { row } = datagridState;
  return (
    <TableRow
      className={cx(`${blockClass}__carbon-row`, {
        [`${blockClass}__carbon-row-expanded`]: row.isExpanded,
        [`${carbon.prefix}--data-table--selected`]: row.isSelected,
      })}
      {...row.getRowProps()}
      key={row.id}
      onMouseEnter={(event) => {
        const hoverRow = event.target.closest(
          `.${blockClass}__carbon-row-expanded`
        );
        hoverRow?.classList.add(
          `${blockClass}__carbon-row-expanded-hover-active`
        );
      }}
      onMouseLeave={(event) => {
        const hoverRow = event.target.closest(
          `.${blockClass}__carbon-row-expanded`
        );
        hoverRow?.classList.remove(
          `${blockClass}__carbon-row-expanded-hover-active`
        );
      }}
      onKeyUp={(event) => {
        if (
          [
            'ArrowRight',
            'ArrowLeft',
            'ArrowDown',
            'ArrowUp',
            'End',
            'Home',
          ].some((k) => k === event.key)
        ) {
          const rowsActive = document.querySelectorAll(
            '.c4p--datagrid__carbon-row'
          );
          for (var i = 0; i < rowsActive.length; i++) {
            rowsActive[i].classList.remove(
              'c4p--datagrid__carbon-row-hover-active'
            );
          }
          event.target
            .closest('tr')
            .classList.add(`${blockClass}__carbon-row-hover-active`);
        }
      }}
    >
      {row.cells.map((cell) => {
        const cellProps = cell.getCellProps();
        const { children, ...restProps } = cellProps;
        const content = children || (
          <>
            {!row.isSkeleton && cell.render('Cell')}
            {row.isSkeleton && <SkeletonText />}
          </>
        );
        if (cell && cell.column && cell.column.id === selectionColumnId) {
          // directly render component without the wrapping TableCell
          return cell.render('Cell', { key: cell.column.id });
        }
        return (
          <TableCell
            className={`${blockClass}__cell`}
            {...restProps}
            key={cell.column.id}
          >
            {content}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default DatagridRow;
