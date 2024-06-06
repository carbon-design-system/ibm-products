/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { JSXElementConstructor, isValidElement } from 'react';
import { pkg } from '../../../settings';
import cx from 'classnames';
import { DataGridState } from '../types';

const blockClass = `${pkg.prefix}--datagrid`;

// eslint-disable-next-line react/prop-types
const DatagridExpandedRow =
  (ExpandedRowContentComponent: JSXElementConstructor<any>) =>
  (datagridState: DataGridState) => {
    const { row } = datagridState;
    const { expandedContentHeight } = row;

    const toggleParentHoverClass = (event, eventType = '') => {
      /* istanbul ignore else */
      if (event?.target?.closest('tr').previousElementSibling) {
        const parentNode = event?.target?.closest('tr').previousElementSibling;
        if (eventType === 'enter') {
          parentNode.classList.add(`${blockClass}__expandable-row--hover`);
        } else {
          parentNode.classList.remove(`${blockClass}__expandable-row--hover`);
        }
      }
    };

    const { key, ..._state } = datagridState;

    return (
      <tr
        className={cx(`${blockClass}__expanded-row`, {
          [`${blockClass}__slug--row`]: isValidElement(row?.original?.slug),
        })}
        onMouseEnter={(event) => toggleParentHoverClass(event, 'enter')}
        onMouseLeave={(event) => toggleParentHoverClass(event)}
      >
        <td className={`${blockClass}__expanded-row-cell-wrapper`}>
          <div
            className={`${blockClass}__expanded-row-content`}
            style={{
              height: expandedContentHeight && expandedContentHeight,
            }}
          >
            <ExpandedRowContentComponent key={key} {..._state} />
          </div>
        </td>
      </tr>
    );
  };

export default DatagridExpandedRow;
