/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useState } from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { DataSpreadsheet } from '.';
import { generateData } from './utils/generateData';

// cspell:words rowcount

const blockClass = `${pkg.prefix}--data-spreadsheet`;
const componentName = DataSpreadsheet.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const data = generateData({ rows: 16 });
const defaultProps = {
  columns: [
    {
      Header: 'Row 1',
      accessor: (row, index) => index,
    },
    {
      Header: 'Pet type',
      accessor: 'petType',
    },
    {
      Header: 'First name',
      accessor: 'firstName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Vet visits',
      accessor: 'visits',
    },
    {
      Header: 'Health',
      accessor: 'health',
    },
  ],
  data,
};

describe(componentName, () => {
  it('renders a component DataSpreadsheet', () => {
    render(<DataSpreadsheet {...defaultProps} />);
    expect(screen.getByRole('grid')).toHaveClass(blockClass);
  });

  it('applies className to the containing node', () => {
    render(<DataSpreadsheet className={className} {...defaultProps} />);
    expect(screen.getByRole('grid')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<DataSpreadsheet data-testid={dataTestId} {...defaultProps} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<DataSpreadsheet ref={ref} {...defaultProps} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<DataSpreadsheet data-testid={dataTestId} {...defaultProps} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('should call the onActiveCellChange event handler and check that the active cell element has the correct data row and data column attributes', () => {
    const ref = React.createRef();
    const activeCellChangeFn = jest.fn();
    const { click } = userEvent;
    render(
      <DataSpreadsheet
        {...defaultProps}
        ref={ref}
        onActiveCellChange={activeCellChangeFn}
      />
    );
    const allCells = ref?.current.querySelectorAll(`.${blockClass}__td`);
    const firstDataCell = Array.from(allCells)[1]; // the first cell is a row header so we need to get the second cell element
    click(firstDataCell);
    expect(activeCellChangeFn).toHaveBeenCalledTimes(1);
    const activeCellElement = ref?.current.querySelector(
      `.${blockClass}__active-cell--highlight`
    );
    expect(activeCellElement).toHaveAttribute('data-active-row-index', '0'); // active row index is 0 because it's the first cell
    expect(activeCellElement).toHaveAttribute('data-active-column-index', '0'); // active column index is 0 because it's the first cell
    const firstColumnHeader = ref?.current.querySelector(
      `[data-row-index="header"][data-column-index="0"]`
    );
    const firstRowHeader = ref?.current.querySelector(
      `[data-row-index="0"][data-column-index="header"]`
    );
    expect(firstColumnHeader).toHaveClass(`${blockClass}__th--active-header`);
    expect(firstRowHeader).toHaveClass(`${blockClass}__td-th--active-header`);
  });

  it('should select an entire row, adding a selection area', () => {
    const ref = React.createRef();
    const { click } = userEvent;
    const activeCellChangeFn = jest.fn();
    render(
      <DataSpreadsheet
        {...defaultProps}
        ref={ref}
        onActiveCellChange={activeCellChangeFn}
      />
    );
    const allCells = ref?.current.querySelectorAll(`.${blockClass}__td-th`);
    const firstRowHeaderCell = Array.from(allCells)[0]; // the first item is the first row header cell
    click(firstRowHeaderCell);
    expect(activeCellChangeFn).toHaveBeenCalledTimes(1);
    const selectionArea = ref?.current.querySelector(
      `.${blockClass}__selection-area--element`
    );
    expect(selectionArea).toBeInTheDocument();
  });

  it('should select an entire column, adding a selection area', () => {
    const ref = React.createRef();
    const { click } = userEvent;
    const activeCellChangeFn = jest.fn();
    const onSelectionAreaChangeFn = jest.fn();
    render(
      <DataSpreadsheet
        {...defaultProps}
        ref={ref}
        onActiveCellChange={activeCellChangeFn}
        onSelectionAreaChange={onSelectionAreaChangeFn}
      />
    );
    const allCells = ref?.current.querySelectorAll(`.${blockClass}__th`);
    const firstColumnHeaderCell = Array.from(allCells)[1]; // the second item is the first column header cell
    click(firstColumnHeaderCell);
    expect(activeCellChangeFn).toHaveBeenCalledTimes(1);
    const selectionArea = ref?.current.querySelector(
      `.${blockClass}__selection-area--element`
    );
    expect(firstColumnHeaderCell).toHaveClass(
      `${blockClass}__th--selected-header`
    );
    expect(selectionArea).toBeInTheDocument();
    expect(onSelectionAreaChangeFn).toHaveBeenCalledTimes(1);
  });

  it('should select all cells when clicking on select all cell button', () => {
    const ref = React.createRef();
    const { click } = userEvent;
    const activeCellChangeFn = jest.fn();
    const onSelectionAreaChangeFn = jest.fn();
    render(
      <DataSpreadsheet
        {...defaultProps}
        ref={ref}
        onActiveCellChange={activeCellChangeFn}
        onSelectionAreaChange={onSelectionAreaChangeFn}
      />
    );
    const selectAllButton = ref?.current.querySelector(
      `.${blockClass}__th--select-all`
    );
    click(selectAllButton);
    expect(activeCellChangeFn).toHaveBeenCalledTimes(1);
    const selectionArea = ref?.current.querySelector(
      `.${blockClass}__selection-area--element`
    );
    const activeCell = ref?.current.querySelector(
      `.${blockClass}__active-cell--highlight[data-active-row-index="0"][data-active-column-index="0"]`
    );
    expect(selectionArea).toBeInTheDocument();
    expect(activeCell).toBeInTheDocument();
    expect(onSelectionAreaChangeFn).toHaveBeenCalledTimes(1);
  });

  const EmptySpreadsheet = forwardRef(({ ...rest }, ref) => {
    const [data, setData] = useState([]);
    const columnsClone = [
      ...defaultProps.columns.filter((item) => item.Header !== 'Row 1'),
    ];
    return (
      <DataSpreadsheet
        {...defaultProps}
        {...rest}
        ref={ref}
        data={data}
        columns={columnsClone}
        onDataUpdate={setData}
      />
    );
  });

  it('should render an empty spreadsheet with 32 rows', async () => {
    const ref = React.createRef();
    const defaultEmptyRowCount = 32;
    render(
      <EmptySpreadsheet ref={ref} defaultEmptyRowCount={defaultEmptyRowCount} />
    );
    const ariaRowCountValue = ref?.current.getAttribute('aria-rowcount');
    expect(Number(ariaRowCountValue)).toEqual(defaultEmptyRowCount);
  });
});
