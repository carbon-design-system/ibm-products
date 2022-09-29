//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { ArrowsVertical, ArrowUp, ArrowDown } from '@carbon/react/icons';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--add-select-sort`;
const componentName = 'AddSelectSort';

export let AddSelectSort = ({
  setSortAttribute,
  setSortDirection,
  sortBy,
  sortByLabel,
}) => {
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
          className={`${blockClass}_overflow`}
          flipped
          ariaLabel={sortByLabel}
        >
          {sortByOpts.map((opt) => (
            <OverflowMenuItem
              className={`${blockClass}_overflow-item`}
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
  sortByLabel: PropTypes.string,
};

AddSelectSort.displayName = componentName;
