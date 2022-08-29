/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { pkg } from '../../settings';
import cx from 'classnames';
import { InlineEdit } from '../InlineEdit';
import { DatePicker, Dropdown, DatePickerInput } from 'carbon-components-react';
import { prepareProps } from '../../global/js/utils/props-helper';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks) => {
  const addInlineEdit = (props, { cell, instance }) => {
    const { onDataUpdate, rowSize } = instance;

    // Saves the new cell data, onDataUpdate is a required function to be
    // passed to useDatagrid when using useInlineEdit
    const saveCellData = (newValue) => {
      const columnId = cell.column.id;
      const rowIndex = cell.row.index;
      onDataUpdate((prev) =>
        prev.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...prev[rowIndex],
              [columnId]: newValue,
            };
          }
          return row;
        })
      );
    };

    const renderDropdownItem = (item) => {
      const includesIcon = !!item?.icon;
      return includesIcon ? (
        <>
          {React.createElement(item.icon)}
          <span className={cx(`${blockClass}__inline-edit--select-item`)}>
            {item?.text}
          </span>
        </>
      ) : (
        item?.text
      );
    };

    const renderSelectCell = () => {
      const columnInlineEditConfig = cell.column.inlineEdit;
      return (
        <Dropdown
          style={{
            width: cell.column.totalWidth,
          }}
          className={cx(`${blockClass}__inline-edit--select`, {
            [`${blockClass}__inline-edit--select-${rowSize}`]: rowSize,
          })}
          id="datagrid-inline-edit-select"
          label="Dropdown menu options"
          items={columnInlineEditConfig.items}
          initialSelectedItem={cell.value}
          itemToElement={(item) => renderDropdownItem(item)}
          renderSelectedItem={(item) => renderDropdownItem(item)}
          onChange={(item) => saveCellData(item.selectedItem)}
        />
      );
    };

    const renderDateCell = () => {
      const columnInlineEditConfig = cell.column.inlineEdit;
      const datePickerPreparedProps = prepareProps(columnInlineEditConfig, [
        'type',
        'datePickerInputProps',
      ]);
      const datePickerInputProps = columnInlineEditConfig.datePickerInputProps;
      return (
        <DatePicker
          {...datePickerPreparedProps}
          style={{
            width: cell.column.totalWidth,
          }}
          datePickerType="single"
          className={cx(`${blockClass}__inline-edit--date`, {
            [`${blockClass}__inline-edit--date-${rowSize}`]: rowSize,
          })}
          onChange={(newDate) => {
            const newDateObj = newDate[0];
            datePickerPreparedProps?.onChange?.(newDateObj, cell);
            document.activeElement?.blur();
          }}
        >
          <DatePickerInput
            {...datePickerInputProps}
            value={cell.value}
            placeholder={datePickerInputProps.placeholder || 'mm/dd/yyyy'}
            labelText={datePickerInputProps.labelText || 'Set date'}
            id={
              datePickerInputProps.id ||
              `${blockClass}__inline-edit--date-picker--${cell.row.index}`
            }
            hideLabel
          />
        </DatePicker>
      );
    };

    const editOptionItem = instance.columns
      .filter((obj) => obj.id === cell.column.id)
      .map((obj) => obj.inlineEdit?.type)
      .toString();

    return [
      props,
      {
        className: cx({
          [`${blockClass}__cell`]: true,
        }),
        children: (
          <>
            {editOptionItem === 'text' && (
              <InlineEdit
                style={{
                  width: cell.column.totalWidth,
                }}
                className={cx({
                  [`${blockClass}__inline-edit-cell`]: editOptionItem,
                })}
                editDescription="Edit cell"
                onSave={(newValue) => {
                  saveCellData(newValue);
                }}
                onCancel={(value) => {
                  saveCellData(value);
                }}
                cancelDescription="Cancel"
                saveDescription="Save"
                value={cell.value}
              />
            )}
            {/* Render select/dropdown cells */}
            {editOptionItem === 'select' && renderSelectCell()}
            {/* Render date cells */}
            {editOptionItem === 'date' && renderDateCell()}
            {/* Render default cell, if it's column is not inlineEdit */}
            {!editOptionItem && (
              <div
                className={cx(`${blockClass}__defaultStringRenderer`, {
                  [`${blockClass}__defaultStringRenderer--multiline`]:
                    cell.column?.multiLineWrap,
                })}
              >
                {cell.value}
              </div>
            )}
          </>
        ),
      },
    ];
  };
  hooks.getCellProps.push(addInlineEdit);
  hooks.useInstance.push((instance) => {
    Object.assign(instance, {
      withInlineEdit: true,
    });
  });
};

export default useInlineEdit;
