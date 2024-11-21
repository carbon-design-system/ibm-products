//
// Copyright IBM Corp. 2022, 2023
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import {
  OverflowMenu,
  MenuItem,
  unstable_FeatureFlags as FeatureFlags,
} from '@carbon/react';
import { ArrowsVertical, ArrowUp, ArrowDown } from '@carbon/react/icons';
import { pkg } from '../../settings';
import { SortOption } from './types';

const blockClass = `${pkg.prefix}--add-select-sort`;
const componentName = 'AddSelectSort';

export interface AddSelectSortProps {
  setSortAttribute?: (attribute) => void;
  setSortDirection?: (direction) => void;
  sortBy?: Array<string>;
  sortByLabel?: string;
}

export const AddSelectSort = ({
  setSortAttribute,
  setSortDirection,
  sortBy,
  sortByLabel,
}: AddSelectSortProps) => {
  const sortByOpts: SortOption[] = sortBy
    ? sortBy?.reduce((acc: SortOption[], cur: string) => {
        const opts = [
          {
            id: `${cur}-asc`,
            label: cur,
            shortcut: <ArrowUp size={16} />,
            direction: 'asc',
            attribute: cur,
          },
          {
            id: `${cur}-desc`,
            label: cur,
            shortcut: <ArrowDown size={16} />,
            direction: 'desc',
            attribute: cur,
          },
        ];
        return [...acc, ...opts];
      }, [])
    : [];

  // handlers
  const sortHandler = ({ direction, attribute }: SortOption) => {
    setSortAttribute?.(attribute);
    setSortDirection?.(direction);
  };

  return (
    <div className={blockClass}>
      {sortByOpts.length > 0 && (
        <FeatureFlags enableV12Overflowmenu>
          <OverflowMenu
            autoAlign
            menuAlignment="bottom-end"
            renderIcon={(props) => <ArrowsVertical size={32} {...props} />}
            className={`${blockClass}_overflow`}
            aria-label={sortByLabel}
            iconDescription={sortByLabel}
          >
            {sortByOpts.map((opt) => {
              return (
                <MenuItem
                  className={`${blockClass}_overflow-item`}
                  shortcut={opt?.shortcut}
                  key={opt?.id}
                  label={opt?.label}
                  onClick={() => sortHandler(opt)}
                />
              );
            })}
          </OverflowMenu>
        </FeatureFlags>
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
