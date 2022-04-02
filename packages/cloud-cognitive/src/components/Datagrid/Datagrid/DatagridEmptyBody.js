/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

const DatagridEmptyBody = (datagridState) => {
  const { EmptyState } = datagridState;

  return <div className={`${blockClass}__empty-state-body`}>{EmptyState}</div>;
};

export default DatagridEmptyBody;
