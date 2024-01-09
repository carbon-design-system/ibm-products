/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';
import { Button, IconButton } from '@carbon/react';
import { ChevronDown } from '@carbon/react/icons';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TagSet } from '../TagSet';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

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
    const filterSummaryId = `${blockClass}__${uuidv4()}`;
    const tagFilters = filters.map(({ key, value, ...rest }) => {
      return {
        ...rest,
        type: 'gray',
        label: renderLabel?.(key, value) ?? `${key}: ${value}`,
      };
    });

    const filterSummaryClearButton = useRef();
    const viewAllButtonRef = useRef();
    const filterSummaryRef = useRef();
    const localRef = filterSummaryRef || ref;
    const [overflowCount, setOverflowCount] = useState(0);
    const [multiline, setMultiline] = useState(false);

    const handleViewAll = () => {
      if (overflowCount === 0) {
        setMultiline(false);
        return;
      }
      setMultiline(prev => !prev);
    };

    const viewAllWidth = typeof viewAllButtonRef?.current?.offsetWidth === 'undefined' ? 0 : overflowCount > 0 ? 48 : 0;
    const measurementOffset = filterSummaryClearButton?.current?.offsetWidth + viewAllWidth;

    return (
      <div
        ref={localRef}
        className={cx([blockClass, className], {
          [`${blockClass}__expanded`]: multiline,
        })}
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
            containingElementRef={localRef}
            measurementOffset={measurementOffset}
            onOverflowTagChange={overflowTags => setOverflowCount(overflowTags.length)}
            multiline={multiline}
          />
        <Button
          kind="ghost"
          size="sm"
          onClick={clearFilters}
          ref={filterSummaryClearButton}
          className={`${blockClass}__clear-all-button`}
        >
          {clearFiltersText}
        </Button>
        {(overflowCount > 0 || multiline) && (
          <div className={`${blockClass}__view-all--wrapper`}>
            <IconButton
              ref={viewAllButtonRef}
              kind="ghost"
              label={'View all'}
              className={`${blockClass}__view-all--trigger`}
              align="left"
              onClick={handleViewAll}
            >
              <ChevronDown />
            </IconButton>
          </div>
        )}
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
