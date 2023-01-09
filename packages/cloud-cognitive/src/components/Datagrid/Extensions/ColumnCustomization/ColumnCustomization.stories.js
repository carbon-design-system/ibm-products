/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Edit, TrashCan } from '@carbon/react/icons';
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
} from '../../index';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { DatagridActions } from '../../utils/DatagridActions';
import { DatagridPagination } from '../../utils/DatagridPagination';
import { makeData } from '../../utils/makeData';
import { ARG_TYPES } from '../../utils/getArgTypes';
import { CodeSnippet } from '@carbon/react';
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
        'Deselect columns to hide them. Click and drag the white box to reorder the columns. These specifications will be saved and persist if you leave and return to the data table.',
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
    },
  }
);
