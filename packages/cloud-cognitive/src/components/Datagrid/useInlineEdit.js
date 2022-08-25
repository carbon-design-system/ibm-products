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
import { Dropdown } from 'carbon-components-react';

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
            {editOptionItem === 'select' && renderSelectCell()}
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
