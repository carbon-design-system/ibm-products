/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import uuidv4 from '../../global/js/utils/uuidv4';
import { useDatagrid } from '.';
import { makeData, RightAlignedColumns } from './Datagrid.stories';

import { carbon } from '../../settings';
import { expectWarn } from '../../global/js/utils/test-helper';
import { Datagrid } from '.';

import {
  DatagridActions,
  DatagridBatchActions,
  DatagridPagination,
  useInfiniteScroll,
  useSelectRows,
  useDisableSelectRows,
  useExpandedRow,
  useNestedRows,
  useSortableColumns,
} from '.';

import namor from 'namor';

const dataTestId = uuidv4();

const componentName = Datagrid.displayName;

const defaultHeader = [
  {
    Header: 'Row Index',
    accessor: (row, i) => i,
    sticky: 'left',
    id: 'rowIndex', // id is required when accessor is a function.
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
    sticky: 'left',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 50,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    width: 60,
  },
  {
    Header: 'Someone 1',
    accessor: 'someone1',
  },
  {
    Header: 'Someone 2',
    accessor: 'someone2',
  },
  {
    Header: 'Someone 3',
    accessor: 'someone3',
  },
  {
    Header: 'Someone 4',
    accessor: 'someone4',
  },
  {
    Header: 'Someone 5',
    accessor: 'someone5',
  },
  {
    Header: 'Someone 6',
    accessor: 'someone6',
  },
  {
    Header: 'Someone 7',
    accessor: 'someone7',
  },
  {
    Header: 'Someone 8',
    accessor: 'someone8',
  },
  {
    Header: 'Someone 9',
    accessor: 'someone9',
  },
  {
    Header: 'Someone 10',
    accessor: 'someone10',
  },
];

const BasicUsage = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid({
    columns,
    data,
  });

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const EmptyUsage = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(0));
  const emptyStateTitle = 'Empty State Title';
  const emptyStateDescription =
    'Description test explaining why this card is empty.';
  const emptyStateSize = 'lg';
  const illustrationTheme = 'light';

  const dataGridState = useDatagrid({
    columns,
    data,
    emptyStateTitle,
    emptyStateDescription,
    emptyStateSize,
    illustrationTheme,
    DatagridActions,
    DatagridBatchActions,
    DatagridPagination,
  });

  return <Datagrid datagridState={{ ...dataGridState }} {...rest}></Datagrid>;
};

const TenThousandEntries = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10000));
  const datagridState = useDatagrid(
    {
      columns,
      data,
    },
    useInfiniteScroll
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const DisableSelectRow = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      DatagridActions,
      DatagridBatchActions,
      endPlugins: [useDisableSelectRows],
      shouldDisableSelectRow: (row) => row.id % 2 === 0,
      disableSelectAll: true,
    },
    useSelectRows
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const ExpandedRow = ({ ...rest }) => {
  const expansionRenderer = ({ row }) => <div>Content for {row.id}</div>;

  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      ExpandedRowContentComponent: expansionRenderer,
      expandedContentHeight: 95,
    },
    useExpandedRow
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const HideSelectAll = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      hideSelectAll: true,
    },
    useSelectRows
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div
    style={{
      height: '100vh',
      width: '100%',
      padding: '1rem',
      margin: '0',
      zIndex: '0',
    }}
  >
    {children}
  </div>
);

const LeftPanel = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid({
    columns,
    data,
    leftPanel: {
      isOpen: true, // this toggling will happen from datagridActions.
      panelContent: (
        <div>Panel content will go here along with any button interactions</div>
      ),
    },
    DatagridActions,
    DatagridBatchActions,
  });

  return (
    <Wrapper>
      <Datagrid datagridState={{ ...datagridState }} {...rest} />
    </Wrapper>
  );
};

const NestedRows = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10, 5, 2, 2));
  const datagridState = useDatagrid(
    {
      columns,
      data,
    },
    useNestedRows
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const NestedTable = ({ ...rest }) => {
  const [data] = useState(makeData(20));
  const nestedColumns = React.useMemo(() => [...defaultHeader], []);
  nestedColumns[0] = {
    Header: 'Row #',
    accessor: (row, i) => i,
    sticky: 'left',
  };
  const nestedDatagridState = useDatagrid({
    columns: nestedColumns,
    data,
    initialState: { pageSize: 10 },
    DatagridPagination,
  });

  const expansionRenderer = () => (
    <div className="carbon-nested-table">
      <Datagrid datagridState={{ ...nestedDatagridState }} />
    </div>
  );

  const columns = React.useMemo(() => defaultHeader, []);
  const datagridState = useDatagrid(
    {
      columns,
      data,
      ExpandedRowContentComponent: expansionRenderer,
      expandedContentHeight: (nestedDatagridState.state.pageSize + 2) * 48 + 1, // +2 for header and pagination
    },
    useExpandedRow
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const RadioSelect = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      hideSelectAll: true,
      radio: true,
      onRadioSelect: (row) => console.log(row),
      initialState: {
        selectedRowIds: {
          3: true,
        },
      },
    },
    useSelectRows
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const RowSizeDropdown = ({ ...rest }) => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader.slice(0, 3),
      {
        Header: 'Different cell content',
        id: 'rowSizeDemo-cell',
        disableSortBy: true,
        Cell: ({ rowSize }) => rowSize,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      rowSize: 'xs',
      rowSizes: [
        {
          value: 'xl',
          labelText: 'More than super',
        },
        {
          value: 'lg',
          labelText: 'Super tall row',
        },
        {
          value: 'md',
        },
        {
          value: 'xs',
          labelText: 'Teeny tiny row',
        },
      ],
      onRowSizeChange: (value) => {
        console.log('row size changed to: ', value);
      },
      DatagridActions,
      DatagridBatchActions,
    },
    useSelectRows
  );

  return (
    <Wrapper>
      <Datagrid datagridState={{ ...datagridState }} {...rest} />
    </Wrapper>
  );
};

const SelectableRow = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
    },
    useSelectRows
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const SortableColumns = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
    },
    useSortableColumns
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const newPersonWithTwoLines = () => {
  return {
    firstName: (
      <>
        <div>{namor.generate({ words: 1, numbers: 0 })}</div>
        <div>{namor.generate({ words: 1, numbers: 0 })}</div>
      </>
    ),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
  };
};

const makeDataWithTwoLines = (length) =>
  range(length).map(() => newPersonWithTwoLines());

const TopAlignment = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader.slice(0, 3), []);
  const [data] = useState(makeDataWithTwoLines(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      verticalAlign: 'top',
      variableRowHeight: true,
      rowSize: 'xs',
      rowSizes: [
        {
          value: 'xl',
        },
        {
          value: 'lg',
        },
        {
          value: 'md',
        },
        {
          value: 'xs',
        },
      ],
      DatagridActions,
      DatagridBatchActions,
    },
    useSelectRows
  );

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

beforeAll(() => {
  jest.spyOn(global.console, 'warn').mockImplementation((message) => {
    if (!message.includes('componentWillReceiveProps')) {
      global.console.warn(message);
    }
  });
});

describe(componentName, () => {
  beforeEach(() => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
    //This will suppress the warning about Arrows16 Component (will be removed in the next major version of @carbon/icons-react).
    jest.spyOn(global.console, 'warn').mockImplementation(() => {});
  });

  /*afterEach(() => {
     global.console.error.mockRestore();
   });*/

  it('renders a basic data grid component with devTools attribute', () => {
    render(<BasicUsage data-testid={dataTestId} />);
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      Datagrid.displayName
    );
  });

  it("renders a basic data grid validating use of Carbon's data table internally", () => {
    render(<BasicUsage data-testid={dataTestId} />);
    expect(screen.getByRole('table')).toHaveClass(
      `${carbon.prefix}--data-table`
    );
  });

  it('renders nothing and logs a warning to console if no datagridState is supplied', () => {
    expectWarn(
      'Datagrid was not passed datagridState which is required to render this component.',
      () => {
        const errorMock = jest
          .spyOn(console, 'error')
          .mockImplementation(() => {});
        const { container } = render(
          <BasicUsage data-testid={dataTestId} datagridState={null} />
        );
        expect(errorMock).toBeCalledWith(
          expect.stringMatching(
            /^Warning: Failed prop type: The prop `datagridState` is marked as required in `Datagrid`, but its value is `null`./
          )
        );
        expect(container.children.length).toEqual(0);
        jest.spyOn(console, 'error').mockRestore();
      }
    );
  });

  //Empty State
  it('renders an empty table', () => {
    render(<EmptyUsage data-testid={dataTestId}></EmptyUsage>);
    expect(
      screen.getByRole('table').getElementsByTagName('tbody')[0].className
    ).toEqual('c4p--datagrid__empty-state-body');
  });

  //Ten Thousand Entries
  it('renders Ten Thousand table entries', () => {
    render(<TenThousandEntries data-testid={dataTestId}></TenThousandEntries>);

    expect(
      parseInt(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('div')[0]
          .getElementsByTagName('div')[0].style.height,
        10
      )
    ).toEqual(480000);
  });

  //Disables Selected Rows
  it('Renders Disable Select Row', () => {
    render(<DisableSelectRow data-testid={dataTestId}></DisableSelectRow>);

    const unClickableRow = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[0];
    const clickableRow = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[1];

    expect(
      unClickableRow
        .getElementsByTagName('td')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    ).toHaveAttribute('disabled');

    clickableRow
      .getElementsByTagName('td')[0]
      .getElementsByTagName('div')[0]
      .getElementsByTagName('input')[0];

    fireEvent(
      clickableRow
        .getElementsByTagName('td')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('label')[0],
      new MouseEvent('click')
    );

    expect(clickableRow).toHaveClass('bx--data-table--selected');
  });

  it('Expanded Row', () => {
    render(<ExpandedRow data-testid={dataTestId}></ExpandedRow>);

    const row = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[0];
    fireEvent.click(
      row.getElementsByTagName('td')[0].getElementsByTagName('span')[0]
    );

    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('div')[0].classList['0']
    ).toEqual('c4p--datagrid__expanded-row');
  });

  it('Hide Select All', () => {
    render(<HideSelectAll data-testid={dataTestId}></HideSelectAll>);

    // screen.getByRole('table').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[0].getElementsByTagName('div')[0].getElementsByTagName('input')[0];
    // fireEvent.click(button);

    // const randomRow = Math.min(Math.random() * 10);

    const row = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[0];
    const button = row
      .getElementsByTagName('td')[0]
      .getElementsByTagName('div')[0]
      .getElementsByTagName('input')[0];

    fireEvent.click(button);

    expect(row.classList[1]).toEqual('bx--data-table--selected');
  });

  it('Left Panel', () => {
    render(<LeftPanel data-testid={dataTestId}></LeftPanel>);

    expect(
      screen.getByText(
        'Panel content will go here along with any button interactions'
      )
    ).toBeVisible();
    expect(
      screen.getByText(
        'Panel content will go here along with any button interactions'
      ).parentElement.classList[0]
    ).toEqual('c4p--datagrid__datagridLeftPanel');
  });

  it('Nested Rows', () => {
    render(<NestedRows data-testid={dataTestId}></NestedRows>);

    const row = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[0];
    const firstRow = row
      .getElementsByTagName('td')[0]
      .getElementsByTagName('span')[0];

    fireEvent.click(firstRow);

    expect(row.classList[1]).toEqual('c4p--datagrid__carbon-row-expanded');

    const nestedRow = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[1];

    if (nestedRow.className === 'c4p--datagrid__carbon-nested-row') {
      fireEvent.click(
        nestedRow.getElementsByTagName('td')[0].getElementsByTagName('span')[0]
      );
    }

    expect(nestedRow.classList[0]).toEqual('c4p--datagrid__carbon-nested-row');
  });

  it('Nested Table', () => {
    render(<NestedTable data-testid={dataTestId}></NestedTable>);

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('td')[0]
        .getElementsByTagName('span')[0]
    );
    expect(
      screen
        .getAllByRole('table')[0]
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('div')[0].classList[0]
    ).toEqual('c4p--datagrid__expanded-row');

    expect(
      screen
        .getAllByRole('table')[0]
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('div')[0].childNodes[1].classList[0]
    ).toEqual('carbon-nested-table');
  });

  it('Radio Select', () => {
    render(<RadioSelect data-testid={dataTestId}></RadioSelect>);

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('td')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    );

    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[0].classList[1]
    ).toEqual('bx--data-table--selected');
  });

  it('Right Aligned Columns', () => {
    render(
      <RightAlignedColumns data-testid={dataTestId}></RightAlignedColumns>
    );

    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('td')[4]
        .getElementsByTagName('div')[0].classList[0]
    ).toEqual('c4p--datagrid__right-align-cell-renderer');
  });

  it('Row Size Dropdown', () => {
    render(<RowSizeDropdown data-testid={dataTestId}></RowSizeDropdown>);

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('label')[0]
    );

    const rowSize = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr').length;

    //This checks to see if all the rows in the table have been selected.
    for (var i = 0; i < rowSize; i++) {
      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')[i].classList[1]
      ).toEqual('bx--data-table--selected');
    }

    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[0].classList[1]
    ).toEqual('bx--data-table--selected');
  });

  it('Selectable Row', () => {
    render(<SelectableRow data-testid={dataTestId}></SelectableRow>);

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('label')[0]
    );

    const rows = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
      expect(rows.item(i).classList[1]).toEqual('bx--data-table--selected');
    }

    //Un-Selects all the rows in the table.
    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('label')[0]
    );

    const selectIndividualRow = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr')[0];
    //Selects only one row (in this case, the first one).
    fireEvent.click(
      selectIndividualRow
        .getElementsByTagName('td')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('label')[0]
    );

    expect(selectIndividualRow.classList[1]).toEqual(
      'bx--data-table--selected'
    );
  });

  it('Sortable Columns', () => {
    render(<SortableColumns data-testid={dataTestId}></SortableColumns>);

    const headerRow = screen
      .getByRole('table')
      .getElementsByTagName('thead')[0]
      .getElementsByTagName('tr')[0];

    for (var i = 0; i < headerRow.getElementsByTagName('th').length - 1; i++) {
      fireEvent.click(
        headerRow
          .getElementsByTagName('th')
          .item(i)
          .getElementsByTagName('div')[0]
          .getElementsByTagName('button')[0]
      );
      expect(headerRow.getElementsByTagName('th')[i].classList[2]).toEqual(
        'c4p--datagrid__isSorted'
      );
    }
  });

  it('Top Alignment', () => {
    render(<TopAlignment data-testid={dataTestId}></TopAlignment>);

    expect(screen.getByRole('table').classList[2]).toEqual(
      'c4p--datagrid__vertical-align-top'
    );

    const topAlignmentRows = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr');

    const allRowsCheckBox = screen
      .getByRole('table')
      .getElementsByTagName('thead')[0]
      .getElementsByTagName('tr')[0]
      .getElementsByTagName('div')[0]
      .getElementsByTagName('th')[0]
      .getElementsByTagName('div')[0]
      .getElementsByTagName('input')[0];

    fireEvent.click(allRowsCheckBox);

    for (var i = 0; i < topAlignmentRows.length; i++) {
      expect(topAlignmentRows[i].classList[1]).toEqual(
        'bx--data-table--selected'
      );
    }

    fireEvent.click(allRowsCheckBox);

    for (var j = 0; j < topAlignmentRows.length; j++) {
      fireEvent.click(
        topAlignmentRows[j]
          .getElementsByTagName('td')[0]
          .getElementsByTagName('div')[0]
          .getElementsByTagName('input')[0]
      );
      expect(topAlignmentRows[j].classList[1]).toEqual(
        'bx--data-table--selected'
      );
    }
  });
});

//afterAll(() => consoleSpy.mockRestore());
