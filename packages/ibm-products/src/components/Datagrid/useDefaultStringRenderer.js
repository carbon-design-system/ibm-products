/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import cx from 'classnames';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const useDefaultStringRenderer = (hooks) => {
  const StringRenderer = (tableProps) => (
    <div
      className={cx(`${blockClass}__defaultStringRenderer`, {
        [`${blockClass}__defaultStringRenderer--multiline`]:
          tableProps.column?.multiLineWrap || tableProps?.multiLineWrapAll,
      })}
    >
      {tableProps.value}
    </div>
  );

  const HeaderRenderer = (header, slug) => {
    return (
      <div
        className={cx(`${blockClass}__defaultStringRenderer`, {
          [`${blockClass}__defaultStringRenderer--slug`]:
            slug && React.isValidElement(slug),
        })}
        key={typeof header === 'string' ? header : ''}
      >
        {header}
      </div>
    );
  };

  const visibleColumns = (columns) => {
    const columnsWithDefaultCells = columns.map((column) => ({
      Cell: StringRenderer,
      ...column,
      Header:
        column.HeaderRenderer || HeaderRenderer(column.Header, column.slug),
    }));
    return [...columnsWithDefaultCells];
  };
  hooks.visibleColumns.push(visibleColumns);
};

export default useDefaultStringRenderer;
