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
import { InlineEditCell } from './Datagrid/addons/InlineEdit/InlineEditCell';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks) => {
  const addInlineEdit = (props, { cell, instance }) => {
    const renderInlineEditComponent = (type) => (
      <InlineEditCell
        config={columnInlineEditConfig}
        tabIndex={-1}
        value={cell.value}
        cell={cell}
        instance={instance}
        type={type}
      />
    );

    const columnInlineEditConfig = cell.column.inlineEdit;
    const inlineEditType = cell.column?.inlineEdit?.type;
    return [
      props,
      {
        className: cx(`${blockClass}__cell`, {
          [`${blockClass}__cell-inline-edit`]: true,
        }),
        role: 'gridcell',
        children: (
          <>
            {inlineEditType === 'text' &&
              renderInlineEditComponent(inlineEditType)}
            {inlineEditType === 'number' &&
              renderInlineEditComponent(inlineEditType)}
            {/* Render default inline edit cell button, if it's column doesn't have an inline edit configuration */}
            {!inlineEditType && (
              <InlineEditCell
                config={columnInlineEditConfig}
                tabIndex={-1}
                value={cell.value}
                cell={cell}
                instance={instance}
                disabled
                nonEditCell
                type="text"
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
