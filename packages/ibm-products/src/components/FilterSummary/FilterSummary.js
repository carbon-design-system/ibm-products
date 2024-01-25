/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Button } from 'carbon-components-react';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TagSet } from '../TagSet';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

const blockClass = `${pkg.prefix}--filter-summary`;

let FilterSummary = React.forwardRef(
  (
    {
      className = '',
      clearFiltersText = 'Clear filters',
      clearFilters,
      filters,
      renderLabel = null,
      overflowType = 'default',
      clearButtonInline = true,
      ...rest
    },
    ref
  ) => {
    const filterSummaryId = `${blockClass}__${uuidv4()}`;
    const tagFilters = filters.map(({ key, value, ...rest }) => ({
      ...rest,
      type: 'gray',
      label: renderLabel?.(key, value) ?? `${key}: ${value}`,
      title: clearFiltersText,
    }));

    const filterSummaryClearButton = useRef();
    const filterSummaryRef = useRef();
    const localRef = ref || filterSummaryRef;
    return (
      <div
        {...getDevtoolsProps(componentName)}
        id={filterSummaryId}
        {...rest}
        ref={localRef}
        className={cx([blockClass, className])}
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
          containingElementRef={localRef}
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
