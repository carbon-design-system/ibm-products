/**
 * @file Data table pagination stories.
 * @copyright IBM Security 2019 - 2021
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  DataTable,
  DataTablePagination,
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarContent,
} from '../../..';

import { components } from '../../../../.storybook';
import Button from '../../Button';
import IconButton from '../../IconButton';
import Search from '../../Search';
import {
  headers,
  isSelectable,
  isSortable,
  missingDataCharacter,
  rows,
  pageSizes,
  pageSize,
  page,
} from '../_mocks_';
import { Grid } from 'carbon-components-react';

import { InlineNotification, NotificationActionButton } from '../../..';
const label = 'Add new row';

const render = ({
  rows,
  headers,
  getBatchActionProps,
  getHeaderProps,
  getSelectionProps,
  onInputChange,
  selectedRows,
}) => (
  <TableContainer>
    <TableBatchActions {...getBatchActionProps()}>
      <TableBatchAction onClick={() => action('onClick')(selectedRows)}>
        TableBatchAction
      </TableBatchAction>
    </TableBatchActions>
    <TableToolbar>
      <TableToolbarContent>
        <Search onChange={onInputChange} placeholder="Search" collapsible />
        <IconButton
          label={label}
          onClick={action(label)}
          width={16}
          height={16}
          name="settings"
          size="lg"
        />
        <Button onClick={action(label)} kind="primary">
          Add new
        </Button>
      </TableToolbarContent>
    </TableToolbar>
    <Table>
      {headers && (
        <TableHead>
          <TableRow>
            <TableSelectAll {...getSelectionProps()} />
            {headers.map((header) => (
              <TableHeader key={header.id} {...getHeaderProps({ header })}>
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
      )}

      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableSelectRow {...getSelectionProps({ row })} />
            {row.cells.map((cell) => (
              <TableCell key={cell.id}>
                {cell.value ? cell.value : missingDataCharacter}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const renderWithoutHeaders = (props) => render({ ...props, headers: null });

const dataTableProps = {
  headers,
  isSelectable,
  isSortable,
  missingDataCharacter,
  rows,
};

const dataTablePaginationProps = {
  ...dataTableProps,
  page,
  pageSize,
  pageSizes,
  totalItems: rows.length,
};

storiesOf(components('DataTablePagination#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://react.carbondesignsystem.com/?path=/story/components-pagination--multiple-pagination-components"
            rel="noopener noreferrer"
            target="_blank"
          >
            More info
          </NotificationActionButton>
        }
        kind="info"
        subtitle="Component no longer supported. The component will remain available, but plan to migrate to the component replacement."
        title=""
        hideCloseButton
      />
      <Grid>
        <Story />
      </Grid>
    </>
  ))
  .add('pagination data table', () => {
    DataTablePagination.__docgenInfo = {
      ...DataTablePagination.__docgenInfo,
      props: {
        ...DataTablePagination.__docgenInfo.props,
        ...DataTable.__docgenInfo.props,
      },
    };

    return <DataTablePagination {...dataTablePaginationProps} />;
  })
  .add(`pagination data table with backend data`, () => {
    function sliceRows({ page, pageSize }) {
      const start = pageSize * (page - 1);
      const end = start + pageSize;
      return rows.slice(start, end);
    }
    class MockDataProvider extends React.Component {
      state = {
        resultSet: sliceRows({ page, pageSize }),
      };

      fetchPage = ({ page, pageSize }) => {
        setTimeout(() => {
          this.setState({
            resultSet: sliceRows({ page, pageSize }),
          });
        }, 1000);
      };

      render() {
        const { resultSet } = this.state;
        return (
          <DataTablePagination
            {...dataTablePaginationProps}
            rows={resultSet}
            useBackendPagination
            onChange={this.fetchPage}
          />
        );
      }
    }

    MockDataProvider.displayName = 'DataTablePagination';
    MockDataProvider.__docgenInfo = {
      ...DataTablePagination.__docgenInfo,
      props: {
        ...DataTablePagination.__docgenInfo.props,
        ...DataTable.__docgenInfo.props,
      },
    };
    MockDataProvider.defaultProps = DataTablePagination.defaultProps;

    return <MockDataProvider />;
  })

  .add('render custom pagination', () => {
    DataTablePagination.__docgenInfo = {
      ...DataTablePagination.__docgenInfo,
      props: {
        ...DataTablePagination.__docgenInfo.props,
        ...DataTable.__docgenInfo.props,
      },
    };

    return (
      <DataTablePagination {...dataTablePaginationProps} render={render} />
    );
  })
  .add('render custom pagination without headers', () => {
    DataTablePagination.__docgenInfo = {
      ...DataTablePagination.__docgenInfo,
      props: {
        ...DataTablePagination.__docgenInfo.props,
        ...DataTable.__docgenInfo.props,
      },
    };

    return (
      <DataTablePagination
        {...dataTablePaginationProps}
        render={renderWithoutHeaders}
      />
    );
  });
