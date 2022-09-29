/**
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo } from 'react';
import {
  DataTable,
  Button,
  DatePicker,
  DatePickerInput,
  NumberInput,
  Dropdown,
} from 'carbon-components-react';
import { Download16, Filter16, Add16, Restart16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { pkg } from '../../../settings';
import { ButtonMenu, ButtonMenuItem } from '../../ButtonMenu';
import { FilterFlyout } from '../Datagrid/addons/Filtering';

const blockClass = `${pkg.prefix}--datagrid`;

const handleNumberInput = ({ event, instance, column }) => {
  const { data, onDataUpdate, setFilter } = instance;
  console.log({ column, instance });
  // setFilter(column, (old) => 1);
  // const numberToFilterBy = event.target.value;
  // const dataCopy = [...data];
  // onDataUpdate(dataCopy.filter((d) => d[column] < 50));
};

const FilterFlyoutContent = ({ onDropdownChange }) => (
  <>
    <DatePicker datePickerType="range">
      <DatePickerInput
        id="date-picker-input-id-start"
        placeholder="mm/dd/yyyy"
        labelText="Joined start date"
      />
      <DatePickerInput
        id="date-picker-input-id-finish"
        placeholder="mm/dd/yyyy"
        labelText="Joined end date"
      />
    </DatePicker>
    <NumberInput
      id="tj-input"
      invalidText="Number is not valid"
      label="Number input label"
      step={1}
      onChange={(event) => handleNumberInput({ column: 'visits', event })}
    />
    <Dropdown
      id="marital-status-dropdown"
      ariaLabel="Marital status dropdown"
      items={['relationship', 'complicated', 'single']}
      label="Marital status"
      onChange={(event) => onDropdownChange({ column: 'status', event })}
    />
  </>
);

export const DatagridActions = (datagridState) => {
  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
    useDenseHeader,
    FilterFlyoutButton,
    setFilter,
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
  const isNothingSelected = useMemo(
    () => selectedFlatRows.length === 0,
    [selectedFlatRows]
  );
  const style = {
    'button:nth-child(1) > span:nth-child(1)': {
      bottom: '-37px',
    },
  };

  const handleDropdown = ({ instance, column, event }) => {
    // const { data, onDataUpdate } = instance;
    instance.setFilter(column, event.selectedItem);
    // const stringToFilterBy = event.selectedItem;
    // onDataUpdate(data.filter((d) => d[column] === stringToFilterBy));
  };

  return (
    isNothingSelected &&
    (useDenseHeader && useDenseHeader ? (
      <TableToolbarContent size="sm">
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
        {/* {FilterFlyoutButton && <FilterFlyoutButton />} */}
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
      </TableToolbarContent>
    ) : (
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
          {/* {FilterFlyoutButton && <FilterFlyoutButton />} */}
          <FilterFlyout>
            <FilterFlyoutContent
              handleNumberInput={({ event, column }) =>
                handleNumberInput({ event, instance: datagridState, column })
              }
              onDropdownChange={({ event, column }) =>
                handleDropdown({
                  event,
                  instance: datagridState,
                  column,
                  setFilter,
                })
              }
            />
          </FilterFlyout>
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
    ))
  );
};
