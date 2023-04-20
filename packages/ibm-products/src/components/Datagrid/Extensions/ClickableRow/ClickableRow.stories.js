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
import {
  Datagrid,
  useDatagrid,
  useColumnRightAlign,
  useColumnCenterAlign,
  useOnRowClick,
} from '../../index';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { DatagridActions } from '../../utils/DatagridActions';
import { DatagridPagination } from '../../utils/DatagridPagination';
import { makeData } from '../../utils/makeData';
import { ARG_TYPES } from '../../utils/getArgTypes';
import { Link } from 'carbon-components-react';
import { pkg } from '../../../../settings';
import cx from 'classnames';
import { SidePanel } from '../../../SidePanel';

export default {
  title: `${getStoryTitle(Datagrid.displayName)}/Extensions/ClickableRow`,
  component: Datagrid,
  parameters: {
    styles,
    docs: { page: mdx },
  },
};

const blockClass = `${pkg.prefix}--datagrid`;
const storyBlockClass = `${pkg.prefix}--datagrid-story`;
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
    Header: 'Doc link',
    accessor: 'doc_link',
    Cell: ({ cell }) => {
      return (
        <Link
          className={`${storyBlockClass}__custom-cell-wrapper`}
          href={cell?.value?.href}
        >
          {cell?.value?.text}
        </Link>
      );
    },
    width: 200,
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 120,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    width: 120,
  },
  {
    Header: 'Bonus',
    accessor: 'bonus',
    width: 120,
    rightAlignedColumn: true,
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
  expandedContentHeight: 96,
};

const ClickableRow = ({ ...args }) => {
  const columns = React.useMemo(() => [...defaultHeader], []);
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
    useColumnCenterAlign,
    useColumnRightAlign
  );

  return <Datagrid datagridState={datagridState} />;
};

const BasicTemplateWrapper = ({ ...args }) => {
  return <ClickableRow defaultGridProps={{ ...args }} />;
};

const clickableRowControlProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
};
const clickableRowItemStoryName = 'With clickable row item';
export const ClickableRowItemStory = prepareStory(BasicTemplateWrapper, {
  storyName: clickableRowItemStoryName,
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
  },
  args: {
    ...clickableRowControlProps,
  },
});

const DataTableSidePanelContent = (selectedRowValues) => {
  const { rowData } = selectedRowValues;

  const SidePanelSectionContent = ({ rowData, columns, sectionTitle }) => {
    const finalData = columns.map((item) => Object.entries(rowData)[item]);
    return (
      <div className={`${blockClass}__side-panel-sections`}>
        <h5 className={`${blockClass}__side-panel-section-header`}>
          {sectionTitle}
        </h5>
        {finalData.map(([label, value], index) => {
          const formattedValue =
            value instanceof Date ? value.toString() : value;
          return (
            <div
              key={index}
              className={`${blockClass}__side-panel-section-inner`}
            >
              <div className={`${blockClass}__side-panel-label-text`}>
                {label} :
              </div>
              <div className={`${blockClass}__side-panel-value`}>
                {formattedValue}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`${blockClass}__side-panel-content`}>
      <SidePanelSectionContent
        sectionTitle="Section title"
        rowData={rowData && rowData}
        columns={[0]}
      />
      <SidePanelSectionContent
        sectionTitle="Personal details"
        rowData={rowData && rowData}
        columns={[1, 2, 3, 4]}
      />
      <SidePanelSectionContent
        sectionTitle="Section title"
        rowData={rowData && rowData}
        columns={[5, 6, 7, 8, 9, 10, 11, 12]}
      />
    </div>
  );
};

const ClickableRowWithPanel = ({ ...args }) => {
  const columns = React.useMemo(
    () => [...defaultHeader.filter((item) => item.accessor !== 'doc_link')],
    []
  );
  const [data] = useState(makeData(10));
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const [rowData, setRowData] = useState({});
  const datagridState = useDatagrid(
    {
      columns,
      data,
      onRowClick: (row, event) => {
        action()(event);
        setOpenSidePanel(true);
        setRowData(row);
      },
      ...args.defaultGridProps,
    },
    useOnRowClick
  );
  return (
    <div
      className={cx(
        openSidePanel
          ? `page-content-wrapper side-panel-open`
          : 'page-content-wrapper'
      )}
    >
      <Datagrid datagridState={{ ...datagridState }} />
      <SidePanel
        selectorPageContent={true && '.page-content-wrapper'} // Only if SlideIn
        open={openSidePanel}
        onRequestClose={() => setOpenSidePanel(false)}
        size={'sm'}
        title={'Title'}
        slideIn
      >
        <DataTableSidePanelContent rowData={rowData && rowData.original} />
      </SidePanel>
    </div>
  );
};

const ClickableRowWithPanelWrapper = ({ ...args }) => {
  return <ClickableRowWithPanel defaultGridProps={{ ...args }} />;
};

const clickableRowStoryName = 'Clickable row with side panel';
export const ClickableRowStory = prepareStory(ClickableRowWithPanelWrapper, {
  storyName: clickableRowStoryName,
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
  },
  args: {
    ...clickableRowControlProps,
  },
});
