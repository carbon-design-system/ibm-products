/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useLayoutEffect, useState } from 'react';
import {
  DataTable,
  Button,
  OverflowMenu,
  OverflowMenuItem,
  ComposedModal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Dropdown,
} from '@carbon/react';
import { Download, Add, Restart, ChevronDown } from '@carbon/react/icons';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { FilterFlyout } from '../Datagrid/addons/Filtering';

const blockClass = `${pkg.prefix}--datagrid`;
export const DatagridActions = (datagridState) => {
  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
    useDenseHeader,
    filterProps,
    getFilterFlyoutProps,
  } = datagridState;
  const downloadCsv = () => {
    alert('Downloading...');
  };
  const { TableToolbarContent, TableToolbarSearch } = DataTable;

  const refreshColumns = () => {
    alert('refreshing...');
  };

  const searchForAColumn = 'Search';
  const isNothingSelected = selectedFlatRows.length === 0;
  const style = {
    'button:nthChild(1) > span:nthChild(1)': {
      bottom: '-37px',
    },
  };

  const renderFilterFlyout = () =>
    filterProps?.variation === 'flyout' && (
      <FilterFlyout {...getFilterFlyoutProps()} />
    );

  const [modalOpen, setModalOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const mobileToolbar = size < 672 ? true : false;
  const items = ['Option 1', 'Option 2', 'Option 3'];
  return (
    isNothingSelected &&
    (useDenseHeader && useDenseHeader ? (
      <TableToolbarContent size="sm">
        {!mobileToolbar ? (
          <>
            <div style={style}>
              <Button
                kind="ghost"
                hasIconOnly
                tooltipPosition="bottom"
                renderIcon={Download}
                iconDescription={'Download CSV'}
                onClick={downloadCsv}
              />
            </div>
            {renderFilterFlyout()}
            <RowSizeDropdown {...rowSizeDropdownProps} />
            <div style={style} className={`${blockClass}__toolbar-divider`}>
              <Button kind="ghost" renderIcon={Add} iconDescription={'Action'}>
                Ghost button
              </Button>
            </div>

            {CustomizeColumnsButton && (
              <div style={style}>
                <CustomizeColumnsButton />
              </div>
            )}
          </>
        ) : (
          <OverflowMenu ariaLabel="Tools" size="md" flipped>
            <OverflowMenuItem
              itemText="Filter"
              hasDivider
              requireTitle
              onClick={() => setModalOpen(true)}
            />
            <OverflowMenuItem itemText="Export" hasDivider requireTitle />
            <OverflowMenuItem itemText="Settings" hasDivider requireTitle />
            <OverflowMenuItem itemText="Import items" hasDivider requireTitle />
            <OverflowMenuItem itemText="Create" hasDivider requireTitle />
          </OverflowMenu>
        )}
      </TableToolbarContent>
    ) : !mobileToolbar ? (
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
            renderIcon={Restart}
            iconDescription={'Refresh'}
            onClick={refreshColumns}
          />
        </div>
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
            renderIcon={Download}
            iconDescription={'Download CSV'}
            onClick={downloadCsv}
          />
        </div>
        {CustomizeColumnsButton && (
          <div style={style}>
            <CustomizeColumnsButton />
          </div>
        )}
        <ButtonMenu label="Primary button" renderIcon={Add}>
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
    ) : (
      <TableToolbarContent>
        <TableToolbarSearch
          size="xl"
          id="columnSearch"
          persistent
          placeHolderText={searchForAColumn}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        <OverflowMenu
          ariaLabel="Tools"
          size="lg"
          flipped
          renderIcon={ChevronDown}
          className={`${blockClass}__toolbar-menu__trigger`}
          menuOptionsClass={`${blockClass}__toolbar-options`}
        >
          <OverflowMenuItem
            itemText="Filter"
            hasDivider
            requireTitle
            onClick={() => setModalOpen(true)}
          />
          <OverflowMenuItem itemText="Export" hasDivider requireTitle />
          <OverflowMenuItem itemText="Settings" hasDivider requireTitle />
          <OverflowMenuItem itemText="Import items" hasDivider requireTitle />
          <OverflowMenuItem itemText="Create" hasDivider requireTitle />
        </OverflowMenu>
        {modalOpen && (
          <ComposedModal
            size="lg"
            open={modalOpen && modalOpen}
            onClose={() => setModalOpen(false)}
            className={`${blockClass}__mobile-toolbar-modal`}
          >
            <ModalHeader>
              <h4>Filters</h4>
            </ModalHeader>
            <ModalBody>
              <Dropdown
                initialSelectedItem={items[2]}
                items={items}
                titleText="Label"
                id="filter1"
              />
              <Dropdown
                initialSelectedItem={items[2]}
                items={items}
                titleText="Label"
                id="filter2"
              />
              <Dropdown
                initialSelectedItem={items[2]}
                items={items}
                titleText="Label"
                id="filter3"
              />
            </ModalBody>
            <ModalFooter
              primaryButtonText="Apply"
              secondaryButtonText="Cancel"
            />
          </ComposedModal>
        )}
      </TableToolbarContent>
    ))
  );
};
