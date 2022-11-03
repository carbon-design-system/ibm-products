/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { range, makeData, newPersonWithTwoLines } from './utils/makeData';
import { StatusIcon } from '../StatusIcon';

import { getStoryTitle } from '../../global/js/utils/story-helper';

import { action } from '@storybook/addon-actions';

import {
  Activity16,
  Restart16,
  Download16,
  Filter16,
  Add16,
} from '@carbon/icons-react';
import {
  DataTable,
  Button,
  DatePicker,
  DatePickerInput,
  TextInput,
  Dropdown,
  Checkbox,
} from 'carbon-components-react';
import {
  Datagrid,
  useDatagrid,
  useInfiniteScroll,
  useRowIsMouseOver,
  useSelectRows,
  useSortableColumns,
  useDisableSelectRows,
  useSelectAllWithToggle,
  useStickyColumn,
  useActionsColumn,
  useFiltering,
} from '.';

import { SelectAllWitHToggle, LeftPanelStory } from './Datagrid.stories';
import mdx from './Datagrid.mdx';

import { pkg } from '../../settings';

import styles from './_storybook-styles.scss';
import { DatagridActions } from './utils/DatagridActions';
import { DatagridPagination } from './utils/DatagridPagination';
import { Wrapper } from './utils/Wrapper';
import { ButtonMenu, ButtonMenuItem } from '../ButtonMenu';
import { FilterFlyout } from './Datagrid/addons/Filtering';

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
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Joined',
    accessor: 'joined',
    Cell: ({ cell: { value } }) => <span>{value.toLocaleDateString()}</span>,
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
  const emptyStateDescription = 'Description explaining why the table is empty';
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
      virtualHeight: 540,
      emptyStateTitle: 'Empty state title',
      emptyStateDescription: 'Description explaining why the table is empty',
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

export const Filtering = () => {
  const headers = [
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
      filter: 'number',
      width: 60,
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    // Shows the date filter example
    {
      Header: 'Joined',
      accessor: 'joined',
      filter: 'date',
      Cell: ({ cell: { value } }) => <span>{value.toLocaleDateString()}</span>,
    },
    // Shows the radio button filter example
    {
      Header: 'Password strength',
      accessor: 'passwordStrength',
      filter: 'checkbox',
      Cell: ({ cell: { value } }) => {
        const iconProps = {
          size: 'sm',
          theme: 'light',
          kind: value,
          iconDescription: value,
        };

        return (
          <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <StatusIcon {...iconProps} />
            {iconProps.iconDescription}
          </span>
        );
      },
    },
  ];

  const columns = React.useMemo(() => headers, []);
  const [data] = useState(makeData(100));

  const FilterDatagridActions = (datagridState) => {
    const {
      selectedFlatRows,
      setGlobalFilter,
      CustomizeColumnsButton,
      RowSizeDropdown,
      rowSizeDropdownProps,
      useDenseHeader,
      getFilterFlyoutProps,
      applyFilters,
    } = datagridState;

    /** State for filters */
    const [passwordOptions, setPasswordOptions] = useState([
      { label: 'Normal', value: 'normal', selected: false },
      { label: 'Minor warning', value: 'minor-warning', selected: false },
      { label: 'Critical', value: 'critical', selected: false },
    ]);

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

    const handlePasswordStrengthChange = (isSelected, id) => {
      const passwordOptionsCopy = [...passwordOptions];
      const option = passwordOptionsCopy.find((option) => option.label === id);
      option.selected = isSelected;
      setPasswordOptions(passwordOptionsCopy);
    };

    const renderFilterFlyout = useCallback(() => {
      return (
        <FilterFlyout {...getFilterFlyoutProps()}>
          <DatePicker
            datePickerType="range"
            onChange={(value) => {
              applyFilters({ column: 'joined', value });
            }}
          >
            <DatePickerInput
              id="date-picker-input-id-start"
              placeholder="mm/dd/yyyy"
              labelText="Joined start date"
            />
            <DatePickerInput
              id="date-picker-input-id-finish"
              placeholder="mm/dd/yyyy"
              labelText="Joined end date"
            />
          </DatePicker>
          <TextInput
            invalidText="A valid value is required"
            labelText="Visits"
            placeholder="Type a number amount of visits"
            onChange={(event) => {
              applyFilters({
                column: 'visits',
                value: event.target.value,
              });
            }}
          />
          <Dropdown
            id="marital-status-dropdown"
            ariaLabel="Marital status dropdown"
            items={['relationship', 'complicated', 'single']}
            label="Marital status"
            titleText="Marital status"
            onChange={({ selectedItem }) => {
              applyFilters({
                column: 'status',
                value: selectedItem,
              });
            }}
          />
          <fieldset className="bx--fieldset">
            <legend className="bx--label">Password strength</legend>
            {passwordOptions.map((option) => (
              <Checkbox
                key={option.label}
                selected={option.selected}
                labelText={option.label}
                onChange={(isSelected) => {
                  handlePasswordStrengthChange(isSelected, option.label);
                  applyFilters({
                    column: 'passwordStrength',
                    value: passwordOptions,
                  });
                }}
                id={option.label}
              />
            ))}
          </fieldset>
        </FilterFlyout>
      );
    }, []);

    return (
      isNothingSelected &&
      (useDenseHeader && useDenseHeader ? (
        <TableToolbarContent size="sm">
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
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={Filter16}
              iconDescription={'Left panel'}
              onClick={leftPanelClick}
            />
          </div>
          {renderFilterFlyout()}
          <RowSizeDropdown {...rowSizeDropdownProps} />
          <div style={style} className={`${blockClass}__toolbar-divider`}>
            <Button kind="ghost" renderIcon={Add16} iconDescription={'Action'}>
              Ghost button
            </Button>
          </div>

          {CustomizeColumnsButton && (
            <div style={style}>
              <CustomizeColumnsButton />
            </div>
          )}
        </TableToolbarContent>
      ) : (
        <TableToolbarContent>
          <TableToolbarSearch
            size="xl"
            id="columnSearch"
            persistent
            placeHolderText={searchForAColumn}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          {renderFilterFlyout()}
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
          <ButtonMenu label="Primary button" renderIcon={Add16}>
            <ButtonMenuItem
              itemText="Option 1"
              onClick={action(`Click on ButtonMenu Option 1`)}
            />
            <ButtonMenuItem
              itemText="Option 2"
              onClick={action(`Click on ButtonMenu Option 2`)}
            />
            <ButtonMenuItem
              itemText="Option 3"
              onClick={action(`Click on ButtonMenu Option 3`)}
            />
          </ButtonMenu>
        </TableToolbarContent>
      ))
    );
  };

  const datagridState = useDatagrid(
    {
      columns,
      data,
      filterProps: {
        updateMethod: 'batch',
        primaryActionLabel: 'Apply',
        secondaryActionLabel: 'Cancel',
        onFlyoutOpen: () => console.log('onFlyoutOpen'),
        onFlyoutClose: () => console.log('onFlyoutClose'),
      },
      DatagridActions: FilterDatagridActions,
      batchActions: true,
      toolbarBatchActions: getBatchActions(),
    },
    useSelectRows,
    useFiltering
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
