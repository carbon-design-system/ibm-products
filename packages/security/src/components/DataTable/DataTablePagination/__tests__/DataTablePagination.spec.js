/**
 * @file Data table and pagination tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';
import { DataTablePagination } from '../../';

import {
  headers,
  isSelectable,
  isSortable,
  missingDataCharacter,
  page,
  pageSize,
  pageSizes,
  rows,
} from '../../_mocks_';

describe('DataTablePagination', () => {
  let dataTablePagination;
  let dataTablePaginationInstance;

  beforeEach(() => {
    dataTablePagination = shallow(
      <DataTablePagination
        rows={rows}
        headers={headers}
        isSelectable={isSelectable}
        isSortable={isSortable}
        missingDataCharacter={missingDataCharacter}
        page={page}
        pageSize={pageSize}
        pageSizes={pageSizes}
      />
    );

    dataTablePaginationInstance = dataTablePagination.instance();
  });

  describe('Rendering', () => {
    it('renders correctly', () => {
      expect(dataTablePagination).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(dataTablePagination.render()).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('validates the state change for `paginationChange`', () => {
      const updateState = state => state * 2;

      const pageValue = updateState(page);
      const pageSizeValue = updateState(pageSize);

      dataTablePaginationInstance.paginationChange({
        page: pageValue,
        pageSize: pageSizeValue,
      });

      const {
        page: updatedPage,
        pageSize: updatedPageSize,
      } = dataTablePagination.state();

      expect(updatedPage).toEqual(pageValue);
      expect(updatedPageSize).toEqual(pageSizeValue);
    });

    it('validates data range for `paginateData`', () => {
      expect(dataTablePaginationInstance.paginateRows(rows).length).toEqual(
        pageSize
      );
    });
  });
});
