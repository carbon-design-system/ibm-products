/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { waitFor, within } from '@testing-library/dom';
import uuidv4 from '../../global/js/utils/uuidv4';
import { makeData } from './utils/makeData';

import { carbon, pkg } from '../../settings';
import { expectWarn, mockHTMLElement } from '../../global/js/utils/test-helper';
import { Datagrid } from '.';

import {
  useDatagrid,
  useInfiniteScroll,
  useSelectRows,
  useDisableSelectRows,
  useExpandedRow,
  useNestedRows,
  useSortableColumns,
  useOnRowClick,
  useCustomizeColumns,
  useSelectAllWithToggle,
  useRowIsMouseOver,
  useStickyColumn,
  useActionsColumn,
  useColumnOrder,
  useColumnRightAlign,
  useColumnCenterAlign,
  useEditableCell,
} from '.';

import {
  DataTable,
  Button,
  Pagination,
  TableBatchActions,
  TableBatchAction,
} from 'carbon-components-react';
import {
  Download16,
  Restart16,
  Filter16,
  Activity16,
  Add16,
  Edit16,
} from '@carbon/icons-react';

import { getInlineEditColumns } from './utils/getInlineEditColumns';
import {
  FilteringUsage,
  filterProps,
} from './Extensions/Filtering/Panel.stories';

// import { DatagridActions, DatagridBatchActions, DatagridPagination, } from './Datagrid.stories';

import namor from 'namor';

import userEvent from '@testing-library/user-event';

const dataTestId = uuidv4();

const componentName = Datagrid.displayName;

const blockClass = `${pkg.prefix}--datagrid`;

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

const DatagridBatchActions = (datagridState) => {
  const { selectedFlatRows, toggleAllRowsSelected } = datagridState;
  const totalSelected = selectedFlatRows && selectedFlatRows.length;
  const onBatchAction = () => alert('Batch action');
  const actionName = 'Action';
  return (
    <TableBatchActions
      shouldShowBatchActions={totalSelected > 0}
      totalSelected={totalSelected}
      onCancel={() => toggleAllRowsSelected(false)}
    >
      <TableBatchAction renderIcon={Activity16} onClick={onBatchAction}>
        {actionName}
      </TableBatchAction>
    </TableBatchActions>
  );
};

const BasicUsage = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid({
    columns,
    data,
    resizerAriaLabel: 'Custom column resizer label',
  });

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const DatagridActions = (datagridState) => {
  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
  } = datagridState;
  const downloadCsv = () => {
    alert('Downloading...');
  };
  const { TableToolbarContent, TableToolbarSearch } = DataTable;

  const refreshColumns = () => {
    alert('refreshing...');
  };
  const leftPanelClick = () => {
    alert('open/close left panel...');
  };
  const searchForAColumn = 'Search';
  const isNothingSelected = selectedFlatRows.length === 0;
  const style = {
    'button:nth-child(1) > span:nth-child(1)': {
      bottom: '-37px',
    },
  };
  return (
    isNothingSelected && (
      <React.Fragment>
        <Button
          kind="ghost"
          hasIconOnly
          tooltipPosition="bottom"
          renderIcon={Filter16}
          iconDescription={'Left panel'}
          onClick={leftPanelClick}
        />
        <TableToolbarContent>
          <TableToolbarSearch
            size="xl"
            id="columnSearch"
            persistent
            placeHolderText={searchForAColumn}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <RowSizeDropdown {...rowSizeDropdownProps} />
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={Restart16}
              iconDescription={'Refresh'}
              onClick={refreshColumns}
            />
          </div>
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={Download16}
              iconDescription={'Download CSV'}
              onClick={downloadCsv}
            />
          </div>
          {CustomizeColumnsButton && (
            <div style={style}>
              <CustomizeColumnsButton />
            </div>
          )}
        </TableToolbarContent>
      </React.Fragment>
    )
  );
};

const DatagridPagination = ({ state, setPageSize, gotoPage, rows }) => {
  const updatePagination = ({ page, pageSize }) => {
    setPageSize(pageSize);
    gotoPage(page - 1); // Carbon is non-zero-based
  };

  return (
    <Pagination
      page={state.pageIndex + 1} // react-table is zero-based
      pageSize={state.pageSize}
      pageSizes={state.pageSizes || [10, 20, 30, 40, 50]}
      totalItems={rows.length}
      onChange={updatePagination}
    />
  );
};

const EmptyUsage = ({ emptyStateType, ...rest }) => {
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
    emptyStateType,
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
      rowSize: 'lg',
      ...rest,
    },
    useInfiniteScroll
  );

  return <Datagrid datagridState={datagridState} />;
};

const IsHoverOnRow = () => {
  const Cell = ({ row }) => {
    if (row.isMouseOver) {
      return 'yes hovering!';
    }
    return '';
  };
  const columns = React.useMemo(
    () => [
      ...defaultHeader.slice(0, 3),
      {
        Header: 'Is hover on row?',
        id: 'isHoveringColumn',
        disableSortBy: true,
        Cell,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
    },
    useRowIsMouseOver
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
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

  return <Datagrid datagridState={datagridState} {...rest} />;
};

const SelectItemsInAllPages = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(100));
  const [areAllSelected, setAreAllSelected] = useState(false);
  const datagridState = useDatagrid(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
        pageSizes: [5, 10, 25, 50],
      },
      selectAllToggle: {
        labels: {
          allRows: 'Select all',
        },
        onSelectAllRows: setAreAllSelected,
      },
      DatagridPagination,
      DatagridActions,
      DatagridBatchActions,
    },
    useSelectRows,
    useSelectAllWithToggle
  );

  return (
    <>
      <Datagrid datagridState={{ ...datagridState }} {...rest} />
      <h3>Doc in Notes...</h3>
      <p>{`Are all selected across all pages? - ${areAllSelected}`}</p>
    </>
  );
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
      /*onRowSizeChange: (value) => {
      },*/
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

const CustomizingColumns = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ['age'],
        columnOrder: [],
      },
      /*customizeColumnsProps: {
        onSaveColumnPrefs: (newColDefs) => {
        },
      },*/
      DatagridActions,
      DatagridBatchActions,
    },
    useCustomizeColumns,
    useColumnOrder
  );

  return (
    <>
      <Datagrid datagridState={{ ...datagridState }} {...rest} />
      <div>
        Hidden column ids:
        <pre>{JSON.stringify(datagridState.state.hiddenColumns, null, 2)}</pre>
      </div>
      <p>
        More details in the <strong>Notes</strong> section
      </p>
    </>
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
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: 'Someone 11',
        accessor: 'someone11',
        disableSortBy: true,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      ascendingSortableLabelText: 'ascending',
      descendingSortableLabelText: 'descending',
      defaultSortableLabelText: 'none',
      ...rest,
    },
    useSortableColumns
  );

  return <Datagrid datagridState={datagridState} />;
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

const ClickableRow = ({ onRowClickFn, ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      onRowClick: onRowClickFn,
      ...rest,
    },
    useOnRowClick
  );

  return <Datagrid datagridState={datagridState} />;
};

const InfiniteScroll = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data, setData] = useState(makeData(0));

  const [isFetching, setIsFetching] = useState(false);
  const fetchData = () =>
    new Promise((resolve) => {
      setIsFetching(true);
      setTimeout(() => {
        setData(data.concat(makeData(30, 5, 2)));
        setIsFetching(false);
        resolve();
      }, 1000);
    });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const datagridState = useDatagrid(
    {
      columns,
      data,
      isFetching,
      fetchMoreData: fetchData,
    },
    useInfiniteScroll
  );

  return (
    <Wrapper>
      <Datagrid datagridState={{ ...datagridState }} />;
    </Wrapper>
  );
};

const InitialLoad = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data, setData] = useState(makeData(0));

  const [isFetching, setIsFetching] = useState(false);
  const fetchData = () =>
    new Promise((resolve) => {
      setIsFetching(true);
      setTimeout(() => {
        setData(data.concat(makeData(30, 5, 2)));
        resolve();
      }, 1000);
    }).then(() => setIsFetching(false));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const datagridState = useDatagrid({
    columns,
    data,
    isFetching,
  });

  return <Datagrid datagridState={{ ...datagridState }} />;
};

const WithPagination = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(100));
  const datagridState = useDatagrid({
    columns,
    data,
    initialState: {
      pageSize: 25,
      pageSizes: [5, 10, 25, 50],
    },
    DatagridPagination,
  });

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

const BatchActions = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      DatagridActions,
      DatagridBatchActions,
    },
    useSelectRows
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
};

const editActionClickFn = jest.fn();
const voteActionClickFn = jest.fn();
const retireActionClickFn = jest.fn();
const deleteActionClickFn = jest.fn();

const ActionsColumnExample = ({
  isFetching = false,
  shouldDisableMenuItem = null,
  shouldHideMenuItem = null,
  disabled = false,
  twoActions = false,
  sticky = 'right',
  ...rest
} = {}) => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: '',
        accessor: 'actions',
        sticky,
        width: 60,
        isAction: true,
      },
    ],
    [sticky]
  );
  const [data] = useState(makeData(10));
  const rowActions = [
    {
      id: 'edit',
      itemText: 'Edit',
      onClick: editActionClickFn,
      disabled,
      shouldHideMenuItem,
      shouldDisableMenuItem,
      renderIcon: Edit16
    },
    {
      id: 'vote',
      itemText: 'Vote',
      onClick: voteActionClickFn,
      renderIcon: Add16
    },
    {
      id: 'retire',
      itemText: 'Retire',
      onClick: retireActionClickFn,
    },
    {
      id: 'delete',
      itemText: 'Delete',
      hasDivider: true,
      isDelete: true,
      onClick: deleteActionClickFn,
    },
  ];

  const datagridState = useDatagrid(
    {
      columns,
      data,
      rowActions: !twoActions ? rowActions : [...rowActions].slice(0, 2),
      isFetching,
    },
    useStickyColumn,
    useActionsColumn
  );
  return <Datagrid datagridState={datagridState} {...rest} />;
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
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  it('check total column count', () => {
    render(<BasicUsage />);
    expect(screen.getAllByRole('columnheader').length).toEqual(
      defaultHeader.length
    );
  });

  it('renders a basic data grid component with devTools attribute', () => {
    render(<BasicUsage data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      Datagrid.displayName
    );

    expect(screen.getByRole('table')).toHaveClass(
      `${carbon.prefix}--data-table`
    );

    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('th').length
    ).toEqual(16);
    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr').length
    ).toEqual(10);
  });

  it('renders a basic table and resizes column', () => {
    const { keyboard, tab, click } = userEvent;
    render(<BasicUsage data-testid={dataTestId} />);
    const resizerInput = screen.getAllByLabelText(
      'Custom column resizer label'
    );
    expect(resizerInput.length).toEqual(defaultHeader.length);
    click(screen.getByTestId(dataTestId));
    tab();
    // Input range resizer now has focus
    keyboard('[ArrowRight]');
    const firstColumnHeader = screen.getAllByRole('columnheader')[0];
    const firstColumnWidth = firstColumnHeader.style.width;
    expect(parseInt(firstColumnWidth)).toEqual(152);
    keyboard('[ArrowRight]');
    const resizedFirstColumnHeader = screen.getAllByRole('columnheader')[0];
    const resizedFirstColumnWidth = resizedFirstColumnHeader.style.width;
    expect(parseInt(resizedFirstColumnWidth)).toEqual(154);
    keyboard('[ArrowLeft]');
    const revertResizedFirstColumnHeader =
      screen.getAllByRole('columnheader')[0];
    const revertResizedFirstColumnWidth =
      revertResizedFirstColumnHeader.style.width;
    expect(parseInt(revertResizedFirstColumnWidth)).toEqual(152);
  });

  it('renders a Batch Actions Table', () => {
    render(<BatchActions data-testid={dataTestId}></BatchActions>);

    var alertMock = jest.spyOn(window, 'alert');

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    );
    const tableBodyRows = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr');
    const numRows = tableBodyRows.length;

    for (var i = 0; i < numRows; i++) {
      expect(tableBodyRows[i].classList[1]).toEqual('bx--data-table--selected');
    }

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    );

    expect(
      document.getElementsByClassName('bx--search-input')[0]
    ).toBeDefined();

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[0]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Left panel');

    expect(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[1]
    ).toBeDefined();
    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[1]
    );

    const rowSizeDropDown = [
      'Extra large',
      'Large (default)',
      'Medium',
      'Small',
      'Extra small',
    ];
    const rowSize = document
      .getElementsByClassName('c4p--datagrid__row-size-dropdown')[0]
      .getElementsByTagName('div')[0]
      .getElementsByTagName('fieldset')[0]
      .getElementsByTagName('div').length;

    for (var k = 0; k < rowSize; k++) {
      expect(
        document
          .getElementsByClassName('c4p--datagrid__row-size-dropdown')[0]
          .getElementsByTagName('div')[0]
          .getElementsByTagName('fieldset')[0]
          .getElementsByTagName('div')
          .item(k)
          .getElementsByTagName('label')[0]
          .getElementsByTagName('span')[1].textContent
      ).toEqual(rowSizeDropDown[k]);
    }

    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('button')[0]
    );
    expect(alertMock).toHaveBeenCalledTimes(1);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[2]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Refresh');
    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[2]
    );
    expect(alertMock).toHaveBeenCalledTimes(2);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[3]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Download CSV');
    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[3]
    );
    expect(alertMock).toHaveBeenCalledTimes(3);

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    );

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('p')[0]
        .getElementsByTagName('span')[0].textContent
    ).toEqual('10 items selected');

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[0].textContent
    ).toEqual('Action');
    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[0]
    );

    expect(alertMock).toHaveBeenCalledTimes(4);

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[1].textContent
    ).toEqual('Cancel');
    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[1]
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
    const { rerender } = render(<EmptyUsage data-testid={dataTestId} />);
    screen.getAllByText('Empty State Title');
    screen.getByText('Description test explaining why this card is empty.');
    expect(screen.getByRole('img')).toHaveClass(
      `${pkg.prefix}--empty-state__illustration-noData`
    );

    rerender(<EmptyUsage emptyStateType="error" />);
    expect(screen.getByRole('img')).toHaveClass(
      `${pkg.prefix}--empty-state__illustration-error`
    );

    rerender(<EmptyUsage emptyStateType="notFound" />);
    expect(screen.getByRole('img')).toHaveClass(
      `${pkg.prefix}--empty-state__illustration-notFound`
    );

    rerender(<EmptyUsage emptyStateType="12345" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('Initial Load', () => {
    render(<InitialLoad data-testid={dataTestId}></InitialLoad>);
    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('th').length
    ).toEqual(16);
  });

  it('Infinite Scroll', () => {
    render(<InfiniteScroll data-testid={dataTestId}></InfiniteScroll>);

    expect(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('div')[0].classList[0]
    ).toBe('c4p--datagrid__virtual-scrollbar');
  });

  //Ten Thousand Entries
  it('renders Ten Thousand table entries', () => {
    const { rerender } = render(
      <TenThousandEntries data-testid={dataTestId} />
    );

    const tableBody =
      screen.getAllByRole('rowgroup')[1].firstElementChild.firstElementChild;
    const tableBodyHeight = tableBody.style.height;
    expect(parseInt(tableBodyHeight)).toEqual(480000);

    expect(
      parseInt(tableBodyHeight) / 48 // 48 is default row height
    ).toEqual(10000);

    rerender(
      <TenThousandEntries
        virtualHeight={400}
        data-testid={dataTestId}
        loadMoreThreshold={300}
      />
    );
    const rowGroups = screen.getAllByRole('rowgroup');
    const bodyRowGroup = rowGroups[1];
    const virtualScrollingElement = bodyRowGroup.firstElementChild;
    fireEvent.scroll(virtualScrollingElement, { target: { scrollY: 5000 } });
    expect(virtualScrollingElement.scrollLeft).toEqual(
      bodyRowGroup.previousElementSibling.scrollLeft
    );
  });

  it('With Pagination', () => {
    render(<WithPagination data-testid={dataTestId}></WithPagination>);

    expect(document.getElementById('bx-pagination-select-4')).toBeDefined();
    expect(document.getElementById('bx-pagination-select-6')).toBeDefined();
  });

  it('Clickable Row', async () => {
    const onRowClickFn = jest.fn();
    const { rerender } = render(
      <ClickableRow onRowClickFn={onRowClickFn} data-testid={dataTestId} />
    );
    const rows = screen.getAllByRole('row');
    const bodyRows = rows.filter(
      (r) =>
        !r.classList.contains(`${blockClass}__head`) &&
        !r.classList.contains(`${blockClass}__expanded-row`)
    );

    const firstBodyRow = bodyRows[0];

    fireEvent.click(firstBodyRow);
    expect(onRowClickFn).toHaveBeenCalledTimes(1);

    rerender(
      <ClickableRow
        isFetching
        onRowClickFn={onRowClickFn}
        data-testid={dataTestId}
      />
    );
    const newRows = screen.getAllByRole('row');
    const newBodyRows = newRows.filter(
      (r) =>
        !r.classList.contains(`${blockClass}__head`) &&
        !r.classList.contains(`${blockClass}__expanded-row`)
    );
    const newBodyRow = newBodyRows[0];
    newBodyRow.focus();
    const { keyboard } = userEvent;
    keyboard('{Enter}');
    expect(onRowClickFn).toHaveBeenCalledTimes(2);
    newBodyRow.focus();
    keyboard('{Shift}');
    expect(onRowClickFn).toHaveBeenCalledTimes(2);
  });

  function completeHoverOperation(rowNumber) {
    userEvent.hover(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')
        .item(rowNumber)
        .getElementsByTagName('td')[3]
    );

    setTimeout(() => {
      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')
          .item(rowNumber)
          .getElementsByTagName('td')[3].textContent
      ).toBe('yes hovering!');
    }, 300);

    userEvent.unhover(
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[rowNumber]
    );
    setTimeout(() => {
      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')
          .item(rowNumber)
          .getElementsByTagName('td')[3].textContent
      ).toBe('');
    }, 300);
  }

  it('Is Hover On Row', () => {
    render(<IsHoverOnRow data-testid={dataTestId}></IsHoverOnRow>);
    completeHoverOperation(1);

    completeHoverOperation(5);
  });

  //Disables Selected Rows
  it('Renders Disable Select Row', () => {
    render(<DisableSelectRow data-testid={dataTestId}></DisableSelectRow>);

    var alertMock = jest.spyOn(window, 'alert');

    expect(
      document.getElementsByClassName('bx--search-input')[0]
    ).toBeDefined();

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[0]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Left panel');

    expect(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[1]
    ).toBeDefined();
    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[1]
    );

    const rowSizeDropDown = [
      'Extra large',
      'Large (default)',
      'Medium',
      'Small',
      'Extra small',
    ];
    const rowSize = document
      .getElementsByClassName('c4p--datagrid__row-size-dropdown')[0]
      .getElementsByTagName('div')[0]
      .getElementsByTagName('fieldset')[0]
      .getElementsByTagName('div').length;

    for (var k = 0; k < rowSize; k++) {
      expect(
        document
          .getElementsByClassName('c4p--datagrid__row-size-dropdown')[0]
          .getElementsByTagName('div')[0]
          .getElementsByTagName('fieldset')[0]
          .getElementsByTagName('div')
          .item(k)
          .getElementsByTagName('label')[0]
          .getElementsByTagName('span')[1].textContent
      ).toEqual(rowSizeDropDown[k]);
    }

    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('button')[0]
    );
    expect(alertMock).toHaveBeenCalledTimes(1);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[2]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Refresh');
    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[2]
    );
    expect(alertMock).toHaveBeenCalledTimes(2);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[3]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Download CSV');
    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[3]
    );
    expect(alertMock).toHaveBeenCalledTimes(3);

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

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('p')[0]
        .getElementsByTagName('span')[0].textContent
    ).toEqual('1 item selected');

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[0].textContent
    ).toEqual('Action');
    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[0]
    );

    expect(alertMock).toHaveBeenCalledTimes(4);

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[1].textContent
    ).toEqual('Cancel');
    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[1]
    );

    fireEvent.click(clickableRow);
  });

  async function clickRow(rowNumber, triggerAnotherExpander) {
    const { click } = userEvent;
    const rows = screen.getAllByRole('row');
    const bodyRows = rows.filter(
      (r) =>
        !r.classList.contains(`${blockClass}__head`) &&
        !r.classList.contains(`${blockClass}__expanded-row`)
    );
    const row = bodyRows[rowNumber];

    const rowExpander = within(row).getByLabelText('Expand row');
    await waitFor(() => click(rowExpander));

    expect(row.nextElementSibling).toHaveClass(`${blockClass}__expanded-row`);
    expect(row.nextElementSibling.textContent).toEqual(
      `Content for ${rowNumber}`
    );

    if (triggerAnotherExpander) {
      const nextRow = bodyRows[rowNumber + 1];
      const nextRowExpanderExpand =
        within(nextRow).getByLabelText('Expand row');
      fireEvent.click(nextRowExpanderExpand);
      return;
    }

    const rowExpanderCollapse = within(row).getByLabelText('Collapse row');
    fireEvent.click(rowExpanderCollapse);
  }

  it('should render with expandable rows and test by toggling the row open and closed', () => {
    render(<ExpandedRow data-testid={dataTestId} />);
    clickRow(1);
    clickRow(4);
    clickRow(8, true);
  });

  function hideSelectAll(rowNumber) {
    const gridRows = screen.getAllByRole('row');
    const bodyRows = gridRows.filter(
      (r) => !r.classList.contains(`${blockClass}__head`)
    );
    const row = bodyRows[rowNumber];
    const rowCheckbox = within(row).getByRole('checkbox');

    fireEvent.click(rowCheckbox);
    expect(Array.from(row.classList)).toContain(
      `${carbon.prefix}--data-table--selected`
    );

    fireEvent.click(rowCheckbox);
    expect(Array.from(row.classList)).toContain(`${blockClass}__carbon-row`);
  }

  it('should test that selectable rows toggle the correct class when they are selected and unselected', () => {
    render(<HideSelectAll data-testid={dataTestId} />);
    hideSelectAll(2);
    hideSelectAll(5);
    hideSelectAll(8);
  });

  it('Nested Rows', () => {
    render(<NestedRows data-testid={dataTestId} />);

    const gridRows = screen.getAllByRole('row');
    const bodyRows = gridRows.filter(
      (r) => !r.classList.contains(`${blockClass}__head`)
    );
    const firstBodyRow = bodyRows[0];
    const firstRowExpander = within(firstBodyRow).getByLabelText('Expand row');
    fireEvent.click(firstRowExpander);
    expect(firstBodyRow).toHaveClass(`${blockClass}__carbon-row-expanded`);

    const newAllRows = screen.getAllByRole('row');
    const newBodyRows = newAllRows.filter(
      (r) => !r.classList.contains(`${blockClass}__head`)
    );
    const nestedRow = newBodyRows[1];

    if (nestedRow.className === `${blockClass}__carbon-nested-row`) {
      const nestedRowExpander = within(nestedRow).getByLabelText('Expand row');
      fireEvent.click(nestedRowExpander);
    }

    expect(nestedRow).toHaveClass(`${blockClass}__carbon-nested-row`);
  });

  it('Nested Table', () => {
    render(<NestedTable data-testid={dataTestId} />);
    const firstRowExpander = screen.getAllByLabelText('Expand row')[0];
    const firstRow = screen.getAllByRole('row')[1];
    fireEvent.click(firstRowExpander);
    expect(firstRow.nextSibling).toHaveClass('c4p--datagrid__expanded-row');

    const alertMock = jest.spyOn(window, 'alert');

    fireEvent.click(
      screen
        .getAllByRole('table')[0]
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[4]
    );

    setTimeout(() => {
      expect(alertMock).toHaveBeenCalledTimes(1);
    }, 1000);
  });

  function radioSelectButton(previousRowNumber, currentRowNumber) {
    if (
      screen
        .getByRole('table')
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')[previousRowNumber].classList[1] ===
      'bx--data-table--selected'
    ) {
      fireEvent.click(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')
          .item(currentRowNumber)
          .getElementsByTagName('td')[0]
          .getElementsByTagName('div')[0]
          .getElementsByTagName('input')[0]
      );

      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')[currentRowNumber].classList[1]
      ).toEqual('bx--data-table--selected');

      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')[previousRowNumber].classList[1]
      ).toBeUndefined();
    } else {
      fireEvent.click(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')
          .item(currentRowNumber)
          .getElementsByTagName('td')[0]
          .getElementsByTagName('div')[0]
          .getElementsByTagName('input')[0]
      );

      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')[currentRowNumber].classList[1]
      ).toEqual('bx--data-table--selected');
    }
  }

  it('Radio Select', () => {
    render(<RadioSelect data-testid={dataTestId}></RadioSelect>);
    radioSelectButton(1, 1);

    radioSelectButton(1, 4);

    radioSelectButton(4, 7);

    radioSelectButton(2, 6);
  });

  it('Select Items In All Pages', () => {
    const alertMock = jest.spyOn(window, 'alert');

    render(
      <SelectItemsInAllPages data-testid={dataTestId}></SelectItemsInAllPages>
    );
    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    );

    var numRows = screen
      .getByRole('table')
      .getElementsByTagName('tbody')[0]
      .getElementsByTagName('tr').length;

    for (var i = 0; i < numRows; i++) {
      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')[i].classList[1]
      ).toEqual('bx--data-table--selected');
    }

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    );
    for (var j = 0; j < numRows; j++) {
      expect(
        screen
          .getByRole('table')
          .getElementsByTagName('tbody')[0]
          .getElementsByTagName('tr')[j].classList[0]
      ).toEqual('c4p--datagrid__carbon-row');
    }

    expect(
      document.getElementsByClassName('c4p--datagrid__table-toolbar').length
    ).toBe(1);
    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[0]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Left panel');

    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[0]
    );
    expect(alertMock).toHaveBeenCalledTimes(1);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[1]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Row settings');

    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[1]
    );
    expect(
      document.getElementsByClassName(
        'c4p--datagrid__row-size-button--open bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[0]
    ).toBeDefined();
    expect(
      document.getElementsByClassName('c4p--datagrid__row-size-dropdown')
    ).toBeDefined();
    expect(
      document
        .getElementsByClassName(
          'bx--radio-button-group bx--radio-button-group--vertical bx--radio-button-group--label-right'
        )[0]
        .getElementsByTagName('legend')[0].textContent
    ).toEqual('Row settings');

    var rowDropDown = [
      'Extra large',
      'Large (default)',
      'Medium',
      'Small',
      'Extra Small',
    ];

    var rowSize = document
      .getElementsByClassName(
        'bx--radio-button-group bx--radio-button-group--vertical bx--radio-button-group--label-right'
      )[0]
      .getElementsByTagName('div').length;

    for (let j = 0; i < rowSize; i++) {
      expect(
        document
          .getElementsByClassName(
            'bx--radio-button-group bx--radio-button-group--vertical bx--radio-button-group--label-right'
          )[0]
          .getElementsByTagName('div')
          .item(j)
          .getElementsByTagName('label')[0]
          .getElementsByTagName('span')[0].textContent
      ).toEqual(rowDropDown[j]);
    }

    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('input')[0]
    );

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('p')[0]
        .getElementsByTagName('span')[0].textContent
    ).toEqual('10 items selected');
    fireEvent.click(
      screen
        .getByRole('table')
        .getElementsByTagName('thead')[0]
        .getElementsByTagName('tr')[0]
        .getElementsByTagName('th')[0]
        .getElementsByTagName('button')[0]
    );

    expect(
      document
        .getElementsByClassName('bx--overflow-menu-options__btn')[0]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Select all on page');
    fireEvent.click(
      document.getElementsByClassName('bx--overflow-menu-options__btn')[0]
    );

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[0].textContent
    ).toEqual('Action');
    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[0]
    );

    expect(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[1].textContent
    ).toEqual('Cancel');
    fireEvent.click(
      document
        .getElementsByClassName('c4p--datagrid__table-toolbar')[0]
        .getElementsByTagName('section')[0]
        .getElementsByTagName('div')[0]
        .getElementsByTagName('div')[1]
        .getElementsByTagName('button')[1]
    );

    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[1]
    );

    expect(alertMock).toHaveBeenCalledTimes(2);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[0]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Left panel');

    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[0]
    );

    expect(alertMock).toHaveBeenCalledTimes(3);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[2]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Refresh');

    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[2]
    );

    expect(alertMock).toHaveBeenCalledTimes(4);

    expect(
      document
        .getElementsByClassName(
          'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
        )[3]
        .getElementsByTagName('div')[0].textContent
    ).toEqual('Download CSV');

    fireEvent.click(
      document.getElementsByClassName(
        'bx--btn bx--btn--ghost bx--tooltip--hidden bx--btn--icon-only bx--tooltip__trigger bx--tooltip--a11y bx--btn--icon-only--bottom bx--tooltip--align-center'
      )[3]
    );
  });

  const rightAlignedColumnsData = [
    ...defaultHeader.slice(0, 3),
    {
      Header: 'Age',
      accessor: 'age',
      rightAlignedColumn: true,
      disableSortBy: true,
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      rightAlignedColumn: true,
    },
  ];

  const centerAlignedColumnsData = [
    ...defaultHeader.slice(0, 3),
    {
      Header: () => <span>Age</span>,
      accessor: 'age',
      rightAlignedColumn: true,
      disableSortBy: true,
    },
    {
      Header: 'Visits',
      accessor: 'visits',
      centerAlignedColumn: true,
    },
  ];

  const CustomAlignColumns = ({ customCols }) => {
    const [data] = useState(makeData(10));
    const datagridState = useDatagrid(
      {
        columns: customCols,
        data,
      },
      useColumnRightAlign,
      useColumnCenterAlign,
      useSortableColumns
    );

    return <Datagrid datagridState={{ ...datagridState }} />;
  };

  it('should render right aligned columns', () => {
    render(
      <CustomAlignColumns
        customCols={rightAlignedColumnsData}
        data-testid={dataTestId}
      />
    );

    const ageColIndex = rightAlignedColumnsData.findIndex(
      (i) => i.accessor === 'age'
    );
    const visitsColIndex = rightAlignedColumnsData.findIndex(
      (i) => i.accessor === 'visits'
    );

    const gridRows = screen.getAllByRole('row');
    const bodyRows = gridRows.filter(
      (r) => !r.classList.contains(`${blockClass}__head`)
    );
    const bodyAgeCell = bodyRows[0].childNodes[ageColIndex].firstChild;
    const bodyVisitsCell = bodyRows[0].childNodes[visitsColIndex].firstChild;
    expect(bodyAgeCell).toHaveClass(`${blockClass}__right-align-cell-renderer`);
    expect(bodyAgeCell).toHaveClass(`sortDisabled`);
    expect(bodyVisitsCell).toHaveClass(
      `${blockClass}__right-align-cell-renderer`
    );
  });

  it('should render center aligned columns', async () => {
    render(
      <CustomAlignColumns
        customCols={centerAlignedColumnsData}
        data-testid={dataTestId}
      />
    );

    const ageColIndex = centerAlignedColumnsData.findIndex(
      (i) => i.accessor === 'age'
    );
    const visitsColIndex = centerAlignedColumnsData.findIndex(
      (i) => i.accessor === 'visits'
    );

    const gridRows = screen.getAllByRole('row');
    const bodyRows = gridRows.filter(
      (r) => !r.classList.contains(`${blockClass}__head`)
    );
    const bodyAgeCell = bodyRows[0].childNodes[ageColIndex].firstChild;
    const bodyVisitsCell = bodyRows[0].childNodes[visitsColIndex].firstChild;
    expect(bodyAgeCell).toHaveClass(`${blockClass}__right-align-cell-renderer`);
    expect(bodyAgeCell).toHaveClass(`sortDisabled`);
    expect(bodyVisitsCell).toHaveClass(
      `${blockClass}__center-align-cell-renderer`
    );
  });

  it('should test interactions within toolbar, including row size dropdown', () => {
    const { click } = fireEvent;
    const { keyboard } = userEvent;
    render(<RowSizeDropdown data-testid={dataTestId} />);

    const alertMock = jest.spyOn(window, 'alert');

    // 'Select all rows in the table'
    // Click select all rows checkbox
    const selectAllCheckbox = screen.getByLabelText(
      'Select all rows in the table'
    );
    click(selectAllCheckbox);

    // Count number of rows
    const tableRows = screen.getAllByRole('row');
    const bodyRows = tableRows.filter(
      (row) => !row.classList.contains(`${blockClass}__head`)
    );

    bodyRows.forEach((bodyRow) => {
      expect(bodyRow).toHaveClass(`${carbon.prefix}--data-table--selected`);
    });

    screen.getByText('10 items selected');

    // Find and click Refresh button
    const actionButton = screen.getByText('Action');
    click(actionButton);
    expect(alertMock).toHaveBeenCalled();

    // Find and click cancel button
    const cancelButton = screen.getByText('Cancel');
    click(cancelButton);
    expect(alertMock).toHaveBeenCalled();

    click(screen.getByLabelText('Row settings').parentElement);
    expect(screen.getByLabelText('Row settings').parentElement).toHaveClass(
      `${blockClass}__row-size-button--open`
    );
    keyboard('[Escape]');
    expect(screen.getByLabelText('Row settings')).not.toHaveClass(
      `${blockClass}__row-settings-trigger--open`
    );
    click(screen.getByLabelText('Row settings').parentElement);
    keyboard('[ArrowUp]');
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveClass(`${carbon.prefix}--data-table--xs`);
    userEvent.tab();
    fireEvent.focusOut(
      screen.getByLabelText('Row settings').parentElement.parentElement
    );
    expect(screen.getByLabelText('Row settings').parentElement).not.toHaveClass(
      `${blockClass}__row-size-button--open`
    );
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

  it('should render sortable columns and toggle between sortable states for all column headers', () => {
    const { click } = userEvent;
    render(<SortableColumns data-testid={dataTestId} />);

    const rows = screen.getAllByRole('row');
    const headerRow = rows[0];
    const columnHeaders = within(headerRow).getAllByRole('columnheader');

    Array.from(columnHeaders).map(async (colHeader, index) => {
      // The last column definition opts out of sorting by specifying `disableSortBy`
      // so we should not include testing for the last column header
      if (index === defaultHeader.length) {
        return;
      }
      const sortableColumnHeaderButton = within(colHeader).getByRole('button');
      click(sortableColumnHeaderButton);
      await new Promise((resolve) => setTimeout(() => resolve(), 0));
      expect(sortableColumnHeaderButton.getAttribute('aria-sort')).toEqual(
        'ascending'
      );
      click(sortableColumnHeaderButton);
      await new Promise((resolve) => setTimeout(() => resolve(), 0));
      expect(sortableColumnHeaderButton.getAttribute('aria-sort')).toEqual(
        'descending'
      );
      click(sortableColumnHeaderButton);
      await new Promise((resolve) => setTimeout(() => resolve(), 0));
      expect(sortableColumnHeaderButton.getAttribute('aria-sort')).toEqual(
        'none'
      );
    });
  });

  it('Customizing Columns', () => {
    render(<CustomizingColumns data-testid={dataTestId}></CustomizingColumns>);

    const alertMock = jest.spyOn(window, 'alert');

    const leftPanelButton = screen.getByLabelText('Left panel');
    fireEvent.click(leftPanelButton);
    expect(alertMock).toHaveBeenCalledTimes(1);

    const refreshButton = screen.getByLabelText('Refresh');
    fireEvent.click(refreshButton);
    expect(alertMock).toHaveBeenCalledTimes(2);

    const downloadButton = screen.getByLabelText('Download CSV');
    fireEvent.click(downloadButton);
    expect(alertMock).toHaveBeenCalledTimes(3);

    const customizeColumnsButton = screen.getByLabelText('Customize columns');
    fireEvent.click(customizeColumnsButton);
    screen.getByRole('heading', { name: /Customize columns/ });
  });

  it('Top Alignment', () => {
    render(<TopAlignment data-testid={dataTestId} />);

    expect(screen.getByRole('table')).toHaveClass(
      `${blockClass}__vertical-align-top`
    );
  });

  const getOverflowMenuItems = () => {
    return document.querySelectorAll(
      `.${carbon.prefix}--overflow-menu-options button`
    );
  };

  it('should render sticky action column and click each menu item', () => {
    const { click } = userEvent;
    render(<ActionsColumnExample data-testid={dataTestId} />);

    const tableRows = screen.getAllByRole('row');
    const headerRow = tableRows[0];
    const bodyRows = tableRows.filter(
      (row) => !row.classList.contains(`${blockClass}__head`)
    );

    expect(headerRow).toHaveClass(`${blockClass}__sticky`);
    bodyRows.forEach((row) => {
      const stickyActionColumnCell = row.lastElementChild;
      expect(stickyActionColumnCell).toHaveClass(
        `${blockClass}__actions-column-cell`
      );
      expect(stickyActionColumnCell).toHaveClass(
        `${blockClass}__right-sticky-column-cell`
      );
    });

    const overflowMenu = within(bodyRows[0]).getByRole('button', {
      name: 'Open and close list of options',
    });
    click(overflowMenu);

    // Click each item inside of overflow menu, menu closes after clicking on a menu item
    // so we need to click the overflow menu again each time to view the menu items again
    const editActionButton = Array.from(getOverflowMenuItems()).filter(
      (item) => item.textContent === 'Edit'
    )[0];
    click(editActionButton);
    expect(editActionClickFn).toHaveBeenCalledTimes(1);

    click(overflowMenu);
    const voteActionButton = Array.from(getOverflowMenuItems()).filter(
      (item) => item.textContent === 'Vote'
    )[0];
    click(voteActionButton);
    expect(voteActionClickFn).toHaveBeenCalledTimes(1);

    click(overflowMenu);
    const retireActionButton = Array.from(getOverflowMenuItems()).filter(
      (item) => item.textContent === 'Retire'
    )[0];
    click(retireActionButton);
    expect(retireActionClickFn).toHaveBeenCalledTimes(1);

    click(overflowMenu);
    const deleteActionButton = Array.from(getOverflowMenuItems()).filter(
      (item) => item.textContent === 'Delete'
    )[0];
    click(deleteActionButton);
    expect(deleteActionClickFn).toHaveBeenCalledTimes(1);
  });

  it('should render stick actions and test disabled states', () => {
    const { click } = userEvent;
    const { rerender } = render(
      <ActionsColumnExample disabled data-testid={dataTestId} />
    );
    const tableRows = screen.getAllByRole('row');
    const bodyRows = tableRows.filter(
      (row) => !row.classList.contains(`${blockClass}__head`)
    );
    const overflowMenu = within(bodyRows[0]).getByRole('button', {
      name: 'Open and close list of options',
    });
    click(overflowMenu);

    const deleteActionButton = Array.from(getOverflowMenuItems()).filter(
      (item) => item.textContent === 'Edit'
    )[0];

    expect(deleteActionButton).toHaveAttribute('disabled');

    // Test that shouldDisableMenuItem function successfully disables a menu item
    const disableActionItemFn = jest.fn(() => true);
    rerender(
      <ActionsColumnExample
        shouldDisableMenuItem={disableActionItemFn}
        data-testid={dataTestId}
      />
    );
    click(overflowMenu);
    expect(disableActionItemFn).toHaveBeenCalled();
    expect(deleteActionButton).toHaveAttribute('disabled');

    // Test that shouldHideMenuItem function successfully hides a menu item
    const hideActionItemFn = jest.fn(() => true);
    rerender(
      <ActionsColumnExample
        shouldHideMenuItem={hideActionItemFn}
        data-testid={dataTestId}
      />
    );
    click(overflowMenu);
    expect(hideActionItemFn).toHaveBeenCalled();
    expect(getOverflowMenuItems().length).toEqual(3); // Previously was 4, but we've hidden the delete action in this test
  });

  it('should render a non sticky actions column and click each menu item', () => {
    render(<ActionsColumnExample sticky={null} data-testid={dataTestId} />);

    const tableRows = screen.getAllByRole('row');
    const bodyRows = tableRows.filter(
      (row) => !row.classList.contains(`${blockClass}__head`)
    );

    bodyRows.forEach((row) => {
      const actionColumnCell = row.lastElementChild;
      expect(actionColumnCell).toHaveClass(
        `${blockClass}__actions-column-cell`
      );
      expect(actionColumnCell).not.toHaveClass(
        `${blockClass}__right-sticky-column-cell`
      );
    });
  });

  it('should click non sticky row action when not inside of overflow menu', async () => {
    const { rerender } = render(
      <ActionsColumnExample
        isFetching={true}
        twoActions
        sticky={null}
        data-testid={dataTestId}
      />
    );
    const { click } = userEvent;
    const tableRows = screen.getAllByRole('row');
    const bodyRows = tableRows.filter(
      (row) => !row.classList.contains(`${blockClass}__head`)
    );
    const firstBodyRow = bodyRows[0];
    const lastCellElement = firstBodyRow.lastElementChild;
    const iconSkeletonElement = lastCellElement.children[0].children[0];
    expect(iconSkeletonElement).toHaveClass(`${carbon.prefix}--icon--skeleton`);
    expect(iconSkeletonElement).toHaveClass(
      `${blockClass}__actions-column-loading`
    );

    rerender(
      <ActionsColumnExample
        isFetching={false}
        twoActions
        sticky={null}
        data-testid={dataTestId}
      />
    );
    const editActionButton = within(firstBodyRow).getByRole('button', {
      name: 'Edit',
    });
    const voteActionButton = within(firstBodyRow).getByRole('button', {
      name: 'Vote',
    });
    click(editActionButton);
    expect(editActionClickFn).toHaveBeenCalledTimes(1);
    click(voteActionButton);
    expect(voteActionClickFn).toHaveBeenCalledTimes(1);

    const hideIconOnlyItem = jest.fn(() => true);
    rerender(
      <ActionsColumnExample
        isFetching={false}
        shouldHideMenuItem={hideIconOnlyItem}
        twoActions
        sticky={null}
        data-testid={dataTestId}
      />
    );
    expect(within(firstBodyRow).getAllByRole('button').length).toEqual(1); // Previously was 2 but we've hidden the other in this test
  });

  const EditableCellUsage = ({ ...args }) => {
    const [data, setData] = useState(makeData(3));
    const columns = React.useMemo(() => getInlineEditColumns(), []);
    pkg._silenceWarnings(false); // warnings are ordinarily silenced in storybook, add this to test.
    pkg.feature['Datagrid.useInlineEdit'] = true;
    pkg._silenceWarnings(true);

    const datagridState = useDatagrid(
      {
        columns,
        data,
        onDataUpdate: setData,
        ...args.defaultGridProps,
      },
      useEditableCell
    );

    // Warnings are ordinarily silenced in storybook, add this to test.
    pkg._silenceWarnings(false);
    pkg.feature['Datagrid.useEditableCell'] = true;
    pkg._silenceWarnings(true);

    return <Datagrid datagridState={datagridState} />;
  };

  it('should test the basic interactions of the editable cell datagrid', () => {
    const { click } = userEvent;
    const { container } = render(<EditableCellUsage />);
    const tableElement = screen.getByRole('grid');
    const rowButtons = screen.getAllByRole('button');
    const firstEditableCell = rowButtons[0];

    click(firstEditableCell);
    expect(firstEditableCell).toHaveClass(
      `${blockClass}__inline-edit-button--active`
    );
    click(container);
    expect(tableElement).not.toHaveClass(`${blockClass}__table-grid-active`);
  });

  it('should test basic interactions of filter panel', async () => {
    const { click } = userEvent;
    render(
      <FilteringUsage
        defaultGridProps={{
          gridTitle: 'Data table title',
          gridDescription: 'Additional information if needed',
          useDenseHeader: false,
          emptyStateTitle: 'No filters match',
          emptyStateDescription:
            'Data was not found with the current filters applied. Change filters or clear filters to see other results.',
          filterProps,
        }}
      />
    );
    const toolbar = screen.getByLabelText('data table toolbar').parentElement;
    const panelContainer = toolbar.nextElementSibling;
    const toolbarButtons = within(toolbar).getAllByRole('button');
    const filterToggleButton = toolbarButtons[0];
    // Open filter panel
    click(filterToggleButton);
    expect(panelContainer).toHaveClass(
      `${blockClass}__table-container--filter-open`
    );
  });
});

const duplicateOnClickFn = jest.fn();
const addOnClickFn = jest.fn();
const selectAllOnClickFn = jest.fn();
const publishOnClickFn = jest.fn();
const downloadOnClickFn = jest.fn();
const deleteOnClickFn = jest.fn();

const getBatchActions = () => {
  return [
    {
      label: 'Duplicate',
      renderIcon: Add16,
      onClick: duplicateOnClickFn,
    },
    {
      label: 'Add',
      renderIcon: Add16,
      onClick: addOnClickFn,
    },
    {
      label: 'Select all',
      renderIcon: Add16,
      onClick: selectAllOnClickFn,
      type: 'select_all',
    },
    {
      label: 'Publish to catalog',
      renderIcon: Add16,
      onClick: publishOnClickFn,
    },
    {
      label: 'Download',
      renderIcon: Add16,
      onClick: downloadOnClickFn,
    },
    {
      label: 'Delete',
      renderIcon: Add16,
      onClick: deleteOnClickFn,
      hasDivider: true,
      kind: 'danger',
    },
  ];
};

const TestBatch = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(2));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      batchActions: true,
      toolbarBatchActions: getBatchActions(),
      DatagridActions,
      DatagridPagination,
    },
    useSelectRows,
    useStickyColumn
  );

  return <Datagrid datagridState={datagridState} />;
};

describe('batch action testing', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
    //This will suppress the warning about Arrows16 Component (will be removed in the next major version of @carbon/icons-react).
    jest.spyOn(global.console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  window.innerWidth = 2000;
  let mockElement;

  const isTableToolbar = (el) => {
    return (
      el.classList?.contains(`${pkg.prefix}--datagrid__table-toolbar`) || false
    );
  };

  const setMockWidths = (el, type = 'large') => {
    let width = type === 'large' ? 2000 : type === 'medium' ? 1000 : 320;
    if (isTableToolbar(el)) {
      width = type === 'large' ? 3000 : type === 'medium' ? 1000 : 320;
    } else {
      width = type === 'large' ? 500 : type === 'medium' ? 400 : 320;
    }

    return width;
  };

  describe('with space for two actions and menu button', () => {
    beforeEach(() => {
      mockElement = mockHTMLElement({
        offsetWidth: {
          get: function () {
            return setMockWidths(this);
          },
        },
      });
      window.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      }));
    });

    afterEach(() => {
      mockElement.mockRestore();
      window.ResizeObserver = ResizeObserver;
    });

    // Resize observer or mocked widths not working as expected, changes batch action summary element
    // width to 0 which prevents the default batch action behavior from occurring
    it('renders batch action and checks for the appropriate rendering based on the current mocked widths', async () => {
      const { container } = render(<TestBatch />);
      const { click } = userEvent;
      const firstCheckbox = screen.getAllByLabelText('Toggle Row Selected')[0];
      click(firstCheckbox);
      expect(
        container.querySelector(
          `.${carbon.prefix}--batch-actions.${carbon.prefix}--batch-actions--active`
        )
      ).toBeInTheDocument();

      // Given the default offsetWidth mocks, 2 batch actions should be visible
      // in addition to the MenuButton
      click(screen.getByLabelText(getBatchActions()[0].label));
      expect(duplicateOnClickFn).toHaveBeenCalledTimes(1);

      click(screen.getByLabelText(getBatchActions()[1].label));
      expect(addOnClickFn).toHaveBeenCalledTimes(1);

      const menuButton = container.querySelector(`.${pkg.prefix}--button-menu`);
      const cancelButton = screen.getByRole('button', { name: /Cancel/i });
      expect(menuButton).toBeInTheDocument();
      click(menuButton);
      const options = Array.from(
        document.querySelector(`.${pkg.prefix}--button-menu__options`).children
      );
      const optionsText = options.map((o) => {
        return o.textContent;
      });
      const remainingBatchActions = [...getBatchActions()].slice(2);

      // Check that the items inside of the MenuButton match the leftover
      // batch action items
      remainingBatchActions.forEach((batchAction, index) => {
        expect(batchAction.label).toEqual(optionsText[index]);
      });

      const checkMenuItem = async (
        remainingBatchIndex,
        clickHandlerFn,
        initiateMenuOpen
      ) => {
        if (initiateMenuOpen) {
          click(menuButton);
        }
        const displayedMenuElement = document.querySelector(
          `.${pkg.prefix}--button-menu__options`
        );
        const menuItems = Array.from(displayedMenuElement.children);

        const menuItem = menuItems.filter(
          (item) =>
            item.textContent === getBatchActions()[remainingBatchIndex].label
        )[0];
        const menuItemButton = menuItem.firstElementChild;
        click(menuItemButton);
        expect(clickHandlerFn).toHaveBeenCalledTimes(1);
      };

      checkMenuItem(2, selectAllOnClickFn);
      checkMenuItem(3, publishOnClickFn, true);
      checkMenuItem(4, downloadOnClickFn, true);
      checkMenuItem(5, deleteOnClickFn, true);
      click(cancelButton);
      click(firstCheckbox);
    });

    it('renders batch action with select all and checks indeterminate behavior', () => {
      const { click } = userEvent;
      render(<TestBatch />);
      const bodyElement = screen.getAllByRole('rowgroup')[1];
      const allRows = screen.getAllByRole('row');
      const selectAllCheckbox = within(allRows[0]).getAllByRole('checkbox')[0];
      click(selectAllCheckbox);
      const carbonTableToolbar = screen.getByLabelText('data table toolbar');
      expect(carbonTableToolbar).toBeInTheDocument();
      const bodyRows = allRows.filter(
        (r) =>
          !r.classList.contains('c4p--datagrid__head') &&
          !r.classList.contains('c4p--datagrid__expanded-row')
      );
      const firstBodyRow = bodyRows[0];
      const firstRowCheckbox = within(firstBodyRow).getByRole('checkbox');
      click(firstRowCheckbox);

      // // // Should remove all checked checkboxes in the body
      const selectAll = screen.getAllByRole('checkbox')[0];
      click(selectAll);
      let totalChecked = 0;
      const allBodyCheckboxes = within(bodyElement).getAllByRole('checkbox');
      allBodyCheckboxes.forEach((c) => {
        if (c.checked) {
          totalChecked = totalChecked + 1;
        }
      });
      expect(totalChecked).toEqual(0);
    });
  });
});
