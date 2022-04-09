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

// eslint-disable-next-line react/prop-types
const DatagridExpandedRow =
  (PreviousRowRenderer, ExpandedRowContentComponent) => (datagridState) => {
    const { row } = datagridState;
    if (!row.isExpanded) {
      return PreviousRowRenderer(datagridState);
    }
    return (
      <div className={`${blockClass}__expanded-row`}>
        {PreviousRowRenderer(datagridState)}
        {ExpandedRowContentComponent(datagridState)}
      </div>
    );
  };

export default DatagridExpandedRow;
