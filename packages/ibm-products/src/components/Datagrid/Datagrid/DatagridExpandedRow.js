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

    const toggleParentHoverClass = (event, eventType) => {
      if (event?.target?.parentNode?.previousElementSibling) {
        const parentNode = event.target.parentNode.previousElementSibling;
        if (eventType === 'enter') {
          parentNode.classList.add(`${blockClass}__expandable-row--hover`);
        } else {
          parentNode.classList.remove(`${blockClass}__expandable-row--hover`);
        }
      }
    };

    return (
      <tr
        className={`${blockClass}__expanded-row`}
        onMouseEnter={(event) => toggleParentHoverClass(event, 'enter')}
        onMouseLeave={(event) => toggleParentHoverClass(event)}
      >
        <div
          className={`${blockClass}__expanded-row-content`}
          style={{
            height: expandedContentHeight ? expandedContentHeight : null,
          }}
        >
          {ExpandedRowContentComponent(datagridState)}
        </div>
      </tr>
    );
  };

export default DatagridExpandedRow;
