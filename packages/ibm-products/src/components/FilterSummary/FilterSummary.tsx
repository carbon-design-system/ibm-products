/**
 * Copyright IBM Corp. 2022, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ForwardedRef, MutableRefObject, useRef, useState } from 'react';
import { Button, IconButton } from '@carbon/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from '@carbon/react/icons';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TagSet } from '../TagSet';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { DURATIONS, EASINGS } from '../../global/js/utils/motionConstants';
import { useWindowResize, usePreviousValue } from '../../global/js/hooks';
import debounce from 'lodash/debounce';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

const blockClass = `${pkg.prefix}--filter-summary`;

export interface Filter {
  key: string;
  value: string;
}
interface FilterSummaryProps {
  className?: string;
  clearButtonInline?: boolean;
  clearFilters: () => void;
  clearFiltersText?: string;
  filters: Filter[];
  overflowType?: 'default' | 'tag';
  renderLabel?: (key, value) => void;
}

type PrevState = {
  multiline?: boolean;
};

const FilterSummary = React.forwardRef(
  (
    {
      className = '',
      clearFiltersText = 'Clear filters',
      clearFilters,
      filters,
      renderLabel,
      overflowType = 'default',
      clearButtonInline = true,
      ...rest
    }: FilterSummaryProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const filterSummaryId = `${blockClass}__${uuidv4()}`;
    const tagFilters = filters.map(({ key, value, ...rest }) => {
      return {
        ...rest,
        type: 'gray',
        label: renderLabel?.(key, value) ?? `${key}: ${value}`,
      };
    });

    const filterSummaryClearButton: MutableRefObject<HTMLDivElement | null> =
      useRef(null);
    const viewAllButtonRef: MutableRefObject<HTMLDivElement | null> =
      useRef(null);
    const filterSummaryRef: MutableRefObject<HTMLDivElement | null> =
      useRef(null);
    const localRef = filterSummaryRef || ref;
    const [overflowCount, setOverflowCount] = useState(0);
    const [multiline, setMultiline] = useState(false);
    const previousState: PrevState =
      usePreviousValue({
        multiline,
      }) || {};

    const handleViewAll = () => {
      if (overflowCount === 0) {
        setMultiline(false);
        return;
      }
      setMultiline((prev) => !prev);
    };

    const viewAllWidth =
      typeof viewAllButtonRef?.current?.offsetWidth === 'undefined'
        ? 0
        : overflowCount > 0
        ? 48
        : 0;
    const measurementOffset =
      (filterSummaryClearButton?.current?.offsetWidth || 0) + viewAllWidth;

    const renderTagSet = (type) => (
      <motion.div
        key={type}
        initial={{
          opacity: 0,
          y: -16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -16,
        }}
        transition={{
          duration: DURATIONS.moderate01,
          ease: EASINGS.productive.entrance,
        }}
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
          onOverflowTagChange={(overflowTags: any) =>
            setOverflowCount(overflowTags?.length)
          }
          multiline={multiline}
        />
      </motion.div>
    );

    useWindowResize(() => {
      const handleFilterSummaryResize = () => {
        if (
          multiline &&
          localRef?.current?.offsetHeight &&
          localRef?.current?.offsetHeight <= 50
        ) {
          setMultiline(false);
        }
      };
      const filterResize = debounce(handleFilterSummaryResize, 500);
      filterResize();
    }, [previousState?.multiline, multiline]);

    return (
      <div
        {...getDevtoolsProps(componentName)}
        id={filterSummaryId}
        {...rest}
        ref={localRef}
        className={cx([blockClass, className], {
          [`${blockClass}__expanded`]: multiline,
        })}
      >
        <AnimatePresence exitBeforeEnter>
          {!multiline && renderTagSet('single')}
          {multiline && renderTagSet('multiline')}
        </AnimatePresence>
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
              size="sm"
            >
              <ChevronDown
                className={cx(`${blockClass}__view-all--chevron`, {
                  [`${blockClass}__view-all--chevron-multiline`]: multiline,
                })}
              />
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
  /**@ts-ignore */
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  overflowType: PropTypes.oneOf(['default', 'tag']),
  renderLabel: PropTypes.func,
};

export default FilterSummary;
