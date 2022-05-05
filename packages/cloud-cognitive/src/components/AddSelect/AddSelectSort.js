//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import { ArrowsVertical32, ArrowUp16, ArrowDown16 } from '@carbon/icons-react';
import { pkg } from '../../settings';
const componentName = 'AddSelect';

export let AddSelectSort = ({ items, setSortAttribute, setSortDirection }) => {
  const blockClass = `${pkg.prefix}--add-select`;

  // sorting
  const sortBy = items.find((item) => item.sortBy)?.sortBy;
  const sortByOpts = sortBy
    ? sortBy.reduce((acc, cur) => {
        const opts = [
          {
            id: `${cur}-asc`,
            itemText: (
              <>
                <ArrowUp16 />
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
                <ArrowDown16 />
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
      <div className={`${blockClass}-search-bar`}>
        <div className={`${blockClass}-sort-filter`}>
          {sortByOpts.length > 0 && (
            <OverflowMenu
              renderIcon={ArrowsVertical32}
              className={`${blockClass}-overflow`}
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
      </div>
    </div>
  );
};

AddSelectSort.propTypes = {
  items: PropTypes.array,
  setSortAttribute: PropTypes.func,
  setSortDirection: PropTypes.func,
};

AddSelectSort.displayName = componentName;
