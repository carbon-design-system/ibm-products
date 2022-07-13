//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { ArrowsVertical, ArrowUp, ArrowDown } from '@carbon/icons-react';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--add-select-sort`;
const componentName = 'AddSelectSort';

export let AddSelectSort = ({ setSortAttribute, setSortDirection, sortBy }) => {
  const sortByOpts = sortBy
    ? sortBy.reduce((acc, cur) => {
        const opts = [
          {
            id: `${cur}-asc`,
            itemText: (
              <>
                <ArrowUp size={16} />
                {cur}
              </>
            ),
            direction: 'asc',
            attribute: cur,
          },
          {
            id: `${cur}-desc`,
            itemText: (
              <>
                <ArrowDown size={16} />
                {cur}
              </>
            ),
            direction: 'desc',
            attribute: cur,
          },
        ];
        return [...acc, ...opts];
      }, [])
    : [];

  // handlers
  const sortHandler = ({ direction, attribute }) => {
    setSortAttribute(attribute);
    setSortDirection(direction);
  };

  return (
    <div className={blockClass}>
      {sortByOpts.length > 0 && (
        <OverflowMenu
          renderIcon={(props) => <ArrowsVertical size={32} {...props} />}
          flipped
        >
          {sortByOpts.map((opt) => (
            <OverflowMenuItem
              key={opt.id}
              itemText={opt.itemText}
              onClick={() => sortHandler(opt)}
            />
          ))}
        </OverflowMenu>
      )}
    </div>
  );
};

AddSelectSort.propTypes = {
  setSortAttribute: PropTypes.func,
  setSortDirection: PropTypes.func,
  sortBy: PropTypes.array,
};

AddSelectSort.displayName = componentName;
