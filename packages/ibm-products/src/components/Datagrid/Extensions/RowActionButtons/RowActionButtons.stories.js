/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Add16, Edit16, TrashCan16, Checkmark16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import {
  getStoryTitle,
  prepareStory,
} from '../../../../global/js/utils/story-helper';
import {
  Datagrid,
  useDatagrid,
  useStickyColumn,
  useActionsColumn,
  useSelectRows,
  useSelectAllWithToggle,
} from '../../index';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { DatagridActions } from '../../utils/DatagridActions';
import { DatagridPagination } from '../../utils/DatagridPagination';
import { makeData } from '../../utils/makeData';
import { ARG_TYPES } from '../../utils/getArgTypes';
import { pkg } from '../../../../settings';

export default {
  title: `${getStoryTitle(Datagrid.displayName)}/Extensions/RowActionButtons`,
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
};

const RowActionButtons = ({ ...args }) => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: '',
        accessor: 'actions',
        sticky: 'right',
        isAction: true,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));
  const rows = React.useMemo(() => data, [data]);

  // Warnings are ordinarily silenced in storybook, add this to test.
  pkg._silenceWarnings(false);
  // Enable feature flag for `useActionsColumn` hook
  pkg.feature['Datagrid.useActionsColumn'] = true;
  pkg._silenceWarnings(true);

  const datagridState = useDatagrid(
    {
      columns,
      data: rows,
      initialState: {
        pageSize: 10,
        pageSizes: [5, 10, 25, 50],
      },
      DatagridActions,
      DatagridPagination,
      ...args.defaultGridProps,
    },
    useStickyColumn,
    useActionsColumn
  );

  return <Datagrid datagridState={datagridState} />;
};

const RowActionButtonTemplateWrapper = ({ ...args }) => {
  return <RowActionButtons defaultGridProps={{ ...args }} />;
};

const rowActionButtonsProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
  useDenseHeader: sharedDatagridProps.useDenseHeader,
  rowActions: sharedDatagridProps.rowActions,
};
const basicUsageStoryName = 'With row action buttons';
export const RowActionButtonsUsageStory = prepareStory(
  RowActionButtonTemplateWrapper,
  {
    storyName: basicUsageStoryName,
    argTypes: {
      gridTitle: ARG_TYPES.gridTitle,
      gridDescription: ARG_TYPES.gridDescription,
      useDenseHeader: ARG_TYPES.useDenseHeader,
      rowActions: ARG_TYPES.rowActions,
    },
    args: {
      ...rowActionButtonsProps,
      featureFlags: ['Datagrid.useActionsColumn'],
    },
  }
);

const manyRowActionButtonsProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
  useDenseHeader: sharedDatagridProps.useDenseHeader,
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
};
const manyRowActionButtonsStoryName = 'With many row action buttons';
export const ManyRowActionButtonsUsageStory = prepareStory(
  RowActionButtonTemplateWrapper,
  {
    storyName: manyRowActionButtonsStoryName,
    argTypes: {
      gridTitle: ARG_TYPES.gridTitle,
      gridDescription: ARG_TYPES.gridDescription,
      useDenseHeader: ARG_TYPES.useDenseHeader,
      rowActions: ARG_TYPES.rowActions,
    },
    args: {
      ...manyRowActionButtonsProps,
    },
  }
);

const RowActionButtonsBatchActions = ({ ...args }) => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: '',
        accessor: 'actions',
        sticky: 'right',
        width: 96,
        isAction: true,
      },
    ],
    []
  );
  const [data] = useState(makeData(10));
  const rows = React.useMemo(() => data, [data]);

  const datagridState = useDatagrid(
    {
      columns,
      data: rows,
      initialState: {
        pageSize: 10,
        pageSizes: [5, 10, 25, 50],
      },
      DatagridActions,
      DatagridPagination,
      ...args.defaultGridProps,
    },
    useStickyColumn,
    useActionsColumn,
    useSelectRows,
    useSelectAllWithToggle
  );

  return <Datagrid datagridState={datagridState} />;
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

const RowActionButtonBatchTemplateWrapper = ({ ...args }) => {
  return <RowActionButtonsBatchActions defaultGridProps={{ ...args }} />;
};

const rowActionButtonsBatchActionsProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
  useDenseHeader: sharedDatagridProps.useDenseHeader,
  rowActions: sharedDatagridProps.rowActions,
  toolbarBatchActions: getBatchActions(),
  batchActions: true,
};
const rowActionButtonsBatchActionsStoryName =
  'With row action buttons and batch actions';
export const RowActionButtonsBatchActionsUsageStory = prepareStory(
  RowActionButtonBatchTemplateWrapper,
  {
    storyName: rowActionButtonsBatchActionsStoryName,
    argTypes: {
      gridTitle: ARG_TYPES.gridTitle,
      gridDescription: ARG_TYPES.gridDescription,
      useDenseHeader: ARG_TYPES.useDenseHeader,
      rowActions: ARG_TYPES.rowActions,
      batchActions: ARG_TYPES.batchActions,
    },
    args: {
      ...rowActionButtonsBatchActionsProps,
    },
  }
);
