/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Checkmark16, Edit16, TrashCan16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import {
  getStoryTitle,
  prepareStory,
} from '../../../../global/js/utils/story-helper';
import {
  Datagrid,
  useDatagrid,
  useCustomizeColumns,
  useColumnOrder,
  useStickyColumn,
  useActionsColumn,
} from '../../index';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { DatagridActions } from '../../utils/DatagridActions';
import { DatagridPagination } from '../../utils/DatagridPagination';
import { makeData } from '../../utils/makeData';
import { ARG_TYPES } from '../../utils/getArgTypes';
import { CodeSnippet } from 'carbon-components-react';
import { pkg } from '../../../../settings';

export default {
  title: `${getStoryTitle(
    Datagrid.displayName
  )}/Extensions/ColumnCustomization`,
  component: Datagrid,
  parameters: {
    styles,
    docs: { page: mdx },
  },
  argTypes: {
    featureFlags: {
      table: {
        disable: true,
      },
    },
  },
};

const blockClass = `${pkg.prefix}--datagrid`;

const defaultHeader = [
  {
    Header: 'Row Index',
    accessor: (row, i) => i,
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

const sharedDatagridProps = {
  emptyStateTitle: 'Empty state title',
  emptyStateDescription: 'Description text explaining why table is empty',
  emptyStateSize: 'lg',
  gridTitle: 'Data table title',
  gridDescription: 'Additional information if needed',
  useDenseHeader: false,
  rowSize: 'lg',
  rowSizes: [
    {
      value: 'xl',
      labelText: 'Extra large',
    },
    {
      value: 'lg',
      labelText: 'Large',
    },
    {
      value: 'md',
      labelText: 'Medium',
    },
    {
      value: 'xs',
      labelText: 'Small',
    },
  ],
  onRowSizeChange: (value) => {
    console.log('row size changed to: ', value);
  },
  rowActions: [
    {
      id: 'edit',
      itemText: 'Edit',
      icon: Edit16,
      onClick: action('Clicked row action: edit'),
    },

    {
      id: 'delete',
      itemText: 'Delete',
      icon: TrashCan16,
      isDelete: true,
      onClick: action('Clicked row action: delete'),
    },
  ],
  customizeColumnsProps: {
    onSaveColumnPrefs: (newColDefs) => {
      console.log(newColDefs);
    },
    labels: {
      findColumnPlaceholderLabel: 'Find column',
      resetToDefaultLabel: 'Reset to default',
      customizeTearsheetHeadingLabel: 'Customize display',
      primaryButtonTextLabel: 'Save',
      secondaryButtonTextLabel: 'Cancel',
      instructionsLabel:
        'Deselect columns to hide them. Drag rows to change column order. These specifications will be saved if you leave and return to the data table.',
      iconTooltipLabel: 'Customize columns',
      assistiveTextInstructionsLabel:
        'Press space bar to toggle drag drop mode, use arrow keys to move selected elements.',
      assistiveTextDisabledInstructionsLabel:
        'Reordering columns are disabled because they are filtered currently.',
      selectAllLabel: 'Column name',
    },
  },
};

const ColumnCustomizationUsage = ({ ...args }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));

  const datagridState = useDatagrid(
    {
      className: `c4p--datagrid__hidden--columns`,
      columns,
      data,
      initialState: {
        pageSize: 10,
        pageSizes: [5, 10, 25, 50],
        hiddenColumns: ['age'],
        columnOrder: [],
      },
      DatagridActions,
      DatagridPagination,
      ...args.defaultGridProps,
    },
    useCustomizeColumns,
    useColumnOrder
  );

  // Warnings are ordinarily silenced in storybook, add this to test
  pkg._silenceWarnings(false);
  // Enable feature flag for `useCustomizeColumns` hook
  pkg.feature['Datagrid.useCustomizeColumns'] = true;
  pkg._silenceWarnings(true);

  return (
    <>
      <Datagrid datagridState={datagridState} />
      <div className={`${blockClass}-story__hidden-column-id-snippet`}>
        <p>Hidden column ids:</p>
        <CodeSnippet type="multi">
          {JSON.stringify(datagridState.state.hiddenColumns, null, 2)}
        </CodeSnippet>
      </div>
    </>
  );
};

const ColumnCustomizationWrapper = ({ ...args }) => {
  return <ColumnCustomizationUsage defaultGridProps={{ ...args }} />;
};

const columnCustomizationControlProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
  useDenseHeader: sharedDatagridProps.useDenseHeader,
  customizeColumnsProps: sharedDatagridProps.customizeColumnsProps,
};
const columnCustomizationStoryName = 'With column customization';
export const ColumnCustomizationUsageStory = prepareStory(
  ColumnCustomizationWrapper,
  {
    storyName: columnCustomizationStoryName,
    argTypes: {
      gridTitle: ARG_TYPES.gridTitle,
      gridDescription: ARG_TYPES.gridDescription,
      useDenseHeader: ARG_TYPES.useDenseHeader,
      customizeColumnsProps: ARG_TYPES.customizeColumnsProps,
    },
    args: {
      ...columnCustomizationControlProps,
      featureFlags: ['Datagrid.useCustomizeColumns'],
    },
  }
);

const ColumnCustomizationWithFixedColumn = ({ ...args }) => {
  const stickyHeaders = defaultHeader.slice(1, 15);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Row Index',
        accessor: (row, i) => i,
        sticky: 'left',
        id: 'rowIndex', // id is required when accessor is a function.
      },
      ...stickyHeaders,
      {
        Header: '',
        accessor: 'actions',
        sticky: 'right',
        width: 48,
        isAction: true,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));

  // Warnings are ordinarily silenced in storybook, add this to test
  pkg._silenceWarnings(false);
  // Enable feature flag for `useCustomizeColumns` hook
  pkg.feature['Datagrid.useCustomizeColumns'] = true;
  pkg._silenceWarnings(true);

  const datagridState = useDatagrid(
    {
      className: `c4p--datagrid__hidden--columns`,
      columns,
      data,
      initialState: {
        pageSize: 10,
        pageSizes: [5, 10, 25, 50],
        hiddenColumns: ['age'],
        columnOrder: [],
      },
      DatagridActions,
      DatagridPagination,
      rowActions: [
        {
          id: 'edit',
          itemText: 'Edit',
          icon: Edit16,
          onClick: action('Clicked row action: edit'),
        },
        {
          id: 'approve',
          itemText: 'Approve',
          icon: Checkmark16,
          onClick: action('Clicked row action: approve'),
        },
        {
          id: 'delete',
          itemText: 'Delete',
          icon: TrashCan16,
          isDelete: true,
          hasDivider: true,
          onClick: action('Clicked row action: delete'),
        },
      ],
      ...args.defaultGridProps,
    },
    useCustomizeColumns,
    useColumnOrder,
    useStickyColumn,
    useActionsColumn
  );

  return (
    <>
      <Datagrid datagridState={datagridState} />
      <div className={`${blockClass}-story__hidden-column-id-snippet`}>
        <p>Hidden column ids:</p>
        <CodeSnippet type="multi">
          {JSON.stringify(datagridState.state.hiddenColumns, null, 2)}
        </CodeSnippet>
      </div>
    </>
  );
};

const ColumnCustomizationWithFixedWrapper = ({ ...args }) => {
  return <ColumnCustomizationWithFixedColumn defaultGridProps={{ ...args }} />;
};

const columnCustomizationFixedStoryName =
  'With column customization and frozen columns';
export const ColumnCustomizationWithFixedColumnStory = prepareStory(
  ColumnCustomizationWithFixedWrapper,
  {
    storyName: columnCustomizationFixedStoryName,
    argTypes: {
      gridTitle: ARG_TYPES.gridTitle,
      gridDescription: ARG_TYPES.gridDescription,
      useDenseHeader: ARG_TYPES.useDenseHeader,
      customizeColumnsProps: ARG_TYPES.customizeColumnsProps,
    },
    args: {
      ...columnCustomizationControlProps,
      featureFlags: ['Datagrid.useCustomizeColumns'],
    },
  }
);
