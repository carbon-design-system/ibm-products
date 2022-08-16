/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useLayoutEffect} from 'react';
import { 
  DataTable, 
  Button, 
  OverflowMenu, 
  OverflowMenuItem,
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Dropdown
} from 'carbon-components-react';
import { Download16, 
  Filter16, 
  Add16, 
  Restart16, 
  ChevronDown16
} from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';

const blockClass = `${pkg.prefix}--datagrid`;
export const DatagridActions = (datagridState) => {
  
  // return (
  //   isNothingSelected &&
  //   (useDenseHeader && useDenseHeader ? (
  //     <TableToolbarContent size="sm">
  //       <div style={style}>
  //         <Button
  //           kind="ghost"
  //           hasIconOnly
  //           tooltipPosition="bottom"
  //           renderIcon={Download16}
  //           iconDescription={'Download CSV'}
  //           onClick={downloadCsv}
  //         />
  //       </div>
  //       <div style={style}>
  //         <Button
  //           kind="ghost"
  //           hasIconOnly
  //           tooltipPosition="bottom"
  //           renderIcon={Filter16}
  //           iconDescription={'Left panel'}
  //           onClick={leftPanelClick}
  //         />
  //       </div>
  //       <RowSizeDropdown {...rowSizeDropdownProps} />
  //       <div style={style} className={`${blockClass}__toolbar-divider`}>
  //         <Button kind="ghost" renderIcon={Add16} iconDescription={'Action'}>
  //           Ghost button
  //         </Button>
  //       </div>

  //       {CustomizeColumnsButton && (
  //         <div style={style}>
  //           <CustomizeColumnsButton />
  //         </div>
  //       )}
  //     </TableToolbarContent>
  //   ) : (
  //     <>
  //       <Button
  //         kind="ghost"
  //         hasIconOnly
  //         tooltipPosition="bottom"
  //         renderIcon={Filter16}
  //         iconDescription={'Left panel'}
  //         onClick={leftPanelClick}
  //       />
  //       <TableToolbarContent>
  //         <TableToolbarSearch
  //           size="xl"
  //           id="columnSearch"
  //           persistent
  //           placeHolderText={searchForAColumn}
  //           onChange={(e) => setGlobalFilter(e.target.value)}
  //         />
  //         <RowSizeDropdown {...rowSizeDropdownProps} />
  //         <div style={style}>
  //           <Button
  //             kind="ghost"
  //             hasIconOnly
  //             tooltipPosition="bottom"
  //             renderIcon={Restart16}
  //             iconDescription={'Refresh'}
  //             onClick={refreshColumns}
  //           />
  //         </div>
  //         <div style={style}>
  //           <Button
  //             kind="ghost"
  //             hasIconOnly
  //             tooltipPosition="bottom"
  //             renderIcon={Download16}
  //             iconDescription={'Download CSV'}
  //             onClick={downloadCsv}
  //           />
  //         </div>
  //         {CustomizeColumnsButton && (
  //           <div style={style}>
  //             <CustomizeColumnsButton />
  //           </div>
  //         )}
  //         <ButtonMenu label="Primary button" renderIcon={Add16}>
  //           <ButtonMenuItem
  //             itemText="Option 1"
  //             onClick={action(`Click on ButtonMenu Option 1`)}
  //           />
  //           <ButtonMenuItem
  //             itemText="Option 2"
  //             onClick={action(`Click on ButtonMenu Option 2`)}
  //           />
  //           <ButtonMenuItem
  //             itemText="Option 3"
  //             onClick={action(`Click on ButtonMenu Option 3`)}
  //           />
  //         </ButtonMenu>
  //       </TableToolbarContent>
  //     </>
  //   ))
  // );

  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
    useDenseHeader,
  } = datagridState;
  const downloadCsv = () => {
    alert('Downloading...');
  };
  const { TableToolbarContent, TableToolbarSearch } = DataTable;

  const refreshColumns = () => {
    alert('refreshing...');
  };
  const leftPanelClick = () => {
    alert('open/close left panel...');
  };
  const searchForAColumn = 'Search';
  const isNothingSelected = selectedFlatRows.length === 0;
  const style = {
    'button:nthChild(1) > span:nthChild(1)': {
      bottom: '-37px',
    },
  };

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
                renderIcon={Download16}
                iconDescription={'Download CSV'}
                onClick={downloadCsv}
              />
            </div>
            <div style={style}>
              <Button
                kind="ghost"
                hasIconOnly
                tooltipPosition="bottom"
                renderIcon={Filter16}
                iconDescription={'Left panel'}
                onClick={leftPanelClick}
              />
            </div>
            <RowSizeDropdown {...rowSizeDropdownProps} />
            <div style={style} className={`${blockClass}__toolbar-divider`}>
              <Button kind="ghost" renderIcon={Add16} iconDescription={'Action'}>
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
      <>
        <Button
          kind="ghost"
          hasIconOnly
          tooltipPosition="bottom"
          renderIcon={Filter16}
          iconDescription={'Left panel'}
          onClick={leftPanelClick}
        />
        <TableToolbarContent>
          <TableToolbarSearch
            size="xl"
            id="columnSearch"
            persistent
            placeHolderText={searchForAColumn}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <RowSizeDropdown {...rowSizeDropdownProps} />
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={Restart16}
              iconDescription={'Refresh'}
              onClick={refreshColumns}
            />
          </div>
          <div style={style}>
            <Button
              kind="ghost"
              hasIconOnly
              tooltipPosition="bottom"
              renderIcon={Download16}
              iconDescription={'Download CSV'}
              onClick={downloadCsv}
            />
          </div>
          {CustomizeColumnsButton && (
            <div style={style}>
              <CustomizeColumnsButton />
            </div>
          )}
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
      </>
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
          className={`${blockClass}__toolbar-primary-overflow primary-kind`}
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
