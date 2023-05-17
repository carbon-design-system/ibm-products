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
import { px } from '@carbon/layout';
import cx from 'classnames';
import { selectionColumnId } from '../common-column-ids';
import { pkg, carbon } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const { TableRow, TableCell } = DataTable;

const rowHeights = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

// eslint-disable-next-line react/prop-types
const DatagridRow = (datagridState) => {
  const { row, rowSize, withNestedRows } = datagridState;

  const getVisibleNestedRowCount = ({ isExpanded, subRows }) => {
    let size = 0;
    if (isExpanded && subRows) {
      size += subRows.length;
      subRows.forEach((child) => {
        size += getVisibleNestedRowCount(child);
      });
    }
    return size;
  };

  const hoverHandler = (event) => {
    const subRowCount = getVisibleNestedRowCount(row);
    const totalNestedRowIndicatorHeight = px(subRowCount * rowHeights[rowSize]);
    const hoverRow = event.target.closest(
      `.${blockClass}__carbon-row-expanded`
    );
    hoverRow?.classList.add(`${blockClass}__carbon-row-expanded-hover-active`);
    const rowExpanderButton = hoverRow?.querySelector(
      `.${blockClass}__row-expander`
    );
    const rowSizeValue = rowSize || 'lg';
    hoverRow?.style?.setProperty(
      `--${blockClass}--indicator-height`,
      totalNestedRowIndicatorHeight
    );
    hoverRow?.style?.setProperty(
      `--${blockClass}--row-height`,
      px(rowHeights[rowSizeValue])
    );
    hoverRow?.style?.setProperty(
      `--${blockClass}--indicator-offset-amount`,
      px(rowExpanderButton?.offsetLeft || 0)
    );
  };

  const focusRemover = () => {
    const elements = document.querySelectorAll(
      `.${blockClass}__carbon-row-expanded`
    );
    elements.forEach((el) => {
      el.classList.remove(`${blockClass}__carbon-row-expanded-hover-active`);
    });
  };

  return (
    <TableRow
      className={cx(`${blockClass}__carbon-row`, {
        [`${blockClass}__carbon-row-expanded`]: row.isExpanded,
        [`${blockClass}__carbon-row-expandable`]: row.canExpand,
        [`${carbon.prefix}--data-table--selected`]: row.isSelected,
      })}
      {...row.getRowProps({ role: false })}
      key={row.id}
      onMouseEnter={(event) => {
        if (!withNestedRows) {
          return;
        }
        hoverHandler(event);
      }}
      onMouseLeave={(event) => {
        const hoverRow = event.target.closest(
          `.${blockClass}__carbon-row-expanded`
        );
        hoverRow?.classList.remove(
          `${blockClass}__carbon-row-expanded-hover-active`
        );
      }}
      onFocus={(event) => {
        if (!withNestedRows) {
          return;
        }
        hoverHandler(event);
      }}
      onBlur={() => {
        focusRemover();
      }}
      onKeyUp={(event) => {
        if (!withNestedRows) {
          return;
        }
        if (event.key === 'Enter' || event.key === 'Space') {
          focusRemover();
          hoverHandler(event);
        }
      }}
    >
      {row.cells.map((cell, index) => {
        const cellProps = cell.getCellProps({ role: false });
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
            className={cx(
              `${blockClass}__cell`,
              `row_${cell.row.id}__column__${cell.column.id}`,
              {
                [`${blockClass}__expandable-row-cell`]:
                  row.canExpand && index === 0,
              }
            )}
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
