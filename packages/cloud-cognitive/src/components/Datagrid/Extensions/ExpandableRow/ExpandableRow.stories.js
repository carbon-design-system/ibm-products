/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Edit16, TrashCan16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import {
  getStoryTitle,
  prepareStory,
} from '../../../../global/js/utils/story-helper';
import { Datagrid, useDatagrid, useExpandedRow } from '../../index';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { DatagridActions } from '../../utils/DatagridActions';
import { DatagridPagination } from '../../utils/DatagridPagination';
import { makeData } from '../../utils/makeData';
import { ARG_TYPES } from '../../utils/getArgTypes';
import { pkg } from '../../../../settings';

export default {
  title: `${getStoryTitle(Datagrid.displayName)}/Extensions/ExpandableRow`,
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
  },
  {
    Header: 'Visits',
    accessor: 'visits',
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
  expandedContentAlign: 'flex-start',
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
  expandedContentHeight: 96,
};

const ExpandedRows = ({ ...args }) => {
  const expansionRenderer = ({ row, expandedContentAlign }) => {
    console.log(row);
    return (
      <div
        className="expanded-content"
        style={{ justifyContent: `${expandedContentAlign}` }}
      >
        <div className="expanded-content__child">
          <h5 className="expanded-content__title">Details</h5>
          <div className="expanded-content__row">
            <span>Date created</span>
            <span>
              {new Date(2023, 0, 0, 0, 0, 0, 0).toUTCString().slice(0, -4)}
            </span>
          </div>
          <div className="expanded-content__row">
            <span>User IP address</span>
            <span>10.123.11/29</span>
          </div>
          <div className="expanded-content__row">
            <span>User IP address</span>
            <span>10.123.11/29</span>
          </div>
          <div className="expanded-content__row">
            <span>IBM IP address</span>
            <span>10.123.20/29</span>
          </div>
          <div className="expanded-content__row">
            <span>BGP ASN</span>
            <span>63888</span>
          </div>
          <div className="expanded-content__row">
            <span>IBM ASN</span>
            <span>12733</span>
          </div>
          <div className="expanded-content__row">
            <span>Router</span>
            <span>ZCV-DRK-TZ03</span>
          </div>
        </div>
        <div className="expanded-content__child">
          <h5 className="expanded-content__title">Provision status</h5>
          <div className="expanded-content__row">
            <span>Case #0001 created by RJ Smithson on 02/02/2023 9:30</span>
          </div>
        </div>
      </div>
    );
  };
  const columns = React.useMemo(() => [...defaultHeader.slice(0, 6)], []);
  const [data] = useState(makeData(10));
  const rows = React.useMemo(() => data, [data]);

  // Warnings are ordinarily silenced in storybook, add this to test.
  pkg._silenceWarnings(false);
  // Enable feature flag for `useExpandedRow` hook
  pkg.feature['Datagrid.useExpandedRow'] = true;
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
      ExpandedRowContentComponent: expansionRenderer,
      ...args.defaultGridProps,
    },
    useExpandedRow
  );

  return <Datagrid datagridState={datagridState} />;
};

const BasicTemplateWrapper = ({ ...args }) => {
  return <ExpandedRows defaultGridProps={{ ...args }} />;
};

const expandableRowControlProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
  expandedContentAlign: sharedDatagridProps.expandedContentAlign,
};
const expandableRowStoryName = 'With expandable row';
export const ExpandableRowStory = prepareStory(BasicTemplateWrapper, {
  storyName: expandableRowStoryName,
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    expandedContentAlign: ARG_TYPES.expandedContentAlign,
  },
  args: {
    ...expandableRowControlProps,
    featureFlags: ['Datagrid.useExpandedRow'],
  },
});
