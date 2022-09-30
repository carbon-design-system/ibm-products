/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import { range, makeData, newPersonWithTwoLines } from './utils/makeData';
import { getInlineEditColumns } from './utils/getInlineEditColumns';

import { getStoryTitle } from '../../global/js/utils/story-helper';

import { action } from '@storybook/addon-actions';
import { Activity16, Add16 } from '@carbon/icons-react';
import { DataTable } from 'carbon-components-react';
import {
  Datagrid,
  useDatagrid,
  useInfiniteScroll,
  useRowIsMouseOver,
  useSelectRows,
  useSortableColumns,
  useDisableSelectRows,
  useCustomizeColumns,
  useSelectAllWithToggle,
  useStickyColumn,
  useActionsColumn,
  useColumnOrder,
  useInlineEdit,
} from '.';

import {
  CustomizeColumnStory,
  RowSizeDropdownStory,
  SelectAllWitHToggle,
  LeftPanelStory,
} from './Datagrid.stories';
import mdx from './Datagrid.mdx';

import { pkg } from '../../settings';

import styles from './_storybook-styles.scss';
import { DatagridActions } from './utils/DatagridActions';
import { DatagridPagination } from './utils/DatagridPagination';
import { Wrapper } from './utils/Wrapper';

export default {
  title: getStoryTitle(Datagrid.displayName),
  component: Datagrid,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
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

const { TableBatchAction, TableBatchActions } = DataTable;

export const BasicUsage = () => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: 'Someone 11',
        accessor: 'someone11',
        multiLineWrap: true,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));
  const rows = React.useMemo(() => data, [data]);

  const datagridState = useDatagrid({
    columns,
    data: rows,
  });

  return <Datagrid datagridState={datagridState} />;
};

export const EmptyState = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(0));
  const emptyStateTitle = 'Empty state title';
  const emptyStateDescription =
    'Description text explaining why this card is empty.';
  const emptyStateSize = 'lg';
  const illustrationTheme = 'light';

  const datagridState = useDatagrid({
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

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const InitialLoad = () => {
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
  }, []);

  const datagridState = useDatagrid({
    columns,
    data,
    isFetching,
  });

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const InfiniteScroll = () => {
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
      <Datagrid datagridState={{ ...datagridState }} />
    </Wrapper>
  );
};

export const TenThousandEntries = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10000));
  const datagridState = useDatagrid(
    {
      columns,
      data,
    },
    useInfiniteScroll
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const WithPagination = () => {
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

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const InlineEdit = () => {
  const [data, setData] = useState(makeData(10));
  const columns = React.useMemo(() => getInlineEditColumns(), []);
  const datagridState = useDatagrid(
    {
      columns,
      data,
      onDataUpdate: setData,
      DatagridActions,
    },
    useInlineEdit
  );
  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const IsHoverOnRow = () => {
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

export const SelectableRow = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      DatagridActions,
      batchActions: true,
      toolbarBatchActions: getBatchActions(),
    },
    useSelectRows,
    useStickyColumn
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const RadioSelect = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      hideSelectAll: true,
      radio: true,
      onRadioSelect: (row) => console.log(`Row clicked: ${row.id}`),
      initialState: {
        selectedRowIds: {
          3: true,
        },
      },
    },
    useSelectRows,
    useStickyColumn
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const HideSelectAll = () => {
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

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const SortableColumns = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
    },
    useSortableColumns
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const DatagridActionsToolbar = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      DatagridActions,
      DatagridBatchActions,
      rowSizeProps: {
        labels: {
          rowSizeLabels: {
            xl: 'Extra large',
            lg: 'Large (default)',
            md: 'Medium',
            sm: 'Small',
            xs: 'Extra small',
          },
          legendText: 'Row height',
        },
      },
    },
    useSelectRows
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const SelectItemsInAllPages = () => {
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
      <Datagrid datagridState={{ ...datagridState }} />
      <h3>Doc in Notes...</h3>
      <p>{`Are all entries selected across all pages? - ${areAllSelected}`}</p>
    </>
  );
};
SelectItemsInAllPages.story = SelectAllWitHToggle;

export const CustomizingColumns = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      className: `c4p--datagrid__hidden--columns`,
      data,
      initialState: {
        hiddenColumns: ['age'],
        columnOrder: [],
      },
      customizeColumnsProps: {
        onSaveColumnPrefs: (newColDefs) => {
          console.log(newColDefs);
        },
        labels: {
          findColumnPlaceholderLabel: 'Find column',
          resetToDefaultLabel: 'Reset to default',
          customizeModalHeadingLabel: 'Customize display',
          primaryButtonTextLabel: 'Save',
          secondaryButtonTextLabel: 'Cancel',
          instructionsLabel:
            'Deselect columns to hide them. Click and drag the white box to reorder the columns. These specifications will be saved and persist if you leave and return to the data table.',
          iconTooltipLabel: 'Customize columns',
          assistiveTextInstructionsLabel:
            'Press space bar to toggle drag drop mode, use arrow keys to move selected elements.',
          assistiveTextDisabledInstructionsLabel:
            'Reordering columns are disabled because they are filtered currently.',
          selectAllLabel: 'Column name',
        },
      },
      DatagridActions,
      DatagridBatchActions,
    },
    useCustomizeColumns,
    useColumnOrder
  );

  return (
    <>
      <Datagrid datagridState={{ ...datagridState }} />
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
CustomizingColumns.story = CustomizeColumnStory;

export const RowSizeDropdown = () => {
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
      <Datagrid datagridState={{ ...datagridState }} />
    </Wrapper>
  );
};
RowSizeDropdown.story = RowSizeDropdownStory;

export const LeftPanel = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid({
    leftPanel: {
      isOpen: true, // this toggling will happen from datagridActions.
      panelContent: (
        <div className={`${blockClass}__panel-content`}>
          Panel content will go here along with any button interactions
        </div>
      ),
    },
    columns,
    data,
    DatagridActions,
    DatagridBatchActions,
  });

  return (
    <Wrapper>
      <Datagrid datagridState={{ ...datagridState }} />
    </Wrapper>
  );
};
LeftPanel.story = LeftPanelStory;

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

const getBatchActions = () => {
  return [
    {
      label: 'Duplicate',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Add',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Select all',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
      type: 'select_all',
    },
    {
      label: 'Publish to catalog',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Download',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
    },
    {
      label: 'Delete',
      renderIcon: Add16,
      onClick: action('Clicked batch action button'),
      hasDivider: true,
      kind: 'danger',
    },
  ];
};

export const BatchActions = () => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid(
    {
      columns,
      data,
      batchActions: true,
      toolbarBatchActions: getBatchActions(),
      DatagridActions,
      DatagridBatchActions,
    },
    useSelectRows,
    useSelectAllWithToggle
  );

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const DisableSelectRow = () => {
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

  return <Datagrid datagridState={{ ...datagridState }} />;
};

const makeDataWithTwoLines = (length) =>
  range(length).map(() => newPersonWithTwoLines());

export const TopAlignment = () => {
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

  return <Datagrid datagridState={{ ...datagridState }} />;
};

export const StickyActionsColumn = () => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: '',
        accessor: 'actions',
        sticky: 'right',
        width: 60,
        isAction: true,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));
  const [msg, setMsg] = useState('click action menu');
  const onActionClick = (actionId, row) => {
    const { original } = row;
    setMsg(
      `Clicked [${actionId}] on row: <${original.firstName} ${original.lastName}>`
    );
  };

  const datagridState = useDatagrid(
    {
      columns,
      data,
      batchActions: true,
      toolbarBatchActions: getBatchActions(),
      DatagridActions,
      DatagridBatchActions,
      rowActions: [
        {
          id: 'edit',
          itemText: 'Edit',
          onClick: onActionClick,
        },
        {
          id: 'vote',
          itemText: 'Vote',
          onClick: onActionClick,
          shouldHideMenuItem: (row) => row.original.age <= 18,
        },
        {
          id: 'retire',
          itemText: 'Retire',
          onClick: onActionClick,
          disabled: false,
          shouldDisableMenuItem: (row) => row.original.age <= 60,
        },
        {
          id: 'delete',
          itemText: 'Delete',
          hasDivider: true,
          isDelete: true,
          onClick: onActionClick,
        },
      ],
    },
    useStickyColumn,
    useActionsColumn,
    useSelectRows,
    useSelectAllWithToggle
  );
  return (
    <Wrapper>
      <h3>{msg}</h3>
      <Datagrid datagridState={{ ...datagridState }} />
      <p>More details documentation check the Notes section below</p>
    </Wrapper>
  );
};
