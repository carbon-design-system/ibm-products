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
import { Button } from 'carbon-components-react';
import { InlineEditText } from './Datagrid/addons/InlineEdit/InlineEditText';
import uuidv4 from '../../global/js/utils/uuidv4';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks) => {
  const addInlineEdit = (props, { cell, instance }) => {
    const { onDataUpdate } = instance;

    const editOptionItem = instance.columns
      .filter((obj) => obj.id === cell.column.id)
      .map((obj) => obj.inlineEdit?.type)
      .toString();

    const columnInlineEditConfig = cell.column.inlineEdit;
    // console.log(cell);
    // console.log(cell.row.index);
    return [
      props,
      {
        className: cx(`${blockClass}__cell`, {
          [`${blockClass}__cell-inline-edit`]: true,
        }),
        children: (
          <>
            {editOptionItem === 'text' && (
              <InlineEditText
                config={columnInlineEditConfig}
                tabIndex={-1}
                value={cell.value}
                cell={cell}
                instance={instance}
              />
            )}
            {/* {editOptionItem === 'text' && (
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
            )} */}
            {/* Render default cell, if it's column is not inlineEdit */}
            {!editOptionItem && (
              <InlineEditText
                config={columnInlineEditConfig}
                tabIndex={-1}
                value={cell.value}
                cell={cell}
                instance={instance}
                disabled
                nonEditCell
              />
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
