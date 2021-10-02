//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectRow,
  TableSelectAll,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableToolbar,
  TableToolbarSearch,
  TableToolbarContent,
  TableToolbarAction,
} = DataTable;
import React from 'react';
import PropTypes from 'prop-types';
import * as KeyHandler from '../../component_helpers/A11yHelper.js';
import { idAttribute } from '../../component_helpers/IDHelper';
import { DataTable, DataTableSkeleton } from 'carbon-components-react';
import { idePrefix } from '../../globals/js/settings';
const SelectTypes = Object.freeze({
  MULTI: 'multi',
  SINGLE: 'single',
  NONE: 'none',
});
const onClickAriaKey = 'ide.table.addition.row.click'; //Translation key for the aria label attached to clickable rows

const IdeDataTable = ({
  loading,
  headers,
  selectType,
  onSelect,
  skeletonRowCount,
  ariaLabels,
  rows,
  onClick,
  renderHeader,
  renderRow,
  renderExpandedRow,
  expandable,
  renderToolbar,
  size,
  className,
  ...others
}) => {
  const selectAll = (rows, selectedRows) => () => {
    const selected = selectedRows.length === rows.length ? [] : rows;
    return onSelect(
      selected.filter((row) => !row.disabled).map((row) => row.id)
    );
  };

  const selectRow = (selectedRows, selectedRow) => () => {
    if (selectType === SelectTypes.SINGLE) {
      return onSelect && onSelect([selectedRow.id]);
    }

    const selectedIndex = selectedRows.findIndex(
      (row) => row.id === selectedRow.id
    );

    const newRows = [...selectedRows];

    selectedIndex > -1
      ? newRows.splice(selectedIndex, 1)
      : newRows.push(selectedRow);

    return onSelect && onSelect(newRows.map((row) => row.id));
  };

  const handleClick = (rowId) => (evt) => {
    if (
      !Array.isArray(evt._dispatchInstances) &&
      typeof onClick === 'function'
    ) {
      return onClick(rowId);
    }
  };

  const getClickableRowProps = ({ row }) => {
    let props = {};
    if (
      selectType === SelectTypes.NONE &&
      typeof onClick === 'function' &&
      !row.disabled
    ) {
      props = {
        ...KeyHandler.createInteractionHandler(
          handleClick(row.id),
          [KeyHandler.handlers.onClick, KeyHandler.handlers.onKeyPress],
          [KeyHandler.keys.CLICK, KeyHandler.keys.ENTER]
        ),
        tabIndex: 0,
        role: 'button',
        'aria-label': ariaLabels[onClickAriaKey],
      };
    }
    return props;
  };

  function lookupAriaLabel(id) {
    return ariaLabels && ariaLabels[id];
  }

  /* eslint-disable react/prop-types */
  function renderTable({
    rows,
    headers,
    getHeaderProps,
    getRowProps,
    getSelectionProps,
    selectedRows,
    expandRow,
    selectRow: programatticSelect,
    getTableProps,
  }) {
    return (
      <TableContainer
        className={`${idePrefix}-data-table ${className}`}
        {...others}
      >
        {typeof renderToolbar === 'function' && (
          <TableToolbar>
            <TableToolbarContent>{renderToolbar()}</TableToolbarContent>
          </TableToolbar>
        )}
        {loading ? (
          <DataTableSkeleton
            headers={headers}
            rowCount={skeletonRowCount}
            columnCount={headers.length}
          />
        ) : (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {expandable && <TableExpandHeader />}
                {
                  {
                    [SelectTypes.MULTI]: (
                      <TableSelectAll
                        {...getSelectionProps({
                          onClick: selectAll(rows, selectedRows),
                        })}
                      />
                    ),
                    [SelectTypes.SINGLE]: <th />,
                    [SelectTypes.NONE]: null,
                  }[selectType]
                }
                {renderHeader
                  ? renderHeader(headers, getHeaderProps)
                  : headers.map((header) => {
                      const { key, ...headerProps } = getHeaderProps({
                        header,
                      });
                      return (
                        <TableHeader key={key} {...headerProps}>
                          {header.header}
                        </TableHeader>
                      );
                    })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                const { key, ...rowProps } = getRowProps({ row });
                const CustomTableRow =
                  expandable & !row.disabled ? TableExpandRow : TableRow;
                return (
                  <React.Fragment key={key}>
                    <CustomTableRow
                      {...rowProps}
                      {...getClickableRowProps({ row })}
                      {...idAttribute(`table-row-${index}`)}
                      key={key}
                    >
                      {expandable && row.disabled && <TableCell />}
                      {selectType != SelectTypes.NONE ? (
                        <TableSelectRow
                          {...getSelectionProps({
                            row,
                            onClick: selectRow(selectedRows, row),
                            id: `${row.id}-select`,
                          })}
                        />
                      ) : null}
                      {renderRow
                        ? renderRow(row, {
                            expandRow: () => expandRow(row.id),
                            selectRow: () => programatticSelect(row.id),
                          })
                        : row.cells.map((cell) => (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ))}
                    </CustomTableRow>
                    {row.isExpanded && (
                      <TableExpandedRow
                        colSpan={headers.length + 1}
                        key={`${key}-expanded`}
                      >
                        {renderExpandedRow(row)}
                      </TableExpandedRow>
                    )}
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    );
  }

  const table = (
    <DataTable
      headers={headers}
      rows={rows}
      render={renderTable}
      radio={selectType === SelectTypes.SINGLE}
      translateWithId={lookupAriaLabel}
      size={size}
    />
  );

  return table;
};

IdeDataTable.propTypes = {
  /** Pretranslated strings for each key to replace default aria labels on components */
  ariaLabels: PropTypes.shape({
    'carbon.table.row.expand': PropTypes.string,
    'carbon.table.row.collapse': PropTypes.string,
    'carbon.table.all.expand': PropTypes.string,
    'carbon.table.all.collapse': PropTypes.string,
    'carbon.table.all.select': PropTypes.string,
    'carbon.table.all.unselect': PropTypes.string,
    'carbon.table.row.select': PropTypes.string,
    'carbon.table.row.unselect': PropTypes.string,
    'ide.table.addition.row.click': PropTypes.string,
  }),
  className: PropTypes.string,
  /** Use carbon expandable rows */
  expandable: PropTypes.bool,
  /** Carbon IdeDataTable headers object */
  headers: PropTypes.arrayOf(PropTypes.object),
  /** render a loading skeleton */
  loading: PropTypes.bool,
  /** Callback for row click */
  onClick: PropTypes.func,
  /** Callback for row selection */
  onSelect: PropTypes.func,
  /** Custom function to render content for an expanded row */
  renderExpandedRow: PropTypes.func,
  /** Custom function to render header items */
  renderHeader: PropTypes.func,
  /** Custom function to render row cells */
  renderRow: PropTypes.func,
  /** Custom function to render content for table toolbar */
  renderToolbar: PropTypes.func,
  /** Carbon IdeDataTable rows object */
  rows: PropTypes.arrayOf(PropTypes.object),
  /** ["single", "multi", "none"] - selection type on the table */
  selectType: PropTypes.oneOf(Object.values(SelectTypes)),
  /** Carbon IdeDataTable size option */
  size: PropTypes.string,
  /** Number of loading rows */
  skeletonRowCount: PropTypes.number,
};

IdeDataTable.defaultProps = {
  selectType: SelectTypes.NONE,
  skeletonRowCount: 10,
  loading: false,
  expandable: false,
  ariaLabels: {},
  className: '',
};

IdeDataTable.TableCell = TableCell;
IdeDataTable.TableHeader = TableHeader;
IdeDataTable.TableToolbarSearch = TableToolbarSearch;
IdeDataTable.TableToolbarAction = TableToolbarAction;
IdeDataTable.TableToolbar = TableToolbar;

export {
  TableCell,
  TableHeader,
  TableToolbarSearch,
  TableToolbarContent,
  TableToolbarAction,
  TableToolbar,
};

export default IdeDataTable;
