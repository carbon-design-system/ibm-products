/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { DataTable, Button } from '@carbon/react';
import { Download, Filter, Add, Restart } from '@carbon/react/icons';
=======
import React, { useLayoutEffect, useState, useContext } from 'react';
import {
  TableToolbarContent,
  TableToolbarSearch,
  Button,
  OverflowMenu,
  OverflowMenuItem,
  ComposedModal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Dropdown,
} from '@carbon/react';
import {
  Download,
  Add,
  Restart,
  ChevronDown,
  Filter,
} from '@carbon/react/icons';
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
import { action } from '@storybook/addon-actions';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { FilterContext } from '../Datagrid/addons/Filtering';

const blockClass = `${pkg.prefix}--datagrid`;
=======
import React, { useLayoutEffect, useMemo, useState } from 'react';
import {
  Button,
  DataTable,
  OverflowMenu,
  OverflowMenuItem,
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Dropdown,
} from 'carbon-components-react';
import {
  Add16,
  ChevronDown16,
  Download16,
  Restart16,
} from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { FilterFlyout } from '../Datagrid/addons/Filtering';

const blockClass = `${pkg.prefix}--datagrid`;

>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
export const DatagridActions = (datagridState) => {
  const { setPanelOpen } = useContext(FilterContext);
  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
    useDenseHeader,
<<<<<<< HEAD
<<<<<<< HEAD
  } = datagridState;
=======
    filterProps,
    getFilterFlyoutProps,
=======
    filterProps,
    getFilterFlyoutProps,
    FilterFlyout,
    data,
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  } = datagridState;

>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
  const downloadCsv = () => {
    alert('Downloading...');
  };
  const refreshColumns = () => {
    alert('refreshing...');
  };
<<<<<<< HEAD
<<<<<<< HEAD
  const leftPanelClick = () => {
    alert('open/close left panel...');
  };
=======

>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  const searchForAColumn = 'Search';
  const isNothingSelected = selectedFlatRows.length === 0;
  const style = {
    'button:nthChild(1) > span:nthChild(1)': {
      bottom: '-37px',
    },
  };

<<<<<<< HEAD
=======

  const searchForAColumn = 'Search';
  const isNothingSelected = useMemo(
    () => selectedFlatRows.length === 0,
    [selectedFlatRows]
  );
  const style = useMemo(
    () => ({
      'button:nthChild(1) > span:nthChild(1)': {
        bottom: '-37px',
      },
    }),
    []
  );

=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  const renderFilterFlyout = () =>
    filterProps?.variation === 'flyout' && (
      <FilterFlyout {...getFilterFlyoutProps()} />
    );

<<<<<<< HEAD
=======
  const renderFilterPanelButton = () =>
    filterProps?.variation === 'panel' && (
      <Button
        kind="ghost"
        hasIconOnly
        tooltipPosition="bottom"
        renderIcon={(props) => <Filter size={16} {...props} />}
        iconDescription={filterProps.panelIconDescription}
        className={`${blockClass}-filter-panel-open-button`}
        onClick={() => setPanelOpen((open) => !open)}
        disabled={data.length === 0}
        tooltipAlignment="start"
      />
    );

>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
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
<<<<<<< HEAD
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
  return (
    isNothingSelected &&
    (useDenseHeader && useDenseHeader ? (
      <TableToolbarContent size="sm">
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {!mobileToolbar ? (
          <>
=======
        {!mobileToolbar ? (
          <>
            {renderFilterPanelButton()}
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
            <div style={style}>
              <Button
                kind="ghost"
                hasIconOnly
                tooltipPosition="bottom"
<<<<<<< HEAD
                renderIcon={Download16}
=======
                renderIcon={Download}
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
                iconDescription={'Download CSV'}
                onClick={downloadCsv}
              />
            </div>
            {renderFilterFlyout()}
<<<<<<< HEAD
            <RowSizeDropdown {...rowSizeDropdownProps} />
            <div style={style} className={`${blockClass}__toolbar-divider`}>
              <Button
                kind="ghost"
                renderIcon={Add16}
                iconDescription={'Action'}
              >
                Ghost button
              </Button>
            </div>

=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
            {CustomizeColumnsButton && (
              <div style={style}>
                <CustomizeColumnsButton />
              </div>
            )}
<<<<<<< HEAD
=======
            <RowSizeDropdown {...rowSizeDropdownProps} />
            <div style={style} className={`${blockClass}__toolbar-divider`}>
              <Button kind="ghost" renderIcon={Add} iconDescription={'Action'}>
                Ghost button
              </Button>
            </div>
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
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
<<<<<<< HEAD
=======
        {renderFilterPanelButton()}
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
        <TableToolbarSearch
          size="xl"
          id="columnSearch"
          persistent
          placeHolderText={searchForAColumn}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        {renderFilterFlyout()}
<<<<<<< HEAD
        <RowSizeDropdown {...rowSizeDropdownProps} />
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
<<<<<<< HEAD
<<<<<<< HEAD
            renderIcon={(props) => <Download size={16} {...props} />}
            iconDescription={'Download CSV'}
            onClick={downloadCsv}
=======
            renderIcon={Restart16}
            iconDescription={'Refresh'}
            onClick={refreshColumns}
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
            renderIcon={Restart}
            iconDescription={'Refresh'}
            onClick={refreshColumns}
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
          />
        </div>
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
<<<<<<< HEAD
<<<<<<< HEAD
            renderIcon={(props) => <Filter size={16} {...props} />}
            iconDescription={'Left panel'}
            onClick={leftPanelClick}
          />
        </div>
        <RowSizeDropdown {...rowSizeDropdownProps} />
        <div style={style} className={`${blockClass}__toolbar-divider`}>
          <Button
            kind="ghost"
            renderIcon={(props) => <Add size={16} {...props} />}
            iconDescription={'Action'}
          >
            Ghost button
          </Button>
        </div>

=======
            renderIcon={Download16}
            iconDescription={'Download CSV'}
            onClick={downloadCsv}
          />
        </div>
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
            renderIcon={Download}
            iconDescription={'Download CSV'}
            onClick={downloadCsv}
          />
        </div>
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
        {CustomizeColumnsButton && (
          <div style={style}>
            <CustomizeColumnsButton />
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <RowSizeDropdown {...rowSizeDropdownProps} />
        <ButtonMenu
          label="Primary button"
          renderIcon={ChevronDown}
          menuOptionsClass={`${blockClass}__toolbar-options`}
        >
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
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
      </TableToolbarContent>
    ) : (
      <TableToolbarContent>
        {renderFilterPanelButton()}
        <TableToolbarSearch
          size="xl"
          id="columnSearch"
          persistent
          placeHolderText={searchForAColumn}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        {renderFilterFlyout()}
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
<<<<<<< HEAD
          </ButtonMenu>
        </TableToolbarContent>
      </>
=======
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
          renderIcon={ChevronDown16}
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
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
=======
          </ComposedModal>
        )}
      </TableToolbarContent>
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
    ))
  );
};
