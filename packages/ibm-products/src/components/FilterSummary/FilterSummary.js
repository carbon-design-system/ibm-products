/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Button } from '@carbon/react';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TagSet } from '../TagSet';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--filter-summary`;

let FilterSummary = React.forwardRef(
  (
    {
      className = '',
      clearFiltersText = 'Clear filters',
      clearFilters = () => {},
      filters = [],
      renderLabel = null,
      overflowType = 'default',
    },
    ref
  ) => {
    const tagFilters = filters.map(({ key, value, ...rest }) => {
      return {
        ...rest,
        type: 'gray',
        label: renderLabel?.(key, value) ?? `${key}: ${value}`,
      };
    });

    return (
      <div ref={ref} className={cx([blockClass, className])}>
        <TagSet
          allTagsModalSearchLabel="Search all tags"
          allTagsModalSearchPlaceholderText="Search all tags"
          allTagsModalTitle="All tags"
          showAllTagsLabel="View all tags"
          tags={tagFilters}
          overflowType={overflowType}
        />
        <Button kind="ghost" size="sm" onClick={clearFilters}>
          {clearFiltersText}
        </Button>
      </div>
    );
  }
);

const componentName = 'FilterSummary';
FilterSummary.displayName = componentName;

FilterSummary.propTypes = {
  className: PropTypes.string,
  clearFilters: PropTypes.func.isRequired,
  clearFiltersText: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  overflowType: PropTypes.oneOf(['default', 'tag']),
  renderLabel: PropTypes.func,
};

export default FilterSummary;
