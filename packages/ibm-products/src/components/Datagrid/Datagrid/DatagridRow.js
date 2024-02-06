/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { isValidElement } from 'react';
import { TableRow, TableCell, SkeletonText } from '@carbon/react';
import { px } from '@carbon/layout';
import { selectionColumnId } from '../common-column-ids';
import cx from 'classnames';
import { pkg, carbon } from '../../../settings';
import { DatagridSlug } from './addons/Slug/DatagridSlug';

const blockClass = `${pkg.prefix}--datagrid`;

const rowHeights = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

// eslint-disable-next-line react/prop-types
const DatagridRow = (datagridState) => {
  const {
    row,
    rows,
    rowSize,
    withNestedRows,
    prepareRow,
    key,
    tableId,
    withExpandedRows,
    withMouseHover,
    setMouseOverRowIndex,
  } = datagridState;

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
    if (!withNestedRows) {
      return;
    }
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
      `#${tableId} .${blockClass}__carbon-row-expanded`
    );
    elements.forEach((el) => {
      el.classList.remove(`${blockClass}__carbon-row-expanded-hover-active`);
    });
  };

  const renderExpandedRow = () => {
    if (row.isExpanded) {
      prepareRow(row);
      return row?.RowExpansionRenderer?.({ ...datagridState, row });
    }
    return null;
  };

  const handleMouseLeave = (event) => {
    if (withMouseHover) {
      setMouseOverRowIndex(null);
    }
    const hoverRow = event.target.closest(
      `.${blockClass}__carbon-row-expanded`
    );
    hoverRow?.classList.remove(
      `${blockClass}__carbon-row-expanded-hover-active`
    );
  };

  const handleOnKeyUp = (event) => {
    if (!withNestedRows) {
      return;
    }
    if (event.key === 'Enter' || event.key === 'Space') {
      focusRemover();
      hoverHandler(event);
    }
  };

  const rowClassNames = cx(`${blockClass}__carbon-row`, {
    [`${blockClass}__carbon-row-expanded`]: row.isExpanded,
    [`${blockClass}__carbon-row-expandable`]: row.canExpand,
    [`${carbon.prefix}--data-table--selected`]: row.isSelected,
  });

  const setAdditionalRowProps = () => {
    if (withNestedRows || withExpandedRows) {
      return {
        'data-nested-row-id': row.id,
      };
    }
    return {};
  };

  // eslint-disable-next-line no-unused-vars
  const { role, ...rowProps } = row.getRowProps();
  const foundAIRow = rows.some(r => isValidElement(r?.original?.slug));

  return (
    <React.Fragment key={key}>
      <TableRow
        className={rowClassNames}
        {...rowProps}
        key={row.id}
        onMouseEnter={hoverHandler}
        onMouseLeave={handleMouseLeave}
        onFocus={hoverHandler}
        onBlur={focusRemover}
        onKeyUp={handleOnKeyUp}
        {...setAdditionalRowProps()}
      >
        {foundAIRow &&
          row?.original?.slug ?
            <td className={`${blockClass}__table-row-ai-enabled`}><DatagridSlug slug={row?.original?.slug} /></td>
            : <td className={`${blockClass}__table-row-ai-spacer`} />
        }
        {row.cells.map((cell, index) => {
          const cellProps = cell.getCellProps();
          // eslint-disable-next-line no-unused-vars
          const { children, role, ...restProps } = cellProps;
          const content = children || (
            <>
              {!row.isSkeleton && cell.render('Cell')}
              {row.isSkeleton && <SkeletonText />}
            </>
          );
          if (cell?.column?.id === selectionColumnId) {
            // directly render component without the wrapping TableCell
            return cell.render('Cell', { key: cell.column.id });
          }
          const title = content?.props?.children[0]?.props?.value;
          return (
            <TableCell
              className={cx(`${blockClass}__cell`, {
                [`${blockClass}__expandable-row-cell`]:
                  row.canExpand && index === 0,
              })}
              {...restProps}
              key={cell.column.id}
              title={title}
            >
              {content}
            </TableCell>
          );
        })}
      </TableRow>
      {renderExpandedRow()}
    </React.Fragment>
  );
};

export default DatagridRow;
