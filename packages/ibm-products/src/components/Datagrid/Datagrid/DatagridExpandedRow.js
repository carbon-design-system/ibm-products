/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--datagrid`;

// eslint-disable-next-line react/prop-types
const DatagridExpandedRow =
  (ExpandedRowContentComponent) => (datagridState) => {
    const { row } = datagridState;
    const { expandedContentHeight } = row || {};
    return (
      <div className={`${blockClass}__expanded-row`}>
        <div
          className={`${blockClass}__expanded-row-content`}
          style={{
            height: expandedContentHeight ? expandedContentHeight : null,
          }}
        >
          {ExpandedRowContentComponent(datagridState)}
        </div>
      </div>
    );
  };

export default DatagridExpandedRow;
