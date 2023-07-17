/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Edit, TrashCan } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import {
  getStoryTitle,
  prepareStory,
} from '../../../../global/js/utils/story-helper';
import { Datagrid, useDatagrid } from '../../index';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { ARG_TYPES } from '../../utils/getArgTypes';

export default {
  title: `${getStoryTitle(Datagrid.displayName)}/Extensions/Skeleton`,
  component: Datagrid,
  parameters: {
    styles,
    docs: { page: mdx },
  },
};

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

const sharedDatagridProps = {
  emptyStateTitle: 'Empty state title',
  emptyStateDescription: 'Description text explaining why table is empty',
  emptyStateSize: 'lg',
  gridTitle: 'Data table title',
  gridDescription: 'Additional information if needed',
  useDenseHeader: false,
  isFetching: true,
  rowSize: 'lg',
  rowSizes: [
    {
      value: 'xs',
      labelText: 'Extra small',
    },
    {
      value: 'sm',
      labelText: 'Small',
    },
    {
      value: 'md',
      labelText: 'Medium',
    },
    {
      value: 'lg',
      labelText: 'Large',
    },
    {
      value: 'xl',
      labelText: 'Extra large',
    },
  ],
  onRowSizeChange: (value) => {
    console.log('row size changed to: ', value);
  },
  rowActions: [
    {
      id: 'edit',
      itemText: 'Edit',
      icon: Edit,
      onClick: action('Clicked row action: edit'),
    },

    {
      id: 'delete',
      itemText: 'Delete',
      icon: TrashCan,
      isDelete: true,
      onClick: action('Clicked row action: delete'),
    },
  ],
};

const BasicUsage = ({ ...args }) => {
  const columns = React.useMemo(() => [...defaultHeader], []);
  const [data] = useState([]);
  const emptyStateTitle = 'Empty state title';
  const emptyStateDescription = 'Description explaining why the table is empty';

  const datagridState = useDatagrid({
    columns,
    data,
    isFetching: true,
    emptyStateDescription,
    emptyStateTitle,
    ...args.defaultGridProps,
  });

  return <Datagrid datagridState={datagridState} />;
};

const BasicTemplateWrapper = ({ ...args }) => {
  return <BasicUsage defaultGridProps={{ ...args }} />;
};

const basicUsageControlProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
  useDenseHeader: sharedDatagridProps.useDenseHeader,
  isFetching: sharedDatagridProps.isFetching,
  rowSize: sharedDatagridProps.rowSize,
  rowSizes: sharedDatagridProps.rowSizes,
  onRowSizeChange: sharedDatagridProps.onRowSizeChange,
};
const basicUsageStoryName = 'With skeleton';
export const DefaultSkeletonStory = prepareStory(BasicTemplateWrapper, {
  storyName: basicUsageStoryName,
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    isFetching: ARG_TYPES.isFetching,
    useDenseHeader: ARG_TYPES.useDenseHeader,
    rowSize: ARG_TYPES.rowSize,
    rowSizes: ARG_TYPES.rowSizes,
    onRowSizeChange: ARG_TYPES.onRowSizeChange,
  },
  args: {
    ...basicUsageControlProps,
  },
});
