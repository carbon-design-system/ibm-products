/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Button } from '@carbon/react';
import React, { useRef } from 'react';
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
      clearButtonInline = true,
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

    const filterSummaryId = `filter-summary-test-id`;
    const filterSummaryClearButton = useRef();
    return (
      <div
        ref={ref}
        className={cx([blockClass, className])}
        id={filterSummaryId}
      >
        <TagSet
          allTagsModalSearchLabel="Search all tags"
          allTagsModalSearchPlaceholderText="Search all tags"
          allTagsModalTitle="All tags"
          showAllTagsLabel="View all tags"
          tags={tagFilters}
          overflowType={overflowType}
          className={cx({
            [`${blockClass}__clear-button-inline`]: clearButtonInline,
          })}
          containingElementSelector={`#${filterSummaryId}`}
          measurementOffset={filterSummaryClearButton?.current?.offsetWidth}
        />
        <Button
          kind="ghost"
          size="sm"
          onClick={clearFilters}
          ref={filterSummaryClearButton}
        >
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
  clearButtonInline: PropTypes.bool,
  clearFilters: PropTypes.func.isRequired,
  clearFiltersText: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  overflowType: PropTypes.oneOf(['default', 'tag']),
  renderLabel: PropTypes.func,
};

export default FilterSummary;
