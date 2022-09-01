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
import { InlineEditText } from './Datagrid/addons/InlineEdit/InlineEditText';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks) => {
  const addInlineEdit = (props, { cell, instance }) => {
    const editOptionItem = instance.columns
      .filter((obj) => obj.id === cell.column.id)
      .map((obj) => obj.inlineEdit?.type)
      .toString();

    const columnInlineEditConfig = cell.column.inlineEdit;
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
            {/* Render default inline edit cell button, if it's column doesn't have an inline edit configuration */}
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
