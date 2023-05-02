/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import { pkg } from '../../settings';
import cx from 'classnames';
import { InlineEditCell } from './Datagrid/addons/InlineEdit/InlineEditCell';
import { warn } from '../../global/js/utils/pconsole';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks, usingEditableCell) => {
  useEffect(() => {
    pkg.checkReportFeatureEnabled('Datagrid.useInlineEdit');
  }, []);

  useEffect(() => {
    if (!usingEditableCell) {
      warn(
        `The 'useInlineEdit' hook is being renamed in Carbon for IBM Products v2 to 'useEditableCell'. You can use this newly renamed hook now or upgrade when moving to v2.`
      );
    }
  }, [usingEditableCell]);

  const addInlineEdit = (props, { cell, instance }) => {
    const columnInlineEditConfig = cell.column.inlineEdit;
    const inlineEditType = cell.column?.inlineEdit?.type;
    const totalInlineEditColumns = instance.columns.filter(
      (item) => item.inlineEdit
    )?.length;

    const renderInlineEditComponent = (type) => (
      <InlineEditCell
        config={columnInlineEditConfig}
        tabIndex={-1}
        value={cell.value}
        cell={cell}
        instance={instance}
        totalInlineEditColumns={totalInlineEditColumns}
        type={type}
      />
    );

    if (cell.column.id === 'spacer') {
      return [
        props,
        {
          className: cx(`${blockClass}__cell`, `${blockClass}__cell--spacer`),
        },
      ];
    }
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
            {inlineEditType === 'selection' &&
              renderInlineEditComponent(inlineEditType)}
            {inlineEditType === 'date' &&
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
                totalInlineEditColumns={totalInlineEditColumns}
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
